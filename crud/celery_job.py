from celery import Celery
from flask_sqlalchemy import SQLAlchemy

class FlaskCelery(Celery):

    def _init_(self, *args, **kwargs):

        super(FlaskCelery, self)._init_(*args, **kwargs)
        self.patch_task()

        if 'app' in kwargs:
            self.init_app(kwargs['app'])

    def patch_task(self):
        TaskBase = self.Task
        _celery = self

        class ContextTask(TaskBase):
            abstract = True

            def _call_(self, *args, **kwargs):
                # if flask.has_app_context():
                #     return TaskBase._call_(self, *args, **kwargs)
                # else:
                with _celery.app.app_context():
                    return TaskBase._call_(self, *args, **kwargs)

        self.Task = ContextTask

    def init_app(self, app):
        self.app = app
        self.config_from_object(app.config)


celery = FlaskCelery()
db = SQLAlchemy()