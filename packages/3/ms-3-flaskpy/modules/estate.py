from flask import Blueprint


class Estate:
    @staticmethod
    def init_blueprint():
        return Blueprint("estate", __name__, url_prefix="/estate")