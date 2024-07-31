class Context:

    bindings = {}

    @staticmethod
    def set(key, value):
        Context.bindings[key] = value

    @staticmethod
    def get(key):
        return Context.bindings[key]
