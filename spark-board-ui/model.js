/**
 * IMPORTANT: this file containst the nodes and links for the react-flow application.
 *            however, the actual data will be created by the spark_board application
 *            and this file will be replaced by the real data frame transformation nodes
 *            so this file only exists here to provide a model that allows the react app
 *            to compile and run.
 *            Changes to this file will be irrelevant to the actual production data.
 */


const model_staticSettings = {
    "sourceCodeLink": null
};

const model_defaultSettings = {
    "animationEnabled": true,
    "animationEnabledOnDrag": true,
    "duplicateDataSources": false,
    "organizeNodesOnResize": false,
    "invertDag": true
};

const model_initialNodes = [
    {
        "id": "139997767900256",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "139997767900256->35",
                "139997767900256->113",
                "139997767900256->19",
                "139997767900256->16",
                "139997767900256->17",
                "139997767900256->122",
                "139997767900256->61",
                "139997767900256->212",
                "139997767900256->84",
                "139997767900256->245",
                "139997767900256->109",
                "139997767900256->163",
                "139997767900256->164",
                "139997767900256->165",
                "139997767900256->166",
                "139997767900256->171",
                "139997767900256->291",
                "139997767900256->309",
                "139997767900256->328"
            ]
        }
    },
    {
        "id": "139997767897712",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "139997767897712->35",
                "139997767897712->113",
                "139997767897712->19",
                "139997767897712->16",
                "139997767897712->17",
                "139997767897712->122",
                "139997767897712->61",
                "139997767897712->212",
                "139997767897712->84",
                "139997767897712->245",
                "139997767897712->109",
                "139997767897712->163",
                "139997767897712->164",
                "139997767897712->165",
                "139997767897712->166",
                "139997767897712->171",
                "139997767897712->291",
                "139997767897712->309"
            ]
        }
    },
    {
        "id": "139997767896944",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "139997767896944->35",
                "139997767896944->113",
                "139997767896944->19",
                "139997767896944->16",
                "139997767896944->17",
                "139997767896944->122",
                "139997767896944->61",
                "139997767896944->212",
                "139997767896944->84",
                "139997767896944->245",
                "139997767896944->109",
                "139997767896944->163",
                "139997767896944->164",
                "139997767896944->165",
                "139997767896944->166",
                "139997767896944->171",
                "139997767896944->291"
            ]
        }
    },
    {
        "id": "139997769498144",
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
                "139997769498144->35",
                "139997769498144->113",
                "139997769498144->19",
                "139997769498144->16",
                "139997769498144->17",
                "139997769498144->122",
                "139997769498144->61",
                "139997769498144->212",
                "139997769498144->84",
                "139997769498144->245",
                "139997769498144->109",
                "139997769498144->163",
                "139997769498144->164",
                "139997769498144->165",
                "139997769498144->166",
                "139997769498144->171"
            ]
        }
    },
    {
        "id": "139997769744144",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n"
            },
            "columns": [
                "139997769744144->163",
                "139997769744144->164",
                "139997769744144->165",
                "139997769744144->166",
                "139997769744144->171"
            ]
        }
    },
    {
        "id": "139997769740784",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769740784->163",
                "139997769740784->164",
                "139997769740784->165",
                "139997769740784->166"
            ]
        }
    },
    {
        "id": "139997769729024",
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
                "139997769729024->35",
                "139997769729024->113",
                "139997769729024->19",
                "139997769729024->16",
                "139997769729024->17",
                "139997769729024->122",
                "139997769729024->61",
                "139997769729024->212",
                "139997769729024->84",
                "139997769729024->245",
                "139997769729024->109"
            ]
        }
    },
    {
        "id": "139997769739056",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "139997769739056->245",
                "139997769739056->226",
                "139997769739056->109"
            ]
        }
    },
    {
        "id": "139997767896800",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "139997767896800->245",
                "139997767896800->226",
                "139997767896800->109"
            ]
        }
    },
    {
        "id": "139997769742176",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "order": {
                    "SQLs": [
                        "continent_population DESC NULLS LAST"
                    ],
                    "simple_str": "Descending by 'continent_population'"
                }
            },
            "columns": [
                "139997769742176->245",
                "139997769742176->226",
                "139997769742176->109"
            ]
        }
    },
    {
        "id": "139997769279872",
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
                ],
                "grouping_column": "continent_code, continent"
            },
            "columns": [
                "139997769279872->245",
                "139997769279872->226",
                "139997769279872->109"
            ]
        }
    },
    {
        "id": "139997769736560",
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
                "139997769736560->226",
                "139997769736560->224",
                "139997769736560->225",
                "139997769736560->241",
                "139997769736560->84",
                "139997769736560->245"
            ]
        }
    },
    {
        "id": "139997769738432",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769738432->244",
                "139997769738432->245"
            ]
        }
    },
    {
        "id": "139997769734784",
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
                "139997769734784->226",
                "139997769734784->224",
                "139997769734784->225",
                "139997769734784->241",
                "139997769734784->84"
            ]
        }
    },
    {
        "id": "139997767893104",
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
                ],
                "grouping_column": "continent, country"
            },
            "columns": [
                "139997767893104->243",
                "139997767893104->241",
                "139997767893104->84"
            ]
        }
    },
    {
        "id": "139997769739536",
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
                "139997769739536->227",
                "139997769739536->228",
                "139997769739536->229",
                "139997769739536->230",
                "139997769739536->61",
                "139997769739536->241",
                "139997769739536->243"
            ]
        }
    },
    {
        "id": "139997769495024",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769495024->241",
                "139997769495024->242",
                "139997769495024->243"
            ]
        }
    },
    {
        "id": "139997769740976",
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
                "139997769740976->227",
                "139997769740976->228",
                "139997769740976->229",
                "139997769740976->230",
                "139997769740976->61"
            ]
        }
    },
    {
        "id": "139997769740208",
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
                ],
                "grouping_column": "spark_catalog.default.people.city"
            },
            "columns": [
                "139997769740208->235",
                "139997769740208->61"
            ]
        }
    },
    {
        "id": "139997769738144",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769738144->231",
                "139997769738144->232",
                "139997769738144->233",
                "139997769738144->234",
                "139997769738144->235"
            ]
        }
    },
    {
        "id": "139997968408704",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997968408704->236",
                "139997968408704->237",
                "139997968408704->238",
                "139997968408704->239",
                "139997968408704->240"
            ]
        }
    },
    {
        "id": "139997769482400",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139997769482400->236",
                "139997769482400->237",
                "139997769482400->238",
                "139997769482400->239",
                "139997769482400->240"
            ]
        }
    },
    {
        "id": "139997769736896",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769736896->236",
                "139997769736896->237",
                "139997769736896->238",
                "139997769736896->239",
                "139997769736896->240"
            ]
        }
    },
    {
        "id": "139997769739440",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139997769739440->231",
                "139997769739440->232",
                "139997769739440->233",
                "139997769739440->234",
                "139997769739440->235"
            ]
        }
    },
    {
        "id": "139997769483984",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769483984->231",
                "139997769483984->232",
                "139997769483984->233",
                "139997769483984->234",
                "139997769483984->235"
            ]
        }
    },
    {
        "id": "139997769496704",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769496704->227",
                "139997769496704->228",
                "139997769496704->229",
                "139997769496704->230"
            ]
        }
    },
    {
        "id": "139997769729648",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769729648->224",
                "139997769729648->225",
                "139997769729648->226"
            ]
        }
    },
    {
        "id": "139997769492912",
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
                "139997769492912->113",
                "139997769492912->19",
                "139997769492912->16",
                "139997769492912->17",
                "139997769492912->122",
                "139997769492912->35",
                "139997769492912->61",
                "139997769492912->212",
                "139997769492912->84"
            ]
        }
    },
    {
        "id": "139997769019696",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139997769019696->212",
                "139997769019696->210",
                "139997769019696->84"
            ]
        }
    },
    {
        "id": "139997769483744",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139997769483744->212",
                "139997769483744->210",
                "139997769483744->84"
            ]
        }
    },
    {
        "id": "139997769014080",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "order": {
                    "SQLs": [
                        "country_population DESC NULLS LAST"
                    ],
                    "simple_str": "Descending by 'country_population'"
                }
            },
            "columns": [
                "139997769014080->212",
                "139997769014080->210",
                "139997769014080->84"
            ]
        }
    },
    {
        "id": "139997769283280",
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
                ],
                "grouping_column": "continent, country"
            },
            "columns": [
                "139997769283280->212",
                "139997769283280->210",
                "139997769283280->84"
            ]
        }
    },
    {
        "id": "139997769494880",
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
                "139997769494880->196",
                "139997769494880->197",
                "139997769494880->198",
                "139997769494880->199",
                "139997769494880->61",
                "139997769494880->210",
                "139997769494880->212"
            ]
        }
    },
    {
        "id": "139997769022336",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769022336->210",
                "139997769022336->211",
                "139997769022336->212"
            ]
        }
    },
    {
        "id": "139997769496512",
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
                "139997769496512->196",
                "139997769496512->197",
                "139997769496512->198",
                "139997769496512->199",
                "139997769496512->61"
            ]
        }
    },
    {
        "id": "139997769020848",
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
                ],
                "grouping_column": "spark_catalog.default.people.city"
            },
            "columns": [
                "139997769020848->204",
                "139997769020848->61"
            ]
        }
    },
    {
        "id": "139997769009904",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769009904->200",
                "139997769009904->201",
                "139997769009904->202",
                "139997769009904->203",
                "139997769009904->204"
            ]
        }
    },
    {
        "id": "139997769274688",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769274688->205",
                "139997769274688->206",
                "139997769274688->207",
                "139997769274688->208",
                "139997769274688->209"
            ]
        }
    },
    {
        "id": "139997769018496",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139997769018496->205",
                "139997769018496->206",
                "139997769018496->207",
                "139997769018496->208",
                "139997769018496->209"
            ]
        }
    },
    {
        "id": "139997769491952",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769491952->205",
                "139997769491952->206",
                "139997769491952->207",
                "139997769491952->208",
                "139997769491952->209"
            ]
        }
    },
    {
        "id": "139997769487968",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139997769487968->200",
                "139997769487968->201",
                "139997769487968->202",
                "139997769487968->203",
                "139997769487968->204"
            ]
        }
    },
    {
        "id": "139997769496944",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769496944->200",
                "139997769496944->201",
                "139997769496944->202",
                "139997769496944->203",
                "139997769496944->204"
            ]
        }
    },
    {
        "id": "139997769282704",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769282704->196",
                "139997769282704->197",
                "139997769282704->198",
                "139997769282704->199"
            ]
        }
    },
    {
        "id": "139997769490560",
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
                "139997769490560->19",
                "139997769490560->16",
                "139997769490560->17",
                "139997769490560->122",
                "139997769490560->113",
                "139997769490560->35",
                "139997769490560->61"
            ]
        }
    },
    {
        "id": "139997968252688",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139997968252688->181",
                "139997968252688->61"
            ]
        }
    },
    {
        "id": "139997769496656",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139997769496656->181",
                "139997769496656->61"
            ]
        }
    },
    {
        "id": "139997769484320",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "order": {
                    "SQLs": [
                        "city_population DESC NULLS LAST"
                    ],
                    "simple_str": "Descending by 'city_population'"
                }
            },
            "columns": [
                "139997769484320->181",
                "139997769484320->61"
            ]
        }
    },
    {
        "id": "139997769493536",
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
                ],
                "grouping_column": "spark_catalog.default.people.city"
            },
            "columns": [
                "139997769493536->181",
                "139997769493536->61"
            ]
        }
    },
    {
        "id": "139997770399216",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997770399216->177",
                "139997770399216->178",
                "139997770399216->179",
                "139997770399216->180",
                "139997770399216->181"
            ]
        }
    },
    {
        "id": "139997769487680",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769487680->182",
                "139997769487680->183",
                "139997769487680->184",
                "139997769487680->185",
                "139997769487680->186"
            ]
        }
    },
    {
        "id": "139997769483456",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139997769483456->182",
                "139997769483456->183",
                "139997769483456->184",
                "139997769483456->185",
                "139997769483456->186"
            ]
        }
    },
    {
        "id": "139997769491808",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769491808->182",
                "139997769491808->183",
                "139997769491808->184",
                "139997769491808->185",
                "139997769491808->186"
            ]
        }
    },
    {
        "id": "139997769493824",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139997769493824->177",
                "139997769493824->178",
                "139997769493824->179",
                "139997769493824->180",
                "139997769493824->181"
            ]
        }
    },
    {
        "id": "139997769482448",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769482448->177",
                "139997769482448->178",
                "139997769482448->179",
                "139997769482448->180",
                "139997769482448->181"
            ]
        }
    },
    {
        "id": "139997769489360",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "139997769489360->16",
                "139997769489360->17",
                "139997769489360->19",
                "139997769489360->122",
                "139997769489360->113",
                "139997769489360->35"
            ]
        }
    },
    {
        "id": "139997769487248",
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
                "139997769487248->19",
                "139997769487248->15",
                "139997769487248->16",
                "139997769487248->17",
                "139997769487248->18",
                "139997769487248->35",
                "139997769487248->40",
                "139997769487248->109",
                "139997769487248->113",
                "139997769487248->122",
                "139997769487248->123",
                "139997769487248->124"
            ]
        }
    },
    {
        "id": "139997769489504",
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
                "139997769489504->114",
                "139997769489504->35",
                "139997769489504->40",
                "139997769489504->109",
                "139997769489504->113",
                "139997769489504->122",
                "139997769489504->123",
                "139997769489504->124"
            ]
        }
    },
    {
        "id": "139997769492672",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769492672->121",
                "139997769492672->122",
                "139997769492672->123",
                "139997769492672->124"
            ]
        }
    },
    {
        "id": "139997769485232",
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
                "139997769485232->35",
                "139997769485232->40",
                "139997769485232->109",
                "139997769485232->113",
                "139997769485232->114"
            ]
        }
    },
    {
        "id": "139997769014896",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769014896->113",
                "139997769014896->114",
                "139997769014896->115"
            ]
        }
    },
    {
        "id": "139997769269552",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "139997769269552->40",
                "139997769269552->35",
                "139997769269552->109"
            ]
        }
    },
    {
        "id": "139997770543408",
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
                ],
                "grouping_column": "continent_code, continent"
            },
            "columns": [
                "139997770543408->40",
                "139997770543408->35",
                "139997770543408->109"
            ]
        }
    },
    {
        "id": "139997769485760",
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
                "139997769485760->35",
                "139997769485760->33",
                "139997769485760->34",
                "139997769485760->88",
                "139997769485760->84",
                "139997769485760->40"
            ]
        }
    },
    {
        "id": "139997769489696",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769489696->39",
                "139997769489696->40"
            ]
        }
    },
    {
        "id": "139997769486048",
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
                "139997769486048->35",
                "139997769486048->33",
                "139997769486048->34",
                "139997769486048->88",
                "139997769486048->84"
            ]
        }
    },
    {
        "id": "139997769010240",
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
                ],
                "grouping_column": "continent, country"
            },
            "columns": [
                "139997769010240->90",
                "139997769010240->88",
                "139997769010240->84"
            ]
        }
    },
    {
        "id": "139997769017056",
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
                "139997769017056->25",
                "139997769017056->26",
                "139997769017056->27",
                "139997769017056->28",
                "139997769017056->61",
                "139997769017056->88",
                "139997769017056->90"
            ]
        }
    },
    {
        "id": "139997769013360",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769013360->88",
                "139997769013360->89",
                "139997769013360->90"
            ]
        }
    },
    {
        "id": "139997769009856",
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
                "139997769009856->25",
                "139997769009856->26",
                "139997769009856->27",
                "139997769009856->28",
                "139997769009856->61"
            ]
        }
    },
    {
        "id": "139997769486528",
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
                ],
                "grouping_column": "spark_catalog.default.people.city"
            },
            "columns": [
                "139997769486528->137",
                "139997769486528->61"
            ]
        }
    },
    {
        "id": "139997769482352",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769482352->133",
                "139997769482352->134",
                "139997769482352->135",
                "139997769482352->136",
                "139997769482352->137"
            ]
        }
    },
    {
        "id": "139997769269984",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769269984->138",
                "139997769269984->139",
                "139997769269984->140",
                "139997769269984->141",
                "139997769269984->142"
            ]
        }
    },
    {
        "id": "139997769270416",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139997769270416->138",
                "139997769270416->139",
                "139997769270416->140",
                "139997769270416->141",
                "139997769270416->142"
            ]
        }
    },
    {
        "id": "139997769285344",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769285344->138",
                "139997769285344->139",
                "139997769285344->140",
                "139997769285344->141",
                "139997769285344->142"
            ]
        }
    },
    {
        "id": "139997769010384",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139997769010384->133",
                "139997769010384->134",
                "139997769010384->135",
                "139997769010384->136",
                "139997769010384->137"
            ]
        }
    },
    {
        "id": "139997767897088",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997767897088->133",
                "139997767897088->134",
                "139997767897088->135",
                "139997767897088->136",
                "139997767897088->137"
            ]
        }
    },
    {
        "id": "139997769269744",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769269744->25",
                "139997769269744->26",
                "139997769269744->27",
                "139997769269744->28"
            ]
        }
    },
    {
        "id": "139997769280544",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139997769280544->33",
                "139997769280544->34",
                "139997769280544->35"
            ]
        }
    },
    {
        "id": "139997769009280",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769009280->15",
                "139997769009280->16",
                "139997769009280->17",
                "139997769009280->18",
                "139997769009280->19"
            ]
        }
    },
    {
        "id": "139997769271664",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139997769271664->44",
                "139997769271664->45",
                "139997769271664->46",
                "139997769271664->47",
                "139997769271664->48"
            ]
        }
    },
    {
        "id": "139997769011344",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139997769011344->44",
                "139997769011344->45",
                "139997769011344->46",
                "139997769011344->47",
                "139997769011344->48"
            ]
        }
    },
    {
        "id": "139997769020080",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997769020080->44",
                "139997769020080->45",
                "139997769020080->46",
                "139997769020080->47",
                "139997769020080->48"
            ]
        }
    },
    {
        "id": "139997769023056",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139997769023056->15",
                "139997769023056->16",
                "139997769023056->17",
                "139997769023056->18",
                "139997769023056->19"
            ]
        }
    },
    {
        "id": "139997767894448",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpwynl5qr_/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpwynl5qr_/spark-warehouse/people)"
            },
            "columns": [
                "139997767894448->15",
                "139997767894448->16",
                "139997767894448->17",
                "139997767894448->18",
                "139997767894448->19"
            ]
        }
    },
    {
        "id": "139997767900256->35",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997767897712->35"
            ]
        }
    },
    {
        "id": "139997767900256->113",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997767897712->113"
            ]
        }
    },
    {
        "id": "139997767900256->19",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997767897712->19"
            ]
        }
    },
    {
        "id": "139997767900256->16",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997767897712->16"
            ]
        }
    },
    {
        "id": "139997767900256->17",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997767897712->17"
            ]
        }
    },
    {
        "id": "139997767900256->122",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997767897712->122"
            ]
        }
    },
    {
        "id": "139997767900256->61",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997767897712->61"
            ]
        }
    },
    {
        "id": "139997767900256->212",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997767897712->212"
            ]
        }
    },
    {
        "id": "139997767900256->84",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997767897712->84"
            ]
        }
    },
    {
        "id": "139997767900256->245",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997767897712->245"
            ]
        }
    },
    {
        "id": "139997767900256->109",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997767897712->109"
            ]
        }
    },
    {
        "id": "139997767900256->163",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139997767897712->163"
            ]
        }
    },
    {
        "id": "139997767900256->164",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139997767897712->164"
            ]
        }
    },
    {
        "id": "139997767900256->165",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139997767897712->165"
            ]
        }
    },
    {
        "id": "139997767900256->166",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139997767897712->166"
            ]
        }
    },
    {
        "id": "139997767900256->171",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139997767897712->171"
            ]
        }
    },
    {
        "id": "139997767900256->291",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "139997767897712->291"
            ]
        }
    },
    {
        "id": "139997767900256->309",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#309: boolean\n",
            "linked_columns": [
                "139997767897712->309"
            ]
        }
    },
    {
        "id": "139997767900256->328",
        "type": "column",
        "parentNode": "139997767900256",
        "expandParent": true,
        "data": {
            "id": 328,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#328\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "139997767897712->109"
            ]
        }
    },
    {
        "id": "139997767897712->35",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997767896944->35"
            ]
        }
    },
    {
        "id": "139997767897712->113",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997767896944->113"
            ]
        }
    },
    {
        "id": "139997767897712->19",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997767896944->19"
            ]
        }
    },
    {
        "id": "139997767897712->16",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997767896944->16"
            ]
        }
    },
    {
        "id": "139997767897712->17",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997767896944->17"
            ]
        }
    },
    {
        "id": "139997767897712->122",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997767896944->122"
            ]
        }
    },
    {
        "id": "139997767897712->61",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997767896944->61"
            ]
        }
    },
    {
        "id": "139997767897712->212",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997767896944->212"
            ]
        }
    },
    {
        "id": "139997767897712->84",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997767896944->84"
            ]
        }
    },
    {
        "id": "139997767897712->245",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997767896944->245"
            ]
        }
    },
    {
        "id": "139997767897712->109",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997767896944->109"
            ]
        }
    },
    {
        "id": "139997767897712->163",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139997767896944->163"
            ]
        }
    },
    {
        "id": "139997767897712->164",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139997767896944->164"
            ]
        }
    },
    {
        "id": "139997767897712->165",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139997767896944->165"
            ]
        }
    },
    {
        "id": "139997767897712->166",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139997767896944->166"
            ]
        }
    },
    {
        "id": "139997767897712->171",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139997767896944->171"
            ]
        }
    },
    {
        "id": "139997767897712->291",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "139997767896944->291"
            ]
        }
    },
    {
        "id": "139997767897712->309",
        "type": "column",
        "parentNode": "139997767897712",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#309\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "139997767896944->84"
            ]
        }
    },
    {
        "id": "139997767896944->35",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769498144->35"
            ]
        }
    },
    {
        "id": "139997767896944->113",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769498144->113"
            ]
        }
    },
    {
        "id": "139997767896944->19",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997769498144->19"
            ]
        }
    },
    {
        "id": "139997767896944->16",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769498144->16"
            ]
        }
    },
    {
        "id": "139997767896944->17",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769498144->17"
            ]
        }
    },
    {
        "id": "139997767896944->122",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769498144->122"
            ]
        }
    },
    {
        "id": "139997767896944->61",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769498144->61"
            ]
        }
    },
    {
        "id": "139997767896944->212",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769498144->212"
            ]
        }
    },
    {
        "id": "139997767896944->84",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769498144->84"
            ]
        }
    },
    {
        "id": "139997767896944->245",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769498144->245"
            ]
        }
    },
    {
        "id": "139997767896944->109",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769498144->109"
            ]
        }
    },
    {
        "id": "139997767896944->163",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139997769498144->163"
            ]
        }
    },
    {
        "id": "139997767896944->164",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139997769498144->164"
            ]
        }
    },
    {
        "id": "139997767896944->165",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139997769498144->165"
            ]
        }
    },
    {
        "id": "139997767896944->166",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139997769498144->166"
            ]
        }
    },
    {
        "id": "139997767896944->171",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139997769498144->171"
            ]
        }
    },
    {
        "id": "139997767896944->291",
        "type": "column",
        "parentNode": "139997767896944",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#291\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "139997769498144->61"
            ]
        }
    },
    {
        "id": "139997769498144->35",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769729024->35"
            ]
        }
    },
    {
        "id": "139997769498144->113",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769729024->113"
            ]
        }
    },
    {
        "id": "139997769498144->19",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997769729024->19"
            ]
        }
    },
    {
        "id": "139997769498144->16",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769729024->16"
            ]
        }
    },
    {
        "id": "139997769498144->17",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769729024->17"
            ]
        }
    },
    {
        "id": "139997769498144->122",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769729024->122"
            ]
        }
    },
    {
        "id": "139997769498144->61",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769729024->61"
            ]
        }
    },
    {
        "id": "139997769498144->212",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769729024->212"
            ]
        }
    },
    {
        "id": "139997769498144->84",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769729024->84"
            ]
        }
    },
    {
        "id": "139997769498144->245",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769729024->245"
            ]
        }
    },
    {
        "id": "139997769498144->109",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769729024->109"
            ]
        }
    },
    {
        "id": "139997769498144->163",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139997769744144->163"
            ]
        }
    },
    {
        "id": "139997769498144->164",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139997769744144->164"
            ]
        }
    },
    {
        "id": "139997769498144->165",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139997769744144->165"
            ]
        }
    },
    {
        "id": "139997769498144->166",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139997769744144->166"
            ]
        }
    },
    {
        "id": "139997769498144->171",
        "type": "column",
        "parentNode": "139997769498144",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139997769744144->171"
            ]
        }
    },
    {
        "id": "139997769744144->163",
        "type": "column",
        "parentNode": "139997769744144",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139997769740784->163"
            ]
        }
    },
    {
        "id": "139997769744144->164",
        "type": "column",
        "parentNode": "139997769744144",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139997769740784->164"
            ]
        }
    },
    {
        "id": "139997769744144->165",
        "type": "column",
        "parentNode": "139997769744144",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139997769740784->165"
            ]
        }
    },
    {
        "id": "139997769744144->166",
        "type": "column",
        "parentNode": "139997769744144",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139997769740784->166"
            ]
        }
    },
    {
        "id": "139997769744144->171",
        "type": "column",
        "parentNode": "139997769744144",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "(((a#163 + b#164) / c#165) + d#166) AS sum#171\n+- (((a#163 + b#164) / c#165) + d#166)\n   :- ((a#163 + b#164) / c#165)\n   :  :- (a#163 + b#164)\n   :  :  :- a#163: double\n   :  :  +- b#164: double\n   :  +- c#165: double\n   +- d#166: double\n",
            "linked_columns": [
                "139997769740784->163",
                "139997769740784->164",
                "139997769740784->165",
                "139997769740784->166"
            ]
        }
    },
    {
        "id": "139997769740784->163",
        "type": "column",
        "parentNode": "139997769740784",
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
        "id": "139997769740784->164",
        "type": "column",
        "parentNode": "139997769740784",
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
        "id": "139997769740784->165",
        "type": "column",
        "parentNode": "139997769740784",
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
        "id": "139997769740784->166",
        "type": "column",
        "parentNode": "139997769740784",
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
        "id": "139997769729024->35",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "139997769492912->35",
                "139997769739056->226"
            ]
        }
    },
    {
        "id": "139997769729024->113",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769492912->113"
            ]
        }
    },
    {
        "id": "139997769729024->19",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997769492912->19"
            ]
        }
    },
    {
        "id": "139997769729024->16",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769492912->16"
            ]
        }
    },
    {
        "id": "139997769729024->17",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769492912->17"
            ]
        }
    },
    {
        "id": "139997769729024->122",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769492912->122"
            ]
        }
    },
    {
        "id": "139997769729024->61",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769492912->61"
            ]
        }
    },
    {
        "id": "139997769729024->212",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "139997769492912->35",
                "139997769739056->226"
            ]
        }
    },
    {
        "id": "139997769729024->84",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769492912->84"
            ]
        }
    },
    {
        "id": "139997769729024->245",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769739056->245"
            ]
        }
    },
    {
        "id": "139997769729024->109",
        "type": "column",
        "parentNode": "139997769729024",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769739056->109"
            ]
        }
    },
    {
        "id": "139997769739056->245",
        "type": "column",
        "parentNode": "139997769739056",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997767896800->245"
            ]
        }
    },
    {
        "id": "139997769739056->226",
        "type": "column",
        "parentNode": "139997769739056",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139997767896800->226"
            ]
        }
    },
    {
        "id": "139997769739056->109",
        "type": "column",
        "parentNode": "139997769739056",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997767896800->109"
            ]
        }
    },
    {
        "id": "139997767896800->245",
        "type": "column",
        "parentNode": "139997767896800",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769742176->245"
            ]
        }
    },
    {
        "id": "139997767896800->226",
        "type": "column",
        "parentNode": "139997767896800",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139997769742176->226"
            ]
        }
    },
    {
        "id": "139997767896800->109",
        "type": "column",
        "parentNode": "139997767896800",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769742176->109"
            ]
        }
    },
    {
        "id": "139997769742176->245",
        "type": "column",
        "parentNode": "139997769742176",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769279872->245"
            ]
        }
    },
    {
        "id": "139997769742176->226",
        "type": "column",
        "parentNode": "139997769742176",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139997769279872->226"
            ]
        }
    },
    {
        "id": "139997769742176->109",
        "type": "column",
        "parentNode": "139997769742176",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769279872->109"
            ]
        }
    },
    {
        "id": "139997769279872->245",
        "type": "column",
        "parentNode": "139997769279872",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769736560->245"
            ]
        }
    },
    {
        "id": "139997769279872->226",
        "type": "column",
        "parentNode": "139997769279872",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139997769736560->226"
            ]
        }
    },
    {
        "id": "139997769279872->109",
        "type": "column",
        "parentNode": "139997769279872",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "139997769736560->84"
            ]
        }
    },
    {
        "id": "139997769736560->226",
        "type": "column",
        "parentNode": "139997769736560",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#244)\n:- continent#226: string\n+- continent#244: string\n",
            "linked_columns": [
                "139997769734784->226",
                "139997769738432->244"
            ]
        }
    },
    {
        "id": "139997769736560->224",
        "type": "column",
        "parentNode": "139997769736560",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "139997769734784->224"
            ]
        }
    },
    {
        "id": "139997769736560->225",
        "type": "column",
        "parentNode": "139997769736560",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "139997769734784->225"
            ]
        }
    },
    {
        "id": "139997769736560->241",
        "type": "column",
        "parentNode": "139997769736560",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139997769734784->241"
            ]
        }
    },
    {
        "id": "139997769736560->84",
        "type": "column",
        "parentNode": "139997769736560",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769734784->84"
            ]
        }
    },
    {
        "id": "139997769736560->245",
        "type": "column",
        "parentNode": "139997769736560",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139997769738432->245"
            ]
        }
    },
    {
        "id": "139997769738432->244",
        "type": "column",
        "parentNode": "139997769738432",
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
        "id": "139997769738432->245",
        "type": "column",
        "parentNode": "139997769738432",
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
        "id": "139997769734784->226",
        "type": "column",
        "parentNode": "139997769734784",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#243)\n:- continent#226: string\n+- continent#243: string\n",
            "linked_columns": [
                "139997769729648->226",
                "139997767893104->243"
            ]
        }
    },
    {
        "id": "139997769734784->224",
        "type": "column",
        "parentNode": "139997769734784",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "139997769729648->224"
            ]
        }
    },
    {
        "id": "139997769734784->225",
        "type": "column",
        "parentNode": "139997769734784",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "139997769729648->225"
            ]
        }
    },
    {
        "id": "139997769734784->241",
        "type": "column",
        "parentNode": "139997769734784",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139997767893104->241"
            ]
        }
    },
    {
        "id": "139997769734784->84",
        "type": "column",
        "parentNode": "139997769734784",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997767893104->84"
            ]
        }
    },
    {
        "id": "139997767893104->243",
        "type": "column",
        "parentNode": "139997767893104",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "139997769739536->243"
            ]
        }
    },
    {
        "id": "139997767893104->241",
        "type": "column",
        "parentNode": "139997767893104",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139997769739536->241"
            ]
        }
    },
    {
        "id": "139997767893104->84",
        "type": "column",
        "parentNode": "139997767893104",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "139997769739536->61"
            ]
        }
    },
    {
        "id": "139997769739536->227",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#242)\n:- city#227: string\n+- city#242: string\n",
            "linked_columns": [
                "139997769740976->227",
                "139997769495024->242"
            ]
        }
    },
    {
        "id": "139997769739536->228",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "139997769740976->228"
            ]
        }
    },
    {
        "id": "139997769739536->229",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "139997769740976->229"
            ]
        }
    },
    {
        "id": "139997769739536->230",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "139997769740976->230"
            ]
        }
    },
    {
        "id": "139997769739536->61",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769740976->61"
            ]
        }
    },
    {
        "id": "139997769739536->241",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139997769495024->241"
            ]
        }
    },
    {
        "id": "139997769739536->243",
        "type": "column",
        "parentNode": "139997769739536",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "139997769495024->243"
            ]
        }
    },
    {
        "id": "139997769495024->241",
        "type": "column",
        "parentNode": "139997769495024",
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
        "id": "139997769495024->242",
        "type": "column",
        "parentNode": "139997769495024",
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
        "id": "139997769495024->243",
        "type": "column",
        "parentNode": "139997769495024",
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
        "id": "139997769740976->227",
        "type": "column",
        "parentNode": "139997769740976",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#235)\n:- city#227: string\n+- city#235: string\n",
            "linked_columns": [
                "139997769496704->227",
                "139997769740208->235"
            ]
        }
    },
    {
        "id": "139997769740976->228",
        "type": "column",
        "parentNode": "139997769740976",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "139997769496704->228"
            ]
        }
    },
    {
        "id": "139997769740976->229",
        "type": "column",
        "parentNode": "139997769740976",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "139997769496704->229"
            ]
        }
    },
    {
        "id": "139997769740976->230",
        "type": "column",
        "parentNode": "139997769740976",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "139997769496704->230"
            ]
        }
    },
    {
        "id": "139997769740976->61",
        "type": "column",
        "parentNode": "139997769740976",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769740208->61"
            ]
        }
    },
    {
        "id": "139997769740208->235",
        "type": "column",
        "parentNode": "139997769740208",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "139997769738144->235"
            ]
        }
    },
    {
        "id": "139997769740208->61",
        "type": "column",
        "parentNode": "139997769740208",
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
        "id": "139997769738144->231",
        "type": "column",
        "parentNode": "139997769738144",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "139997769739440->231"
            ]
        }
    },
    {
        "id": "139997769738144->232",
        "type": "column",
        "parentNode": "139997769738144",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "139997769739440->232"
            ]
        }
    },
    {
        "id": "139997769738144->233",
        "type": "column",
        "parentNode": "139997769738144",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "139997769739440->233"
            ]
        }
    },
    {
        "id": "139997769738144->234",
        "type": "column",
        "parentNode": "139997769738144",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "139997769739440->234"
            ]
        }
    },
    {
        "id": "139997769738144->235",
        "type": "column",
        "parentNode": "139997769738144",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "139997769739440->235"
            ]
        }
    },
    {
        "id": "139997968408704->236",
        "type": "column",
        "parentNode": "139997968408704",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "139997769482400->236"
            ]
        }
    },
    {
        "id": "139997968408704->237",
        "type": "column",
        "parentNode": "139997968408704",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "139997769482400->237"
            ]
        }
    },
    {
        "id": "139997968408704->238",
        "type": "column",
        "parentNode": "139997968408704",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "139997769482400->238"
            ]
        }
    },
    {
        "id": "139997968408704->239",
        "type": "column",
        "parentNode": "139997968408704",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "139997769482400->239"
            ]
        }
    },
    {
        "id": "139997968408704->240",
        "type": "column",
        "parentNode": "139997968408704",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "139997769482400->240"
            ]
        }
    },
    {
        "id": "139997769482400->236",
        "type": "column",
        "parentNode": "139997769482400",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "139997769736896->236"
            ]
        }
    },
    {
        "id": "139997769482400->237",
        "type": "column",
        "parentNode": "139997769482400",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "139997769736896->237"
            ]
        }
    },
    {
        "id": "139997769482400->238",
        "type": "column",
        "parentNode": "139997769482400",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "139997769736896->238"
            ]
        }
    },
    {
        "id": "139997769482400->239",
        "type": "column",
        "parentNode": "139997769482400",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "139997769736896->239"
            ]
        }
    },
    {
        "id": "139997769482400->240",
        "type": "column",
        "parentNode": "139997769482400",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "139997769736896->240"
            ]
        }
    },
    {
        "id": "139997769736896->236",
        "type": "column",
        "parentNode": "139997769736896",
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
        "id": "139997769736896->237",
        "type": "column",
        "parentNode": "139997769736896",
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
        "id": "139997769736896->238",
        "type": "column",
        "parentNode": "139997769736896",
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
        "id": "139997769736896->239",
        "type": "column",
        "parentNode": "139997769736896",
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
        "id": "139997769736896->240",
        "type": "column",
        "parentNode": "139997769736896",
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
        "id": "139997769739440->231",
        "type": "column",
        "parentNode": "139997769739440",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "139997769483984->231"
            ]
        }
    },
    {
        "id": "139997769739440->232",
        "type": "column",
        "parentNode": "139997769739440",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "139997769483984->232"
            ]
        }
    },
    {
        "id": "139997769739440->233",
        "type": "column",
        "parentNode": "139997769739440",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "139997769483984->233"
            ]
        }
    },
    {
        "id": "139997769739440->234",
        "type": "column",
        "parentNode": "139997769739440",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "139997769483984->234"
            ]
        }
    },
    {
        "id": "139997769739440->235",
        "type": "column",
        "parentNode": "139997769739440",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "139997769483984->235"
            ]
        }
    },
    {
        "id": "139997769483984->231",
        "type": "column",
        "parentNode": "139997769483984",
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
        "id": "139997769483984->232",
        "type": "column",
        "parentNode": "139997769483984",
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
        "id": "139997769483984->233",
        "type": "column",
        "parentNode": "139997769483984",
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
        "id": "139997769483984->234",
        "type": "column",
        "parentNode": "139997769483984",
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
        "id": "139997769483984->235",
        "type": "column",
        "parentNode": "139997769483984",
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
        "id": "139997769496704->227",
        "type": "column",
        "parentNode": "139997769496704",
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
        "id": "139997769496704->228",
        "type": "column",
        "parentNode": "139997769496704",
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
        "id": "139997769496704->229",
        "type": "column",
        "parentNode": "139997769496704",
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
        "id": "139997769496704->230",
        "type": "column",
        "parentNode": "139997769496704",
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
        "id": "139997769729648->224",
        "type": "column",
        "parentNode": "139997769729648",
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
        "id": "139997769729648->225",
        "type": "column",
        "parentNode": "139997769729648",
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
        "id": "139997769729648->226",
        "type": "column",
        "parentNode": "139997769729648",
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
        "id": "139997769492912->113",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#210)\n:- country#113: string\n+- country#210: string\n",
            "linked_columns": [
                "139997769490560->113",
                "139997769019696->210"
            ]
        }
    },
    {
        "id": "139997769492912->19",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997769490560->19"
            ]
        }
    },
    {
        "id": "139997769492912->16",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769490560->16"
            ]
        }
    },
    {
        "id": "139997769492912->17",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769490560->17"
            ]
        }
    },
    {
        "id": "139997769492912->122",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769490560->122"
            ]
        }
    },
    {
        "id": "139997769492912->35",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769490560->35"
            ]
        }
    },
    {
        "id": "139997769492912->61",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769490560->61"
            ]
        }
    },
    {
        "id": "139997769492912->212",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769019696->212"
            ]
        }
    },
    {
        "id": "139997769492912->84",
        "type": "column",
        "parentNode": "139997769492912",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769019696->84"
            ]
        }
    },
    {
        "id": "139997769019696->212",
        "type": "column",
        "parentNode": "139997769019696",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769483744->212"
            ]
        }
    },
    {
        "id": "139997769019696->210",
        "type": "column",
        "parentNode": "139997769019696",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139997769483744->210"
            ]
        }
    },
    {
        "id": "139997769019696->84",
        "type": "column",
        "parentNode": "139997769019696",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769483744->84"
            ]
        }
    },
    {
        "id": "139997769483744->212",
        "type": "column",
        "parentNode": "139997769483744",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769014080->212"
            ]
        }
    },
    {
        "id": "139997769483744->210",
        "type": "column",
        "parentNode": "139997769483744",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139997769014080->210"
            ]
        }
    },
    {
        "id": "139997769483744->84",
        "type": "column",
        "parentNode": "139997769483744",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769014080->84"
            ]
        }
    },
    {
        "id": "139997769014080->212",
        "type": "column",
        "parentNode": "139997769014080",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769283280->212"
            ]
        }
    },
    {
        "id": "139997769014080->210",
        "type": "column",
        "parentNode": "139997769014080",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139997769283280->210"
            ]
        }
    },
    {
        "id": "139997769014080->84",
        "type": "column",
        "parentNode": "139997769014080",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769283280->84"
            ]
        }
    },
    {
        "id": "139997769283280->212",
        "type": "column",
        "parentNode": "139997769283280",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769494880->212"
            ]
        }
    },
    {
        "id": "139997769283280->210",
        "type": "column",
        "parentNode": "139997769283280",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139997769494880->210"
            ]
        }
    },
    {
        "id": "139997769283280->84",
        "type": "column",
        "parentNode": "139997769283280",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "139997769494880->61"
            ]
        }
    },
    {
        "id": "139997769494880->196",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#211)\n:- city#196: string\n+- city#211: string\n",
            "linked_columns": [
                "139997769496512->196",
                "139997769022336->211"
            ]
        }
    },
    {
        "id": "139997769494880->197",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "139997769496512->197"
            ]
        }
    },
    {
        "id": "139997769494880->198",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "139997769496512->198"
            ]
        }
    },
    {
        "id": "139997769494880->199",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "139997769496512->199"
            ]
        }
    },
    {
        "id": "139997769494880->61",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769496512->61"
            ]
        }
    },
    {
        "id": "139997769494880->210",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139997769022336->210"
            ]
        }
    },
    {
        "id": "139997769494880->212",
        "type": "column",
        "parentNode": "139997769494880",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139997769022336->212"
            ]
        }
    },
    {
        "id": "139997769022336->210",
        "type": "column",
        "parentNode": "139997769022336",
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
        "id": "139997769022336->211",
        "type": "column",
        "parentNode": "139997769022336",
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
        "id": "139997769022336->212",
        "type": "column",
        "parentNode": "139997769022336",
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
        "id": "139997769496512->196",
        "type": "column",
        "parentNode": "139997769496512",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#204)\n:- city#196: string\n+- city#204: string\n",
            "linked_columns": [
                "139997769282704->196",
                "139997769020848->204"
            ]
        }
    },
    {
        "id": "139997769496512->197",
        "type": "column",
        "parentNode": "139997769496512",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "139997769282704->197"
            ]
        }
    },
    {
        "id": "139997769496512->198",
        "type": "column",
        "parentNode": "139997769496512",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "139997769282704->198"
            ]
        }
    },
    {
        "id": "139997769496512->199",
        "type": "column",
        "parentNode": "139997769496512",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "139997769282704->199"
            ]
        }
    },
    {
        "id": "139997769496512->61",
        "type": "column",
        "parentNode": "139997769496512",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769020848->61"
            ]
        }
    },
    {
        "id": "139997769020848->204",
        "type": "column",
        "parentNode": "139997769020848",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "139997769009904->204"
            ]
        }
    },
    {
        "id": "139997769020848->61",
        "type": "column",
        "parentNode": "139997769020848",
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
        "id": "139997769009904->200",
        "type": "column",
        "parentNode": "139997769009904",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "139997769487968->200"
            ]
        }
    },
    {
        "id": "139997769009904->201",
        "type": "column",
        "parentNode": "139997769009904",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "139997769487968->201"
            ]
        }
    },
    {
        "id": "139997769009904->202",
        "type": "column",
        "parentNode": "139997769009904",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "139997769487968->202"
            ]
        }
    },
    {
        "id": "139997769009904->203",
        "type": "column",
        "parentNode": "139997769009904",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "139997769487968->203"
            ]
        }
    },
    {
        "id": "139997769009904->204",
        "type": "column",
        "parentNode": "139997769009904",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "139997769487968->204"
            ]
        }
    },
    {
        "id": "139997769274688->205",
        "type": "column",
        "parentNode": "139997769274688",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "139997769018496->205"
            ]
        }
    },
    {
        "id": "139997769274688->206",
        "type": "column",
        "parentNode": "139997769274688",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "139997769018496->206"
            ]
        }
    },
    {
        "id": "139997769274688->207",
        "type": "column",
        "parentNode": "139997769274688",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "139997769018496->207"
            ]
        }
    },
    {
        "id": "139997769274688->208",
        "type": "column",
        "parentNode": "139997769274688",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "139997769018496->208"
            ]
        }
    },
    {
        "id": "139997769274688->209",
        "type": "column",
        "parentNode": "139997769274688",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "139997769018496->209"
            ]
        }
    },
    {
        "id": "139997769018496->205",
        "type": "column",
        "parentNode": "139997769018496",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "139997769491952->205"
            ]
        }
    },
    {
        "id": "139997769018496->206",
        "type": "column",
        "parentNode": "139997769018496",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "139997769491952->206"
            ]
        }
    },
    {
        "id": "139997769018496->207",
        "type": "column",
        "parentNode": "139997769018496",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "139997769491952->207"
            ]
        }
    },
    {
        "id": "139997769018496->208",
        "type": "column",
        "parentNode": "139997769018496",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "139997769491952->208"
            ]
        }
    },
    {
        "id": "139997769018496->209",
        "type": "column",
        "parentNode": "139997769018496",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "139997769491952->209"
            ]
        }
    },
    {
        "id": "139997769491952->205",
        "type": "column",
        "parentNode": "139997769491952",
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
        "id": "139997769491952->206",
        "type": "column",
        "parentNode": "139997769491952",
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
        "id": "139997769491952->207",
        "type": "column",
        "parentNode": "139997769491952",
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
        "id": "139997769491952->208",
        "type": "column",
        "parentNode": "139997769491952",
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
        "id": "139997769491952->209",
        "type": "column",
        "parentNode": "139997769491952",
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
        "id": "139997769487968->200",
        "type": "column",
        "parentNode": "139997769487968",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "139997769496944->200"
            ]
        }
    },
    {
        "id": "139997769487968->201",
        "type": "column",
        "parentNode": "139997769487968",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "139997769496944->201"
            ]
        }
    },
    {
        "id": "139997769487968->202",
        "type": "column",
        "parentNode": "139997769487968",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "139997769496944->202"
            ]
        }
    },
    {
        "id": "139997769487968->203",
        "type": "column",
        "parentNode": "139997769487968",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "139997769496944->203"
            ]
        }
    },
    {
        "id": "139997769487968->204",
        "type": "column",
        "parentNode": "139997769487968",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "139997769496944->204"
            ]
        }
    },
    {
        "id": "139997769496944->200",
        "type": "column",
        "parentNode": "139997769496944",
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
        "id": "139997769496944->201",
        "type": "column",
        "parentNode": "139997769496944",
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
        "id": "139997769496944->202",
        "type": "column",
        "parentNode": "139997769496944",
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
        "id": "139997769496944->203",
        "type": "column",
        "parentNode": "139997769496944",
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
        "id": "139997769496944->204",
        "type": "column",
        "parentNode": "139997769496944",
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
        "id": "139997769282704->196",
        "type": "column",
        "parentNode": "139997769282704",
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
        "id": "139997769282704->197",
        "type": "column",
        "parentNode": "139997769282704",
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
        "id": "139997769282704->198",
        "type": "column",
        "parentNode": "139997769282704",
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
        "id": "139997769282704->199",
        "type": "column",
        "parentNode": "139997769282704",
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
        "id": "139997769490560->19",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#181)\n:- city#19: string\n+- city#181: string\n",
            "linked_columns": [
                "139997769489360->19",
                "139997968252688->181"
            ]
        }
    },
    {
        "id": "139997769490560->16",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769489360->16"
            ]
        }
    },
    {
        "id": "139997769490560->17",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769489360->17"
            ]
        }
    },
    {
        "id": "139997769490560->122",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769489360->122"
            ]
        }
    },
    {
        "id": "139997769490560->113",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769489360->113"
            ]
        }
    },
    {
        "id": "139997769490560->35",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769489360->35"
            ]
        }
    },
    {
        "id": "139997769490560->61",
        "type": "column",
        "parentNode": "139997769490560",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997968252688->61"
            ]
        }
    },
    {
        "id": "139997968252688->181",
        "type": "column",
        "parentNode": "139997968252688",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139997769496656->181"
            ]
        }
    },
    {
        "id": "139997968252688->61",
        "type": "column",
        "parentNode": "139997968252688",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769496656->61"
            ]
        }
    },
    {
        "id": "139997769496656->181",
        "type": "column",
        "parentNode": "139997769496656",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139997769484320->181"
            ]
        }
    },
    {
        "id": "139997769496656->61",
        "type": "column",
        "parentNode": "139997769496656",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769484320->61"
            ]
        }
    },
    {
        "id": "139997769484320->181",
        "type": "column",
        "parentNode": "139997769484320",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139997769493536->181"
            ]
        }
    },
    {
        "id": "139997769484320->61",
        "type": "column",
        "parentNode": "139997769484320",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769493536->61"
            ]
        }
    },
    {
        "id": "139997769493536->181",
        "type": "column",
        "parentNode": "139997769493536",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139997770399216->181"
            ]
        }
    },
    {
        "id": "139997769493536->61",
        "type": "column",
        "parentNode": "139997769493536",
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
        "id": "139997770399216->177",
        "type": "column",
        "parentNode": "139997770399216",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "139997769493824->177"
            ]
        }
    },
    {
        "id": "139997770399216->178",
        "type": "column",
        "parentNode": "139997770399216",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "139997769493824->178"
            ]
        }
    },
    {
        "id": "139997770399216->179",
        "type": "column",
        "parentNode": "139997770399216",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "139997769493824->179"
            ]
        }
    },
    {
        "id": "139997770399216->180",
        "type": "column",
        "parentNode": "139997770399216",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "139997769493824->180"
            ]
        }
    },
    {
        "id": "139997770399216->181",
        "type": "column",
        "parentNode": "139997770399216",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139997769493824->181"
            ]
        }
    },
    {
        "id": "139997769487680->182",
        "type": "column",
        "parentNode": "139997769487680",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "139997769483456->182"
            ]
        }
    },
    {
        "id": "139997769487680->183",
        "type": "column",
        "parentNode": "139997769487680",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "139997769483456->183"
            ]
        }
    },
    {
        "id": "139997769487680->184",
        "type": "column",
        "parentNode": "139997769487680",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "139997769483456->184"
            ]
        }
    },
    {
        "id": "139997769487680->185",
        "type": "column",
        "parentNode": "139997769487680",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "139997769483456->185"
            ]
        }
    },
    {
        "id": "139997769487680->186",
        "type": "column",
        "parentNode": "139997769487680",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "139997769483456->186"
            ]
        }
    },
    {
        "id": "139997769483456->182",
        "type": "column",
        "parentNode": "139997769483456",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "139997769491808->182"
            ]
        }
    },
    {
        "id": "139997769483456->183",
        "type": "column",
        "parentNode": "139997769483456",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "139997769491808->183"
            ]
        }
    },
    {
        "id": "139997769483456->184",
        "type": "column",
        "parentNode": "139997769483456",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "139997769491808->184"
            ]
        }
    },
    {
        "id": "139997769483456->185",
        "type": "column",
        "parentNode": "139997769483456",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "139997769491808->185"
            ]
        }
    },
    {
        "id": "139997769483456->186",
        "type": "column",
        "parentNode": "139997769483456",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "139997769491808->186"
            ]
        }
    },
    {
        "id": "139997769491808->182",
        "type": "column",
        "parentNode": "139997769491808",
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
        "id": "139997769491808->183",
        "type": "column",
        "parentNode": "139997769491808",
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
        "id": "139997769491808->184",
        "type": "column",
        "parentNode": "139997769491808",
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
        "id": "139997769491808->185",
        "type": "column",
        "parentNode": "139997769491808",
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
        "id": "139997769491808->186",
        "type": "column",
        "parentNode": "139997769491808",
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
        "id": "139997769493824->177",
        "type": "column",
        "parentNode": "139997769493824",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "139997769482448->177"
            ]
        }
    },
    {
        "id": "139997769493824->178",
        "type": "column",
        "parentNode": "139997769493824",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "139997769482448->178"
            ]
        }
    },
    {
        "id": "139997769493824->179",
        "type": "column",
        "parentNode": "139997769493824",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "139997769482448->179"
            ]
        }
    },
    {
        "id": "139997769493824->180",
        "type": "column",
        "parentNode": "139997769493824",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "139997769482448->180"
            ]
        }
    },
    {
        "id": "139997769493824->181",
        "type": "column",
        "parentNode": "139997769493824",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139997769482448->181"
            ]
        }
    },
    {
        "id": "139997769482448->177",
        "type": "column",
        "parentNode": "139997769482448",
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
        "id": "139997769482448->178",
        "type": "column",
        "parentNode": "139997769482448",
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
        "id": "139997769482448->179",
        "type": "column",
        "parentNode": "139997769482448",
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
        "id": "139997769482448->180",
        "type": "column",
        "parentNode": "139997769482448",
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
        "id": "139997769482448->181",
        "type": "column",
        "parentNode": "139997769482448",
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
        "id": "139997769489360->16",
        "type": "column",
        "parentNode": "139997769489360",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769487248->16"
            ]
        }
    },
    {
        "id": "139997769489360->17",
        "type": "column",
        "parentNode": "139997769489360",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769487248->17"
            ]
        }
    },
    {
        "id": "139997769489360->19",
        "type": "column",
        "parentNode": "139997769489360",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997769487248->19"
            ]
        }
    },
    {
        "id": "139997769489360->122",
        "type": "column",
        "parentNode": "139997769489360",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769487248->122"
            ]
        }
    },
    {
        "id": "139997769489360->113",
        "type": "column",
        "parentNode": "139997769489360",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769487248->113"
            ]
        }
    },
    {
        "id": "139997769489360->35",
        "type": "column",
        "parentNode": "139997769489360",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769487248->35"
            ]
        }
    },
    {
        "id": "139997769487248->19",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "139997769009280->19",
                "139997769489504->114"
            ]
        }
    },
    {
        "id": "139997769487248->15",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "139997769009280->15"
            ]
        }
    },
    {
        "id": "139997769487248->16",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769009280->16"
            ]
        }
    },
    {
        "id": "139997769487248->17",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769009280->17"
            ]
        }
    },
    {
        "id": "139997769487248->18",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "139997769009280->18"
            ]
        }
    },
    {
        "id": "139997769487248->35",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769489504->35"
            ]
        }
    },
    {
        "id": "139997769487248->40",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139997769489504->40"
            ]
        }
    },
    {
        "id": "139997769487248->109",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769489504->109"
            ]
        }
    },
    {
        "id": "139997769487248->113",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769489504->113"
            ]
        }
    },
    {
        "id": "139997769487248->122",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769489504->122"
            ]
        }
    },
    {
        "id": "139997769487248->123",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "139997769489504->123"
            ]
        }
    },
    {
        "id": "139997769487248->124",
        "type": "column",
        "parentNode": "139997769487248",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "139997769489504->124"
            ]
        }
    },
    {
        "id": "139997769489504->114",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "139997769485232->114",
                "139997769492672->121"
            ]
        }
    },
    {
        "id": "139997769489504->35",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769485232->35"
            ]
        }
    },
    {
        "id": "139997769489504->40",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139997769485232->40"
            ]
        }
    },
    {
        "id": "139997769489504->109",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769485232->109"
            ]
        }
    },
    {
        "id": "139997769489504->113",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769485232->113"
            ]
        }
    },
    {
        "id": "139997769489504->122",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139997769492672->122"
            ]
        }
    },
    {
        "id": "139997769489504->123",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "139997769492672->123"
            ]
        }
    },
    {
        "id": "139997769489504->124",
        "type": "column",
        "parentNode": "139997769489504",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "139997769492672->124"
            ]
        }
    },
    {
        "id": "139997769492672->121",
        "type": "column",
        "parentNode": "139997769492672",
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
        "id": "139997769492672->122",
        "type": "column",
        "parentNode": "139997769492672",
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
        "id": "139997769492672->123",
        "type": "column",
        "parentNode": "139997769492672",
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
        "id": "139997769492672->124",
        "type": "column",
        "parentNode": "139997769492672",
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
        "id": "139997769485232->35",
        "type": "column",
        "parentNode": "139997769485232",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "139997769269552->35",
                "139997769014896->115"
            ]
        }
    },
    {
        "id": "139997769485232->40",
        "type": "column",
        "parentNode": "139997769485232",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139997769269552->40"
            ]
        }
    },
    {
        "id": "139997769485232->109",
        "type": "column",
        "parentNode": "139997769485232",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997769269552->109"
            ]
        }
    },
    {
        "id": "139997769485232->113",
        "type": "column",
        "parentNode": "139997769485232",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139997769014896->113"
            ]
        }
    },
    {
        "id": "139997769485232->114",
        "type": "column",
        "parentNode": "139997769485232",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "139997769014896->114"
            ]
        }
    },
    {
        "id": "139997769014896->113",
        "type": "column",
        "parentNode": "139997769014896",
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
        "id": "139997769014896->114",
        "type": "column",
        "parentNode": "139997769014896",
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
        "id": "139997769014896->115",
        "type": "column",
        "parentNode": "139997769014896",
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
        "id": "139997769269552->40",
        "type": "column",
        "parentNode": "139997769269552",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139997770543408->40"
            ]
        }
    },
    {
        "id": "139997769269552->35",
        "type": "column",
        "parentNode": "139997769269552",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997770543408->35"
            ]
        }
    },
    {
        "id": "139997769269552->109",
        "type": "column",
        "parentNode": "139997769269552",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139997770543408->109"
            ]
        }
    },
    {
        "id": "139997770543408->40",
        "type": "column",
        "parentNode": "139997770543408",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139997769485760->40"
            ]
        }
    },
    {
        "id": "139997770543408->35",
        "type": "column",
        "parentNode": "139997770543408",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139997769485760->35"
            ]
        }
    },
    {
        "id": "139997770543408->109",
        "type": "column",
        "parentNode": "139997770543408",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "139997769485760->84"
            ]
        }
    },
    {
        "id": "139997769485760->35",
        "type": "column",
        "parentNode": "139997769485760",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "139997769486048->35",
                "139997769489696->39"
            ]
        }
    },
    {
        "id": "139997769485760->33",
        "type": "column",
        "parentNode": "139997769485760",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "139997769486048->33"
            ]
        }
    },
    {
        "id": "139997769485760->34",
        "type": "column",
        "parentNode": "139997769485760",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "139997769486048->34"
            ]
        }
    },
    {
        "id": "139997769485760->88",
        "type": "column",
        "parentNode": "139997769485760",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139997769486048->88"
            ]
        }
    },
    {
        "id": "139997769485760->84",
        "type": "column",
        "parentNode": "139997769485760",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769486048->84"
            ]
        }
    },
    {
        "id": "139997769485760->40",
        "type": "column",
        "parentNode": "139997769485760",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139997769489696->40"
            ]
        }
    },
    {
        "id": "139997769489696->39",
        "type": "column",
        "parentNode": "139997769489696",
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
        "id": "139997769489696->40",
        "type": "column",
        "parentNode": "139997769489696",
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
        "id": "139997769486048->35",
        "type": "column",
        "parentNode": "139997769486048",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "139997769280544->35",
                "139997769010240->90"
            ]
        }
    },
    {
        "id": "139997769486048->33",
        "type": "column",
        "parentNode": "139997769486048",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "139997769280544->33"
            ]
        }
    },
    {
        "id": "139997769486048->34",
        "type": "column",
        "parentNode": "139997769486048",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "139997769280544->34"
            ]
        }
    },
    {
        "id": "139997769486048->88",
        "type": "column",
        "parentNode": "139997769486048",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139997769010240->88"
            ]
        }
    },
    {
        "id": "139997769486048->84",
        "type": "column",
        "parentNode": "139997769486048",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139997769010240->84"
            ]
        }
    },
    {
        "id": "139997769010240->90",
        "type": "column",
        "parentNode": "139997769010240",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "139997769017056->90"
            ]
        }
    },
    {
        "id": "139997769010240->88",
        "type": "column",
        "parentNode": "139997769010240",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139997769017056->88"
            ]
        }
    },
    {
        "id": "139997769010240->84",
        "type": "column",
        "parentNode": "139997769010240",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "139997769017056->61"
            ]
        }
    },
    {
        "id": "139997769017056->25",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "139997769009856->25",
                "139997769013360->89"
            ]
        }
    },
    {
        "id": "139997769017056->26",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "139997769009856->26"
            ]
        }
    },
    {
        "id": "139997769017056->27",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "139997769009856->27"
            ]
        }
    },
    {
        "id": "139997769017056->28",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "139997769009856->28"
            ]
        }
    },
    {
        "id": "139997769017056->61",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769009856->61"
            ]
        }
    },
    {
        "id": "139997769017056->88",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139997769013360->88"
            ]
        }
    },
    {
        "id": "139997769017056->90",
        "type": "column",
        "parentNode": "139997769017056",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "139997769013360->90"
            ]
        }
    },
    {
        "id": "139997769013360->88",
        "type": "column",
        "parentNode": "139997769013360",
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
        "id": "139997769013360->89",
        "type": "column",
        "parentNode": "139997769013360",
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
        "id": "139997769013360->90",
        "type": "column",
        "parentNode": "139997769013360",
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
        "id": "139997769009856->25",
        "type": "column",
        "parentNode": "139997769009856",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "139997769269744->25",
                "139997769486528->137"
            ]
        }
    },
    {
        "id": "139997769009856->26",
        "type": "column",
        "parentNode": "139997769009856",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "139997769269744->26"
            ]
        }
    },
    {
        "id": "139997769009856->27",
        "type": "column",
        "parentNode": "139997769009856",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "139997769269744->27"
            ]
        }
    },
    {
        "id": "139997769009856->28",
        "type": "column",
        "parentNode": "139997769009856",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "139997769269744->28"
            ]
        }
    },
    {
        "id": "139997769009856->61",
        "type": "column",
        "parentNode": "139997769009856",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139997769486528->61"
            ]
        }
    },
    {
        "id": "139997769486528->137",
        "type": "column",
        "parentNode": "139997769486528",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "139997769482352->137"
            ]
        }
    },
    {
        "id": "139997769486528->61",
        "type": "column",
        "parentNode": "139997769486528",
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
        "id": "139997769482352->133",
        "type": "column",
        "parentNode": "139997769482352",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "139997769010384->133"
            ]
        }
    },
    {
        "id": "139997769482352->134",
        "type": "column",
        "parentNode": "139997769482352",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "139997769010384->134"
            ]
        }
    },
    {
        "id": "139997769482352->135",
        "type": "column",
        "parentNode": "139997769482352",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "139997769010384->135"
            ]
        }
    },
    {
        "id": "139997769482352->136",
        "type": "column",
        "parentNode": "139997769482352",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "139997769010384->136"
            ]
        }
    },
    {
        "id": "139997769482352->137",
        "type": "column",
        "parentNode": "139997769482352",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "139997769010384->137"
            ]
        }
    },
    {
        "id": "139997769269984->138",
        "type": "column",
        "parentNode": "139997769269984",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "139997769270416->138"
            ]
        }
    },
    {
        "id": "139997769269984->139",
        "type": "column",
        "parentNode": "139997769269984",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "139997769270416->139"
            ]
        }
    },
    {
        "id": "139997769269984->140",
        "type": "column",
        "parentNode": "139997769269984",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "139997769270416->140"
            ]
        }
    },
    {
        "id": "139997769269984->141",
        "type": "column",
        "parentNode": "139997769269984",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "139997769270416->141"
            ]
        }
    },
    {
        "id": "139997769269984->142",
        "type": "column",
        "parentNode": "139997769269984",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "139997769270416->142"
            ]
        }
    },
    {
        "id": "139997769270416->138",
        "type": "column",
        "parentNode": "139997769270416",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "139997769285344->138"
            ]
        }
    },
    {
        "id": "139997769270416->139",
        "type": "column",
        "parentNode": "139997769270416",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "139997769285344->139"
            ]
        }
    },
    {
        "id": "139997769270416->140",
        "type": "column",
        "parentNode": "139997769270416",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "139997769285344->140"
            ]
        }
    },
    {
        "id": "139997769270416->141",
        "type": "column",
        "parentNode": "139997769270416",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "139997769285344->141"
            ]
        }
    },
    {
        "id": "139997769270416->142",
        "type": "column",
        "parentNode": "139997769270416",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "139997769285344->142"
            ]
        }
    },
    {
        "id": "139997769285344->138",
        "type": "column",
        "parentNode": "139997769285344",
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
        "id": "139997769285344->139",
        "type": "column",
        "parentNode": "139997769285344",
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
        "id": "139997769285344->140",
        "type": "column",
        "parentNode": "139997769285344",
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
        "id": "139997769285344->141",
        "type": "column",
        "parentNode": "139997769285344",
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
        "id": "139997769285344->142",
        "type": "column",
        "parentNode": "139997769285344",
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
        "id": "139997769010384->133",
        "type": "column",
        "parentNode": "139997769010384",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "139997767897088->133"
            ]
        }
    },
    {
        "id": "139997769010384->134",
        "type": "column",
        "parentNode": "139997769010384",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "139997767897088->134"
            ]
        }
    },
    {
        "id": "139997769010384->135",
        "type": "column",
        "parentNode": "139997769010384",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "139997767897088->135"
            ]
        }
    },
    {
        "id": "139997769010384->136",
        "type": "column",
        "parentNode": "139997769010384",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "139997767897088->136"
            ]
        }
    },
    {
        "id": "139997769010384->137",
        "type": "column",
        "parentNode": "139997769010384",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "139997767897088->137"
            ]
        }
    },
    {
        "id": "139997767897088->133",
        "type": "column",
        "parentNode": "139997767897088",
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
        "id": "139997767897088->134",
        "type": "column",
        "parentNode": "139997767897088",
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
        "id": "139997767897088->135",
        "type": "column",
        "parentNode": "139997767897088",
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
        "id": "139997767897088->136",
        "type": "column",
        "parentNode": "139997767897088",
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
        "id": "139997767897088->137",
        "type": "column",
        "parentNode": "139997767897088",
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
        "id": "139997769269744->25",
        "type": "column",
        "parentNode": "139997769269744",
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
        "id": "139997769269744->26",
        "type": "column",
        "parentNode": "139997769269744",
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
        "id": "139997769269744->27",
        "type": "column",
        "parentNode": "139997769269744",
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
        "id": "139997769269744->28",
        "type": "column",
        "parentNode": "139997769269744",
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
        "id": "139997769280544->33",
        "type": "column",
        "parentNode": "139997769280544",
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
        "id": "139997769280544->34",
        "type": "column",
        "parentNode": "139997769280544",
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
        "id": "139997769280544->35",
        "type": "column",
        "parentNode": "139997769280544",
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
        "id": "139997769009280->15",
        "type": "column",
        "parentNode": "139997769009280",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "139997769023056->15"
            ]
        }
    },
    {
        "id": "139997769009280->16",
        "type": "column",
        "parentNode": "139997769009280",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997769023056->16"
            ]
        }
    },
    {
        "id": "139997769009280->17",
        "type": "column",
        "parentNode": "139997769009280",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997769023056->17"
            ]
        }
    },
    {
        "id": "139997769009280->18",
        "type": "column",
        "parentNode": "139997769009280",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "139997769023056->18"
            ]
        }
    },
    {
        "id": "139997769009280->19",
        "type": "column",
        "parentNode": "139997769009280",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997769023056->19"
            ]
        }
    },
    {
        "id": "139997769271664->44",
        "type": "column",
        "parentNode": "139997769271664",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "139997769011344->44"
            ]
        }
    },
    {
        "id": "139997769271664->45",
        "type": "column",
        "parentNode": "139997769271664",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "139997769011344->45"
            ]
        }
    },
    {
        "id": "139997769271664->46",
        "type": "column",
        "parentNode": "139997769271664",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "139997769011344->46"
            ]
        }
    },
    {
        "id": "139997769271664->47",
        "type": "column",
        "parentNode": "139997769271664",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "139997769011344->47"
            ]
        }
    },
    {
        "id": "139997769271664->48",
        "type": "column",
        "parentNode": "139997769271664",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "139997769011344->48"
            ]
        }
    },
    {
        "id": "139997769011344->44",
        "type": "column",
        "parentNode": "139997769011344",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "139997769020080->44"
            ]
        }
    },
    {
        "id": "139997769011344->45",
        "type": "column",
        "parentNode": "139997769011344",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "139997769020080->45"
            ]
        }
    },
    {
        "id": "139997769011344->46",
        "type": "column",
        "parentNode": "139997769011344",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "139997769020080->46"
            ]
        }
    },
    {
        "id": "139997769011344->47",
        "type": "column",
        "parentNode": "139997769011344",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "139997769020080->47"
            ]
        }
    },
    {
        "id": "139997769011344->48",
        "type": "column",
        "parentNode": "139997769011344",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "139997769020080->48"
            ]
        }
    },
    {
        "id": "139997769020080->44",
        "type": "column",
        "parentNode": "139997769020080",
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
        "id": "139997769020080->45",
        "type": "column",
        "parentNode": "139997769020080",
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
        "id": "139997769020080->46",
        "type": "column",
        "parentNode": "139997769020080",
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
        "id": "139997769020080->47",
        "type": "column",
        "parentNode": "139997769020080",
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
        "id": "139997769020080->48",
        "type": "column",
        "parentNode": "139997769020080",
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
        "id": "139997769023056->15",
        "type": "column",
        "parentNode": "139997769023056",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "139997767894448->15"
            ]
        }
    },
    {
        "id": "139997769023056->16",
        "type": "column",
        "parentNode": "139997769023056",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139997767894448->16"
            ]
        }
    },
    {
        "id": "139997769023056->17",
        "type": "column",
        "parentNode": "139997769023056",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139997767894448->17"
            ]
        }
    },
    {
        "id": "139997769023056->18",
        "type": "column",
        "parentNode": "139997769023056",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "139997767894448->18"
            ]
        }
    },
    {
        "id": "139997769023056->19",
        "type": "column",
        "parentNode": "139997769023056",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139997767894448->19"
            ]
        }
    },
    {
        "id": "139997767894448->15",
        "type": "column",
        "parentNode": "139997767894448",
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
        "id": "139997767894448->16",
        "type": "column",
        "parentNode": "139997767894448",
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
        "id": "139997767894448->17",
        "type": "column",
        "parentNode": "139997767894448",
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
        "id": "139997767894448->18",
        "type": "column",
        "parentNode": "139997767894448",
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
        "id": "139997767894448->19",
        "type": "column",
        "parentNode": "139997767894448",
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
        "id": "139997767900256-139997767897712",
        "source": "139997767900256",
        "target": "139997767897712",
        "data": {}
    },
    {
        "id": "139997767897712-139997767896944",
        "source": "139997767897712",
        "target": "139997767896944",
        "data": {}
    },
    {
        "id": "139997767896944-139997769498144",
        "source": "139997767896944",
        "target": "139997769498144",
        "data": {}
    },
    {
        "id": "139997769498144-139997769744144",
        "source": "139997769498144",
        "target": "139997769744144",
        "data": {}
    },
    {
        "id": "139997769744144-139997769740784",
        "source": "139997769744144",
        "target": "139997769740784",
        "data": {}
    },
    {
        "id": "139997769498144-139997769729024",
        "source": "139997769498144",
        "target": "139997769729024",
        "data": {}
    },
    {
        "id": "139997769729024-139997769739056",
        "source": "139997769729024",
        "target": "139997769739056",
        "data": {}
    },
    {
        "id": "139997769739056-139997767896800",
        "source": "139997769739056",
        "target": "139997767896800",
        "data": {}
    },
    {
        "id": "139997767896800-139997769742176",
        "source": "139997767896800",
        "target": "139997769742176",
        "data": {}
    },
    {
        "id": "139997769742176-139997769279872",
        "source": "139997769742176",
        "target": "139997769279872",
        "data": {}
    },
    {
        "id": "139997769279872-139997769736560",
        "source": "139997769279872",
        "target": "139997769736560",
        "data": {}
    },
    {
        "id": "139997769736560-139997769738432",
        "source": "139997769736560",
        "target": "139997769738432",
        "data": {}
    },
    {
        "id": "139997769736560-139997769734784",
        "source": "139997769736560",
        "target": "139997769734784",
        "data": {}
    },
    {
        "id": "139997769734784-139997767893104",
        "source": "139997769734784",
        "target": "139997767893104",
        "data": {}
    },
    {
        "id": "139997767893104-139997769739536",
        "source": "139997767893104",
        "target": "139997769739536",
        "data": {}
    },
    {
        "id": "139997769739536-139997769495024",
        "source": "139997769739536",
        "target": "139997769495024",
        "data": {}
    },
    {
        "id": "139997769739536-139997769740976",
        "source": "139997769739536",
        "target": "139997769740976",
        "data": {}
    },
    {
        "id": "139997769740976-139997769740208",
        "source": "139997769740976",
        "target": "139997769740208",
        "data": {}
    },
    {
        "id": "139997769740208-139997769738144",
        "source": "139997769740208",
        "target": "139997769738144",
        "data": {}
    },
    {
        "id": "139997769738144-139997968408704",
        "source": "139997769738144",
        "target": "139997968408704",
        "data": {}
    },
    {
        "id": "139997968408704-139997769482400",
        "source": "139997968408704",
        "target": "139997769482400",
        "data": {}
    },
    {
        "id": "139997769482400-139997769736896",
        "source": "139997769482400",
        "target": "139997769736896",
        "data": {}
    },
    {
        "id": "139997769738144-139997769739440",
        "source": "139997769738144",
        "target": "139997769739440",
        "data": {}
    },
    {
        "id": "139997769739440-139997769483984",
        "source": "139997769739440",
        "target": "139997769483984",
        "data": {}
    },
    {
        "id": "139997769740976-139997769496704",
        "source": "139997769740976",
        "target": "139997769496704",
        "data": {}
    },
    {
        "id": "139997769734784-139997769729648",
        "source": "139997769734784",
        "target": "139997769729648",
        "data": {}
    },
    {
        "id": "139997769729024-139997769492912",
        "source": "139997769729024",
        "target": "139997769492912",
        "data": {}
    },
    {
        "id": "139997769492912-139997769019696",
        "source": "139997769492912",
        "target": "139997769019696",
        "data": {}
    },
    {
        "id": "139997769019696-139997769483744",
        "source": "139997769019696",
        "target": "139997769483744",
        "data": {}
    },
    {
        "id": "139997769483744-139997769014080",
        "source": "139997769483744",
        "target": "139997769014080",
        "data": {}
    },
    {
        "id": "139997769014080-139997769283280",
        "source": "139997769014080",
        "target": "139997769283280",
        "data": {}
    },
    {
        "id": "139997769283280-139997769494880",
        "source": "139997769283280",
        "target": "139997769494880",
        "data": {}
    },
    {
        "id": "139997769494880-139997769022336",
        "source": "139997769494880",
        "target": "139997769022336",
        "data": {}
    },
    {
        "id": "139997769494880-139997769496512",
        "source": "139997769494880",
        "target": "139997769496512",
        "data": {}
    },
    {
        "id": "139997769496512-139997769020848",
        "source": "139997769496512",
        "target": "139997769020848",
        "data": {}
    },
    {
        "id": "139997769020848-139997769009904",
        "source": "139997769020848",
        "target": "139997769009904",
        "data": {}
    },
    {
        "id": "139997769009904-139997769274688",
        "source": "139997769009904",
        "target": "139997769274688",
        "data": {}
    },
    {
        "id": "139997769274688-139997769018496",
        "source": "139997769274688",
        "target": "139997769018496",
        "data": {}
    },
    {
        "id": "139997769018496-139997769491952",
        "source": "139997769018496",
        "target": "139997769491952",
        "data": {}
    },
    {
        "id": "139997769009904-139997769487968",
        "source": "139997769009904",
        "target": "139997769487968",
        "data": {}
    },
    {
        "id": "139997769487968-139997769496944",
        "source": "139997769487968",
        "target": "139997769496944",
        "data": {}
    },
    {
        "id": "139997769496512-139997769282704",
        "source": "139997769496512",
        "target": "139997769282704",
        "data": {}
    },
    {
        "id": "139997769492912-139997769490560",
        "source": "139997769492912",
        "target": "139997769490560",
        "data": {}
    },
    {
        "id": "139997769490560-139997968252688",
        "source": "139997769490560",
        "target": "139997968252688",
        "data": {}
    },
    {
        "id": "139997968252688-139997769496656",
        "source": "139997968252688",
        "target": "139997769496656",
        "data": {}
    },
    {
        "id": "139997769496656-139997769484320",
        "source": "139997769496656",
        "target": "139997769484320",
        "data": {}
    },
    {
        "id": "139997769484320-139997769493536",
        "source": "139997769484320",
        "target": "139997769493536",
        "data": {}
    },
    {
        "id": "139997769493536-139997770399216",
        "source": "139997769493536",
        "target": "139997770399216",
        "data": {}
    },
    {
        "id": "139997770399216-139997769487680",
        "source": "139997770399216",
        "target": "139997769487680",
        "data": {}
    },
    {
        "id": "139997769487680-139997769483456",
        "source": "139997769487680",
        "target": "139997769483456",
        "data": {}
    },
    {
        "id": "139997769483456-139997769491808",
        "source": "139997769483456",
        "target": "139997769491808",
        "data": {}
    },
    {
        "id": "139997770399216-139997769493824",
        "source": "139997770399216",
        "target": "139997769493824",
        "data": {}
    },
    {
        "id": "139997769493824-139997769482448",
        "source": "139997769493824",
        "target": "139997769482448",
        "data": {}
    },
    {
        "id": "139997769490560-139997769489360",
        "source": "139997769490560",
        "target": "139997769489360",
        "data": {}
    },
    {
        "id": "139997769489360-139997769487248",
        "source": "139997769489360",
        "target": "139997769487248",
        "data": {}
    },
    {
        "id": "139997769487248-139997769489504",
        "source": "139997769487248",
        "target": "139997769489504",
        "data": {}
    },
    {
        "id": "139997769489504-139997769492672",
        "source": "139997769489504",
        "target": "139997769492672",
        "data": {}
    },
    {
        "id": "139997769489504-139997769485232",
        "source": "139997769489504",
        "target": "139997769485232",
        "data": {}
    },
    {
        "id": "139997769485232-139997769014896",
        "source": "139997769485232",
        "target": "139997769014896",
        "data": {}
    },
    {
        "id": "139997769485232-139997769269552",
        "source": "139997769485232",
        "target": "139997769269552",
        "data": {}
    },
    {
        "id": "139997769269552-139997770543408",
        "source": "139997769269552",
        "target": "139997770543408",
        "data": {}
    },
    {
        "id": "139997770543408-139997769485760",
        "source": "139997770543408",
        "target": "139997769485760",
        "data": {}
    },
    {
        "id": "139997769485760-139997769489696",
        "source": "139997769485760",
        "target": "139997769489696",
        "data": {}
    },
    {
        "id": "139997769485760-139997769486048",
        "source": "139997769485760",
        "target": "139997769486048",
        "data": {}
    },
    {
        "id": "139997769486048-139997769010240",
        "source": "139997769486048",
        "target": "139997769010240",
        "data": {}
    },
    {
        "id": "139997769010240-139997769017056",
        "source": "139997769010240",
        "target": "139997769017056",
        "data": {}
    },
    {
        "id": "139997769017056-139997769013360",
        "source": "139997769017056",
        "target": "139997769013360",
        "data": {}
    },
    {
        "id": "139997769017056-139997769009856",
        "source": "139997769017056",
        "target": "139997769009856",
        "data": {}
    },
    {
        "id": "139997769009856-139997769486528",
        "source": "139997769009856",
        "target": "139997769486528",
        "data": {}
    },
    {
        "id": "139997769486528-139997769482352",
        "source": "139997769486528",
        "target": "139997769482352",
        "data": {}
    },
    {
        "id": "139997769482352-139997769269984",
        "source": "139997769482352",
        "target": "139997769269984",
        "data": {}
    },
    {
        "id": "139997769269984-139997769270416",
        "source": "139997769269984",
        "target": "139997769270416",
        "data": {}
    },
    {
        "id": "139997769270416-139997769285344",
        "source": "139997769270416",
        "target": "139997769285344",
        "data": {}
    },
    {
        "id": "139997769482352-139997769010384",
        "source": "139997769482352",
        "target": "139997769010384",
        "data": {}
    },
    {
        "id": "139997769010384-139997767897088",
        "source": "139997769010384",
        "target": "139997767897088",
        "data": {}
    },
    {
        "id": "139997769009856-139997769269744",
        "source": "139997769009856",
        "target": "139997769269744",
        "data": {}
    },
    {
        "id": "139997769486048-139997769280544",
        "source": "139997769486048",
        "target": "139997769280544",
        "data": {}
    },
    {
        "id": "139997769487248-139997769009280",
        "source": "139997769487248",
        "target": "139997769009280",
        "data": {}
    },
    {
        "id": "139997769009280-139997769271664",
        "source": "139997769009280",
        "target": "139997769271664",
        "data": {}
    },
    {
        "id": "139997769271664-139997769011344",
        "source": "139997769271664",
        "target": "139997769011344",
        "data": {}
    },
    {
        "id": "139997769011344-139997769020080",
        "source": "139997769011344",
        "target": "139997769020080",
        "data": {}
    },
    {
        "id": "139997769009280-139997769023056",
        "source": "139997769009280",
        "target": "139997769023056",
        "data": {}
    },
    {
        "id": "139997769023056-139997767894448",
        "source": "139997769023056",
        "target": "139997767894448",
        "data": {}
    },
    {
        "id": "(139997767900256->35)-(139997767897712->35)",
        "source": "139997767900256->35",
        "target": "139997767897712->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->113)-(139997767897712->113)",
        "source": "139997767900256->113",
        "target": "139997767897712->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->19)-(139997767897712->19)",
        "source": "139997767900256->19",
        "target": "139997767897712->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->16)-(139997767897712->16)",
        "source": "139997767900256->16",
        "target": "139997767897712->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->17)-(139997767897712->17)",
        "source": "139997767900256->17",
        "target": "139997767897712->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->122)-(139997767897712->122)",
        "source": "139997767900256->122",
        "target": "139997767897712->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->61)-(139997767897712->61)",
        "source": "139997767900256->61",
        "target": "139997767897712->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->212)-(139997767897712->212)",
        "source": "139997767900256->212",
        "target": "139997767897712->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->84)-(139997767897712->84)",
        "source": "139997767900256->84",
        "target": "139997767897712->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->245)-(139997767897712->245)",
        "source": "139997767900256->245",
        "target": "139997767897712->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->109)-(139997767897712->109)",
        "source": "139997767900256->109",
        "target": "139997767897712->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->163)-(139997767897712->163)",
        "source": "139997767900256->163",
        "target": "139997767897712->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->164)-(139997767897712->164)",
        "source": "139997767900256->164",
        "target": "139997767897712->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->165)-(139997767897712->165)",
        "source": "139997767900256->165",
        "target": "139997767897712->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->166)-(139997767897712->166)",
        "source": "139997767900256->166",
        "target": "139997767897712->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->171)-(139997767897712->171)",
        "source": "139997767900256->171",
        "target": "139997767897712->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->291)-(139997767897712->291)",
        "source": "139997767900256->291",
        "target": "139997767897712->291",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->309)-(139997767897712->309)",
        "source": "139997767900256->309",
        "target": "139997767897712->309",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767900256->328)-(139997767897712->109)",
        "source": "139997767900256->328",
        "target": "139997767897712->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->35)-(139997767896944->35)",
        "source": "139997767897712->35",
        "target": "139997767896944->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->113)-(139997767896944->113)",
        "source": "139997767897712->113",
        "target": "139997767896944->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->19)-(139997767896944->19)",
        "source": "139997767897712->19",
        "target": "139997767896944->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->16)-(139997767896944->16)",
        "source": "139997767897712->16",
        "target": "139997767896944->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->17)-(139997767896944->17)",
        "source": "139997767897712->17",
        "target": "139997767896944->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->122)-(139997767896944->122)",
        "source": "139997767897712->122",
        "target": "139997767896944->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->61)-(139997767896944->61)",
        "source": "139997767897712->61",
        "target": "139997767896944->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->212)-(139997767896944->212)",
        "source": "139997767897712->212",
        "target": "139997767896944->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->84)-(139997767896944->84)",
        "source": "139997767897712->84",
        "target": "139997767896944->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->245)-(139997767896944->245)",
        "source": "139997767897712->245",
        "target": "139997767896944->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->109)-(139997767896944->109)",
        "source": "139997767897712->109",
        "target": "139997767896944->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->163)-(139997767896944->163)",
        "source": "139997767897712->163",
        "target": "139997767896944->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->164)-(139997767896944->164)",
        "source": "139997767897712->164",
        "target": "139997767896944->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->165)-(139997767896944->165)",
        "source": "139997767897712->165",
        "target": "139997767896944->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->166)-(139997767896944->166)",
        "source": "139997767897712->166",
        "target": "139997767896944->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->171)-(139997767896944->171)",
        "source": "139997767897712->171",
        "target": "139997767896944->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->291)-(139997767896944->291)",
        "source": "139997767897712->291",
        "target": "139997767896944->291",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767897712->309)-(139997767896944->84)",
        "source": "139997767897712->309",
        "target": "139997767896944->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->35)-(139997769498144->35)",
        "source": "139997767896944->35",
        "target": "139997769498144->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->113)-(139997769498144->113)",
        "source": "139997767896944->113",
        "target": "139997769498144->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->19)-(139997769498144->19)",
        "source": "139997767896944->19",
        "target": "139997769498144->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->16)-(139997769498144->16)",
        "source": "139997767896944->16",
        "target": "139997769498144->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->17)-(139997769498144->17)",
        "source": "139997767896944->17",
        "target": "139997769498144->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->122)-(139997769498144->122)",
        "source": "139997767896944->122",
        "target": "139997769498144->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->61)-(139997769498144->61)",
        "source": "139997767896944->61",
        "target": "139997769498144->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->212)-(139997769498144->212)",
        "source": "139997767896944->212",
        "target": "139997769498144->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->84)-(139997769498144->84)",
        "source": "139997767896944->84",
        "target": "139997769498144->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->245)-(139997769498144->245)",
        "source": "139997767896944->245",
        "target": "139997769498144->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->109)-(139997769498144->109)",
        "source": "139997767896944->109",
        "target": "139997769498144->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->163)-(139997769498144->163)",
        "source": "139997767896944->163",
        "target": "139997769498144->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->164)-(139997769498144->164)",
        "source": "139997767896944->164",
        "target": "139997769498144->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->165)-(139997769498144->165)",
        "source": "139997767896944->165",
        "target": "139997769498144->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->166)-(139997769498144->166)",
        "source": "139997767896944->166",
        "target": "139997769498144->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->171)-(139997769498144->171)",
        "source": "139997767896944->171",
        "target": "139997769498144->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896944->291)-(139997769498144->61)",
        "source": "139997767896944->291",
        "target": "139997769498144->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->35)-(139997769729024->35)",
        "source": "139997769498144->35",
        "target": "139997769729024->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->113)-(139997769729024->113)",
        "source": "139997769498144->113",
        "target": "139997769729024->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->19)-(139997769729024->19)",
        "source": "139997769498144->19",
        "target": "139997769729024->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->16)-(139997769729024->16)",
        "source": "139997769498144->16",
        "target": "139997769729024->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->17)-(139997769729024->17)",
        "source": "139997769498144->17",
        "target": "139997769729024->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->122)-(139997769729024->122)",
        "source": "139997769498144->122",
        "target": "139997769729024->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->61)-(139997769729024->61)",
        "source": "139997769498144->61",
        "target": "139997769729024->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->212)-(139997769729024->212)",
        "source": "139997769498144->212",
        "target": "139997769729024->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->84)-(139997769729024->84)",
        "source": "139997769498144->84",
        "target": "139997769729024->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->245)-(139997769729024->245)",
        "source": "139997769498144->245",
        "target": "139997769729024->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->109)-(139997769729024->109)",
        "source": "139997769498144->109",
        "target": "139997769729024->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->163)-(139997769744144->163)",
        "source": "139997769498144->163",
        "target": "139997769744144->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->164)-(139997769744144->164)",
        "source": "139997769498144->164",
        "target": "139997769744144->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->165)-(139997769744144->165)",
        "source": "139997769498144->165",
        "target": "139997769744144->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->166)-(139997769744144->166)",
        "source": "139997769498144->166",
        "target": "139997769744144->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769498144->171)-(139997769744144->171)",
        "source": "139997769498144->171",
        "target": "139997769744144->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->163)-(139997769740784->163)",
        "source": "139997769744144->163",
        "target": "139997769740784->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->164)-(139997769740784->164)",
        "source": "139997769744144->164",
        "target": "139997769740784->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->165)-(139997769740784->165)",
        "source": "139997769744144->165",
        "target": "139997769740784->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->166)-(139997769740784->166)",
        "source": "139997769744144->166",
        "target": "139997769740784->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->171)-(139997769740784->163)",
        "source": "139997769744144->171",
        "target": "139997769740784->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->171)-(139997769740784->164)",
        "source": "139997769744144->171",
        "target": "139997769740784->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->171)-(139997769740784->165)",
        "source": "139997769744144->171",
        "target": "139997769740784->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769744144->171)-(139997769740784->166)",
        "source": "139997769744144->171",
        "target": "139997769740784->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->35)-(139997769492912->35)",
        "source": "139997769729024->35",
        "target": "139997769492912->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->35)-(139997769739056->226)",
        "source": "139997769729024->35",
        "target": "139997769739056->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->113)-(139997769492912->113)",
        "source": "139997769729024->113",
        "target": "139997769492912->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->19)-(139997769492912->19)",
        "source": "139997769729024->19",
        "target": "139997769492912->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->16)-(139997769492912->16)",
        "source": "139997769729024->16",
        "target": "139997769492912->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->17)-(139997769492912->17)",
        "source": "139997769729024->17",
        "target": "139997769492912->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->122)-(139997769492912->122)",
        "source": "139997769729024->122",
        "target": "139997769492912->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->61)-(139997769492912->61)",
        "source": "139997769729024->61",
        "target": "139997769492912->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->212)-(139997769492912->35)",
        "source": "139997769729024->212",
        "target": "139997769492912->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->212)-(139997769739056->226)",
        "source": "139997769729024->212",
        "target": "139997769739056->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->84)-(139997769492912->84)",
        "source": "139997769729024->84",
        "target": "139997769492912->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->245)-(139997769739056->245)",
        "source": "139997769729024->245",
        "target": "139997769739056->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769729024->109)-(139997769739056->109)",
        "source": "139997769729024->109",
        "target": "139997769739056->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739056->245)-(139997767896800->245)",
        "source": "139997769739056->245",
        "target": "139997767896800->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739056->226)-(139997767896800->226)",
        "source": "139997769739056->226",
        "target": "139997767896800->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739056->109)-(139997767896800->109)",
        "source": "139997769739056->109",
        "target": "139997767896800->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896800->245)-(139997769742176->245)",
        "source": "139997767896800->245",
        "target": "139997769742176->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896800->226)-(139997769742176->226)",
        "source": "139997767896800->226",
        "target": "139997769742176->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767896800->109)-(139997769742176->109)",
        "source": "139997767896800->109",
        "target": "139997769742176->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769742176->245)-(139997769279872->245)",
        "source": "139997769742176->245",
        "target": "139997769279872->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769742176->226)-(139997769279872->226)",
        "source": "139997769742176->226",
        "target": "139997769279872->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769742176->109)-(139997769279872->109)",
        "source": "139997769742176->109",
        "target": "139997769279872->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769279872->245)-(139997769736560->245)",
        "source": "139997769279872->245",
        "target": "139997769736560->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769279872->226)-(139997769736560->226)",
        "source": "139997769279872->226",
        "target": "139997769736560->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769279872->109)-(139997769736560->84)",
        "source": "139997769279872->109",
        "target": "139997769736560->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->226)-(139997769734784->226)",
        "source": "139997769736560->226",
        "target": "139997769734784->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->226)-(139997769738432->244)",
        "source": "139997769736560->226",
        "target": "139997769738432->244",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->224)-(139997769734784->224)",
        "source": "139997769736560->224",
        "target": "139997769734784->224",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->225)-(139997769734784->225)",
        "source": "139997769736560->225",
        "target": "139997769734784->225",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->241)-(139997769734784->241)",
        "source": "139997769736560->241",
        "target": "139997769734784->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->84)-(139997769734784->84)",
        "source": "139997769736560->84",
        "target": "139997769734784->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769736560->245)-(139997769738432->245)",
        "source": "139997769736560->245",
        "target": "139997769738432->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769734784->226)-(139997769729648->226)",
        "source": "139997769734784->226",
        "target": "139997769729648->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769734784->226)-(139997767893104->243)",
        "source": "139997769734784->226",
        "target": "139997767893104->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769734784->224)-(139997769729648->224)",
        "source": "139997769734784->224",
        "target": "139997769729648->224",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769734784->225)-(139997769729648->225)",
        "source": "139997769734784->225",
        "target": "139997769729648->225",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769734784->241)-(139997767893104->241)",
        "source": "139997769734784->241",
        "target": "139997767893104->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769734784->84)-(139997767893104->84)",
        "source": "139997769734784->84",
        "target": "139997767893104->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767893104->243)-(139997769739536->243)",
        "source": "139997767893104->243",
        "target": "139997769739536->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767893104->241)-(139997769739536->241)",
        "source": "139997767893104->241",
        "target": "139997769739536->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997767893104->84)-(139997769739536->61)",
        "source": "139997767893104->84",
        "target": "139997769739536->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->227)-(139997769740976->227)",
        "source": "139997769739536->227",
        "target": "139997769740976->227",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->227)-(139997769495024->242)",
        "source": "139997769739536->227",
        "target": "139997769495024->242",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->228)-(139997769740976->228)",
        "source": "139997769739536->228",
        "target": "139997769740976->228",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->229)-(139997769740976->229)",
        "source": "139997769739536->229",
        "target": "139997769740976->229",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->230)-(139997769740976->230)",
        "source": "139997769739536->230",
        "target": "139997769740976->230",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->61)-(139997769740976->61)",
        "source": "139997769739536->61",
        "target": "139997769740976->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->241)-(139997769495024->241)",
        "source": "139997769739536->241",
        "target": "139997769495024->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739536->243)-(139997769495024->243)",
        "source": "139997769739536->243",
        "target": "139997769495024->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740976->227)-(139997769496704->227)",
        "source": "139997769740976->227",
        "target": "139997769496704->227",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740976->227)-(139997769740208->235)",
        "source": "139997769740976->227",
        "target": "139997769740208->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740976->228)-(139997769496704->228)",
        "source": "139997769740976->228",
        "target": "139997769496704->228",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740976->229)-(139997769496704->229)",
        "source": "139997769740976->229",
        "target": "139997769496704->229",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740976->230)-(139997769496704->230)",
        "source": "139997769740976->230",
        "target": "139997769496704->230",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740976->61)-(139997769740208->61)",
        "source": "139997769740976->61",
        "target": "139997769740208->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769740208->235)-(139997769738144->235)",
        "source": "139997769740208->235",
        "target": "139997769738144->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769738144->231)-(139997769739440->231)",
        "source": "139997769738144->231",
        "target": "139997769739440->231",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769738144->232)-(139997769739440->232)",
        "source": "139997769738144->232",
        "target": "139997769739440->232",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769738144->233)-(139997769739440->233)",
        "source": "139997769738144->233",
        "target": "139997769739440->233",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769738144->234)-(139997769739440->234)",
        "source": "139997769738144->234",
        "target": "139997769739440->234",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769738144->235)-(139997769739440->235)",
        "source": "139997769738144->235",
        "target": "139997769739440->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968408704->236)-(139997769482400->236)",
        "source": "139997968408704->236",
        "target": "139997769482400->236",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968408704->237)-(139997769482400->237)",
        "source": "139997968408704->237",
        "target": "139997769482400->237",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968408704->238)-(139997769482400->238)",
        "source": "139997968408704->238",
        "target": "139997769482400->238",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968408704->239)-(139997769482400->239)",
        "source": "139997968408704->239",
        "target": "139997769482400->239",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968408704->240)-(139997769482400->240)",
        "source": "139997968408704->240",
        "target": "139997769482400->240",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482400->236)-(139997769736896->236)",
        "source": "139997769482400->236",
        "target": "139997769736896->236",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482400->237)-(139997769736896->237)",
        "source": "139997769482400->237",
        "target": "139997769736896->237",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482400->238)-(139997769736896->238)",
        "source": "139997769482400->238",
        "target": "139997769736896->238",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482400->239)-(139997769736896->239)",
        "source": "139997769482400->239",
        "target": "139997769736896->239",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482400->240)-(139997769736896->240)",
        "source": "139997769482400->240",
        "target": "139997769736896->240",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739440->231)-(139997769483984->231)",
        "source": "139997769739440->231",
        "target": "139997769483984->231",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739440->232)-(139997769483984->232)",
        "source": "139997769739440->232",
        "target": "139997769483984->232",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739440->233)-(139997769483984->233)",
        "source": "139997769739440->233",
        "target": "139997769483984->233",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739440->234)-(139997769483984->234)",
        "source": "139997769739440->234",
        "target": "139997769483984->234",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769739440->235)-(139997769483984->235)",
        "source": "139997769739440->235",
        "target": "139997769483984->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->113)-(139997769490560->113)",
        "source": "139997769492912->113",
        "target": "139997769490560->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->113)-(139997769019696->210)",
        "source": "139997769492912->113",
        "target": "139997769019696->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->19)-(139997769490560->19)",
        "source": "139997769492912->19",
        "target": "139997769490560->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->16)-(139997769490560->16)",
        "source": "139997769492912->16",
        "target": "139997769490560->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->17)-(139997769490560->17)",
        "source": "139997769492912->17",
        "target": "139997769490560->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->122)-(139997769490560->122)",
        "source": "139997769492912->122",
        "target": "139997769490560->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->35)-(139997769490560->35)",
        "source": "139997769492912->35",
        "target": "139997769490560->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->61)-(139997769490560->61)",
        "source": "139997769492912->61",
        "target": "139997769490560->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->212)-(139997769019696->212)",
        "source": "139997769492912->212",
        "target": "139997769019696->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769492912->84)-(139997769019696->84)",
        "source": "139997769492912->84",
        "target": "139997769019696->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769019696->212)-(139997769483744->212)",
        "source": "139997769019696->212",
        "target": "139997769483744->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769019696->210)-(139997769483744->210)",
        "source": "139997769019696->210",
        "target": "139997769483744->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769019696->84)-(139997769483744->84)",
        "source": "139997769019696->84",
        "target": "139997769483744->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483744->212)-(139997769014080->212)",
        "source": "139997769483744->212",
        "target": "139997769014080->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483744->210)-(139997769014080->210)",
        "source": "139997769483744->210",
        "target": "139997769014080->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483744->84)-(139997769014080->84)",
        "source": "139997769483744->84",
        "target": "139997769014080->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769014080->212)-(139997769283280->212)",
        "source": "139997769014080->212",
        "target": "139997769283280->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769014080->210)-(139997769283280->210)",
        "source": "139997769014080->210",
        "target": "139997769283280->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769014080->84)-(139997769283280->84)",
        "source": "139997769014080->84",
        "target": "139997769283280->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769283280->212)-(139997769494880->212)",
        "source": "139997769283280->212",
        "target": "139997769494880->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769283280->210)-(139997769494880->210)",
        "source": "139997769283280->210",
        "target": "139997769494880->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769283280->84)-(139997769494880->61)",
        "source": "139997769283280->84",
        "target": "139997769494880->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->196)-(139997769496512->196)",
        "source": "139997769494880->196",
        "target": "139997769496512->196",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->196)-(139997769022336->211)",
        "source": "139997769494880->196",
        "target": "139997769022336->211",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->197)-(139997769496512->197)",
        "source": "139997769494880->197",
        "target": "139997769496512->197",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->198)-(139997769496512->198)",
        "source": "139997769494880->198",
        "target": "139997769496512->198",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->199)-(139997769496512->199)",
        "source": "139997769494880->199",
        "target": "139997769496512->199",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->61)-(139997769496512->61)",
        "source": "139997769494880->61",
        "target": "139997769496512->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->210)-(139997769022336->210)",
        "source": "139997769494880->210",
        "target": "139997769022336->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769494880->212)-(139997769022336->212)",
        "source": "139997769494880->212",
        "target": "139997769022336->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496512->196)-(139997769282704->196)",
        "source": "139997769496512->196",
        "target": "139997769282704->196",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496512->196)-(139997769020848->204)",
        "source": "139997769496512->196",
        "target": "139997769020848->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496512->197)-(139997769282704->197)",
        "source": "139997769496512->197",
        "target": "139997769282704->197",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496512->198)-(139997769282704->198)",
        "source": "139997769496512->198",
        "target": "139997769282704->198",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496512->199)-(139997769282704->199)",
        "source": "139997769496512->199",
        "target": "139997769282704->199",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496512->61)-(139997769020848->61)",
        "source": "139997769496512->61",
        "target": "139997769020848->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769020848->204)-(139997769009904->204)",
        "source": "139997769020848->204",
        "target": "139997769009904->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009904->200)-(139997769487968->200)",
        "source": "139997769009904->200",
        "target": "139997769487968->200",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009904->201)-(139997769487968->201)",
        "source": "139997769009904->201",
        "target": "139997769487968->201",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009904->202)-(139997769487968->202)",
        "source": "139997769009904->202",
        "target": "139997769487968->202",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009904->203)-(139997769487968->203)",
        "source": "139997769009904->203",
        "target": "139997769487968->203",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009904->204)-(139997769487968->204)",
        "source": "139997769009904->204",
        "target": "139997769487968->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769274688->205)-(139997769018496->205)",
        "source": "139997769274688->205",
        "target": "139997769018496->205",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769274688->206)-(139997769018496->206)",
        "source": "139997769274688->206",
        "target": "139997769018496->206",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769274688->207)-(139997769018496->207)",
        "source": "139997769274688->207",
        "target": "139997769018496->207",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769274688->208)-(139997769018496->208)",
        "source": "139997769274688->208",
        "target": "139997769018496->208",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769274688->209)-(139997769018496->209)",
        "source": "139997769274688->209",
        "target": "139997769018496->209",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769018496->205)-(139997769491952->205)",
        "source": "139997769018496->205",
        "target": "139997769491952->205",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769018496->206)-(139997769491952->206)",
        "source": "139997769018496->206",
        "target": "139997769491952->206",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769018496->207)-(139997769491952->207)",
        "source": "139997769018496->207",
        "target": "139997769491952->207",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769018496->208)-(139997769491952->208)",
        "source": "139997769018496->208",
        "target": "139997769491952->208",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769018496->209)-(139997769491952->209)",
        "source": "139997769018496->209",
        "target": "139997769491952->209",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487968->200)-(139997769496944->200)",
        "source": "139997769487968->200",
        "target": "139997769496944->200",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487968->201)-(139997769496944->201)",
        "source": "139997769487968->201",
        "target": "139997769496944->201",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487968->202)-(139997769496944->202)",
        "source": "139997769487968->202",
        "target": "139997769496944->202",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487968->203)-(139997769496944->203)",
        "source": "139997769487968->203",
        "target": "139997769496944->203",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487968->204)-(139997769496944->204)",
        "source": "139997769487968->204",
        "target": "139997769496944->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->19)-(139997769489360->19)",
        "source": "139997769490560->19",
        "target": "139997769489360->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->19)-(139997968252688->181)",
        "source": "139997769490560->19",
        "target": "139997968252688->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->16)-(139997769489360->16)",
        "source": "139997769490560->16",
        "target": "139997769489360->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->17)-(139997769489360->17)",
        "source": "139997769490560->17",
        "target": "139997769489360->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->122)-(139997769489360->122)",
        "source": "139997769490560->122",
        "target": "139997769489360->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->113)-(139997769489360->113)",
        "source": "139997769490560->113",
        "target": "139997769489360->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->35)-(139997769489360->35)",
        "source": "139997769490560->35",
        "target": "139997769489360->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769490560->61)-(139997968252688->61)",
        "source": "139997769490560->61",
        "target": "139997968252688->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968252688->181)-(139997769496656->181)",
        "source": "139997968252688->181",
        "target": "139997769496656->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997968252688->61)-(139997769496656->61)",
        "source": "139997968252688->61",
        "target": "139997769496656->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496656->181)-(139997769484320->181)",
        "source": "139997769496656->181",
        "target": "139997769484320->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769496656->61)-(139997769484320->61)",
        "source": "139997769496656->61",
        "target": "139997769484320->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769484320->181)-(139997769493536->181)",
        "source": "139997769484320->181",
        "target": "139997769493536->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769484320->61)-(139997769493536->61)",
        "source": "139997769484320->61",
        "target": "139997769493536->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769493536->181)-(139997770399216->181)",
        "source": "139997769493536->181",
        "target": "139997770399216->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770399216->177)-(139997769493824->177)",
        "source": "139997770399216->177",
        "target": "139997769493824->177",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770399216->178)-(139997769493824->178)",
        "source": "139997770399216->178",
        "target": "139997769493824->178",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770399216->179)-(139997769493824->179)",
        "source": "139997770399216->179",
        "target": "139997769493824->179",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770399216->180)-(139997769493824->180)",
        "source": "139997770399216->180",
        "target": "139997769493824->180",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770399216->181)-(139997769493824->181)",
        "source": "139997770399216->181",
        "target": "139997769493824->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487680->182)-(139997769483456->182)",
        "source": "139997769487680->182",
        "target": "139997769483456->182",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487680->183)-(139997769483456->183)",
        "source": "139997769487680->183",
        "target": "139997769483456->183",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487680->184)-(139997769483456->184)",
        "source": "139997769487680->184",
        "target": "139997769483456->184",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487680->185)-(139997769483456->185)",
        "source": "139997769487680->185",
        "target": "139997769483456->185",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487680->186)-(139997769483456->186)",
        "source": "139997769487680->186",
        "target": "139997769483456->186",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483456->182)-(139997769491808->182)",
        "source": "139997769483456->182",
        "target": "139997769491808->182",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483456->183)-(139997769491808->183)",
        "source": "139997769483456->183",
        "target": "139997769491808->183",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483456->184)-(139997769491808->184)",
        "source": "139997769483456->184",
        "target": "139997769491808->184",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483456->185)-(139997769491808->185)",
        "source": "139997769483456->185",
        "target": "139997769491808->185",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769483456->186)-(139997769491808->186)",
        "source": "139997769483456->186",
        "target": "139997769491808->186",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769493824->177)-(139997769482448->177)",
        "source": "139997769493824->177",
        "target": "139997769482448->177",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769493824->178)-(139997769482448->178)",
        "source": "139997769493824->178",
        "target": "139997769482448->178",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769493824->179)-(139997769482448->179)",
        "source": "139997769493824->179",
        "target": "139997769482448->179",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769493824->180)-(139997769482448->180)",
        "source": "139997769493824->180",
        "target": "139997769482448->180",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769493824->181)-(139997769482448->181)",
        "source": "139997769493824->181",
        "target": "139997769482448->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489360->16)-(139997769487248->16)",
        "source": "139997769489360->16",
        "target": "139997769487248->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489360->17)-(139997769487248->17)",
        "source": "139997769489360->17",
        "target": "139997769487248->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489360->19)-(139997769487248->19)",
        "source": "139997769489360->19",
        "target": "139997769487248->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489360->122)-(139997769487248->122)",
        "source": "139997769489360->122",
        "target": "139997769487248->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489360->113)-(139997769487248->113)",
        "source": "139997769489360->113",
        "target": "139997769487248->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489360->35)-(139997769487248->35)",
        "source": "139997769489360->35",
        "target": "139997769487248->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->19)-(139997769009280->19)",
        "source": "139997769487248->19",
        "target": "139997769009280->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->19)-(139997769489504->114)",
        "source": "139997769487248->19",
        "target": "139997769489504->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->15)-(139997769009280->15)",
        "source": "139997769487248->15",
        "target": "139997769009280->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->16)-(139997769009280->16)",
        "source": "139997769487248->16",
        "target": "139997769009280->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->17)-(139997769009280->17)",
        "source": "139997769487248->17",
        "target": "139997769009280->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->18)-(139997769009280->18)",
        "source": "139997769487248->18",
        "target": "139997769009280->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->35)-(139997769489504->35)",
        "source": "139997769487248->35",
        "target": "139997769489504->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->40)-(139997769489504->40)",
        "source": "139997769487248->40",
        "target": "139997769489504->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->109)-(139997769489504->109)",
        "source": "139997769487248->109",
        "target": "139997769489504->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->113)-(139997769489504->113)",
        "source": "139997769487248->113",
        "target": "139997769489504->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->122)-(139997769489504->122)",
        "source": "139997769487248->122",
        "target": "139997769489504->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->123)-(139997769489504->123)",
        "source": "139997769487248->123",
        "target": "139997769489504->123",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769487248->124)-(139997769489504->124)",
        "source": "139997769487248->124",
        "target": "139997769489504->124",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->114)-(139997769485232->114)",
        "source": "139997769489504->114",
        "target": "139997769485232->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->114)-(139997769492672->121)",
        "source": "139997769489504->114",
        "target": "139997769492672->121",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->35)-(139997769485232->35)",
        "source": "139997769489504->35",
        "target": "139997769485232->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->40)-(139997769485232->40)",
        "source": "139997769489504->40",
        "target": "139997769485232->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->109)-(139997769485232->109)",
        "source": "139997769489504->109",
        "target": "139997769485232->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->113)-(139997769485232->113)",
        "source": "139997769489504->113",
        "target": "139997769485232->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->122)-(139997769492672->122)",
        "source": "139997769489504->122",
        "target": "139997769492672->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->123)-(139997769492672->123)",
        "source": "139997769489504->123",
        "target": "139997769492672->123",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769489504->124)-(139997769492672->124)",
        "source": "139997769489504->124",
        "target": "139997769492672->124",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485232->35)-(139997769269552->35)",
        "source": "139997769485232->35",
        "target": "139997769269552->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485232->35)-(139997769014896->115)",
        "source": "139997769485232->35",
        "target": "139997769014896->115",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485232->40)-(139997769269552->40)",
        "source": "139997769485232->40",
        "target": "139997769269552->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485232->109)-(139997769269552->109)",
        "source": "139997769485232->109",
        "target": "139997769269552->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485232->113)-(139997769014896->113)",
        "source": "139997769485232->113",
        "target": "139997769014896->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485232->114)-(139997769014896->114)",
        "source": "139997769485232->114",
        "target": "139997769014896->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269552->40)-(139997770543408->40)",
        "source": "139997769269552->40",
        "target": "139997770543408->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269552->35)-(139997770543408->35)",
        "source": "139997769269552->35",
        "target": "139997770543408->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269552->109)-(139997770543408->109)",
        "source": "139997769269552->109",
        "target": "139997770543408->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770543408->40)-(139997769485760->40)",
        "source": "139997770543408->40",
        "target": "139997769485760->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770543408->35)-(139997769485760->35)",
        "source": "139997770543408->35",
        "target": "139997769485760->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997770543408->109)-(139997769485760->84)",
        "source": "139997770543408->109",
        "target": "139997769485760->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->35)-(139997769486048->35)",
        "source": "139997769485760->35",
        "target": "139997769486048->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->35)-(139997769489696->39)",
        "source": "139997769485760->35",
        "target": "139997769489696->39",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->33)-(139997769486048->33)",
        "source": "139997769485760->33",
        "target": "139997769486048->33",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->34)-(139997769486048->34)",
        "source": "139997769485760->34",
        "target": "139997769486048->34",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->88)-(139997769486048->88)",
        "source": "139997769485760->88",
        "target": "139997769486048->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->84)-(139997769486048->84)",
        "source": "139997769485760->84",
        "target": "139997769486048->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769485760->40)-(139997769489696->40)",
        "source": "139997769485760->40",
        "target": "139997769489696->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486048->35)-(139997769280544->35)",
        "source": "139997769486048->35",
        "target": "139997769280544->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486048->35)-(139997769010240->90)",
        "source": "139997769486048->35",
        "target": "139997769010240->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486048->33)-(139997769280544->33)",
        "source": "139997769486048->33",
        "target": "139997769280544->33",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486048->34)-(139997769280544->34)",
        "source": "139997769486048->34",
        "target": "139997769280544->34",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486048->88)-(139997769010240->88)",
        "source": "139997769486048->88",
        "target": "139997769010240->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486048->84)-(139997769010240->84)",
        "source": "139997769486048->84",
        "target": "139997769010240->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010240->90)-(139997769017056->90)",
        "source": "139997769010240->90",
        "target": "139997769017056->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010240->88)-(139997769017056->88)",
        "source": "139997769010240->88",
        "target": "139997769017056->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010240->84)-(139997769017056->61)",
        "source": "139997769010240->84",
        "target": "139997769017056->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->25)-(139997769009856->25)",
        "source": "139997769017056->25",
        "target": "139997769009856->25",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->25)-(139997769013360->89)",
        "source": "139997769017056->25",
        "target": "139997769013360->89",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->26)-(139997769009856->26)",
        "source": "139997769017056->26",
        "target": "139997769009856->26",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->27)-(139997769009856->27)",
        "source": "139997769017056->27",
        "target": "139997769009856->27",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->28)-(139997769009856->28)",
        "source": "139997769017056->28",
        "target": "139997769009856->28",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->61)-(139997769009856->61)",
        "source": "139997769017056->61",
        "target": "139997769009856->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->88)-(139997769013360->88)",
        "source": "139997769017056->88",
        "target": "139997769013360->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769017056->90)-(139997769013360->90)",
        "source": "139997769017056->90",
        "target": "139997769013360->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009856->25)-(139997769269744->25)",
        "source": "139997769009856->25",
        "target": "139997769269744->25",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009856->25)-(139997769486528->137)",
        "source": "139997769009856->25",
        "target": "139997769486528->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009856->26)-(139997769269744->26)",
        "source": "139997769009856->26",
        "target": "139997769269744->26",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009856->27)-(139997769269744->27)",
        "source": "139997769009856->27",
        "target": "139997769269744->27",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009856->28)-(139997769269744->28)",
        "source": "139997769009856->28",
        "target": "139997769269744->28",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009856->61)-(139997769486528->61)",
        "source": "139997769009856->61",
        "target": "139997769486528->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769486528->137)-(139997769482352->137)",
        "source": "139997769486528->137",
        "target": "139997769482352->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482352->133)-(139997769010384->133)",
        "source": "139997769482352->133",
        "target": "139997769010384->133",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482352->134)-(139997769010384->134)",
        "source": "139997769482352->134",
        "target": "139997769010384->134",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482352->135)-(139997769010384->135)",
        "source": "139997769482352->135",
        "target": "139997769010384->135",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482352->136)-(139997769010384->136)",
        "source": "139997769482352->136",
        "target": "139997769010384->136",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769482352->137)-(139997769010384->137)",
        "source": "139997769482352->137",
        "target": "139997769010384->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269984->138)-(139997769270416->138)",
        "source": "139997769269984->138",
        "target": "139997769270416->138",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269984->139)-(139997769270416->139)",
        "source": "139997769269984->139",
        "target": "139997769270416->139",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269984->140)-(139997769270416->140)",
        "source": "139997769269984->140",
        "target": "139997769270416->140",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269984->141)-(139997769270416->141)",
        "source": "139997769269984->141",
        "target": "139997769270416->141",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769269984->142)-(139997769270416->142)",
        "source": "139997769269984->142",
        "target": "139997769270416->142",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769270416->138)-(139997769285344->138)",
        "source": "139997769270416->138",
        "target": "139997769285344->138",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769270416->139)-(139997769285344->139)",
        "source": "139997769270416->139",
        "target": "139997769285344->139",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769270416->140)-(139997769285344->140)",
        "source": "139997769270416->140",
        "target": "139997769285344->140",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769270416->141)-(139997769285344->141)",
        "source": "139997769270416->141",
        "target": "139997769285344->141",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769270416->142)-(139997769285344->142)",
        "source": "139997769270416->142",
        "target": "139997769285344->142",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010384->133)-(139997767897088->133)",
        "source": "139997769010384->133",
        "target": "139997767897088->133",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010384->134)-(139997767897088->134)",
        "source": "139997769010384->134",
        "target": "139997767897088->134",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010384->135)-(139997767897088->135)",
        "source": "139997769010384->135",
        "target": "139997767897088->135",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010384->136)-(139997767897088->136)",
        "source": "139997769010384->136",
        "target": "139997767897088->136",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769010384->137)-(139997767897088->137)",
        "source": "139997769010384->137",
        "target": "139997767897088->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009280->15)-(139997769023056->15)",
        "source": "139997769009280->15",
        "target": "139997769023056->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009280->16)-(139997769023056->16)",
        "source": "139997769009280->16",
        "target": "139997769023056->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009280->17)-(139997769023056->17)",
        "source": "139997769009280->17",
        "target": "139997769023056->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009280->18)-(139997769023056->18)",
        "source": "139997769009280->18",
        "target": "139997769023056->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769009280->19)-(139997769023056->19)",
        "source": "139997769009280->19",
        "target": "139997769023056->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769271664->44)-(139997769011344->44)",
        "source": "139997769271664->44",
        "target": "139997769011344->44",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769271664->45)-(139997769011344->45)",
        "source": "139997769271664->45",
        "target": "139997769011344->45",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769271664->46)-(139997769011344->46)",
        "source": "139997769271664->46",
        "target": "139997769011344->46",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769271664->47)-(139997769011344->47)",
        "source": "139997769271664->47",
        "target": "139997769011344->47",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769271664->48)-(139997769011344->48)",
        "source": "139997769271664->48",
        "target": "139997769011344->48",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769011344->44)-(139997769020080->44)",
        "source": "139997769011344->44",
        "target": "139997769020080->44",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769011344->45)-(139997769020080->45)",
        "source": "139997769011344->45",
        "target": "139997769020080->45",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769011344->46)-(139997769020080->46)",
        "source": "139997769011344->46",
        "target": "139997769020080->46",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769011344->47)-(139997769020080->47)",
        "source": "139997769011344->47",
        "target": "139997769020080->47",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769011344->48)-(139997769020080->48)",
        "source": "139997769011344->48",
        "target": "139997769020080->48",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769023056->15)-(139997767894448->15)",
        "source": "139997769023056->15",
        "target": "139997767894448->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769023056->16)-(139997767894448->16)",
        "source": "139997769023056->16",
        "target": "139997767894448->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769023056->17)-(139997767894448->17)",
        "source": "139997769023056->17",
        "target": "139997767894448->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769023056->18)-(139997767894448->18)",
        "source": "139997769023056->18",
        "target": "139997767894448->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139997769023056->19)-(139997767894448->19)",
        "source": "139997769023056->19",
        "target": "139997767894448->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    }
];
