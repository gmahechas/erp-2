from flask import Blueprint, request
from flaskr.modules.v1.country.country_controller import CountryController
from flaskr.middlewares.validator import validator_middleware
from flaskr.response import response
from flaskr.modules.v1.country.country_schema import create_one_country_schema, update_one_country_schema, delete_one_country_schema, search_one_country_schema, search_many_country_schema

country_blueprint = Blueprint('country', __name__, url_prefix='/country')


@country_blueprint.route('/create/one', methods=['POST'])
@validator_middleware(create_one_country_schema)
def create_one():
    country = CountryController()
    data = response(200, country.create_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return body, status_code


@country_blueprint.route('/update/one', methods=['PUT'])
@validator_middleware(update_one_country_schema)
def update_one():
    country = CountryController()
    data = response(200, country.update_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return body, status_code


@country_blueprint.route('/delete/one', methods=['DELETE'])
@validator_middleware(delete_one_country_schema)
def delete_one():
    country = CountryController()
    data = response(200, country.delete_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return body, status_code


@country_blueprint.route('/search/one', methods=['POST'])
@validator_middleware(search_one_country_schema)
def search_one():
    country = CountryController()
    data = response(200, country.search_one_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return body, status_code


@country_blueprint.route('/search/many', methods=['POST'])
@validator_middleware(search_many_country_schema)
def search_many():
    country = CountryController()
    data = response(200, country.search_many_country(request.json))
    status_code, body = data['statusCode'], data['body']
    return body, status_code
