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
    "duplicateDataSources": false,
    "organizeNodesOnResize": false,
    "invertDag": true
};

const model_initialNodes = [
    {
        "id": "140556478163136",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "140556478163136->35",
                "140556478163136->113",
                "140556478163136->19",
                "140556478163136->16",
                "140556478163136->17",
                "140556478163136->122",
                "140556478163136->61",
                "140556478163136->212",
                "140556478163136->84",
                "140556478163136->245",
                "140556478163136->109",
                "140556478163136->163",
                "140556478163136->164",
                "140556478163136->165",
                "140556478163136->166",
                "140556478163136->171",
                "140556478163136->291",
                "140556478163136->309",
                "140556478163136->328"
            ]
        }
    },
    {
        "id": "140556496164016",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "140556496164016->35",
                "140556496164016->113",
                "140556496164016->19",
                "140556496164016->16",
                "140556496164016->17",
                "140556496164016->122",
                "140556496164016->61",
                "140556496164016->212",
                "140556496164016->84",
                "140556496164016->245",
                "140556496164016->109",
                "140556496164016->163",
                "140556496164016->164",
                "140556496164016->165",
                "140556496164016->166",
                "140556496164016->171",
                "140556496164016->291",
                "140556496164016->309"
            ]
        }
    },
    {
        "id": "140556496168048",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "140556496168048->35",
                "140556496168048->113",
                "140556496168048->19",
                "140556496168048->16",
                "140556496168048->17",
                "140556496168048->122",
                "140556496168048->61",
                "140556496168048->212",
                "140556496168048->84",
                "140556496168048->245",
                "140556496168048->109",
                "140556496168048->163",
                "140556496168048->164",
                "140556496168048->165",
                "140556496168048->166",
                "140556496168048->171",
                "140556496168048->291"
            ]
        }
    },
    {
        "id": "140556496162144",
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
                "140556496162144->35",
                "140556496162144->113",
                "140556496162144->19",
                "140556496162144->16",
                "140556496162144->17",
                "140556496162144->122",
                "140556496162144->61",
                "140556496162144->212",
                "140556496162144->84",
                "140556496162144->245",
                "140556496162144->109",
                "140556496162144->163",
                "140556496162144->164",
                "140556496162144->165",
                "140556496162144->166",
                "140556496162144->171"
            ]
        }
    },
    {
        "id": "140556496174384",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n"
            },
            "columns": [
                "140556496174384->163",
                "140556496174384->164",
                "140556496174384->165",
                "140556496174384->166",
                "140556496174384->171"
            ]
        }
    },
    {
        "id": "140556496415920",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496415920->163",
                "140556496415920->164",
                "140556496415920->165",
                "140556496415920->166"
            ]
        }
    },
    {
        "id": "140556496411408",
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
                "140556496411408->35",
                "140556496411408->113",
                "140556496411408->19",
                "140556496411408->16",
                "140556496411408->17",
                "140556496411408->122",
                "140556496411408->61",
                "140556496411408->212",
                "140556496411408->84",
                "140556496411408->245",
                "140556496411408->109"
            ]
        }
    },
    {
        "id": "140556496162288",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140556496162288->245",
                "140556496162288->226",
                "140556496162288->109"
            ]
        }
    },
    {
        "id": "140556496415968",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140556496415968->245",
                "140556496415968->226",
                "140556496415968->109"
            ]
        }
    },
    {
        "id": "140556496171792",
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
                "140556496171792->245",
                "140556496171792->226",
                "140556496171792->109"
            ]
        }
    },
    {
        "id": "140556478167024",
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
                "140556478167024->245",
                "140556478167024->226",
                "140556478167024->109"
            ]
        }
    },
    {
        "id": "140556496412416",
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
                "140556496412416->226",
                "140556496412416->224",
                "140556496412416->225",
                "140556496412416->241",
                "140556496412416->84",
                "140556496412416->245"
            ]
        }
    },
    {
        "id": "140556478156272",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556478156272->244",
                "140556478156272->245"
            ]
        }
    },
    {
        "id": "140556496413952",
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
                "140556496413952->226",
                "140556496413952->224",
                "140556496413952->225",
                "140556496413952->241",
                "140556496413952->84"
            ]
        }
    },
    {
        "id": "140556496162768",
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
                "140556496162768->243",
                "140556496162768->241",
                "140556496162768->84"
            ]
        }
    },
    {
        "id": "140556496167424",
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
                "140556496167424->227",
                "140556496167424->228",
                "140556496167424->229",
                "140556496167424->230",
                "140556496167424->61",
                "140556496167424->241",
                "140556496167424->243"
            ]
        }
    },
    {
        "id": "140556496173904",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496173904->241",
                "140556496173904->242",
                "140556496173904->243"
            ]
        }
    },
    {
        "id": "140556496167376",
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
                "140556496167376->227",
                "140556496167376->228",
                "140556496167376->229",
                "140556496167376->230",
                "140556496167376->61"
            ]
        }
    },
    {
        "id": "140556478166496",
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
                "140556478166496->235",
                "140556478166496->61"
            ]
        }
    },
    {
        "id": "140556496171696",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496171696->231",
                "140556496171696->232",
                "140556496171696->233",
                "140556496171696->234",
                "140556496171696->235"
            ]
        }
    },
    {
        "id": "140556496161472",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496161472->236",
                "140556496161472->237",
                "140556496161472->238",
                "140556496161472->239",
                "140556496161472->240"
            ]
        }
    },
    {
        "id": "140556496562416",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140556496562416->236",
                "140556496562416->237",
                "140556496562416->238",
                "140556496562416->239",
                "140556496562416->240"
            ]
        }
    },
    {
        "id": "140556496174000",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496174000->236",
                "140556496174000->237",
                "140556496174000->238",
                "140556496174000->239",
                "140556496174000->240"
            ]
        }
    },
    {
        "id": "140556478454928",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140556478454928->231",
                "140556478454928->232",
                "140556478454928->233",
                "140556478454928->234",
                "140556478454928->235"
            ]
        }
    },
    {
        "id": "140556496163392",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496163392->231",
                "140556496163392->232",
                "140556496163392->233",
                "140556496163392->234",
                "140556496163392->235"
            ]
        }
    },
    {
        "id": "140556478166544",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556478166544->227",
                "140556478166544->228",
                "140556478166544->229",
                "140556478166544->230"
            ]
        }
    },
    {
        "id": "140556478163616",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556478163616->224",
                "140556478163616->225",
                "140556478163616->226"
            ]
        }
    },
    {
        "id": "140556496409824",
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
                "140556496409824->113",
                "140556496409824->19",
                "140556496409824->16",
                "140556496409824->17",
                "140556496409824->122",
                "140556496409824->35",
                "140556496409824->61",
                "140556496409824->212",
                "140556496409824->84"
            ]
        }
    },
    {
        "id": "140556496558432",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140556496558432->212",
                "140556496558432->210",
                "140556496558432->84"
            ]
        }
    },
    {
        "id": "140556496568032",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140556496568032->212",
                "140556496568032->210",
                "140556496568032->84"
            ]
        }
    },
    {
        "id": "140556496411936",
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
                "140556496411936->212",
                "140556496411936->210",
                "140556496411936->84"
            ]
        }
    },
    {
        "id": "140556496552432",
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
                "140556496552432->212",
                "140556496552432->210",
                "140556496552432->84"
            ]
        }
    },
    {
        "id": "140556496419136",
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
                "140556496419136->196",
                "140556496419136->197",
                "140556496419136->198",
                "140556496419136->199",
                "140556496419136->61",
                "140556496419136->210",
                "140556496419136->212"
            ]
        }
    },
    {
        "id": "140556478159296",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556478159296->210",
                "140556478159296->211",
                "140556478159296->212"
            ]
        }
    },
    {
        "id": "140556496408816",
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
                "140556496408816->196",
                "140556496408816->197",
                "140556496408816->198",
                "140556496408816->199",
                "140556496408816->61"
            ]
        }
    },
    {
        "id": "140556478153440",
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
                "140556478153440->204",
                "140556478153440->61"
            ]
        }
    },
    {
        "id": "140556478163808",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556478163808->200",
                "140556478163808->201",
                "140556478163808->202",
                "140556478163808->203",
                "140556478163808->204"
            ]
        }
    },
    {
        "id": "140556496419664",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496419664->205",
                "140556496419664->206",
                "140556496419664->207",
                "140556496419664->208",
                "140556496419664->209"
            ]
        }
    },
    {
        "id": "140556478162464",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140556478162464->205",
                "140556478162464->206",
                "140556478162464->207",
                "140556478162464->208",
                "140556478162464->209"
            ]
        }
    },
    {
        "id": "140556496171456",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496171456->205",
                "140556496171456->206",
                "140556496171456->207",
                "140556496171456->208",
                "140556496171456->209"
            ]
        }
    },
    {
        "id": "140556478158768",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140556478158768->200",
                "140556478158768->201",
                "140556478158768->202",
                "140556478158768->203",
                "140556478158768->204"
            ]
        }
    },
    {
        "id": "140556496418608",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496418608->200",
                "140556496418608->201",
                "140556496418608->202",
                "140556496418608->203",
                "140556496418608->204"
            ]
        }
    },
    {
        "id": "140556496408192",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496408192->196",
                "140556496408192->197",
                "140556496408192->198",
                "140556496408192->199"
            ]
        }
    },
    {
        "id": "140556496405072",
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
                "140556496405072->19",
                "140556496405072->16",
                "140556496405072->17",
                "140556496405072->122",
                "140556496405072->113",
                "140556496405072->35",
                "140556496405072->61"
            ]
        }
    },
    {
        "id": "140556496172224",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140556496172224->181",
                "140556496172224->61"
            ]
        }
    },
    {
        "id": "140556499374176",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140556499374176->181",
                "140556499374176->61"
            ]
        }
    },
    {
        "id": "140556499374560",
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
                "140556499374560->181",
                "140556499374560->61"
            ]
        }
    },
    {
        "id": "140556496563616",
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
                "140556496563616->181",
                "140556496563616->61"
            ]
        }
    },
    {
        "id": "140556496559872",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496559872->177",
                "140556496559872->178",
                "140556496559872->179",
                "140556496559872->180",
                "140556496559872->181"
            ]
        }
    },
    {
        "id": "140556499385744",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556499385744->182",
                "140556499385744->183",
                "140556499385744->184",
                "140556499385744->185",
                "140556499385744->186"
            ]
        }
    },
    {
        "id": "140556496556704",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140556496556704->182",
                "140556496556704->183",
                "140556496556704->184",
                "140556496556704->185",
                "140556496556704->186"
            ]
        }
    },
    {
        "id": "140556496413760",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496413760->182",
                "140556496413760->183",
                "140556496413760->184",
                "140556496413760->185",
                "140556496413760->186"
            ]
        }
    },
    {
        "id": "140556499373264",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140556499373264->177",
                "140556499373264->178",
                "140556499373264->179",
                "140556499373264->180",
                "140556499373264->181"
            ]
        }
    },
    {
        "id": "140556496419376",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496419376->177",
                "140556496419376->178",
                "140556496419376->179",
                "140556496419376->180",
                "140556496419376->181"
            ]
        }
    },
    {
        "id": "140556496171216",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140556496171216->16",
                "140556496171216->17",
                "140556496171216->19",
                "140556496171216->122",
                "140556496171216->113",
                "140556496171216->35"
            ]
        }
    },
    {
        "id": "140556496412128",
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
                "140556496412128->19",
                "140556496412128->15",
                "140556496412128->16",
                "140556496412128->17",
                "140556496412128->18",
                "140556496412128->35",
                "140556496412128->40",
                "140556496412128->109",
                "140556496412128->113",
                "140556496412128->122",
                "140556496412128->123",
                "140556496412128->124"
            ]
        }
    },
    {
        "id": "140556496408480",
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
                "140556496408480->114",
                "140556496408480->35",
                "140556496408480->40",
                "140556496408480->109",
                "140556496408480->113",
                "140556496408480->122",
                "140556496408480->123",
                "140556496408480->124"
            ]
        }
    },
    {
        "id": "140556496166896",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496166896->121",
                "140556496166896->122",
                "140556496166896->123",
                "140556496166896->124"
            ]
        }
    },
    {
        "id": "140556496410880",
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
                "140556496410880->35",
                "140556496410880->40",
                "140556496410880->109",
                "140556496410880->113",
                "140556496410880->114"
            ]
        }
    },
    {
        "id": "140556496409392",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496409392->113",
                "140556496409392->114",
                "140556496409392->115"
            ]
        }
    },
    {
        "id": "140556496173184",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "140556496173184->40",
                "140556496173184->35",
                "140556496173184->109"
            ]
        }
    },
    {
        "id": "140556496408960",
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
                "140556496408960->40",
                "140556496408960->35",
                "140556496408960->109"
            ]
        }
    },
    {
        "id": "140556496415440",
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
                "140556496415440->35",
                "140556496415440->33",
                "140556496415440->34",
                "140556496415440->88",
                "140556496415440->84",
                "140556496415440->40"
            ]
        }
    },
    {
        "id": "140556499375040",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556499375040->39",
                "140556499375040->40"
            ]
        }
    },
    {
        "id": "140556496420240",
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
                "140556496420240->35",
                "140556496420240->33",
                "140556496420240->34",
                "140556496420240->88",
                "140556496420240->84"
            ]
        }
    },
    {
        "id": "140556496418560",
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
                "140556496418560->90",
                "140556496418560->88",
                "140556496418560->84"
            ]
        }
    },
    {
        "id": "140556496416688",
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
                "140556496416688->25",
                "140556496416688->26",
                "140556496416688->27",
                "140556496416688->28",
                "140556496416688->61",
                "140556496416688->88",
                "140556496416688->90"
            ]
        }
    },
    {
        "id": "140556497518848",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556497518848->88",
                "140556497518848->89",
                "140556497518848->90"
            ]
        }
    },
    {
        "id": "140556496166512",
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
                "140556496166512->25",
                "140556496166512->26",
                "140556496166512->27",
                "140556496166512->28",
                "140556496166512->61"
            ]
        }
    },
    {
        "id": "140556499377392",
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
                "140556499377392->137",
                "140556499377392->61"
            ]
        }
    },
    {
        "id": "140556496160224",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496160224->133",
                "140556496160224->134",
                "140556496160224->135",
                "140556496160224->136",
                "140556496160224->137"
            ]
        }
    },
    {
        "id": "140556496420816",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496420816->138",
                "140556496420816->139",
                "140556496420816->140",
                "140556496420816->141",
                "140556496420816->142"
            ]
        }
    },
    {
        "id": "140556496164736",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140556496164736->138",
                "140556496164736->139",
                "140556496164736->140",
                "140556496164736->141",
                "140556496164736->142"
            ]
        }
    },
    {
        "id": "140556478168704",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556478168704->138",
                "140556478168704->139",
                "140556478168704->140",
                "140556478168704->141",
                "140556478168704->142"
            ]
        }
    },
    {
        "id": "140556496555504",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140556496555504->133",
                "140556496555504->134",
                "140556496555504->135",
                "140556496555504->136",
                "140556496555504->137"
            ]
        }
    },
    {
        "id": "140556478166112",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556478166112->133",
                "140556478166112->134",
                "140556478166112->135",
                "140556478166112->136",
                "140556478166112->137"
            ]
        }
    },
    {
        "id": "140556496555024",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496555024->25",
                "140556496555024->26",
                "140556496555024->27",
                "140556496555024->28"
            ]
        }
    },
    {
        "id": "140556496172896",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140556496172896->33",
                "140556496172896->34",
                "140556496172896->35"
            ]
        }
    },
    {
        "id": "140556496164832",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556496164832->15",
                "140556496164832->16",
                "140556496164832->17",
                "140556496164832->18",
                "140556496164832->19"
            ]
        }
    },
    {
        "id": "140556499376960",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140556499376960->44",
                "140556499376960->45",
                "140556499376960->46",
                "140556499376960->47",
                "140556499376960->48"
            ]
        }
    },
    {
        "id": "140556496167904",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140556496167904->44",
                "140556496167904->45",
                "140556496167904->46",
                "140556496167904->47",
                "140556496167904->48"
            ]
        }
    },
    {
        "id": "140556496162096",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556496162096->44",
                "140556496162096->45",
                "140556496162096->46",
                "140556496162096->47",
                "140556496162096->48"
            ]
        }
    },
    {
        "id": "140556499372112",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140556499372112->15",
                "140556499372112->16",
                "140556499372112->17",
                "140556499372112->18",
                "140556499372112->19"
            ]
        }
    },
    {
        "id": "140556478165968",
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
                "storage": "Storage(Location: file:/tmp/tmpa6o5s9l9/spark-warehouse/people)"
            },
            "columns": [
                "140556478165968->15",
                "140556478165968->16",
                "140556478165968->17",
                "140556478165968->18",
                "140556478165968->19"
            ]
        }
    },
    {
        "id": "140556478163136->35",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496164016->35"
            ]
        }
    },
    {
        "id": "140556478163136->113",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496164016->113"
            ]
        }
    },
    {
        "id": "140556478163136->19",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496164016->19"
            ]
        }
    },
    {
        "id": "140556478163136->16",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496164016->16"
            ]
        }
    },
    {
        "id": "140556478163136->17",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496164016->17"
            ]
        }
    },
    {
        "id": "140556478163136->122",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496164016->122"
            ]
        }
    },
    {
        "id": "140556478163136->61",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496164016->61"
            ]
        }
    },
    {
        "id": "140556478163136->212",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496164016->212"
            ]
        }
    },
    {
        "id": "140556478163136->84",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496164016->84"
            ]
        }
    },
    {
        "id": "140556478163136->245",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496164016->245"
            ]
        }
    },
    {
        "id": "140556478163136->109",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496164016->109"
            ]
        }
    },
    {
        "id": "140556478163136->163",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140556496164016->163"
            ]
        }
    },
    {
        "id": "140556478163136->164",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140556496164016->164"
            ]
        }
    },
    {
        "id": "140556478163136->165",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140556496164016->165"
            ]
        }
    },
    {
        "id": "140556478163136->166",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140556496164016->166"
            ]
        }
    },
    {
        "id": "140556478163136->171",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140556496164016->171"
            ]
        }
    },
    {
        "id": "140556478163136->291",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "140556496164016->291"
            ]
        }
    },
    {
        "id": "140556478163136->309",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#309: boolean\n",
            "linked_columns": [
                "140556496164016->309"
            ]
        }
    },
    {
        "id": "140556478163136->328",
        "type": "column",
        "parentNode": "140556478163136",
        "expandParent": true,
        "data": {
            "id": 328,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#328\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140556496164016->109"
            ]
        }
    },
    {
        "id": "140556496164016->35",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496168048->35"
            ]
        }
    },
    {
        "id": "140556496164016->113",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496168048->113"
            ]
        }
    },
    {
        "id": "140556496164016->19",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496168048->19"
            ]
        }
    },
    {
        "id": "140556496164016->16",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496168048->16"
            ]
        }
    },
    {
        "id": "140556496164016->17",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496168048->17"
            ]
        }
    },
    {
        "id": "140556496164016->122",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496168048->122"
            ]
        }
    },
    {
        "id": "140556496164016->61",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496168048->61"
            ]
        }
    },
    {
        "id": "140556496164016->212",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496168048->212"
            ]
        }
    },
    {
        "id": "140556496164016->84",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496168048->84"
            ]
        }
    },
    {
        "id": "140556496164016->245",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496168048->245"
            ]
        }
    },
    {
        "id": "140556496164016->109",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496168048->109"
            ]
        }
    },
    {
        "id": "140556496164016->163",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140556496168048->163"
            ]
        }
    },
    {
        "id": "140556496164016->164",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140556496168048->164"
            ]
        }
    },
    {
        "id": "140556496164016->165",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140556496168048->165"
            ]
        }
    },
    {
        "id": "140556496164016->166",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140556496168048->166"
            ]
        }
    },
    {
        "id": "140556496164016->171",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140556496168048->171"
            ]
        }
    },
    {
        "id": "140556496164016->291",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "140556496168048->291"
            ]
        }
    },
    {
        "id": "140556496164016->309",
        "type": "column",
        "parentNode": "140556496164016",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#309\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140556496168048->84"
            ]
        }
    },
    {
        "id": "140556496168048->35",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496162144->35"
            ]
        }
    },
    {
        "id": "140556496168048->113",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496162144->113"
            ]
        }
    },
    {
        "id": "140556496168048->19",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496162144->19"
            ]
        }
    },
    {
        "id": "140556496168048->16",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496162144->16"
            ]
        }
    },
    {
        "id": "140556496168048->17",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496162144->17"
            ]
        }
    },
    {
        "id": "140556496168048->122",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496162144->122"
            ]
        }
    },
    {
        "id": "140556496168048->61",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496162144->61"
            ]
        }
    },
    {
        "id": "140556496168048->212",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496162144->212"
            ]
        }
    },
    {
        "id": "140556496168048->84",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496162144->84"
            ]
        }
    },
    {
        "id": "140556496168048->245",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496162144->245"
            ]
        }
    },
    {
        "id": "140556496168048->109",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496162144->109"
            ]
        }
    },
    {
        "id": "140556496168048->163",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140556496162144->163"
            ]
        }
    },
    {
        "id": "140556496168048->164",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140556496162144->164"
            ]
        }
    },
    {
        "id": "140556496168048->165",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140556496162144->165"
            ]
        }
    },
    {
        "id": "140556496168048->166",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140556496162144->166"
            ]
        }
    },
    {
        "id": "140556496168048->171",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140556496162144->171"
            ]
        }
    },
    {
        "id": "140556496168048->291",
        "type": "column",
        "parentNode": "140556496168048",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#291\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140556496162144->61"
            ]
        }
    },
    {
        "id": "140556496162144->35",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496411408->35"
            ]
        }
    },
    {
        "id": "140556496162144->113",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496411408->113"
            ]
        }
    },
    {
        "id": "140556496162144->19",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496411408->19"
            ]
        }
    },
    {
        "id": "140556496162144->16",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496411408->16"
            ]
        }
    },
    {
        "id": "140556496162144->17",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496411408->17"
            ]
        }
    },
    {
        "id": "140556496162144->122",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496411408->122"
            ]
        }
    },
    {
        "id": "140556496162144->61",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496411408->61"
            ]
        }
    },
    {
        "id": "140556496162144->212",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496411408->212"
            ]
        }
    },
    {
        "id": "140556496162144->84",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496411408->84"
            ]
        }
    },
    {
        "id": "140556496162144->245",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496411408->245"
            ]
        }
    },
    {
        "id": "140556496162144->109",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496411408->109"
            ]
        }
    },
    {
        "id": "140556496162144->163",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140556496174384->163"
            ]
        }
    },
    {
        "id": "140556496162144->164",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140556496174384->164"
            ]
        }
    },
    {
        "id": "140556496162144->165",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140556496174384->165"
            ]
        }
    },
    {
        "id": "140556496162144->166",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140556496174384->166"
            ]
        }
    },
    {
        "id": "140556496162144->171",
        "type": "column",
        "parentNode": "140556496162144",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "140556496174384->171"
            ]
        }
    },
    {
        "id": "140556496174384->163",
        "type": "column",
        "parentNode": "140556496174384",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "140556496415920->163"
            ]
        }
    },
    {
        "id": "140556496174384->164",
        "type": "column",
        "parentNode": "140556496174384",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "140556496415920->164"
            ]
        }
    },
    {
        "id": "140556496174384->165",
        "type": "column",
        "parentNode": "140556496174384",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "140556496415920->165"
            ]
        }
    },
    {
        "id": "140556496174384->166",
        "type": "column",
        "parentNode": "140556496174384",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "140556496415920->166"
            ]
        }
    },
    {
        "id": "140556496174384->171",
        "type": "column",
        "parentNode": "140556496174384",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "(((a#163 + b#164) / c#165) + d#166) AS sum#171\n+- (((a#163 + b#164) / c#165) + d#166)\n   :- ((a#163 + b#164) / c#165)\n   :  :- (a#163 + b#164)\n   :  :  :- a#163: double\n   :  :  +- b#164: double\n   :  +- c#165: double\n   +- d#166: double\n",
            "linked_columns": [
                "140556496415920->163",
                "140556496415920->164",
                "140556496415920->165",
                "140556496415920->166"
            ]
        }
    },
    {
        "id": "140556496415920->163",
        "type": "column",
        "parentNode": "140556496415920",
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
        "id": "140556496415920->164",
        "type": "column",
        "parentNode": "140556496415920",
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
        "id": "140556496415920->165",
        "type": "column",
        "parentNode": "140556496415920",
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
        "id": "140556496415920->166",
        "type": "column",
        "parentNode": "140556496415920",
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
        "id": "140556496411408->35",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "140556496409824->35",
                "140556496162288->226"
            ]
        }
    },
    {
        "id": "140556496411408->113",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496409824->113"
            ]
        }
    },
    {
        "id": "140556496411408->19",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496409824->19"
            ]
        }
    },
    {
        "id": "140556496411408->16",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496409824->16"
            ]
        }
    },
    {
        "id": "140556496411408->17",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496409824->17"
            ]
        }
    },
    {
        "id": "140556496411408->122",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496409824->122"
            ]
        }
    },
    {
        "id": "140556496411408->61",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496409824->61"
            ]
        }
    },
    {
        "id": "140556496411408->212",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "140556496409824->35",
                "140556496162288->226"
            ]
        }
    },
    {
        "id": "140556496411408->84",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496409824->84"
            ]
        }
    },
    {
        "id": "140556496411408->245",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496162288->245"
            ]
        }
    },
    {
        "id": "140556496411408->109",
        "type": "column",
        "parentNode": "140556496411408",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496162288->109"
            ]
        }
    },
    {
        "id": "140556496162288->245",
        "type": "column",
        "parentNode": "140556496162288",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496415968->245"
            ]
        }
    },
    {
        "id": "140556496162288->226",
        "type": "column",
        "parentNode": "140556496162288",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140556496415968->226"
            ]
        }
    },
    {
        "id": "140556496162288->109",
        "type": "column",
        "parentNode": "140556496162288",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496415968->109"
            ]
        }
    },
    {
        "id": "140556496415968->245",
        "type": "column",
        "parentNode": "140556496415968",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496171792->245"
            ]
        }
    },
    {
        "id": "140556496415968->226",
        "type": "column",
        "parentNode": "140556496415968",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140556496171792->226"
            ]
        }
    },
    {
        "id": "140556496415968->109",
        "type": "column",
        "parentNode": "140556496415968",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496171792->109"
            ]
        }
    },
    {
        "id": "140556496171792->245",
        "type": "column",
        "parentNode": "140556496171792",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556478167024->245"
            ]
        }
    },
    {
        "id": "140556496171792->226",
        "type": "column",
        "parentNode": "140556496171792",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140556478167024->226"
            ]
        }
    },
    {
        "id": "140556496171792->109",
        "type": "column",
        "parentNode": "140556496171792",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556478167024->109"
            ]
        }
    },
    {
        "id": "140556478167024->245",
        "type": "column",
        "parentNode": "140556478167024",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556496412416->245"
            ]
        }
    },
    {
        "id": "140556478167024->226",
        "type": "column",
        "parentNode": "140556478167024",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140556496412416->226"
            ]
        }
    },
    {
        "id": "140556478167024->109",
        "type": "column",
        "parentNode": "140556478167024",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140556496412416->84"
            ]
        }
    },
    {
        "id": "140556496412416->226",
        "type": "column",
        "parentNode": "140556496412416",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#244)\n:- continent#226: string\n+- continent#244: string\n",
            "linked_columns": [
                "140556496413952->226",
                "140556478156272->244"
            ]
        }
    },
    {
        "id": "140556496412416->224",
        "type": "column",
        "parentNode": "140556496412416",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "140556496413952->224"
            ]
        }
    },
    {
        "id": "140556496412416->225",
        "type": "column",
        "parentNode": "140556496412416",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "140556496413952->225"
            ]
        }
    },
    {
        "id": "140556496412416->241",
        "type": "column",
        "parentNode": "140556496412416",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140556496413952->241"
            ]
        }
    },
    {
        "id": "140556496412416->84",
        "type": "column",
        "parentNode": "140556496412416",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496413952->84"
            ]
        }
    },
    {
        "id": "140556496412416->245",
        "type": "column",
        "parentNode": "140556496412416",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140556478156272->245"
            ]
        }
    },
    {
        "id": "140556478156272->244",
        "type": "column",
        "parentNode": "140556478156272",
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
        "id": "140556478156272->245",
        "type": "column",
        "parentNode": "140556478156272",
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
        "id": "140556496413952->226",
        "type": "column",
        "parentNode": "140556496413952",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#243)\n:- continent#226: string\n+- continent#243: string\n",
            "linked_columns": [
                "140556478163616->226",
                "140556496162768->243"
            ]
        }
    },
    {
        "id": "140556496413952->224",
        "type": "column",
        "parentNode": "140556496413952",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "140556478163616->224"
            ]
        }
    },
    {
        "id": "140556496413952->225",
        "type": "column",
        "parentNode": "140556496413952",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "140556478163616->225"
            ]
        }
    },
    {
        "id": "140556496413952->241",
        "type": "column",
        "parentNode": "140556496413952",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140556496162768->241"
            ]
        }
    },
    {
        "id": "140556496413952->84",
        "type": "column",
        "parentNode": "140556496413952",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496162768->84"
            ]
        }
    },
    {
        "id": "140556496162768->243",
        "type": "column",
        "parentNode": "140556496162768",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "140556496167424->243"
            ]
        }
    },
    {
        "id": "140556496162768->241",
        "type": "column",
        "parentNode": "140556496162768",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140556496167424->241"
            ]
        }
    },
    {
        "id": "140556496162768->84",
        "type": "column",
        "parentNode": "140556496162768",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140556496167424->61"
            ]
        }
    },
    {
        "id": "140556496167424->227",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#242)\n:- city#227: string\n+- city#242: string\n",
            "linked_columns": [
                "140556496167376->227",
                "140556496173904->242"
            ]
        }
    },
    {
        "id": "140556496167424->228",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "140556496167376->228"
            ]
        }
    },
    {
        "id": "140556496167424->229",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "140556496167376->229"
            ]
        }
    },
    {
        "id": "140556496167424->230",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "140556496167376->230"
            ]
        }
    },
    {
        "id": "140556496167424->61",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496167376->61"
            ]
        }
    },
    {
        "id": "140556496167424->241",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140556496173904->241"
            ]
        }
    },
    {
        "id": "140556496167424->243",
        "type": "column",
        "parentNode": "140556496167424",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "140556496173904->243"
            ]
        }
    },
    {
        "id": "140556496173904->241",
        "type": "column",
        "parentNode": "140556496173904",
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
        "id": "140556496173904->242",
        "type": "column",
        "parentNode": "140556496173904",
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
        "id": "140556496173904->243",
        "type": "column",
        "parentNode": "140556496173904",
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
        "id": "140556496167376->227",
        "type": "column",
        "parentNode": "140556496167376",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#235)\n:- city#227: string\n+- city#235: string\n",
            "linked_columns": [
                "140556478166544->227",
                "140556478166496->235"
            ]
        }
    },
    {
        "id": "140556496167376->228",
        "type": "column",
        "parentNode": "140556496167376",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "140556478166544->228"
            ]
        }
    },
    {
        "id": "140556496167376->229",
        "type": "column",
        "parentNode": "140556496167376",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "140556478166544->229"
            ]
        }
    },
    {
        "id": "140556496167376->230",
        "type": "column",
        "parentNode": "140556496167376",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "140556478166544->230"
            ]
        }
    },
    {
        "id": "140556496167376->61",
        "type": "column",
        "parentNode": "140556496167376",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556478166496->61"
            ]
        }
    },
    {
        "id": "140556478166496->235",
        "type": "column",
        "parentNode": "140556478166496",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140556496171696->235"
            ]
        }
    },
    {
        "id": "140556478166496->61",
        "type": "column",
        "parentNode": "140556478166496",
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
        "id": "140556496171696->231",
        "type": "column",
        "parentNode": "140556496171696",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "140556478454928->231"
            ]
        }
    },
    {
        "id": "140556496171696->232",
        "type": "column",
        "parentNode": "140556496171696",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "140556478454928->232"
            ]
        }
    },
    {
        "id": "140556496171696->233",
        "type": "column",
        "parentNode": "140556496171696",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "140556478454928->233"
            ]
        }
    },
    {
        "id": "140556496171696->234",
        "type": "column",
        "parentNode": "140556496171696",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "140556478454928->234"
            ]
        }
    },
    {
        "id": "140556496171696->235",
        "type": "column",
        "parentNode": "140556496171696",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140556478454928->235"
            ]
        }
    },
    {
        "id": "140556496161472->236",
        "type": "column",
        "parentNode": "140556496161472",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "140556496562416->236"
            ]
        }
    },
    {
        "id": "140556496161472->237",
        "type": "column",
        "parentNode": "140556496161472",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "140556496562416->237"
            ]
        }
    },
    {
        "id": "140556496161472->238",
        "type": "column",
        "parentNode": "140556496161472",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "140556496562416->238"
            ]
        }
    },
    {
        "id": "140556496161472->239",
        "type": "column",
        "parentNode": "140556496161472",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "140556496562416->239"
            ]
        }
    },
    {
        "id": "140556496161472->240",
        "type": "column",
        "parentNode": "140556496161472",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "140556496562416->240"
            ]
        }
    },
    {
        "id": "140556496562416->236",
        "type": "column",
        "parentNode": "140556496562416",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "140556496174000->236"
            ]
        }
    },
    {
        "id": "140556496562416->237",
        "type": "column",
        "parentNode": "140556496562416",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "140556496174000->237"
            ]
        }
    },
    {
        "id": "140556496562416->238",
        "type": "column",
        "parentNode": "140556496562416",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "140556496174000->238"
            ]
        }
    },
    {
        "id": "140556496562416->239",
        "type": "column",
        "parentNode": "140556496562416",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "140556496174000->239"
            ]
        }
    },
    {
        "id": "140556496562416->240",
        "type": "column",
        "parentNode": "140556496562416",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "140556496174000->240"
            ]
        }
    },
    {
        "id": "140556496174000->236",
        "type": "column",
        "parentNode": "140556496174000",
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
        "id": "140556496174000->237",
        "type": "column",
        "parentNode": "140556496174000",
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
        "id": "140556496174000->238",
        "type": "column",
        "parentNode": "140556496174000",
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
        "id": "140556496174000->239",
        "type": "column",
        "parentNode": "140556496174000",
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
        "id": "140556496174000->240",
        "type": "column",
        "parentNode": "140556496174000",
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
        "id": "140556478454928->231",
        "type": "column",
        "parentNode": "140556478454928",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "140556496163392->231"
            ]
        }
    },
    {
        "id": "140556478454928->232",
        "type": "column",
        "parentNode": "140556478454928",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "140556496163392->232"
            ]
        }
    },
    {
        "id": "140556478454928->233",
        "type": "column",
        "parentNode": "140556478454928",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "140556496163392->233"
            ]
        }
    },
    {
        "id": "140556478454928->234",
        "type": "column",
        "parentNode": "140556478454928",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "140556496163392->234"
            ]
        }
    },
    {
        "id": "140556478454928->235",
        "type": "column",
        "parentNode": "140556478454928",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140556496163392->235"
            ]
        }
    },
    {
        "id": "140556496163392->231",
        "type": "column",
        "parentNode": "140556496163392",
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
        "id": "140556496163392->232",
        "type": "column",
        "parentNode": "140556496163392",
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
        "id": "140556496163392->233",
        "type": "column",
        "parentNode": "140556496163392",
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
        "id": "140556496163392->234",
        "type": "column",
        "parentNode": "140556496163392",
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
        "id": "140556496163392->235",
        "type": "column",
        "parentNode": "140556496163392",
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
        "id": "140556478166544->227",
        "type": "column",
        "parentNode": "140556478166544",
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
        "id": "140556478166544->228",
        "type": "column",
        "parentNode": "140556478166544",
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
        "id": "140556478166544->229",
        "type": "column",
        "parentNode": "140556478166544",
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
        "id": "140556478166544->230",
        "type": "column",
        "parentNode": "140556478166544",
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
        "id": "140556478163616->224",
        "type": "column",
        "parentNode": "140556478163616",
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
        "id": "140556478163616->225",
        "type": "column",
        "parentNode": "140556478163616",
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
        "id": "140556478163616->226",
        "type": "column",
        "parentNode": "140556478163616",
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
        "id": "140556496409824->113",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#210)\n:- country#113: string\n+- country#210: string\n",
            "linked_columns": [
                "140556496405072->113",
                "140556496558432->210"
            ]
        }
    },
    {
        "id": "140556496409824->19",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496405072->19"
            ]
        }
    },
    {
        "id": "140556496409824->16",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496405072->16"
            ]
        }
    },
    {
        "id": "140556496409824->17",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496405072->17"
            ]
        }
    },
    {
        "id": "140556496409824->122",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496405072->122"
            ]
        }
    },
    {
        "id": "140556496409824->35",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496405072->35"
            ]
        }
    },
    {
        "id": "140556496409824->61",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496405072->61"
            ]
        }
    },
    {
        "id": "140556496409824->212",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496558432->212"
            ]
        }
    },
    {
        "id": "140556496409824->84",
        "type": "column",
        "parentNode": "140556496409824",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496558432->84"
            ]
        }
    },
    {
        "id": "140556496558432->212",
        "type": "column",
        "parentNode": "140556496558432",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496568032->212"
            ]
        }
    },
    {
        "id": "140556496558432->210",
        "type": "column",
        "parentNode": "140556496558432",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140556496568032->210"
            ]
        }
    },
    {
        "id": "140556496558432->84",
        "type": "column",
        "parentNode": "140556496558432",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496568032->84"
            ]
        }
    },
    {
        "id": "140556496568032->212",
        "type": "column",
        "parentNode": "140556496568032",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496411936->212"
            ]
        }
    },
    {
        "id": "140556496568032->210",
        "type": "column",
        "parentNode": "140556496568032",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140556496411936->210"
            ]
        }
    },
    {
        "id": "140556496568032->84",
        "type": "column",
        "parentNode": "140556496568032",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496411936->84"
            ]
        }
    },
    {
        "id": "140556496411936->212",
        "type": "column",
        "parentNode": "140556496411936",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496552432->212"
            ]
        }
    },
    {
        "id": "140556496411936->210",
        "type": "column",
        "parentNode": "140556496411936",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140556496552432->210"
            ]
        }
    },
    {
        "id": "140556496411936->84",
        "type": "column",
        "parentNode": "140556496411936",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496552432->84"
            ]
        }
    },
    {
        "id": "140556496552432->212",
        "type": "column",
        "parentNode": "140556496552432",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556496419136->212"
            ]
        }
    },
    {
        "id": "140556496552432->210",
        "type": "column",
        "parentNode": "140556496552432",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140556496419136->210"
            ]
        }
    },
    {
        "id": "140556496552432->84",
        "type": "column",
        "parentNode": "140556496552432",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140556496419136->61"
            ]
        }
    },
    {
        "id": "140556496419136->196",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#211)\n:- city#196: string\n+- city#211: string\n",
            "linked_columns": [
                "140556496408816->196",
                "140556478159296->211"
            ]
        }
    },
    {
        "id": "140556496419136->197",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "140556496408816->197"
            ]
        }
    },
    {
        "id": "140556496419136->198",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "140556496408816->198"
            ]
        }
    },
    {
        "id": "140556496419136->199",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "140556496408816->199"
            ]
        }
    },
    {
        "id": "140556496419136->61",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496408816->61"
            ]
        }
    },
    {
        "id": "140556496419136->210",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140556478159296->210"
            ]
        }
    },
    {
        "id": "140556496419136->212",
        "type": "column",
        "parentNode": "140556496419136",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140556478159296->212"
            ]
        }
    },
    {
        "id": "140556478159296->210",
        "type": "column",
        "parentNode": "140556478159296",
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
        "id": "140556478159296->211",
        "type": "column",
        "parentNode": "140556478159296",
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
        "id": "140556478159296->212",
        "type": "column",
        "parentNode": "140556478159296",
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
        "id": "140556496408816->196",
        "type": "column",
        "parentNode": "140556496408816",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#204)\n:- city#196: string\n+- city#204: string\n",
            "linked_columns": [
                "140556496408192->196",
                "140556478153440->204"
            ]
        }
    },
    {
        "id": "140556496408816->197",
        "type": "column",
        "parentNode": "140556496408816",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "140556496408192->197"
            ]
        }
    },
    {
        "id": "140556496408816->198",
        "type": "column",
        "parentNode": "140556496408816",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "140556496408192->198"
            ]
        }
    },
    {
        "id": "140556496408816->199",
        "type": "column",
        "parentNode": "140556496408816",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "140556496408192->199"
            ]
        }
    },
    {
        "id": "140556496408816->61",
        "type": "column",
        "parentNode": "140556496408816",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556478153440->61"
            ]
        }
    },
    {
        "id": "140556478153440->204",
        "type": "column",
        "parentNode": "140556478153440",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140556478163808->204"
            ]
        }
    },
    {
        "id": "140556478153440->61",
        "type": "column",
        "parentNode": "140556478153440",
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
        "id": "140556478163808->200",
        "type": "column",
        "parentNode": "140556478163808",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "140556478158768->200"
            ]
        }
    },
    {
        "id": "140556478163808->201",
        "type": "column",
        "parentNode": "140556478163808",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "140556478158768->201"
            ]
        }
    },
    {
        "id": "140556478163808->202",
        "type": "column",
        "parentNode": "140556478163808",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "140556478158768->202"
            ]
        }
    },
    {
        "id": "140556478163808->203",
        "type": "column",
        "parentNode": "140556478163808",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "140556478158768->203"
            ]
        }
    },
    {
        "id": "140556478163808->204",
        "type": "column",
        "parentNode": "140556478163808",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140556478158768->204"
            ]
        }
    },
    {
        "id": "140556496419664->205",
        "type": "column",
        "parentNode": "140556496419664",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "140556478162464->205"
            ]
        }
    },
    {
        "id": "140556496419664->206",
        "type": "column",
        "parentNode": "140556496419664",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "140556478162464->206"
            ]
        }
    },
    {
        "id": "140556496419664->207",
        "type": "column",
        "parentNode": "140556496419664",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "140556478162464->207"
            ]
        }
    },
    {
        "id": "140556496419664->208",
        "type": "column",
        "parentNode": "140556496419664",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "140556478162464->208"
            ]
        }
    },
    {
        "id": "140556496419664->209",
        "type": "column",
        "parentNode": "140556496419664",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "140556478162464->209"
            ]
        }
    },
    {
        "id": "140556478162464->205",
        "type": "column",
        "parentNode": "140556478162464",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "140556496171456->205"
            ]
        }
    },
    {
        "id": "140556478162464->206",
        "type": "column",
        "parentNode": "140556478162464",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "140556496171456->206"
            ]
        }
    },
    {
        "id": "140556478162464->207",
        "type": "column",
        "parentNode": "140556478162464",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "140556496171456->207"
            ]
        }
    },
    {
        "id": "140556478162464->208",
        "type": "column",
        "parentNode": "140556478162464",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "140556496171456->208"
            ]
        }
    },
    {
        "id": "140556478162464->209",
        "type": "column",
        "parentNode": "140556478162464",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "140556496171456->209"
            ]
        }
    },
    {
        "id": "140556496171456->205",
        "type": "column",
        "parentNode": "140556496171456",
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
        "id": "140556496171456->206",
        "type": "column",
        "parentNode": "140556496171456",
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
        "id": "140556496171456->207",
        "type": "column",
        "parentNode": "140556496171456",
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
        "id": "140556496171456->208",
        "type": "column",
        "parentNode": "140556496171456",
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
        "id": "140556496171456->209",
        "type": "column",
        "parentNode": "140556496171456",
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
        "id": "140556478158768->200",
        "type": "column",
        "parentNode": "140556478158768",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "140556496418608->200"
            ]
        }
    },
    {
        "id": "140556478158768->201",
        "type": "column",
        "parentNode": "140556478158768",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "140556496418608->201"
            ]
        }
    },
    {
        "id": "140556478158768->202",
        "type": "column",
        "parentNode": "140556478158768",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "140556496418608->202"
            ]
        }
    },
    {
        "id": "140556478158768->203",
        "type": "column",
        "parentNode": "140556478158768",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "140556496418608->203"
            ]
        }
    },
    {
        "id": "140556478158768->204",
        "type": "column",
        "parentNode": "140556478158768",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140556496418608->204"
            ]
        }
    },
    {
        "id": "140556496418608->200",
        "type": "column",
        "parentNode": "140556496418608",
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
        "id": "140556496418608->201",
        "type": "column",
        "parentNode": "140556496418608",
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
        "id": "140556496418608->202",
        "type": "column",
        "parentNode": "140556496418608",
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
        "id": "140556496418608->203",
        "type": "column",
        "parentNode": "140556496418608",
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
        "id": "140556496418608->204",
        "type": "column",
        "parentNode": "140556496418608",
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
        "id": "140556496408192->196",
        "type": "column",
        "parentNode": "140556496408192",
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
        "id": "140556496408192->197",
        "type": "column",
        "parentNode": "140556496408192",
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
        "id": "140556496408192->198",
        "type": "column",
        "parentNode": "140556496408192",
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
        "id": "140556496408192->199",
        "type": "column",
        "parentNode": "140556496408192",
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
        "id": "140556496405072->19",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#181)\n:- city#19: string\n+- city#181: string\n",
            "linked_columns": [
                "140556496171216->19",
                "140556496172224->181"
            ]
        }
    },
    {
        "id": "140556496405072->16",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496171216->16"
            ]
        }
    },
    {
        "id": "140556496405072->17",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496171216->17"
            ]
        }
    },
    {
        "id": "140556496405072->122",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496171216->122"
            ]
        }
    },
    {
        "id": "140556496405072->113",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496171216->113"
            ]
        }
    },
    {
        "id": "140556496405072->35",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496171216->35"
            ]
        }
    },
    {
        "id": "140556496405072->61",
        "type": "column",
        "parentNode": "140556496405072",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496172224->61"
            ]
        }
    },
    {
        "id": "140556496172224->181",
        "type": "column",
        "parentNode": "140556496172224",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140556499374176->181"
            ]
        }
    },
    {
        "id": "140556496172224->61",
        "type": "column",
        "parentNode": "140556496172224",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556499374176->61"
            ]
        }
    },
    {
        "id": "140556499374176->181",
        "type": "column",
        "parentNode": "140556499374176",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140556499374560->181"
            ]
        }
    },
    {
        "id": "140556499374176->61",
        "type": "column",
        "parentNode": "140556499374176",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556499374560->61"
            ]
        }
    },
    {
        "id": "140556499374560->181",
        "type": "column",
        "parentNode": "140556499374560",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140556496563616->181"
            ]
        }
    },
    {
        "id": "140556499374560->61",
        "type": "column",
        "parentNode": "140556499374560",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496563616->61"
            ]
        }
    },
    {
        "id": "140556496563616->181",
        "type": "column",
        "parentNode": "140556496563616",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140556496559872->181"
            ]
        }
    },
    {
        "id": "140556496563616->61",
        "type": "column",
        "parentNode": "140556496563616",
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
        "id": "140556496559872->177",
        "type": "column",
        "parentNode": "140556496559872",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "140556499373264->177"
            ]
        }
    },
    {
        "id": "140556496559872->178",
        "type": "column",
        "parentNode": "140556496559872",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "140556499373264->178"
            ]
        }
    },
    {
        "id": "140556496559872->179",
        "type": "column",
        "parentNode": "140556496559872",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "140556499373264->179"
            ]
        }
    },
    {
        "id": "140556496559872->180",
        "type": "column",
        "parentNode": "140556496559872",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "140556499373264->180"
            ]
        }
    },
    {
        "id": "140556496559872->181",
        "type": "column",
        "parentNode": "140556496559872",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140556499373264->181"
            ]
        }
    },
    {
        "id": "140556499385744->182",
        "type": "column",
        "parentNode": "140556499385744",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "140556496556704->182"
            ]
        }
    },
    {
        "id": "140556499385744->183",
        "type": "column",
        "parentNode": "140556499385744",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "140556496556704->183"
            ]
        }
    },
    {
        "id": "140556499385744->184",
        "type": "column",
        "parentNode": "140556499385744",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "140556496556704->184"
            ]
        }
    },
    {
        "id": "140556499385744->185",
        "type": "column",
        "parentNode": "140556499385744",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "140556496556704->185"
            ]
        }
    },
    {
        "id": "140556499385744->186",
        "type": "column",
        "parentNode": "140556499385744",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "140556496556704->186"
            ]
        }
    },
    {
        "id": "140556496556704->182",
        "type": "column",
        "parentNode": "140556496556704",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "140556496413760->182"
            ]
        }
    },
    {
        "id": "140556496556704->183",
        "type": "column",
        "parentNode": "140556496556704",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "140556496413760->183"
            ]
        }
    },
    {
        "id": "140556496556704->184",
        "type": "column",
        "parentNode": "140556496556704",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "140556496413760->184"
            ]
        }
    },
    {
        "id": "140556496556704->185",
        "type": "column",
        "parentNode": "140556496556704",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "140556496413760->185"
            ]
        }
    },
    {
        "id": "140556496556704->186",
        "type": "column",
        "parentNode": "140556496556704",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "140556496413760->186"
            ]
        }
    },
    {
        "id": "140556496413760->182",
        "type": "column",
        "parentNode": "140556496413760",
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
        "id": "140556496413760->183",
        "type": "column",
        "parentNode": "140556496413760",
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
        "id": "140556496413760->184",
        "type": "column",
        "parentNode": "140556496413760",
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
        "id": "140556496413760->185",
        "type": "column",
        "parentNode": "140556496413760",
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
        "id": "140556496413760->186",
        "type": "column",
        "parentNode": "140556496413760",
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
        "id": "140556499373264->177",
        "type": "column",
        "parentNode": "140556499373264",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "140556496419376->177"
            ]
        }
    },
    {
        "id": "140556499373264->178",
        "type": "column",
        "parentNode": "140556499373264",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "140556496419376->178"
            ]
        }
    },
    {
        "id": "140556499373264->179",
        "type": "column",
        "parentNode": "140556499373264",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "140556496419376->179"
            ]
        }
    },
    {
        "id": "140556499373264->180",
        "type": "column",
        "parentNode": "140556499373264",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "140556496419376->180"
            ]
        }
    },
    {
        "id": "140556499373264->181",
        "type": "column",
        "parentNode": "140556499373264",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140556496419376->181"
            ]
        }
    },
    {
        "id": "140556496419376->177",
        "type": "column",
        "parentNode": "140556496419376",
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
        "id": "140556496419376->178",
        "type": "column",
        "parentNode": "140556496419376",
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
        "id": "140556496419376->179",
        "type": "column",
        "parentNode": "140556496419376",
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
        "id": "140556496419376->180",
        "type": "column",
        "parentNode": "140556496419376",
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
        "id": "140556496419376->181",
        "type": "column",
        "parentNode": "140556496419376",
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
        "id": "140556496171216->16",
        "type": "column",
        "parentNode": "140556496171216",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496412128->16"
            ]
        }
    },
    {
        "id": "140556496171216->17",
        "type": "column",
        "parentNode": "140556496171216",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496412128->17"
            ]
        }
    },
    {
        "id": "140556496171216->19",
        "type": "column",
        "parentNode": "140556496171216",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556496412128->19"
            ]
        }
    },
    {
        "id": "140556496171216->122",
        "type": "column",
        "parentNode": "140556496171216",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496412128->122"
            ]
        }
    },
    {
        "id": "140556496171216->113",
        "type": "column",
        "parentNode": "140556496171216",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496412128->113"
            ]
        }
    },
    {
        "id": "140556496171216->35",
        "type": "column",
        "parentNode": "140556496171216",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496412128->35"
            ]
        }
    },
    {
        "id": "140556496412128->19",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "140556496164832->19",
                "140556496408480->114"
            ]
        }
    },
    {
        "id": "140556496412128->15",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140556496164832->15"
            ]
        }
    },
    {
        "id": "140556496412128->16",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556496164832->16"
            ]
        }
    },
    {
        "id": "140556496412128->17",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556496164832->17"
            ]
        }
    },
    {
        "id": "140556496412128->18",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140556496164832->18"
            ]
        }
    },
    {
        "id": "140556496412128->35",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496408480->35"
            ]
        }
    },
    {
        "id": "140556496412128->40",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140556496408480->40"
            ]
        }
    },
    {
        "id": "140556496412128->109",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496408480->109"
            ]
        }
    },
    {
        "id": "140556496412128->113",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496408480->113"
            ]
        }
    },
    {
        "id": "140556496412128->122",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496408480->122"
            ]
        }
    },
    {
        "id": "140556496412128->123",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140556496408480->123"
            ]
        }
    },
    {
        "id": "140556496412128->124",
        "type": "column",
        "parentNode": "140556496412128",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140556496408480->124"
            ]
        }
    },
    {
        "id": "140556496408480->114",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "140556496410880->114",
                "140556496166896->121"
            ]
        }
    },
    {
        "id": "140556496408480->35",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496410880->35"
            ]
        }
    },
    {
        "id": "140556496408480->40",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140556496410880->40"
            ]
        }
    },
    {
        "id": "140556496408480->109",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496410880->109"
            ]
        }
    },
    {
        "id": "140556496408480->113",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496410880->113"
            ]
        }
    },
    {
        "id": "140556496408480->122",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140556496166896->122"
            ]
        }
    },
    {
        "id": "140556496408480->123",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140556496166896->123"
            ]
        }
    },
    {
        "id": "140556496408480->124",
        "type": "column",
        "parentNode": "140556496408480",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140556496166896->124"
            ]
        }
    },
    {
        "id": "140556496166896->121",
        "type": "column",
        "parentNode": "140556496166896",
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
        "id": "140556496166896->122",
        "type": "column",
        "parentNode": "140556496166896",
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
        "id": "140556496166896->123",
        "type": "column",
        "parentNode": "140556496166896",
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
        "id": "140556496166896->124",
        "type": "column",
        "parentNode": "140556496166896",
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
        "id": "140556496410880->35",
        "type": "column",
        "parentNode": "140556496410880",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "140556496173184->35",
                "140556496409392->115"
            ]
        }
    },
    {
        "id": "140556496410880->40",
        "type": "column",
        "parentNode": "140556496410880",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140556496173184->40"
            ]
        }
    },
    {
        "id": "140556496410880->109",
        "type": "column",
        "parentNode": "140556496410880",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496173184->109"
            ]
        }
    },
    {
        "id": "140556496410880->113",
        "type": "column",
        "parentNode": "140556496410880",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140556496409392->113"
            ]
        }
    },
    {
        "id": "140556496410880->114",
        "type": "column",
        "parentNode": "140556496410880",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "140556496409392->114"
            ]
        }
    },
    {
        "id": "140556496409392->113",
        "type": "column",
        "parentNode": "140556496409392",
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
        "id": "140556496409392->114",
        "type": "column",
        "parentNode": "140556496409392",
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
        "id": "140556496409392->115",
        "type": "column",
        "parentNode": "140556496409392",
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
        "id": "140556496173184->40",
        "type": "column",
        "parentNode": "140556496173184",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140556496408960->40"
            ]
        }
    },
    {
        "id": "140556496173184->35",
        "type": "column",
        "parentNode": "140556496173184",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496408960->35"
            ]
        }
    },
    {
        "id": "140556496173184->109",
        "type": "column",
        "parentNode": "140556496173184",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140556496408960->109"
            ]
        }
    },
    {
        "id": "140556496408960->40",
        "type": "column",
        "parentNode": "140556496408960",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140556496415440->40"
            ]
        }
    },
    {
        "id": "140556496408960->35",
        "type": "column",
        "parentNode": "140556496408960",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140556496415440->35"
            ]
        }
    },
    {
        "id": "140556496408960->109",
        "type": "column",
        "parentNode": "140556496408960",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140556496415440->84"
            ]
        }
    },
    {
        "id": "140556496415440->35",
        "type": "column",
        "parentNode": "140556496415440",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "140556496420240->35",
                "140556499375040->39"
            ]
        }
    },
    {
        "id": "140556496415440->33",
        "type": "column",
        "parentNode": "140556496415440",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140556496420240->33"
            ]
        }
    },
    {
        "id": "140556496415440->34",
        "type": "column",
        "parentNode": "140556496415440",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140556496420240->34"
            ]
        }
    },
    {
        "id": "140556496415440->88",
        "type": "column",
        "parentNode": "140556496415440",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140556496420240->88"
            ]
        }
    },
    {
        "id": "140556496415440->84",
        "type": "column",
        "parentNode": "140556496415440",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496420240->84"
            ]
        }
    },
    {
        "id": "140556496415440->40",
        "type": "column",
        "parentNode": "140556496415440",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140556499375040->40"
            ]
        }
    },
    {
        "id": "140556499375040->39",
        "type": "column",
        "parentNode": "140556499375040",
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
        "id": "140556499375040->40",
        "type": "column",
        "parentNode": "140556499375040",
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
        "id": "140556496420240->35",
        "type": "column",
        "parentNode": "140556496420240",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "140556496172896->35",
                "140556496418560->90"
            ]
        }
    },
    {
        "id": "140556496420240->33",
        "type": "column",
        "parentNode": "140556496420240",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140556496172896->33"
            ]
        }
    },
    {
        "id": "140556496420240->34",
        "type": "column",
        "parentNode": "140556496420240",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140556496172896->34"
            ]
        }
    },
    {
        "id": "140556496420240->88",
        "type": "column",
        "parentNode": "140556496420240",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140556496418560->88"
            ]
        }
    },
    {
        "id": "140556496420240->84",
        "type": "column",
        "parentNode": "140556496420240",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140556496418560->84"
            ]
        }
    },
    {
        "id": "140556496418560->90",
        "type": "column",
        "parentNode": "140556496418560",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140556496416688->90"
            ]
        }
    },
    {
        "id": "140556496418560->88",
        "type": "column",
        "parentNode": "140556496418560",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140556496416688->88"
            ]
        }
    },
    {
        "id": "140556496418560->84",
        "type": "column",
        "parentNode": "140556496418560",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140556496416688->61"
            ]
        }
    },
    {
        "id": "140556496416688->25",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "140556496166512->25",
                "140556497518848->89"
            ]
        }
    },
    {
        "id": "140556496416688->26",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140556496166512->26"
            ]
        }
    },
    {
        "id": "140556496416688->27",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140556496166512->27"
            ]
        }
    },
    {
        "id": "140556496416688->28",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140556496166512->28"
            ]
        }
    },
    {
        "id": "140556496416688->61",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556496166512->61"
            ]
        }
    },
    {
        "id": "140556496416688->88",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140556497518848->88"
            ]
        }
    },
    {
        "id": "140556496416688->90",
        "type": "column",
        "parentNode": "140556496416688",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140556497518848->90"
            ]
        }
    },
    {
        "id": "140556497518848->88",
        "type": "column",
        "parentNode": "140556497518848",
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
        "id": "140556497518848->89",
        "type": "column",
        "parentNode": "140556497518848",
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
        "id": "140556497518848->90",
        "type": "column",
        "parentNode": "140556497518848",
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
        "id": "140556496166512->25",
        "type": "column",
        "parentNode": "140556496166512",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "140556496555024->25",
                "140556499377392->137"
            ]
        }
    },
    {
        "id": "140556496166512->26",
        "type": "column",
        "parentNode": "140556496166512",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140556496555024->26"
            ]
        }
    },
    {
        "id": "140556496166512->27",
        "type": "column",
        "parentNode": "140556496166512",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140556496555024->27"
            ]
        }
    },
    {
        "id": "140556496166512->28",
        "type": "column",
        "parentNode": "140556496166512",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140556496555024->28"
            ]
        }
    },
    {
        "id": "140556496166512->61",
        "type": "column",
        "parentNode": "140556496166512",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140556499377392->61"
            ]
        }
    },
    {
        "id": "140556499377392->137",
        "type": "column",
        "parentNode": "140556499377392",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140556496160224->137"
            ]
        }
    },
    {
        "id": "140556499377392->61",
        "type": "column",
        "parentNode": "140556499377392",
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
        "id": "140556496160224->133",
        "type": "column",
        "parentNode": "140556496160224",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140556496555504->133"
            ]
        }
    },
    {
        "id": "140556496160224->134",
        "type": "column",
        "parentNode": "140556496160224",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140556496555504->134"
            ]
        }
    },
    {
        "id": "140556496160224->135",
        "type": "column",
        "parentNode": "140556496160224",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140556496555504->135"
            ]
        }
    },
    {
        "id": "140556496160224->136",
        "type": "column",
        "parentNode": "140556496160224",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140556496555504->136"
            ]
        }
    },
    {
        "id": "140556496160224->137",
        "type": "column",
        "parentNode": "140556496160224",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140556496555504->137"
            ]
        }
    },
    {
        "id": "140556496420816->138",
        "type": "column",
        "parentNode": "140556496420816",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140556496164736->138"
            ]
        }
    },
    {
        "id": "140556496420816->139",
        "type": "column",
        "parentNode": "140556496420816",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140556496164736->139"
            ]
        }
    },
    {
        "id": "140556496420816->140",
        "type": "column",
        "parentNode": "140556496420816",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140556496164736->140"
            ]
        }
    },
    {
        "id": "140556496420816->141",
        "type": "column",
        "parentNode": "140556496420816",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140556496164736->141"
            ]
        }
    },
    {
        "id": "140556496420816->142",
        "type": "column",
        "parentNode": "140556496420816",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140556496164736->142"
            ]
        }
    },
    {
        "id": "140556496164736->138",
        "type": "column",
        "parentNode": "140556496164736",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140556478168704->138"
            ]
        }
    },
    {
        "id": "140556496164736->139",
        "type": "column",
        "parentNode": "140556496164736",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140556478168704->139"
            ]
        }
    },
    {
        "id": "140556496164736->140",
        "type": "column",
        "parentNode": "140556496164736",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140556478168704->140"
            ]
        }
    },
    {
        "id": "140556496164736->141",
        "type": "column",
        "parentNode": "140556496164736",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140556478168704->141"
            ]
        }
    },
    {
        "id": "140556496164736->142",
        "type": "column",
        "parentNode": "140556496164736",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140556478168704->142"
            ]
        }
    },
    {
        "id": "140556478168704->138",
        "type": "column",
        "parentNode": "140556478168704",
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
        "id": "140556478168704->139",
        "type": "column",
        "parentNode": "140556478168704",
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
        "id": "140556478168704->140",
        "type": "column",
        "parentNode": "140556478168704",
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
        "id": "140556478168704->141",
        "type": "column",
        "parentNode": "140556478168704",
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
        "id": "140556478168704->142",
        "type": "column",
        "parentNode": "140556478168704",
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
        "id": "140556496555504->133",
        "type": "column",
        "parentNode": "140556496555504",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140556478166112->133"
            ]
        }
    },
    {
        "id": "140556496555504->134",
        "type": "column",
        "parentNode": "140556496555504",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140556478166112->134"
            ]
        }
    },
    {
        "id": "140556496555504->135",
        "type": "column",
        "parentNode": "140556496555504",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140556478166112->135"
            ]
        }
    },
    {
        "id": "140556496555504->136",
        "type": "column",
        "parentNode": "140556496555504",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140556478166112->136"
            ]
        }
    },
    {
        "id": "140556496555504->137",
        "type": "column",
        "parentNode": "140556496555504",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140556478166112->137"
            ]
        }
    },
    {
        "id": "140556478166112->133",
        "type": "column",
        "parentNode": "140556478166112",
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
        "id": "140556478166112->134",
        "type": "column",
        "parentNode": "140556478166112",
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
        "id": "140556478166112->135",
        "type": "column",
        "parentNode": "140556478166112",
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
        "id": "140556478166112->136",
        "type": "column",
        "parentNode": "140556478166112",
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
        "id": "140556478166112->137",
        "type": "column",
        "parentNode": "140556478166112",
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
        "id": "140556496555024->25",
        "type": "column",
        "parentNode": "140556496555024",
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
        "id": "140556496555024->26",
        "type": "column",
        "parentNode": "140556496555024",
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
        "id": "140556496555024->27",
        "type": "column",
        "parentNode": "140556496555024",
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
        "id": "140556496555024->28",
        "type": "column",
        "parentNode": "140556496555024",
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
        "id": "140556496172896->33",
        "type": "column",
        "parentNode": "140556496172896",
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
        "id": "140556496172896->34",
        "type": "column",
        "parentNode": "140556496172896",
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
        "id": "140556496172896->35",
        "type": "column",
        "parentNode": "140556496172896",
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
        "id": "140556496164832->15",
        "type": "column",
        "parentNode": "140556496164832",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140556499372112->15"
            ]
        }
    },
    {
        "id": "140556496164832->16",
        "type": "column",
        "parentNode": "140556496164832",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556499372112->16"
            ]
        }
    },
    {
        "id": "140556496164832->17",
        "type": "column",
        "parentNode": "140556496164832",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556499372112->17"
            ]
        }
    },
    {
        "id": "140556496164832->18",
        "type": "column",
        "parentNode": "140556496164832",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140556499372112->18"
            ]
        }
    },
    {
        "id": "140556496164832->19",
        "type": "column",
        "parentNode": "140556496164832",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556499372112->19"
            ]
        }
    },
    {
        "id": "140556499376960->44",
        "type": "column",
        "parentNode": "140556499376960",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140556496167904->44"
            ]
        }
    },
    {
        "id": "140556499376960->45",
        "type": "column",
        "parentNode": "140556499376960",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140556496167904->45"
            ]
        }
    },
    {
        "id": "140556499376960->46",
        "type": "column",
        "parentNode": "140556499376960",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140556496167904->46"
            ]
        }
    },
    {
        "id": "140556499376960->47",
        "type": "column",
        "parentNode": "140556499376960",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140556496167904->47"
            ]
        }
    },
    {
        "id": "140556499376960->48",
        "type": "column",
        "parentNode": "140556499376960",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140556496167904->48"
            ]
        }
    },
    {
        "id": "140556496167904->44",
        "type": "column",
        "parentNode": "140556496167904",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140556496162096->44"
            ]
        }
    },
    {
        "id": "140556496167904->45",
        "type": "column",
        "parentNode": "140556496167904",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140556496162096->45"
            ]
        }
    },
    {
        "id": "140556496167904->46",
        "type": "column",
        "parentNode": "140556496167904",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140556496162096->46"
            ]
        }
    },
    {
        "id": "140556496167904->47",
        "type": "column",
        "parentNode": "140556496167904",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140556496162096->47"
            ]
        }
    },
    {
        "id": "140556496167904->48",
        "type": "column",
        "parentNode": "140556496167904",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140556496162096->48"
            ]
        }
    },
    {
        "id": "140556496162096->44",
        "type": "column",
        "parentNode": "140556496162096",
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
        "id": "140556496162096->45",
        "type": "column",
        "parentNode": "140556496162096",
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
        "id": "140556496162096->46",
        "type": "column",
        "parentNode": "140556496162096",
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
        "id": "140556496162096->47",
        "type": "column",
        "parentNode": "140556496162096",
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
        "id": "140556496162096->48",
        "type": "column",
        "parentNode": "140556496162096",
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
        "id": "140556499372112->15",
        "type": "column",
        "parentNode": "140556499372112",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140556478165968->15"
            ]
        }
    },
    {
        "id": "140556499372112->16",
        "type": "column",
        "parentNode": "140556499372112",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140556478165968->16"
            ]
        }
    },
    {
        "id": "140556499372112->17",
        "type": "column",
        "parentNode": "140556499372112",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140556478165968->17"
            ]
        }
    },
    {
        "id": "140556499372112->18",
        "type": "column",
        "parentNode": "140556499372112",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140556478165968->18"
            ]
        }
    },
    {
        "id": "140556499372112->19",
        "type": "column",
        "parentNode": "140556499372112",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140556478165968->19"
            ]
        }
    },
    {
        "id": "140556478165968->15",
        "type": "column",
        "parentNode": "140556478165968",
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
        "id": "140556478165968->16",
        "type": "column",
        "parentNode": "140556478165968",
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
        "id": "140556478165968->17",
        "type": "column",
        "parentNode": "140556478165968",
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
        "id": "140556478165968->18",
        "type": "column",
        "parentNode": "140556478165968",
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
        "id": "140556478165968->19",
        "type": "column",
        "parentNode": "140556478165968",
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
        "id": "140556478163136-140556496164016",
        "source": "140556478163136",
        "target": "140556496164016",
        "data": {}
    },
    {
        "id": "140556496164016-140556496168048",
        "source": "140556496164016",
        "target": "140556496168048",
        "data": {}
    },
    {
        "id": "140556496168048-140556496162144",
        "source": "140556496168048",
        "target": "140556496162144",
        "data": {}
    },
    {
        "id": "140556496162144-140556496174384",
        "source": "140556496162144",
        "target": "140556496174384",
        "data": {}
    },
    {
        "id": "140556496174384-140556496415920",
        "source": "140556496174384",
        "target": "140556496415920",
        "data": {}
    },
    {
        "id": "140556496162144-140556496411408",
        "source": "140556496162144",
        "target": "140556496411408",
        "data": {}
    },
    {
        "id": "140556496411408-140556496162288",
        "source": "140556496411408",
        "target": "140556496162288",
        "data": {}
    },
    {
        "id": "140556496162288-140556496415968",
        "source": "140556496162288",
        "target": "140556496415968",
        "data": {}
    },
    {
        "id": "140556496415968-140556496171792",
        "source": "140556496415968",
        "target": "140556496171792",
        "data": {}
    },
    {
        "id": "140556496171792-140556478167024",
        "source": "140556496171792",
        "target": "140556478167024",
        "data": {}
    },
    {
        "id": "140556478167024-140556496412416",
        "source": "140556478167024",
        "target": "140556496412416",
        "data": {}
    },
    {
        "id": "140556496412416-140556478156272",
        "source": "140556496412416",
        "target": "140556478156272",
        "data": {}
    },
    {
        "id": "140556496412416-140556496413952",
        "source": "140556496412416",
        "target": "140556496413952",
        "data": {}
    },
    {
        "id": "140556496413952-140556496162768",
        "source": "140556496413952",
        "target": "140556496162768",
        "data": {}
    },
    {
        "id": "140556496162768-140556496167424",
        "source": "140556496162768",
        "target": "140556496167424",
        "data": {}
    },
    {
        "id": "140556496167424-140556496173904",
        "source": "140556496167424",
        "target": "140556496173904",
        "data": {}
    },
    {
        "id": "140556496167424-140556496167376",
        "source": "140556496167424",
        "target": "140556496167376",
        "data": {}
    },
    {
        "id": "140556496167376-140556478166496",
        "source": "140556496167376",
        "target": "140556478166496",
        "data": {}
    },
    {
        "id": "140556478166496-140556496171696",
        "source": "140556478166496",
        "target": "140556496171696",
        "data": {}
    },
    {
        "id": "140556496171696-140556496161472",
        "source": "140556496171696",
        "target": "140556496161472",
        "data": {}
    },
    {
        "id": "140556496161472-140556496562416",
        "source": "140556496161472",
        "target": "140556496562416",
        "data": {}
    },
    {
        "id": "140556496562416-140556496174000",
        "source": "140556496562416",
        "target": "140556496174000",
        "data": {}
    },
    {
        "id": "140556496171696-140556478454928",
        "source": "140556496171696",
        "target": "140556478454928",
        "data": {}
    },
    {
        "id": "140556478454928-140556496163392",
        "source": "140556478454928",
        "target": "140556496163392",
        "data": {}
    },
    {
        "id": "140556496167376-140556478166544",
        "source": "140556496167376",
        "target": "140556478166544",
        "data": {}
    },
    {
        "id": "140556496413952-140556478163616",
        "source": "140556496413952",
        "target": "140556478163616",
        "data": {}
    },
    {
        "id": "140556496411408-140556496409824",
        "source": "140556496411408",
        "target": "140556496409824",
        "data": {}
    },
    {
        "id": "140556496409824-140556496558432",
        "source": "140556496409824",
        "target": "140556496558432",
        "data": {}
    },
    {
        "id": "140556496558432-140556496568032",
        "source": "140556496558432",
        "target": "140556496568032",
        "data": {}
    },
    {
        "id": "140556496568032-140556496411936",
        "source": "140556496568032",
        "target": "140556496411936",
        "data": {}
    },
    {
        "id": "140556496411936-140556496552432",
        "source": "140556496411936",
        "target": "140556496552432",
        "data": {}
    },
    {
        "id": "140556496552432-140556496419136",
        "source": "140556496552432",
        "target": "140556496419136",
        "data": {}
    },
    {
        "id": "140556496419136-140556478159296",
        "source": "140556496419136",
        "target": "140556478159296",
        "data": {}
    },
    {
        "id": "140556496419136-140556496408816",
        "source": "140556496419136",
        "target": "140556496408816",
        "data": {}
    },
    {
        "id": "140556496408816-140556478153440",
        "source": "140556496408816",
        "target": "140556478153440",
        "data": {}
    },
    {
        "id": "140556478153440-140556478163808",
        "source": "140556478153440",
        "target": "140556478163808",
        "data": {}
    },
    {
        "id": "140556478163808-140556496419664",
        "source": "140556478163808",
        "target": "140556496419664",
        "data": {}
    },
    {
        "id": "140556496419664-140556478162464",
        "source": "140556496419664",
        "target": "140556478162464",
        "data": {}
    },
    {
        "id": "140556478162464-140556496171456",
        "source": "140556478162464",
        "target": "140556496171456",
        "data": {}
    },
    {
        "id": "140556478163808-140556478158768",
        "source": "140556478163808",
        "target": "140556478158768",
        "data": {}
    },
    {
        "id": "140556478158768-140556496418608",
        "source": "140556478158768",
        "target": "140556496418608",
        "data": {}
    },
    {
        "id": "140556496408816-140556496408192",
        "source": "140556496408816",
        "target": "140556496408192",
        "data": {}
    },
    {
        "id": "140556496409824-140556496405072",
        "source": "140556496409824",
        "target": "140556496405072",
        "data": {}
    },
    {
        "id": "140556496405072-140556496172224",
        "source": "140556496405072",
        "target": "140556496172224",
        "data": {}
    },
    {
        "id": "140556496172224-140556499374176",
        "source": "140556496172224",
        "target": "140556499374176",
        "data": {}
    },
    {
        "id": "140556499374176-140556499374560",
        "source": "140556499374176",
        "target": "140556499374560",
        "data": {}
    },
    {
        "id": "140556499374560-140556496563616",
        "source": "140556499374560",
        "target": "140556496563616",
        "data": {}
    },
    {
        "id": "140556496563616-140556496559872",
        "source": "140556496563616",
        "target": "140556496559872",
        "data": {}
    },
    {
        "id": "140556496559872-140556499385744",
        "source": "140556496559872",
        "target": "140556499385744",
        "data": {}
    },
    {
        "id": "140556499385744-140556496556704",
        "source": "140556499385744",
        "target": "140556496556704",
        "data": {}
    },
    {
        "id": "140556496556704-140556496413760",
        "source": "140556496556704",
        "target": "140556496413760",
        "data": {}
    },
    {
        "id": "140556496559872-140556499373264",
        "source": "140556496559872",
        "target": "140556499373264",
        "data": {}
    },
    {
        "id": "140556499373264-140556496419376",
        "source": "140556499373264",
        "target": "140556496419376",
        "data": {}
    },
    {
        "id": "140556496405072-140556496171216",
        "source": "140556496405072",
        "target": "140556496171216",
        "data": {}
    },
    {
        "id": "140556496171216-140556496412128",
        "source": "140556496171216",
        "target": "140556496412128",
        "data": {}
    },
    {
        "id": "140556496412128-140556496408480",
        "source": "140556496412128",
        "target": "140556496408480",
        "data": {}
    },
    {
        "id": "140556496408480-140556496166896",
        "source": "140556496408480",
        "target": "140556496166896",
        "data": {}
    },
    {
        "id": "140556496408480-140556496410880",
        "source": "140556496408480",
        "target": "140556496410880",
        "data": {}
    },
    {
        "id": "140556496410880-140556496409392",
        "source": "140556496410880",
        "target": "140556496409392",
        "data": {}
    },
    {
        "id": "140556496410880-140556496173184",
        "source": "140556496410880",
        "target": "140556496173184",
        "data": {}
    },
    {
        "id": "140556496173184-140556496408960",
        "source": "140556496173184",
        "target": "140556496408960",
        "data": {}
    },
    {
        "id": "140556496408960-140556496415440",
        "source": "140556496408960",
        "target": "140556496415440",
        "data": {}
    },
    {
        "id": "140556496415440-140556499375040",
        "source": "140556496415440",
        "target": "140556499375040",
        "data": {}
    },
    {
        "id": "140556496415440-140556496420240",
        "source": "140556496415440",
        "target": "140556496420240",
        "data": {}
    },
    {
        "id": "140556496420240-140556496418560",
        "source": "140556496420240",
        "target": "140556496418560",
        "data": {}
    },
    {
        "id": "140556496418560-140556496416688",
        "source": "140556496418560",
        "target": "140556496416688",
        "data": {}
    },
    {
        "id": "140556496416688-140556497518848",
        "source": "140556496416688",
        "target": "140556497518848",
        "data": {}
    },
    {
        "id": "140556496416688-140556496166512",
        "source": "140556496416688",
        "target": "140556496166512",
        "data": {}
    },
    {
        "id": "140556496166512-140556499377392",
        "source": "140556496166512",
        "target": "140556499377392",
        "data": {}
    },
    {
        "id": "140556499377392-140556496160224",
        "source": "140556499377392",
        "target": "140556496160224",
        "data": {}
    },
    {
        "id": "140556496160224-140556496420816",
        "source": "140556496160224",
        "target": "140556496420816",
        "data": {}
    },
    {
        "id": "140556496420816-140556496164736",
        "source": "140556496420816",
        "target": "140556496164736",
        "data": {}
    },
    {
        "id": "140556496164736-140556478168704",
        "source": "140556496164736",
        "target": "140556478168704",
        "data": {}
    },
    {
        "id": "140556496160224-140556496555504",
        "source": "140556496160224",
        "target": "140556496555504",
        "data": {}
    },
    {
        "id": "140556496555504-140556478166112",
        "source": "140556496555504",
        "target": "140556478166112",
        "data": {}
    },
    {
        "id": "140556496166512-140556496555024",
        "source": "140556496166512",
        "target": "140556496555024",
        "data": {}
    },
    {
        "id": "140556496420240-140556496172896",
        "source": "140556496420240",
        "target": "140556496172896",
        "data": {}
    },
    {
        "id": "140556496412128-140556496164832",
        "source": "140556496412128",
        "target": "140556496164832",
        "data": {}
    },
    {
        "id": "140556496164832-140556499376960",
        "source": "140556496164832",
        "target": "140556499376960",
        "data": {}
    },
    {
        "id": "140556499376960-140556496167904",
        "source": "140556499376960",
        "target": "140556496167904",
        "data": {}
    },
    {
        "id": "140556496167904-140556496162096",
        "source": "140556496167904",
        "target": "140556496162096",
        "data": {}
    },
    {
        "id": "140556496164832-140556499372112",
        "source": "140556496164832",
        "target": "140556499372112",
        "data": {}
    },
    {
        "id": "140556499372112-140556478165968",
        "source": "140556499372112",
        "target": "140556478165968",
        "data": {}
    },
    {
        "id": "(140556478163136->35)-(140556496164016->35)",
        "source": "140556478163136->35",
        "target": "140556496164016->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->113)-(140556496164016->113)",
        "source": "140556478163136->113",
        "target": "140556496164016->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->19)-(140556496164016->19)",
        "source": "140556478163136->19",
        "target": "140556496164016->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->16)-(140556496164016->16)",
        "source": "140556478163136->16",
        "target": "140556496164016->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->17)-(140556496164016->17)",
        "source": "140556478163136->17",
        "target": "140556496164016->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->122)-(140556496164016->122)",
        "source": "140556478163136->122",
        "target": "140556496164016->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->61)-(140556496164016->61)",
        "source": "140556478163136->61",
        "target": "140556496164016->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->212)-(140556496164016->212)",
        "source": "140556478163136->212",
        "target": "140556496164016->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->84)-(140556496164016->84)",
        "source": "140556478163136->84",
        "target": "140556496164016->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->245)-(140556496164016->245)",
        "source": "140556478163136->245",
        "target": "140556496164016->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->109)-(140556496164016->109)",
        "source": "140556478163136->109",
        "target": "140556496164016->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->163)-(140556496164016->163)",
        "source": "140556478163136->163",
        "target": "140556496164016->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->164)-(140556496164016->164)",
        "source": "140556478163136->164",
        "target": "140556496164016->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->165)-(140556496164016->165)",
        "source": "140556478163136->165",
        "target": "140556496164016->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->166)-(140556496164016->166)",
        "source": "140556478163136->166",
        "target": "140556496164016->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->171)-(140556496164016->171)",
        "source": "140556478163136->171",
        "target": "140556496164016->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->291)-(140556496164016->291)",
        "source": "140556478163136->291",
        "target": "140556496164016->291",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->309)-(140556496164016->309)",
        "source": "140556478163136->309",
        "target": "140556496164016->309",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163136->328)-(140556496164016->109)",
        "source": "140556478163136->328",
        "target": "140556496164016->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->35)-(140556496168048->35)",
        "source": "140556496164016->35",
        "target": "140556496168048->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->113)-(140556496168048->113)",
        "source": "140556496164016->113",
        "target": "140556496168048->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->19)-(140556496168048->19)",
        "source": "140556496164016->19",
        "target": "140556496168048->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->16)-(140556496168048->16)",
        "source": "140556496164016->16",
        "target": "140556496168048->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->17)-(140556496168048->17)",
        "source": "140556496164016->17",
        "target": "140556496168048->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->122)-(140556496168048->122)",
        "source": "140556496164016->122",
        "target": "140556496168048->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->61)-(140556496168048->61)",
        "source": "140556496164016->61",
        "target": "140556496168048->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->212)-(140556496168048->212)",
        "source": "140556496164016->212",
        "target": "140556496168048->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->84)-(140556496168048->84)",
        "source": "140556496164016->84",
        "target": "140556496168048->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->245)-(140556496168048->245)",
        "source": "140556496164016->245",
        "target": "140556496168048->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->109)-(140556496168048->109)",
        "source": "140556496164016->109",
        "target": "140556496168048->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->163)-(140556496168048->163)",
        "source": "140556496164016->163",
        "target": "140556496168048->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->164)-(140556496168048->164)",
        "source": "140556496164016->164",
        "target": "140556496168048->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->165)-(140556496168048->165)",
        "source": "140556496164016->165",
        "target": "140556496168048->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->166)-(140556496168048->166)",
        "source": "140556496164016->166",
        "target": "140556496168048->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->171)-(140556496168048->171)",
        "source": "140556496164016->171",
        "target": "140556496168048->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->291)-(140556496168048->291)",
        "source": "140556496164016->291",
        "target": "140556496168048->291",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164016->309)-(140556496168048->84)",
        "source": "140556496164016->309",
        "target": "140556496168048->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->35)-(140556496162144->35)",
        "source": "140556496168048->35",
        "target": "140556496162144->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->113)-(140556496162144->113)",
        "source": "140556496168048->113",
        "target": "140556496162144->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->19)-(140556496162144->19)",
        "source": "140556496168048->19",
        "target": "140556496162144->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->16)-(140556496162144->16)",
        "source": "140556496168048->16",
        "target": "140556496162144->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->17)-(140556496162144->17)",
        "source": "140556496168048->17",
        "target": "140556496162144->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->122)-(140556496162144->122)",
        "source": "140556496168048->122",
        "target": "140556496162144->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->61)-(140556496162144->61)",
        "source": "140556496168048->61",
        "target": "140556496162144->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->212)-(140556496162144->212)",
        "source": "140556496168048->212",
        "target": "140556496162144->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->84)-(140556496162144->84)",
        "source": "140556496168048->84",
        "target": "140556496162144->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->245)-(140556496162144->245)",
        "source": "140556496168048->245",
        "target": "140556496162144->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->109)-(140556496162144->109)",
        "source": "140556496168048->109",
        "target": "140556496162144->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->163)-(140556496162144->163)",
        "source": "140556496168048->163",
        "target": "140556496162144->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->164)-(140556496162144->164)",
        "source": "140556496168048->164",
        "target": "140556496162144->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->165)-(140556496162144->165)",
        "source": "140556496168048->165",
        "target": "140556496162144->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->166)-(140556496162144->166)",
        "source": "140556496168048->166",
        "target": "140556496162144->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->171)-(140556496162144->171)",
        "source": "140556496168048->171",
        "target": "140556496162144->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496168048->291)-(140556496162144->61)",
        "source": "140556496168048->291",
        "target": "140556496162144->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->35)-(140556496411408->35)",
        "source": "140556496162144->35",
        "target": "140556496411408->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->113)-(140556496411408->113)",
        "source": "140556496162144->113",
        "target": "140556496411408->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->19)-(140556496411408->19)",
        "source": "140556496162144->19",
        "target": "140556496411408->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->16)-(140556496411408->16)",
        "source": "140556496162144->16",
        "target": "140556496411408->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->17)-(140556496411408->17)",
        "source": "140556496162144->17",
        "target": "140556496411408->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->122)-(140556496411408->122)",
        "source": "140556496162144->122",
        "target": "140556496411408->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->61)-(140556496411408->61)",
        "source": "140556496162144->61",
        "target": "140556496411408->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->212)-(140556496411408->212)",
        "source": "140556496162144->212",
        "target": "140556496411408->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->84)-(140556496411408->84)",
        "source": "140556496162144->84",
        "target": "140556496411408->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->245)-(140556496411408->245)",
        "source": "140556496162144->245",
        "target": "140556496411408->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->109)-(140556496411408->109)",
        "source": "140556496162144->109",
        "target": "140556496411408->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->163)-(140556496174384->163)",
        "source": "140556496162144->163",
        "target": "140556496174384->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->164)-(140556496174384->164)",
        "source": "140556496162144->164",
        "target": "140556496174384->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->165)-(140556496174384->165)",
        "source": "140556496162144->165",
        "target": "140556496174384->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->166)-(140556496174384->166)",
        "source": "140556496162144->166",
        "target": "140556496174384->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162144->171)-(140556496174384->171)",
        "source": "140556496162144->171",
        "target": "140556496174384->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->163)-(140556496415920->163)",
        "source": "140556496174384->163",
        "target": "140556496415920->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->164)-(140556496415920->164)",
        "source": "140556496174384->164",
        "target": "140556496415920->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->165)-(140556496415920->165)",
        "source": "140556496174384->165",
        "target": "140556496415920->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->166)-(140556496415920->166)",
        "source": "140556496174384->166",
        "target": "140556496415920->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->171)-(140556496415920->163)",
        "source": "140556496174384->171",
        "target": "140556496415920->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->171)-(140556496415920->164)",
        "source": "140556496174384->171",
        "target": "140556496415920->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->171)-(140556496415920->165)",
        "source": "140556496174384->171",
        "target": "140556496415920->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496174384->171)-(140556496415920->166)",
        "source": "140556496174384->171",
        "target": "140556496415920->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->35)-(140556496409824->35)",
        "source": "140556496411408->35",
        "target": "140556496409824->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->35)-(140556496162288->226)",
        "source": "140556496411408->35",
        "target": "140556496162288->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->113)-(140556496409824->113)",
        "source": "140556496411408->113",
        "target": "140556496409824->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->19)-(140556496409824->19)",
        "source": "140556496411408->19",
        "target": "140556496409824->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->16)-(140556496409824->16)",
        "source": "140556496411408->16",
        "target": "140556496409824->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->17)-(140556496409824->17)",
        "source": "140556496411408->17",
        "target": "140556496409824->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->122)-(140556496409824->122)",
        "source": "140556496411408->122",
        "target": "140556496409824->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->61)-(140556496409824->61)",
        "source": "140556496411408->61",
        "target": "140556496409824->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->212)-(140556496409824->35)",
        "source": "140556496411408->212",
        "target": "140556496409824->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->212)-(140556496162288->226)",
        "source": "140556496411408->212",
        "target": "140556496162288->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->84)-(140556496409824->84)",
        "source": "140556496411408->84",
        "target": "140556496409824->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->245)-(140556496162288->245)",
        "source": "140556496411408->245",
        "target": "140556496162288->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411408->109)-(140556496162288->109)",
        "source": "140556496411408->109",
        "target": "140556496162288->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162288->245)-(140556496415968->245)",
        "source": "140556496162288->245",
        "target": "140556496415968->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162288->226)-(140556496415968->226)",
        "source": "140556496162288->226",
        "target": "140556496415968->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162288->109)-(140556496415968->109)",
        "source": "140556496162288->109",
        "target": "140556496415968->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415968->245)-(140556496171792->245)",
        "source": "140556496415968->245",
        "target": "140556496171792->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415968->226)-(140556496171792->226)",
        "source": "140556496415968->226",
        "target": "140556496171792->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415968->109)-(140556496171792->109)",
        "source": "140556496415968->109",
        "target": "140556496171792->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171792->245)-(140556478167024->245)",
        "source": "140556496171792->245",
        "target": "140556478167024->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171792->226)-(140556478167024->226)",
        "source": "140556496171792->226",
        "target": "140556478167024->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171792->109)-(140556478167024->109)",
        "source": "140556496171792->109",
        "target": "140556478167024->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478167024->245)-(140556496412416->245)",
        "source": "140556478167024->245",
        "target": "140556496412416->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478167024->226)-(140556496412416->226)",
        "source": "140556478167024->226",
        "target": "140556496412416->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478167024->109)-(140556496412416->84)",
        "source": "140556478167024->109",
        "target": "140556496412416->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->226)-(140556496413952->226)",
        "source": "140556496412416->226",
        "target": "140556496413952->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->226)-(140556478156272->244)",
        "source": "140556496412416->226",
        "target": "140556478156272->244",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->224)-(140556496413952->224)",
        "source": "140556496412416->224",
        "target": "140556496413952->224",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->225)-(140556496413952->225)",
        "source": "140556496412416->225",
        "target": "140556496413952->225",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->241)-(140556496413952->241)",
        "source": "140556496412416->241",
        "target": "140556496413952->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->84)-(140556496413952->84)",
        "source": "140556496412416->84",
        "target": "140556496413952->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412416->245)-(140556478156272->245)",
        "source": "140556496412416->245",
        "target": "140556478156272->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496413952->226)-(140556478163616->226)",
        "source": "140556496413952->226",
        "target": "140556478163616->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496413952->226)-(140556496162768->243)",
        "source": "140556496413952->226",
        "target": "140556496162768->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496413952->224)-(140556478163616->224)",
        "source": "140556496413952->224",
        "target": "140556478163616->224",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496413952->225)-(140556478163616->225)",
        "source": "140556496413952->225",
        "target": "140556478163616->225",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496413952->241)-(140556496162768->241)",
        "source": "140556496413952->241",
        "target": "140556496162768->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496413952->84)-(140556496162768->84)",
        "source": "140556496413952->84",
        "target": "140556496162768->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162768->243)-(140556496167424->243)",
        "source": "140556496162768->243",
        "target": "140556496167424->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162768->241)-(140556496167424->241)",
        "source": "140556496162768->241",
        "target": "140556496167424->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496162768->84)-(140556496167424->61)",
        "source": "140556496162768->84",
        "target": "140556496167424->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->227)-(140556496167376->227)",
        "source": "140556496167424->227",
        "target": "140556496167376->227",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->227)-(140556496173904->242)",
        "source": "140556496167424->227",
        "target": "140556496173904->242",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->228)-(140556496167376->228)",
        "source": "140556496167424->228",
        "target": "140556496167376->228",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->229)-(140556496167376->229)",
        "source": "140556496167424->229",
        "target": "140556496167376->229",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->230)-(140556496167376->230)",
        "source": "140556496167424->230",
        "target": "140556496167376->230",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->61)-(140556496167376->61)",
        "source": "140556496167424->61",
        "target": "140556496167376->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->241)-(140556496173904->241)",
        "source": "140556496167424->241",
        "target": "140556496173904->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167424->243)-(140556496173904->243)",
        "source": "140556496167424->243",
        "target": "140556496173904->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167376->227)-(140556478166544->227)",
        "source": "140556496167376->227",
        "target": "140556478166544->227",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167376->227)-(140556478166496->235)",
        "source": "140556496167376->227",
        "target": "140556478166496->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167376->228)-(140556478166544->228)",
        "source": "140556496167376->228",
        "target": "140556478166544->228",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167376->229)-(140556478166544->229)",
        "source": "140556496167376->229",
        "target": "140556478166544->229",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167376->230)-(140556478166544->230)",
        "source": "140556496167376->230",
        "target": "140556478166544->230",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167376->61)-(140556478166496->61)",
        "source": "140556496167376->61",
        "target": "140556478166496->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478166496->235)-(140556496171696->235)",
        "source": "140556478166496->235",
        "target": "140556496171696->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171696->231)-(140556478454928->231)",
        "source": "140556496171696->231",
        "target": "140556478454928->231",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171696->232)-(140556478454928->232)",
        "source": "140556496171696->232",
        "target": "140556478454928->232",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171696->233)-(140556478454928->233)",
        "source": "140556496171696->233",
        "target": "140556478454928->233",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171696->234)-(140556478454928->234)",
        "source": "140556496171696->234",
        "target": "140556478454928->234",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171696->235)-(140556478454928->235)",
        "source": "140556496171696->235",
        "target": "140556478454928->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496161472->236)-(140556496562416->236)",
        "source": "140556496161472->236",
        "target": "140556496562416->236",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496161472->237)-(140556496562416->237)",
        "source": "140556496161472->237",
        "target": "140556496562416->237",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496161472->238)-(140556496562416->238)",
        "source": "140556496161472->238",
        "target": "140556496562416->238",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496161472->239)-(140556496562416->239)",
        "source": "140556496161472->239",
        "target": "140556496562416->239",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496161472->240)-(140556496562416->240)",
        "source": "140556496161472->240",
        "target": "140556496562416->240",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496562416->236)-(140556496174000->236)",
        "source": "140556496562416->236",
        "target": "140556496174000->236",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496562416->237)-(140556496174000->237)",
        "source": "140556496562416->237",
        "target": "140556496174000->237",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496562416->238)-(140556496174000->238)",
        "source": "140556496562416->238",
        "target": "140556496174000->238",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496562416->239)-(140556496174000->239)",
        "source": "140556496562416->239",
        "target": "140556496174000->239",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496562416->240)-(140556496174000->240)",
        "source": "140556496562416->240",
        "target": "140556496174000->240",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478454928->231)-(140556496163392->231)",
        "source": "140556478454928->231",
        "target": "140556496163392->231",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478454928->232)-(140556496163392->232)",
        "source": "140556478454928->232",
        "target": "140556496163392->232",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478454928->233)-(140556496163392->233)",
        "source": "140556478454928->233",
        "target": "140556496163392->233",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478454928->234)-(140556496163392->234)",
        "source": "140556478454928->234",
        "target": "140556496163392->234",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478454928->235)-(140556496163392->235)",
        "source": "140556478454928->235",
        "target": "140556496163392->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->113)-(140556496405072->113)",
        "source": "140556496409824->113",
        "target": "140556496405072->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->113)-(140556496558432->210)",
        "source": "140556496409824->113",
        "target": "140556496558432->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->19)-(140556496405072->19)",
        "source": "140556496409824->19",
        "target": "140556496405072->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->16)-(140556496405072->16)",
        "source": "140556496409824->16",
        "target": "140556496405072->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->17)-(140556496405072->17)",
        "source": "140556496409824->17",
        "target": "140556496405072->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->122)-(140556496405072->122)",
        "source": "140556496409824->122",
        "target": "140556496405072->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->35)-(140556496405072->35)",
        "source": "140556496409824->35",
        "target": "140556496405072->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->61)-(140556496405072->61)",
        "source": "140556496409824->61",
        "target": "140556496405072->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->212)-(140556496558432->212)",
        "source": "140556496409824->212",
        "target": "140556496558432->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496409824->84)-(140556496558432->84)",
        "source": "140556496409824->84",
        "target": "140556496558432->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496558432->212)-(140556496568032->212)",
        "source": "140556496558432->212",
        "target": "140556496568032->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496558432->210)-(140556496568032->210)",
        "source": "140556496558432->210",
        "target": "140556496568032->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496558432->84)-(140556496568032->84)",
        "source": "140556496558432->84",
        "target": "140556496568032->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496568032->212)-(140556496411936->212)",
        "source": "140556496568032->212",
        "target": "140556496411936->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496568032->210)-(140556496411936->210)",
        "source": "140556496568032->210",
        "target": "140556496411936->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496568032->84)-(140556496411936->84)",
        "source": "140556496568032->84",
        "target": "140556496411936->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411936->212)-(140556496552432->212)",
        "source": "140556496411936->212",
        "target": "140556496552432->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411936->210)-(140556496552432->210)",
        "source": "140556496411936->210",
        "target": "140556496552432->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496411936->84)-(140556496552432->84)",
        "source": "140556496411936->84",
        "target": "140556496552432->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496552432->212)-(140556496419136->212)",
        "source": "140556496552432->212",
        "target": "140556496419136->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496552432->210)-(140556496419136->210)",
        "source": "140556496552432->210",
        "target": "140556496419136->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496552432->84)-(140556496419136->61)",
        "source": "140556496552432->84",
        "target": "140556496419136->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->196)-(140556496408816->196)",
        "source": "140556496419136->196",
        "target": "140556496408816->196",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->196)-(140556478159296->211)",
        "source": "140556496419136->196",
        "target": "140556478159296->211",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->197)-(140556496408816->197)",
        "source": "140556496419136->197",
        "target": "140556496408816->197",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->198)-(140556496408816->198)",
        "source": "140556496419136->198",
        "target": "140556496408816->198",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->199)-(140556496408816->199)",
        "source": "140556496419136->199",
        "target": "140556496408816->199",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->61)-(140556496408816->61)",
        "source": "140556496419136->61",
        "target": "140556496408816->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->210)-(140556478159296->210)",
        "source": "140556496419136->210",
        "target": "140556478159296->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419136->212)-(140556478159296->212)",
        "source": "140556496419136->212",
        "target": "140556478159296->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408816->196)-(140556496408192->196)",
        "source": "140556496408816->196",
        "target": "140556496408192->196",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408816->196)-(140556478153440->204)",
        "source": "140556496408816->196",
        "target": "140556478153440->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408816->197)-(140556496408192->197)",
        "source": "140556496408816->197",
        "target": "140556496408192->197",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408816->198)-(140556496408192->198)",
        "source": "140556496408816->198",
        "target": "140556496408192->198",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408816->199)-(140556496408192->199)",
        "source": "140556496408816->199",
        "target": "140556496408192->199",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408816->61)-(140556478153440->61)",
        "source": "140556496408816->61",
        "target": "140556478153440->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478153440->204)-(140556478163808->204)",
        "source": "140556478153440->204",
        "target": "140556478163808->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163808->200)-(140556478158768->200)",
        "source": "140556478163808->200",
        "target": "140556478158768->200",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163808->201)-(140556478158768->201)",
        "source": "140556478163808->201",
        "target": "140556478158768->201",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163808->202)-(140556478158768->202)",
        "source": "140556478163808->202",
        "target": "140556478158768->202",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163808->203)-(140556478158768->203)",
        "source": "140556478163808->203",
        "target": "140556478158768->203",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478163808->204)-(140556478158768->204)",
        "source": "140556478163808->204",
        "target": "140556478158768->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419664->205)-(140556478162464->205)",
        "source": "140556496419664->205",
        "target": "140556478162464->205",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419664->206)-(140556478162464->206)",
        "source": "140556496419664->206",
        "target": "140556478162464->206",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419664->207)-(140556478162464->207)",
        "source": "140556496419664->207",
        "target": "140556478162464->207",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419664->208)-(140556478162464->208)",
        "source": "140556496419664->208",
        "target": "140556478162464->208",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496419664->209)-(140556478162464->209)",
        "source": "140556496419664->209",
        "target": "140556478162464->209",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478162464->205)-(140556496171456->205)",
        "source": "140556478162464->205",
        "target": "140556496171456->205",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478162464->206)-(140556496171456->206)",
        "source": "140556478162464->206",
        "target": "140556496171456->206",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478162464->207)-(140556496171456->207)",
        "source": "140556478162464->207",
        "target": "140556496171456->207",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478162464->208)-(140556496171456->208)",
        "source": "140556478162464->208",
        "target": "140556496171456->208",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478162464->209)-(140556496171456->209)",
        "source": "140556478162464->209",
        "target": "140556496171456->209",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478158768->200)-(140556496418608->200)",
        "source": "140556478158768->200",
        "target": "140556496418608->200",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478158768->201)-(140556496418608->201)",
        "source": "140556478158768->201",
        "target": "140556496418608->201",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478158768->202)-(140556496418608->202)",
        "source": "140556478158768->202",
        "target": "140556496418608->202",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478158768->203)-(140556496418608->203)",
        "source": "140556478158768->203",
        "target": "140556496418608->203",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556478158768->204)-(140556496418608->204)",
        "source": "140556478158768->204",
        "target": "140556496418608->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->19)-(140556496171216->19)",
        "source": "140556496405072->19",
        "target": "140556496171216->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->19)-(140556496172224->181)",
        "source": "140556496405072->19",
        "target": "140556496172224->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->16)-(140556496171216->16)",
        "source": "140556496405072->16",
        "target": "140556496171216->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->17)-(140556496171216->17)",
        "source": "140556496405072->17",
        "target": "140556496171216->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->122)-(140556496171216->122)",
        "source": "140556496405072->122",
        "target": "140556496171216->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->113)-(140556496171216->113)",
        "source": "140556496405072->113",
        "target": "140556496171216->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->35)-(140556496171216->35)",
        "source": "140556496405072->35",
        "target": "140556496171216->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496405072->61)-(140556496172224->61)",
        "source": "140556496405072->61",
        "target": "140556496172224->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496172224->181)-(140556499374176->181)",
        "source": "140556496172224->181",
        "target": "140556499374176->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496172224->61)-(140556499374176->61)",
        "source": "140556496172224->61",
        "target": "140556499374176->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499374176->181)-(140556499374560->181)",
        "source": "140556499374176->181",
        "target": "140556499374560->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499374176->61)-(140556499374560->61)",
        "source": "140556499374176->61",
        "target": "140556499374560->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499374560->181)-(140556496563616->181)",
        "source": "140556499374560->181",
        "target": "140556496563616->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499374560->61)-(140556496563616->61)",
        "source": "140556499374560->61",
        "target": "140556496563616->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496563616->181)-(140556496559872->181)",
        "source": "140556496563616->181",
        "target": "140556496559872->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496559872->177)-(140556499373264->177)",
        "source": "140556496559872->177",
        "target": "140556499373264->177",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496559872->178)-(140556499373264->178)",
        "source": "140556496559872->178",
        "target": "140556499373264->178",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496559872->179)-(140556499373264->179)",
        "source": "140556496559872->179",
        "target": "140556499373264->179",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496559872->180)-(140556499373264->180)",
        "source": "140556496559872->180",
        "target": "140556499373264->180",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496559872->181)-(140556499373264->181)",
        "source": "140556496559872->181",
        "target": "140556499373264->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499385744->182)-(140556496556704->182)",
        "source": "140556499385744->182",
        "target": "140556496556704->182",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499385744->183)-(140556496556704->183)",
        "source": "140556499385744->183",
        "target": "140556496556704->183",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499385744->184)-(140556496556704->184)",
        "source": "140556499385744->184",
        "target": "140556496556704->184",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499385744->185)-(140556496556704->185)",
        "source": "140556499385744->185",
        "target": "140556496556704->185",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499385744->186)-(140556496556704->186)",
        "source": "140556499385744->186",
        "target": "140556496556704->186",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496556704->182)-(140556496413760->182)",
        "source": "140556496556704->182",
        "target": "140556496413760->182",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496556704->183)-(140556496413760->183)",
        "source": "140556496556704->183",
        "target": "140556496413760->183",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496556704->184)-(140556496413760->184)",
        "source": "140556496556704->184",
        "target": "140556496413760->184",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496556704->185)-(140556496413760->185)",
        "source": "140556496556704->185",
        "target": "140556496413760->185",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496556704->186)-(140556496413760->186)",
        "source": "140556496556704->186",
        "target": "140556496413760->186",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499373264->177)-(140556496419376->177)",
        "source": "140556499373264->177",
        "target": "140556496419376->177",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499373264->178)-(140556496419376->178)",
        "source": "140556499373264->178",
        "target": "140556496419376->178",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499373264->179)-(140556496419376->179)",
        "source": "140556499373264->179",
        "target": "140556496419376->179",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499373264->180)-(140556496419376->180)",
        "source": "140556499373264->180",
        "target": "140556496419376->180",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499373264->181)-(140556496419376->181)",
        "source": "140556499373264->181",
        "target": "140556496419376->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171216->16)-(140556496412128->16)",
        "source": "140556496171216->16",
        "target": "140556496412128->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171216->17)-(140556496412128->17)",
        "source": "140556496171216->17",
        "target": "140556496412128->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171216->19)-(140556496412128->19)",
        "source": "140556496171216->19",
        "target": "140556496412128->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171216->122)-(140556496412128->122)",
        "source": "140556496171216->122",
        "target": "140556496412128->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171216->113)-(140556496412128->113)",
        "source": "140556496171216->113",
        "target": "140556496412128->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496171216->35)-(140556496412128->35)",
        "source": "140556496171216->35",
        "target": "140556496412128->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->19)-(140556496164832->19)",
        "source": "140556496412128->19",
        "target": "140556496164832->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->19)-(140556496408480->114)",
        "source": "140556496412128->19",
        "target": "140556496408480->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->15)-(140556496164832->15)",
        "source": "140556496412128->15",
        "target": "140556496164832->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->16)-(140556496164832->16)",
        "source": "140556496412128->16",
        "target": "140556496164832->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->17)-(140556496164832->17)",
        "source": "140556496412128->17",
        "target": "140556496164832->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->18)-(140556496164832->18)",
        "source": "140556496412128->18",
        "target": "140556496164832->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->35)-(140556496408480->35)",
        "source": "140556496412128->35",
        "target": "140556496408480->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->40)-(140556496408480->40)",
        "source": "140556496412128->40",
        "target": "140556496408480->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->109)-(140556496408480->109)",
        "source": "140556496412128->109",
        "target": "140556496408480->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->113)-(140556496408480->113)",
        "source": "140556496412128->113",
        "target": "140556496408480->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->122)-(140556496408480->122)",
        "source": "140556496412128->122",
        "target": "140556496408480->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->123)-(140556496408480->123)",
        "source": "140556496412128->123",
        "target": "140556496408480->123",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496412128->124)-(140556496408480->124)",
        "source": "140556496412128->124",
        "target": "140556496408480->124",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->114)-(140556496410880->114)",
        "source": "140556496408480->114",
        "target": "140556496410880->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->114)-(140556496166896->121)",
        "source": "140556496408480->114",
        "target": "140556496166896->121",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->35)-(140556496410880->35)",
        "source": "140556496408480->35",
        "target": "140556496410880->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->40)-(140556496410880->40)",
        "source": "140556496408480->40",
        "target": "140556496410880->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->109)-(140556496410880->109)",
        "source": "140556496408480->109",
        "target": "140556496410880->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->113)-(140556496410880->113)",
        "source": "140556496408480->113",
        "target": "140556496410880->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->122)-(140556496166896->122)",
        "source": "140556496408480->122",
        "target": "140556496166896->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->123)-(140556496166896->123)",
        "source": "140556496408480->123",
        "target": "140556496166896->123",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408480->124)-(140556496166896->124)",
        "source": "140556496408480->124",
        "target": "140556496166896->124",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496410880->35)-(140556496173184->35)",
        "source": "140556496410880->35",
        "target": "140556496173184->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496410880->35)-(140556496409392->115)",
        "source": "140556496410880->35",
        "target": "140556496409392->115",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496410880->40)-(140556496173184->40)",
        "source": "140556496410880->40",
        "target": "140556496173184->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496410880->109)-(140556496173184->109)",
        "source": "140556496410880->109",
        "target": "140556496173184->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496410880->113)-(140556496409392->113)",
        "source": "140556496410880->113",
        "target": "140556496409392->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496410880->114)-(140556496409392->114)",
        "source": "140556496410880->114",
        "target": "140556496409392->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496173184->40)-(140556496408960->40)",
        "source": "140556496173184->40",
        "target": "140556496408960->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496173184->35)-(140556496408960->35)",
        "source": "140556496173184->35",
        "target": "140556496408960->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496173184->109)-(140556496408960->109)",
        "source": "140556496173184->109",
        "target": "140556496408960->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408960->40)-(140556496415440->40)",
        "source": "140556496408960->40",
        "target": "140556496415440->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408960->35)-(140556496415440->35)",
        "source": "140556496408960->35",
        "target": "140556496415440->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496408960->109)-(140556496415440->84)",
        "source": "140556496408960->109",
        "target": "140556496415440->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->35)-(140556496420240->35)",
        "source": "140556496415440->35",
        "target": "140556496420240->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->35)-(140556499375040->39)",
        "source": "140556496415440->35",
        "target": "140556499375040->39",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->33)-(140556496420240->33)",
        "source": "140556496415440->33",
        "target": "140556496420240->33",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->34)-(140556496420240->34)",
        "source": "140556496415440->34",
        "target": "140556496420240->34",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->88)-(140556496420240->88)",
        "source": "140556496415440->88",
        "target": "140556496420240->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->84)-(140556496420240->84)",
        "source": "140556496415440->84",
        "target": "140556496420240->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496415440->40)-(140556499375040->40)",
        "source": "140556496415440->40",
        "target": "140556499375040->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420240->35)-(140556496172896->35)",
        "source": "140556496420240->35",
        "target": "140556496172896->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420240->35)-(140556496418560->90)",
        "source": "140556496420240->35",
        "target": "140556496418560->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420240->33)-(140556496172896->33)",
        "source": "140556496420240->33",
        "target": "140556496172896->33",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420240->34)-(140556496172896->34)",
        "source": "140556496420240->34",
        "target": "140556496172896->34",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420240->88)-(140556496418560->88)",
        "source": "140556496420240->88",
        "target": "140556496418560->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420240->84)-(140556496418560->84)",
        "source": "140556496420240->84",
        "target": "140556496418560->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496418560->90)-(140556496416688->90)",
        "source": "140556496418560->90",
        "target": "140556496416688->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496418560->88)-(140556496416688->88)",
        "source": "140556496418560->88",
        "target": "140556496416688->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496418560->84)-(140556496416688->61)",
        "source": "140556496418560->84",
        "target": "140556496416688->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->25)-(140556496166512->25)",
        "source": "140556496416688->25",
        "target": "140556496166512->25",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->25)-(140556497518848->89)",
        "source": "140556496416688->25",
        "target": "140556497518848->89",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->26)-(140556496166512->26)",
        "source": "140556496416688->26",
        "target": "140556496166512->26",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->27)-(140556496166512->27)",
        "source": "140556496416688->27",
        "target": "140556496166512->27",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->28)-(140556496166512->28)",
        "source": "140556496416688->28",
        "target": "140556496166512->28",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->61)-(140556496166512->61)",
        "source": "140556496416688->61",
        "target": "140556496166512->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->88)-(140556497518848->88)",
        "source": "140556496416688->88",
        "target": "140556497518848->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496416688->90)-(140556497518848->90)",
        "source": "140556496416688->90",
        "target": "140556497518848->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496166512->25)-(140556496555024->25)",
        "source": "140556496166512->25",
        "target": "140556496555024->25",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496166512->25)-(140556499377392->137)",
        "source": "140556496166512->25",
        "target": "140556499377392->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496166512->26)-(140556496555024->26)",
        "source": "140556496166512->26",
        "target": "140556496555024->26",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496166512->27)-(140556496555024->27)",
        "source": "140556496166512->27",
        "target": "140556496555024->27",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496166512->28)-(140556496555024->28)",
        "source": "140556496166512->28",
        "target": "140556496555024->28",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496166512->61)-(140556499377392->61)",
        "source": "140556496166512->61",
        "target": "140556499377392->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499377392->137)-(140556496160224->137)",
        "source": "140556499377392->137",
        "target": "140556496160224->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496160224->133)-(140556496555504->133)",
        "source": "140556496160224->133",
        "target": "140556496555504->133",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496160224->134)-(140556496555504->134)",
        "source": "140556496160224->134",
        "target": "140556496555504->134",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496160224->135)-(140556496555504->135)",
        "source": "140556496160224->135",
        "target": "140556496555504->135",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496160224->136)-(140556496555504->136)",
        "source": "140556496160224->136",
        "target": "140556496555504->136",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496160224->137)-(140556496555504->137)",
        "source": "140556496160224->137",
        "target": "140556496555504->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420816->138)-(140556496164736->138)",
        "source": "140556496420816->138",
        "target": "140556496164736->138",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420816->139)-(140556496164736->139)",
        "source": "140556496420816->139",
        "target": "140556496164736->139",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420816->140)-(140556496164736->140)",
        "source": "140556496420816->140",
        "target": "140556496164736->140",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420816->141)-(140556496164736->141)",
        "source": "140556496420816->141",
        "target": "140556496164736->141",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496420816->142)-(140556496164736->142)",
        "source": "140556496420816->142",
        "target": "140556496164736->142",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164736->138)-(140556478168704->138)",
        "source": "140556496164736->138",
        "target": "140556478168704->138",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164736->139)-(140556478168704->139)",
        "source": "140556496164736->139",
        "target": "140556478168704->139",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164736->140)-(140556478168704->140)",
        "source": "140556496164736->140",
        "target": "140556478168704->140",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164736->141)-(140556478168704->141)",
        "source": "140556496164736->141",
        "target": "140556478168704->141",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164736->142)-(140556478168704->142)",
        "source": "140556496164736->142",
        "target": "140556478168704->142",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496555504->133)-(140556478166112->133)",
        "source": "140556496555504->133",
        "target": "140556478166112->133",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496555504->134)-(140556478166112->134)",
        "source": "140556496555504->134",
        "target": "140556478166112->134",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496555504->135)-(140556478166112->135)",
        "source": "140556496555504->135",
        "target": "140556478166112->135",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496555504->136)-(140556478166112->136)",
        "source": "140556496555504->136",
        "target": "140556478166112->136",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496555504->137)-(140556478166112->137)",
        "source": "140556496555504->137",
        "target": "140556478166112->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164832->15)-(140556499372112->15)",
        "source": "140556496164832->15",
        "target": "140556499372112->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164832->16)-(140556499372112->16)",
        "source": "140556496164832->16",
        "target": "140556499372112->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164832->17)-(140556499372112->17)",
        "source": "140556496164832->17",
        "target": "140556499372112->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164832->18)-(140556499372112->18)",
        "source": "140556496164832->18",
        "target": "140556499372112->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496164832->19)-(140556499372112->19)",
        "source": "140556496164832->19",
        "target": "140556499372112->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499376960->44)-(140556496167904->44)",
        "source": "140556499376960->44",
        "target": "140556496167904->44",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499376960->45)-(140556496167904->45)",
        "source": "140556499376960->45",
        "target": "140556496167904->45",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499376960->46)-(140556496167904->46)",
        "source": "140556499376960->46",
        "target": "140556496167904->46",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499376960->47)-(140556496167904->47)",
        "source": "140556499376960->47",
        "target": "140556496167904->47",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499376960->48)-(140556496167904->48)",
        "source": "140556499376960->48",
        "target": "140556496167904->48",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167904->44)-(140556496162096->44)",
        "source": "140556496167904->44",
        "target": "140556496162096->44",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167904->45)-(140556496162096->45)",
        "source": "140556496167904->45",
        "target": "140556496162096->45",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167904->46)-(140556496162096->46)",
        "source": "140556496167904->46",
        "target": "140556496162096->46",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167904->47)-(140556496162096->47)",
        "source": "140556496167904->47",
        "target": "140556496162096->47",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556496167904->48)-(140556496162096->48)",
        "source": "140556496167904->48",
        "target": "140556496162096->48",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499372112->15)-(140556478165968->15)",
        "source": "140556499372112->15",
        "target": "140556478165968->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499372112->16)-(140556478165968->16)",
        "source": "140556499372112->16",
        "target": "140556478165968->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499372112->17)-(140556478165968->17)",
        "source": "140556499372112->17",
        "target": "140556478165968->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499372112->18)-(140556478165968->18)",
        "source": "140556499372112->18",
        "target": "140556478165968->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(140556499372112->19)-(140556478165968->19)",
        "source": "140556499372112->19",
        "target": "140556478165968->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    }
];
