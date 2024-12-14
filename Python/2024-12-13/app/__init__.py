from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config') # Take configuration from config.py
    db.init_app(app)
    migrate.init_app(app, db)

    # Register all blueprint routes here
    from app.routes.user_route import user_route
    app.register_blueprint(user_route, url_prefix='/users')

    return app