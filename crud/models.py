from app import db


class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    handle = db.Column(db.String(), unique=True)
    joined = db.Column(db.String())

    def __init__(self, name, handle, joined):
        self.name = name
        self.handle = handle
        self.joined = joined

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'handle': self.handle,
            'joined': self.joined
        }


class Blog(db.Model):
    __tablename__ = 'blog'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    author = db.Column(db.Integer, db.ForeignKey(Users.id))
    text = db.Column(db.String())

    def __init__(self, title, author, text):
        self.title = title
        self.author = author
        self.text = text

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'text': self.text
        }
