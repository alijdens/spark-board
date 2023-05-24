from setuptools import setup, find_packages

setup(
    name="spark-board",
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
    dependencies=[
        "python>=3.7",
        "pyspark",
    ],
    packages=find_packages(
        where=["spark_board"],  # list of folders that contain the packages (["."] by default)
        include=["*"],  # package names should match these glob patterns (["*"] by default)
        exclude=[],  # exclude packages matching these glob patterns (empty by default)
    ),
    package_data={
        "spark_board": ["ui/*"],
    },
)
