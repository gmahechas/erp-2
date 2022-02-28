from flask import Blueprint, jsonify, request
from flaskr.middlewares.validator import validator_middleware
from .country_controller import CountryController

country_blueprint = Blueprint('country', __name__, url_prefix='/country')


@country_blueprint.route('/create/one', methods=['POST'])
def create_one():
    country = CountryController()
    return jsonify(country.create_one_country(request.json))


@country_blueprint.route('/update/one', methods=['PUT'])
def update_one():
    print(request.json)
    country = CountryController()
    return jsonify(country.update_one_country(request.json))


@country_blueprint.route('/delete/one', methods=['DELETE'])
def delete_one():
    country = CountryController()
    return jsonify(country.delete_one_country(request.json))


@country_blueprint.route('/search/one', methods=['POST'])
def search_one():
    country = CountryController()
    return jsonify(country.search_one_country(request.json))


@country_blueprint.route('/search/many', methods=['POST'])
@validator_middleware
def search_many():
    country = CountryController()
    return jsonify(country.search_many_country(request.json))
