from flask import Flask, Blueprint

country_blueprint = Blueprint("country", __name__, url_prefix="/country")
estate_blueprint = Blueprint("estate", __name__, url_prefix="/estate")

from . import country
from . import estate

def init_routes(app: Flask):
    app.register_blueprint(country_blueprint)
    app.register_blueprint(estate_blueprint)
    
    