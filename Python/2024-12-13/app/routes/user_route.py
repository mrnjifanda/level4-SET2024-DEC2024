from flask import Blueprint
from app.controllers.user_controller import create_user, get_users

user_route = Blueprint('user_route', __name__)

@user_route.route('/', methods=['GET'])
def list_users():
    return get_users()

@user_route.route('/create', methods=['POST'])
def add_user():
    return create_user()