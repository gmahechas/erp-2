from flask import Flask
from .mongo import init_db
from .routes import init_routes


def create_app():
    app = Flask(__name__)

    with app.app_context():
        init_db()
        init_routes()

    return app
