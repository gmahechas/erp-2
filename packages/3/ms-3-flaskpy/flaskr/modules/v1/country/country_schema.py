create_one_country_schema = {
    "type": "object",
    "properties": {
        "countryName": {"type": 'string'},
        "countryCode": {"type": 'string', "minLength": 2, "maxLength": 4}
    },
    "required": ['countryName', 'countryCode'],
    "additionalProperties": False,
}

update_one_country_schema = {
    "type": "object",
    "properties": {
        "id": {"type": 'string'},
        "countryName": {"type": 'string'},
        "countryCode": {"type": 'string', "minLength": 2, "maxLength": 4}
    },
    "required": ['id'],
    "additionalProperties": False,
}

delete_one_country_schema = {
    "type": "object",
    "properties": {
        "id": {"type": 'string'},
    },
    "required": ['id'],
    "additionalProperties": False,
}

search_one_country_schema = {
    "type": "object",
    "properties": {
        "id": {"type": 'string'},
        "countryName": {"type": 'string'},
        "countryCode": {"type": 'string', "minLength": 2, "maxLength": 4}
    },
    "required": [],
    "additionalProperties": False,
}

search_many_country_schema = {
    "type": "array",
    "items": search_one_country_schema
}
