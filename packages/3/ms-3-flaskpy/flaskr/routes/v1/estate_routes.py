from erp_common_flaskpy import Blueprint

estate_blueprint = Blueprint('estate', __name__, url_prefix='/estate')


@estate_blueprint.route('/create/one', methods=['POST'])
def create_one():
    return 'create/one'


@estate_blueprint.route('/update/one', methods=['PUT'])
def update_one():
    return 'update/one'


@estate_blueprint.route('/delete/one', methods=['DELETE'])
def delete_one():
    return 'delete/one'


@estate_blueprint.route('/search/one', methods=['POST'])
def search_one():
    return 'search/one'


@estate_blueprint.route('/search/many', methods=['POST'])
def search_many():
    return 'search/many'
