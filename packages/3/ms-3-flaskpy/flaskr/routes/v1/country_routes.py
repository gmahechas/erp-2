from gmahechas_erp_common_py import response
from gmahechas_erp_common_flaskpy import Blueprint, request, Response
from gmahechas_erp_common_ms_3_py import CountryController

country_blueprint = Blueprint('country', __name__, url_prefix='/country')


@country_blueprint.route('/create/one', methods=['POST'])
def create_one():
    country = CountryController()
    data = response(200, country.create_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return Response(body, mimetype='application/json', status=status_code)


@country_blueprint.route('/update/one', methods=['PUT'])
def update_one():
    country = CountryController()
    data = response(200, country.update_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return Response(body, mimetype='application/json', status=status_code)


@country_blueprint.route('/delete/one', methods=['DELETE'])
def delete_one():
    country = CountryController()
    data = response(200, country.delete_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return Response(body, mimetype='application/json', status=status_code)


@country_blueprint.route('/search/one', methods=['POST'])
def search_one():
    country = CountryController()
    data = response(200, country.search_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return Response(body, mimetype='application/json', status=status_code)


@country_blueprint.route('/search/many', methods=['POST'])
def search_many():
    country = CountryController()
    data = response(200, country.search_many_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return Response(body, mimetype='application/json', status=status_code)
