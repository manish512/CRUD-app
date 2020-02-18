import os
import pytest

from app import app
from app import db as tdb
from models import Users, Blog
import json


@pytest.fixture()
def _test_app():
    app_test = app
    app_test.testing = True
    return app_test.test_client()

@pytest.fixture()
def db():
    return tdb
    
def test_signup(_test_app, db):

    with open('user.json') as json_file:
        json_data = json.load(json_file)

    response = _test_app.get('http://localhost:5000/api/add?name='+ json_data['name'] +'&handle='+ json_data['handle'] +'&joined=' + json_data['joined'])

    assert response.status_code == 200
    assert json_of_response(response) == {"response": 'User added'}

    user=tdb.session.query(Users).filter(Users.handle==json_data['handle']).first()

    assert user.id > 0
    assert user.name == json_data['name']

    tdb.session.delete(user)
    tdb.session.commit()

def json_of_response(response):
    """Decode json from response"""
    return json.loads(response.data.decode('utf8'))