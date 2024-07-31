from gmahechas_erp_common_flaskpy import current_app, Blueprint
from .v1 import v1_blueprint, init_routes_v1

main_blueprint = Blueprint('rest', __name__, url_prefix='/rest')


def init_routes():
    main_blueprint.register_blueprint(v1_blueprint)
    init_routes_v1()
    current_app.register_blueprint(main_blueprint)
