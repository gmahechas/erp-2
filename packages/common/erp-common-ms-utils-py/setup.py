from setuptools import setup, find_packages

setup(
    name="erp-common-ms-utils-py",
    version="0.0.29",
    description="erp-common-ms-utils-py",
    long_description="erp-common-ms-utils-py",
    license="UNLICENSED",
    packages=find_packages(),
    install_requires=["python-dotenv==0.20.0", "pymongo==4.1.1", "hvac==0.11.2"],
)
