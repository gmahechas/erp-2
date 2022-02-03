from flask import Blueprint, jsonify
from ...vault import Vault
from ...modules.v1.country.country_controller import CountryController

country_blueprint = Blueprint('country', __name__, url_prefix='/country')


@country_blueprint.route('/create/one', methods=['GET'])
def create_one():
    return 'create/one'


@country_blueprint.route('/update/one', methods=['GET'])
def update_one():
    return 'update/one'


@country_blueprint.route('/delete/one', methods=['GET'])
def delete_one():
    return 'delete/one'


@country_blueprint.route('/search/one', methods=['GET'])
def search_one():
    arr = [
        {"username": "gustavo", "theme": "dark", "image": "image_url"},
        dict(username="alexandra", theme="light", image="image_url")
    ]
    return jsonify(arr)


@country_blueprint.route('/search/many', methods=['GET'])
def search_many():
    return 'search/many'
