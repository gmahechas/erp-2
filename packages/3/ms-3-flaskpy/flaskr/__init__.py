from gmahechas_erp_common_ms_utils_py import init_env
from gmahechas_erp_common_flaskpy import Flask
from .routes import init_routes


def create_app():
    app = Flask(__name__)

    with app.app_context():
        init_env()
        init_routes()

    return app
