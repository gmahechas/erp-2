from setuptools import setup, find_packages

setup(
    name="gmahechas-erp-common-lambdapy",
    version="0.0.29",
    description="erp-common-lambdapy",
    long_description="erp-common-lambdapy",
    license="UNLICENSED",
    packages=find_packages(),
    install_requires=[
        "gmahechas-erp-common-py==0.0.29",
        "gmahechas-erp-common-ms-utils-py==0.0.29"
    ],
)
