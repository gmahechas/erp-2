from . import country_blueprint

@country_blueprint.get("/create")
def country():
    return "create country"