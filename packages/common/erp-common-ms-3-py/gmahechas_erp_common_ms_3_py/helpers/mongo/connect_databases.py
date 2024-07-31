from gmahechas_erp_common_ms_utils_py import Env, Mongo


def connect_databases():
    uri = Env.get()["ms-3"]["databases"]["mongo"]["uri"]
    mongo = Mongo(uri)
