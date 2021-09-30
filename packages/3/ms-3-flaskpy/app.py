from flask import Flask
from modules.country import Country
from modules.estate import Estate

app = Flask(__name__)

country = Country()
estate = Estate()

country_blueprint = country.init_blueprint()
estate_blueprint = estate.init_blueprint()


@country_blueprint.get("/create")
def country():
    return "create country"


@estate_blueprint.get("/create")
def estate():
    return "create estate"

app.register_blueprint(country_blueprint)
app.register_blueprint(estate_blueprint)
