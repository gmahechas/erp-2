from flask import Blueprint


class Country:
    @staticmethod
    def init_blueprint():
        return Blueprint("country", __name__, url_prefix="/country")
