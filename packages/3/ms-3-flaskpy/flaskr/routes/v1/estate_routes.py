from gmahechas_erp_common_flaskpy import Blueprint
from gmahechas_erp_common_flaskpy import Blueprint, request, Response, authentication_middleware

estate_blueprint = Blueprint('estate', __name__, url_prefix='/estate')


@estate_blueprint.route('/create/one', methods=['POST'])
@authentication_middleware
def create_one():
    return 'create/one'


@estate_blueprint.route('/update/one', methods=['PUT'])
@authentication_middleware
def update_one():
    return 'update/one'


@estate_blueprint.route('/delete/one', methods=['DELETE'])
@authentication_middleware
def delete_one():
    return 'delete/one'


@estate_blueprint.route('/search/one', methods=['POST'])
@authentication_middleware
def search_one():
    return 'search/one'


@estate_blueprint.route('/search/many', methods=['POST'])
@authentication_middleware
def search_many():
    return 'search/many'
