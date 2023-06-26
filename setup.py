from setuptools import setup, find_packages

# use repository README as long description
from pathlib import Path
this_directory = Path(__file__).parent
README = (this_directory / "README.md").read_text()


setup(
    name="spark-board",
    version="0.0.6",
    authors=[
        {"name": "Axel Lijdens", "email": "alijdens@fi.uba.ar"},
        {"name": "Ezequiel Werner", "email": "ewerner@fi.uba.ar"},
    ],
    description="Interactive visualization of Spark jobs",
    long_description_content_type="text/markdown",
    long_description=README,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">3.6",
    install_requires=[
        "pyspark>3",
    ],
    packages=[package for package in find_packages() if package.startswith("spark_board")],
    # this is required to include the static web files that show the spark-board UI in the
    # final package. This directory is created during the deployment process and contains
    # the compiled spark-board-ui react application
    package_data={
        "spark_board": ["ui/**/*"],
    },
)
