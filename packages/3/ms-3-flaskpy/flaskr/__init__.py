from flask import Flask
from .env import init_env
from .mongo import init_db
from .vault import init_vault
from .routes import init_routes


def create_app():
    app = Flask(__name__)

    with app.app_context():
        init_env()
        init_db()
        init_vault()
        init_routes()

    return app
