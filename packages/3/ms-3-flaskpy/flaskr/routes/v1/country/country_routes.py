from flask import Blueprint, jsonify
from .country_controller import CountryController

country_blueprint = Blueprint('country', __name__, url_prefix='/country')


@country_blueprint.route('/create/one', methods=['POST'])
def create_one():
    country = CountryController()
    return jsonify(country.create_one_country({'countryName': 'test', 'countryCode': 'test'}))


@country_blueprint.route('/update/one', methods=['PUT'])
def update_one():
    country = CountryController()
    return jsonify(country.update_one_country({'id': 'cb3f53df-a7ea-4dc1-84da-8e1f7861c813', 'countryName': 'Mexico', 'countryCode': 'MX'}))


@country_blueprint.route('/delete/one', methods=['DELETE'])
def delete_one():
    country = CountryController()
    return jsonify(country.delete_one_country({'id': '1ca18229-6956-4659-8127-41850b627ce0'}))


@country_blueprint.route('/search/one', methods=['POST'])
def search_one():
    country = CountryController()
    return jsonify(country.search_one_country({'countryName': 'test'}))


@country_blueprint.route('/search/many', methods=['POST'])
def search_many():
    country = CountryController()
    return jsonify(country.search_many_country())
