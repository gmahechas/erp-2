from setuptools import setup, find_packages

setup(
    name="gmahechas-erp-common-ms-utils-py",
    version="0.0.29",
    description="erp-common-ms-utils-py",
    long_description="erp-common-ms-utils-py",
    license="UNLICENSED",
    python_requires=">=3.11.3",
    packages=find_packages(),
    install_requires=[
        "gmahechas-erp-common-py==0.0.29",
        "python-dotenv==0.20.0",
        "pymongo==4.1.1",
        "hvac==0.11.2",
        "uuid==1.30",
        "jsonschema==4.6.0",
        "PyJWT==2.4.0",
        "pyjwt[crypto]"
    ],
)
