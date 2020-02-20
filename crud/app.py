import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS, cross_origin
import time


app = Flask(__name__)

from celery_job import celery, db

app.app_context().push()
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS(app)



celery.init_app(app)
celery.conf.update(app.config)


from models import Users, Blog
@app.route("/")
def hello():
    return "Hello World!"
    
    
@celery.task
def sleep_and_edit():
    time.sleep(10)
    blogs=Blog.query.all()
    toSave = []
    for blog in blogs:
        blog.title = blog.title + " - updated with Celery"
        toSave.append(blog)
    db.session.bulk_save_objects(toSave)
    db.session.commit()


@app.route('/api/autoedit_blogs', methods=['GET'])
def autoedit_tasks():
    task = sleep_and_edit.delay()
    return jsonify({"response": "Task started"})


@app.route("/api/add")
def add_user():
    name = request.args.get('name')
    handle = request.args.get('handle')
    joined = request.args.get('joined')
    try:
        user = Users(
            name=name,
            handle=handle,
            joined=joined
        )
        db.session.add(user)
        db.session.commit()
        return jsonify({"response": "User added"})
    except Exception as e:
        return(str(e))


@app.route("/api/add_blog", methods=['POST'])
def add_blog():
    content = request.json
    title = content['title']
    author = Users.query.filter_by(handle=content['author']).first().id
    text = content['text']
    try:
        blog = Blog(
            title=title,
            author=author,
            text=text
        )
        db.session.add(blog)
        db.session.commit()
        return jsonify({"response": "Blog added"})
    except Exception as e:
        return(str(e))


@app.route("/api/getall")
def get_all():
    try:
        users = Users.query.all()
        return jsonify([e.serialize() for e in users])
    except Exception as e:
        return(str(e))


@app.route("/api/getUser")
def get_user_by_handle():
    try:
        user = Users.query.filter_by(handle=request.args.get('handle')).first()
        return jsonify(user.serialize())
    except Exception as e:
        return(str(e))


@app.route("/api/get/<id>")
def get_user_by_id(id):
    try:
        user = Users.query.filter_by(id=id).first()
        return jsonify(user.serialize())
    except Exception as e:
        return(str(e))


@app.route("/api/blog/<handle>")
def get_blog_by_user(handle):
    try:
        user = Users.query.filter_by(handle=handle).first()
        blogs = Blog.query.filter_by(author=user.id)
        return jsonify([b.serialize() for b in blogs])
    except Exception as e:
        return(str(e))

@app.route("/api/getBlog")
def get_blog_by_id():
    try:
        blog = Blog.query.filter_by(id=request.args.get('id')).first()
        return jsonify(blog.serialize())
    except Exception as e:
        return(str(e))

@app.route("/api/deleteBlog")
def delete_blog_by_id():
    try:
        Blog.query.filter_by(id=request.args.get('id')).delete()
        db.session.commit()
        return jsonify("Deleted blog with id " + request.args.get('id'))
    except Exception as e:
        return(str(e))

@app.route("/api/update_blog", methods=['POST'])
def update_blog():
    try:
        content = request.json
        blog = Blog.query.get(content['id'])
        blog.title = content['title']
        blog.author = content['author']
        blog.text = content['text']
        db.session.commit()
        return jsonify("Blog updated")
    except Exception as e:
        return(str(e))

if __name__ == '__main__':
    app.run(host='0.0.0.0')
