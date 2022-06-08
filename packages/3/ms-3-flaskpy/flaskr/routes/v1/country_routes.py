from erp_common_flaskpy import Blueprint

country_blueprint = Blueprint('country', __name__, url_prefix='/country')


@country_blueprint.route('/create/one', methods=['POST'])
def create_one():
    return 'create/one'


@country_blueprint.route('/update/one', methods=['PUT'])
def update_one():
    return 'update/one'


@country_blueprint.route('/delete/one', methods=['DELETE'])
def delete_one():
    return 'delete/one'


@country_blueprint.route('/search/one', methods=['POST'])
def search_one():
    return 'search/one'


@country_blueprint.route('/search/many', methods=['POST'])
def search_many():
    return 'search/many'
