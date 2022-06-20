import os
import jwt
from .env import Env


class JWT:

    @staticmethod
    def verify(token, secret_or_public_key):
        return jwt.decode(token, secret_or_public_key, algorithms="RS256")

    @staticmethod
    def decode(token):
        app_name = os.environ["APP_NAME"]
        public_key = Env.get()[app_name]["auth"]["jwt"]["publicKey"]
        return JWT.verify(token, public_key)
