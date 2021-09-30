from . import estate_blueprint

@estate_blueprint.get("/create")
def estate():
    return "create estate"