from gmahechas_erp_common_ms_utils_py import init_env
from gmahechas_erp_common_flaskpy import Flask
from gmahechas_erp_common_ms_3_py import connect_databases
from .routes import init_routes


def create_app():
    app = Flask(__name__)

    with app.app_context():
        init_env()
        connect_databases()
        init_routes()

    return app
