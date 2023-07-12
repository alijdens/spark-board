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
    "animationEnabledOnDrag": true
};

const model_initialNodes = [
    {
        "id": "140162361087392",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "140162361087392->35",
                "140162361087392->113",
                "140162361087392->19",
                "140162361087392->16",
                "140162361087392->17",
                "140162361087392->122",
                "140162361087392->61",
                "140162361087392->198",
                "140162361087392->84",
                "140162361087392->231",
                "140162361087392->109",
                "140162361087392->245",
                "140162361087392->258",
                "140162361087392->272"
            ]
        }
    },
    {
        "id": "140162361083168",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "140162361083168->35",
                "140162361083168->113",
                "140162361083168->19",
                "140162361083168->16",
                "140162361083168->17",
                "140162361083168->122",
                "140162361083168->61",
                "140162361083168->198",
                "140162361083168->84",
                "140162361083168->231",
                "140162361083168->109",
                "140162361083168->245",
                "140162361083168->258"
            ]
        }
    },
    {
        "id": "140162361201504",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "140162361201504->35",
                "140162361201504->113",
                "140162361201504->19",
                "140162361201504->16",
                "140162361201504->17",
                "140162361201504->122",
                "140162361201504->61",
                "140162361201504->198",
                "140162361201504->84",
                "140162361201504->231",
                "140162361201504->109",
                "140162361201504->245"
            ]
        }
    },
    {
        "id": "140162554689568",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "column_ids": [
                        35,
                        212
                    ],
                    "tree_string": "(continent#35 = continent#212)\n:- continent#35: string\n+- continent#212: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n"
            },
            "columns": [
                "140162554689568->35",
                "140162554689568->113",
                "140162554689568->19",
                "140162554689568->16",
                "140162554689568->17",
                "140162554689568->122",
                "140162554689568->61",
                "140162554689568->198",
                "140162554689568->84",
                "140162554689568->231",
                "140162554689568->109"
            ]
        }
    },
    {
        "id": "140162361971840",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140162361971840->231",
                "140162361971840->212",
                "140162361971840->109"
            ]
        }
    },
    {
        "id": "140162361202992",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140162361202992->231",
                "140162361202992->212",
                "140162361202992->109"
            ]
        }
    },
    {
        "id": "140162361208656",
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
                "140162361208656->231",
                "140162361208656->212",
                "140162361208656->109"
            ]
        }
    },
    {
        "id": "140162362155424",
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
                "140162362155424->231",
                "140162362155424->212",
                "140162362155424->109"
            ]
        }
    },
    {
        "id": "140162361085712",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "column_ids": [
                        212,
                        230
                    ],
                    "tree_string": "(continent#212 = continent#230)\n:- continent#212: string\n+- continent#230: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n"
            },
            "columns": [
                "140162361085712->212",
                "140162361085712->210",
                "140162361085712->211",
                "140162361085712->227",
                "140162361085712->84",
                "140162361085712->231"
            ]
        }
    },
    {
        "id": "140162361207024",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361207024->230",
                "140162361207024->231"
            ]
        }
    },
    {
        "id": "140162361084704",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "column_ids": [
                        212,
                        229
                    ],
                    "tree_string": "(continent#212 = continent#229)\n:- continent#212: string\n+- continent#229: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140162361084704->212",
                "140162361084704->210",
                "140162361084704->211",
                "140162361084704->227",
                "140162361084704->84"
            ]
        }
    },
    {
        "id": "140162361198096",
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
                "140162361198096->229",
                "140162361198096->227",
                "140162361198096->84"
            ]
        }
    },
    {
        "id": "140162361085280",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "column_ids": [
                        213,
                        228
                    ],
                    "tree_string": "(city#213 = city#228)\n:- city#213: string\n+- city#228: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140162361085280->213",
                "140162361085280->214",
                "140162361085280->215",
                "140162361085280->216",
                "140162361085280->61",
                "140162361085280->227",
                "140162361085280->229"
            ]
        }
    },
    {
        "id": "140162361202368",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361202368->227",
                "140162361202368->228",
                "140162361202368->229"
            ]
        }
    },
    {
        "id": "140162361093008",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "column_ids": [
                        213,
                        221
                    ],
                    "tree_string": "(city#213 = city#221)\n:- city#213: string\n+- city#221: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140162361093008->213",
                "140162361093008->214",
                "140162361093008->215",
                "140162361093008->216",
                "140162361093008->61"
            ]
        }
    },
    {
        "id": "140162361206208",
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
                "140162361206208->221",
                "140162361206208->61"
            ]
        }
    },
    {
        "id": "140162361198432",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162361198432->217",
                "140162361198432->218",
                "140162361198432->219",
                "140162361198432->220",
                "140162361198432->221"
            ]
        }
    },
    {
        "id": "140162361206352",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162361206352->222",
                "140162361206352->223",
                "140162361206352->224",
                "140162361206352->225",
                "140162361206352->226"
            ]
        }
    },
    {
        "id": "140162361206112",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140162361206112->222",
                "140162361206112->223",
                "140162361206112->224",
                "140162361206112->225",
                "140162361206112->226"
            ]
        }
    },
    {
        "id": "140162361197520",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162361197520->222",
                "140162361197520->223",
                "140162361197520->224",
                "140162361197520->225",
                "140162361197520->226"
            ]
        }
    },
    {
        "id": "140162361211152",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162361211152->222",
                "140162361211152->223",
                "140162361211152->224",
                "140162361211152->225",
                "140162361211152->226"
            ]
        }
    },
    {
        "id": "140162362137648",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140162362137648->217",
                "140162362137648->218",
                "140162362137648->219",
                "140162362137648->220",
                "140162362137648->221"
            ]
        }
    },
    {
        "id": "140162361205008",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162361205008->217",
                "140162361205008->218",
                "140162361205008->219",
                "140162361205008->220",
                "140162361205008->221"
            ]
        }
    },
    {
        "id": "140162361203952",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162361203952->217",
                "140162361203952->218",
                "140162361203952->219",
                "140162361203952->220",
                "140162361203952->221"
            ]
        }
    },
    {
        "id": "140162361196704",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361196704->213",
                "140162361196704->214",
                "140162361196704->215",
                "140162361196704->216"
            ]
        }
    },
    {
        "id": "140162362140720",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162362140720->210",
                "140162362140720->211",
                "140162362140720->212"
            ]
        }
    },
    {
        "id": "140162362151440",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(country = country)",
                    "column_ids": [
                        113,
                        196
                    ],
                    "tree_string": "(country#113 = country#196)\n:- country#113: string\n+- country#196: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140162362151440->113",
                "140162362151440->19",
                "140162362151440->16",
                "140162362151440->17",
                "140162362151440->122",
                "140162362151440->35",
                "140162362151440->61",
                "140162362151440->198",
                "140162362151440->84"
            ]
        }
    },
    {
        "id": "140162361090464",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140162361090464->198",
                "140162361090464->196",
                "140162361090464->84"
            ]
        }
    },
    {
        "id": "140162361082496",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140162361082496->198",
                "140162361082496->196",
                "140162361082496->84"
            ]
        }
    },
    {
        "id": "140162361086144",
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
                "140162361086144->198",
                "140162361086144->196",
                "140162361086144->84"
            ]
        }
    },
    {
        "id": "140162361088208",
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
                "140162361088208->198",
                "140162361088208->196",
                "140162361088208->84"
            ]
        }
    },
    {
        "id": "140162361082544",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "column_ids": [
                        182,
                        197
                    ],
                    "tree_string": "(city#182 = city#197)\n:- city#182: string\n+- city#197: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140162361082544->182",
                "140162361082544->183",
                "140162361082544->184",
                "140162361082544->185",
                "140162361082544->61",
                "140162361082544->196",
                "140162361082544->198"
            ]
        }
    },
    {
        "id": "140162362137456",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162362137456->196",
                "140162362137456->197",
                "140162362137456->198"
            ]
        }
    },
    {
        "id": "140162361092048",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "column_ids": [
                        182,
                        190
                    ],
                    "tree_string": "(city#182 = city#190)\n:- city#182: string\n+- city#190: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140162361092048->182",
                "140162361092048->183",
                "140162361092048->184",
                "140162361092048->185",
                "140162361092048->61"
            ]
        }
    },
    {
        "id": "140162362159840",
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
                "140162362159840->190",
                "140162362159840->61"
            ]
        }
    },
    {
        "id": "140162362008064",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162362008064->186",
                "140162362008064->187",
                "140162362008064->188",
                "140162362008064->189",
                "140162362008064->190"
            ]
        }
    },
    {
        "id": "140162361086384",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162361086384->191",
                "140162361086384->192",
                "140162361086384->193",
                "140162361086384->194",
                "140162361086384->195"
            ]
        }
    },
    {
        "id": "140162362010368",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140162362010368->191",
                "140162362010368->192",
                "140162362010368->193",
                "140162362010368->194",
                "140162362010368->195"
            ]
        }
    },
    {
        "id": "140162361972464",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162361972464->191",
                "140162361972464->192",
                "140162361972464->193",
                "140162361972464->194",
                "140162361972464->195"
            ]
        }
    },
    {
        "id": "140162362003024",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162362003024->191",
                "140162362003024->192",
                "140162362003024->193",
                "140162362003024->194",
                "140162362003024->195"
            ]
        }
    },
    {
        "id": "140162361999472",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140162361999472->186",
                "140162361999472->187",
                "140162361999472->188",
                "140162361999472->189",
                "140162361999472->190"
            ]
        }
    },
    {
        "id": "140162361095120",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162361095120->186",
                "140162361095120->187",
                "140162361095120->188",
                "140162361095120->189",
                "140162361095120->190"
            ]
        }
    },
    {
        "id": "140162362000768",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162362000768->186",
                "140162362000768->187",
                "140162362000768->188",
                "140162362000768->189",
                "140162362000768->190"
            ]
        }
    },
    {
        "id": "140162361094544",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361094544->182",
                "140162361094544->183",
                "140162361094544->184",
                "140162361094544->185"
            ]
        }
    },
    {
        "id": "140162361087536",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(spark_catalog.default.people.city = spark_catalog.default.people.city)",
                    "column_ids": [
                        19,
                        167
                    ],
                    "tree_string": "(city#19 = city#167)\n:- city#19: string\n+- city#167: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140162361087536->19",
                "140162361087536->16",
                "140162361087536->17",
                "140162361087536->122",
                "140162361087536->113",
                "140162361087536->35",
                "140162361087536->61"
            ]
        }
    },
    {
        "id": "140162362151344",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140162362151344->167",
                "140162362151344->61"
            ]
        }
    },
    {
        "id": "140162362153648",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140162362153648->167",
                "140162362153648->61"
            ]
        }
    },
    {
        "id": "140162362158448",
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
                "140162362158448->167",
                "140162362158448->61"
            ]
        }
    },
    {
        "id": "140162362140096",
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
                "140162362140096->167",
                "140162362140096->61"
            ]
        }
    },
    {
        "id": "140162362139328",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162362139328->163",
                "140162362139328->164",
                "140162362139328->165",
                "140162362139328->166",
                "140162362139328->167"
            ]
        }
    },
    {
        "id": "140162362155568",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162362155568->168",
                "140162362155568->169",
                "140162362155568->170",
                "140162362155568->171",
                "140162362155568->172"
            ]
        }
    },
    {
        "id": "140162361197040",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140162361197040->168",
                "140162361197040->169",
                "140162361197040->170",
                "140162361197040->171",
                "140162361197040->172"
            ]
        }
    },
    {
        "id": "140162362158736",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162362158736->168",
                "140162362158736->169",
                "140162362158736->170",
                "140162362158736->171",
                "140162362158736->172"
            ]
        }
    },
    {
        "id": "140162361198000",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162361198000->168",
                "140162361198000->169",
                "140162361198000->170",
                "140162361198000->171",
                "140162361198000->172"
            ]
        }
    },
    {
        "id": "140162362139616",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140162362139616->163",
                "140162362139616->164",
                "140162362139616->165",
                "140162362139616->166",
                "140162362139616->167"
            ]
        }
    },
    {
        "id": "140162362151824",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162362151824->163",
                "140162362151824->164",
                "140162362151824->165",
                "140162362151824->166",
                "140162362151824->167"
            ]
        }
    },
    {
        "id": "140162362138128",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162362138128->163",
                "140162362138128->164",
                "140162362138128->165",
                "140162362138128->166",
                "140162362138128->167"
            ]
        }
    },
    {
        "id": "140162362000384",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140162362000384->16",
                "140162362000384->17",
                "140162362000384->19",
                "140162362000384->122",
                "140162362000384->113",
                "140162362000384->35"
            ]
        }
    },
    {
        "id": "140162361092480",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(spark_catalog.default.people.city = city)",
                    "column_ids": [
                        19,
                        114
                    ],
                    "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n"
                },
                "join_type": "Inner",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n"
            },
            "columns": [
                "140162361092480->19",
                "140162361092480->15",
                "140162361092480->16",
                "140162361092480->17",
                "140162361092480->18",
                "140162361092480->35",
                "140162361092480->40",
                "140162361092480->109",
                "140162361092480->113",
                "140162361092480->122",
                "140162361092480->123",
                "140162361092480->124"
            ]
        }
    },
    {
        "id": "140162361086528",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "column_ids": [
                        114,
                        121
                    ],
                    "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n"
            },
            "columns": [
                "140162361086528->114",
                "140162361086528->35",
                "140162361086528->40",
                "140162361086528->109",
                "140162361086528->113",
                "140162361086528->122",
                "140162361086528->123",
                "140162361086528->124"
            ]
        }
    },
    {
        "id": "140162361088256",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361088256->121",
                "140162361088256->122",
                "140162361088256->123",
                "140162361088256->124"
            ]
        }
    },
    {
        "id": "140162361085088",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "column_ids": [
                        35,
                        115
                    ],
                    "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162361085088->35",
                "140162361085088->40",
                "140162361085088->109",
                "140162361085088->113",
                "140162361085088->114"
            ]
        }
    },
    {
        "id": "140162362156816",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162362156816->113",
                "140162362156816->114",
                "140162362156816->115"
            ]
        }
    },
    {
        "id": "140162361096752",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "140162361096752->40",
                "140162361096752->35",
                "140162361096752->109"
            ]
        }
    },
    {
        "id": "140162362008880",
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
                "140162362008880->40",
                "140162362008880->35",
                "140162362008880->109"
            ]
        }
    },
    {
        "id": "140162361088112",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "column_ids": [
                        35,
                        39
                    ],
                    "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n"
            },
            "columns": [
                "140162361088112->35",
                "140162361088112->33",
                "140162361088112->34",
                "140162361088112->88",
                "140162361088112->84",
                "140162361088112->40"
            ]
        }
    },
    {
        "id": "140162361096224",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361096224->39",
                "140162361096224->40"
            ]
        }
    },
    {
        "id": "140162361084464",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "column_ids": [
                        35,
                        90
                    ],
                    "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140162361084464->35",
                "140162361084464->33",
                "140162361084464->34",
                "140162361084464->88",
                "140162361084464->84"
            ]
        }
    },
    {
        "id": "140162362001584",
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
                "140162362001584->90",
                "140162362001584->88",
                "140162362001584->84"
            ]
        }
    },
    {
        "id": "140162361086768",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "column_ids": [
                        25,
                        89
                    ],
                    "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140162361086768->25",
                "140162361086768->26",
                "140162361086768->27",
                "140162361086768->28",
                "140162361086768->61",
                "140162361086768->88",
                "140162361086768->90"
            ]
        }
    },
    {
        "id": "140162361094976",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361094976->88",
                "140162361094976->89",
                "140162361094976->90"
            ]
        }
    },
    {
        "id": "140162361087728",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "column_ids": [
                        25,
                        137
                    ],
                    "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n"
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140162361087728->25",
                "140162361087728->26",
                "140162361087728->27",
                "140162361087728->28",
                "140162361087728->61"
            ]
        }
    },
    {
        "id": "140162361089504",
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
                "140162361089504->137",
                "140162361089504->61"
            ]
        }
    },
    {
        "id": "140162362000000",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162362000000->133",
                "140162362000000->134",
                "140162362000000->135",
                "140162362000000->136",
                "140162362000000->137"
            ]
        }
    },
    {
        "id": "140162361094496",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162361094496->138",
                "140162361094496->139",
                "140162361094496->140",
                "140162361094496->141",
                "140162361094496->142"
            ]
        }
    },
    {
        "id": "140162361097760",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140162361097760->138",
                "140162361097760->139",
                "140162361097760->140",
                "140162361097760->141",
                "140162361097760->142"
            ]
        }
    },
    {
        "id": "140162361095552",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162361095552->138",
                "140162361095552->139",
                "140162361095552->140",
                "140162361095552->141",
                "140162361095552->142"
            ]
        }
    },
    {
        "id": "140162362007296",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162362007296->138",
                "140162362007296->139",
                "140162362007296->140",
                "140162362007296->141",
                "140162362007296->142"
            ]
        }
    },
    {
        "id": "140162361089168",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140162361089168->133",
                "140162361089168->134",
                "140162361089168->135",
                "140162361089168->136",
                "140162361089168->137"
            ]
        }
    },
    {
        "id": "140162361085568",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162361085568->133",
                "140162361085568->134",
                "140162361085568->135",
                "140162361085568->136",
                "140162361085568->137"
            ]
        }
    },
    {
        "id": "140162361096512",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162361096512->133",
                "140162361096512->134",
                "140162361096512->135",
                "140162361096512->136",
                "140162361096512->137"
            ]
        }
    },
    {
        "id": "140162361090272",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361090272->25",
                "140162361090272->26",
                "140162361090272->27",
                "140162361090272->28"
            ]
        }
    },
    {
        "id": "140162361880784",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140162361880784->33",
                "140162361880784->34",
                "140162361880784->35"
            ]
        }
    },
    {
        "id": "140162362006480",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162362006480->15",
                "140162362006480->16",
                "140162362006480->17",
                "140162362006480->18",
                "140162362006480->19"
            ]
        }
    },
    {
        "id": "140162362155040",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140162362155040->44",
                "140162362155040->45",
                "140162362155040->46",
                "140162362155040->47",
                "140162362155040->48"
            ]
        }
    },
    {
        "id": "140162362003504",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140162362003504->44",
                "140162362003504->45",
                "140162362003504->46",
                "140162362003504->47",
                "140162362003504->48"
            ]
        }
    },
    {
        "id": "140162362150288",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162362150288->44",
                "140162362150288->45",
                "140162362150288->46",
                "140162362150288->47",
                "140162362150288->48"
            ]
        }
    },
    {
        "id": "140162362011472",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162362011472->44",
                "140162362011472->45",
                "140162362011472->46",
                "140162362011472->47",
                "140162362011472->48"
            ]
        }
    },
    {
        "id": "140162362153552",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140162362153552->15",
                "140162362153552->16",
                "140162362153552->17",
                "140162362153552->18",
                "140162362153552->19"
            ]
        }
    },
    {
        "id": "140162362159216",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140162362159216->15",
                "140162362159216->16",
                "140162362159216->17",
                "140162362159216->18",
                "140162362159216->19"
            ]
        }
    },
    {
        "id": "140162362154896",
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
                "storage": "Storage(Location: file:/tmp/tmpg_mmsnm1/spark-warehouse/people)"
            },
            "columns": [
                "140162362154896->15",
                "140162362154896->16",
                "140162362154896->17",
                "140162362154896->18",
                "140162362154896->19"
            ]
        }
    },
    {
        "id": "140162361087392->35",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162361083168->35"
            ]
        }
    },
    {
        "id": "140162361087392->113",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162361083168->113"
            ]
        }
    },
    {
        "id": "140162361087392->19",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162361083168->19"
            ]
        }
    },
    {
        "id": "140162361087392->16",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162361083168->16"
            ]
        }
    },
    {
        "id": "140162361087392->17",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162361083168->17"
            ]
        }
    },
    {
        "id": "140162361087392->122",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162361083168->122"
            ]
        }
    },
    {
        "id": "140162361087392->61",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361083168->61"
            ]
        }
    },
    {
        "id": "140162361087392->198",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361083168->198"
            ]
        }
    },
    {
        "id": "140162361087392->84",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361083168->84"
            ]
        }
    },
    {
        "id": "140162361087392->231",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361083168->231"
            ]
        }
    },
    {
        "id": "140162361087392->109",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361083168->109"
            ]
        }
    },
    {
        "id": "140162361087392->245",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#245: boolean\n",
            "linked_columns": [
                "140162361083168->245"
            ]
        }
    },
    {
        "id": "140162361087392->258",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 258,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#258: boolean\n",
            "linked_columns": [
                "140162361083168->258"
            ]
        }
    },
    {
        "id": "140162361087392->272",
        "type": "column",
        "parentNode": "140162361087392",
        "expandParent": true,
        "data": {
            "id": 272,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#272\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140162361083168->109"
            ]
        }
    },
    {
        "id": "140162361083168->35",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162361201504->35"
            ]
        }
    },
    {
        "id": "140162361083168->113",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162361201504->113"
            ]
        }
    },
    {
        "id": "140162361083168->19",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162361201504->19"
            ]
        }
    },
    {
        "id": "140162361083168->16",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162361201504->16"
            ]
        }
    },
    {
        "id": "140162361083168->17",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162361201504->17"
            ]
        }
    },
    {
        "id": "140162361083168->122",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162361201504->122"
            ]
        }
    },
    {
        "id": "140162361083168->61",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361201504->61"
            ]
        }
    },
    {
        "id": "140162361083168->198",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361201504->198"
            ]
        }
    },
    {
        "id": "140162361083168->84",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361201504->84"
            ]
        }
    },
    {
        "id": "140162361083168->231",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361201504->231"
            ]
        }
    },
    {
        "id": "140162361083168->109",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361201504->109"
            ]
        }
    },
    {
        "id": "140162361083168->245",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#245: boolean\n",
            "linked_columns": [
                "140162361201504->245"
            ]
        }
    },
    {
        "id": "140162361083168->258",
        "type": "column",
        "parentNode": "140162361083168",
        "expandParent": true,
        "data": {
            "id": 258,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#258\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140162361201504->84"
            ]
        }
    },
    {
        "id": "140162361201504->35",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162361212688->35"
            ]
        }
    },
    {
        "id": "140162361201504->113",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162361212688->113"
            ]
        }
    },
    {
        "id": "140162361201504->19",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162361212688->19"
            ]
        }
    },
    {
        "id": "140162361201504->16",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162361212688->16"
            ]
        }
    },
    {
        "id": "140162361201504->17",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162361212688->17"
            ]
        }
    },
    {
        "id": "140162361201504->122",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162361212688->122"
            ]
        }
    },
    {
        "id": "140162361201504->61",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361212688->61"
            ]
        }
    },
    {
        "id": "140162361201504->198",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361212688->198"
            ]
        }
    },
    {
        "id": "140162361201504->84",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361212688->84"
            ]
        }
    },
    {
        "id": "140162361201504->231",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361212688->231"
            ]
        }
    },
    {
        "id": "140162361201504->109",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361212688->109"
            ]
        }
    },
    {
        "id": "140162361201504->245",
        "type": "column",
        "parentNode": "140162361201504",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#245\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140162361212688->61"
            ]
        }
    },
    {
        "id": "140162554689568->35",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#212)\n:- continent#35: string\n+- continent#212: string\n",
            "linked_columns": [
                "140162361087296->35",
                "140162361971840->212"
            ]
        }
    },
    {
        "id": "140162554689568->113",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162361087296->113"
            ]
        }
    },
    {
        "id": "140162554689568->19",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162361087296->19"
            ]
        }
    },
    {
        "id": "140162554689568->16",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162361087296->16"
            ]
        }
    },
    {
        "id": "140162554689568->17",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162361087296->17"
            ]
        }
    },
    {
        "id": "140162554689568->122",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162361087296->122"
            ]
        }
    },
    {
        "id": "140162554689568->61",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361087296->61"
            ]
        }
    },
    {
        "id": "140162554689568->198",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361087296->198"
            ]
        }
    },
    {
        "id": "140162554689568->84",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361087296->84"
            ]
        }
    },
    {
        "id": "140162554689568->231",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361971840->231"
            ]
        }
    },
    {
        "id": "140162554689568->109",
        "type": "column",
        "parentNode": "140162554689568",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361971840->109"
            ]
        }
    },
    {
        "id": "140162361971840->231",
        "type": "column",
        "parentNode": "140162361971840",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361202992->231"
            ]
        }
    },
    {
        "id": "140162361971840->212",
        "type": "column",
        "parentNode": "140162361971840",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140162361202992->212"
            ]
        }
    },
    {
        "id": "140162361971840->109",
        "type": "column",
        "parentNode": "140162361971840",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361202992->109"
            ]
        }
    },
    {
        "id": "140162361202992->231",
        "type": "column",
        "parentNode": "140162361202992",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361208656->231"
            ]
        }
    },
    {
        "id": "140162361202992->212",
        "type": "column",
        "parentNode": "140162361202992",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140162361208656->212"
            ]
        }
    },
    {
        "id": "140162361202992->109",
        "type": "column",
        "parentNode": "140162361202992",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361208656->109"
            ]
        }
    },
    {
        "id": "140162361208656->231",
        "type": "column",
        "parentNode": "140162361208656",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162362155424->231"
            ]
        }
    },
    {
        "id": "140162361208656->212",
        "type": "column",
        "parentNode": "140162361208656",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140162362155424->212"
            ]
        }
    },
    {
        "id": "140162361208656->109",
        "type": "column",
        "parentNode": "140162361208656",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162362155424->109"
            ]
        }
    },
    {
        "id": "140162362155424->231",
        "type": "column",
        "parentNode": "140162362155424",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162554689568->231"
            ]
        }
    },
    {
        "id": "140162362155424->212",
        "type": "column",
        "parentNode": "140162362155424",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140162554689568->212"
            ]
        }
    },
    {
        "id": "140162362155424->109",
        "type": "column",
        "parentNode": "140162362155424",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140162554689568->84"
            ]
        }
    },
    {
        "id": "140162361085712->212",
        "type": "column",
        "parentNode": "140162361085712",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#212 = continent#230)\n:- continent#212: string\n+- continent#230: string\n",
            "linked_columns": [
                "140162361211584->212",
                "140162361207024->230"
            ]
        }
    },
    {
        "id": "140162361085712->210",
        "type": "column",
        "parentNode": "140162361085712",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140162361211584->210"
            ]
        }
    },
    {
        "id": "140162361085712->211",
        "type": "column",
        "parentNode": "140162361085712",
        "expandParent": true,
        "data": {
            "id": 211,
            "name": "city",
            "type": "string",
            "tree_string": "city#211: string\n",
            "linked_columns": [
                "140162361211584->211"
            ]
        }
    },
    {
        "id": "140162361085712->227",
        "type": "column",
        "parentNode": "140162361085712",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140162361211584->227"
            ]
        }
    },
    {
        "id": "140162361085712->84",
        "type": "column",
        "parentNode": "140162361085712",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361211584->84"
            ]
        }
    },
    {
        "id": "140162361085712->231",
        "type": "column",
        "parentNode": "140162361085712",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140162361207024->231"
            ]
        }
    },
    {
        "id": "140162361207024->230",
        "type": "column",
        "parentNode": "140162361207024",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#230: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361207024->231",
        "type": "column",
        "parentNode": "140162361207024",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361084704->212",
        "type": "column",
        "parentNode": "140162361084704",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#212 = continent#229)\n:- continent#212: string\n+- continent#229: string\n",
            "linked_columns": [
                "140162362140720->212",
                "140162361198096->229"
            ]
        }
    },
    {
        "id": "140162361084704->210",
        "type": "column",
        "parentNode": "140162361084704",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140162362140720->210"
            ]
        }
    },
    {
        "id": "140162361084704->211",
        "type": "column",
        "parentNode": "140162361084704",
        "expandParent": true,
        "data": {
            "id": 211,
            "name": "city",
            "type": "string",
            "tree_string": "city#211: string\n",
            "linked_columns": [
                "140162362140720->211"
            ]
        }
    },
    {
        "id": "140162361084704->227",
        "type": "column",
        "parentNode": "140162361084704",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140162361198096->227"
            ]
        }
    },
    {
        "id": "140162361084704->84",
        "type": "column",
        "parentNode": "140162361084704",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361198096->84"
            ]
        }
    },
    {
        "id": "140162361198096->229",
        "type": "column",
        "parentNode": "140162361198096",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#229: string\n",
            "linked_columns": [
                "140162361209664->229"
            ]
        }
    },
    {
        "id": "140162361198096->227",
        "type": "column",
        "parentNode": "140162361198096",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140162361209664->227"
            ]
        }
    },
    {
        "id": "140162361198096->84",
        "type": "column",
        "parentNode": "140162361198096",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140162361209664->61"
            ]
        }
    },
    {
        "id": "140162361085280->213",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 213,
            "name": "city",
            "type": "string",
            "tree_string": "(city#213 = city#228)\n:- city#213: string\n+- city#228: string\n",
            "linked_columns": [
                "140162361209232->213",
                "140162361202368->228"
            ]
        }
    },
    {
        "id": "140162361085280->214",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 214,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#214: string\n",
            "linked_columns": [
                "140162361209232->214"
            ]
        }
    },
    {
        "id": "140162361085280->215",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 215,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#215: float\n",
            "linked_columns": [
                "140162361209232->215"
            ]
        }
    },
    {
        "id": "140162361085280->216",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 216,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#216: float\n",
            "linked_columns": [
                "140162361209232->216"
            ]
        }
    },
    {
        "id": "140162361085280->61",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361209232->61"
            ]
        }
    },
    {
        "id": "140162361085280->227",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140162361202368->227"
            ]
        }
    },
    {
        "id": "140162361085280->229",
        "type": "column",
        "parentNode": "140162361085280",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#229: string\n",
            "linked_columns": [
                "140162361202368->229"
            ]
        }
    },
    {
        "id": "140162361202368->227",
        "type": "column",
        "parentNode": "140162361202368",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361202368->228",
        "type": "column",
        "parentNode": "140162361202368",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "city",
            "type": "string",
            "tree_string": "city#228: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361202368->229",
        "type": "column",
        "parentNode": "140162361202368",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#229: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361093008->213",
        "type": "column",
        "parentNode": "140162361093008",
        "expandParent": true,
        "data": {
            "id": 213,
            "name": "city",
            "type": "string",
            "tree_string": "(city#213 = city#221)\n:- city#213: string\n+- city#221: string\n",
            "linked_columns": [
                "140162361196704->213",
                "140162361206208->221"
            ]
        }
    },
    {
        "id": "140162361093008->214",
        "type": "column",
        "parentNode": "140162361093008",
        "expandParent": true,
        "data": {
            "id": 214,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#214: string\n",
            "linked_columns": [
                "140162361196704->214"
            ]
        }
    },
    {
        "id": "140162361093008->215",
        "type": "column",
        "parentNode": "140162361093008",
        "expandParent": true,
        "data": {
            "id": 215,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#215: float\n",
            "linked_columns": [
                "140162361196704->215"
            ]
        }
    },
    {
        "id": "140162361093008->216",
        "type": "column",
        "parentNode": "140162361093008",
        "expandParent": true,
        "data": {
            "id": 216,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#216: float\n",
            "linked_columns": [
                "140162361196704->216"
            ]
        }
    },
    {
        "id": "140162361093008->61",
        "type": "column",
        "parentNode": "140162361093008",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361206208->61"
            ]
        }
    },
    {
        "id": "140162361206208->221",
        "type": "column",
        "parentNode": "140162361206208",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140162361198432->221"
            ]
        }
    },
    {
        "id": "140162361206208->61",
        "type": "column",
        "parentNode": "140162361206208",
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
        "id": "140162361198432->217",
        "type": "column",
        "parentNode": "140162361198432",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": [
                "140162362137648->217"
            ]
        }
    },
    {
        "id": "140162361198432->218",
        "type": "column",
        "parentNode": "140162361198432",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": [
                "140162362137648->218"
            ]
        }
    },
    {
        "id": "140162361198432->219",
        "type": "column",
        "parentNode": "140162361198432",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": [
                "140162362137648->219"
            ]
        }
    },
    {
        "id": "140162361198432->220",
        "type": "column",
        "parentNode": "140162361198432",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": [
                "140162362137648->220"
            ]
        }
    },
    {
        "id": "140162361198432->221",
        "type": "column",
        "parentNode": "140162361198432",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140162362137648->221"
            ]
        }
    },
    {
        "id": "140162361206352->222",
        "type": "column",
        "parentNode": "140162361206352",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": [
                "140162361206112->222"
            ]
        }
    },
    {
        "id": "140162361206352->223",
        "type": "column",
        "parentNode": "140162361206352",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": [
                "140162361206112->223"
            ]
        }
    },
    {
        "id": "140162361206352->224",
        "type": "column",
        "parentNode": "140162361206352",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": [
                "140162361206112->224"
            ]
        }
    },
    {
        "id": "140162361206352->225",
        "type": "column",
        "parentNode": "140162361206352",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": [
                "140162361206112->225"
            ]
        }
    },
    {
        "id": "140162361206352->226",
        "type": "column",
        "parentNode": "140162361206352",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": [
                "140162361206112->226"
            ]
        }
    },
    {
        "id": "140162361206112->222",
        "type": "column",
        "parentNode": "140162361206112",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": [
                "140162361197520->222"
            ]
        }
    },
    {
        "id": "140162361206112->223",
        "type": "column",
        "parentNode": "140162361206112",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": [
                "140162361197520->223"
            ]
        }
    },
    {
        "id": "140162361206112->224",
        "type": "column",
        "parentNode": "140162361206112",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": [
                "140162361197520->224"
            ]
        }
    },
    {
        "id": "140162361206112->225",
        "type": "column",
        "parentNode": "140162361206112",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": [
                "140162361197520->225"
            ]
        }
    },
    {
        "id": "140162361206112->226",
        "type": "column",
        "parentNode": "140162361206112",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": [
                "140162361197520->226"
            ]
        }
    },
    {
        "id": "140162361197520->222",
        "type": "column",
        "parentNode": "140162361197520",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": [
                "140162361211152->222"
            ]
        }
    },
    {
        "id": "140162361197520->223",
        "type": "column",
        "parentNode": "140162361197520",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": [
                "140162361211152->223"
            ]
        }
    },
    {
        "id": "140162361197520->224",
        "type": "column",
        "parentNode": "140162361197520",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": [
                "140162361211152->224"
            ]
        }
    },
    {
        "id": "140162361197520->225",
        "type": "column",
        "parentNode": "140162361197520",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": [
                "140162361211152->225"
            ]
        }
    },
    {
        "id": "140162361197520->226",
        "type": "column",
        "parentNode": "140162361197520",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": [
                "140162361211152->226"
            ]
        }
    },
    {
        "id": "140162361211152->222",
        "type": "column",
        "parentNode": "140162361211152",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361211152->223",
        "type": "column",
        "parentNode": "140162361211152",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361211152->224",
        "type": "column",
        "parentNode": "140162361211152",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361211152->225",
        "type": "column",
        "parentNode": "140162361211152",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361211152->226",
        "type": "column",
        "parentNode": "140162361211152",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362137648->217",
        "type": "column",
        "parentNode": "140162362137648",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": [
                "140162361205008->217"
            ]
        }
    },
    {
        "id": "140162362137648->218",
        "type": "column",
        "parentNode": "140162362137648",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": [
                "140162361205008->218"
            ]
        }
    },
    {
        "id": "140162362137648->219",
        "type": "column",
        "parentNode": "140162362137648",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": [
                "140162361205008->219"
            ]
        }
    },
    {
        "id": "140162362137648->220",
        "type": "column",
        "parentNode": "140162362137648",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": [
                "140162361205008->220"
            ]
        }
    },
    {
        "id": "140162362137648->221",
        "type": "column",
        "parentNode": "140162362137648",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140162361205008->221"
            ]
        }
    },
    {
        "id": "140162361205008->217",
        "type": "column",
        "parentNode": "140162361205008",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": [
                "140162361203952->217"
            ]
        }
    },
    {
        "id": "140162361205008->218",
        "type": "column",
        "parentNode": "140162361205008",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": [
                "140162361203952->218"
            ]
        }
    },
    {
        "id": "140162361205008->219",
        "type": "column",
        "parentNode": "140162361205008",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": [
                "140162361203952->219"
            ]
        }
    },
    {
        "id": "140162361205008->220",
        "type": "column",
        "parentNode": "140162361205008",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": [
                "140162361203952->220"
            ]
        }
    },
    {
        "id": "140162361205008->221",
        "type": "column",
        "parentNode": "140162361205008",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140162361203952->221"
            ]
        }
    },
    {
        "id": "140162361203952->217",
        "type": "column",
        "parentNode": "140162361203952",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361203952->218",
        "type": "column",
        "parentNode": "140162361203952",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361203952->219",
        "type": "column",
        "parentNode": "140162361203952",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361203952->220",
        "type": "column",
        "parentNode": "140162361203952",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361203952->221",
        "type": "column",
        "parentNode": "140162361203952",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361196704->213",
        "type": "column",
        "parentNode": "140162361196704",
        "expandParent": true,
        "data": {
            "id": 213,
            "name": "city",
            "type": "string",
            "tree_string": "city#213: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361196704->214",
        "type": "column",
        "parentNode": "140162361196704",
        "expandParent": true,
        "data": {
            "id": 214,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#214: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361196704->215",
        "type": "column",
        "parentNode": "140162361196704",
        "expandParent": true,
        "data": {
            "id": 215,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#215: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361196704->216",
        "type": "column",
        "parentNode": "140162361196704",
        "expandParent": true,
        "data": {
            "id": 216,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#216: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362140720->210",
        "type": "column",
        "parentNode": "140162362140720",
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
        "id": "140162362140720->211",
        "type": "column",
        "parentNode": "140162362140720",
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
        "id": "140162362140720->212",
        "type": "column",
        "parentNode": "140162362140720",
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
        "id": "140162362151440->113",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#196)\n:- country#113: string\n+- country#196: string\n",
            "linked_columns": [
                "140162557407632->113",
                "140162361090464->196"
            ]
        }
    },
    {
        "id": "140162362151440->19",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162557407632->19"
            ]
        }
    },
    {
        "id": "140162362151440->16",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162557407632->16"
            ]
        }
    },
    {
        "id": "140162362151440->17",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162557407632->17"
            ]
        }
    },
    {
        "id": "140162362151440->122",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162557407632->122"
            ]
        }
    },
    {
        "id": "140162362151440->35",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162557407632->35"
            ]
        }
    },
    {
        "id": "140162362151440->61",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162557407632->61"
            ]
        }
    },
    {
        "id": "140162362151440->198",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361090464->198"
            ]
        }
    },
    {
        "id": "140162362151440->84",
        "type": "column",
        "parentNode": "140162362151440",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361090464->84"
            ]
        }
    },
    {
        "id": "140162361090464->198",
        "type": "column",
        "parentNode": "140162361090464",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361082496->198"
            ]
        }
    },
    {
        "id": "140162361090464->196",
        "type": "column",
        "parentNode": "140162361090464",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140162361082496->196"
            ]
        }
    },
    {
        "id": "140162361090464->84",
        "type": "column",
        "parentNode": "140162361090464",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361082496->84"
            ]
        }
    },
    {
        "id": "140162361082496->198",
        "type": "column",
        "parentNode": "140162361082496",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361086144->198"
            ]
        }
    },
    {
        "id": "140162361082496->196",
        "type": "column",
        "parentNode": "140162361082496",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140162361086144->196"
            ]
        }
    },
    {
        "id": "140162361082496->84",
        "type": "column",
        "parentNode": "140162361082496",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361086144->84"
            ]
        }
    },
    {
        "id": "140162361086144->198",
        "type": "column",
        "parentNode": "140162361086144",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361088208->198"
            ]
        }
    },
    {
        "id": "140162361086144->196",
        "type": "column",
        "parentNode": "140162361086144",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140162361088208->196"
            ]
        }
    },
    {
        "id": "140162361086144->84",
        "type": "column",
        "parentNode": "140162361086144",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162361088208->84"
            ]
        }
    },
    {
        "id": "140162361088208->198",
        "type": "column",
        "parentNode": "140162361088208",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162361879824->198"
            ]
        }
    },
    {
        "id": "140162361088208->196",
        "type": "column",
        "parentNode": "140162361088208",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140162361879824->196"
            ]
        }
    },
    {
        "id": "140162361088208->84",
        "type": "column",
        "parentNode": "140162361088208",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140162361879824->61"
            ]
        }
    },
    {
        "id": "140162361082544->182",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "(city#182 = city#197)\n:- city#182: string\n+- city#197: string\n",
            "linked_columns": [
                "140162361082544->182",
                "140162362137456->197"
            ]
        }
    },
    {
        "id": "140162361082544->183",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": [
                "140162361082544->183"
            ]
        }
    },
    {
        "id": "140162361082544->184",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#184: float\n",
            "linked_columns": [
                "140162361082544->184"
            ]
        }
    },
    {
        "id": "140162361082544->185",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#185: float\n",
            "linked_columns": [
                "140162361082544->185"
            ]
        }
    },
    {
        "id": "140162361082544->61",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361082544->61"
            ]
        }
    },
    {
        "id": "140162361082544->196",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140162362137456->196"
            ]
        }
    },
    {
        "id": "140162361082544->198",
        "type": "column",
        "parentNode": "140162361082544",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140162362137456->198"
            ]
        }
    },
    {
        "id": "140162362137456->196",
        "type": "column",
        "parentNode": "140162362137456",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362137456->197",
        "type": "column",
        "parentNode": "140162362137456",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "city",
            "type": "string",
            "tree_string": "city#197: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362137456->198",
        "type": "column",
        "parentNode": "140162362137456",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361092048->182",
        "type": "column",
        "parentNode": "140162361092048",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "(city#182 = city#190)\n:- city#182: string\n+- city#190: string\n",
            "linked_columns": [
                "140162361094544->182",
                "140162362159840->190"
            ]
        }
    },
    {
        "id": "140162361092048->183",
        "type": "column",
        "parentNode": "140162361092048",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": [
                "140162361094544->183"
            ]
        }
    },
    {
        "id": "140162361092048->184",
        "type": "column",
        "parentNode": "140162361092048",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#184: float\n",
            "linked_columns": [
                "140162361094544->184"
            ]
        }
    },
    {
        "id": "140162361092048->185",
        "type": "column",
        "parentNode": "140162361092048",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#185: float\n",
            "linked_columns": [
                "140162361094544->185"
            ]
        }
    },
    {
        "id": "140162361092048->61",
        "type": "column",
        "parentNode": "140162361092048",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162362159840->61"
            ]
        }
    },
    {
        "id": "140162362159840->190",
        "type": "column",
        "parentNode": "140162362159840",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140162362008064->190"
            ]
        }
    },
    {
        "id": "140162362159840->61",
        "type": "column",
        "parentNode": "140162362159840",
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
        "id": "140162362008064->186",
        "type": "column",
        "parentNode": "140162362008064",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": [
                "140162361999472->186"
            ]
        }
    },
    {
        "id": "140162362008064->187",
        "type": "column",
        "parentNode": "140162362008064",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": [
                "140162361999472->187"
            ]
        }
    },
    {
        "id": "140162362008064->188",
        "type": "column",
        "parentNode": "140162362008064",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": [
                "140162361999472->188"
            ]
        }
    },
    {
        "id": "140162362008064->189",
        "type": "column",
        "parentNode": "140162362008064",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": [
                "140162361999472->189"
            ]
        }
    },
    {
        "id": "140162362008064->190",
        "type": "column",
        "parentNode": "140162362008064",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140162361999472->190"
            ]
        }
    },
    {
        "id": "140162361086384->191",
        "type": "column",
        "parentNode": "140162361086384",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": [
                "140162362010368->191"
            ]
        }
    },
    {
        "id": "140162361086384->192",
        "type": "column",
        "parentNode": "140162361086384",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": [
                "140162362010368->192"
            ]
        }
    },
    {
        "id": "140162361086384->193",
        "type": "column",
        "parentNode": "140162361086384",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": [
                "140162362010368->193"
            ]
        }
    },
    {
        "id": "140162361086384->194",
        "type": "column",
        "parentNode": "140162361086384",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": [
                "140162362010368->194"
            ]
        }
    },
    {
        "id": "140162361086384->195",
        "type": "column",
        "parentNode": "140162361086384",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": [
                "140162362010368->195"
            ]
        }
    },
    {
        "id": "140162362010368->191",
        "type": "column",
        "parentNode": "140162362010368",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": [
                "140162361972464->191"
            ]
        }
    },
    {
        "id": "140162362010368->192",
        "type": "column",
        "parentNode": "140162362010368",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": [
                "140162361972464->192"
            ]
        }
    },
    {
        "id": "140162362010368->193",
        "type": "column",
        "parentNode": "140162362010368",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": [
                "140162361972464->193"
            ]
        }
    },
    {
        "id": "140162362010368->194",
        "type": "column",
        "parentNode": "140162362010368",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": [
                "140162361972464->194"
            ]
        }
    },
    {
        "id": "140162362010368->195",
        "type": "column",
        "parentNode": "140162362010368",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": [
                "140162361972464->195"
            ]
        }
    },
    {
        "id": "140162361972464->191",
        "type": "column",
        "parentNode": "140162361972464",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": [
                "140162362003024->191"
            ]
        }
    },
    {
        "id": "140162361972464->192",
        "type": "column",
        "parentNode": "140162361972464",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": [
                "140162362003024->192"
            ]
        }
    },
    {
        "id": "140162361972464->193",
        "type": "column",
        "parentNode": "140162361972464",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": [
                "140162362003024->193"
            ]
        }
    },
    {
        "id": "140162361972464->194",
        "type": "column",
        "parentNode": "140162361972464",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": [
                "140162362003024->194"
            ]
        }
    },
    {
        "id": "140162361972464->195",
        "type": "column",
        "parentNode": "140162361972464",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": [
                "140162362003024->195"
            ]
        }
    },
    {
        "id": "140162362003024->191",
        "type": "column",
        "parentNode": "140162362003024",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362003024->192",
        "type": "column",
        "parentNode": "140162362003024",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362003024->193",
        "type": "column",
        "parentNode": "140162362003024",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362003024->194",
        "type": "column",
        "parentNode": "140162362003024",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362003024->195",
        "type": "column",
        "parentNode": "140162362003024",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361999472->186",
        "type": "column",
        "parentNode": "140162361999472",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": [
                "140162361095120->186"
            ]
        }
    },
    {
        "id": "140162361999472->187",
        "type": "column",
        "parentNode": "140162361999472",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": [
                "140162361095120->187"
            ]
        }
    },
    {
        "id": "140162361999472->188",
        "type": "column",
        "parentNode": "140162361999472",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": [
                "140162361095120->188"
            ]
        }
    },
    {
        "id": "140162361999472->189",
        "type": "column",
        "parentNode": "140162361999472",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": [
                "140162361095120->189"
            ]
        }
    },
    {
        "id": "140162361999472->190",
        "type": "column",
        "parentNode": "140162361999472",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140162361095120->190"
            ]
        }
    },
    {
        "id": "140162361095120->186",
        "type": "column",
        "parentNode": "140162361095120",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": [
                "140162362000768->186"
            ]
        }
    },
    {
        "id": "140162361095120->187",
        "type": "column",
        "parentNode": "140162361095120",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": [
                "140162362000768->187"
            ]
        }
    },
    {
        "id": "140162361095120->188",
        "type": "column",
        "parentNode": "140162361095120",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": [
                "140162362000768->188"
            ]
        }
    },
    {
        "id": "140162361095120->189",
        "type": "column",
        "parentNode": "140162361095120",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": [
                "140162362000768->189"
            ]
        }
    },
    {
        "id": "140162361095120->190",
        "type": "column",
        "parentNode": "140162361095120",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140162362000768->190"
            ]
        }
    },
    {
        "id": "140162362000768->186",
        "type": "column",
        "parentNode": "140162362000768",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362000768->187",
        "type": "column",
        "parentNode": "140162362000768",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362000768->188",
        "type": "column",
        "parentNode": "140162362000768",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362000768->189",
        "type": "column",
        "parentNode": "140162362000768",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362000768->190",
        "type": "column",
        "parentNode": "140162362000768",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361094544->182",
        "type": "column",
        "parentNode": "140162361094544",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "city#182: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361094544->183",
        "type": "column",
        "parentNode": "140162361094544",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361094544->184",
        "type": "column",
        "parentNode": "140162361094544",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#184: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361094544->185",
        "type": "column",
        "parentNode": "140162361094544",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#185: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361087536->19",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#167)\n:- city#19: string\n+- city#167: string\n",
            "linked_columns": [
                "140162362000384->19",
                "140162362151344->167"
            ]
        }
    },
    {
        "id": "140162361087536->16",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162362000384->16"
            ]
        }
    },
    {
        "id": "140162361087536->17",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162362000384->17"
            ]
        }
    },
    {
        "id": "140162361087536->122",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162362000384->122"
            ]
        }
    },
    {
        "id": "140162361087536->113",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162362000384->113"
            ]
        }
    },
    {
        "id": "140162361087536->35",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162362000384->35"
            ]
        }
    },
    {
        "id": "140162361087536->61",
        "type": "column",
        "parentNode": "140162361087536",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162362151344->61"
            ]
        }
    },
    {
        "id": "140162362151344->167",
        "type": "column",
        "parentNode": "140162362151344",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362153648->167"
            ]
        }
    },
    {
        "id": "140162362151344->61",
        "type": "column",
        "parentNode": "140162362151344",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162362153648->61"
            ]
        }
    },
    {
        "id": "140162362153648->167",
        "type": "column",
        "parentNode": "140162362153648",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362158448->167"
            ]
        }
    },
    {
        "id": "140162362153648->61",
        "type": "column",
        "parentNode": "140162362153648",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162362158448->61"
            ]
        }
    },
    {
        "id": "140162362158448->167",
        "type": "column",
        "parentNode": "140162362158448",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362140096->167"
            ]
        }
    },
    {
        "id": "140162362158448->61",
        "type": "column",
        "parentNode": "140162362158448",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162362140096->61"
            ]
        }
    },
    {
        "id": "140162362140096->167",
        "type": "column",
        "parentNode": "140162362140096",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362139328->167"
            ]
        }
    },
    {
        "id": "140162362140096->61",
        "type": "column",
        "parentNode": "140162362140096",
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
        "id": "140162362139328->163",
        "type": "column",
        "parentNode": "140162362139328",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": [
                "140162362139616->163"
            ]
        }
    },
    {
        "id": "140162362139328->164",
        "type": "column",
        "parentNode": "140162362139328",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": [
                "140162362139616->164"
            ]
        }
    },
    {
        "id": "140162362139328->165",
        "type": "column",
        "parentNode": "140162362139328",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": [
                "140162362139616->165"
            ]
        }
    },
    {
        "id": "140162362139328->166",
        "type": "column",
        "parentNode": "140162362139328",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": [
                "140162362139616->166"
            ]
        }
    },
    {
        "id": "140162362139328->167",
        "type": "column",
        "parentNode": "140162362139328",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362139616->167"
            ]
        }
    },
    {
        "id": "140162362155568->168",
        "type": "column",
        "parentNode": "140162362155568",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": [
                "140162361197040->168"
            ]
        }
    },
    {
        "id": "140162362155568->169",
        "type": "column",
        "parentNode": "140162362155568",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": [
                "140162361197040->169"
            ]
        }
    },
    {
        "id": "140162362155568->170",
        "type": "column",
        "parentNode": "140162362155568",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": [
                "140162361197040->170"
            ]
        }
    },
    {
        "id": "140162362155568->171",
        "type": "column",
        "parentNode": "140162362155568",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": [
                "140162361197040->171"
            ]
        }
    },
    {
        "id": "140162362155568->172",
        "type": "column",
        "parentNode": "140162362155568",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": [
                "140162361197040->172"
            ]
        }
    },
    {
        "id": "140162361197040->168",
        "type": "column",
        "parentNode": "140162361197040",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": [
                "140162362158736->168"
            ]
        }
    },
    {
        "id": "140162361197040->169",
        "type": "column",
        "parentNode": "140162361197040",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": [
                "140162362158736->169"
            ]
        }
    },
    {
        "id": "140162361197040->170",
        "type": "column",
        "parentNode": "140162361197040",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": [
                "140162362158736->170"
            ]
        }
    },
    {
        "id": "140162361197040->171",
        "type": "column",
        "parentNode": "140162361197040",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": [
                "140162362158736->171"
            ]
        }
    },
    {
        "id": "140162361197040->172",
        "type": "column",
        "parentNode": "140162361197040",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": [
                "140162362158736->172"
            ]
        }
    },
    {
        "id": "140162362158736->168",
        "type": "column",
        "parentNode": "140162362158736",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": [
                "140162361198000->168"
            ]
        }
    },
    {
        "id": "140162362158736->169",
        "type": "column",
        "parentNode": "140162362158736",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": [
                "140162361198000->169"
            ]
        }
    },
    {
        "id": "140162362158736->170",
        "type": "column",
        "parentNode": "140162362158736",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": [
                "140162361198000->170"
            ]
        }
    },
    {
        "id": "140162362158736->171",
        "type": "column",
        "parentNode": "140162362158736",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": [
                "140162361198000->171"
            ]
        }
    },
    {
        "id": "140162362158736->172",
        "type": "column",
        "parentNode": "140162362158736",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": [
                "140162361198000->172"
            ]
        }
    },
    {
        "id": "140162361198000->168",
        "type": "column",
        "parentNode": "140162361198000",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361198000->169",
        "type": "column",
        "parentNode": "140162361198000",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361198000->170",
        "type": "column",
        "parentNode": "140162361198000",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361198000->171",
        "type": "column",
        "parentNode": "140162361198000",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162361198000->172",
        "type": "column",
        "parentNode": "140162361198000",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362139616->163",
        "type": "column",
        "parentNode": "140162362139616",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": [
                "140162362151824->163"
            ]
        }
    },
    {
        "id": "140162362139616->164",
        "type": "column",
        "parentNode": "140162362139616",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": [
                "140162362151824->164"
            ]
        }
    },
    {
        "id": "140162362139616->165",
        "type": "column",
        "parentNode": "140162362139616",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": [
                "140162362151824->165"
            ]
        }
    },
    {
        "id": "140162362139616->166",
        "type": "column",
        "parentNode": "140162362139616",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": [
                "140162362151824->166"
            ]
        }
    },
    {
        "id": "140162362139616->167",
        "type": "column",
        "parentNode": "140162362139616",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362151824->167"
            ]
        }
    },
    {
        "id": "140162362151824->163",
        "type": "column",
        "parentNode": "140162362151824",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": [
                "140162362138128->163"
            ]
        }
    },
    {
        "id": "140162362151824->164",
        "type": "column",
        "parentNode": "140162362151824",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": [
                "140162362138128->164"
            ]
        }
    },
    {
        "id": "140162362151824->165",
        "type": "column",
        "parentNode": "140162362151824",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": [
                "140162362138128->165"
            ]
        }
    },
    {
        "id": "140162362151824->166",
        "type": "column",
        "parentNode": "140162362151824",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": [
                "140162362138128->166"
            ]
        }
    },
    {
        "id": "140162362151824->167",
        "type": "column",
        "parentNode": "140162362151824",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140162362138128->167"
            ]
        }
    },
    {
        "id": "140162362138128->163",
        "type": "column",
        "parentNode": "140162362138128",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362138128->164",
        "type": "column",
        "parentNode": "140162362138128",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362138128->165",
        "type": "column",
        "parentNode": "140162362138128",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362138128->166",
        "type": "column",
        "parentNode": "140162362138128",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362138128->167",
        "type": "column",
        "parentNode": "140162362138128",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140162362000384->16",
        "type": "column",
        "parentNode": "140162362000384",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162362012864->16"
            ]
        }
    },
    {
        "id": "140162362000384->17",
        "type": "column",
        "parentNode": "140162362000384",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162362012864->17"
            ]
        }
    },
    {
        "id": "140162362000384->19",
        "type": "column",
        "parentNode": "140162362000384",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162362012864->19"
            ]
        }
    },
    {
        "id": "140162362000384->122",
        "type": "column",
        "parentNode": "140162362000384",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162362012864->122"
            ]
        }
    },
    {
        "id": "140162362000384->113",
        "type": "column",
        "parentNode": "140162362000384",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162362012864->113"
            ]
        }
    },
    {
        "id": "140162362000384->35",
        "type": "column",
        "parentNode": "140162362000384",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162362012864->35"
            ]
        }
    },
    {
        "id": "140162361092480->19",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "140162362006480->19",
                "140162362001104->114"
            ]
        }
    },
    {
        "id": "140162361092480->15",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140162362006480->15"
            ]
        }
    },
    {
        "id": "140162361092480->16",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162362006480->16"
            ]
        }
    },
    {
        "id": "140162361092480->17",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162362006480->17"
            ]
        }
    },
    {
        "id": "140162361092480->18",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140162362006480->18"
            ]
        }
    },
    {
        "id": "140162361092480->35",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162362001104->35"
            ]
        }
    },
    {
        "id": "140162361092480->40",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140162362001104->40"
            ]
        }
    },
    {
        "id": "140162361092480->109",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162362001104->109"
            ]
        }
    },
    {
        "id": "140162361092480->113",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162362001104->113"
            ]
        }
    },
    {
        "id": "140162361092480->122",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162362001104->122"
            ]
        }
    },
    {
        "id": "140162361092480->123",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140162362001104->123"
            ]
        }
    },
    {
        "id": "140162361092480->124",
        "type": "column",
        "parentNode": "140162361092480",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140162362001104->124"
            ]
        }
    },
    {
        "id": "140162361086528->114",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "140162362009072->114",
                "140162361088256->121"
            ]
        }
    },
    {
        "id": "140162361086528->35",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162362009072->35"
            ]
        }
    },
    {
        "id": "140162361086528->40",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140162362009072->40"
            ]
        }
    },
    {
        "id": "140162361086528->109",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162362009072->109"
            ]
        }
    },
    {
        "id": "140162361086528->113",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162362009072->113"
            ]
        }
    },
    {
        "id": "140162361086528->122",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140162361088256->122"
            ]
        }
    },
    {
        "id": "140162361086528->123",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140162361088256->123"
            ]
        }
    },
    {
        "id": "140162361086528->124",
        "type": "column",
        "parentNode": "140162361086528",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140162361088256->124"
            ]
        }
    },
    {
        "id": "140162361088256->121",
        "type": "column",
        "parentNode": "140162361088256",
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
        "id": "140162361088256->122",
        "type": "column",
        "parentNode": "140162361088256",
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
        "id": "140162361088256->123",
        "type": "column",
        "parentNode": "140162361088256",
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
        "id": "140162361088256->124",
        "type": "column",
        "parentNode": "140162361088256",
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
        "id": "140162361085088->35",
        "type": "column",
        "parentNode": "140162361085088",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "140162361096752->35",
                "140162362156816->115"
            ]
        }
    },
    {
        "id": "140162361085088->40",
        "type": "column",
        "parentNode": "140162361085088",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140162361096752->40"
            ]
        }
    },
    {
        "id": "140162361085088->109",
        "type": "column",
        "parentNode": "140162361085088",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162361096752->109"
            ]
        }
    },
    {
        "id": "140162361085088->113",
        "type": "column",
        "parentNode": "140162361085088",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140162362156816->113"
            ]
        }
    },
    {
        "id": "140162361085088->114",
        "type": "column",
        "parentNode": "140162361085088",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "140162362156816->114"
            ]
        }
    },
    {
        "id": "140162362156816->113",
        "type": "column",
        "parentNode": "140162362156816",
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
        "id": "140162362156816->114",
        "type": "column",
        "parentNode": "140162362156816",
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
        "id": "140162362156816->115",
        "type": "column",
        "parentNode": "140162362156816",
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
        "id": "140162361096752->40",
        "type": "column",
        "parentNode": "140162361096752",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140162362008880->40"
            ]
        }
    },
    {
        "id": "140162361096752->35",
        "type": "column",
        "parentNode": "140162361096752",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162362008880->35"
            ]
        }
    },
    {
        "id": "140162361096752->109",
        "type": "column",
        "parentNode": "140162361096752",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140162362008880->109"
            ]
        }
    },
    {
        "id": "140162362008880->40",
        "type": "column",
        "parentNode": "140162362008880",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140162362007344->40"
            ]
        }
    },
    {
        "id": "140162362008880->35",
        "type": "column",
        "parentNode": "140162362008880",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140162362007344->35"
            ]
        }
    },
    {
        "id": "140162362008880->109",
        "type": "column",
        "parentNode": "140162362008880",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140162362007344->84"
            ]
        }
    },
    {
        "id": "140162361088112->35",
        "type": "column",
        "parentNode": "140162361088112",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "140162362001872->35",
                "140162361096224->39"
            ]
        }
    },
    {
        "id": "140162361088112->33",
        "type": "column",
        "parentNode": "140162361088112",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140162362001872->33"
            ]
        }
    },
    {
        "id": "140162361088112->34",
        "type": "column",
        "parentNode": "140162361088112",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140162362001872->34"
            ]
        }
    },
    {
        "id": "140162361088112->88",
        "type": "column",
        "parentNode": "140162361088112",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140162362001872->88"
            ]
        }
    },
    {
        "id": "140162361088112->84",
        "type": "column",
        "parentNode": "140162361088112",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162362001872->84"
            ]
        }
    },
    {
        "id": "140162361088112->40",
        "type": "column",
        "parentNode": "140162361088112",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140162361096224->40"
            ]
        }
    },
    {
        "id": "140162361096224->39",
        "type": "column",
        "parentNode": "140162361096224",
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
        "id": "140162361096224->40",
        "type": "column",
        "parentNode": "140162361096224",
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
        "id": "140162361084464->35",
        "type": "column",
        "parentNode": "140162361084464",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "140162361880784->35",
                "140162362001584->90"
            ]
        }
    },
    {
        "id": "140162361084464->33",
        "type": "column",
        "parentNode": "140162361084464",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140162361880784->33"
            ]
        }
    },
    {
        "id": "140162361084464->34",
        "type": "column",
        "parentNode": "140162361084464",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140162361880784->34"
            ]
        }
    },
    {
        "id": "140162361084464->88",
        "type": "column",
        "parentNode": "140162361084464",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140162362001584->88"
            ]
        }
    },
    {
        "id": "140162361084464->84",
        "type": "column",
        "parentNode": "140162361084464",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140162362001584->84"
            ]
        }
    },
    {
        "id": "140162362001584->90",
        "type": "column",
        "parentNode": "140162362001584",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140162361089936->90"
            ]
        }
    },
    {
        "id": "140162362001584->88",
        "type": "column",
        "parentNode": "140162362001584",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140162361089936->88"
            ]
        }
    },
    {
        "id": "140162362001584->84",
        "type": "column",
        "parentNode": "140162362001584",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140162361089936->61"
            ]
        }
    },
    {
        "id": "140162361086768->25",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "140162361086768->25",
                "140162361094976->89"
            ]
        }
    },
    {
        "id": "140162361086768->26",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140162361086768->26"
            ]
        }
    },
    {
        "id": "140162361086768->27",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140162361086768->27"
            ]
        }
    },
    {
        "id": "140162361086768->28",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140162361086768->28"
            ]
        }
    },
    {
        "id": "140162361086768->61",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361086768->61"
            ]
        }
    },
    {
        "id": "140162361086768->88",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140162361094976->88"
            ]
        }
    },
    {
        "id": "140162361086768->90",
        "type": "column",
        "parentNode": "140162361086768",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140162361094976->90"
            ]
        }
    },
    {
        "id": "140162361094976->88",
        "type": "column",
        "parentNode": "140162361094976",
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
        "id": "140162361094976->89",
        "type": "column",
        "parentNode": "140162361094976",
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
        "id": "140162361094976->90",
        "type": "column",
        "parentNode": "140162361094976",
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
        "id": "140162361087728->25",
        "type": "column",
        "parentNode": "140162361087728",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "140162361090272->25",
                "140162361089504->137"
            ]
        }
    },
    {
        "id": "140162361087728->26",
        "type": "column",
        "parentNode": "140162361087728",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140162361090272->26"
            ]
        }
    },
    {
        "id": "140162361087728->27",
        "type": "column",
        "parentNode": "140162361087728",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140162361090272->27"
            ]
        }
    },
    {
        "id": "140162361087728->28",
        "type": "column",
        "parentNode": "140162361087728",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140162361090272->28"
            ]
        }
    },
    {
        "id": "140162361087728->61",
        "type": "column",
        "parentNode": "140162361087728",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140162361089504->61"
            ]
        }
    },
    {
        "id": "140162361089504->137",
        "type": "column",
        "parentNode": "140162361089504",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140162362000000->137"
            ]
        }
    },
    {
        "id": "140162361089504->61",
        "type": "column",
        "parentNode": "140162361089504",
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
        "id": "140162362000000->133",
        "type": "column",
        "parentNode": "140162362000000",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140162361089168->133"
            ]
        }
    },
    {
        "id": "140162362000000->134",
        "type": "column",
        "parentNode": "140162362000000",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140162361089168->134"
            ]
        }
    },
    {
        "id": "140162362000000->135",
        "type": "column",
        "parentNode": "140162362000000",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140162361089168->135"
            ]
        }
    },
    {
        "id": "140162362000000->136",
        "type": "column",
        "parentNode": "140162362000000",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140162361089168->136"
            ]
        }
    },
    {
        "id": "140162362000000->137",
        "type": "column",
        "parentNode": "140162362000000",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140162361089168->137"
            ]
        }
    },
    {
        "id": "140162361094496->138",
        "type": "column",
        "parentNode": "140162361094496",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140162361097760->138"
            ]
        }
    },
    {
        "id": "140162361094496->139",
        "type": "column",
        "parentNode": "140162361094496",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140162361097760->139"
            ]
        }
    },
    {
        "id": "140162361094496->140",
        "type": "column",
        "parentNode": "140162361094496",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140162361097760->140"
            ]
        }
    },
    {
        "id": "140162361094496->141",
        "type": "column",
        "parentNode": "140162361094496",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140162361097760->141"
            ]
        }
    },
    {
        "id": "140162361094496->142",
        "type": "column",
        "parentNode": "140162361094496",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140162361097760->142"
            ]
        }
    },
    {
        "id": "140162361097760->138",
        "type": "column",
        "parentNode": "140162361097760",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140162361095552->138"
            ]
        }
    },
    {
        "id": "140162361097760->139",
        "type": "column",
        "parentNode": "140162361097760",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140162361095552->139"
            ]
        }
    },
    {
        "id": "140162361097760->140",
        "type": "column",
        "parentNode": "140162361097760",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140162361095552->140"
            ]
        }
    },
    {
        "id": "140162361097760->141",
        "type": "column",
        "parentNode": "140162361097760",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140162361095552->141"
            ]
        }
    },
    {
        "id": "140162361097760->142",
        "type": "column",
        "parentNode": "140162361097760",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140162361095552->142"
            ]
        }
    },
    {
        "id": "140162361095552->138",
        "type": "column",
        "parentNode": "140162361095552",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140162362007296->138"
            ]
        }
    },
    {
        "id": "140162361095552->139",
        "type": "column",
        "parentNode": "140162361095552",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140162362007296->139"
            ]
        }
    },
    {
        "id": "140162361095552->140",
        "type": "column",
        "parentNode": "140162361095552",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140162362007296->140"
            ]
        }
    },
    {
        "id": "140162361095552->141",
        "type": "column",
        "parentNode": "140162361095552",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140162362007296->141"
            ]
        }
    },
    {
        "id": "140162361095552->142",
        "type": "column",
        "parentNode": "140162361095552",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140162362007296->142"
            ]
        }
    },
    {
        "id": "140162362007296->138",
        "type": "column",
        "parentNode": "140162362007296",
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
        "id": "140162362007296->139",
        "type": "column",
        "parentNode": "140162362007296",
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
        "id": "140162362007296->140",
        "type": "column",
        "parentNode": "140162362007296",
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
        "id": "140162362007296->141",
        "type": "column",
        "parentNode": "140162362007296",
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
        "id": "140162362007296->142",
        "type": "column",
        "parentNode": "140162362007296",
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
        "id": "140162361089168->133",
        "type": "column",
        "parentNode": "140162361089168",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140162361085568->133"
            ]
        }
    },
    {
        "id": "140162361089168->134",
        "type": "column",
        "parentNode": "140162361089168",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140162361085568->134"
            ]
        }
    },
    {
        "id": "140162361089168->135",
        "type": "column",
        "parentNode": "140162361089168",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140162361085568->135"
            ]
        }
    },
    {
        "id": "140162361089168->136",
        "type": "column",
        "parentNode": "140162361089168",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140162361085568->136"
            ]
        }
    },
    {
        "id": "140162361089168->137",
        "type": "column",
        "parentNode": "140162361089168",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140162361085568->137"
            ]
        }
    },
    {
        "id": "140162361085568->133",
        "type": "column",
        "parentNode": "140162361085568",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140162361096512->133"
            ]
        }
    },
    {
        "id": "140162361085568->134",
        "type": "column",
        "parentNode": "140162361085568",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140162361096512->134"
            ]
        }
    },
    {
        "id": "140162361085568->135",
        "type": "column",
        "parentNode": "140162361085568",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140162361096512->135"
            ]
        }
    },
    {
        "id": "140162361085568->136",
        "type": "column",
        "parentNode": "140162361085568",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140162361096512->136"
            ]
        }
    },
    {
        "id": "140162361085568->137",
        "type": "column",
        "parentNode": "140162361085568",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140162361096512->137"
            ]
        }
    },
    {
        "id": "140162361096512->133",
        "type": "column",
        "parentNode": "140162361096512",
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
        "id": "140162361096512->134",
        "type": "column",
        "parentNode": "140162361096512",
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
        "id": "140162361096512->135",
        "type": "column",
        "parentNode": "140162361096512",
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
        "id": "140162361096512->136",
        "type": "column",
        "parentNode": "140162361096512",
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
        "id": "140162361096512->137",
        "type": "column",
        "parentNode": "140162361096512",
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
        "id": "140162361090272->25",
        "type": "column",
        "parentNode": "140162361090272",
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
        "id": "140162361090272->26",
        "type": "column",
        "parentNode": "140162361090272",
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
        "id": "140162361090272->27",
        "type": "column",
        "parentNode": "140162361090272",
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
        "id": "140162361090272->28",
        "type": "column",
        "parentNode": "140162361090272",
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
        "id": "140162361880784->33",
        "type": "column",
        "parentNode": "140162361880784",
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
        "id": "140162361880784->34",
        "type": "column",
        "parentNode": "140162361880784",
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
        "id": "140162361880784->35",
        "type": "column",
        "parentNode": "140162361880784",
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
        "id": "140162362006480->15",
        "type": "column",
        "parentNode": "140162362006480",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140162362153552->15"
            ]
        }
    },
    {
        "id": "140162362006480->16",
        "type": "column",
        "parentNode": "140162362006480",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162362153552->16"
            ]
        }
    },
    {
        "id": "140162362006480->17",
        "type": "column",
        "parentNode": "140162362006480",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162362153552->17"
            ]
        }
    },
    {
        "id": "140162362006480->18",
        "type": "column",
        "parentNode": "140162362006480",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140162362153552->18"
            ]
        }
    },
    {
        "id": "140162362006480->19",
        "type": "column",
        "parentNode": "140162362006480",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162362153552->19"
            ]
        }
    },
    {
        "id": "140162362155040->44",
        "type": "column",
        "parentNode": "140162362155040",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140162362003504->44"
            ]
        }
    },
    {
        "id": "140162362155040->45",
        "type": "column",
        "parentNode": "140162362155040",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140162362003504->45"
            ]
        }
    },
    {
        "id": "140162362155040->46",
        "type": "column",
        "parentNode": "140162362155040",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140162362003504->46"
            ]
        }
    },
    {
        "id": "140162362155040->47",
        "type": "column",
        "parentNode": "140162362155040",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140162362003504->47"
            ]
        }
    },
    {
        "id": "140162362155040->48",
        "type": "column",
        "parentNode": "140162362155040",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140162362003504->48"
            ]
        }
    },
    {
        "id": "140162362003504->44",
        "type": "column",
        "parentNode": "140162362003504",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140162362150288->44"
            ]
        }
    },
    {
        "id": "140162362003504->45",
        "type": "column",
        "parentNode": "140162362003504",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140162362150288->45"
            ]
        }
    },
    {
        "id": "140162362003504->46",
        "type": "column",
        "parentNode": "140162362003504",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140162362150288->46"
            ]
        }
    },
    {
        "id": "140162362003504->47",
        "type": "column",
        "parentNode": "140162362003504",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140162362150288->47"
            ]
        }
    },
    {
        "id": "140162362003504->48",
        "type": "column",
        "parentNode": "140162362003504",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140162362150288->48"
            ]
        }
    },
    {
        "id": "140162362150288->44",
        "type": "column",
        "parentNode": "140162362150288",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140162362011472->44"
            ]
        }
    },
    {
        "id": "140162362150288->45",
        "type": "column",
        "parentNode": "140162362150288",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140162362011472->45"
            ]
        }
    },
    {
        "id": "140162362150288->46",
        "type": "column",
        "parentNode": "140162362150288",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140162362011472->46"
            ]
        }
    },
    {
        "id": "140162362150288->47",
        "type": "column",
        "parentNode": "140162362150288",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140162362011472->47"
            ]
        }
    },
    {
        "id": "140162362150288->48",
        "type": "column",
        "parentNode": "140162362150288",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140162362011472->48"
            ]
        }
    },
    {
        "id": "140162362011472->44",
        "type": "column",
        "parentNode": "140162362011472",
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
        "id": "140162362011472->45",
        "type": "column",
        "parentNode": "140162362011472",
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
        "id": "140162362011472->46",
        "type": "column",
        "parentNode": "140162362011472",
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
        "id": "140162362011472->47",
        "type": "column",
        "parentNode": "140162362011472",
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
        "id": "140162362011472->48",
        "type": "column",
        "parentNode": "140162362011472",
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
        "id": "140162362153552->15",
        "type": "column",
        "parentNode": "140162362153552",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140162362159216->15"
            ]
        }
    },
    {
        "id": "140162362153552->16",
        "type": "column",
        "parentNode": "140162362153552",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162362159216->16"
            ]
        }
    },
    {
        "id": "140162362153552->17",
        "type": "column",
        "parentNode": "140162362153552",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162362159216->17"
            ]
        }
    },
    {
        "id": "140162362153552->18",
        "type": "column",
        "parentNode": "140162362153552",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140162362159216->18"
            ]
        }
    },
    {
        "id": "140162362153552->19",
        "type": "column",
        "parentNode": "140162362153552",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162362159216->19"
            ]
        }
    },
    {
        "id": "140162362159216->15",
        "type": "column",
        "parentNode": "140162362159216",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140162362154896->15"
            ]
        }
    },
    {
        "id": "140162362159216->16",
        "type": "column",
        "parentNode": "140162362159216",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140162362154896->16"
            ]
        }
    },
    {
        "id": "140162362159216->17",
        "type": "column",
        "parentNode": "140162362159216",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140162362154896->17"
            ]
        }
    },
    {
        "id": "140162362159216->18",
        "type": "column",
        "parentNode": "140162362159216",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140162362154896->18"
            ]
        }
    },
    {
        "id": "140162362159216->19",
        "type": "column",
        "parentNode": "140162362159216",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140162362154896->19"
            ]
        }
    },
    {
        "id": "140162362154896->15",
        "type": "column",
        "parentNode": "140162362154896",
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
        "id": "140162362154896->16",
        "type": "column",
        "parentNode": "140162362154896",
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
        "id": "140162362154896->17",
        "type": "column",
        "parentNode": "140162362154896",
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
        "id": "140162362154896->18",
        "type": "column",
        "parentNode": "140162362154896",
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
        "id": "140162362154896->19",
        "type": "column",
        "parentNode": "140162362154896",
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
        "id": "140162361087392-140162361083168",
        "source": "140162361087392",
        "target": "140162361083168"
    },
    {
        "id": "140162361083168-140162361201504",
        "source": "140162361083168",
        "target": "140162361201504"
    },
    {
        "id": "140162361201504-140162554689568",
        "source": "140162361201504",
        "target": "140162554689568"
    },
    {
        "id": "140162554689568-140162361971840",
        "source": "140162554689568",
        "target": "140162361971840"
    },
    {
        "id": "140162361971840-140162361202992",
        "source": "140162361971840",
        "target": "140162361202992"
    },
    {
        "id": "140162361202992-140162361208656",
        "source": "140162361202992",
        "target": "140162361208656"
    },
    {
        "id": "140162361208656-140162362155424",
        "source": "140162361208656",
        "target": "140162362155424"
    },
    {
        "id": "140162362155424-140162361085712",
        "source": "140162362155424",
        "target": "140162361085712"
    },
    {
        "id": "140162361085712-140162361207024",
        "source": "140162361085712",
        "target": "140162361207024"
    },
    {
        "id": "140162361085712-140162361084704",
        "source": "140162361085712",
        "target": "140162361084704"
    },
    {
        "id": "140162361084704-140162361198096",
        "source": "140162361084704",
        "target": "140162361198096"
    },
    {
        "id": "140162361198096-140162361085280",
        "source": "140162361198096",
        "target": "140162361085280"
    },
    {
        "id": "140162361085280-140162361202368",
        "source": "140162361085280",
        "target": "140162361202368"
    },
    {
        "id": "140162361085280-140162361093008",
        "source": "140162361085280",
        "target": "140162361093008"
    },
    {
        "id": "140162361093008-140162361206208",
        "source": "140162361093008",
        "target": "140162361206208"
    },
    {
        "id": "140162361206208-140162361198432",
        "source": "140162361206208",
        "target": "140162361198432"
    },
    {
        "id": "140162361198432-140162361206352",
        "source": "140162361198432",
        "target": "140162361206352"
    },
    {
        "id": "140162361206352-140162361206112",
        "source": "140162361206352",
        "target": "140162361206112"
    },
    {
        "id": "140162361206112-140162361197520",
        "source": "140162361206112",
        "target": "140162361197520"
    },
    {
        "id": "140162361197520-140162361211152",
        "source": "140162361197520",
        "target": "140162361211152"
    },
    {
        "id": "140162361198432-140162362137648",
        "source": "140162361198432",
        "target": "140162362137648"
    },
    {
        "id": "140162362137648-140162361205008",
        "source": "140162362137648",
        "target": "140162361205008"
    },
    {
        "id": "140162361205008-140162361203952",
        "source": "140162361205008",
        "target": "140162361203952"
    },
    {
        "id": "140162361093008-140162361196704",
        "source": "140162361093008",
        "target": "140162361196704"
    },
    {
        "id": "140162361084704-140162362140720",
        "source": "140162361084704",
        "target": "140162362140720"
    },
    {
        "id": "140162554689568-140162362151440",
        "source": "140162554689568",
        "target": "140162362151440"
    },
    {
        "id": "140162362151440-140162361090464",
        "source": "140162362151440",
        "target": "140162361090464"
    },
    {
        "id": "140162361090464-140162361082496",
        "source": "140162361090464",
        "target": "140162361082496"
    },
    {
        "id": "140162361082496-140162361086144",
        "source": "140162361082496",
        "target": "140162361086144"
    },
    {
        "id": "140162361086144-140162361088208",
        "source": "140162361086144",
        "target": "140162361088208"
    },
    {
        "id": "140162361088208-140162361082544",
        "source": "140162361088208",
        "target": "140162361082544"
    },
    {
        "id": "140162361082544-140162362137456",
        "source": "140162361082544",
        "target": "140162362137456"
    },
    {
        "id": "140162361082544-140162361092048",
        "source": "140162361082544",
        "target": "140162361092048"
    },
    {
        "id": "140162361092048-140162362159840",
        "source": "140162361092048",
        "target": "140162362159840"
    },
    {
        "id": "140162362159840-140162362008064",
        "source": "140162362159840",
        "target": "140162362008064"
    },
    {
        "id": "140162362008064-140162361086384",
        "source": "140162362008064",
        "target": "140162361086384"
    },
    {
        "id": "140162361086384-140162362010368",
        "source": "140162361086384",
        "target": "140162362010368"
    },
    {
        "id": "140162362010368-140162361972464",
        "source": "140162362010368",
        "target": "140162361972464"
    },
    {
        "id": "140162361972464-140162362003024",
        "source": "140162361972464",
        "target": "140162362003024"
    },
    {
        "id": "140162362008064-140162361999472",
        "source": "140162362008064",
        "target": "140162361999472"
    },
    {
        "id": "140162361999472-140162361095120",
        "source": "140162361999472",
        "target": "140162361095120"
    },
    {
        "id": "140162361095120-140162362000768",
        "source": "140162361095120",
        "target": "140162362000768"
    },
    {
        "id": "140162361092048-140162361094544",
        "source": "140162361092048",
        "target": "140162361094544"
    },
    {
        "id": "140162362151440-140162361087536",
        "source": "140162362151440",
        "target": "140162361087536"
    },
    {
        "id": "140162361087536-140162362151344",
        "source": "140162361087536",
        "target": "140162362151344"
    },
    {
        "id": "140162362151344-140162362153648",
        "source": "140162362151344",
        "target": "140162362153648"
    },
    {
        "id": "140162362153648-140162362158448",
        "source": "140162362153648",
        "target": "140162362158448"
    },
    {
        "id": "140162362158448-140162362140096",
        "source": "140162362158448",
        "target": "140162362140096"
    },
    {
        "id": "140162362140096-140162362139328",
        "source": "140162362140096",
        "target": "140162362139328"
    },
    {
        "id": "140162362139328-140162362155568",
        "source": "140162362139328",
        "target": "140162362155568"
    },
    {
        "id": "140162362155568-140162361197040",
        "source": "140162362155568",
        "target": "140162361197040"
    },
    {
        "id": "140162361197040-140162362158736",
        "source": "140162361197040",
        "target": "140162362158736"
    },
    {
        "id": "140162362158736-140162361198000",
        "source": "140162362158736",
        "target": "140162361198000"
    },
    {
        "id": "140162362139328-140162362139616",
        "source": "140162362139328",
        "target": "140162362139616"
    },
    {
        "id": "140162362139616-140162362151824",
        "source": "140162362139616",
        "target": "140162362151824"
    },
    {
        "id": "140162362151824-140162362138128",
        "source": "140162362151824",
        "target": "140162362138128"
    },
    {
        "id": "140162361087536-140162362000384",
        "source": "140162361087536",
        "target": "140162362000384"
    },
    {
        "id": "140162362000384-140162361092480",
        "source": "140162362000384",
        "target": "140162361092480"
    },
    {
        "id": "140162361092480-140162361086528",
        "source": "140162361092480",
        "target": "140162361086528"
    },
    {
        "id": "140162361086528-140162361088256",
        "source": "140162361086528",
        "target": "140162361088256"
    },
    {
        "id": "140162361086528-140162361085088",
        "source": "140162361086528",
        "target": "140162361085088"
    },
    {
        "id": "140162361085088-140162362156816",
        "source": "140162361085088",
        "target": "140162362156816"
    },
    {
        "id": "140162361085088-140162361096752",
        "source": "140162361085088",
        "target": "140162361096752"
    },
    {
        "id": "140162361096752-140162362008880",
        "source": "140162361096752",
        "target": "140162362008880"
    },
    {
        "id": "140162362008880-140162361088112",
        "source": "140162362008880",
        "target": "140162361088112"
    },
    {
        "id": "140162361088112-140162361096224",
        "source": "140162361088112",
        "target": "140162361096224"
    },
    {
        "id": "140162361088112-140162361084464",
        "source": "140162361088112",
        "target": "140162361084464"
    },
    {
        "id": "140162361084464-140162362001584",
        "source": "140162361084464",
        "target": "140162362001584"
    },
    {
        "id": "140162362001584-140162361086768",
        "source": "140162362001584",
        "target": "140162361086768"
    },
    {
        "id": "140162361086768-140162361094976",
        "source": "140162361086768",
        "target": "140162361094976"
    },
    {
        "id": "140162361086768-140162361087728",
        "source": "140162361086768",
        "target": "140162361087728"
    },
    {
        "id": "140162361087728-140162361089504",
        "source": "140162361087728",
        "target": "140162361089504"
    },
    {
        "id": "140162361089504-140162362000000",
        "source": "140162361089504",
        "target": "140162362000000"
    },
    {
        "id": "140162362000000-140162361094496",
        "source": "140162362000000",
        "target": "140162361094496"
    },
    {
        "id": "140162361094496-140162361097760",
        "source": "140162361094496",
        "target": "140162361097760"
    },
    {
        "id": "140162361097760-140162361095552",
        "source": "140162361097760",
        "target": "140162361095552"
    },
    {
        "id": "140162361095552-140162362007296",
        "source": "140162361095552",
        "target": "140162362007296"
    },
    {
        "id": "140162362000000-140162361089168",
        "source": "140162362000000",
        "target": "140162361089168"
    },
    {
        "id": "140162361089168-140162361085568",
        "source": "140162361089168",
        "target": "140162361085568"
    },
    {
        "id": "140162361085568-140162361096512",
        "source": "140162361085568",
        "target": "140162361096512"
    },
    {
        "id": "140162361087728-140162361090272",
        "source": "140162361087728",
        "target": "140162361090272"
    },
    {
        "id": "140162361084464-140162361880784",
        "source": "140162361084464",
        "target": "140162361880784"
    },
    {
        "id": "140162361092480-140162362006480",
        "source": "140162361092480",
        "target": "140162362006480"
    },
    {
        "id": "140162362006480-140162362155040",
        "source": "140162362006480",
        "target": "140162362155040"
    },
    {
        "id": "140162362155040-140162362003504",
        "source": "140162362155040",
        "target": "140162362003504"
    },
    {
        "id": "140162362003504-140162362150288",
        "source": "140162362003504",
        "target": "140162362150288"
    },
    {
        "id": "140162362150288-140162362011472",
        "source": "140162362150288",
        "target": "140162362011472"
    },
    {
        "id": "140162362006480-140162362153552",
        "source": "140162362006480",
        "target": "140162362153552"
    },
    {
        "id": "140162362153552-140162362159216",
        "source": "140162362153552",
        "target": "140162362159216"
    },
    {
        "id": "140162362159216-140162362154896",
        "source": "140162362159216",
        "target": "140162362154896"
    },
    {
        "id": "(140162361087392->35)-(140162361083168->35)",
        "source": "140162361087392->35",
        "target": "140162361083168->35",
        "animated": true
    },
    {
        "id": "(140162361087392->113)-(140162361083168->113)",
        "source": "140162361087392->113",
        "target": "140162361083168->113",
        "animated": true
    },
    {
        "id": "(140162361087392->19)-(140162361083168->19)",
        "source": "140162361087392->19",
        "target": "140162361083168->19",
        "animated": true
    },
    {
        "id": "(140162361087392->16)-(140162361083168->16)",
        "source": "140162361087392->16",
        "target": "140162361083168->16",
        "animated": true
    },
    {
        "id": "(140162361087392->17)-(140162361083168->17)",
        "source": "140162361087392->17",
        "target": "140162361083168->17",
        "animated": true
    },
    {
        "id": "(140162361087392->122)-(140162361083168->122)",
        "source": "140162361087392->122",
        "target": "140162361083168->122",
        "animated": true
    },
    {
        "id": "(140162361087392->61)-(140162361083168->61)",
        "source": "140162361087392->61",
        "target": "140162361083168->61",
        "animated": true
    },
    {
        "id": "(140162361087392->198)-(140162361083168->198)",
        "source": "140162361087392->198",
        "target": "140162361083168->198",
        "animated": true
    },
    {
        "id": "(140162361087392->84)-(140162361083168->84)",
        "source": "140162361087392->84",
        "target": "140162361083168->84",
        "animated": true
    },
    {
        "id": "(140162361087392->231)-(140162361083168->231)",
        "source": "140162361087392->231",
        "target": "140162361083168->231",
        "animated": true
    },
    {
        "id": "(140162361087392->109)-(140162361083168->109)",
        "source": "140162361087392->109",
        "target": "140162361083168->109",
        "animated": true
    },
    {
        "id": "(140162361087392->245)-(140162361083168->245)",
        "source": "140162361087392->245",
        "target": "140162361083168->245",
        "animated": true
    },
    {
        "id": "(140162361087392->258)-(140162361083168->258)",
        "source": "140162361087392->258",
        "target": "140162361083168->258",
        "animated": true
    },
    {
        "id": "(140162361087392->272)-(140162361083168->109)",
        "source": "140162361087392->272",
        "target": "140162361083168->109",
        "animated": true
    },
    {
        "id": "(140162361083168->35)-(140162361201504->35)",
        "source": "140162361083168->35",
        "target": "140162361201504->35",
        "animated": true
    },
    {
        "id": "(140162361083168->113)-(140162361201504->113)",
        "source": "140162361083168->113",
        "target": "140162361201504->113",
        "animated": true
    },
    {
        "id": "(140162361083168->19)-(140162361201504->19)",
        "source": "140162361083168->19",
        "target": "140162361201504->19",
        "animated": true
    },
    {
        "id": "(140162361083168->16)-(140162361201504->16)",
        "source": "140162361083168->16",
        "target": "140162361201504->16",
        "animated": true
    },
    {
        "id": "(140162361083168->17)-(140162361201504->17)",
        "source": "140162361083168->17",
        "target": "140162361201504->17",
        "animated": true
    },
    {
        "id": "(140162361083168->122)-(140162361201504->122)",
        "source": "140162361083168->122",
        "target": "140162361201504->122",
        "animated": true
    },
    {
        "id": "(140162361083168->61)-(140162361201504->61)",
        "source": "140162361083168->61",
        "target": "140162361201504->61",
        "animated": true
    },
    {
        "id": "(140162361083168->198)-(140162361201504->198)",
        "source": "140162361083168->198",
        "target": "140162361201504->198",
        "animated": true
    },
    {
        "id": "(140162361083168->84)-(140162361201504->84)",
        "source": "140162361083168->84",
        "target": "140162361201504->84",
        "animated": true
    },
    {
        "id": "(140162361083168->231)-(140162361201504->231)",
        "source": "140162361083168->231",
        "target": "140162361201504->231",
        "animated": true
    },
    {
        "id": "(140162361083168->109)-(140162361201504->109)",
        "source": "140162361083168->109",
        "target": "140162361201504->109",
        "animated": true
    },
    {
        "id": "(140162361083168->245)-(140162361201504->245)",
        "source": "140162361083168->245",
        "target": "140162361201504->245",
        "animated": true
    },
    {
        "id": "(140162361083168->258)-(140162361201504->84)",
        "source": "140162361083168->258",
        "target": "140162361201504->84",
        "animated": true
    },
    {
        "id": "(140162361201504->35)-(140162361212688->35)",
        "source": "140162361201504->35",
        "target": "140162361212688->35",
        "animated": true
    },
    {
        "id": "(140162361201504->113)-(140162361212688->113)",
        "source": "140162361201504->113",
        "target": "140162361212688->113",
        "animated": true
    },
    {
        "id": "(140162361201504->19)-(140162361212688->19)",
        "source": "140162361201504->19",
        "target": "140162361212688->19",
        "animated": true
    },
    {
        "id": "(140162361201504->16)-(140162361212688->16)",
        "source": "140162361201504->16",
        "target": "140162361212688->16",
        "animated": true
    },
    {
        "id": "(140162361201504->17)-(140162361212688->17)",
        "source": "140162361201504->17",
        "target": "140162361212688->17",
        "animated": true
    },
    {
        "id": "(140162361201504->122)-(140162361212688->122)",
        "source": "140162361201504->122",
        "target": "140162361212688->122",
        "animated": true
    },
    {
        "id": "(140162361201504->61)-(140162361212688->61)",
        "source": "140162361201504->61",
        "target": "140162361212688->61",
        "animated": true
    },
    {
        "id": "(140162361201504->198)-(140162361212688->198)",
        "source": "140162361201504->198",
        "target": "140162361212688->198",
        "animated": true
    },
    {
        "id": "(140162361201504->84)-(140162361212688->84)",
        "source": "140162361201504->84",
        "target": "140162361212688->84",
        "animated": true
    },
    {
        "id": "(140162361201504->231)-(140162361212688->231)",
        "source": "140162361201504->231",
        "target": "140162361212688->231",
        "animated": true
    },
    {
        "id": "(140162361201504->109)-(140162361212688->109)",
        "source": "140162361201504->109",
        "target": "140162361212688->109",
        "animated": true
    },
    {
        "id": "(140162361201504->245)-(140162361212688->61)",
        "source": "140162361201504->245",
        "target": "140162361212688->61",
        "animated": true
    },
    {
        "id": "(140162554689568->35)-(140162361087296->35)",
        "source": "140162554689568->35",
        "target": "140162361087296->35",
        "animated": true
    },
    {
        "id": "(140162554689568->35)-(140162361971840->212)",
        "source": "140162554689568->35",
        "target": "140162361971840->212",
        "animated": true
    },
    {
        "id": "(140162554689568->113)-(140162361087296->113)",
        "source": "140162554689568->113",
        "target": "140162361087296->113",
        "animated": true
    },
    {
        "id": "(140162554689568->19)-(140162361087296->19)",
        "source": "140162554689568->19",
        "target": "140162361087296->19",
        "animated": true
    },
    {
        "id": "(140162554689568->16)-(140162361087296->16)",
        "source": "140162554689568->16",
        "target": "140162361087296->16",
        "animated": true
    },
    {
        "id": "(140162554689568->17)-(140162361087296->17)",
        "source": "140162554689568->17",
        "target": "140162361087296->17",
        "animated": true
    },
    {
        "id": "(140162554689568->122)-(140162361087296->122)",
        "source": "140162554689568->122",
        "target": "140162361087296->122",
        "animated": true
    },
    {
        "id": "(140162554689568->61)-(140162361087296->61)",
        "source": "140162554689568->61",
        "target": "140162361087296->61",
        "animated": true
    },
    {
        "id": "(140162554689568->198)-(140162361087296->198)",
        "source": "140162554689568->198",
        "target": "140162361087296->198",
        "animated": true
    },
    {
        "id": "(140162554689568->84)-(140162361087296->84)",
        "source": "140162554689568->84",
        "target": "140162361087296->84",
        "animated": true
    },
    {
        "id": "(140162554689568->231)-(140162361971840->231)",
        "source": "140162554689568->231",
        "target": "140162361971840->231",
        "animated": true
    },
    {
        "id": "(140162554689568->109)-(140162361971840->109)",
        "source": "140162554689568->109",
        "target": "140162361971840->109",
        "animated": true
    },
    {
        "id": "(140162361971840->231)-(140162361202992->231)",
        "source": "140162361971840->231",
        "target": "140162361202992->231",
        "animated": true
    },
    {
        "id": "(140162361971840->212)-(140162361202992->212)",
        "source": "140162361971840->212",
        "target": "140162361202992->212",
        "animated": true
    },
    {
        "id": "(140162361971840->109)-(140162361202992->109)",
        "source": "140162361971840->109",
        "target": "140162361202992->109",
        "animated": true
    },
    {
        "id": "(140162361202992->231)-(140162361208656->231)",
        "source": "140162361202992->231",
        "target": "140162361208656->231",
        "animated": true
    },
    {
        "id": "(140162361202992->212)-(140162361208656->212)",
        "source": "140162361202992->212",
        "target": "140162361208656->212",
        "animated": true
    },
    {
        "id": "(140162361202992->109)-(140162361208656->109)",
        "source": "140162361202992->109",
        "target": "140162361208656->109",
        "animated": true
    },
    {
        "id": "(140162361208656->231)-(140162362155424->231)",
        "source": "140162361208656->231",
        "target": "140162362155424->231",
        "animated": true
    },
    {
        "id": "(140162361208656->212)-(140162362155424->212)",
        "source": "140162361208656->212",
        "target": "140162362155424->212",
        "animated": true
    },
    {
        "id": "(140162361208656->109)-(140162362155424->109)",
        "source": "140162361208656->109",
        "target": "140162362155424->109",
        "animated": true
    },
    {
        "id": "(140162362155424->231)-(140162554689568->231)",
        "source": "140162362155424->231",
        "target": "140162554689568->231",
        "animated": true
    },
    {
        "id": "(140162362155424->212)-(140162554689568->212)",
        "source": "140162362155424->212",
        "target": "140162554689568->212",
        "animated": true
    },
    {
        "id": "(140162362155424->109)-(140162554689568->84)",
        "source": "140162362155424->109",
        "target": "140162554689568->84",
        "animated": true
    },
    {
        "id": "(140162361085712->212)-(140162361211584->212)",
        "source": "140162361085712->212",
        "target": "140162361211584->212",
        "animated": true
    },
    {
        "id": "(140162361085712->212)-(140162361207024->230)",
        "source": "140162361085712->212",
        "target": "140162361207024->230",
        "animated": true
    },
    {
        "id": "(140162361085712->210)-(140162361211584->210)",
        "source": "140162361085712->210",
        "target": "140162361211584->210",
        "animated": true
    },
    {
        "id": "(140162361085712->211)-(140162361211584->211)",
        "source": "140162361085712->211",
        "target": "140162361211584->211",
        "animated": true
    },
    {
        "id": "(140162361085712->227)-(140162361211584->227)",
        "source": "140162361085712->227",
        "target": "140162361211584->227",
        "animated": true
    },
    {
        "id": "(140162361085712->84)-(140162361211584->84)",
        "source": "140162361085712->84",
        "target": "140162361211584->84",
        "animated": true
    },
    {
        "id": "(140162361085712->231)-(140162361207024->231)",
        "source": "140162361085712->231",
        "target": "140162361207024->231",
        "animated": true
    },
    {
        "id": "(140162361084704->212)-(140162362140720->212)",
        "source": "140162361084704->212",
        "target": "140162362140720->212",
        "animated": true
    },
    {
        "id": "(140162361084704->212)-(140162361198096->229)",
        "source": "140162361084704->212",
        "target": "140162361198096->229",
        "animated": true
    },
    {
        "id": "(140162361084704->210)-(140162362140720->210)",
        "source": "140162361084704->210",
        "target": "140162362140720->210",
        "animated": true
    },
    {
        "id": "(140162361084704->211)-(140162362140720->211)",
        "source": "140162361084704->211",
        "target": "140162362140720->211",
        "animated": true
    },
    {
        "id": "(140162361084704->227)-(140162361198096->227)",
        "source": "140162361084704->227",
        "target": "140162361198096->227",
        "animated": true
    },
    {
        "id": "(140162361084704->84)-(140162361198096->84)",
        "source": "140162361084704->84",
        "target": "140162361198096->84",
        "animated": true
    },
    {
        "id": "(140162361198096->229)-(140162361209664->229)",
        "source": "140162361198096->229",
        "target": "140162361209664->229",
        "animated": true
    },
    {
        "id": "(140162361198096->227)-(140162361209664->227)",
        "source": "140162361198096->227",
        "target": "140162361209664->227",
        "animated": true
    },
    {
        "id": "(140162361198096->84)-(140162361209664->61)",
        "source": "140162361198096->84",
        "target": "140162361209664->61",
        "animated": true
    },
    {
        "id": "(140162361085280->213)-(140162361209232->213)",
        "source": "140162361085280->213",
        "target": "140162361209232->213",
        "animated": true
    },
    {
        "id": "(140162361085280->213)-(140162361202368->228)",
        "source": "140162361085280->213",
        "target": "140162361202368->228",
        "animated": true
    },
    {
        "id": "(140162361085280->214)-(140162361209232->214)",
        "source": "140162361085280->214",
        "target": "140162361209232->214",
        "animated": true
    },
    {
        "id": "(140162361085280->215)-(140162361209232->215)",
        "source": "140162361085280->215",
        "target": "140162361209232->215",
        "animated": true
    },
    {
        "id": "(140162361085280->216)-(140162361209232->216)",
        "source": "140162361085280->216",
        "target": "140162361209232->216",
        "animated": true
    },
    {
        "id": "(140162361085280->61)-(140162361209232->61)",
        "source": "140162361085280->61",
        "target": "140162361209232->61",
        "animated": true
    },
    {
        "id": "(140162361085280->227)-(140162361202368->227)",
        "source": "140162361085280->227",
        "target": "140162361202368->227",
        "animated": true
    },
    {
        "id": "(140162361085280->229)-(140162361202368->229)",
        "source": "140162361085280->229",
        "target": "140162361202368->229",
        "animated": true
    },
    {
        "id": "(140162361093008->213)-(140162361196704->213)",
        "source": "140162361093008->213",
        "target": "140162361196704->213",
        "animated": true
    },
    {
        "id": "(140162361093008->213)-(140162361206208->221)",
        "source": "140162361093008->213",
        "target": "140162361206208->221",
        "animated": true
    },
    {
        "id": "(140162361093008->214)-(140162361196704->214)",
        "source": "140162361093008->214",
        "target": "140162361196704->214",
        "animated": true
    },
    {
        "id": "(140162361093008->215)-(140162361196704->215)",
        "source": "140162361093008->215",
        "target": "140162361196704->215",
        "animated": true
    },
    {
        "id": "(140162361093008->216)-(140162361196704->216)",
        "source": "140162361093008->216",
        "target": "140162361196704->216",
        "animated": true
    },
    {
        "id": "(140162361093008->61)-(140162361206208->61)",
        "source": "140162361093008->61",
        "target": "140162361206208->61",
        "animated": true
    },
    {
        "id": "(140162361206208->221)-(140162361198432->221)",
        "source": "140162361206208->221",
        "target": "140162361198432->221",
        "animated": true
    },
    {
        "id": "(140162361198432->217)-(140162362137648->217)",
        "source": "140162361198432->217",
        "target": "140162362137648->217",
        "animated": true
    },
    {
        "id": "(140162361198432->218)-(140162362137648->218)",
        "source": "140162361198432->218",
        "target": "140162362137648->218",
        "animated": true
    },
    {
        "id": "(140162361198432->219)-(140162362137648->219)",
        "source": "140162361198432->219",
        "target": "140162362137648->219",
        "animated": true
    },
    {
        "id": "(140162361198432->220)-(140162362137648->220)",
        "source": "140162361198432->220",
        "target": "140162362137648->220",
        "animated": true
    },
    {
        "id": "(140162361198432->221)-(140162362137648->221)",
        "source": "140162361198432->221",
        "target": "140162362137648->221",
        "animated": true
    },
    {
        "id": "(140162361206352->222)-(140162361206112->222)",
        "source": "140162361206352->222",
        "target": "140162361206112->222",
        "animated": true
    },
    {
        "id": "(140162361206352->223)-(140162361206112->223)",
        "source": "140162361206352->223",
        "target": "140162361206112->223",
        "animated": true
    },
    {
        "id": "(140162361206352->224)-(140162361206112->224)",
        "source": "140162361206352->224",
        "target": "140162361206112->224",
        "animated": true
    },
    {
        "id": "(140162361206352->225)-(140162361206112->225)",
        "source": "140162361206352->225",
        "target": "140162361206112->225",
        "animated": true
    },
    {
        "id": "(140162361206352->226)-(140162361206112->226)",
        "source": "140162361206352->226",
        "target": "140162361206112->226",
        "animated": true
    },
    {
        "id": "(140162361206112->222)-(140162361197520->222)",
        "source": "140162361206112->222",
        "target": "140162361197520->222",
        "animated": true
    },
    {
        "id": "(140162361206112->223)-(140162361197520->223)",
        "source": "140162361206112->223",
        "target": "140162361197520->223",
        "animated": true
    },
    {
        "id": "(140162361206112->224)-(140162361197520->224)",
        "source": "140162361206112->224",
        "target": "140162361197520->224",
        "animated": true
    },
    {
        "id": "(140162361206112->225)-(140162361197520->225)",
        "source": "140162361206112->225",
        "target": "140162361197520->225",
        "animated": true
    },
    {
        "id": "(140162361206112->226)-(140162361197520->226)",
        "source": "140162361206112->226",
        "target": "140162361197520->226",
        "animated": true
    },
    {
        "id": "(140162361197520->222)-(140162361211152->222)",
        "source": "140162361197520->222",
        "target": "140162361211152->222",
        "animated": true
    },
    {
        "id": "(140162361197520->223)-(140162361211152->223)",
        "source": "140162361197520->223",
        "target": "140162361211152->223",
        "animated": true
    },
    {
        "id": "(140162361197520->224)-(140162361211152->224)",
        "source": "140162361197520->224",
        "target": "140162361211152->224",
        "animated": true
    },
    {
        "id": "(140162361197520->225)-(140162361211152->225)",
        "source": "140162361197520->225",
        "target": "140162361211152->225",
        "animated": true
    },
    {
        "id": "(140162361197520->226)-(140162361211152->226)",
        "source": "140162361197520->226",
        "target": "140162361211152->226",
        "animated": true
    },
    {
        "id": "(140162362137648->217)-(140162361205008->217)",
        "source": "140162362137648->217",
        "target": "140162361205008->217",
        "animated": true
    },
    {
        "id": "(140162362137648->218)-(140162361205008->218)",
        "source": "140162362137648->218",
        "target": "140162361205008->218",
        "animated": true
    },
    {
        "id": "(140162362137648->219)-(140162361205008->219)",
        "source": "140162362137648->219",
        "target": "140162361205008->219",
        "animated": true
    },
    {
        "id": "(140162362137648->220)-(140162361205008->220)",
        "source": "140162362137648->220",
        "target": "140162361205008->220",
        "animated": true
    },
    {
        "id": "(140162362137648->221)-(140162361205008->221)",
        "source": "140162362137648->221",
        "target": "140162361205008->221",
        "animated": true
    },
    {
        "id": "(140162361205008->217)-(140162361203952->217)",
        "source": "140162361205008->217",
        "target": "140162361203952->217",
        "animated": true
    },
    {
        "id": "(140162361205008->218)-(140162361203952->218)",
        "source": "140162361205008->218",
        "target": "140162361203952->218",
        "animated": true
    },
    {
        "id": "(140162361205008->219)-(140162361203952->219)",
        "source": "140162361205008->219",
        "target": "140162361203952->219",
        "animated": true
    },
    {
        "id": "(140162361205008->220)-(140162361203952->220)",
        "source": "140162361205008->220",
        "target": "140162361203952->220",
        "animated": true
    },
    {
        "id": "(140162361205008->221)-(140162361203952->221)",
        "source": "140162361205008->221",
        "target": "140162361203952->221",
        "animated": true
    },
    {
        "id": "(140162362151440->113)-(140162557407632->113)",
        "source": "140162362151440->113",
        "target": "140162557407632->113",
        "animated": true
    },
    {
        "id": "(140162362151440->113)-(140162361090464->196)",
        "source": "140162362151440->113",
        "target": "140162361090464->196",
        "animated": true
    },
    {
        "id": "(140162362151440->19)-(140162557407632->19)",
        "source": "140162362151440->19",
        "target": "140162557407632->19",
        "animated": true
    },
    {
        "id": "(140162362151440->16)-(140162557407632->16)",
        "source": "140162362151440->16",
        "target": "140162557407632->16",
        "animated": true
    },
    {
        "id": "(140162362151440->17)-(140162557407632->17)",
        "source": "140162362151440->17",
        "target": "140162557407632->17",
        "animated": true
    },
    {
        "id": "(140162362151440->122)-(140162557407632->122)",
        "source": "140162362151440->122",
        "target": "140162557407632->122",
        "animated": true
    },
    {
        "id": "(140162362151440->35)-(140162557407632->35)",
        "source": "140162362151440->35",
        "target": "140162557407632->35",
        "animated": true
    },
    {
        "id": "(140162362151440->61)-(140162557407632->61)",
        "source": "140162362151440->61",
        "target": "140162557407632->61",
        "animated": true
    },
    {
        "id": "(140162362151440->198)-(140162361090464->198)",
        "source": "140162362151440->198",
        "target": "140162361090464->198",
        "animated": true
    },
    {
        "id": "(140162362151440->84)-(140162361090464->84)",
        "source": "140162362151440->84",
        "target": "140162361090464->84",
        "animated": true
    },
    {
        "id": "(140162361090464->198)-(140162361082496->198)",
        "source": "140162361090464->198",
        "target": "140162361082496->198",
        "animated": true
    },
    {
        "id": "(140162361090464->196)-(140162361082496->196)",
        "source": "140162361090464->196",
        "target": "140162361082496->196",
        "animated": true
    },
    {
        "id": "(140162361090464->84)-(140162361082496->84)",
        "source": "140162361090464->84",
        "target": "140162361082496->84",
        "animated": true
    },
    {
        "id": "(140162361082496->198)-(140162361086144->198)",
        "source": "140162361082496->198",
        "target": "140162361086144->198",
        "animated": true
    },
    {
        "id": "(140162361082496->196)-(140162361086144->196)",
        "source": "140162361082496->196",
        "target": "140162361086144->196",
        "animated": true
    },
    {
        "id": "(140162361082496->84)-(140162361086144->84)",
        "source": "140162361082496->84",
        "target": "140162361086144->84",
        "animated": true
    },
    {
        "id": "(140162361086144->198)-(140162361088208->198)",
        "source": "140162361086144->198",
        "target": "140162361088208->198",
        "animated": true
    },
    {
        "id": "(140162361086144->196)-(140162361088208->196)",
        "source": "140162361086144->196",
        "target": "140162361088208->196",
        "animated": true
    },
    {
        "id": "(140162361086144->84)-(140162361088208->84)",
        "source": "140162361086144->84",
        "target": "140162361088208->84",
        "animated": true
    },
    {
        "id": "(140162361088208->198)-(140162361879824->198)",
        "source": "140162361088208->198",
        "target": "140162361879824->198",
        "animated": true
    },
    {
        "id": "(140162361088208->196)-(140162361879824->196)",
        "source": "140162361088208->196",
        "target": "140162361879824->196",
        "animated": true
    },
    {
        "id": "(140162361088208->84)-(140162361879824->61)",
        "source": "140162361088208->84",
        "target": "140162361879824->61",
        "animated": true
    },
    {
        "id": "(140162361082544->182)-(140162361082544->182)",
        "source": "140162361082544->182",
        "target": "140162361082544->182",
        "animated": true
    },
    {
        "id": "(140162361082544->182)-(140162362137456->197)",
        "source": "140162361082544->182",
        "target": "140162362137456->197",
        "animated": true
    },
    {
        "id": "(140162361082544->183)-(140162361082544->183)",
        "source": "140162361082544->183",
        "target": "140162361082544->183",
        "animated": true
    },
    {
        "id": "(140162361082544->184)-(140162361082544->184)",
        "source": "140162361082544->184",
        "target": "140162361082544->184",
        "animated": true
    },
    {
        "id": "(140162361082544->185)-(140162361082544->185)",
        "source": "140162361082544->185",
        "target": "140162361082544->185",
        "animated": true
    },
    {
        "id": "(140162361082544->61)-(140162361082544->61)",
        "source": "140162361082544->61",
        "target": "140162361082544->61",
        "animated": true
    },
    {
        "id": "(140162361082544->196)-(140162362137456->196)",
        "source": "140162361082544->196",
        "target": "140162362137456->196",
        "animated": true
    },
    {
        "id": "(140162361082544->198)-(140162362137456->198)",
        "source": "140162361082544->198",
        "target": "140162362137456->198",
        "animated": true
    },
    {
        "id": "(140162361092048->182)-(140162361094544->182)",
        "source": "140162361092048->182",
        "target": "140162361094544->182",
        "animated": true
    },
    {
        "id": "(140162361092048->182)-(140162362159840->190)",
        "source": "140162361092048->182",
        "target": "140162362159840->190",
        "animated": true
    },
    {
        "id": "(140162361092048->183)-(140162361094544->183)",
        "source": "140162361092048->183",
        "target": "140162361094544->183",
        "animated": true
    },
    {
        "id": "(140162361092048->184)-(140162361094544->184)",
        "source": "140162361092048->184",
        "target": "140162361094544->184",
        "animated": true
    },
    {
        "id": "(140162361092048->185)-(140162361094544->185)",
        "source": "140162361092048->185",
        "target": "140162361094544->185",
        "animated": true
    },
    {
        "id": "(140162361092048->61)-(140162362159840->61)",
        "source": "140162361092048->61",
        "target": "140162362159840->61",
        "animated": true
    },
    {
        "id": "(140162362159840->190)-(140162362008064->190)",
        "source": "140162362159840->190",
        "target": "140162362008064->190",
        "animated": true
    },
    {
        "id": "(140162362008064->186)-(140162361999472->186)",
        "source": "140162362008064->186",
        "target": "140162361999472->186",
        "animated": true
    },
    {
        "id": "(140162362008064->187)-(140162361999472->187)",
        "source": "140162362008064->187",
        "target": "140162361999472->187",
        "animated": true
    },
    {
        "id": "(140162362008064->188)-(140162361999472->188)",
        "source": "140162362008064->188",
        "target": "140162361999472->188",
        "animated": true
    },
    {
        "id": "(140162362008064->189)-(140162361999472->189)",
        "source": "140162362008064->189",
        "target": "140162361999472->189",
        "animated": true
    },
    {
        "id": "(140162362008064->190)-(140162361999472->190)",
        "source": "140162362008064->190",
        "target": "140162361999472->190",
        "animated": true
    },
    {
        "id": "(140162361086384->191)-(140162362010368->191)",
        "source": "140162361086384->191",
        "target": "140162362010368->191",
        "animated": true
    },
    {
        "id": "(140162361086384->192)-(140162362010368->192)",
        "source": "140162361086384->192",
        "target": "140162362010368->192",
        "animated": true
    },
    {
        "id": "(140162361086384->193)-(140162362010368->193)",
        "source": "140162361086384->193",
        "target": "140162362010368->193",
        "animated": true
    },
    {
        "id": "(140162361086384->194)-(140162362010368->194)",
        "source": "140162361086384->194",
        "target": "140162362010368->194",
        "animated": true
    },
    {
        "id": "(140162361086384->195)-(140162362010368->195)",
        "source": "140162361086384->195",
        "target": "140162362010368->195",
        "animated": true
    },
    {
        "id": "(140162362010368->191)-(140162361972464->191)",
        "source": "140162362010368->191",
        "target": "140162361972464->191",
        "animated": true
    },
    {
        "id": "(140162362010368->192)-(140162361972464->192)",
        "source": "140162362010368->192",
        "target": "140162361972464->192",
        "animated": true
    },
    {
        "id": "(140162362010368->193)-(140162361972464->193)",
        "source": "140162362010368->193",
        "target": "140162361972464->193",
        "animated": true
    },
    {
        "id": "(140162362010368->194)-(140162361972464->194)",
        "source": "140162362010368->194",
        "target": "140162361972464->194",
        "animated": true
    },
    {
        "id": "(140162362010368->195)-(140162361972464->195)",
        "source": "140162362010368->195",
        "target": "140162361972464->195",
        "animated": true
    },
    {
        "id": "(140162361972464->191)-(140162362003024->191)",
        "source": "140162361972464->191",
        "target": "140162362003024->191",
        "animated": true
    },
    {
        "id": "(140162361972464->192)-(140162362003024->192)",
        "source": "140162361972464->192",
        "target": "140162362003024->192",
        "animated": true
    },
    {
        "id": "(140162361972464->193)-(140162362003024->193)",
        "source": "140162361972464->193",
        "target": "140162362003024->193",
        "animated": true
    },
    {
        "id": "(140162361972464->194)-(140162362003024->194)",
        "source": "140162361972464->194",
        "target": "140162362003024->194",
        "animated": true
    },
    {
        "id": "(140162361972464->195)-(140162362003024->195)",
        "source": "140162361972464->195",
        "target": "140162362003024->195",
        "animated": true
    },
    {
        "id": "(140162361999472->186)-(140162361095120->186)",
        "source": "140162361999472->186",
        "target": "140162361095120->186",
        "animated": true
    },
    {
        "id": "(140162361999472->187)-(140162361095120->187)",
        "source": "140162361999472->187",
        "target": "140162361095120->187",
        "animated": true
    },
    {
        "id": "(140162361999472->188)-(140162361095120->188)",
        "source": "140162361999472->188",
        "target": "140162361095120->188",
        "animated": true
    },
    {
        "id": "(140162361999472->189)-(140162361095120->189)",
        "source": "140162361999472->189",
        "target": "140162361095120->189",
        "animated": true
    },
    {
        "id": "(140162361999472->190)-(140162361095120->190)",
        "source": "140162361999472->190",
        "target": "140162361095120->190",
        "animated": true
    },
    {
        "id": "(140162361095120->186)-(140162362000768->186)",
        "source": "140162361095120->186",
        "target": "140162362000768->186",
        "animated": true
    },
    {
        "id": "(140162361095120->187)-(140162362000768->187)",
        "source": "140162361095120->187",
        "target": "140162362000768->187",
        "animated": true
    },
    {
        "id": "(140162361095120->188)-(140162362000768->188)",
        "source": "140162361095120->188",
        "target": "140162362000768->188",
        "animated": true
    },
    {
        "id": "(140162361095120->189)-(140162362000768->189)",
        "source": "140162361095120->189",
        "target": "140162362000768->189",
        "animated": true
    },
    {
        "id": "(140162361095120->190)-(140162362000768->190)",
        "source": "140162361095120->190",
        "target": "140162362000768->190",
        "animated": true
    },
    {
        "id": "(140162361087536->19)-(140162362000384->19)",
        "source": "140162361087536->19",
        "target": "140162362000384->19",
        "animated": true
    },
    {
        "id": "(140162361087536->19)-(140162362151344->167)",
        "source": "140162361087536->19",
        "target": "140162362151344->167",
        "animated": true
    },
    {
        "id": "(140162361087536->16)-(140162362000384->16)",
        "source": "140162361087536->16",
        "target": "140162362000384->16",
        "animated": true
    },
    {
        "id": "(140162361087536->17)-(140162362000384->17)",
        "source": "140162361087536->17",
        "target": "140162362000384->17",
        "animated": true
    },
    {
        "id": "(140162361087536->122)-(140162362000384->122)",
        "source": "140162361087536->122",
        "target": "140162362000384->122",
        "animated": true
    },
    {
        "id": "(140162361087536->113)-(140162362000384->113)",
        "source": "140162361087536->113",
        "target": "140162362000384->113",
        "animated": true
    },
    {
        "id": "(140162361087536->35)-(140162362000384->35)",
        "source": "140162361087536->35",
        "target": "140162362000384->35",
        "animated": true
    },
    {
        "id": "(140162361087536->61)-(140162362151344->61)",
        "source": "140162361087536->61",
        "target": "140162362151344->61",
        "animated": true
    },
    {
        "id": "(140162362151344->167)-(140162362153648->167)",
        "source": "140162362151344->167",
        "target": "140162362153648->167",
        "animated": true
    },
    {
        "id": "(140162362151344->61)-(140162362153648->61)",
        "source": "140162362151344->61",
        "target": "140162362153648->61",
        "animated": true
    },
    {
        "id": "(140162362153648->167)-(140162362158448->167)",
        "source": "140162362153648->167",
        "target": "140162362158448->167",
        "animated": true
    },
    {
        "id": "(140162362153648->61)-(140162362158448->61)",
        "source": "140162362153648->61",
        "target": "140162362158448->61",
        "animated": true
    },
    {
        "id": "(140162362158448->167)-(140162362140096->167)",
        "source": "140162362158448->167",
        "target": "140162362140096->167",
        "animated": true
    },
    {
        "id": "(140162362158448->61)-(140162362140096->61)",
        "source": "140162362158448->61",
        "target": "140162362140096->61",
        "animated": true
    },
    {
        "id": "(140162362140096->167)-(140162362139328->167)",
        "source": "140162362140096->167",
        "target": "140162362139328->167",
        "animated": true
    },
    {
        "id": "(140162362139328->163)-(140162362139616->163)",
        "source": "140162362139328->163",
        "target": "140162362139616->163",
        "animated": true
    },
    {
        "id": "(140162362139328->164)-(140162362139616->164)",
        "source": "140162362139328->164",
        "target": "140162362139616->164",
        "animated": true
    },
    {
        "id": "(140162362139328->165)-(140162362139616->165)",
        "source": "140162362139328->165",
        "target": "140162362139616->165",
        "animated": true
    },
    {
        "id": "(140162362139328->166)-(140162362139616->166)",
        "source": "140162362139328->166",
        "target": "140162362139616->166",
        "animated": true
    },
    {
        "id": "(140162362139328->167)-(140162362139616->167)",
        "source": "140162362139328->167",
        "target": "140162362139616->167",
        "animated": true
    },
    {
        "id": "(140162362155568->168)-(140162361197040->168)",
        "source": "140162362155568->168",
        "target": "140162361197040->168",
        "animated": true
    },
    {
        "id": "(140162362155568->169)-(140162361197040->169)",
        "source": "140162362155568->169",
        "target": "140162361197040->169",
        "animated": true
    },
    {
        "id": "(140162362155568->170)-(140162361197040->170)",
        "source": "140162362155568->170",
        "target": "140162361197040->170",
        "animated": true
    },
    {
        "id": "(140162362155568->171)-(140162361197040->171)",
        "source": "140162362155568->171",
        "target": "140162361197040->171",
        "animated": true
    },
    {
        "id": "(140162362155568->172)-(140162361197040->172)",
        "source": "140162362155568->172",
        "target": "140162361197040->172",
        "animated": true
    },
    {
        "id": "(140162361197040->168)-(140162362158736->168)",
        "source": "140162361197040->168",
        "target": "140162362158736->168",
        "animated": true
    },
    {
        "id": "(140162361197040->169)-(140162362158736->169)",
        "source": "140162361197040->169",
        "target": "140162362158736->169",
        "animated": true
    },
    {
        "id": "(140162361197040->170)-(140162362158736->170)",
        "source": "140162361197040->170",
        "target": "140162362158736->170",
        "animated": true
    },
    {
        "id": "(140162361197040->171)-(140162362158736->171)",
        "source": "140162361197040->171",
        "target": "140162362158736->171",
        "animated": true
    },
    {
        "id": "(140162361197040->172)-(140162362158736->172)",
        "source": "140162361197040->172",
        "target": "140162362158736->172",
        "animated": true
    },
    {
        "id": "(140162362158736->168)-(140162361198000->168)",
        "source": "140162362158736->168",
        "target": "140162361198000->168",
        "animated": true
    },
    {
        "id": "(140162362158736->169)-(140162361198000->169)",
        "source": "140162362158736->169",
        "target": "140162361198000->169",
        "animated": true
    },
    {
        "id": "(140162362158736->170)-(140162361198000->170)",
        "source": "140162362158736->170",
        "target": "140162361198000->170",
        "animated": true
    },
    {
        "id": "(140162362158736->171)-(140162361198000->171)",
        "source": "140162362158736->171",
        "target": "140162361198000->171",
        "animated": true
    },
    {
        "id": "(140162362158736->172)-(140162361198000->172)",
        "source": "140162362158736->172",
        "target": "140162361198000->172",
        "animated": true
    },
    {
        "id": "(140162362139616->163)-(140162362151824->163)",
        "source": "140162362139616->163",
        "target": "140162362151824->163",
        "animated": true
    },
    {
        "id": "(140162362139616->164)-(140162362151824->164)",
        "source": "140162362139616->164",
        "target": "140162362151824->164",
        "animated": true
    },
    {
        "id": "(140162362139616->165)-(140162362151824->165)",
        "source": "140162362139616->165",
        "target": "140162362151824->165",
        "animated": true
    },
    {
        "id": "(140162362139616->166)-(140162362151824->166)",
        "source": "140162362139616->166",
        "target": "140162362151824->166",
        "animated": true
    },
    {
        "id": "(140162362139616->167)-(140162362151824->167)",
        "source": "140162362139616->167",
        "target": "140162362151824->167",
        "animated": true
    },
    {
        "id": "(140162362151824->163)-(140162362138128->163)",
        "source": "140162362151824->163",
        "target": "140162362138128->163",
        "animated": true
    },
    {
        "id": "(140162362151824->164)-(140162362138128->164)",
        "source": "140162362151824->164",
        "target": "140162362138128->164",
        "animated": true
    },
    {
        "id": "(140162362151824->165)-(140162362138128->165)",
        "source": "140162362151824->165",
        "target": "140162362138128->165",
        "animated": true
    },
    {
        "id": "(140162362151824->166)-(140162362138128->166)",
        "source": "140162362151824->166",
        "target": "140162362138128->166",
        "animated": true
    },
    {
        "id": "(140162362151824->167)-(140162362138128->167)",
        "source": "140162362151824->167",
        "target": "140162362138128->167",
        "animated": true
    },
    {
        "id": "(140162362000384->16)-(140162362012864->16)",
        "source": "140162362000384->16",
        "target": "140162362012864->16",
        "animated": true
    },
    {
        "id": "(140162362000384->17)-(140162362012864->17)",
        "source": "140162362000384->17",
        "target": "140162362012864->17",
        "animated": true
    },
    {
        "id": "(140162362000384->19)-(140162362012864->19)",
        "source": "140162362000384->19",
        "target": "140162362012864->19",
        "animated": true
    },
    {
        "id": "(140162362000384->122)-(140162362012864->122)",
        "source": "140162362000384->122",
        "target": "140162362012864->122",
        "animated": true
    },
    {
        "id": "(140162362000384->113)-(140162362012864->113)",
        "source": "140162362000384->113",
        "target": "140162362012864->113",
        "animated": true
    },
    {
        "id": "(140162362000384->35)-(140162362012864->35)",
        "source": "140162362000384->35",
        "target": "140162362012864->35",
        "animated": true
    },
    {
        "id": "(140162361092480->19)-(140162362006480->19)",
        "source": "140162361092480->19",
        "target": "140162362006480->19",
        "animated": true
    },
    {
        "id": "(140162361092480->19)-(140162362001104->114)",
        "source": "140162361092480->19",
        "target": "140162362001104->114",
        "animated": true
    },
    {
        "id": "(140162361092480->15)-(140162362006480->15)",
        "source": "140162361092480->15",
        "target": "140162362006480->15",
        "animated": true
    },
    {
        "id": "(140162361092480->16)-(140162362006480->16)",
        "source": "140162361092480->16",
        "target": "140162362006480->16",
        "animated": true
    },
    {
        "id": "(140162361092480->17)-(140162362006480->17)",
        "source": "140162361092480->17",
        "target": "140162362006480->17",
        "animated": true
    },
    {
        "id": "(140162361092480->18)-(140162362006480->18)",
        "source": "140162361092480->18",
        "target": "140162362006480->18",
        "animated": true
    },
    {
        "id": "(140162361092480->35)-(140162362001104->35)",
        "source": "140162361092480->35",
        "target": "140162362001104->35",
        "animated": true
    },
    {
        "id": "(140162361092480->40)-(140162362001104->40)",
        "source": "140162361092480->40",
        "target": "140162362001104->40",
        "animated": true
    },
    {
        "id": "(140162361092480->109)-(140162362001104->109)",
        "source": "140162361092480->109",
        "target": "140162362001104->109",
        "animated": true
    },
    {
        "id": "(140162361092480->113)-(140162362001104->113)",
        "source": "140162361092480->113",
        "target": "140162362001104->113",
        "animated": true
    },
    {
        "id": "(140162361092480->122)-(140162362001104->122)",
        "source": "140162361092480->122",
        "target": "140162362001104->122",
        "animated": true
    },
    {
        "id": "(140162361092480->123)-(140162362001104->123)",
        "source": "140162361092480->123",
        "target": "140162362001104->123",
        "animated": true
    },
    {
        "id": "(140162361092480->124)-(140162362001104->124)",
        "source": "140162361092480->124",
        "target": "140162362001104->124",
        "animated": true
    },
    {
        "id": "(140162361086528->114)-(140162362009072->114)",
        "source": "140162361086528->114",
        "target": "140162362009072->114",
        "animated": true
    },
    {
        "id": "(140162361086528->114)-(140162361088256->121)",
        "source": "140162361086528->114",
        "target": "140162361088256->121",
        "animated": true
    },
    {
        "id": "(140162361086528->35)-(140162362009072->35)",
        "source": "140162361086528->35",
        "target": "140162362009072->35",
        "animated": true
    },
    {
        "id": "(140162361086528->40)-(140162362009072->40)",
        "source": "140162361086528->40",
        "target": "140162362009072->40",
        "animated": true
    },
    {
        "id": "(140162361086528->109)-(140162362009072->109)",
        "source": "140162361086528->109",
        "target": "140162362009072->109",
        "animated": true
    },
    {
        "id": "(140162361086528->113)-(140162362009072->113)",
        "source": "140162361086528->113",
        "target": "140162362009072->113",
        "animated": true
    },
    {
        "id": "(140162361086528->122)-(140162361088256->122)",
        "source": "140162361086528->122",
        "target": "140162361088256->122",
        "animated": true
    },
    {
        "id": "(140162361086528->123)-(140162361088256->123)",
        "source": "140162361086528->123",
        "target": "140162361088256->123",
        "animated": true
    },
    {
        "id": "(140162361086528->124)-(140162361088256->124)",
        "source": "140162361086528->124",
        "target": "140162361088256->124",
        "animated": true
    },
    {
        "id": "(140162361085088->35)-(140162361096752->35)",
        "source": "140162361085088->35",
        "target": "140162361096752->35",
        "animated": true
    },
    {
        "id": "(140162361085088->35)-(140162362156816->115)",
        "source": "140162361085088->35",
        "target": "140162362156816->115",
        "animated": true
    },
    {
        "id": "(140162361085088->40)-(140162361096752->40)",
        "source": "140162361085088->40",
        "target": "140162361096752->40",
        "animated": true
    },
    {
        "id": "(140162361085088->109)-(140162361096752->109)",
        "source": "140162361085088->109",
        "target": "140162361096752->109",
        "animated": true
    },
    {
        "id": "(140162361085088->113)-(140162362156816->113)",
        "source": "140162361085088->113",
        "target": "140162362156816->113",
        "animated": true
    },
    {
        "id": "(140162361085088->114)-(140162362156816->114)",
        "source": "140162361085088->114",
        "target": "140162362156816->114",
        "animated": true
    },
    {
        "id": "(140162361096752->40)-(140162362008880->40)",
        "source": "140162361096752->40",
        "target": "140162362008880->40",
        "animated": true
    },
    {
        "id": "(140162361096752->35)-(140162362008880->35)",
        "source": "140162361096752->35",
        "target": "140162362008880->35",
        "animated": true
    },
    {
        "id": "(140162361096752->109)-(140162362008880->109)",
        "source": "140162361096752->109",
        "target": "140162362008880->109",
        "animated": true
    },
    {
        "id": "(140162362008880->40)-(140162362007344->40)",
        "source": "140162362008880->40",
        "target": "140162362007344->40",
        "animated": true
    },
    {
        "id": "(140162362008880->35)-(140162362007344->35)",
        "source": "140162362008880->35",
        "target": "140162362007344->35",
        "animated": true
    },
    {
        "id": "(140162362008880->109)-(140162362007344->84)",
        "source": "140162362008880->109",
        "target": "140162362007344->84",
        "animated": true
    },
    {
        "id": "(140162361088112->35)-(140162362001872->35)",
        "source": "140162361088112->35",
        "target": "140162362001872->35",
        "animated": true
    },
    {
        "id": "(140162361088112->35)-(140162361096224->39)",
        "source": "140162361088112->35",
        "target": "140162361096224->39",
        "animated": true
    },
    {
        "id": "(140162361088112->33)-(140162362001872->33)",
        "source": "140162361088112->33",
        "target": "140162362001872->33",
        "animated": true
    },
    {
        "id": "(140162361088112->34)-(140162362001872->34)",
        "source": "140162361088112->34",
        "target": "140162362001872->34",
        "animated": true
    },
    {
        "id": "(140162361088112->88)-(140162362001872->88)",
        "source": "140162361088112->88",
        "target": "140162362001872->88",
        "animated": true
    },
    {
        "id": "(140162361088112->84)-(140162362001872->84)",
        "source": "140162361088112->84",
        "target": "140162362001872->84",
        "animated": true
    },
    {
        "id": "(140162361088112->40)-(140162361096224->40)",
        "source": "140162361088112->40",
        "target": "140162361096224->40",
        "animated": true
    },
    {
        "id": "(140162361084464->35)-(140162361880784->35)",
        "source": "140162361084464->35",
        "target": "140162361880784->35",
        "animated": true
    },
    {
        "id": "(140162361084464->35)-(140162362001584->90)",
        "source": "140162361084464->35",
        "target": "140162362001584->90",
        "animated": true
    },
    {
        "id": "(140162361084464->33)-(140162361880784->33)",
        "source": "140162361084464->33",
        "target": "140162361880784->33",
        "animated": true
    },
    {
        "id": "(140162361084464->34)-(140162361880784->34)",
        "source": "140162361084464->34",
        "target": "140162361880784->34",
        "animated": true
    },
    {
        "id": "(140162361084464->88)-(140162362001584->88)",
        "source": "140162361084464->88",
        "target": "140162362001584->88",
        "animated": true
    },
    {
        "id": "(140162361084464->84)-(140162362001584->84)",
        "source": "140162361084464->84",
        "target": "140162362001584->84",
        "animated": true
    },
    {
        "id": "(140162362001584->90)-(140162361089936->90)",
        "source": "140162362001584->90",
        "target": "140162361089936->90",
        "animated": true
    },
    {
        "id": "(140162362001584->88)-(140162361089936->88)",
        "source": "140162362001584->88",
        "target": "140162361089936->88",
        "animated": true
    },
    {
        "id": "(140162362001584->84)-(140162361089936->61)",
        "source": "140162362001584->84",
        "target": "140162361089936->61",
        "animated": true
    },
    {
        "id": "(140162361086768->25)-(140162361086768->25)",
        "source": "140162361086768->25",
        "target": "140162361086768->25",
        "animated": true
    },
    {
        "id": "(140162361086768->25)-(140162361094976->89)",
        "source": "140162361086768->25",
        "target": "140162361094976->89",
        "animated": true
    },
    {
        "id": "(140162361086768->26)-(140162361086768->26)",
        "source": "140162361086768->26",
        "target": "140162361086768->26",
        "animated": true
    },
    {
        "id": "(140162361086768->27)-(140162361086768->27)",
        "source": "140162361086768->27",
        "target": "140162361086768->27",
        "animated": true
    },
    {
        "id": "(140162361086768->28)-(140162361086768->28)",
        "source": "140162361086768->28",
        "target": "140162361086768->28",
        "animated": true
    },
    {
        "id": "(140162361086768->61)-(140162361086768->61)",
        "source": "140162361086768->61",
        "target": "140162361086768->61",
        "animated": true
    },
    {
        "id": "(140162361086768->88)-(140162361094976->88)",
        "source": "140162361086768->88",
        "target": "140162361094976->88",
        "animated": true
    },
    {
        "id": "(140162361086768->90)-(140162361094976->90)",
        "source": "140162361086768->90",
        "target": "140162361094976->90",
        "animated": true
    },
    {
        "id": "(140162361087728->25)-(140162361090272->25)",
        "source": "140162361087728->25",
        "target": "140162361090272->25",
        "animated": true
    },
    {
        "id": "(140162361087728->25)-(140162361089504->137)",
        "source": "140162361087728->25",
        "target": "140162361089504->137",
        "animated": true
    },
    {
        "id": "(140162361087728->26)-(140162361090272->26)",
        "source": "140162361087728->26",
        "target": "140162361090272->26",
        "animated": true
    },
    {
        "id": "(140162361087728->27)-(140162361090272->27)",
        "source": "140162361087728->27",
        "target": "140162361090272->27",
        "animated": true
    },
    {
        "id": "(140162361087728->28)-(140162361090272->28)",
        "source": "140162361087728->28",
        "target": "140162361090272->28",
        "animated": true
    },
    {
        "id": "(140162361087728->61)-(140162361089504->61)",
        "source": "140162361087728->61",
        "target": "140162361089504->61",
        "animated": true
    },
    {
        "id": "(140162361089504->137)-(140162362000000->137)",
        "source": "140162361089504->137",
        "target": "140162362000000->137",
        "animated": true
    },
    {
        "id": "(140162362000000->133)-(140162361089168->133)",
        "source": "140162362000000->133",
        "target": "140162361089168->133",
        "animated": true
    },
    {
        "id": "(140162362000000->134)-(140162361089168->134)",
        "source": "140162362000000->134",
        "target": "140162361089168->134",
        "animated": true
    },
    {
        "id": "(140162362000000->135)-(140162361089168->135)",
        "source": "140162362000000->135",
        "target": "140162361089168->135",
        "animated": true
    },
    {
        "id": "(140162362000000->136)-(140162361089168->136)",
        "source": "140162362000000->136",
        "target": "140162361089168->136",
        "animated": true
    },
    {
        "id": "(140162362000000->137)-(140162361089168->137)",
        "source": "140162362000000->137",
        "target": "140162361089168->137",
        "animated": true
    },
    {
        "id": "(140162361094496->138)-(140162361097760->138)",
        "source": "140162361094496->138",
        "target": "140162361097760->138",
        "animated": true
    },
    {
        "id": "(140162361094496->139)-(140162361097760->139)",
        "source": "140162361094496->139",
        "target": "140162361097760->139",
        "animated": true
    },
    {
        "id": "(140162361094496->140)-(140162361097760->140)",
        "source": "140162361094496->140",
        "target": "140162361097760->140",
        "animated": true
    },
    {
        "id": "(140162361094496->141)-(140162361097760->141)",
        "source": "140162361094496->141",
        "target": "140162361097760->141",
        "animated": true
    },
    {
        "id": "(140162361094496->142)-(140162361097760->142)",
        "source": "140162361094496->142",
        "target": "140162361097760->142",
        "animated": true
    },
    {
        "id": "(140162361097760->138)-(140162361095552->138)",
        "source": "140162361097760->138",
        "target": "140162361095552->138",
        "animated": true
    },
    {
        "id": "(140162361097760->139)-(140162361095552->139)",
        "source": "140162361097760->139",
        "target": "140162361095552->139",
        "animated": true
    },
    {
        "id": "(140162361097760->140)-(140162361095552->140)",
        "source": "140162361097760->140",
        "target": "140162361095552->140",
        "animated": true
    },
    {
        "id": "(140162361097760->141)-(140162361095552->141)",
        "source": "140162361097760->141",
        "target": "140162361095552->141",
        "animated": true
    },
    {
        "id": "(140162361097760->142)-(140162361095552->142)",
        "source": "140162361097760->142",
        "target": "140162361095552->142",
        "animated": true
    },
    {
        "id": "(140162361095552->138)-(140162362007296->138)",
        "source": "140162361095552->138",
        "target": "140162362007296->138",
        "animated": true
    },
    {
        "id": "(140162361095552->139)-(140162362007296->139)",
        "source": "140162361095552->139",
        "target": "140162362007296->139",
        "animated": true
    },
    {
        "id": "(140162361095552->140)-(140162362007296->140)",
        "source": "140162361095552->140",
        "target": "140162362007296->140",
        "animated": true
    },
    {
        "id": "(140162361095552->141)-(140162362007296->141)",
        "source": "140162361095552->141",
        "target": "140162362007296->141",
        "animated": true
    },
    {
        "id": "(140162361095552->142)-(140162362007296->142)",
        "source": "140162361095552->142",
        "target": "140162362007296->142",
        "animated": true
    },
    {
        "id": "(140162361089168->133)-(140162361085568->133)",
        "source": "140162361089168->133",
        "target": "140162361085568->133",
        "animated": true
    },
    {
        "id": "(140162361089168->134)-(140162361085568->134)",
        "source": "140162361089168->134",
        "target": "140162361085568->134",
        "animated": true
    },
    {
        "id": "(140162361089168->135)-(140162361085568->135)",
        "source": "140162361089168->135",
        "target": "140162361085568->135",
        "animated": true
    },
    {
        "id": "(140162361089168->136)-(140162361085568->136)",
        "source": "140162361089168->136",
        "target": "140162361085568->136",
        "animated": true
    },
    {
        "id": "(140162361089168->137)-(140162361085568->137)",
        "source": "140162361089168->137",
        "target": "140162361085568->137",
        "animated": true
    },
    {
        "id": "(140162361085568->133)-(140162361096512->133)",
        "source": "140162361085568->133",
        "target": "140162361096512->133",
        "animated": true
    },
    {
        "id": "(140162361085568->134)-(140162361096512->134)",
        "source": "140162361085568->134",
        "target": "140162361096512->134",
        "animated": true
    },
    {
        "id": "(140162361085568->135)-(140162361096512->135)",
        "source": "140162361085568->135",
        "target": "140162361096512->135",
        "animated": true
    },
    {
        "id": "(140162361085568->136)-(140162361096512->136)",
        "source": "140162361085568->136",
        "target": "140162361096512->136",
        "animated": true
    },
    {
        "id": "(140162361085568->137)-(140162361096512->137)",
        "source": "140162361085568->137",
        "target": "140162361096512->137",
        "animated": true
    },
    {
        "id": "(140162362006480->15)-(140162362153552->15)",
        "source": "140162362006480->15",
        "target": "140162362153552->15",
        "animated": true
    },
    {
        "id": "(140162362006480->16)-(140162362153552->16)",
        "source": "140162362006480->16",
        "target": "140162362153552->16",
        "animated": true
    },
    {
        "id": "(140162362006480->17)-(140162362153552->17)",
        "source": "140162362006480->17",
        "target": "140162362153552->17",
        "animated": true
    },
    {
        "id": "(140162362006480->18)-(140162362153552->18)",
        "source": "140162362006480->18",
        "target": "140162362153552->18",
        "animated": true
    },
    {
        "id": "(140162362006480->19)-(140162362153552->19)",
        "source": "140162362006480->19",
        "target": "140162362153552->19",
        "animated": true
    },
    {
        "id": "(140162362155040->44)-(140162362003504->44)",
        "source": "140162362155040->44",
        "target": "140162362003504->44",
        "animated": true
    },
    {
        "id": "(140162362155040->45)-(140162362003504->45)",
        "source": "140162362155040->45",
        "target": "140162362003504->45",
        "animated": true
    },
    {
        "id": "(140162362155040->46)-(140162362003504->46)",
        "source": "140162362155040->46",
        "target": "140162362003504->46",
        "animated": true
    },
    {
        "id": "(140162362155040->47)-(140162362003504->47)",
        "source": "140162362155040->47",
        "target": "140162362003504->47",
        "animated": true
    },
    {
        "id": "(140162362155040->48)-(140162362003504->48)",
        "source": "140162362155040->48",
        "target": "140162362003504->48",
        "animated": true
    },
    {
        "id": "(140162362003504->44)-(140162362150288->44)",
        "source": "140162362003504->44",
        "target": "140162362150288->44",
        "animated": true
    },
    {
        "id": "(140162362003504->45)-(140162362150288->45)",
        "source": "140162362003504->45",
        "target": "140162362150288->45",
        "animated": true
    },
    {
        "id": "(140162362003504->46)-(140162362150288->46)",
        "source": "140162362003504->46",
        "target": "140162362150288->46",
        "animated": true
    },
    {
        "id": "(140162362003504->47)-(140162362150288->47)",
        "source": "140162362003504->47",
        "target": "140162362150288->47",
        "animated": true
    },
    {
        "id": "(140162362003504->48)-(140162362150288->48)",
        "source": "140162362003504->48",
        "target": "140162362150288->48",
        "animated": true
    },
    {
        "id": "(140162362150288->44)-(140162362011472->44)",
        "source": "140162362150288->44",
        "target": "140162362011472->44",
        "animated": true
    },
    {
        "id": "(140162362150288->45)-(140162362011472->45)",
        "source": "140162362150288->45",
        "target": "140162362011472->45",
        "animated": true
    },
    {
        "id": "(140162362150288->46)-(140162362011472->46)",
        "source": "140162362150288->46",
        "target": "140162362011472->46",
        "animated": true
    },
    {
        "id": "(140162362150288->47)-(140162362011472->47)",
        "source": "140162362150288->47",
        "target": "140162362011472->47",
        "animated": true
    },
    {
        "id": "(140162362150288->48)-(140162362011472->48)",
        "source": "140162362150288->48",
        "target": "140162362011472->48",
        "animated": true
    },
    {
        "id": "(140162362153552->15)-(140162362159216->15)",
        "source": "140162362153552->15",
        "target": "140162362159216->15",
        "animated": true
    },
    {
        "id": "(140162362153552->16)-(140162362159216->16)",
        "source": "140162362153552->16",
        "target": "140162362159216->16",
        "animated": true
    },
    {
        "id": "(140162362153552->17)-(140162362159216->17)",
        "source": "140162362153552->17",
        "target": "140162362159216->17",
        "animated": true
    },
    {
        "id": "(140162362153552->18)-(140162362159216->18)",
        "source": "140162362153552->18",
        "target": "140162362159216->18",
        "animated": true
    },
    {
        "id": "(140162362153552->19)-(140162362159216->19)",
        "source": "140162362153552->19",
        "target": "140162362159216->19",
        "animated": true
    },
    {
        "id": "(140162362159216->15)-(140162362154896->15)",
        "source": "140162362159216->15",
        "target": "140162362154896->15",
        "animated": true
    },
    {
        "id": "(140162362159216->16)-(140162362154896->16)",
        "source": "140162362159216->16",
        "target": "140162362154896->16",
        "animated": true
    },
    {
        "id": "(140162362159216->17)-(140162362154896->17)",
        "source": "140162362159216->17",
        "target": "140162362154896->17",
        "animated": true
    },
    {
        "id": "(140162362159216->18)-(140162362154896->18)",
        "source": "140162362159216->18",
        "target": "140162362154896->18",
        "animated": true
    },
    {
        "id": "(140162362159216->19)-(140162362154896->19)",
        "source": "140162362159216->19",
        "target": "140162362154896->19",
        "animated": true
    }
];
