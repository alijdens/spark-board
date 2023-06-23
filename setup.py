from setuptools import setup, find_packages

setup(
    name="spark-board",
    version="0.0.1",
    authors=[
        {"name": "Axel Lijdens", "email": "alijdens@fi.uba.ar"},
        {"name": "Ezequiel Werner", "email": "ewerner@fi.uba.ar"},
    ],
    description="Interactive visualization of Spark jobs",
    readme="README.md",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">3.6",
    install_requires=[
        "pyspark>3",
    ],
    packages=find_packages(
        where=["spark_board"],  # list of folders that contain the packages (["."] by default)
        include=["*"],  # package names should match these glob patterns (["*"] by default)
        exclude=[],  # exclude packages matching these glob patterns (empty by default)
    ),
    package_data={
        # this directory is created during the deployment process and contains the compiled
        # spark-board-ui react application
        "spark_board": ["ui/*"],
    },
)
