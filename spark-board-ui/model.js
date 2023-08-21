/**
 * IMPORTANT: this file containst the nodes and links for the react-flow application.
 *            however, the actual data will be created by the spark_board application
 *            and this file will be replaced by the real data frame transformation nodes
 *            so this file only exists here to provide a model that allows the react app
 *            to compile and run.
 *            Changes to this file will be irrelevant to the actual production data.
 */


const model_defaultSettings = {
    "animationEnabled": true,
    "animationEnabledOnDrag": true,
    "duplicateDataSources": true,
    "organizeNodesOnResize": false,
    "invertDag": false
};

const model_initialNodes = [
    {
        "id": "140140046704432",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "140140046704432->35",
                "140140046704432->113",
                "140140046704432->19",
                "140140046704432->16",
                "140140046704432->17",
                "140140046704432->122",
                "140140046704432->61",
                "140140046704432->212",
                "140140046704432->84",
                "140140046704432->245",
                "140140046704432->109",
                "140140046704432->163",
                "140140046704432->164",
                "140140046704432->165",
                "140140046704432->166",
                "140140046704432->171",
                "140140046704432->291",
                "140140046704432->309",
                "140140046704432->328"
            ]
        }
    },
    {
        "id": "140140046710000",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "140140046710000->35",
                "140140046710000->113",
                "140140046710000->19",
                "140140046710000->16",
                "140140046710000->17",
                "140140046710000->122",
                "140140046710000->61",
                "140140046710000->212",
                "140140046710000->84",
                "140140046710000->245",
                "140140046710000->109",
                "140140046710000->163",
                "140140046710000->164",
                "140140046710000->165",
                "140140046710000->166",
                "140140046710000->171",
                "140140046710000->291",
                "140140046710000->309"
            ]
        }
    },
    {
        "id": "140140046995504",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "140140046995504->35",
                "140140046995504->113",
                "140140046995504->19",
                "140140046995504->16",
                "140140046995504->17",
                "140140046995504->122",
                "140140046995504->61",
                "140140046995504->212",
                "140140046995504->84",
                "140140046995504->245",
                "140140046995504->109",
                "140140046995504->163",
                "140140046995504->164",
                "140140046995504->165",
                "140140046995504->166",
                "140140046995504->171",
                "140140046995504->291"
            ]
        }
    },
    {
        "id": "140140047003136",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n",
                "join_type": "Inner",
                "condition": {
                    "sql_str": "(a = CAST(spark_catalog.default.people.city AS DOUBLE))",
                    "tree_string": "(a#163 = cast(city#19 as double))\n:- a#163: double\n+- cast(city#19 as double)\n   +- city#19: string\n",
                    "is_equi_join": false,
                    "equi_join_columns": {}
                }
            },
            "columns": [
                "140140047003136->35",
                "140140047003136->113",
                "140140047003136->19",
                "140140047003136->16",
                "140140047003136->17",
                "140140047003136->122",
                "140140047003136->61",
                "140140047003136->212",
                "140140047003136->84",
                "140140047003136->245",
                "140140047003136->109",
                "140140047003136->163",
                "140140047003136->164",
                "140140047003136->165",
                "140140047003136->166",
                "140140047003136->171"
            ]
        }
    },
    {
        "id": "140140047006064",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n"
            },
            "columns": [
                "140140047006064->163",
                "140140047006064->164",
                "140140047006064->165",
                "140140047006064->166",
                "140140047006064->171"
            ]
        }
    },
    {
        "id": "140140037380448",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140037380448->163",
                "140140037380448->164",
                "140140037380448->165",
                "140140037380448->166"
            ]
        }
    },
    {
        "id": "140140046996896",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            226
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n"
            },
            "columns": [
                "140140046996896->35",
                "140140046996896->113",
                "140140046996896->19",
                "140140046996896->16",
                "140140046996896->17",
                "140140046996896->122",
                "140140046996896->61",
                "140140046996896->212",
                "140140046996896->84",
                "140140046996896->245",
                "140140046996896->109"
            ]
        }
    },
    {
        "id": "140140037379536",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140140037379536->245",
                "140140037379536->226",
                "140140037379536->109"
            ]
        }
    },
    {
        "id": "140140047002464",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140140047002464->245",
                "140140047002464->226",
                "140140047002464->109"
            ]
        }
    },
    {
        "id": "140140037386400",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "order": [
                    "continent_population DESC NULLS LAST"
                ]
            },
            "columns": [
                "140140037386400->245",
                "140140037386400->226",
                "140140037386400->109"
            ]
        }
    },
    {
        "id": "140140037378000",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent_code",
                    "continent",
                    "sum(country_population) AS continent_population"
                ],
                "grouping_expressions": [
                    "continent_code",
                    "continent"
                ]
            },
            "columns": [
                "140140037378000->245",
                "140140037378000->226",
                "140140037378000->109"
            ]
        }
    },
    {
        "id": "140140047007024",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#226 = continent#244)\n:- continent#226: string\n+- continent#244: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            226,
                            244
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n"
            },
            "columns": [
                "140140047007024->226",
                "140140047007024->224",
                "140140047007024->225",
                "140140047007024->241",
                "140140047007024->84",
                "140140047007024->245"
            ]
        }
    },
    {
        "id": "140140037381456",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140037381456->244",
                "140140037381456->245"
            ]
        }
    },
    {
        "id": "140140047003760",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#226 = continent#243)\n:- continent#226: string\n+- continent#243: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            226,
                            243
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140140047003760->226",
                "140140047003760->224",
                "140140047003760->225",
                "140140047003760->241",
                "140140047003760->84"
            ]
        }
    },
    {
        "id": "140140037377952",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent",
                    "country",
                    "sum(city_population) AS country_population"
                ],
                "grouping_expressions": [
                    "continent",
                    "country"
                ]
            },
            "columns": [
                "140140037377952->243",
                "140140037377952->241",
                "140140037377952->84"
            ]
        }
    },
    {
        "id": "140140047002896",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#227 = city#242)\n:- city#227: string\n+- city#242: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            227,
                            242
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140140047002896->227",
                "140140047002896->228",
                "140140047002896->229",
                "140140047002896->230",
                "140140047002896->61",
                "140140047002896->241",
                "140140047002896->243"
            ]
        }
    },
    {
        "id": "140140037380544",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140037380544->241",
                "140140037380544->242",
                "140140037380544->243"
            ]
        }
    },
    {
        "id": "140140047000688",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "tree_string": "(city#227 = city#235)\n:- city#227: string\n+- city#235: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            227,
                            235
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140140047000688->227",
                "140140047000688->228",
                "140140047000688->229",
                "140140047000688->230",
                "140140047000688->61"
            ]
        }
    },
    {
        "id": "140140046706736",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140140046706736->235",
                "140140046706736->61"
            ]
        }
    },
    {
        "id": "140140037388512",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140037388512->231",
                "140140037388512->232",
                "140140037388512->233",
                "140140037388512->234",
                "140140037388512->235"
            ]
        }
    },
    {
        "id": "140140037381408",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140037381408->236",
                "140140037381408->237",
                "140140037381408->238",
                "140140037381408->239",
                "140140037381408->240"
            ]
        }
    },
    {
        "id": "140140037594544",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140140037594544->236",
                "140140037594544->237",
                "140140037594544->238",
                "140140037594544->239",
                "140140037594544->240"
            ]
        }
    },
    {
        "id": "140140046705872",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046705872->236",
                "140140046705872->237",
                "140140046705872->238",
                "140140046705872->239",
                "140140046705872->240"
            ]
        }
    },
    {
        "id": "140140037388608",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140140037388608->231",
                "140140037388608->232",
                "140140037388608->233",
                "140140037388608->234",
                "140140037388608->235"
            ]
        }
    },
    {
        "id": "140140046992384",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046992384->231",
                "140140046992384->232",
                "140140046992384->233",
                "140140046992384->234",
                "140140046992384->235"
            ]
        }
    },
    {
        "id": "140140037382512",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140037382512->227",
                "140140037382512->228",
                "140140037382512->229",
                "140140037382512->230"
            ]
        }
    },
    {
        "id": "140140046699248",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140046699248->224",
                "140140046699248->225",
                "140140046699248->226"
            ]
        }
    },
    {
        "id": "140140046993680",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(country = country)",
                    "tree_string": "(country#113 = country#210)\n:- country#113: string\n+- country#210: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "country": [
                            113,
                            210
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140140046993680->113",
                "140140046993680->19",
                "140140046993680->16",
                "140140046993680->17",
                "140140046993680->122",
                "140140046993680->35",
                "140140046993680->61",
                "140140046993680->212",
                "140140046993680->84"
            ]
        }
    },
    {
        "id": "140140047213824",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140140047213824->212",
                "140140047213824->210",
                "140140047213824->84"
            ]
        }
    },
    {
        "id": "140140047314672",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140140047314672->212",
                "140140047314672->210",
                "140140047314672->84"
            ]
        }
    },
    {
        "id": "140140047318800",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "order": [
                    "country_population DESC NULLS LAST"
                ]
            },
            "columns": [
                "140140047318800->212",
                "140140047318800->210",
                "140140047318800->84"
            ]
        }
    },
    {
        "id": "140140047215840",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent",
                    "country",
                    "sum(city_population) AS country_population"
                ],
                "grouping_expressions": [
                    "continent",
                    "country"
                ]
            },
            "columns": [
                "140140047215840->212",
                "140140047215840->210",
                "140140047215840->84"
            ]
        }
    },
    {
        "id": "140140047001024",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#196 = city#211)\n:- city#196: string\n+- city#211: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            196,
                            211
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140140047001024->196",
                "140140047001024->197",
                "140140047001024->198",
                "140140047001024->199",
                "140140047001024->61",
                "140140047001024->210",
                "140140047001024->212"
            ]
        }
    },
    {
        "id": "140140047310256",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140047310256->210",
                "140140047310256->211",
                "140140047310256->212"
            ]
        }
    },
    {
        "id": "140140046998528",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "tree_string": "(city#196 = city#204)\n:- city#196: string\n+- city#204: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            196,
                            204
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140140046998528->196",
                "140140046998528->197",
                "140140046998528->198",
                "140140046998528->199",
                "140140046998528->61"
            ]
        }
    },
    {
        "id": "140140047316160",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140140047316160->204",
                "140140047316160->61"
            ]
        }
    },
    {
        "id": "140140047310160",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140047310160->200",
                "140140047310160->201",
                "140140047310160->202",
                "140140047310160->203",
                "140140047310160->204"
            ]
        }
    },
    {
        "id": "140140047316736",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140047316736->205",
                "140140047316736->206",
                "140140047316736->207",
                "140140047316736->208",
                "140140047316736->209"
            ]
        }
    },
    {
        "id": "140140046712160",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140140046712160->205",
                "140140046712160->206",
                "140140046712160->207",
                "140140046712160->208",
                "140140046712160->209"
            ]
        }
    },
    {
        "id": "140140047000400",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140047000400->205",
                "140140047000400->206",
                "140140047000400->207",
                "140140047000400->208",
                "140140047000400->209"
            ]
        }
    },
    {
        "id": "140140047304496",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140140047304496->200",
                "140140047304496->201",
                "140140047304496->202",
                "140140047304496->203",
                "140140047304496->204"
            ]
        }
    },
    {
        "id": "140140046994832",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046994832->200",
                "140140046994832->201",
                "140140046994832->202",
                "140140046994832->203",
                "140140046994832->204"
            ]
        }
    },
    {
        "id": "140140047003952",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140047003952->196",
                "140140047003952->197",
                "140140047003952->198",
                "140140047003952->199"
            ]
        }
    },
    {
        "id": "140140046994784",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(spark_catalog.default.people.city = spark_catalog.default.people.city)",
                    "tree_string": "(city#19 = city#181)\n:- city#19: string\n+- city#181: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            19,
                            181
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140140046994784->19",
                "140140046994784->16",
                "140140046994784->17",
                "140140046994784->122",
                "140140046994784->113",
                "140140046994784->35",
                "140140046994784->61"
            ]
        }
    },
    {
        "id": "140140047310400",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140140047310400->181",
                "140140047310400->61"
            ]
        }
    },
    {
        "id": "140140058915264",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140140058915264->181",
                "140140058915264->61"
            ]
        }
    },
    {
        "id": "140140046993392",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "order": [
                    "city_population DESC NULLS LAST"
                ]
            },
            "columns": [
                "140140046993392->181",
                "140140046993392->61"
            ]
        }
    },
    {
        "id": "140140046998432",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140140046998432->181",
                "140140046998432->61"
            ]
        }
    },
    {
        "id": "140140046876880",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140046876880->177",
                "140140046876880->178",
                "140140046876880->179",
                "140140046876880->180",
                "140140046876880->181"
            ]
        }
    },
    {
        "id": "140140047005920",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140047005920->182",
                "140140047005920->183",
                "140140047005920->184",
                "140140047005920->185",
                "140140047005920->186"
            ]
        }
    },
    {
        "id": "140140047304736",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140140047304736->182",
                "140140047304736->183",
                "140140047304736->184",
                "140140047304736->185",
                "140140047304736->186"
            ]
        }
    },
    {
        "id": "140140047000880",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140047000880->182",
                "140140047000880->183",
                "140140047000880->184",
                "140140047000880->185",
                "140140047000880->186"
            ]
        }
    },
    {
        "id": "140140047311888",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140140047311888->177",
                "140140047311888->178",
                "140140047311888->179",
                "140140047311888->180",
                "140140047311888->181"
            ]
        }
    },
    {
        "id": "140140046994688",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046994688->177",
                "140140046994688->178",
                "140140046994688->179",
                "140140046994688->180",
                "140140046994688->181"
            ]
        }
    },
    {
        "id": "140140047204656",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140140047204656->16",
                "140140047204656->17",
                "140140047204656->19",
                "140140047204656->122",
                "140140047204656->113",
                "140140047204656->35"
            ]
        }
    },
    {
        "id": "140140046998384",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(spark_catalog.default.people.city = city)",
                    "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            19,
                            114
                        ]
                    }
                },
                "join_type": "Inner",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n"
            },
            "columns": [
                "140140046998384->19",
                "140140046998384->15",
                "140140046998384->16",
                "140140046998384->17",
                "140140046998384->18",
                "140140046998384->35",
                "140140046998384->40",
                "140140046998384->109",
                "140140046998384->113",
                "140140046998384->122",
                "140140046998384->123",
                "140140046998384->124"
            ]
        }
    },
    {
        "id": "140140046996464",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            114,
                            121
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n"
            },
            "columns": [
                "140140046996464->114",
                "140140046996464->35",
                "140140046996464->40",
                "140140046996464->109",
                "140140046996464->113",
                "140140046996464->122",
                "140140046996464->123",
                "140140046996464->124"
            ]
        }
    },
    {
        "id": "140140046997904",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140046997904->121",
                "140140046997904->122",
                "140140046997904->123",
                "140140046997904->124"
            ]
        }
    },
    {
        "id": "140140046991664",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            115
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140046991664->35",
                "140140046991664->40",
                "140140046991664->109",
                "140140046991664->113",
                "140140046991664->114"
            ]
        }
    },
    {
        "id": "140140046999632",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140046999632->113",
                "140140046999632->114",
                "140140046999632->115"
            ]
        }
    },
    {
        "id": "140140047213584",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "140140047213584->40",
                "140140047213584->35",
                "140140047213584->109"
            ]
        }
    },
    {
        "id": "140140047214256",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent_code",
                    "continent",
                    "sum(country_population) AS continent_population"
                ],
                "grouping_expressions": [
                    "continent_code",
                    "continent"
                ]
            },
            "columns": [
                "140140047214256->40",
                "140140047214256->35",
                "140140047214256->109"
            ]
        }
    },
    {
        "id": "140140047002224",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            39
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n"
            },
            "columns": [
                "140140047002224->35",
                "140140047002224->33",
                "140140047002224->34",
                "140140047002224->88",
                "140140047002224->84",
                "140140047002224->40"
            ]
        }
    },
    {
        "id": "140140047214208",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140047214208->39",
                "140140047214208->40"
            ]
        }
    },
    {
        "id": "140140046999536",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            90
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140140046999536->35",
                "140140046999536->33",
                "140140046999536->34",
                "140140046999536->88",
                "140140046999536->84"
            ]
        }
    },
    {
        "id": "140140047208016",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent",
                    "country",
                    "sum(city_population) AS country_population"
                ],
                "grouping_expressions": [
                    "continent",
                    "country"
                ]
            },
            "columns": [
                "140140047208016->90",
                "140140047208016->88",
                "140140047208016->84"
            ]
        }
    },
    {
        "id": "140140047000736",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            25,
                            89
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140140047000736->25",
                "140140047000736->26",
                "140140047000736->27",
                "140140047000736->28",
                "140140047000736->61",
                "140140047000736->88",
                "140140047000736->90"
            ]
        }
    },
    {
        "id": "140140046882640",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140046882640->88",
                "140140046882640->89",
                "140140046882640->90"
            ]
        }
    },
    {
        "id": "140140047006112",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            25,
                            137
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140140047006112->25",
                "140140047006112->26",
                "140140047006112->27",
                "140140047006112->28",
                "140140047006112->61"
            ]
        }
    },
    {
        "id": "140140047219152",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140140047219152->137",
                "140140047219152->61"
            ]
        }
    },
    {
        "id": "140140047000496",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140047000496->133",
                "140140047000496->134",
                "140140047000496->135",
                "140140047000496->136",
                "140140047000496->137"
            ]
        }
    },
    {
        "id": "140140047219968",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140047219968->138",
                "140140047219968->139",
                "140140047219968->140",
                "140140047219968->141",
                "140140047219968->142"
            ]
        }
    },
    {
        "id": "140140047004528",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140140047004528->138",
                "140140047004528->139",
                "140140047004528->140",
                "140140047004528->141",
                "140140047004528->142"
            ]
        }
    },
    {
        "id": "140140047006784",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140047006784->138",
                "140140047006784->139",
                "140140047006784->140",
                "140140047006784->141",
                "140140047006784->142"
            ]
        }
    },
    {
        "id": "140140047305840",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140140047305840->133",
                "140140047305840->134",
                "140140047305840->135",
                "140140047305840->136",
                "140140047305840->137"
            ]
        }
    },
    {
        "id": "140140046712256",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046712256->133",
                "140140046712256->134",
                "140140046712256->135",
                "140140046712256->136",
                "140140046712256->137"
            ]
        }
    },
    {
        "id": "140140047211664",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140047211664->25",
                "140140047211664->26",
                "140140047211664->27",
                "140140047211664->28"
            ]
        }
    },
    {
        "id": "140140047206672",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140140047206672->33",
                "140140047206672->34",
                "140140047206672->35"
            ]
        }
    },
    {
        "id": "140140046884800",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140046884800->15",
                "140140046884800->16",
                "140140046884800->17",
                "140140046884800->18",
                "140140046884800->19"
            ]
        }
    },
    {
        "id": "140140046994592",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140140046994592->44",
                "140140046994592->45",
                "140140046994592->46",
                "140140046994592->47",
                "140140046994592->48"
            ]
        }
    },
    {
        "id": "140140046702752",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140140046702752->44",
                "140140046702752->45",
                "140140046702752->46",
                "140140046702752->47",
                "140140046702752->48"
            ]
        }
    },
    {
        "id": "140140046993584",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046993584->44",
                "140140046993584->45",
                "140140046993584->46",
                "140140046993584->47",
                "140140046993584->48"
            ]
        }
    },
    {
        "id": "140140046995792",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140140046995792->15",
                "140140046995792->16",
                "140140046995792->17",
                "140140046995792->18",
                "140140046995792->19"
            ]
        }
    },
    {
        "id": "140140046702704",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp3hkoapj6/spark-warehouse/people)"
            },
            "columns": [
                "140140046702704->15",
                "140140046702704->16",
                "140140046702704->17",
                "140140046702704->18",
                "140140046702704->19"
            ]
        }
    },
    {
        "id": "140140046704432->35",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046710000->35"
            ]
        }
    },
    {
        "id": "140140046704432->113",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046710000->113"
            ]
        }
    },
    {
        "id": "140140046704432->19",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046710000->19"
            ]
        }
    },
    {
        "id": "140140046704432->16",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046710000->16"
            ]
        }
    },
    {
        "id": "140140046704432->17",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046710000->17"
            ]
        }
    },
    {
        "id": "140140046704432->122",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046710000->122"
            ]
        }
    },
    {
        "id": "140140046704432->61",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046710000->61"
            ]
        }
    },
    {
        "id": "140140046704432->212",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140046710000->212"
            ]
        }
    },
    {
        "id": "140140046704432->84",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140046710000->84"
            ]
        }
    },
    {
        "id": "140140046704432->245",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140046710000->245"
            ]
        }
    },
    {
        "id": "140140046704432->109",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140046710000->109"
            ]
        }
    },
    {
        "id": "140140046704432->163",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140140046710000->163"
            ]
        }
    },
    {
        "id": "140140046704432->164",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140140046710000->164"
            ]
        }
    },
    {
        "id": "140140046704432->165",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140140046710000->165"
            ]
        }
    },
    {
        "id": "140140046704432->166",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140140046710000->166"
            ]
        }
    },
    {
        "id": "140140046704432->171",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140140046710000->171"
            ]
        }
    },
    {
        "id": "140140046704432->291",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "140140046710000->291"
            ]
        }
    },
    {
        "id": "140140046704432->309",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#309: boolean\n",
            "linked_columns": [
                "140140046710000->309"
            ]
        }
    },
    {
        "id": "140140046704432->328",
        "type": "column",
        "parentNode": "140140046704432",
        "expandParent": true,
        "data": {
            "id": 328,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#328\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140140046710000->109"
            ]
        }
    },
    {
        "id": "140140046710000->35",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046995504->35"
            ]
        }
    },
    {
        "id": "140140046710000->113",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046995504->113"
            ]
        }
    },
    {
        "id": "140140046710000->19",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046995504->19"
            ]
        }
    },
    {
        "id": "140140046710000->16",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046995504->16"
            ]
        }
    },
    {
        "id": "140140046710000->17",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046995504->17"
            ]
        }
    },
    {
        "id": "140140046710000->122",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046995504->122"
            ]
        }
    },
    {
        "id": "140140046710000->61",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046995504->61"
            ]
        }
    },
    {
        "id": "140140046710000->212",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140046995504->212"
            ]
        }
    },
    {
        "id": "140140046710000->84",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140046995504->84"
            ]
        }
    },
    {
        "id": "140140046710000->245",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140046995504->245"
            ]
        }
    },
    {
        "id": "140140046710000->109",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140046995504->109"
            ]
        }
    },
    {
        "id": "140140046710000->163",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140140046995504->163"
            ]
        }
    },
    {
        "id": "140140046710000->164",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140140046995504->164"
            ]
        }
    },
    {
        "id": "140140046710000->165",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140140046995504->165"
            ]
        }
    },
    {
        "id": "140140046710000->166",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140140046995504->166"
            ]
        }
    },
    {
        "id": "140140046710000->171",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140140046995504->171"
            ]
        }
    },
    {
        "id": "140140046710000->291",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "140140046995504->291"
            ]
        }
    },
    {
        "id": "140140046710000->309",
        "type": "column",
        "parentNode": "140140046710000",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#309\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140140046995504->84"
            ]
        }
    },
    {
        "id": "140140046995504->35",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140047003136->35"
            ]
        }
    },
    {
        "id": "140140046995504->113",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140047003136->113"
            ]
        }
    },
    {
        "id": "140140046995504->19",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140047003136->19"
            ]
        }
    },
    {
        "id": "140140046995504->16",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140047003136->16"
            ]
        }
    },
    {
        "id": "140140046995504->17",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140047003136->17"
            ]
        }
    },
    {
        "id": "140140046995504->122",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140047003136->122"
            ]
        }
    },
    {
        "id": "140140046995504->61",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140047003136->61"
            ]
        }
    },
    {
        "id": "140140046995504->212",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047003136->212"
            ]
        }
    },
    {
        "id": "140140046995504->84",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047003136->84"
            ]
        }
    },
    {
        "id": "140140046995504->245",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140047003136->245"
            ]
        }
    },
    {
        "id": "140140046995504->109",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140047003136->109"
            ]
        }
    },
    {
        "id": "140140046995504->163",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140140047003136->163"
            ]
        }
    },
    {
        "id": "140140046995504->164",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140140047003136->164"
            ]
        }
    },
    {
        "id": "140140046995504->165",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140140047003136->165"
            ]
        }
    },
    {
        "id": "140140046995504->166",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140140047003136->166"
            ]
        }
    },
    {
        "id": "140140046995504->171",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140140047003136->171"
            ]
        }
    },
    {
        "id": "140140046995504->291",
        "type": "column",
        "parentNode": "140140046995504",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#291\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140140047003136->61"
            ]
        }
    },
    {
        "id": "140140047003136->35",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046996896->35"
            ]
        }
    },
    {
        "id": "140140047003136->113",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046996896->113"
            ]
        }
    },
    {
        "id": "140140047003136->19",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046996896->19"
            ]
        }
    },
    {
        "id": "140140047003136->16",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046996896->16"
            ]
        }
    },
    {
        "id": "140140047003136->17",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046996896->17"
            ]
        }
    },
    {
        "id": "140140047003136->122",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046996896->122"
            ]
        }
    },
    {
        "id": "140140047003136->61",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046996896->61"
            ]
        }
    },
    {
        "id": "140140047003136->212",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140046996896->212"
            ]
        }
    },
    {
        "id": "140140047003136->84",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140046996896->84"
            ]
        }
    },
    {
        "id": "140140047003136->245",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140046996896->245"
            ]
        }
    },
    {
        "id": "140140047003136->109",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140046996896->109"
            ]
        }
    },
    {
        "id": "140140047003136->163",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140140047006064->163"
            ]
        }
    },
    {
        "id": "140140047003136->164",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140140047006064->164"
            ]
        }
    },
    {
        "id": "140140047003136->165",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140140047006064->165"
            ]
        }
    },
    {
        "id": "140140047003136->166",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140140047006064->166"
            ]
        }
    },
    {
        "id": "140140047003136->171",
        "type": "column",
        "parentNode": "140140047003136",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140140047006064->171"
            ]
        }
    },
    {
        "id": "140140047006064->163",
        "type": "column",
        "parentNode": "140140047006064",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140140037380448->163"
            ]
        }
    },
    {
        "id": "140140047006064->164",
        "type": "column",
        "parentNode": "140140047006064",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140140037380448->164"
            ]
        }
    },
    {
        "id": "140140047006064->165",
        "type": "column",
        "parentNode": "140140047006064",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140140037380448->165"
            ]
        }
    },
    {
        "id": "140140047006064->166",
        "type": "column",
        "parentNode": "140140047006064",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140140037380448->166"
            ]
        }
    },
    {
        "id": "140140047006064->171",
        "type": "column",
        "parentNode": "140140047006064",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "(((a#163 + b#164) / c#165) + d#166) AS sum#171\n+- (((a#163 + b#164) / c#165) + d#166)\n   :- ((a#163 + b#164) / c#165)\n   :  :- (a#163 + b#164)\n   :  :  :- a#163: double\n   :  :  +- b#164: double\n   :  +- c#165: double\n   +- d#166: double\n",
            "linked_columns": [
                "140140037380448->163",
                "140140037380448->164",
                "140140037380448->165",
                "140140037380448->166"
            ]
        }
    },
    {
        "id": "140140037380448->163",
        "type": "column",
        "parentNode": "140140037380448",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037380448->164",
        "type": "column",
        "parentNode": "140140037380448",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037380448->165",
        "type": "column",
        "parentNode": "140140037380448",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037380448->166",
        "type": "column",
        "parentNode": "140140037380448",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046996896->35",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "140140046993680->35",
                "140140037379536->226"
            ]
        }
    },
    {
        "id": "140140046996896->113",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046993680->113"
            ]
        }
    },
    {
        "id": "140140046996896->19",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046993680->19"
            ]
        }
    },
    {
        "id": "140140046996896->16",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046993680->16"
            ]
        }
    },
    {
        "id": "140140046996896->17",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046993680->17"
            ]
        }
    },
    {
        "id": "140140046996896->122",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046993680->122"
            ]
        }
    },
    {
        "id": "140140046996896->61",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046993680->61"
            ]
        }
    },
    {
        "id": "140140046996896->212",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "140140046993680->35",
                "140140037379536->226"
            ]
        }
    },
    {
        "id": "140140046996896->84",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140046993680->84"
            ]
        }
    },
    {
        "id": "140140046996896->245",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140037379536->245"
            ]
        }
    },
    {
        "id": "140140046996896->109",
        "type": "column",
        "parentNode": "140140046996896",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140037379536->109"
            ]
        }
    },
    {
        "id": "140140037379536->245",
        "type": "column",
        "parentNode": "140140037379536",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140047002464->245"
            ]
        }
    },
    {
        "id": "140140037379536->226",
        "type": "column",
        "parentNode": "140140037379536",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140140047002464->226"
            ]
        }
    },
    {
        "id": "140140037379536->109",
        "type": "column",
        "parentNode": "140140037379536",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140047002464->109"
            ]
        }
    },
    {
        "id": "140140047002464->245",
        "type": "column",
        "parentNode": "140140047002464",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140037386400->245"
            ]
        }
    },
    {
        "id": "140140047002464->226",
        "type": "column",
        "parentNode": "140140047002464",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140140037386400->226"
            ]
        }
    },
    {
        "id": "140140047002464->109",
        "type": "column",
        "parentNode": "140140047002464",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140037386400->109"
            ]
        }
    },
    {
        "id": "140140037386400->245",
        "type": "column",
        "parentNode": "140140037386400",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140037378000->245"
            ]
        }
    },
    {
        "id": "140140037386400->226",
        "type": "column",
        "parentNode": "140140037386400",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140140037378000->226"
            ]
        }
    },
    {
        "id": "140140037386400->109",
        "type": "column",
        "parentNode": "140140037386400",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140037378000->109"
            ]
        }
    },
    {
        "id": "140140037378000->245",
        "type": "column",
        "parentNode": "140140037378000",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140047007024->245"
            ]
        }
    },
    {
        "id": "140140037378000->226",
        "type": "column",
        "parentNode": "140140037378000",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140140047007024->226"
            ]
        }
    },
    {
        "id": "140140037378000->109",
        "type": "column",
        "parentNode": "140140037378000",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140140047007024->84"
            ]
        }
    },
    {
        "id": "140140047007024->226",
        "type": "column",
        "parentNode": "140140047007024",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#244)\n:- continent#226: string\n+- continent#244: string\n",
            "linked_columns": [
                "140140047003760->226",
                "140140037381456->244"
            ]
        }
    },
    {
        "id": "140140047007024->224",
        "type": "column",
        "parentNode": "140140047007024",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "140140047003760->224"
            ]
        }
    },
    {
        "id": "140140047007024->225",
        "type": "column",
        "parentNode": "140140047007024",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "140140047003760->225"
            ]
        }
    },
    {
        "id": "140140047007024->241",
        "type": "column",
        "parentNode": "140140047007024",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140140047003760->241"
            ]
        }
    },
    {
        "id": "140140047007024->84",
        "type": "column",
        "parentNode": "140140047007024",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047003760->84"
            ]
        }
    },
    {
        "id": "140140047007024->245",
        "type": "column",
        "parentNode": "140140047007024",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140140037381456->245"
            ]
        }
    },
    {
        "id": "140140037381456->244",
        "type": "column",
        "parentNode": "140140037381456",
        "expandParent": true,
        "data": {
            "id": 244,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#244: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037381456->245",
        "type": "column",
        "parentNode": "140140037381456",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047003760->226",
        "type": "column",
        "parentNode": "140140047003760",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#243)\n:- continent#226: string\n+- continent#243: string\n",
            "linked_columns": [
                "140140046699248->226",
                "140140037377952->243"
            ]
        }
    },
    {
        "id": "140140047003760->224",
        "type": "column",
        "parentNode": "140140047003760",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "140140046699248->224"
            ]
        }
    },
    {
        "id": "140140047003760->225",
        "type": "column",
        "parentNode": "140140047003760",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "140140046699248->225"
            ]
        }
    },
    {
        "id": "140140047003760->241",
        "type": "column",
        "parentNode": "140140047003760",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140140037377952->241"
            ]
        }
    },
    {
        "id": "140140047003760->84",
        "type": "column",
        "parentNode": "140140047003760",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140037377952->84"
            ]
        }
    },
    {
        "id": "140140037377952->243",
        "type": "column",
        "parentNode": "140140037377952",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "140140047002896->243"
            ]
        }
    },
    {
        "id": "140140037377952->241",
        "type": "column",
        "parentNode": "140140037377952",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140140047002896->241"
            ]
        }
    },
    {
        "id": "140140037377952->84",
        "type": "column",
        "parentNode": "140140037377952",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140140047002896->61"
            ]
        }
    },
    {
        "id": "140140047002896->227",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#242)\n:- city#227: string\n+- city#242: string\n",
            "linked_columns": [
                "140140047000688->227",
                "140140037380544->242"
            ]
        }
    },
    {
        "id": "140140047002896->228",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "140140047000688->228"
            ]
        }
    },
    {
        "id": "140140047002896->229",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "140140047000688->229"
            ]
        }
    },
    {
        "id": "140140047002896->230",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "140140047000688->230"
            ]
        }
    },
    {
        "id": "140140047002896->61",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140047000688->61"
            ]
        }
    },
    {
        "id": "140140047002896->241",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140140037380544->241"
            ]
        }
    },
    {
        "id": "140140047002896->243",
        "type": "column",
        "parentNode": "140140047002896",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "140140037380544->243"
            ]
        }
    },
    {
        "id": "140140037380544->241",
        "type": "column",
        "parentNode": "140140037380544",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037380544->242",
        "type": "column",
        "parentNode": "140140037380544",
        "expandParent": true,
        "data": {
            "id": 242,
            "name": "city",
            "type": "string",
            "tree_string": "city#242: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037380544->243",
        "type": "column",
        "parentNode": "140140037380544",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000688->227",
        "type": "column",
        "parentNode": "140140047000688",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#235)\n:- city#227: string\n+- city#235: string\n",
            "linked_columns": [
                "140140037382512->227",
                "140140046706736->235"
            ]
        }
    },
    {
        "id": "140140047000688->228",
        "type": "column",
        "parentNode": "140140047000688",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "140140037382512->228"
            ]
        }
    },
    {
        "id": "140140047000688->229",
        "type": "column",
        "parentNode": "140140047000688",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "140140037382512->229"
            ]
        }
    },
    {
        "id": "140140047000688->230",
        "type": "column",
        "parentNode": "140140047000688",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "140140037382512->230"
            ]
        }
    },
    {
        "id": "140140047000688->61",
        "type": "column",
        "parentNode": "140140047000688",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046706736->61"
            ]
        }
    },
    {
        "id": "140140046706736->235",
        "type": "column",
        "parentNode": "140140046706736",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140140037388512->235"
            ]
        }
    },
    {
        "id": "140140046706736->61",
        "type": "column",
        "parentNode": "140140046706736",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037388512->231",
        "type": "column",
        "parentNode": "140140037388512",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "140140037388608->231"
            ]
        }
    },
    {
        "id": "140140037388512->232",
        "type": "column",
        "parentNode": "140140037388512",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "140140037388608->232"
            ]
        }
    },
    {
        "id": "140140037388512->233",
        "type": "column",
        "parentNode": "140140037388512",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "140140037388608->233"
            ]
        }
    },
    {
        "id": "140140037388512->234",
        "type": "column",
        "parentNode": "140140037388512",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "140140037388608->234"
            ]
        }
    },
    {
        "id": "140140037388512->235",
        "type": "column",
        "parentNode": "140140037388512",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140140037388608->235"
            ]
        }
    },
    {
        "id": "140140037381408->236",
        "type": "column",
        "parentNode": "140140037381408",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "140140037594544->236"
            ]
        }
    },
    {
        "id": "140140037381408->237",
        "type": "column",
        "parentNode": "140140037381408",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "140140037594544->237"
            ]
        }
    },
    {
        "id": "140140037381408->238",
        "type": "column",
        "parentNode": "140140037381408",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "140140037594544->238"
            ]
        }
    },
    {
        "id": "140140037381408->239",
        "type": "column",
        "parentNode": "140140037381408",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "140140037594544->239"
            ]
        }
    },
    {
        "id": "140140037381408->240",
        "type": "column",
        "parentNode": "140140037381408",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "140140037594544->240"
            ]
        }
    },
    {
        "id": "140140037594544->236",
        "type": "column",
        "parentNode": "140140037594544",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "140140046705872->236"
            ]
        }
    },
    {
        "id": "140140037594544->237",
        "type": "column",
        "parentNode": "140140037594544",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "140140046705872->237"
            ]
        }
    },
    {
        "id": "140140037594544->238",
        "type": "column",
        "parentNode": "140140037594544",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "140140046705872->238"
            ]
        }
    },
    {
        "id": "140140037594544->239",
        "type": "column",
        "parentNode": "140140037594544",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "140140046705872->239"
            ]
        }
    },
    {
        "id": "140140037594544->240",
        "type": "column",
        "parentNode": "140140037594544",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "140140046705872->240"
            ]
        }
    },
    {
        "id": "140140046705872->236",
        "type": "column",
        "parentNode": "140140046705872",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046705872->237",
        "type": "column",
        "parentNode": "140140046705872",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046705872->238",
        "type": "column",
        "parentNode": "140140046705872",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046705872->239",
        "type": "column",
        "parentNode": "140140046705872",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046705872->240",
        "type": "column",
        "parentNode": "140140046705872",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037388608->231",
        "type": "column",
        "parentNode": "140140037388608",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "140140046992384->231"
            ]
        }
    },
    {
        "id": "140140037388608->232",
        "type": "column",
        "parentNode": "140140037388608",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "140140046992384->232"
            ]
        }
    },
    {
        "id": "140140037388608->233",
        "type": "column",
        "parentNode": "140140037388608",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "140140046992384->233"
            ]
        }
    },
    {
        "id": "140140037388608->234",
        "type": "column",
        "parentNode": "140140037388608",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "140140046992384->234"
            ]
        }
    },
    {
        "id": "140140037388608->235",
        "type": "column",
        "parentNode": "140140037388608",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140140046992384->235"
            ]
        }
    },
    {
        "id": "140140046992384->231",
        "type": "column",
        "parentNode": "140140046992384",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046992384->232",
        "type": "column",
        "parentNode": "140140046992384",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046992384->233",
        "type": "column",
        "parentNode": "140140046992384",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046992384->234",
        "type": "column",
        "parentNode": "140140046992384",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046992384->235",
        "type": "column",
        "parentNode": "140140046992384",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037382512->227",
        "type": "column",
        "parentNode": "140140037382512",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "city#227: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037382512->228",
        "type": "column",
        "parentNode": "140140037382512",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037382512->229",
        "type": "column",
        "parentNode": "140140037382512",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140037382512->230",
        "type": "column",
        "parentNode": "140140037382512",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046699248->224",
        "type": "column",
        "parentNode": "140140046699248",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046699248->225",
        "type": "column",
        "parentNode": "140140046699248",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046699248->226",
        "type": "column",
        "parentNode": "140140046699248",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046993680->113",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#210)\n:- country#113: string\n+- country#210: string\n",
            "linked_columns": [
                "140140046994784->113",
                "140140047213824->210"
            ]
        }
    },
    {
        "id": "140140046993680->19",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046994784->19"
            ]
        }
    },
    {
        "id": "140140046993680->16",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046994784->16"
            ]
        }
    },
    {
        "id": "140140046993680->17",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046994784->17"
            ]
        }
    },
    {
        "id": "140140046993680->122",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046994784->122"
            ]
        }
    },
    {
        "id": "140140046993680->35",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046994784->35"
            ]
        }
    },
    {
        "id": "140140046993680->61",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046994784->61"
            ]
        }
    },
    {
        "id": "140140046993680->212",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047213824->212"
            ]
        }
    },
    {
        "id": "140140046993680->84",
        "type": "column",
        "parentNode": "140140046993680",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047213824->84"
            ]
        }
    },
    {
        "id": "140140047213824->212",
        "type": "column",
        "parentNode": "140140047213824",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047314672->212"
            ]
        }
    },
    {
        "id": "140140047213824->210",
        "type": "column",
        "parentNode": "140140047213824",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140140047314672->210"
            ]
        }
    },
    {
        "id": "140140047213824->84",
        "type": "column",
        "parentNode": "140140047213824",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047314672->84"
            ]
        }
    },
    {
        "id": "140140047314672->212",
        "type": "column",
        "parentNode": "140140047314672",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047318800->212"
            ]
        }
    },
    {
        "id": "140140047314672->210",
        "type": "column",
        "parentNode": "140140047314672",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140140047318800->210"
            ]
        }
    },
    {
        "id": "140140047314672->84",
        "type": "column",
        "parentNode": "140140047314672",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047318800->84"
            ]
        }
    },
    {
        "id": "140140047318800->212",
        "type": "column",
        "parentNode": "140140047318800",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047215840->212"
            ]
        }
    },
    {
        "id": "140140047318800->210",
        "type": "column",
        "parentNode": "140140047318800",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140140047215840->210"
            ]
        }
    },
    {
        "id": "140140047318800->84",
        "type": "column",
        "parentNode": "140140047318800",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047215840->84"
            ]
        }
    },
    {
        "id": "140140047215840->212",
        "type": "column",
        "parentNode": "140140047215840",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047001024->212"
            ]
        }
    },
    {
        "id": "140140047215840->210",
        "type": "column",
        "parentNode": "140140047215840",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140140047001024->210"
            ]
        }
    },
    {
        "id": "140140047215840->84",
        "type": "column",
        "parentNode": "140140047215840",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140140047001024->61"
            ]
        }
    },
    {
        "id": "140140047001024->196",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#211)\n:- city#196: string\n+- city#211: string\n",
            "linked_columns": [
                "140140046998528->196",
                "140140047310256->211"
            ]
        }
    },
    {
        "id": "140140047001024->197",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "140140046998528->197"
            ]
        }
    },
    {
        "id": "140140047001024->198",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "140140046998528->198"
            ]
        }
    },
    {
        "id": "140140047001024->199",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "140140046998528->199"
            ]
        }
    },
    {
        "id": "140140047001024->61",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046998528->61"
            ]
        }
    },
    {
        "id": "140140047001024->210",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140140047310256->210"
            ]
        }
    },
    {
        "id": "140140047001024->212",
        "type": "column",
        "parentNode": "140140047001024",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140140047310256->212"
            ]
        }
    },
    {
        "id": "140140047310256->210",
        "type": "column",
        "parentNode": "140140047310256",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047310256->211",
        "type": "column",
        "parentNode": "140140047310256",
        "expandParent": true,
        "data": {
            "id": 211,
            "name": "city",
            "type": "string",
            "tree_string": "city#211: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047310256->212",
        "type": "column",
        "parentNode": "140140047310256",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046998528->196",
        "type": "column",
        "parentNode": "140140046998528",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#204)\n:- city#196: string\n+- city#204: string\n",
            "linked_columns": [
                "140140047003952->196",
                "140140047316160->204"
            ]
        }
    },
    {
        "id": "140140046998528->197",
        "type": "column",
        "parentNode": "140140046998528",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "140140047003952->197"
            ]
        }
    },
    {
        "id": "140140046998528->198",
        "type": "column",
        "parentNode": "140140046998528",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "140140047003952->198"
            ]
        }
    },
    {
        "id": "140140046998528->199",
        "type": "column",
        "parentNode": "140140046998528",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "140140047003952->199"
            ]
        }
    },
    {
        "id": "140140046998528->61",
        "type": "column",
        "parentNode": "140140046998528",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140047316160->61"
            ]
        }
    },
    {
        "id": "140140047316160->204",
        "type": "column",
        "parentNode": "140140047316160",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140140047310160->204"
            ]
        }
    },
    {
        "id": "140140047316160->61",
        "type": "column",
        "parentNode": "140140047316160",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047310160->200",
        "type": "column",
        "parentNode": "140140047310160",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "140140047304496->200"
            ]
        }
    },
    {
        "id": "140140047310160->201",
        "type": "column",
        "parentNode": "140140047310160",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "140140047304496->201"
            ]
        }
    },
    {
        "id": "140140047310160->202",
        "type": "column",
        "parentNode": "140140047310160",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "140140047304496->202"
            ]
        }
    },
    {
        "id": "140140047310160->203",
        "type": "column",
        "parentNode": "140140047310160",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "140140047304496->203"
            ]
        }
    },
    {
        "id": "140140047310160->204",
        "type": "column",
        "parentNode": "140140047310160",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140140047304496->204"
            ]
        }
    },
    {
        "id": "140140047316736->205",
        "type": "column",
        "parentNode": "140140047316736",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "140140046712160->205"
            ]
        }
    },
    {
        "id": "140140047316736->206",
        "type": "column",
        "parentNode": "140140047316736",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "140140046712160->206"
            ]
        }
    },
    {
        "id": "140140047316736->207",
        "type": "column",
        "parentNode": "140140047316736",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "140140046712160->207"
            ]
        }
    },
    {
        "id": "140140047316736->208",
        "type": "column",
        "parentNode": "140140047316736",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "140140046712160->208"
            ]
        }
    },
    {
        "id": "140140047316736->209",
        "type": "column",
        "parentNode": "140140047316736",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "140140046712160->209"
            ]
        }
    },
    {
        "id": "140140046712160->205",
        "type": "column",
        "parentNode": "140140046712160",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "140140047000400->205"
            ]
        }
    },
    {
        "id": "140140046712160->206",
        "type": "column",
        "parentNode": "140140046712160",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "140140047000400->206"
            ]
        }
    },
    {
        "id": "140140046712160->207",
        "type": "column",
        "parentNode": "140140046712160",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "140140047000400->207"
            ]
        }
    },
    {
        "id": "140140046712160->208",
        "type": "column",
        "parentNode": "140140046712160",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "140140047000400->208"
            ]
        }
    },
    {
        "id": "140140046712160->209",
        "type": "column",
        "parentNode": "140140046712160",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "140140047000400->209"
            ]
        }
    },
    {
        "id": "140140047000400->205",
        "type": "column",
        "parentNode": "140140047000400",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000400->206",
        "type": "column",
        "parentNode": "140140047000400",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000400->207",
        "type": "column",
        "parentNode": "140140047000400",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000400->208",
        "type": "column",
        "parentNode": "140140047000400",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000400->209",
        "type": "column",
        "parentNode": "140140047000400",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047304496->200",
        "type": "column",
        "parentNode": "140140047304496",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "140140046994832->200"
            ]
        }
    },
    {
        "id": "140140047304496->201",
        "type": "column",
        "parentNode": "140140047304496",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "140140046994832->201"
            ]
        }
    },
    {
        "id": "140140047304496->202",
        "type": "column",
        "parentNode": "140140047304496",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "140140046994832->202"
            ]
        }
    },
    {
        "id": "140140047304496->203",
        "type": "column",
        "parentNode": "140140047304496",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "140140046994832->203"
            ]
        }
    },
    {
        "id": "140140047304496->204",
        "type": "column",
        "parentNode": "140140047304496",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140140046994832->204"
            ]
        }
    },
    {
        "id": "140140046994832->200",
        "type": "column",
        "parentNode": "140140046994832",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994832->201",
        "type": "column",
        "parentNode": "140140046994832",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994832->202",
        "type": "column",
        "parentNode": "140140046994832",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994832->203",
        "type": "column",
        "parentNode": "140140046994832",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994832->204",
        "type": "column",
        "parentNode": "140140046994832",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047003952->196",
        "type": "column",
        "parentNode": "140140047003952",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "city#196: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047003952->197",
        "type": "column",
        "parentNode": "140140047003952",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047003952->198",
        "type": "column",
        "parentNode": "140140047003952",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047003952->199",
        "type": "column",
        "parentNode": "140140047003952",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994784->19",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#181)\n:- city#19: string\n+- city#181: string\n",
            "linked_columns": [
                "140140047204656->19",
                "140140047310400->181"
            ]
        }
    },
    {
        "id": "140140046994784->16",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140047204656->16"
            ]
        }
    },
    {
        "id": "140140046994784->17",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140047204656->17"
            ]
        }
    },
    {
        "id": "140140046994784->122",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140047204656->122"
            ]
        }
    },
    {
        "id": "140140046994784->113",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140047204656->113"
            ]
        }
    },
    {
        "id": "140140046994784->35",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140047204656->35"
            ]
        }
    },
    {
        "id": "140140046994784->61",
        "type": "column",
        "parentNode": "140140046994784",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140047310400->61"
            ]
        }
    },
    {
        "id": "140140047310400->181",
        "type": "column",
        "parentNode": "140140047310400",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140140058915264->181"
            ]
        }
    },
    {
        "id": "140140047310400->61",
        "type": "column",
        "parentNode": "140140047310400",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140058915264->61"
            ]
        }
    },
    {
        "id": "140140058915264->181",
        "type": "column",
        "parentNode": "140140058915264",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140140046993392->181"
            ]
        }
    },
    {
        "id": "140140058915264->61",
        "type": "column",
        "parentNode": "140140058915264",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046993392->61"
            ]
        }
    },
    {
        "id": "140140046993392->181",
        "type": "column",
        "parentNode": "140140046993392",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140140046998432->181"
            ]
        }
    },
    {
        "id": "140140046993392->61",
        "type": "column",
        "parentNode": "140140046993392",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140046998432->61"
            ]
        }
    },
    {
        "id": "140140046998432->181",
        "type": "column",
        "parentNode": "140140046998432",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140140046876880->181"
            ]
        }
    },
    {
        "id": "140140046998432->61",
        "type": "column",
        "parentNode": "140140046998432",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046876880->177",
        "type": "column",
        "parentNode": "140140046876880",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "140140047311888->177"
            ]
        }
    },
    {
        "id": "140140046876880->178",
        "type": "column",
        "parentNode": "140140046876880",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "140140047311888->178"
            ]
        }
    },
    {
        "id": "140140046876880->179",
        "type": "column",
        "parentNode": "140140046876880",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "140140047311888->179"
            ]
        }
    },
    {
        "id": "140140046876880->180",
        "type": "column",
        "parentNode": "140140046876880",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "140140047311888->180"
            ]
        }
    },
    {
        "id": "140140046876880->181",
        "type": "column",
        "parentNode": "140140046876880",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140140047311888->181"
            ]
        }
    },
    {
        "id": "140140047005920->182",
        "type": "column",
        "parentNode": "140140047005920",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "140140047304736->182"
            ]
        }
    },
    {
        "id": "140140047005920->183",
        "type": "column",
        "parentNode": "140140047005920",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "140140047304736->183"
            ]
        }
    },
    {
        "id": "140140047005920->184",
        "type": "column",
        "parentNode": "140140047005920",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "140140047304736->184"
            ]
        }
    },
    {
        "id": "140140047005920->185",
        "type": "column",
        "parentNode": "140140047005920",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "140140047304736->185"
            ]
        }
    },
    {
        "id": "140140047005920->186",
        "type": "column",
        "parentNode": "140140047005920",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "140140047304736->186"
            ]
        }
    },
    {
        "id": "140140047304736->182",
        "type": "column",
        "parentNode": "140140047304736",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "140140047000880->182"
            ]
        }
    },
    {
        "id": "140140047304736->183",
        "type": "column",
        "parentNode": "140140047304736",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "140140047000880->183"
            ]
        }
    },
    {
        "id": "140140047304736->184",
        "type": "column",
        "parentNode": "140140047304736",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "140140047000880->184"
            ]
        }
    },
    {
        "id": "140140047304736->185",
        "type": "column",
        "parentNode": "140140047304736",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "140140047000880->185"
            ]
        }
    },
    {
        "id": "140140047304736->186",
        "type": "column",
        "parentNode": "140140047304736",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "140140047000880->186"
            ]
        }
    },
    {
        "id": "140140047000880->182",
        "type": "column",
        "parentNode": "140140047000880",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000880->183",
        "type": "column",
        "parentNode": "140140047000880",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000880->184",
        "type": "column",
        "parentNode": "140140047000880",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000880->185",
        "type": "column",
        "parentNode": "140140047000880",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000880->186",
        "type": "column",
        "parentNode": "140140047000880",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047311888->177",
        "type": "column",
        "parentNode": "140140047311888",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "140140046994688->177"
            ]
        }
    },
    {
        "id": "140140047311888->178",
        "type": "column",
        "parentNode": "140140047311888",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "140140046994688->178"
            ]
        }
    },
    {
        "id": "140140047311888->179",
        "type": "column",
        "parentNode": "140140047311888",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "140140046994688->179"
            ]
        }
    },
    {
        "id": "140140047311888->180",
        "type": "column",
        "parentNode": "140140047311888",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "140140046994688->180"
            ]
        }
    },
    {
        "id": "140140047311888->181",
        "type": "column",
        "parentNode": "140140047311888",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140140046994688->181"
            ]
        }
    },
    {
        "id": "140140046994688->177",
        "type": "column",
        "parentNode": "140140046994688",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994688->178",
        "type": "column",
        "parentNode": "140140046994688",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994688->179",
        "type": "column",
        "parentNode": "140140046994688",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994688->180",
        "type": "column",
        "parentNode": "140140046994688",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046994688->181",
        "type": "column",
        "parentNode": "140140046994688",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047204656->16",
        "type": "column",
        "parentNode": "140140047204656",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046998384->16"
            ]
        }
    },
    {
        "id": "140140047204656->17",
        "type": "column",
        "parentNode": "140140047204656",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046998384->17"
            ]
        }
    },
    {
        "id": "140140047204656->19",
        "type": "column",
        "parentNode": "140140047204656",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046998384->19"
            ]
        }
    },
    {
        "id": "140140047204656->122",
        "type": "column",
        "parentNode": "140140047204656",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046998384->122"
            ]
        }
    },
    {
        "id": "140140047204656->113",
        "type": "column",
        "parentNode": "140140047204656",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046998384->113"
            ]
        }
    },
    {
        "id": "140140047204656->35",
        "type": "column",
        "parentNode": "140140047204656",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046998384->35"
            ]
        }
    },
    {
        "id": "140140046998384->19",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "140140046884800->19",
                "140140046996464->114"
            ]
        }
    },
    {
        "id": "140140046998384->15",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140140046884800->15"
            ]
        }
    },
    {
        "id": "140140046998384->16",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046884800->16"
            ]
        }
    },
    {
        "id": "140140046998384->17",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046884800->17"
            ]
        }
    },
    {
        "id": "140140046998384->18",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140140046884800->18"
            ]
        }
    },
    {
        "id": "140140046998384->35",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046996464->35"
            ]
        }
    },
    {
        "id": "140140046998384->40",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140140046996464->40"
            ]
        }
    },
    {
        "id": "140140046998384->109",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140046996464->109"
            ]
        }
    },
    {
        "id": "140140046998384->113",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046996464->113"
            ]
        }
    },
    {
        "id": "140140046998384->122",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046996464->122"
            ]
        }
    },
    {
        "id": "140140046998384->123",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140140046996464->123"
            ]
        }
    },
    {
        "id": "140140046998384->124",
        "type": "column",
        "parentNode": "140140046998384",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140140046996464->124"
            ]
        }
    },
    {
        "id": "140140046996464->114",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "140140046991664->114",
                "140140046997904->121"
            ]
        }
    },
    {
        "id": "140140046996464->35",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140046991664->35"
            ]
        }
    },
    {
        "id": "140140046996464->40",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140140046991664->40"
            ]
        }
    },
    {
        "id": "140140046996464->109",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140046991664->109"
            ]
        }
    },
    {
        "id": "140140046996464->113",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046991664->113"
            ]
        }
    },
    {
        "id": "140140046996464->122",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140140046997904->122"
            ]
        }
    },
    {
        "id": "140140046996464->123",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140140046997904->123"
            ]
        }
    },
    {
        "id": "140140046996464->124",
        "type": "column",
        "parentNode": "140140046996464",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140140046997904->124"
            ]
        }
    },
    {
        "id": "140140046997904->121",
        "type": "column",
        "parentNode": "140140046997904",
        "expandParent": true,
        "data": {
            "id": 121,
            "name": "city",
            "type": "string",
            "tree_string": "city#121: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046997904->122",
        "type": "column",
        "parentNode": "140140046997904",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046997904->123",
        "type": "column",
        "parentNode": "140140046997904",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046997904->124",
        "type": "column",
        "parentNode": "140140046997904",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046991664->35",
        "type": "column",
        "parentNode": "140140046991664",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "140140047213584->35",
                "140140046999632->115"
            ]
        }
    },
    {
        "id": "140140046991664->40",
        "type": "column",
        "parentNode": "140140046991664",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140140047213584->40"
            ]
        }
    },
    {
        "id": "140140046991664->109",
        "type": "column",
        "parentNode": "140140046991664",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140047213584->109"
            ]
        }
    },
    {
        "id": "140140046991664->113",
        "type": "column",
        "parentNode": "140140046991664",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140140046999632->113"
            ]
        }
    },
    {
        "id": "140140046991664->114",
        "type": "column",
        "parentNode": "140140046991664",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "140140046999632->114"
            ]
        }
    },
    {
        "id": "140140046999632->113",
        "type": "column",
        "parentNode": "140140046999632",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046999632->114",
        "type": "column",
        "parentNode": "140140046999632",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046999632->115",
        "type": "column",
        "parentNode": "140140046999632",
        "expandParent": true,
        "data": {
            "id": 115,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#115: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047213584->40",
        "type": "column",
        "parentNode": "140140047213584",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140140047214256->40"
            ]
        }
    },
    {
        "id": "140140047213584->35",
        "type": "column",
        "parentNode": "140140047213584",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140047214256->35"
            ]
        }
    },
    {
        "id": "140140047213584->109",
        "type": "column",
        "parentNode": "140140047213584",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140140047214256->109"
            ]
        }
    },
    {
        "id": "140140047214256->40",
        "type": "column",
        "parentNode": "140140047214256",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140140047002224->40"
            ]
        }
    },
    {
        "id": "140140047214256->35",
        "type": "column",
        "parentNode": "140140047214256",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140140047002224->35"
            ]
        }
    },
    {
        "id": "140140047214256->109",
        "type": "column",
        "parentNode": "140140047214256",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140140047002224->84"
            ]
        }
    },
    {
        "id": "140140047002224->35",
        "type": "column",
        "parentNode": "140140047002224",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "140140046999536->35",
                "140140047214208->39"
            ]
        }
    },
    {
        "id": "140140047002224->33",
        "type": "column",
        "parentNode": "140140047002224",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140140046999536->33"
            ]
        }
    },
    {
        "id": "140140047002224->34",
        "type": "column",
        "parentNode": "140140047002224",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140140046999536->34"
            ]
        }
    },
    {
        "id": "140140047002224->88",
        "type": "column",
        "parentNode": "140140047002224",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140140046999536->88"
            ]
        }
    },
    {
        "id": "140140047002224->84",
        "type": "column",
        "parentNode": "140140047002224",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140046999536->84"
            ]
        }
    },
    {
        "id": "140140047002224->40",
        "type": "column",
        "parentNode": "140140047002224",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140140047214208->40"
            ]
        }
    },
    {
        "id": "140140047214208->39",
        "type": "column",
        "parentNode": "140140047214208",
        "expandParent": true,
        "data": {
            "id": 39,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#39: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047214208->40",
        "type": "column",
        "parentNode": "140140047214208",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046999536->35",
        "type": "column",
        "parentNode": "140140046999536",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "140140047206672->35",
                "140140047208016->90"
            ]
        }
    },
    {
        "id": "140140046999536->33",
        "type": "column",
        "parentNode": "140140046999536",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140140047206672->33"
            ]
        }
    },
    {
        "id": "140140046999536->34",
        "type": "column",
        "parentNode": "140140046999536",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140140047206672->34"
            ]
        }
    },
    {
        "id": "140140046999536->88",
        "type": "column",
        "parentNode": "140140046999536",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140140047208016->88"
            ]
        }
    },
    {
        "id": "140140046999536->84",
        "type": "column",
        "parentNode": "140140046999536",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140140047208016->84"
            ]
        }
    },
    {
        "id": "140140047208016->90",
        "type": "column",
        "parentNode": "140140047208016",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140140047000736->90"
            ]
        }
    },
    {
        "id": "140140047208016->88",
        "type": "column",
        "parentNode": "140140047208016",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140140047000736->88"
            ]
        }
    },
    {
        "id": "140140047208016->84",
        "type": "column",
        "parentNode": "140140047208016",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140140047000736->61"
            ]
        }
    },
    {
        "id": "140140047000736->25",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "140140047006112->25",
                "140140046882640->89"
            ]
        }
    },
    {
        "id": "140140047000736->26",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140140047006112->26"
            ]
        }
    },
    {
        "id": "140140047000736->27",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140140047006112->27"
            ]
        }
    },
    {
        "id": "140140047000736->28",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140140047006112->28"
            ]
        }
    },
    {
        "id": "140140047000736->61",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140047006112->61"
            ]
        }
    },
    {
        "id": "140140047000736->88",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140140046882640->88"
            ]
        }
    },
    {
        "id": "140140047000736->90",
        "type": "column",
        "parentNode": "140140047000736",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140140046882640->90"
            ]
        }
    },
    {
        "id": "140140046882640->88",
        "type": "column",
        "parentNode": "140140046882640",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046882640->89",
        "type": "column",
        "parentNode": "140140046882640",
        "expandParent": true,
        "data": {
            "id": 89,
            "name": "city",
            "type": "string",
            "tree_string": "city#89: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046882640->90",
        "type": "column",
        "parentNode": "140140046882640",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047006112->25",
        "type": "column",
        "parentNode": "140140047006112",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "140140047211664->25",
                "140140047219152->137"
            ]
        }
    },
    {
        "id": "140140047006112->26",
        "type": "column",
        "parentNode": "140140047006112",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140140047211664->26"
            ]
        }
    },
    {
        "id": "140140047006112->27",
        "type": "column",
        "parentNode": "140140047006112",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140140047211664->27"
            ]
        }
    },
    {
        "id": "140140047006112->28",
        "type": "column",
        "parentNode": "140140047006112",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140140047211664->28"
            ]
        }
    },
    {
        "id": "140140047006112->61",
        "type": "column",
        "parentNode": "140140047006112",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140140047219152->61"
            ]
        }
    },
    {
        "id": "140140047219152->137",
        "type": "column",
        "parentNode": "140140047219152",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140140047000496->137"
            ]
        }
    },
    {
        "id": "140140047219152->61",
        "type": "column",
        "parentNode": "140140047219152",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047000496->133",
        "type": "column",
        "parentNode": "140140047000496",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140140047305840->133"
            ]
        }
    },
    {
        "id": "140140047000496->134",
        "type": "column",
        "parentNode": "140140047000496",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140140047305840->134"
            ]
        }
    },
    {
        "id": "140140047000496->135",
        "type": "column",
        "parentNode": "140140047000496",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140140047305840->135"
            ]
        }
    },
    {
        "id": "140140047000496->136",
        "type": "column",
        "parentNode": "140140047000496",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140140047305840->136"
            ]
        }
    },
    {
        "id": "140140047000496->137",
        "type": "column",
        "parentNode": "140140047000496",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140140047305840->137"
            ]
        }
    },
    {
        "id": "140140047219968->138",
        "type": "column",
        "parentNode": "140140047219968",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140140047004528->138"
            ]
        }
    },
    {
        "id": "140140047219968->139",
        "type": "column",
        "parentNode": "140140047219968",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140140047004528->139"
            ]
        }
    },
    {
        "id": "140140047219968->140",
        "type": "column",
        "parentNode": "140140047219968",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140140047004528->140"
            ]
        }
    },
    {
        "id": "140140047219968->141",
        "type": "column",
        "parentNode": "140140047219968",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140140047004528->141"
            ]
        }
    },
    {
        "id": "140140047219968->142",
        "type": "column",
        "parentNode": "140140047219968",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140140047004528->142"
            ]
        }
    },
    {
        "id": "140140047004528->138",
        "type": "column",
        "parentNode": "140140047004528",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140140047006784->138"
            ]
        }
    },
    {
        "id": "140140047004528->139",
        "type": "column",
        "parentNode": "140140047004528",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140140047006784->139"
            ]
        }
    },
    {
        "id": "140140047004528->140",
        "type": "column",
        "parentNode": "140140047004528",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140140047006784->140"
            ]
        }
    },
    {
        "id": "140140047004528->141",
        "type": "column",
        "parentNode": "140140047004528",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140140047006784->141"
            ]
        }
    },
    {
        "id": "140140047004528->142",
        "type": "column",
        "parentNode": "140140047004528",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140140047006784->142"
            ]
        }
    },
    {
        "id": "140140047006784->138",
        "type": "column",
        "parentNode": "140140047006784",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047006784->139",
        "type": "column",
        "parentNode": "140140047006784",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047006784->140",
        "type": "column",
        "parentNode": "140140047006784",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047006784->141",
        "type": "column",
        "parentNode": "140140047006784",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047006784->142",
        "type": "column",
        "parentNode": "140140047006784",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047305840->133",
        "type": "column",
        "parentNode": "140140047305840",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140140046712256->133"
            ]
        }
    },
    {
        "id": "140140047305840->134",
        "type": "column",
        "parentNode": "140140047305840",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140140046712256->134"
            ]
        }
    },
    {
        "id": "140140047305840->135",
        "type": "column",
        "parentNode": "140140047305840",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140140046712256->135"
            ]
        }
    },
    {
        "id": "140140047305840->136",
        "type": "column",
        "parentNode": "140140047305840",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140140046712256->136"
            ]
        }
    },
    {
        "id": "140140047305840->137",
        "type": "column",
        "parentNode": "140140047305840",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140140046712256->137"
            ]
        }
    },
    {
        "id": "140140046712256->133",
        "type": "column",
        "parentNode": "140140046712256",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046712256->134",
        "type": "column",
        "parentNode": "140140046712256",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046712256->135",
        "type": "column",
        "parentNode": "140140046712256",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046712256->136",
        "type": "column",
        "parentNode": "140140046712256",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046712256->137",
        "type": "column",
        "parentNode": "140140046712256",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047211664->25",
        "type": "column",
        "parentNode": "140140047211664",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "city#25: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047211664->26",
        "type": "column",
        "parentNode": "140140047211664",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047211664->27",
        "type": "column",
        "parentNode": "140140047211664",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047211664->28",
        "type": "column",
        "parentNode": "140140047211664",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047206672->33",
        "type": "column",
        "parentNode": "140140047206672",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047206672->34",
        "type": "column",
        "parentNode": "140140047206672",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140047206672->35",
        "type": "column",
        "parentNode": "140140047206672",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046884800->15",
        "type": "column",
        "parentNode": "140140046884800",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140140046995792->15"
            ]
        }
    },
    {
        "id": "140140046884800->16",
        "type": "column",
        "parentNode": "140140046884800",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046995792->16"
            ]
        }
    },
    {
        "id": "140140046884800->17",
        "type": "column",
        "parentNode": "140140046884800",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046995792->17"
            ]
        }
    },
    {
        "id": "140140046884800->18",
        "type": "column",
        "parentNode": "140140046884800",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140140046995792->18"
            ]
        }
    },
    {
        "id": "140140046884800->19",
        "type": "column",
        "parentNode": "140140046884800",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046995792->19"
            ]
        }
    },
    {
        "id": "140140046994592->44",
        "type": "column",
        "parentNode": "140140046994592",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140140046702752->44"
            ]
        }
    },
    {
        "id": "140140046994592->45",
        "type": "column",
        "parentNode": "140140046994592",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140140046702752->45"
            ]
        }
    },
    {
        "id": "140140046994592->46",
        "type": "column",
        "parentNode": "140140046994592",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140140046702752->46"
            ]
        }
    },
    {
        "id": "140140046994592->47",
        "type": "column",
        "parentNode": "140140046994592",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140140046702752->47"
            ]
        }
    },
    {
        "id": "140140046994592->48",
        "type": "column",
        "parentNode": "140140046994592",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140140046702752->48"
            ]
        }
    },
    {
        "id": "140140046702752->44",
        "type": "column",
        "parentNode": "140140046702752",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140140046993584->44"
            ]
        }
    },
    {
        "id": "140140046702752->45",
        "type": "column",
        "parentNode": "140140046702752",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140140046993584->45"
            ]
        }
    },
    {
        "id": "140140046702752->46",
        "type": "column",
        "parentNode": "140140046702752",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140140046993584->46"
            ]
        }
    },
    {
        "id": "140140046702752->47",
        "type": "column",
        "parentNode": "140140046702752",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140140046993584->47"
            ]
        }
    },
    {
        "id": "140140046702752->48",
        "type": "column",
        "parentNode": "140140046702752",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140140046993584->48"
            ]
        }
    },
    {
        "id": "140140046993584->44",
        "type": "column",
        "parentNode": "140140046993584",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046993584->45",
        "type": "column",
        "parentNode": "140140046993584",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046993584->46",
        "type": "column",
        "parentNode": "140140046993584",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046993584->47",
        "type": "column",
        "parentNode": "140140046993584",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046993584->48",
        "type": "column",
        "parentNode": "140140046993584",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046995792->15",
        "type": "column",
        "parentNode": "140140046995792",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140140046702704->15"
            ]
        }
    },
    {
        "id": "140140046995792->16",
        "type": "column",
        "parentNode": "140140046995792",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140140046702704->16"
            ]
        }
    },
    {
        "id": "140140046995792->17",
        "type": "column",
        "parentNode": "140140046995792",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140140046702704->17"
            ]
        }
    },
    {
        "id": "140140046995792->18",
        "type": "column",
        "parentNode": "140140046995792",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140140046702704->18"
            ]
        }
    },
    {
        "id": "140140046995792->19",
        "type": "column",
        "parentNode": "140140046995792",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140140046702704->19"
            ]
        }
    },
    {
        "id": "140140046702704->15",
        "type": "column",
        "parentNode": "140140046702704",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046702704->16",
        "type": "column",
        "parentNode": "140140046702704",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046702704->17",
        "type": "column",
        "parentNode": "140140046702704",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046702704->18",
        "type": "column",
        "parentNode": "140140046702704",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140140046702704->19",
        "type": "column",
        "parentNode": "140140046702704",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": []
        }
    }
];

const model_initialEdges = [
    {
        "id": "140140046704432-140140046710000",
        "source": "140140046704432",
        "target": "140140046710000"
    },
    {
        "id": "140140046710000-140140046995504",
        "source": "140140046710000",
        "target": "140140046995504"
    },
    {
        "id": "140140046995504-140140047003136",
        "source": "140140046995504",
        "target": "140140047003136"
    },
    {
        "id": "140140047003136-140140047006064",
        "source": "140140047003136",
        "target": "140140047006064"
    },
    {
        "id": "140140047006064-140140037380448",
        "source": "140140047006064",
        "target": "140140037380448"
    },
    {
        "id": "140140047003136-140140046996896",
        "source": "140140047003136",
        "target": "140140046996896"
    },
    {
        "id": "140140046996896-140140037379536",
        "source": "140140046996896",
        "target": "140140037379536"
    },
    {
        "id": "140140037379536-140140047002464",
        "source": "140140037379536",
        "target": "140140047002464"
    },
    {
        "id": "140140047002464-140140037386400",
        "source": "140140047002464",
        "target": "140140037386400"
    },
    {
        "id": "140140037386400-140140037378000",
        "source": "140140037386400",
        "target": "140140037378000"
    },
    {
        "id": "140140037378000-140140047007024",
        "source": "140140037378000",
        "target": "140140047007024"
    },
    {
        "id": "140140047007024-140140037381456",
        "source": "140140047007024",
        "target": "140140037381456"
    },
    {
        "id": "140140047007024-140140047003760",
        "source": "140140047007024",
        "target": "140140047003760"
    },
    {
        "id": "140140047003760-140140037377952",
        "source": "140140047003760",
        "target": "140140037377952"
    },
    {
        "id": "140140037377952-140140047002896",
        "source": "140140037377952",
        "target": "140140047002896"
    },
    {
        "id": "140140047002896-140140037380544",
        "source": "140140047002896",
        "target": "140140037380544"
    },
    {
        "id": "140140047002896-140140047000688",
        "source": "140140047002896",
        "target": "140140047000688"
    },
    {
        "id": "140140047000688-140140046706736",
        "source": "140140047000688",
        "target": "140140046706736"
    },
    {
        "id": "140140046706736-140140037388512",
        "source": "140140046706736",
        "target": "140140037388512"
    },
    {
        "id": "140140037388512-140140037381408",
        "source": "140140037388512",
        "target": "140140037381408"
    },
    {
        "id": "140140037381408-140140037594544",
        "source": "140140037381408",
        "target": "140140037594544"
    },
    {
        "id": "140140037594544-140140046705872",
        "source": "140140037594544",
        "target": "140140046705872"
    },
    {
        "id": "140140037388512-140140037388608",
        "source": "140140037388512",
        "target": "140140037388608"
    },
    {
        "id": "140140037388608-140140046992384",
        "source": "140140037388608",
        "target": "140140046992384"
    },
    {
        "id": "140140047000688-140140037382512",
        "source": "140140047000688",
        "target": "140140037382512"
    },
    {
        "id": "140140047003760-140140046699248",
        "source": "140140047003760",
        "target": "140140046699248"
    },
    {
        "id": "140140046996896-140140046993680",
        "source": "140140046996896",
        "target": "140140046993680"
    },
    {
        "id": "140140046993680-140140047213824",
        "source": "140140046993680",
        "target": "140140047213824"
    },
    {
        "id": "140140047213824-140140047314672",
        "source": "140140047213824",
        "target": "140140047314672"
    },
    {
        "id": "140140047314672-140140047318800",
        "source": "140140047314672",
        "target": "140140047318800"
    },
    {
        "id": "140140047318800-140140047215840",
        "source": "140140047318800",
        "target": "140140047215840"
    },
    {
        "id": "140140047215840-140140047001024",
        "source": "140140047215840",
        "target": "140140047001024"
    },
    {
        "id": "140140047001024-140140047310256",
        "source": "140140047001024",
        "target": "140140047310256"
    },
    {
        "id": "140140047001024-140140046998528",
        "source": "140140047001024",
        "target": "140140046998528"
    },
    {
        "id": "140140046998528-140140047316160",
        "source": "140140046998528",
        "target": "140140047316160"
    },
    {
        "id": "140140047316160-140140047310160",
        "source": "140140047316160",
        "target": "140140047310160"
    },
    {
        "id": "140140047310160-140140047316736",
        "source": "140140047310160",
        "target": "140140047316736"
    },
    {
        "id": "140140047316736-140140046712160",
        "source": "140140047316736",
        "target": "140140046712160"
    },
    {
        "id": "140140046712160-140140047000400",
        "source": "140140046712160",
        "target": "140140047000400"
    },
    {
        "id": "140140047310160-140140047304496",
        "source": "140140047310160",
        "target": "140140047304496"
    },
    {
        "id": "140140047304496-140140046994832",
        "source": "140140047304496",
        "target": "140140046994832"
    },
    {
        "id": "140140046998528-140140047003952",
        "source": "140140046998528",
        "target": "140140047003952"
    },
    {
        "id": "140140046993680-140140046994784",
        "source": "140140046993680",
        "target": "140140046994784"
    },
    {
        "id": "140140046994784-140140047310400",
        "source": "140140046994784",
        "target": "140140047310400"
    },
    {
        "id": "140140047310400-140140058915264",
        "source": "140140047310400",
        "target": "140140058915264"
    },
    {
        "id": "140140058915264-140140046993392",
        "source": "140140058915264",
        "target": "140140046993392"
    },
    {
        "id": "140140046993392-140140046998432",
        "source": "140140046993392",
        "target": "140140046998432"
    },
    {
        "id": "140140046998432-140140046876880",
        "source": "140140046998432",
        "target": "140140046876880"
    },
    {
        "id": "140140046876880-140140047005920",
        "source": "140140046876880",
        "target": "140140047005920"
    },
    {
        "id": "140140047005920-140140047304736",
        "source": "140140047005920",
        "target": "140140047304736"
    },
    {
        "id": "140140047304736-140140047000880",
        "source": "140140047304736",
        "target": "140140047000880"
    },
    {
        "id": "140140046876880-140140047311888",
        "source": "140140046876880",
        "target": "140140047311888"
    },
    {
        "id": "140140047311888-140140046994688",
        "source": "140140047311888",
        "target": "140140046994688"
    },
    {
        "id": "140140046994784-140140047204656",
        "source": "140140046994784",
        "target": "140140047204656"
    },
    {
        "id": "140140047204656-140140046998384",
        "source": "140140047204656",
        "target": "140140046998384"
    },
    {
        "id": "140140046998384-140140046996464",
        "source": "140140046998384",
        "target": "140140046996464"
    },
    {
        "id": "140140046996464-140140046997904",
        "source": "140140046996464",
        "target": "140140046997904"
    },
    {
        "id": "140140046996464-140140046991664",
        "source": "140140046996464",
        "target": "140140046991664"
    },
    {
        "id": "140140046991664-140140046999632",
        "source": "140140046991664",
        "target": "140140046999632"
    },
    {
        "id": "140140046991664-140140047213584",
        "source": "140140046991664",
        "target": "140140047213584"
    },
    {
        "id": "140140047213584-140140047214256",
        "source": "140140047213584",
        "target": "140140047214256"
    },
    {
        "id": "140140047214256-140140047002224",
        "source": "140140047214256",
        "target": "140140047002224"
    },
    {
        "id": "140140047002224-140140047214208",
        "source": "140140047002224",
        "target": "140140047214208"
    },
    {
        "id": "140140047002224-140140046999536",
        "source": "140140047002224",
        "target": "140140046999536"
    },
    {
        "id": "140140046999536-140140047208016",
        "source": "140140046999536",
        "target": "140140047208016"
    },
    {
        "id": "140140047208016-140140047000736",
        "source": "140140047208016",
        "target": "140140047000736"
    },
    {
        "id": "140140047000736-140140046882640",
        "source": "140140047000736",
        "target": "140140046882640"
    },
    {
        "id": "140140047000736-140140047006112",
        "source": "140140047000736",
        "target": "140140047006112"
    },
    {
        "id": "140140047006112-140140047219152",
        "source": "140140047006112",
        "target": "140140047219152"
    },
    {
        "id": "140140047219152-140140047000496",
        "source": "140140047219152",
        "target": "140140047000496"
    },
    {
        "id": "140140047000496-140140047219968",
        "source": "140140047000496",
        "target": "140140047219968"
    },
    {
        "id": "140140047219968-140140047004528",
        "source": "140140047219968",
        "target": "140140047004528"
    },
    {
        "id": "140140047004528-140140047006784",
        "source": "140140047004528",
        "target": "140140047006784"
    },
    {
        "id": "140140047000496-140140047305840",
        "source": "140140047000496",
        "target": "140140047305840"
    },
    {
        "id": "140140047305840-140140046712256",
        "source": "140140047305840",
        "target": "140140046712256"
    },
    {
        "id": "140140047006112-140140047211664",
        "source": "140140047006112",
        "target": "140140047211664"
    },
    {
        "id": "140140046999536-140140047206672",
        "source": "140140046999536",
        "target": "140140047206672"
    },
    {
        "id": "140140046998384-140140046884800",
        "source": "140140046998384",
        "target": "140140046884800"
    },
    {
        "id": "140140046884800-140140046994592",
        "source": "140140046884800",
        "target": "140140046994592"
    },
    {
        "id": "140140046994592-140140046702752",
        "source": "140140046994592",
        "target": "140140046702752"
    },
    {
        "id": "140140046702752-140140046993584",
        "source": "140140046702752",
        "target": "140140046993584"
    },
    {
        "id": "140140046884800-140140046995792",
        "source": "140140046884800",
        "target": "140140046995792"
    },
    {
        "id": "140140046995792-140140046702704",
        "source": "140140046995792",
        "target": "140140046702704"
    },
    {
        "id": "(140140046704432->35)-(140140046710000->35)",
        "source": "140140046704432->35",
        "target": "140140046710000->35",
        "animated": true
    },
    {
        "id": "(140140046704432->113)-(140140046710000->113)",
        "source": "140140046704432->113",
        "target": "140140046710000->113",
        "animated": true
    },
    {
        "id": "(140140046704432->19)-(140140046710000->19)",
        "source": "140140046704432->19",
        "target": "140140046710000->19",
        "animated": true
    },
    {
        "id": "(140140046704432->16)-(140140046710000->16)",
        "source": "140140046704432->16",
        "target": "140140046710000->16",
        "animated": true
    },
    {
        "id": "(140140046704432->17)-(140140046710000->17)",
        "source": "140140046704432->17",
        "target": "140140046710000->17",
        "animated": true
    },
    {
        "id": "(140140046704432->122)-(140140046710000->122)",
        "source": "140140046704432->122",
        "target": "140140046710000->122",
        "animated": true
    },
    {
        "id": "(140140046704432->61)-(140140046710000->61)",
        "source": "140140046704432->61",
        "target": "140140046710000->61",
        "animated": true
    },
    {
        "id": "(140140046704432->212)-(140140046710000->212)",
        "source": "140140046704432->212",
        "target": "140140046710000->212",
        "animated": true
    },
    {
        "id": "(140140046704432->84)-(140140046710000->84)",
        "source": "140140046704432->84",
        "target": "140140046710000->84",
        "animated": true
    },
    {
        "id": "(140140046704432->245)-(140140046710000->245)",
        "source": "140140046704432->245",
        "target": "140140046710000->245",
        "animated": true
    },
    {
        "id": "(140140046704432->109)-(140140046710000->109)",
        "source": "140140046704432->109",
        "target": "140140046710000->109",
        "animated": true
    },
    {
        "id": "(140140046704432->163)-(140140046710000->163)",
        "source": "140140046704432->163",
        "target": "140140046710000->163",
        "animated": true
    },
    {
        "id": "(140140046704432->164)-(140140046710000->164)",
        "source": "140140046704432->164",
        "target": "140140046710000->164",
        "animated": true
    },
    {
        "id": "(140140046704432->165)-(140140046710000->165)",
        "source": "140140046704432->165",
        "target": "140140046710000->165",
        "animated": true
    },
    {
        "id": "(140140046704432->166)-(140140046710000->166)",
        "source": "140140046704432->166",
        "target": "140140046710000->166",
        "animated": true
    },
    {
        "id": "(140140046704432->171)-(140140046710000->171)",
        "source": "140140046704432->171",
        "target": "140140046710000->171",
        "animated": true
    },
    {
        "id": "(140140046704432->291)-(140140046710000->291)",
        "source": "140140046704432->291",
        "target": "140140046710000->291",
        "animated": true
    },
    {
        "id": "(140140046704432->309)-(140140046710000->309)",
        "source": "140140046704432->309",
        "target": "140140046710000->309",
        "animated": true
    },
    {
        "id": "(140140046704432->328)-(140140046710000->109)",
        "source": "140140046704432->328",
        "target": "140140046710000->109",
        "animated": true
    },
    {
        "id": "(140140046710000->35)-(140140046995504->35)",
        "source": "140140046710000->35",
        "target": "140140046995504->35",
        "animated": true
    },
    {
        "id": "(140140046710000->113)-(140140046995504->113)",
        "source": "140140046710000->113",
        "target": "140140046995504->113",
        "animated": true
    },
    {
        "id": "(140140046710000->19)-(140140046995504->19)",
        "source": "140140046710000->19",
        "target": "140140046995504->19",
        "animated": true
    },
    {
        "id": "(140140046710000->16)-(140140046995504->16)",
        "source": "140140046710000->16",
        "target": "140140046995504->16",
        "animated": true
    },
    {
        "id": "(140140046710000->17)-(140140046995504->17)",
        "source": "140140046710000->17",
        "target": "140140046995504->17",
        "animated": true
    },
    {
        "id": "(140140046710000->122)-(140140046995504->122)",
        "source": "140140046710000->122",
        "target": "140140046995504->122",
        "animated": true
    },
    {
        "id": "(140140046710000->61)-(140140046995504->61)",
        "source": "140140046710000->61",
        "target": "140140046995504->61",
        "animated": true
    },
    {
        "id": "(140140046710000->212)-(140140046995504->212)",
        "source": "140140046710000->212",
        "target": "140140046995504->212",
        "animated": true
    },
    {
        "id": "(140140046710000->84)-(140140046995504->84)",
        "source": "140140046710000->84",
        "target": "140140046995504->84",
        "animated": true
    },
    {
        "id": "(140140046710000->245)-(140140046995504->245)",
        "source": "140140046710000->245",
        "target": "140140046995504->245",
        "animated": true
    },
    {
        "id": "(140140046710000->109)-(140140046995504->109)",
        "source": "140140046710000->109",
        "target": "140140046995504->109",
        "animated": true
    },
    {
        "id": "(140140046710000->163)-(140140046995504->163)",
        "source": "140140046710000->163",
        "target": "140140046995504->163",
        "animated": true
    },
    {
        "id": "(140140046710000->164)-(140140046995504->164)",
        "source": "140140046710000->164",
        "target": "140140046995504->164",
        "animated": true
    },
    {
        "id": "(140140046710000->165)-(140140046995504->165)",
        "source": "140140046710000->165",
        "target": "140140046995504->165",
        "animated": true
    },
    {
        "id": "(140140046710000->166)-(140140046995504->166)",
        "source": "140140046710000->166",
        "target": "140140046995504->166",
        "animated": true
    },
    {
        "id": "(140140046710000->171)-(140140046995504->171)",
        "source": "140140046710000->171",
        "target": "140140046995504->171",
        "animated": true
    },
    {
        "id": "(140140046710000->291)-(140140046995504->291)",
        "source": "140140046710000->291",
        "target": "140140046995504->291",
        "animated": true
    },
    {
        "id": "(140140046710000->309)-(140140046995504->84)",
        "source": "140140046710000->309",
        "target": "140140046995504->84",
        "animated": true
    },
    {
        "id": "(140140046995504->35)-(140140047003136->35)",
        "source": "140140046995504->35",
        "target": "140140047003136->35",
        "animated": true
    },
    {
        "id": "(140140046995504->113)-(140140047003136->113)",
        "source": "140140046995504->113",
        "target": "140140047003136->113",
        "animated": true
    },
    {
        "id": "(140140046995504->19)-(140140047003136->19)",
        "source": "140140046995504->19",
        "target": "140140047003136->19",
        "animated": true
    },
    {
        "id": "(140140046995504->16)-(140140047003136->16)",
        "source": "140140046995504->16",
        "target": "140140047003136->16",
        "animated": true
    },
    {
        "id": "(140140046995504->17)-(140140047003136->17)",
        "source": "140140046995504->17",
        "target": "140140047003136->17",
        "animated": true
    },
    {
        "id": "(140140046995504->122)-(140140047003136->122)",
        "source": "140140046995504->122",
        "target": "140140047003136->122",
        "animated": true
    },
    {
        "id": "(140140046995504->61)-(140140047003136->61)",
        "source": "140140046995504->61",
        "target": "140140047003136->61",
        "animated": true
    },
    {
        "id": "(140140046995504->212)-(140140047003136->212)",
        "source": "140140046995504->212",
        "target": "140140047003136->212",
        "animated": true
    },
    {
        "id": "(140140046995504->84)-(140140047003136->84)",
        "source": "140140046995504->84",
        "target": "140140047003136->84",
        "animated": true
    },
    {
        "id": "(140140046995504->245)-(140140047003136->245)",
        "source": "140140046995504->245",
        "target": "140140047003136->245",
        "animated": true
    },
    {
        "id": "(140140046995504->109)-(140140047003136->109)",
        "source": "140140046995504->109",
        "target": "140140047003136->109",
        "animated": true
    },
    {
        "id": "(140140046995504->163)-(140140047003136->163)",
        "source": "140140046995504->163",
        "target": "140140047003136->163",
        "animated": true
    },
    {
        "id": "(140140046995504->164)-(140140047003136->164)",
        "source": "140140046995504->164",
        "target": "140140047003136->164",
        "animated": true
    },
    {
        "id": "(140140046995504->165)-(140140047003136->165)",
        "source": "140140046995504->165",
        "target": "140140047003136->165",
        "animated": true
    },
    {
        "id": "(140140046995504->166)-(140140047003136->166)",
        "source": "140140046995504->166",
        "target": "140140047003136->166",
        "animated": true
    },
    {
        "id": "(140140046995504->171)-(140140047003136->171)",
        "source": "140140046995504->171",
        "target": "140140047003136->171",
        "animated": true
    },
    {
        "id": "(140140046995504->291)-(140140047003136->61)",
        "source": "140140046995504->291",
        "target": "140140047003136->61",
        "animated": true
    },
    {
        "id": "(140140047003136->35)-(140140046996896->35)",
        "source": "140140047003136->35",
        "target": "140140046996896->35",
        "animated": true
    },
    {
        "id": "(140140047003136->113)-(140140046996896->113)",
        "source": "140140047003136->113",
        "target": "140140046996896->113",
        "animated": true
    },
    {
        "id": "(140140047003136->19)-(140140046996896->19)",
        "source": "140140047003136->19",
        "target": "140140046996896->19",
        "animated": true
    },
    {
        "id": "(140140047003136->16)-(140140046996896->16)",
        "source": "140140047003136->16",
        "target": "140140046996896->16",
        "animated": true
    },
    {
        "id": "(140140047003136->17)-(140140046996896->17)",
        "source": "140140047003136->17",
        "target": "140140046996896->17",
        "animated": true
    },
    {
        "id": "(140140047003136->122)-(140140046996896->122)",
        "source": "140140047003136->122",
        "target": "140140046996896->122",
        "animated": true
    },
    {
        "id": "(140140047003136->61)-(140140046996896->61)",
        "source": "140140047003136->61",
        "target": "140140046996896->61",
        "animated": true
    },
    {
        "id": "(140140047003136->212)-(140140046996896->212)",
        "source": "140140047003136->212",
        "target": "140140046996896->212",
        "animated": true
    },
    {
        "id": "(140140047003136->84)-(140140046996896->84)",
        "source": "140140047003136->84",
        "target": "140140046996896->84",
        "animated": true
    },
    {
        "id": "(140140047003136->245)-(140140046996896->245)",
        "source": "140140047003136->245",
        "target": "140140046996896->245",
        "animated": true
    },
    {
        "id": "(140140047003136->109)-(140140046996896->109)",
        "source": "140140047003136->109",
        "target": "140140046996896->109",
        "animated": true
    },
    {
        "id": "(140140047003136->163)-(140140047006064->163)",
        "source": "140140047003136->163",
        "target": "140140047006064->163",
        "animated": true
    },
    {
        "id": "(140140047003136->164)-(140140047006064->164)",
        "source": "140140047003136->164",
        "target": "140140047006064->164",
        "animated": true
    },
    {
        "id": "(140140047003136->165)-(140140047006064->165)",
        "source": "140140047003136->165",
        "target": "140140047006064->165",
        "animated": true
    },
    {
        "id": "(140140047003136->166)-(140140047006064->166)",
        "source": "140140047003136->166",
        "target": "140140047006064->166",
        "animated": true
    },
    {
        "id": "(140140047003136->171)-(140140047006064->171)",
        "source": "140140047003136->171",
        "target": "140140047006064->171",
        "animated": true
    },
    {
        "id": "(140140047006064->163)-(140140037380448->163)",
        "source": "140140047006064->163",
        "target": "140140037380448->163",
        "animated": true
    },
    {
        "id": "(140140047006064->164)-(140140037380448->164)",
        "source": "140140047006064->164",
        "target": "140140037380448->164",
        "animated": true
    },
    {
        "id": "(140140047006064->165)-(140140037380448->165)",
        "source": "140140047006064->165",
        "target": "140140037380448->165",
        "animated": true
    },
    {
        "id": "(140140047006064->166)-(140140037380448->166)",
        "source": "140140047006064->166",
        "target": "140140037380448->166",
        "animated": true
    },
    {
        "id": "(140140047006064->171)-(140140037380448->163)",
        "source": "140140047006064->171",
        "target": "140140037380448->163",
        "animated": true
    },
    {
        "id": "(140140047006064->171)-(140140037380448->164)",
        "source": "140140047006064->171",
        "target": "140140037380448->164",
        "animated": true
    },
    {
        "id": "(140140047006064->171)-(140140037380448->165)",
        "source": "140140047006064->171",
        "target": "140140037380448->165",
        "animated": true
    },
    {
        "id": "(140140047006064->171)-(140140037380448->166)",
        "source": "140140047006064->171",
        "target": "140140037380448->166",
        "animated": true
    },
    {
        "id": "(140140046996896->35)-(140140046993680->35)",
        "source": "140140046996896->35",
        "target": "140140046993680->35",
        "animated": true
    },
    {
        "id": "(140140046996896->35)-(140140037379536->226)",
        "source": "140140046996896->35",
        "target": "140140037379536->226",
        "animated": true
    },
    {
        "id": "(140140046996896->113)-(140140046993680->113)",
        "source": "140140046996896->113",
        "target": "140140046993680->113",
        "animated": true
    },
    {
        "id": "(140140046996896->19)-(140140046993680->19)",
        "source": "140140046996896->19",
        "target": "140140046993680->19",
        "animated": true
    },
    {
        "id": "(140140046996896->16)-(140140046993680->16)",
        "source": "140140046996896->16",
        "target": "140140046993680->16",
        "animated": true
    },
    {
        "id": "(140140046996896->17)-(140140046993680->17)",
        "source": "140140046996896->17",
        "target": "140140046993680->17",
        "animated": true
    },
    {
        "id": "(140140046996896->122)-(140140046993680->122)",
        "source": "140140046996896->122",
        "target": "140140046993680->122",
        "animated": true
    },
    {
        "id": "(140140046996896->61)-(140140046993680->61)",
        "source": "140140046996896->61",
        "target": "140140046993680->61",
        "animated": true
    },
    {
        "id": "(140140046996896->212)-(140140046993680->35)",
        "source": "140140046996896->212",
        "target": "140140046993680->35",
        "animated": true
    },
    {
        "id": "(140140046996896->212)-(140140037379536->226)",
        "source": "140140046996896->212",
        "target": "140140037379536->226",
        "animated": true
    },
    {
        "id": "(140140046996896->84)-(140140046993680->84)",
        "source": "140140046996896->84",
        "target": "140140046993680->84",
        "animated": true
    },
    {
        "id": "(140140046996896->245)-(140140037379536->245)",
        "source": "140140046996896->245",
        "target": "140140037379536->245",
        "animated": true
    },
    {
        "id": "(140140046996896->109)-(140140037379536->109)",
        "source": "140140046996896->109",
        "target": "140140037379536->109",
        "animated": true
    },
    {
        "id": "(140140037379536->245)-(140140047002464->245)",
        "source": "140140037379536->245",
        "target": "140140047002464->245",
        "animated": true
    },
    {
        "id": "(140140037379536->226)-(140140047002464->226)",
        "source": "140140037379536->226",
        "target": "140140047002464->226",
        "animated": true
    },
    {
        "id": "(140140037379536->109)-(140140047002464->109)",
        "source": "140140037379536->109",
        "target": "140140047002464->109",
        "animated": true
    },
    {
        "id": "(140140047002464->245)-(140140037386400->245)",
        "source": "140140047002464->245",
        "target": "140140037386400->245",
        "animated": true
    },
    {
        "id": "(140140047002464->226)-(140140037386400->226)",
        "source": "140140047002464->226",
        "target": "140140037386400->226",
        "animated": true
    },
    {
        "id": "(140140047002464->109)-(140140037386400->109)",
        "source": "140140047002464->109",
        "target": "140140037386400->109",
        "animated": true
    },
    {
        "id": "(140140037386400->245)-(140140037378000->245)",
        "source": "140140037386400->245",
        "target": "140140037378000->245",
        "animated": true
    },
    {
        "id": "(140140037386400->226)-(140140037378000->226)",
        "source": "140140037386400->226",
        "target": "140140037378000->226",
        "animated": true
    },
    {
        "id": "(140140037386400->109)-(140140037378000->109)",
        "source": "140140037386400->109",
        "target": "140140037378000->109",
        "animated": true
    },
    {
        "id": "(140140037378000->245)-(140140047007024->245)",
        "source": "140140037378000->245",
        "target": "140140047007024->245",
        "animated": true
    },
    {
        "id": "(140140037378000->226)-(140140047007024->226)",
        "source": "140140037378000->226",
        "target": "140140047007024->226",
        "animated": true
    },
    {
        "id": "(140140037378000->109)-(140140047007024->84)",
        "source": "140140037378000->109",
        "target": "140140047007024->84",
        "animated": true
    },
    {
        "id": "(140140047007024->226)-(140140047003760->226)",
        "source": "140140047007024->226",
        "target": "140140047003760->226",
        "animated": true
    },
    {
        "id": "(140140047007024->226)-(140140037381456->244)",
        "source": "140140047007024->226",
        "target": "140140037381456->244",
        "animated": true
    },
    {
        "id": "(140140047007024->224)-(140140047003760->224)",
        "source": "140140047007024->224",
        "target": "140140047003760->224",
        "animated": true
    },
    {
        "id": "(140140047007024->225)-(140140047003760->225)",
        "source": "140140047007024->225",
        "target": "140140047003760->225",
        "animated": true
    },
    {
        "id": "(140140047007024->241)-(140140047003760->241)",
        "source": "140140047007024->241",
        "target": "140140047003760->241",
        "animated": true
    },
    {
        "id": "(140140047007024->84)-(140140047003760->84)",
        "source": "140140047007024->84",
        "target": "140140047003760->84",
        "animated": true
    },
    {
        "id": "(140140047007024->245)-(140140037381456->245)",
        "source": "140140047007024->245",
        "target": "140140037381456->245",
        "animated": true
    },
    {
        "id": "(140140047003760->226)-(140140046699248->226)",
        "source": "140140047003760->226",
        "target": "140140046699248->226",
        "animated": true
    },
    {
        "id": "(140140047003760->226)-(140140037377952->243)",
        "source": "140140047003760->226",
        "target": "140140037377952->243",
        "animated": true
    },
    {
        "id": "(140140047003760->224)-(140140046699248->224)",
        "source": "140140047003760->224",
        "target": "140140046699248->224",
        "animated": true
    },
    {
        "id": "(140140047003760->225)-(140140046699248->225)",
        "source": "140140047003760->225",
        "target": "140140046699248->225",
        "animated": true
    },
    {
        "id": "(140140047003760->241)-(140140037377952->241)",
        "source": "140140047003760->241",
        "target": "140140037377952->241",
        "animated": true
    },
    {
        "id": "(140140047003760->84)-(140140037377952->84)",
        "source": "140140047003760->84",
        "target": "140140037377952->84",
        "animated": true
    },
    {
        "id": "(140140037377952->243)-(140140047002896->243)",
        "source": "140140037377952->243",
        "target": "140140047002896->243",
        "animated": true
    },
    {
        "id": "(140140037377952->241)-(140140047002896->241)",
        "source": "140140037377952->241",
        "target": "140140047002896->241",
        "animated": true
    },
    {
        "id": "(140140037377952->84)-(140140047002896->61)",
        "source": "140140037377952->84",
        "target": "140140047002896->61",
        "animated": true
    },
    {
        "id": "(140140047002896->227)-(140140047000688->227)",
        "source": "140140047002896->227",
        "target": "140140047000688->227",
        "animated": true
    },
    {
        "id": "(140140047002896->227)-(140140037380544->242)",
        "source": "140140047002896->227",
        "target": "140140037380544->242",
        "animated": true
    },
    {
        "id": "(140140047002896->228)-(140140047000688->228)",
        "source": "140140047002896->228",
        "target": "140140047000688->228",
        "animated": true
    },
    {
        "id": "(140140047002896->229)-(140140047000688->229)",
        "source": "140140047002896->229",
        "target": "140140047000688->229",
        "animated": true
    },
    {
        "id": "(140140047002896->230)-(140140047000688->230)",
        "source": "140140047002896->230",
        "target": "140140047000688->230",
        "animated": true
    },
    {
        "id": "(140140047002896->61)-(140140047000688->61)",
        "source": "140140047002896->61",
        "target": "140140047000688->61",
        "animated": true
    },
    {
        "id": "(140140047002896->241)-(140140037380544->241)",
        "source": "140140047002896->241",
        "target": "140140037380544->241",
        "animated": true
    },
    {
        "id": "(140140047002896->243)-(140140037380544->243)",
        "source": "140140047002896->243",
        "target": "140140037380544->243",
        "animated": true
    },
    {
        "id": "(140140047000688->227)-(140140037382512->227)",
        "source": "140140047000688->227",
        "target": "140140037382512->227",
        "animated": true
    },
    {
        "id": "(140140047000688->227)-(140140046706736->235)",
        "source": "140140047000688->227",
        "target": "140140046706736->235",
        "animated": true
    },
    {
        "id": "(140140047000688->228)-(140140037382512->228)",
        "source": "140140047000688->228",
        "target": "140140037382512->228",
        "animated": true
    },
    {
        "id": "(140140047000688->229)-(140140037382512->229)",
        "source": "140140047000688->229",
        "target": "140140037382512->229",
        "animated": true
    },
    {
        "id": "(140140047000688->230)-(140140037382512->230)",
        "source": "140140047000688->230",
        "target": "140140037382512->230",
        "animated": true
    },
    {
        "id": "(140140047000688->61)-(140140046706736->61)",
        "source": "140140047000688->61",
        "target": "140140046706736->61",
        "animated": true
    },
    {
        "id": "(140140046706736->235)-(140140037388512->235)",
        "source": "140140046706736->235",
        "target": "140140037388512->235",
        "animated": true
    },
    {
        "id": "(140140037388512->231)-(140140037388608->231)",
        "source": "140140037388512->231",
        "target": "140140037388608->231",
        "animated": true
    },
    {
        "id": "(140140037388512->232)-(140140037388608->232)",
        "source": "140140037388512->232",
        "target": "140140037388608->232",
        "animated": true
    },
    {
        "id": "(140140037388512->233)-(140140037388608->233)",
        "source": "140140037388512->233",
        "target": "140140037388608->233",
        "animated": true
    },
    {
        "id": "(140140037388512->234)-(140140037388608->234)",
        "source": "140140037388512->234",
        "target": "140140037388608->234",
        "animated": true
    },
    {
        "id": "(140140037388512->235)-(140140037388608->235)",
        "source": "140140037388512->235",
        "target": "140140037388608->235",
        "animated": true
    },
    {
        "id": "(140140037381408->236)-(140140037594544->236)",
        "source": "140140037381408->236",
        "target": "140140037594544->236",
        "animated": true
    },
    {
        "id": "(140140037381408->237)-(140140037594544->237)",
        "source": "140140037381408->237",
        "target": "140140037594544->237",
        "animated": true
    },
    {
        "id": "(140140037381408->238)-(140140037594544->238)",
        "source": "140140037381408->238",
        "target": "140140037594544->238",
        "animated": true
    },
    {
        "id": "(140140037381408->239)-(140140037594544->239)",
        "source": "140140037381408->239",
        "target": "140140037594544->239",
        "animated": true
    },
    {
        "id": "(140140037381408->240)-(140140037594544->240)",
        "source": "140140037381408->240",
        "target": "140140037594544->240",
        "animated": true
    },
    {
        "id": "(140140037594544->236)-(140140046705872->236)",
        "source": "140140037594544->236",
        "target": "140140046705872->236",
        "animated": true
    },
    {
        "id": "(140140037594544->237)-(140140046705872->237)",
        "source": "140140037594544->237",
        "target": "140140046705872->237",
        "animated": true
    },
    {
        "id": "(140140037594544->238)-(140140046705872->238)",
        "source": "140140037594544->238",
        "target": "140140046705872->238",
        "animated": true
    },
    {
        "id": "(140140037594544->239)-(140140046705872->239)",
        "source": "140140037594544->239",
        "target": "140140046705872->239",
        "animated": true
    },
    {
        "id": "(140140037594544->240)-(140140046705872->240)",
        "source": "140140037594544->240",
        "target": "140140046705872->240",
        "animated": true
    },
    {
        "id": "(140140037388608->231)-(140140046992384->231)",
        "source": "140140037388608->231",
        "target": "140140046992384->231",
        "animated": true
    },
    {
        "id": "(140140037388608->232)-(140140046992384->232)",
        "source": "140140037388608->232",
        "target": "140140046992384->232",
        "animated": true
    },
    {
        "id": "(140140037388608->233)-(140140046992384->233)",
        "source": "140140037388608->233",
        "target": "140140046992384->233",
        "animated": true
    },
    {
        "id": "(140140037388608->234)-(140140046992384->234)",
        "source": "140140037388608->234",
        "target": "140140046992384->234",
        "animated": true
    },
    {
        "id": "(140140037388608->235)-(140140046992384->235)",
        "source": "140140037388608->235",
        "target": "140140046992384->235",
        "animated": true
    },
    {
        "id": "(140140046993680->113)-(140140046994784->113)",
        "source": "140140046993680->113",
        "target": "140140046994784->113",
        "animated": true
    },
    {
        "id": "(140140046993680->113)-(140140047213824->210)",
        "source": "140140046993680->113",
        "target": "140140047213824->210",
        "animated": true
    },
    {
        "id": "(140140046993680->19)-(140140046994784->19)",
        "source": "140140046993680->19",
        "target": "140140046994784->19",
        "animated": true
    },
    {
        "id": "(140140046993680->16)-(140140046994784->16)",
        "source": "140140046993680->16",
        "target": "140140046994784->16",
        "animated": true
    },
    {
        "id": "(140140046993680->17)-(140140046994784->17)",
        "source": "140140046993680->17",
        "target": "140140046994784->17",
        "animated": true
    },
    {
        "id": "(140140046993680->122)-(140140046994784->122)",
        "source": "140140046993680->122",
        "target": "140140046994784->122",
        "animated": true
    },
    {
        "id": "(140140046993680->35)-(140140046994784->35)",
        "source": "140140046993680->35",
        "target": "140140046994784->35",
        "animated": true
    },
    {
        "id": "(140140046993680->61)-(140140046994784->61)",
        "source": "140140046993680->61",
        "target": "140140046994784->61",
        "animated": true
    },
    {
        "id": "(140140046993680->212)-(140140047213824->212)",
        "source": "140140046993680->212",
        "target": "140140047213824->212",
        "animated": true
    },
    {
        "id": "(140140046993680->84)-(140140047213824->84)",
        "source": "140140046993680->84",
        "target": "140140047213824->84",
        "animated": true
    },
    {
        "id": "(140140047213824->212)-(140140047314672->212)",
        "source": "140140047213824->212",
        "target": "140140047314672->212",
        "animated": true
    },
    {
        "id": "(140140047213824->210)-(140140047314672->210)",
        "source": "140140047213824->210",
        "target": "140140047314672->210",
        "animated": true
    },
    {
        "id": "(140140047213824->84)-(140140047314672->84)",
        "source": "140140047213824->84",
        "target": "140140047314672->84",
        "animated": true
    },
    {
        "id": "(140140047314672->212)-(140140047318800->212)",
        "source": "140140047314672->212",
        "target": "140140047318800->212",
        "animated": true
    },
    {
        "id": "(140140047314672->210)-(140140047318800->210)",
        "source": "140140047314672->210",
        "target": "140140047318800->210",
        "animated": true
    },
    {
        "id": "(140140047314672->84)-(140140047318800->84)",
        "source": "140140047314672->84",
        "target": "140140047318800->84",
        "animated": true
    },
    {
        "id": "(140140047318800->212)-(140140047215840->212)",
        "source": "140140047318800->212",
        "target": "140140047215840->212",
        "animated": true
    },
    {
        "id": "(140140047318800->210)-(140140047215840->210)",
        "source": "140140047318800->210",
        "target": "140140047215840->210",
        "animated": true
    },
    {
        "id": "(140140047318800->84)-(140140047215840->84)",
        "source": "140140047318800->84",
        "target": "140140047215840->84",
        "animated": true
    },
    {
        "id": "(140140047215840->212)-(140140047001024->212)",
        "source": "140140047215840->212",
        "target": "140140047001024->212",
        "animated": true
    },
    {
        "id": "(140140047215840->210)-(140140047001024->210)",
        "source": "140140047215840->210",
        "target": "140140047001024->210",
        "animated": true
    },
    {
        "id": "(140140047215840->84)-(140140047001024->61)",
        "source": "140140047215840->84",
        "target": "140140047001024->61",
        "animated": true
    },
    {
        "id": "(140140047001024->196)-(140140046998528->196)",
        "source": "140140047001024->196",
        "target": "140140046998528->196",
        "animated": true
    },
    {
        "id": "(140140047001024->196)-(140140047310256->211)",
        "source": "140140047001024->196",
        "target": "140140047310256->211",
        "animated": true
    },
    {
        "id": "(140140047001024->197)-(140140046998528->197)",
        "source": "140140047001024->197",
        "target": "140140046998528->197",
        "animated": true
    },
    {
        "id": "(140140047001024->198)-(140140046998528->198)",
        "source": "140140047001024->198",
        "target": "140140046998528->198",
        "animated": true
    },
    {
        "id": "(140140047001024->199)-(140140046998528->199)",
        "source": "140140047001024->199",
        "target": "140140046998528->199",
        "animated": true
    },
    {
        "id": "(140140047001024->61)-(140140046998528->61)",
        "source": "140140047001024->61",
        "target": "140140046998528->61",
        "animated": true
    },
    {
        "id": "(140140047001024->210)-(140140047310256->210)",
        "source": "140140047001024->210",
        "target": "140140047310256->210",
        "animated": true
    },
    {
        "id": "(140140047001024->212)-(140140047310256->212)",
        "source": "140140047001024->212",
        "target": "140140047310256->212",
        "animated": true
    },
    {
        "id": "(140140046998528->196)-(140140047003952->196)",
        "source": "140140046998528->196",
        "target": "140140047003952->196",
        "animated": true
    },
    {
        "id": "(140140046998528->196)-(140140047316160->204)",
        "source": "140140046998528->196",
        "target": "140140047316160->204",
        "animated": true
    },
    {
        "id": "(140140046998528->197)-(140140047003952->197)",
        "source": "140140046998528->197",
        "target": "140140047003952->197",
        "animated": true
    },
    {
        "id": "(140140046998528->198)-(140140047003952->198)",
        "source": "140140046998528->198",
        "target": "140140047003952->198",
        "animated": true
    },
    {
        "id": "(140140046998528->199)-(140140047003952->199)",
        "source": "140140046998528->199",
        "target": "140140047003952->199",
        "animated": true
    },
    {
        "id": "(140140046998528->61)-(140140047316160->61)",
        "source": "140140046998528->61",
        "target": "140140047316160->61",
        "animated": true
    },
    {
        "id": "(140140047316160->204)-(140140047310160->204)",
        "source": "140140047316160->204",
        "target": "140140047310160->204",
        "animated": true
    },
    {
        "id": "(140140047310160->200)-(140140047304496->200)",
        "source": "140140047310160->200",
        "target": "140140047304496->200",
        "animated": true
    },
    {
        "id": "(140140047310160->201)-(140140047304496->201)",
        "source": "140140047310160->201",
        "target": "140140047304496->201",
        "animated": true
    },
    {
        "id": "(140140047310160->202)-(140140047304496->202)",
        "source": "140140047310160->202",
        "target": "140140047304496->202",
        "animated": true
    },
    {
        "id": "(140140047310160->203)-(140140047304496->203)",
        "source": "140140047310160->203",
        "target": "140140047304496->203",
        "animated": true
    },
    {
        "id": "(140140047310160->204)-(140140047304496->204)",
        "source": "140140047310160->204",
        "target": "140140047304496->204",
        "animated": true
    },
    {
        "id": "(140140047316736->205)-(140140046712160->205)",
        "source": "140140047316736->205",
        "target": "140140046712160->205",
        "animated": true
    },
    {
        "id": "(140140047316736->206)-(140140046712160->206)",
        "source": "140140047316736->206",
        "target": "140140046712160->206",
        "animated": true
    },
    {
        "id": "(140140047316736->207)-(140140046712160->207)",
        "source": "140140047316736->207",
        "target": "140140046712160->207",
        "animated": true
    },
    {
        "id": "(140140047316736->208)-(140140046712160->208)",
        "source": "140140047316736->208",
        "target": "140140046712160->208",
        "animated": true
    },
    {
        "id": "(140140047316736->209)-(140140046712160->209)",
        "source": "140140047316736->209",
        "target": "140140046712160->209",
        "animated": true
    },
    {
        "id": "(140140046712160->205)-(140140047000400->205)",
        "source": "140140046712160->205",
        "target": "140140047000400->205",
        "animated": true
    },
    {
        "id": "(140140046712160->206)-(140140047000400->206)",
        "source": "140140046712160->206",
        "target": "140140047000400->206",
        "animated": true
    },
    {
        "id": "(140140046712160->207)-(140140047000400->207)",
        "source": "140140046712160->207",
        "target": "140140047000400->207",
        "animated": true
    },
    {
        "id": "(140140046712160->208)-(140140047000400->208)",
        "source": "140140046712160->208",
        "target": "140140047000400->208",
        "animated": true
    },
    {
        "id": "(140140046712160->209)-(140140047000400->209)",
        "source": "140140046712160->209",
        "target": "140140047000400->209",
        "animated": true
    },
    {
        "id": "(140140047304496->200)-(140140046994832->200)",
        "source": "140140047304496->200",
        "target": "140140046994832->200",
        "animated": true
    },
    {
        "id": "(140140047304496->201)-(140140046994832->201)",
        "source": "140140047304496->201",
        "target": "140140046994832->201",
        "animated": true
    },
    {
        "id": "(140140047304496->202)-(140140046994832->202)",
        "source": "140140047304496->202",
        "target": "140140046994832->202",
        "animated": true
    },
    {
        "id": "(140140047304496->203)-(140140046994832->203)",
        "source": "140140047304496->203",
        "target": "140140046994832->203",
        "animated": true
    },
    {
        "id": "(140140047304496->204)-(140140046994832->204)",
        "source": "140140047304496->204",
        "target": "140140046994832->204",
        "animated": true
    },
    {
        "id": "(140140046994784->19)-(140140047204656->19)",
        "source": "140140046994784->19",
        "target": "140140047204656->19",
        "animated": true
    },
    {
        "id": "(140140046994784->19)-(140140047310400->181)",
        "source": "140140046994784->19",
        "target": "140140047310400->181",
        "animated": true
    },
    {
        "id": "(140140046994784->16)-(140140047204656->16)",
        "source": "140140046994784->16",
        "target": "140140047204656->16",
        "animated": true
    },
    {
        "id": "(140140046994784->17)-(140140047204656->17)",
        "source": "140140046994784->17",
        "target": "140140047204656->17",
        "animated": true
    },
    {
        "id": "(140140046994784->122)-(140140047204656->122)",
        "source": "140140046994784->122",
        "target": "140140047204656->122",
        "animated": true
    },
    {
        "id": "(140140046994784->113)-(140140047204656->113)",
        "source": "140140046994784->113",
        "target": "140140047204656->113",
        "animated": true
    },
    {
        "id": "(140140046994784->35)-(140140047204656->35)",
        "source": "140140046994784->35",
        "target": "140140047204656->35",
        "animated": true
    },
    {
        "id": "(140140046994784->61)-(140140047310400->61)",
        "source": "140140046994784->61",
        "target": "140140047310400->61",
        "animated": true
    },
    {
        "id": "(140140047310400->181)-(140140058915264->181)",
        "source": "140140047310400->181",
        "target": "140140058915264->181",
        "animated": true
    },
    {
        "id": "(140140047310400->61)-(140140058915264->61)",
        "source": "140140047310400->61",
        "target": "140140058915264->61",
        "animated": true
    },
    {
        "id": "(140140058915264->181)-(140140046993392->181)",
        "source": "140140058915264->181",
        "target": "140140046993392->181",
        "animated": true
    },
    {
        "id": "(140140058915264->61)-(140140046993392->61)",
        "source": "140140058915264->61",
        "target": "140140046993392->61",
        "animated": true
    },
    {
        "id": "(140140046993392->181)-(140140046998432->181)",
        "source": "140140046993392->181",
        "target": "140140046998432->181",
        "animated": true
    },
    {
        "id": "(140140046993392->61)-(140140046998432->61)",
        "source": "140140046993392->61",
        "target": "140140046998432->61",
        "animated": true
    },
    {
        "id": "(140140046998432->181)-(140140046876880->181)",
        "source": "140140046998432->181",
        "target": "140140046876880->181",
        "animated": true
    },
    {
        "id": "(140140046876880->177)-(140140047311888->177)",
        "source": "140140046876880->177",
        "target": "140140047311888->177",
        "animated": true
    },
    {
        "id": "(140140046876880->178)-(140140047311888->178)",
        "source": "140140046876880->178",
        "target": "140140047311888->178",
        "animated": true
    },
    {
        "id": "(140140046876880->179)-(140140047311888->179)",
        "source": "140140046876880->179",
        "target": "140140047311888->179",
        "animated": true
    },
    {
        "id": "(140140046876880->180)-(140140047311888->180)",
        "source": "140140046876880->180",
        "target": "140140047311888->180",
        "animated": true
    },
    {
        "id": "(140140046876880->181)-(140140047311888->181)",
        "source": "140140046876880->181",
        "target": "140140047311888->181",
        "animated": true
    },
    {
        "id": "(140140047005920->182)-(140140047304736->182)",
        "source": "140140047005920->182",
        "target": "140140047304736->182",
        "animated": true
    },
    {
        "id": "(140140047005920->183)-(140140047304736->183)",
        "source": "140140047005920->183",
        "target": "140140047304736->183",
        "animated": true
    },
    {
        "id": "(140140047005920->184)-(140140047304736->184)",
        "source": "140140047005920->184",
        "target": "140140047304736->184",
        "animated": true
    },
    {
        "id": "(140140047005920->185)-(140140047304736->185)",
        "source": "140140047005920->185",
        "target": "140140047304736->185",
        "animated": true
    },
    {
        "id": "(140140047005920->186)-(140140047304736->186)",
        "source": "140140047005920->186",
        "target": "140140047304736->186",
        "animated": true
    },
    {
        "id": "(140140047304736->182)-(140140047000880->182)",
        "source": "140140047304736->182",
        "target": "140140047000880->182",
        "animated": true
    },
    {
        "id": "(140140047304736->183)-(140140047000880->183)",
        "source": "140140047304736->183",
        "target": "140140047000880->183",
        "animated": true
    },
    {
        "id": "(140140047304736->184)-(140140047000880->184)",
        "source": "140140047304736->184",
        "target": "140140047000880->184",
        "animated": true
    },
    {
        "id": "(140140047304736->185)-(140140047000880->185)",
        "source": "140140047304736->185",
        "target": "140140047000880->185",
        "animated": true
    },
    {
        "id": "(140140047304736->186)-(140140047000880->186)",
        "source": "140140047304736->186",
        "target": "140140047000880->186",
        "animated": true
    },
    {
        "id": "(140140047311888->177)-(140140046994688->177)",
        "source": "140140047311888->177",
        "target": "140140046994688->177",
        "animated": true
    },
    {
        "id": "(140140047311888->178)-(140140046994688->178)",
        "source": "140140047311888->178",
        "target": "140140046994688->178",
        "animated": true
    },
    {
        "id": "(140140047311888->179)-(140140046994688->179)",
        "source": "140140047311888->179",
        "target": "140140046994688->179",
        "animated": true
    },
    {
        "id": "(140140047311888->180)-(140140046994688->180)",
        "source": "140140047311888->180",
        "target": "140140046994688->180",
        "animated": true
    },
    {
        "id": "(140140047311888->181)-(140140046994688->181)",
        "source": "140140047311888->181",
        "target": "140140046994688->181",
        "animated": true
    },
    {
        "id": "(140140047204656->16)-(140140046998384->16)",
        "source": "140140047204656->16",
        "target": "140140046998384->16",
        "animated": true
    },
    {
        "id": "(140140047204656->17)-(140140046998384->17)",
        "source": "140140047204656->17",
        "target": "140140046998384->17",
        "animated": true
    },
    {
        "id": "(140140047204656->19)-(140140046998384->19)",
        "source": "140140047204656->19",
        "target": "140140046998384->19",
        "animated": true
    },
    {
        "id": "(140140047204656->122)-(140140046998384->122)",
        "source": "140140047204656->122",
        "target": "140140046998384->122",
        "animated": true
    },
    {
        "id": "(140140047204656->113)-(140140046998384->113)",
        "source": "140140047204656->113",
        "target": "140140046998384->113",
        "animated": true
    },
    {
        "id": "(140140047204656->35)-(140140046998384->35)",
        "source": "140140047204656->35",
        "target": "140140046998384->35",
        "animated": true
    },
    {
        "id": "(140140046998384->19)-(140140046884800->19)",
        "source": "140140046998384->19",
        "target": "140140046884800->19",
        "animated": true
    },
    {
        "id": "(140140046998384->19)-(140140046996464->114)",
        "source": "140140046998384->19",
        "target": "140140046996464->114",
        "animated": true
    },
    {
        "id": "(140140046998384->15)-(140140046884800->15)",
        "source": "140140046998384->15",
        "target": "140140046884800->15",
        "animated": true
    },
    {
        "id": "(140140046998384->16)-(140140046884800->16)",
        "source": "140140046998384->16",
        "target": "140140046884800->16",
        "animated": true
    },
    {
        "id": "(140140046998384->17)-(140140046884800->17)",
        "source": "140140046998384->17",
        "target": "140140046884800->17",
        "animated": true
    },
    {
        "id": "(140140046998384->18)-(140140046884800->18)",
        "source": "140140046998384->18",
        "target": "140140046884800->18",
        "animated": true
    },
    {
        "id": "(140140046998384->35)-(140140046996464->35)",
        "source": "140140046998384->35",
        "target": "140140046996464->35",
        "animated": true
    },
    {
        "id": "(140140046998384->40)-(140140046996464->40)",
        "source": "140140046998384->40",
        "target": "140140046996464->40",
        "animated": true
    },
    {
        "id": "(140140046998384->109)-(140140046996464->109)",
        "source": "140140046998384->109",
        "target": "140140046996464->109",
        "animated": true
    },
    {
        "id": "(140140046998384->113)-(140140046996464->113)",
        "source": "140140046998384->113",
        "target": "140140046996464->113",
        "animated": true
    },
    {
        "id": "(140140046998384->122)-(140140046996464->122)",
        "source": "140140046998384->122",
        "target": "140140046996464->122",
        "animated": true
    },
    {
        "id": "(140140046998384->123)-(140140046996464->123)",
        "source": "140140046998384->123",
        "target": "140140046996464->123",
        "animated": true
    },
    {
        "id": "(140140046998384->124)-(140140046996464->124)",
        "source": "140140046998384->124",
        "target": "140140046996464->124",
        "animated": true
    },
    {
        "id": "(140140046996464->114)-(140140046991664->114)",
        "source": "140140046996464->114",
        "target": "140140046991664->114",
        "animated": true
    },
    {
        "id": "(140140046996464->114)-(140140046997904->121)",
        "source": "140140046996464->114",
        "target": "140140046997904->121",
        "animated": true
    },
    {
        "id": "(140140046996464->35)-(140140046991664->35)",
        "source": "140140046996464->35",
        "target": "140140046991664->35",
        "animated": true
    },
    {
        "id": "(140140046996464->40)-(140140046991664->40)",
        "source": "140140046996464->40",
        "target": "140140046991664->40",
        "animated": true
    },
    {
        "id": "(140140046996464->109)-(140140046991664->109)",
        "source": "140140046996464->109",
        "target": "140140046991664->109",
        "animated": true
    },
    {
        "id": "(140140046996464->113)-(140140046991664->113)",
        "source": "140140046996464->113",
        "target": "140140046991664->113",
        "animated": true
    },
    {
        "id": "(140140046996464->122)-(140140046997904->122)",
        "source": "140140046996464->122",
        "target": "140140046997904->122",
        "animated": true
    },
    {
        "id": "(140140046996464->123)-(140140046997904->123)",
        "source": "140140046996464->123",
        "target": "140140046997904->123",
        "animated": true
    },
    {
        "id": "(140140046996464->124)-(140140046997904->124)",
        "source": "140140046996464->124",
        "target": "140140046997904->124",
        "animated": true
    },
    {
        "id": "(140140046991664->35)-(140140047213584->35)",
        "source": "140140046991664->35",
        "target": "140140047213584->35",
        "animated": true
    },
    {
        "id": "(140140046991664->35)-(140140046999632->115)",
        "source": "140140046991664->35",
        "target": "140140046999632->115",
        "animated": true
    },
    {
        "id": "(140140046991664->40)-(140140047213584->40)",
        "source": "140140046991664->40",
        "target": "140140047213584->40",
        "animated": true
    },
    {
        "id": "(140140046991664->109)-(140140047213584->109)",
        "source": "140140046991664->109",
        "target": "140140047213584->109",
        "animated": true
    },
    {
        "id": "(140140046991664->113)-(140140046999632->113)",
        "source": "140140046991664->113",
        "target": "140140046999632->113",
        "animated": true
    },
    {
        "id": "(140140046991664->114)-(140140046999632->114)",
        "source": "140140046991664->114",
        "target": "140140046999632->114",
        "animated": true
    },
    {
        "id": "(140140047213584->40)-(140140047214256->40)",
        "source": "140140047213584->40",
        "target": "140140047214256->40",
        "animated": true
    },
    {
        "id": "(140140047213584->35)-(140140047214256->35)",
        "source": "140140047213584->35",
        "target": "140140047214256->35",
        "animated": true
    },
    {
        "id": "(140140047213584->109)-(140140047214256->109)",
        "source": "140140047213584->109",
        "target": "140140047214256->109",
        "animated": true
    },
    {
        "id": "(140140047214256->40)-(140140047002224->40)",
        "source": "140140047214256->40",
        "target": "140140047002224->40",
        "animated": true
    },
    {
        "id": "(140140047214256->35)-(140140047002224->35)",
        "source": "140140047214256->35",
        "target": "140140047002224->35",
        "animated": true
    },
    {
        "id": "(140140047214256->109)-(140140047002224->84)",
        "source": "140140047214256->109",
        "target": "140140047002224->84",
        "animated": true
    },
    {
        "id": "(140140047002224->35)-(140140046999536->35)",
        "source": "140140047002224->35",
        "target": "140140046999536->35",
        "animated": true
    },
    {
        "id": "(140140047002224->35)-(140140047214208->39)",
        "source": "140140047002224->35",
        "target": "140140047214208->39",
        "animated": true
    },
    {
        "id": "(140140047002224->33)-(140140046999536->33)",
        "source": "140140047002224->33",
        "target": "140140046999536->33",
        "animated": true
    },
    {
        "id": "(140140047002224->34)-(140140046999536->34)",
        "source": "140140047002224->34",
        "target": "140140046999536->34",
        "animated": true
    },
    {
        "id": "(140140047002224->88)-(140140046999536->88)",
        "source": "140140047002224->88",
        "target": "140140046999536->88",
        "animated": true
    },
    {
        "id": "(140140047002224->84)-(140140046999536->84)",
        "source": "140140047002224->84",
        "target": "140140046999536->84",
        "animated": true
    },
    {
        "id": "(140140047002224->40)-(140140047214208->40)",
        "source": "140140047002224->40",
        "target": "140140047214208->40",
        "animated": true
    },
    {
        "id": "(140140046999536->35)-(140140047206672->35)",
        "source": "140140046999536->35",
        "target": "140140047206672->35",
        "animated": true
    },
    {
        "id": "(140140046999536->35)-(140140047208016->90)",
        "source": "140140046999536->35",
        "target": "140140047208016->90",
        "animated": true
    },
    {
        "id": "(140140046999536->33)-(140140047206672->33)",
        "source": "140140046999536->33",
        "target": "140140047206672->33",
        "animated": true
    },
    {
        "id": "(140140046999536->34)-(140140047206672->34)",
        "source": "140140046999536->34",
        "target": "140140047206672->34",
        "animated": true
    },
    {
        "id": "(140140046999536->88)-(140140047208016->88)",
        "source": "140140046999536->88",
        "target": "140140047208016->88",
        "animated": true
    },
    {
        "id": "(140140046999536->84)-(140140047208016->84)",
        "source": "140140046999536->84",
        "target": "140140047208016->84",
        "animated": true
    },
    {
        "id": "(140140047208016->90)-(140140047000736->90)",
        "source": "140140047208016->90",
        "target": "140140047000736->90",
        "animated": true
    },
    {
        "id": "(140140047208016->88)-(140140047000736->88)",
        "source": "140140047208016->88",
        "target": "140140047000736->88",
        "animated": true
    },
    {
        "id": "(140140047208016->84)-(140140047000736->61)",
        "source": "140140047208016->84",
        "target": "140140047000736->61",
        "animated": true
    },
    {
        "id": "(140140047000736->25)-(140140047006112->25)",
        "source": "140140047000736->25",
        "target": "140140047006112->25",
        "animated": true
    },
    {
        "id": "(140140047000736->25)-(140140046882640->89)",
        "source": "140140047000736->25",
        "target": "140140046882640->89",
        "animated": true
    },
    {
        "id": "(140140047000736->26)-(140140047006112->26)",
        "source": "140140047000736->26",
        "target": "140140047006112->26",
        "animated": true
    },
    {
        "id": "(140140047000736->27)-(140140047006112->27)",
        "source": "140140047000736->27",
        "target": "140140047006112->27",
        "animated": true
    },
    {
        "id": "(140140047000736->28)-(140140047006112->28)",
        "source": "140140047000736->28",
        "target": "140140047006112->28",
        "animated": true
    },
    {
        "id": "(140140047000736->61)-(140140047006112->61)",
        "source": "140140047000736->61",
        "target": "140140047006112->61",
        "animated": true
    },
    {
        "id": "(140140047000736->88)-(140140046882640->88)",
        "source": "140140047000736->88",
        "target": "140140046882640->88",
        "animated": true
    },
    {
        "id": "(140140047000736->90)-(140140046882640->90)",
        "source": "140140047000736->90",
        "target": "140140046882640->90",
        "animated": true
    },
    {
        "id": "(140140047006112->25)-(140140047211664->25)",
        "source": "140140047006112->25",
        "target": "140140047211664->25",
        "animated": true
    },
    {
        "id": "(140140047006112->25)-(140140047219152->137)",
        "source": "140140047006112->25",
        "target": "140140047219152->137",
        "animated": true
    },
    {
        "id": "(140140047006112->26)-(140140047211664->26)",
        "source": "140140047006112->26",
        "target": "140140047211664->26",
        "animated": true
    },
    {
        "id": "(140140047006112->27)-(140140047211664->27)",
        "source": "140140047006112->27",
        "target": "140140047211664->27",
        "animated": true
    },
    {
        "id": "(140140047006112->28)-(140140047211664->28)",
        "source": "140140047006112->28",
        "target": "140140047211664->28",
        "animated": true
    },
    {
        "id": "(140140047006112->61)-(140140047219152->61)",
        "source": "140140047006112->61",
        "target": "140140047219152->61",
        "animated": true
    },
    {
        "id": "(140140047219152->137)-(140140047000496->137)",
        "source": "140140047219152->137",
        "target": "140140047000496->137",
        "animated": true
    },
    {
        "id": "(140140047000496->133)-(140140047305840->133)",
        "source": "140140047000496->133",
        "target": "140140047305840->133",
        "animated": true
    },
    {
        "id": "(140140047000496->134)-(140140047305840->134)",
        "source": "140140047000496->134",
        "target": "140140047305840->134",
        "animated": true
    },
    {
        "id": "(140140047000496->135)-(140140047305840->135)",
        "source": "140140047000496->135",
        "target": "140140047305840->135",
        "animated": true
    },
    {
        "id": "(140140047000496->136)-(140140047305840->136)",
        "source": "140140047000496->136",
        "target": "140140047305840->136",
        "animated": true
    },
    {
        "id": "(140140047000496->137)-(140140047305840->137)",
        "source": "140140047000496->137",
        "target": "140140047305840->137",
        "animated": true
    },
    {
        "id": "(140140047219968->138)-(140140047004528->138)",
        "source": "140140047219968->138",
        "target": "140140047004528->138",
        "animated": true
    },
    {
        "id": "(140140047219968->139)-(140140047004528->139)",
        "source": "140140047219968->139",
        "target": "140140047004528->139",
        "animated": true
    },
    {
        "id": "(140140047219968->140)-(140140047004528->140)",
        "source": "140140047219968->140",
        "target": "140140047004528->140",
        "animated": true
    },
    {
        "id": "(140140047219968->141)-(140140047004528->141)",
        "source": "140140047219968->141",
        "target": "140140047004528->141",
        "animated": true
    },
    {
        "id": "(140140047219968->142)-(140140047004528->142)",
        "source": "140140047219968->142",
        "target": "140140047004528->142",
        "animated": true
    },
    {
        "id": "(140140047004528->138)-(140140047006784->138)",
        "source": "140140047004528->138",
        "target": "140140047006784->138",
        "animated": true
    },
    {
        "id": "(140140047004528->139)-(140140047006784->139)",
        "source": "140140047004528->139",
        "target": "140140047006784->139",
        "animated": true
    },
    {
        "id": "(140140047004528->140)-(140140047006784->140)",
        "source": "140140047004528->140",
        "target": "140140047006784->140",
        "animated": true
    },
    {
        "id": "(140140047004528->141)-(140140047006784->141)",
        "source": "140140047004528->141",
        "target": "140140047006784->141",
        "animated": true
    },
    {
        "id": "(140140047004528->142)-(140140047006784->142)",
        "source": "140140047004528->142",
        "target": "140140047006784->142",
        "animated": true
    },
    {
        "id": "(140140047305840->133)-(140140046712256->133)",
        "source": "140140047305840->133",
        "target": "140140046712256->133",
        "animated": true
    },
    {
        "id": "(140140047305840->134)-(140140046712256->134)",
        "source": "140140047305840->134",
        "target": "140140046712256->134",
        "animated": true
    },
    {
        "id": "(140140047305840->135)-(140140046712256->135)",
        "source": "140140047305840->135",
        "target": "140140046712256->135",
        "animated": true
    },
    {
        "id": "(140140047305840->136)-(140140046712256->136)",
        "source": "140140047305840->136",
        "target": "140140046712256->136",
        "animated": true
    },
    {
        "id": "(140140047305840->137)-(140140046712256->137)",
        "source": "140140047305840->137",
        "target": "140140046712256->137",
        "animated": true
    },
    {
        "id": "(140140046884800->15)-(140140046995792->15)",
        "source": "140140046884800->15",
        "target": "140140046995792->15",
        "animated": true
    },
    {
        "id": "(140140046884800->16)-(140140046995792->16)",
        "source": "140140046884800->16",
        "target": "140140046995792->16",
        "animated": true
    },
    {
        "id": "(140140046884800->17)-(140140046995792->17)",
        "source": "140140046884800->17",
        "target": "140140046995792->17",
        "animated": true
    },
    {
        "id": "(140140046884800->18)-(140140046995792->18)",
        "source": "140140046884800->18",
        "target": "140140046995792->18",
        "animated": true
    },
    {
        "id": "(140140046884800->19)-(140140046995792->19)",
        "source": "140140046884800->19",
        "target": "140140046995792->19",
        "animated": true
    },
    {
        "id": "(140140046994592->44)-(140140046702752->44)",
        "source": "140140046994592->44",
        "target": "140140046702752->44",
        "animated": true
    },
    {
        "id": "(140140046994592->45)-(140140046702752->45)",
        "source": "140140046994592->45",
        "target": "140140046702752->45",
        "animated": true
    },
    {
        "id": "(140140046994592->46)-(140140046702752->46)",
        "source": "140140046994592->46",
        "target": "140140046702752->46",
        "animated": true
    },
    {
        "id": "(140140046994592->47)-(140140046702752->47)",
        "source": "140140046994592->47",
        "target": "140140046702752->47",
        "animated": true
    },
    {
        "id": "(140140046994592->48)-(140140046702752->48)",
        "source": "140140046994592->48",
        "target": "140140046702752->48",
        "animated": true
    },
    {
        "id": "(140140046702752->44)-(140140046993584->44)",
        "source": "140140046702752->44",
        "target": "140140046993584->44",
        "animated": true
    },
    {
        "id": "(140140046702752->45)-(140140046993584->45)",
        "source": "140140046702752->45",
        "target": "140140046993584->45",
        "animated": true
    },
    {
        "id": "(140140046702752->46)-(140140046993584->46)",
        "source": "140140046702752->46",
        "target": "140140046993584->46",
        "animated": true
    },
    {
        "id": "(140140046702752->47)-(140140046993584->47)",
        "source": "140140046702752->47",
        "target": "140140046993584->47",
        "animated": true
    },
    {
        "id": "(140140046702752->48)-(140140046993584->48)",
        "source": "140140046702752->48",
        "target": "140140046993584->48",
        "animated": true
    },
    {
        "id": "(140140046995792->15)-(140140046702704->15)",
        "source": "140140046995792->15",
        "target": "140140046702704->15",
        "animated": true
    },
    {
        "id": "(140140046995792->16)-(140140046702704->16)",
        "source": "140140046995792->16",
        "target": "140140046702704->16",
        "animated": true
    },
    {
        "id": "(140140046995792->17)-(140140046702704->17)",
        "source": "140140046995792->17",
        "target": "140140046702704->17",
        "animated": true
    },
    {
        "id": "(140140046995792->18)-(140140046702704->18)",
        "source": "140140046995792->18",
        "target": "140140046702704->18",
        "animated": true
    },
    {
        "id": "(140140046995792->19)-(140140046702704->19)",
        "source": "140140046995792->19",
        "target": "140140046702704->19",
        "animated": true
    }
];
