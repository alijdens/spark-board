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
        "id": "140689770351488",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "140689770351488->35",
                "140689770351488->113",
                "140689770351488->19",
                "140689770351488->16",
                "140689770351488->17",
                "140689770351488->122",
                "140689770351488->61",
                "140689770351488->198",
                "140689770351488->84",
                "140689770351488->231",
                "140689770351488->109",
                "140689770351488->245",
                "140689770351488->258",
                "140689770351488->272"
            ]
        }
    },
    {
        "id": "140689770653504",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "140689770653504->35",
                "140689770653504->113",
                "140689770653504->19",
                "140689770653504->16",
                "140689770653504->17",
                "140689770653504->122",
                "140689770653504->61",
                "140689770653504->198",
                "140689770653504->84",
                "140689770653504->231",
                "140689770653504->109",
                "140689770653504->245",
                "140689770653504->258"
            ]
        }
    },
    {
        "id": "140689770659072",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "140689770659072->35",
                "140689770659072->113",
                "140689770659072->19",
                "140689770659072->16",
                "140689770659072->17",
                "140689770659072->122",
                "140689770659072->61",
                "140689770659072->198",
                "140689770659072->84",
                "140689770659072->231",
                "140689770659072->109",
                "140689770659072->245"
            ]
        }
    },
    {
        "id": "140689771687856",
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
                "140689771687856->35",
                "140689771687856->113",
                "140689771687856->19",
                "140689771687856->16",
                "140689771687856->17",
                "140689771687856->122",
                "140689771687856->61",
                "140689771687856->198",
                "140689771687856->84",
                "140689771687856->231",
                "140689771687856->109"
            ]
        }
    },
    {
        "id": "140689770652448",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140689770652448->231",
                "140689770652448->212",
                "140689770652448->109"
            ]
        }
    },
    {
        "id": "140689770450512",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140689770450512->231",
                "140689770450512->212",
                "140689770450512->109"
            ]
        }
    },
    {
        "id": "140689770780736",
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
                "140689770780736->231",
                "140689770780736->212",
                "140689770780736->109"
            ]
        }
    },
    {
        "id": "140689770452192",
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
                "140689770452192->231",
                "140689770452192->212",
                "140689770452192->109"
            ]
        }
    },
    {
        "id": "140689771796352",
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
                "140689771796352->212",
                "140689771796352->210",
                "140689771796352->211",
                "140689771796352->227",
                "140689771796352->84",
                "140689771796352->231"
            ]
        }
    },
    {
        "id": "140689770779104",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770779104->230",
                "140689770779104->231"
            ]
        }
    },
    {
        "id": "140689771793232",
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
                "140689771793232->212",
                "140689771793232->210",
                "140689771793232->211",
                "140689771793232->227",
                "140689771793232->84"
            ]
        }
    },
    {
        "id": "140689770781600",
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
                "140689770781600->229",
                "140689770781600->227",
                "140689770781600->84"
            ]
        }
    },
    {
        "id": "140689771687232",
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
                "140689771687232->213",
                "140689771687232->214",
                "140689771687232->215",
                "140689771687232->216",
                "140689771687232->61",
                "140689771687232->227",
                "140689771687232->229"
            ]
        }
    },
    {
        "id": "140689770774832",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770774832->227",
                "140689770774832->228",
                "140689770774832->229"
            ]
        }
    },
    {
        "id": "140689770454880",
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
                "140689770454880->213",
                "140689770454880->214",
                "140689770454880->215",
                "140689770454880->216",
                "140689770454880->61"
            ]
        }
    },
    {
        "id": "140689770659552",
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
                "140689770659552->221",
                "140689770659552->61"
            ]
        }
    },
    {
        "id": "140689770455792",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770455792->217",
                "140689770455792->218",
                "140689770455792->219",
                "140689770455792->220",
                "140689770455792->221"
            ]
        }
    },
    {
        "id": "140689770916512",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770916512->222",
                "140689770916512->223",
                "140689770916512->224",
                "140689770916512->225",
                "140689770916512->226"
            ]
        }
    },
    {
        "id": "140689770910128",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140689770910128->222",
                "140689770910128->223",
                "140689770910128->224",
                "140689770910128->225",
                "140689770910128->226"
            ]
        }
    },
    {
        "id": "140689770918768",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770918768->222",
                "140689770918768->223",
                "140689770918768->224",
                "140689770918768->225",
                "140689770918768->226"
            ]
        }
    },
    {
        "id": "140689770916944",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770916944->222",
                "140689770916944->223",
                "140689770916944->224",
                "140689770916944->225",
                "140689770916944->226"
            ]
        }
    },
    {
        "id": "140689770457952",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140689770457952->217",
                "140689770457952->218",
                "140689770457952->219",
                "140689770457952->220",
                "140689770457952->221"
            ]
        }
    },
    {
        "id": "140689770912816",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770912816->217",
                "140689770912816->218",
                "140689770912816->219",
                "140689770912816->220",
                "140689770912816->221"
            ]
        }
    },
    {
        "id": "140689770914256",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770914256->217",
                "140689770914256->218",
                "140689770914256->219",
                "140689770914256->220",
                "140689770914256->221"
            ]
        }
    },
    {
        "id": "140689771690400",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689771690400->213",
                "140689771690400->214",
                "140689771690400->215",
                "140689771690400->216"
            ]
        }
    },
    {
        "id": "140689770647744",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770647744->210",
                "140689770647744->211",
                "140689770647744->212"
            ]
        }
    },
    {
        "id": "140689771688816",
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
                "140689771688816->113",
                "140689771688816->19",
                "140689771688816->16",
                "140689771688816->17",
                "140689771688816->122",
                "140689771688816->35",
                "140689771688816->61",
                "140689771688816->198",
                "140689771688816->84"
            ]
        }
    },
    {
        "id": "140689770648704",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140689770648704->198",
                "140689770648704->196",
                "140689770648704->84"
            ]
        }
    },
    {
        "id": "140689770647648",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140689770647648->198",
                "140689770647648->196",
                "140689770647648->84"
            ]
        }
    },
    {
        "id": "140689770364736",
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
                "140689770364736->198",
                "140689770364736->196",
                "140689770364736->84"
            ]
        }
    },
    {
        "id": "140689770647696",
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
                "140689770647696->198",
                "140689770647696->196",
                "140689770647696->84"
            ]
        }
    },
    {
        "id": "140689771792224",
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
                "140689771792224->182",
                "140689771792224->183",
                "140689771792224->184",
                "140689771792224->185",
                "140689771792224->61",
                "140689771792224->196",
                "140689771792224->198"
            ]
        }
    },
    {
        "id": "140689770450896",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770450896->196",
                "140689770450896->197",
                "140689770450896->198"
            ]
        }
    },
    {
        "id": "140689771792512",
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
                "140689771792512->182",
                "140689771792512->183",
                "140689771792512->184",
                "140689771792512->185",
                "140689771792512->61"
            ]
        }
    },
    {
        "id": "140689770778144",
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
                "140689770778144->190",
                "140689770778144->61"
            ]
        }
    },
    {
        "id": "140689770786640",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770786640->186",
                "140689770786640->187",
                "140689770786640->188",
                "140689770786640->189",
                "140689770786640->190"
            ]
        }
    },
    {
        "id": "140689770654224",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770654224->191",
                "140689770654224->192",
                "140689770654224->193",
                "140689770654224->194",
                "140689770654224->195"
            ]
        }
    },
    {
        "id": "140689770788128",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140689770788128->191",
                "140689770788128->192",
                "140689770788128->193",
                "140689770788128->194",
                "140689770788128->195"
            ]
        }
    },
    {
        "id": "140689770451328",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770451328->191",
                "140689770451328->192",
                "140689770451328->193",
                "140689770451328->194",
                "140689770451328->195"
            ]
        }
    },
    {
        "id": "140689770777136",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770777136->191",
                "140689770777136->192",
                "140689770777136->193",
                "140689770777136->194",
                "140689770777136->195"
            ]
        }
    },
    {
        "id": "140689770654656",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140689770654656->186",
                "140689770654656->187",
                "140689770654656->188",
                "140689770654656->189",
                "140689770654656->190"
            ]
        }
    },
    {
        "id": "140689770786208",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770786208->186",
                "140689770786208->187",
                "140689770786208->188",
                "140689770786208->189",
                "140689770786208->190"
            ]
        }
    },
    {
        "id": "140689770362768",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770362768->186",
                "140689770362768->187",
                "140689770362768->188",
                "140689770362768->189",
                "140689770362768->190"
            ]
        }
    },
    {
        "id": "140689770448304",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770448304->182",
                "140689770448304->183",
                "140689770448304->184",
                "140689770448304->185"
            ]
        }
    },
    {
        "id": "140689771690448",
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
                "140689771690448->19",
                "140689771690448->16",
                "140689771690448->17",
                "140689771690448->122",
                "140689771690448->113",
                "140689771690448->35",
                "140689771690448->61"
            ]
        }
    },
    {
        "id": "140689770360704",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140689770360704->167",
                "140689770360704->61"
            ]
        }
    },
    {
        "id": "140689770456752",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140689770456752->167",
                "140689770456752->61"
            ]
        }
    },
    {
        "id": "140689770448688",
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
                "140689770448688->167",
                "140689770448688->61"
            ]
        }
    },
    {
        "id": "140689770451952",
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
                "140689770451952->167",
                "140689770451952->61"
            ]
        }
    },
    {
        "id": "140689770449024",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770449024->163",
                "140689770449024->164",
                "140689770449024->165",
                "140689770449024->166",
                "140689770449024->167"
            ]
        }
    },
    {
        "id": "140689770461648",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770461648->168",
                "140689770461648->169",
                "140689770461648->170",
                "140689770461648->171",
                "140689770461648->172"
            ]
        }
    },
    {
        "id": "140689770906528",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140689770906528->168",
                "140689770906528->169",
                "140689770906528->170",
                "140689770906528->171",
                "140689770906528->172"
            ]
        }
    },
    {
        "id": "140689770458048",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770458048->168",
                "140689770458048->169",
                "140689770458048->170",
                "140689770458048->171",
                "140689770458048->172"
            ]
        }
    },
    {
        "id": "140689770907776",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770907776->168",
                "140689770907776->169",
                "140689770907776->170",
                "140689770907776->171",
                "140689770907776->172"
            ]
        }
    },
    {
        "id": "140689770458864",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140689770458864->163",
                "140689770458864->164",
                "140689770458864->165",
                "140689770458864->166",
                "140689770458864->167"
            ]
        }
    },
    {
        "id": "140689770458912",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770458912->163",
                "140689770458912->164",
                "140689770458912->165",
                "140689770458912->166",
                "140689770458912->167"
            ]
        }
    },
    {
        "id": "140689770451664",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770451664->163",
                "140689770451664->164",
                "140689770451664->165",
                "140689770451664->166",
                "140689770451664->167"
            ]
        }
    },
    {
        "id": "140689770652688",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140689770652688->16",
                "140689770652688->17",
                "140689770652688->19",
                "140689770652688->122",
                "140689770652688->113",
                "140689770652688->35"
            ]
        }
    },
    {
        "id": "140689771691264",
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
                "140689771691264->19",
                "140689771691264->15",
                "140689771691264->16",
                "140689771691264->17",
                "140689771691264->18",
                "140689771691264->35",
                "140689771691264->40",
                "140689771691264->109",
                "140689771691264->113",
                "140689771691264->122",
                "140689771691264->123",
                "140689771691264->124"
            ]
        }
    },
    {
        "id": "140689771689344",
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
                "140689771689344->114",
                "140689771689344->35",
                "140689771689344->40",
                "140689771689344->109",
                "140689771689344->113",
                "140689771689344->122",
                "140689771689344->123",
                "140689771689344->124"
            ]
        }
    },
    {
        "id": "140689770653552",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770653552->121",
                "140689770653552->122",
                "140689770653552->123",
                "140689770653552->124"
            ]
        }
    },
    {
        "id": "140689771685792",
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
                "140689771685792->35",
                "140689771685792->40",
                "140689771685792->109",
                "140689771685792->113",
                "140689771685792->114"
            ]
        }
    },
    {
        "id": "140689770787120",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770787120->113",
                "140689770787120->114",
                "140689770787120->115"
            ]
        }
    },
    {
        "id": "140689770656864",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "140689770656864->40",
                "140689770656864->35",
                "140689770656864->109"
            ]
        }
    },
    {
        "id": "140689770653360",
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
                "140689770653360->40",
                "140689770653360->35",
                "140689770653360->109"
            ]
        }
    },
    {
        "id": "140689771686848",
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
                "140689771686848->35",
                "140689771686848->33",
                "140689771686848->34",
                "140689771686848->88",
                "140689771686848->84",
                "140689771686848->40"
            ]
        }
    },
    {
        "id": "140689770782224",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770782224->39",
                "140689770782224->40"
            ]
        }
    },
    {
        "id": "140689771685984",
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
                "140689771685984->35",
                "140689771685984->33",
                "140689771685984->34",
                "140689771685984->88",
                "140689771685984->84"
            ]
        }
    },
    {
        "id": "140689770785440",
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
                "140689770785440->90",
                "140689770785440->88",
                "140689770785440->84"
            ]
        }
    },
    {
        "id": "140689771690640",
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
                "140689771690640->25",
                "140689771690640->26",
                "140689771690640->27",
                "140689771690640->28",
                "140689771690640->61",
                "140689771690640->88",
                "140689771690640->90"
            ]
        }
    },
    {
        "id": "140689770778240",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770778240->88",
                "140689770778240->89",
                "140689770778240->90"
            ]
        }
    },
    {
        "id": "140689771690928",
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
                "140689771690928->25",
                "140689771690928->26",
                "140689771690928->27",
                "140689771690928->28",
                "140689771690928->61"
            ]
        }
    },
    {
        "id": "140689770461840",
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
                "140689770461840->137",
                "140689770461840->61"
            ]
        }
    },
    {
        "id": "140689770779824",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770779824->133",
                "140689770779824->134",
                "140689770779824->135",
                "140689770779824->136",
                "140689770779824->137"
            ]
        }
    },
    {
        "id": "140689770788032",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770788032->138",
                "140689770788032->139",
                "140689770788032->140",
                "140689770788032->141",
                "140689770788032->142"
            ]
        }
    },
    {
        "id": "140689770643856",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140689770643856->138",
                "140689770643856->139",
                "140689770643856->140",
                "140689770643856->141",
                "140689770643856->142"
            ]
        }
    },
    {
        "id": "140689770778576",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770778576->138",
                "140689770778576->139",
                "140689770778576->140",
                "140689770778576->141",
                "140689770778576->142"
            ]
        }
    },
    {
        "id": "140689770790192",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770790192->138",
                "140689770790192->139",
                "140689770790192->140",
                "140689770790192->141",
                "140689770790192->142"
            ]
        }
    },
    {
        "id": "140689770787168",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140689770787168->133",
                "140689770787168->134",
                "140689770787168->135",
                "140689770787168->136",
                "140689770787168->137"
            ]
        }
    },
    {
        "id": "140689770907056",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770907056->133",
                "140689770907056->134",
                "140689770907056->135",
                "140689770907056->136",
                "140689770907056->137"
            ]
        }
    },
    {
        "id": "140689770787360",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770787360->133",
                "140689770787360->134",
                "140689770787360->135",
                "140689770787360->136",
                "140689770787360->137"
            ]
        }
    },
    {
        "id": "140689770456608",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770456608->25",
                "140689770456608->26",
                "140689770456608->27",
                "140689770456608->28"
            ]
        }
    },
    {
        "id": "140689770658352",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140689770658352->33",
                "140689770658352->34",
                "140689770658352->35"
            ]
        }
    },
    {
        "id": "140689770449744",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770449744->15",
                "140689770449744->16",
                "140689770449744->17",
                "140689770449744->18",
                "140689770449744->19"
            ]
        }
    },
    {
        "id": "140689770462176",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140689770462176->44",
                "140689770462176->45",
                "140689770462176->46",
                "140689770462176->47",
                "140689770462176->48"
            ]
        }
    },
    {
        "id": "140689770461408",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140689770461408->44",
                "140689770461408->45",
                "140689770461408->46",
                "140689770461408->47",
                "140689770461408->48"
            ]
        }
    },
    {
        "id": "140689770646880",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770646880->44",
                "140689770646880->45",
                "140689770646880->46",
                "140689770646880->47",
                "140689770646880->48"
            ]
        }
    },
    {
        "id": "140689770458672",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770458672->44",
                "140689770458672->45",
                "140689770458672->46",
                "140689770458672->47",
                "140689770458672->48"
            ]
        }
    },
    {
        "id": "140689770457664",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140689770457664->15",
                "140689770457664->16",
                "140689770457664->17",
                "140689770457664->18",
                "140689770457664->19"
            ]
        }
    },
    {
        "id": "140689770459200",
        "type": "transformation",
        "data": {
            "type": "Alias",
            "label": "Alias",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "alias": "spark_catalog.default.people"
            },
            "columns": [
                "140689770459200->15",
                "140689770459200->16",
                "140689770459200->17",
                "140689770459200->18",
                "140689770459200->19"
            ]
        }
    },
    {
        "id": "140689770455504",
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
                "storage": "Storage(Location: file:/tmp/tmpe9c2v4xd/spark-warehouse/people)"
            },
            "columns": [
                "140689770455504->15",
                "140689770455504->16",
                "140689770455504->17",
                "140689770455504->18",
                "140689770455504->19"
            ]
        }
    },
    {
        "id": "140689770351488->35",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689770653504->35"
            ]
        }
    },
    {
        "id": "140689770351488->113",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689770653504->113"
            ]
        }
    },
    {
        "id": "140689770351488->19",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689770653504->19"
            ]
        }
    },
    {
        "id": "140689770351488->16",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770653504->16"
            ]
        }
    },
    {
        "id": "140689770351488->17",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770653504->17"
            ]
        }
    },
    {
        "id": "140689770351488->122",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689770653504->122"
            ]
        }
    },
    {
        "id": "140689770351488->61",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770653504->61"
            ]
        }
    },
    {
        "id": "140689770351488->198",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770653504->198"
            ]
        }
    },
    {
        "id": "140689770351488->84",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770653504->84"
            ]
        }
    },
    {
        "id": "140689770351488->231",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770653504->231"
            ]
        }
    },
    {
        "id": "140689770351488->109",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770653504->109"
            ]
        }
    },
    {
        "id": "140689770351488->245",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#245: boolean\n",
            "linked_columns": [
                "140689770653504->245"
            ]
        }
    },
    {
        "id": "140689770351488->258",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 258,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#258: boolean\n",
            "linked_columns": [
                "140689770653504->258"
            ]
        }
    },
    {
        "id": "140689770351488->272",
        "type": "column",
        "parentNode": "140689770351488",
        "expandParent": true,
        "data": {
            "id": 272,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#272\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140689770653504->109"
            ]
        }
    },
    {
        "id": "140689770653504->35",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689770659072->35"
            ]
        }
    },
    {
        "id": "140689770653504->113",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689770659072->113"
            ]
        }
    },
    {
        "id": "140689770653504->19",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689770659072->19"
            ]
        }
    },
    {
        "id": "140689770653504->16",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770659072->16"
            ]
        }
    },
    {
        "id": "140689770653504->17",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770659072->17"
            ]
        }
    },
    {
        "id": "140689770653504->122",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689770659072->122"
            ]
        }
    },
    {
        "id": "140689770653504->61",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770659072->61"
            ]
        }
    },
    {
        "id": "140689770653504->198",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770659072->198"
            ]
        }
    },
    {
        "id": "140689770653504->84",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770659072->84"
            ]
        }
    },
    {
        "id": "140689770653504->231",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770659072->231"
            ]
        }
    },
    {
        "id": "140689770653504->109",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770659072->109"
            ]
        }
    },
    {
        "id": "140689770653504->245",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#245: boolean\n",
            "linked_columns": [
                "140689770659072->245"
            ]
        }
    },
    {
        "id": "140689770653504->258",
        "type": "column",
        "parentNode": "140689770653504",
        "expandParent": true,
        "data": {
            "id": 258,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#258\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140689770659072->84"
            ]
        }
    },
    {
        "id": "140689770659072->35",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689771687856->35"
            ]
        }
    },
    {
        "id": "140689770659072->113",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689771687856->113"
            ]
        }
    },
    {
        "id": "140689770659072->19",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689771687856->19"
            ]
        }
    },
    {
        "id": "140689770659072->16",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689771687856->16"
            ]
        }
    },
    {
        "id": "140689770659072->17",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689771687856->17"
            ]
        }
    },
    {
        "id": "140689770659072->122",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689771687856->122"
            ]
        }
    },
    {
        "id": "140689770659072->61",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689771687856->61"
            ]
        }
    },
    {
        "id": "140689770659072->198",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689771687856->198"
            ]
        }
    },
    {
        "id": "140689770659072->84",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689771687856->84"
            ]
        }
    },
    {
        "id": "140689770659072->231",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689771687856->231"
            ]
        }
    },
    {
        "id": "140689770659072->109",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689771687856->109"
            ]
        }
    },
    {
        "id": "140689770659072->245",
        "type": "column",
        "parentNode": "140689770659072",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#245\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140689771687856->61"
            ]
        }
    },
    {
        "id": "140689771687856->35",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#212)\n:- continent#35: string\n+- continent#212: string\n",
            "linked_columns": [
                "140689771688816->35",
                "140689770652448->212"
            ]
        }
    },
    {
        "id": "140689771687856->113",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689771688816->113"
            ]
        }
    },
    {
        "id": "140689771687856->19",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689771688816->19"
            ]
        }
    },
    {
        "id": "140689771687856->16",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689771688816->16"
            ]
        }
    },
    {
        "id": "140689771687856->17",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689771688816->17"
            ]
        }
    },
    {
        "id": "140689771687856->122",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689771688816->122"
            ]
        }
    },
    {
        "id": "140689771687856->61",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689771688816->61"
            ]
        }
    },
    {
        "id": "140689771687856->198",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689771688816->198"
            ]
        }
    },
    {
        "id": "140689771687856->84",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689771688816->84"
            ]
        }
    },
    {
        "id": "140689771687856->231",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770652448->231"
            ]
        }
    },
    {
        "id": "140689771687856->109",
        "type": "column",
        "parentNode": "140689771687856",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770652448->109"
            ]
        }
    },
    {
        "id": "140689770652448->231",
        "type": "column",
        "parentNode": "140689770652448",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770450512->231"
            ]
        }
    },
    {
        "id": "140689770652448->212",
        "type": "column",
        "parentNode": "140689770652448",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140689770450512->212"
            ]
        }
    },
    {
        "id": "140689770652448->109",
        "type": "column",
        "parentNode": "140689770652448",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770450512->109"
            ]
        }
    },
    {
        "id": "140689770450512->231",
        "type": "column",
        "parentNode": "140689770450512",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770780736->231"
            ]
        }
    },
    {
        "id": "140689770450512->212",
        "type": "column",
        "parentNode": "140689770450512",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140689770780736->212"
            ]
        }
    },
    {
        "id": "140689770450512->109",
        "type": "column",
        "parentNode": "140689770450512",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770780736->109"
            ]
        }
    },
    {
        "id": "140689770780736->231",
        "type": "column",
        "parentNode": "140689770780736",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770452192->231"
            ]
        }
    },
    {
        "id": "140689770780736->212",
        "type": "column",
        "parentNode": "140689770780736",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140689770452192->212"
            ]
        }
    },
    {
        "id": "140689770780736->109",
        "type": "column",
        "parentNode": "140689770780736",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770452192->109"
            ]
        }
    },
    {
        "id": "140689770452192->231",
        "type": "column",
        "parentNode": "140689770452192",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689771796352->231"
            ]
        }
    },
    {
        "id": "140689770452192->212",
        "type": "column",
        "parentNode": "140689770452192",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140689771796352->212"
            ]
        }
    },
    {
        "id": "140689770452192->109",
        "type": "column",
        "parentNode": "140689770452192",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140689771796352->84"
            ]
        }
    },
    {
        "id": "140689771796352->212",
        "type": "column",
        "parentNode": "140689771796352",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#212 = continent#230)\n:- continent#212: string\n+- continent#230: string\n",
            "linked_columns": [
                "140689771793232->212",
                "140689770779104->230"
            ]
        }
    },
    {
        "id": "140689771796352->210",
        "type": "column",
        "parentNode": "140689771796352",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140689771793232->210"
            ]
        }
    },
    {
        "id": "140689771796352->211",
        "type": "column",
        "parentNode": "140689771796352",
        "expandParent": true,
        "data": {
            "id": 211,
            "name": "city",
            "type": "string",
            "tree_string": "city#211: string\n",
            "linked_columns": [
                "140689771793232->211"
            ]
        }
    },
    {
        "id": "140689771796352->227",
        "type": "column",
        "parentNode": "140689771796352",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140689771793232->227"
            ]
        }
    },
    {
        "id": "140689771796352->84",
        "type": "column",
        "parentNode": "140689771796352",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689771793232->84"
            ]
        }
    },
    {
        "id": "140689771796352->231",
        "type": "column",
        "parentNode": "140689771796352",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140689770779104->231"
            ]
        }
    },
    {
        "id": "140689770779104->230",
        "type": "column",
        "parentNode": "140689770779104",
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
        "id": "140689770779104->231",
        "type": "column",
        "parentNode": "140689770779104",
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
        "id": "140689771793232->212",
        "type": "column",
        "parentNode": "140689771793232",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#212 = continent#229)\n:- continent#212: string\n+- continent#229: string\n",
            "linked_columns": [
                "140689770647744->212",
                "140689770781600->229"
            ]
        }
    },
    {
        "id": "140689771793232->210",
        "type": "column",
        "parentNode": "140689771793232",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "140689770647744->210"
            ]
        }
    },
    {
        "id": "140689771793232->211",
        "type": "column",
        "parentNode": "140689771793232",
        "expandParent": true,
        "data": {
            "id": 211,
            "name": "city",
            "type": "string",
            "tree_string": "city#211: string\n",
            "linked_columns": [
                "140689770647744->211"
            ]
        }
    },
    {
        "id": "140689771793232->227",
        "type": "column",
        "parentNode": "140689771793232",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140689770781600->227"
            ]
        }
    },
    {
        "id": "140689771793232->84",
        "type": "column",
        "parentNode": "140689771793232",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770781600->84"
            ]
        }
    },
    {
        "id": "140689770781600->229",
        "type": "column",
        "parentNode": "140689770781600",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#229: string\n",
            "linked_columns": [
                "140689771687232->229"
            ]
        }
    },
    {
        "id": "140689770781600->227",
        "type": "column",
        "parentNode": "140689770781600",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140689771687232->227"
            ]
        }
    },
    {
        "id": "140689770781600->84",
        "type": "column",
        "parentNode": "140689770781600",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140689771687232->61"
            ]
        }
    },
    {
        "id": "140689771687232->213",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 213,
            "name": "city",
            "type": "string",
            "tree_string": "(city#213 = city#228)\n:- city#213: string\n+- city#228: string\n",
            "linked_columns": [
                "140689770454880->213",
                "140689770774832->228"
            ]
        }
    },
    {
        "id": "140689771687232->214",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 214,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#214: string\n",
            "linked_columns": [
                "140689770454880->214"
            ]
        }
    },
    {
        "id": "140689771687232->215",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 215,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#215: float\n",
            "linked_columns": [
                "140689770454880->215"
            ]
        }
    },
    {
        "id": "140689771687232->216",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 216,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#216: float\n",
            "linked_columns": [
                "140689770454880->216"
            ]
        }
    },
    {
        "id": "140689771687232->61",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770454880->61"
            ]
        }
    },
    {
        "id": "140689771687232->227",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140689770774832->227"
            ]
        }
    },
    {
        "id": "140689771687232->229",
        "type": "column",
        "parentNode": "140689771687232",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#229: string\n",
            "linked_columns": [
                "140689770774832->229"
            ]
        }
    },
    {
        "id": "140689770774832->227",
        "type": "column",
        "parentNode": "140689770774832",
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
        "id": "140689770774832->228",
        "type": "column",
        "parentNode": "140689770774832",
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
        "id": "140689770774832->229",
        "type": "column",
        "parentNode": "140689770774832",
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
        "id": "140689770454880->213",
        "type": "column",
        "parentNode": "140689770454880",
        "expandParent": true,
        "data": {
            "id": 213,
            "name": "city",
            "type": "string",
            "tree_string": "(city#213 = city#221)\n:- city#213: string\n+- city#221: string\n",
            "linked_columns": [
                "140689771690400->213",
                "140689770659552->221"
            ]
        }
    },
    {
        "id": "140689770454880->214",
        "type": "column",
        "parentNode": "140689770454880",
        "expandParent": true,
        "data": {
            "id": 214,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#214: string\n",
            "linked_columns": [
                "140689771690400->214"
            ]
        }
    },
    {
        "id": "140689770454880->215",
        "type": "column",
        "parentNode": "140689770454880",
        "expandParent": true,
        "data": {
            "id": 215,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#215: float\n",
            "linked_columns": [
                "140689771690400->215"
            ]
        }
    },
    {
        "id": "140689770454880->216",
        "type": "column",
        "parentNode": "140689770454880",
        "expandParent": true,
        "data": {
            "id": 216,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#216: float\n",
            "linked_columns": [
                "140689771690400->216"
            ]
        }
    },
    {
        "id": "140689770454880->61",
        "type": "column",
        "parentNode": "140689770454880",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770659552->61"
            ]
        }
    },
    {
        "id": "140689770659552->221",
        "type": "column",
        "parentNode": "140689770659552",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140689770455792->221"
            ]
        }
    },
    {
        "id": "140689770659552->61",
        "type": "column",
        "parentNode": "140689770659552",
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
        "id": "140689770455792->217",
        "type": "column",
        "parentNode": "140689770455792",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": [
                "140689770457952->217"
            ]
        }
    },
    {
        "id": "140689770455792->218",
        "type": "column",
        "parentNode": "140689770455792",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": [
                "140689770457952->218"
            ]
        }
    },
    {
        "id": "140689770455792->219",
        "type": "column",
        "parentNode": "140689770455792",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": [
                "140689770457952->219"
            ]
        }
    },
    {
        "id": "140689770455792->220",
        "type": "column",
        "parentNode": "140689770455792",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": [
                "140689770457952->220"
            ]
        }
    },
    {
        "id": "140689770455792->221",
        "type": "column",
        "parentNode": "140689770455792",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140689770457952->221"
            ]
        }
    },
    {
        "id": "140689770916512->222",
        "type": "column",
        "parentNode": "140689770916512",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": [
                "140689770910128->222"
            ]
        }
    },
    {
        "id": "140689770916512->223",
        "type": "column",
        "parentNode": "140689770916512",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": [
                "140689770910128->223"
            ]
        }
    },
    {
        "id": "140689770916512->224",
        "type": "column",
        "parentNode": "140689770916512",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": [
                "140689770910128->224"
            ]
        }
    },
    {
        "id": "140689770916512->225",
        "type": "column",
        "parentNode": "140689770916512",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": [
                "140689770910128->225"
            ]
        }
    },
    {
        "id": "140689770916512->226",
        "type": "column",
        "parentNode": "140689770916512",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": [
                "140689770910128->226"
            ]
        }
    },
    {
        "id": "140689770910128->222",
        "type": "column",
        "parentNode": "140689770910128",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": [
                "140689770918768->222"
            ]
        }
    },
    {
        "id": "140689770910128->223",
        "type": "column",
        "parentNode": "140689770910128",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": [
                "140689770918768->223"
            ]
        }
    },
    {
        "id": "140689770910128->224",
        "type": "column",
        "parentNode": "140689770910128",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": [
                "140689770918768->224"
            ]
        }
    },
    {
        "id": "140689770910128->225",
        "type": "column",
        "parentNode": "140689770910128",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": [
                "140689770918768->225"
            ]
        }
    },
    {
        "id": "140689770910128->226",
        "type": "column",
        "parentNode": "140689770910128",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": [
                "140689770918768->226"
            ]
        }
    },
    {
        "id": "140689770918768->222",
        "type": "column",
        "parentNode": "140689770918768",
        "expandParent": true,
        "data": {
            "id": 222,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#222: int\n",
            "linked_columns": [
                "140689770916944->222"
            ]
        }
    },
    {
        "id": "140689770918768->223",
        "type": "column",
        "parentNode": "140689770918768",
        "expandParent": true,
        "data": {
            "id": 223,
            "name": "name",
            "type": "string",
            "tree_string": "name#223: string\n",
            "linked_columns": [
                "140689770916944->223"
            ]
        }
    },
    {
        "id": "140689770918768->224",
        "type": "column",
        "parentNode": "140689770918768",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "age",
            "type": "int",
            "tree_string": "age#224: int\n",
            "linked_columns": [
                "140689770916944->224"
            ]
        }
    },
    {
        "id": "140689770918768->225",
        "type": "column",
        "parentNode": "140689770918768",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#225: float\n",
            "linked_columns": [
                "140689770916944->225"
            ]
        }
    },
    {
        "id": "140689770918768->226",
        "type": "column",
        "parentNode": "140689770918768",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "city",
            "type": "string",
            "tree_string": "city#226: string\n",
            "linked_columns": [
                "140689770916944->226"
            ]
        }
    },
    {
        "id": "140689770916944->222",
        "type": "column",
        "parentNode": "140689770916944",
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
        "id": "140689770916944->223",
        "type": "column",
        "parentNode": "140689770916944",
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
        "id": "140689770916944->224",
        "type": "column",
        "parentNode": "140689770916944",
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
        "id": "140689770916944->225",
        "type": "column",
        "parentNode": "140689770916944",
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
        "id": "140689770916944->226",
        "type": "column",
        "parentNode": "140689770916944",
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
        "id": "140689770457952->217",
        "type": "column",
        "parentNode": "140689770457952",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": [
                "140689770912816->217"
            ]
        }
    },
    {
        "id": "140689770457952->218",
        "type": "column",
        "parentNode": "140689770457952",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": [
                "140689770912816->218"
            ]
        }
    },
    {
        "id": "140689770457952->219",
        "type": "column",
        "parentNode": "140689770457952",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": [
                "140689770912816->219"
            ]
        }
    },
    {
        "id": "140689770457952->220",
        "type": "column",
        "parentNode": "140689770457952",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": [
                "140689770912816->220"
            ]
        }
    },
    {
        "id": "140689770457952->221",
        "type": "column",
        "parentNode": "140689770457952",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140689770912816->221"
            ]
        }
    },
    {
        "id": "140689770912816->217",
        "type": "column",
        "parentNode": "140689770912816",
        "expandParent": true,
        "data": {
            "id": 217,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#217: int\n",
            "linked_columns": [
                "140689770914256->217"
            ]
        }
    },
    {
        "id": "140689770912816->218",
        "type": "column",
        "parentNode": "140689770912816",
        "expandParent": true,
        "data": {
            "id": 218,
            "name": "name",
            "type": "string",
            "tree_string": "name#218: string\n",
            "linked_columns": [
                "140689770914256->218"
            ]
        }
    },
    {
        "id": "140689770912816->219",
        "type": "column",
        "parentNode": "140689770912816",
        "expandParent": true,
        "data": {
            "id": 219,
            "name": "age",
            "type": "int",
            "tree_string": "age#219: int\n",
            "linked_columns": [
                "140689770914256->219"
            ]
        }
    },
    {
        "id": "140689770912816->220",
        "type": "column",
        "parentNode": "140689770912816",
        "expandParent": true,
        "data": {
            "id": 220,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#220: float\n",
            "linked_columns": [
                "140689770914256->220"
            ]
        }
    },
    {
        "id": "140689770912816->221",
        "type": "column",
        "parentNode": "140689770912816",
        "expandParent": true,
        "data": {
            "id": 221,
            "name": "city",
            "type": "string",
            "tree_string": "city#221: string\n",
            "linked_columns": [
                "140689770914256->221"
            ]
        }
    },
    {
        "id": "140689770914256->217",
        "type": "column",
        "parentNode": "140689770914256",
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
        "id": "140689770914256->218",
        "type": "column",
        "parentNode": "140689770914256",
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
        "id": "140689770914256->219",
        "type": "column",
        "parentNode": "140689770914256",
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
        "id": "140689770914256->220",
        "type": "column",
        "parentNode": "140689770914256",
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
        "id": "140689770914256->221",
        "type": "column",
        "parentNode": "140689770914256",
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
        "id": "140689771690400->213",
        "type": "column",
        "parentNode": "140689771690400",
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
        "id": "140689771690400->214",
        "type": "column",
        "parentNode": "140689771690400",
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
        "id": "140689771690400->215",
        "type": "column",
        "parentNode": "140689771690400",
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
        "id": "140689771690400->216",
        "type": "column",
        "parentNode": "140689771690400",
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
        "id": "140689770647744->210",
        "type": "column",
        "parentNode": "140689770647744",
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
        "id": "140689770647744->211",
        "type": "column",
        "parentNode": "140689770647744",
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
        "id": "140689770647744->212",
        "type": "column",
        "parentNode": "140689770647744",
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
        "id": "140689771688816->113",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#196)\n:- country#113: string\n+- country#196: string\n",
            "linked_columns": [
                "140689771690448->113",
                "140689770648704->196"
            ]
        }
    },
    {
        "id": "140689771688816->19",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689771690448->19"
            ]
        }
    },
    {
        "id": "140689771688816->16",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689771690448->16"
            ]
        }
    },
    {
        "id": "140689771688816->17",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689771690448->17"
            ]
        }
    },
    {
        "id": "140689771688816->122",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689771690448->122"
            ]
        }
    },
    {
        "id": "140689771688816->35",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689771690448->35"
            ]
        }
    },
    {
        "id": "140689771688816->61",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689771690448->61"
            ]
        }
    },
    {
        "id": "140689771688816->198",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770648704->198"
            ]
        }
    },
    {
        "id": "140689771688816->84",
        "type": "column",
        "parentNode": "140689771688816",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770648704->84"
            ]
        }
    },
    {
        "id": "140689770648704->198",
        "type": "column",
        "parentNode": "140689770648704",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770647648->198"
            ]
        }
    },
    {
        "id": "140689770648704->196",
        "type": "column",
        "parentNode": "140689770648704",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140689770647648->196"
            ]
        }
    },
    {
        "id": "140689770648704->84",
        "type": "column",
        "parentNode": "140689770648704",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770647648->84"
            ]
        }
    },
    {
        "id": "140689770647648->198",
        "type": "column",
        "parentNode": "140689770647648",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770364736->198"
            ]
        }
    },
    {
        "id": "140689770647648->196",
        "type": "column",
        "parentNode": "140689770647648",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140689770364736->196"
            ]
        }
    },
    {
        "id": "140689770647648->84",
        "type": "column",
        "parentNode": "140689770647648",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770364736->84"
            ]
        }
    },
    {
        "id": "140689770364736->198",
        "type": "column",
        "parentNode": "140689770364736",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770647696->198"
            ]
        }
    },
    {
        "id": "140689770364736->196",
        "type": "column",
        "parentNode": "140689770364736",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140689770647696->196"
            ]
        }
    },
    {
        "id": "140689770364736->84",
        "type": "column",
        "parentNode": "140689770364736",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770647696->84"
            ]
        }
    },
    {
        "id": "140689770647696->198",
        "type": "column",
        "parentNode": "140689770647696",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689771792224->198"
            ]
        }
    },
    {
        "id": "140689770647696->196",
        "type": "column",
        "parentNode": "140689770647696",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140689771792224->196"
            ]
        }
    },
    {
        "id": "140689770647696->84",
        "type": "column",
        "parentNode": "140689770647696",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140689771792224->61"
            ]
        }
    },
    {
        "id": "140689771792224->182",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "(city#182 = city#197)\n:- city#182: string\n+- city#197: string\n",
            "linked_columns": [
                "140689771792512->182",
                "140689770450896->197"
            ]
        }
    },
    {
        "id": "140689771792224->183",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": [
                "140689771792512->183"
            ]
        }
    },
    {
        "id": "140689771792224->184",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#184: float\n",
            "linked_columns": [
                "140689771792512->184"
            ]
        }
    },
    {
        "id": "140689771792224->185",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#185: float\n",
            "linked_columns": [
                "140689771792512->185"
            ]
        }
    },
    {
        "id": "140689771792224->61",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689771792512->61"
            ]
        }
    },
    {
        "id": "140689771792224->196",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140689770450896->196"
            ]
        }
    },
    {
        "id": "140689771792224->198",
        "type": "column",
        "parentNode": "140689771792224",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140689770450896->198"
            ]
        }
    },
    {
        "id": "140689770450896->196",
        "type": "column",
        "parentNode": "140689770450896",
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
        "id": "140689770450896->197",
        "type": "column",
        "parentNode": "140689770450896",
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
        "id": "140689770450896->198",
        "type": "column",
        "parentNode": "140689770450896",
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
        "id": "140689771792512->182",
        "type": "column",
        "parentNode": "140689771792512",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "(city#182 = city#190)\n:- city#182: string\n+- city#190: string\n",
            "linked_columns": [
                "140689770448304->182",
                "140689770778144->190"
            ]
        }
    },
    {
        "id": "140689771792512->183",
        "type": "column",
        "parentNode": "140689771792512",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": [
                "140689770448304->183"
            ]
        }
    },
    {
        "id": "140689771792512->184",
        "type": "column",
        "parentNode": "140689771792512",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#184: float\n",
            "linked_columns": [
                "140689770448304->184"
            ]
        }
    },
    {
        "id": "140689771792512->185",
        "type": "column",
        "parentNode": "140689771792512",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#185: float\n",
            "linked_columns": [
                "140689770448304->185"
            ]
        }
    },
    {
        "id": "140689771792512->61",
        "type": "column",
        "parentNode": "140689771792512",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770778144->61"
            ]
        }
    },
    {
        "id": "140689770778144->190",
        "type": "column",
        "parentNode": "140689770778144",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140689770786640->190"
            ]
        }
    },
    {
        "id": "140689770778144->61",
        "type": "column",
        "parentNode": "140689770778144",
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
        "id": "140689770786640->186",
        "type": "column",
        "parentNode": "140689770786640",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": [
                "140689770654656->186"
            ]
        }
    },
    {
        "id": "140689770786640->187",
        "type": "column",
        "parentNode": "140689770786640",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": [
                "140689770654656->187"
            ]
        }
    },
    {
        "id": "140689770786640->188",
        "type": "column",
        "parentNode": "140689770786640",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": [
                "140689770654656->188"
            ]
        }
    },
    {
        "id": "140689770786640->189",
        "type": "column",
        "parentNode": "140689770786640",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": [
                "140689770654656->189"
            ]
        }
    },
    {
        "id": "140689770786640->190",
        "type": "column",
        "parentNode": "140689770786640",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140689770654656->190"
            ]
        }
    },
    {
        "id": "140689770654224->191",
        "type": "column",
        "parentNode": "140689770654224",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": [
                "140689770788128->191"
            ]
        }
    },
    {
        "id": "140689770654224->192",
        "type": "column",
        "parentNode": "140689770654224",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": [
                "140689770788128->192"
            ]
        }
    },
    {
        "id": "140689770654224->193",
        "type": "column",
        "parentNode": "140689770654224",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": [
                "140689770788128->193"
            ]
        }
    },
    {
        "id": "140689770654224->194",
        "type": "column",
        "parentNode": "140689770654224",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": [
                "140689770788128->194"
            ]
        }
    },
    {
        "id": "140689770654224->195",
        "type": "column",
        "parentNode": "140689770654224",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": [
                "140689770788128->195"
            ]
        }
    },
    {
        "id": "140689770788128->191",
        "type": "column",
        "parentNode": "140689770788128",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": [
                "140689770451328->191"
            ]
        }
    },
    {
        "id": "140689770788128->192",
        "type": "column",
        "parentNode": "140689770788128",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": [
                "140689770451328->192"
            ]
        }
    },
    {
        "id": "140689770788128->193",
        "type": "column",
        "parentNode": "140689770788128",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": [
                "140689770451328->193"
            ]
        }
    },
    {
        "id": "140689770788128->194",
        "type": "column",
        "parentNode": "140689770788128",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": [
                "140689770451328->194"
            ]
        }
    },
    {
        "id": "140689770788128->195",
        "type": "column",
        "parentNode": "140689770788128",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": [
                "140689770451328->195"
            ]
        }
    },
    {
        "id": "140689770451328->191",
        "type": "column",
        "parentNode": "140689770451328",
        "expandParent": true,
        "data": {
            "id": 191,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#191: int\n",
            "linked_columns": [
                "140689770777136->191"
            ]
        }
    },
    {
        "id": "140689770451328->192",
        "type": "column",
        "parentNode": "140689770451328",
        "expandParent": true,
        "data": {
            "id": 192,
            "name": "name",
            "type": "string",
            "tree_string": "name#192: string\n",
            "linked_columns": [
                "140689770777136->192"
            ]
        }
    },
    {
        "id": "140689770451328->193",
        "type": "column",
        "parentNode": "140689770451328",
        "expandParent": true,
        "data": {
            "id": 193,
            "name": "age",
            "type": "int",
            "tree_string": "age#193: int\n",
            "linked_columns": [
                "140689770777136->193"
            ]
        }
    },
    {
        "id": "140689770451328->194",
        "type": "column",
        "parentNode": "140689770451328",
        "expandParent": true,
        "data": {
            "id": 194,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#194: float\n",
            "linked_columns": [
                "140689770777136->194"
            ]
        }
    },
    {
        "id": "140689770451328->195",
        "type": "column",
        "parentNode": "140689770451328",
        "expandParent": true,
        "data": {
            "id": 195,
            "name": "city",
            "type": "string",
            "tree_string": "city#195: string\n",
            "linked_columns": [
                "140689770777136->195"
            ]
        }
    },
    {
        "id": "140689770777136->191",
        "type": "column",
        "parentNode": "140689770777136",
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
        "id": "140689770777136->192",
        "type": "column",
        "parentNode": "140689770777136",
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
        "id": "140689770777136->193",
        "type": "column",
        "parentNode": "140689770777136",
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
        "id": "140689770777136->194",
        "type": "column",
        "parentNode": "140689770777136",
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
        "id": "140689770777136->195",
        "type": "column",
        "parentNode": "140689770777136",
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
        "id": "140689770654656->186",
        "type": "column",
        "parentNode": "140689770654656",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": [
                "140689770786208->186"
            ]
        }
    },
    {
        "id": "140689770654656->187",
        "type": "column",
        "parentNode": "140689770654656",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": [
                "140689770786208->187"
            ]
        }
    },
    {
        "id": "140689770654656->188",
        "type": "column",
        "parentNode": "140689770654656",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": [
                "140689770786208->188"
            ]
        }
    },
    {
        "id": "140689770654656->189",
        "type": "column",
        "parentNode": "140689770654656",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": [
                "140689770786208->189"
            ]
        }
    },
    {
        "id": "140689770654656->190",
        "type": "column",
        "parentNode": "140689770654656",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140689770786208->190"
            ]
        }
    },
    {
        "id": "140689770786208->186",
        "type": "column",
        "parentNode": "140689770786208",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#186: int\n",
            "linked_columns": [
                "140689770362768->186"
            ]
        }
    },
    {
        "id": "140689770786208->187",
        "type": "column",
        "parentNode": "140689770786208",
        "expandParent": true,
        "data": {
            "id": 187,
            "name": "name",
            "type": "string",
            "tree_string": "name#187: string\n",
            "linked_columns": [
                "140689770362768->187"
            ]
        }
    },
    {
        "id": "140689770786208->188",
        "type": "column",
        "parentNode": "140689770786208",
        "expandParent": true,
        "data": {
            "id": 188,
            "name": "age",
            "type": "int",
            "tree_string": "age#188: int\n",
            "linked_columns": [
                "140689770362768->188"
            ]
        }
    },
    {
        "id": "140689770786208->189",
        "type": "column",
        "parentNode": "140689770786208",
        "expandParent": true,
        "data": {
            "id": 189,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#189: float\n",
            "linked_columns": [
                "140689770362768->189"
            ]
        }
    },
    {
        "id": "140689770786208->190",
        "type": "column",
        "parentNode": "140689770786208",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140689770362768->190"
            ]
        }
    },
    {
        "id": "140689770362768->186",
        "type": "column",
        "parentNode": "140689770362768",
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
        "id": "140689770362768->187",
        "type": "column",
        "parentNode": "140689770362768",
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
        "id": "140689770362768->188",
        "type": "column",
        "parentNode": "140689770362768",
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
        "id": "140689770362768->189",
        "type": "column",
        "parentNode": "140689770362768",
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
        "id": "140689770362768->190",
        "type": "column",
        "parentNode": "140689770362768",
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
        "id": "140689770448304->182",
        "type": "column",
        "parentNode": "140689770448304",
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
        "id": "140689770448304->183",
        "type": "column",
        "parentNode": "140689770448304",
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
        "id": "140689770448304->184",
        "type": "column",
        "parentNode": "140689770448304",
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
        "id": "140689770448304->185",
        "type": "column",
        "parentNode": "140689770448304",
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
        "id": "140689771690448->19",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#167)\n:- city#19: string\n+- city#167: string\n",
            "linked_columns": [
                "140689770652688->19",
                "140689770360704->167"
            ]
        }
    },
    {
        "id": "140689771690448->16",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770652688->16"
            ]
        }
    },
    {
        "id": "140689771690448->17",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770652688->17"
            ]
        }
    },
    {
        "id": "140689771690448->122",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689770652688->122"
            ]
        }
    },
    {
        "id": "140689771690448->113",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689770652688->113"
            ]
        }
    },
    {
        "id": "140689771690448->35",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689770652688->35"
            ]
        }
    },
    {
        "id": "140689771690448->61",
        "type": "column",
        "parentNode": "140689771690448",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770360704->61"
            ]
        }
    },
    {
        "id": "140689770360704->167",
        "type": "column",
        "parentNode": "140689770360704",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770456752->167"
            ]
        }
    },
    {
        "id": "140689770360704->61",
        "type": "column",
        "parentNode": "140689770360704",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770456752->61"
            ]
        }
    },
    {
        "id": "140689770456752->167",
        "type": "column",
        "parentNode": "140689770456752",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770448688->167"
            ]
        }
    },
    {
        "id": "140689770456752->61",
        "type": "column",
        "parentNode": "140689770456752",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770448688->61"
            ]
        }
    },
    {
        "id": "140689770448688->167",
        "type": "column",
        "parentNode": "140689770448688",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770451952->167"
            ]
        }
    },
    {
        "id": "140689770448688->61",
        "type": "column",
        "parentNode": "140689770448688",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770451952->61"
            ]
        }
    },
    {
        "id": "140689770451952->167",
        "type": "column",
        "parentNode": "140689770451952",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770449024->167"
            ]
        }
    },
    {
        "id": "140689770451952->61",
        "type": "column",
        "parentNode": "140689770451952",
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
        "id": "140689770449024->163",
        "type": "column",
        "parentNode": "140689770449024",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": [
                "140689770458864->163"
            ]
        }
    },
    {
        "id": "140689770449024->164",
        "type": "column",
        "parentNode": "140689770449024",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": [
                "140689770458864->164"
            ]
        }
    },
    {
        "id": "140689770449024->165",
        "type": "column",
        "parentNode": "140689770449024",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": [
                "140689770458864->165"
            ]
        }
    },
    {
        "id": "140689770449024->166",
        "type": "column",
        "parentNode": "140689770449024",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": [
                "140689770458864->166"
            ]
        }
    },
    {
        "id": "140689770449024->167",
        "type": "column",
        "parentNode": "140689770449024",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770458864->167"
            ]
        }
    },
    {
        "id": "140689770461648->168",
        "type": "column",
        "parentNode": "140689770461648",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": [
                "140689770906528->168"
            ]
        }
    },
    {
        "id": "140689770461648->169",
        "type": "column",
        "parentNode": "140689770461648",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": [
                "140689770906528->169"
            ]
        }
    },
    {
        "id": "140689770461648->170",
        "type": "column",
        "parentNode": "140689770461648",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": [
                "140689770906528->170"
            ]
        }
    },
    {
        "id": "140689770461648->171",
        "type": "column",
        "parentNode": "140689770461648",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": [
                "140689770906528->171"
            ]
        }
    },
    {
        "id": "140689770461648->172",
        "type": "column",
        "parentNode": "140689770461648",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": [
                "140689770906528->172"
            ]
        }
    },
    {
        "id": "140689770906528->168",
        "type": "column",
        "parentNode": "140689770906528",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": [
                "140689770458048->168"
            ]
        }
    },
    {
        "id": "140689770906528->169",
        "type": "column",
        "parentNode": "140689770906528",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": [
                "140689770458048->169"
            ]
        }
    },
    {
        "id": "140689770906528->170",
        "type": "column",
        "parentNode": "140689770906528",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": [
                "140689770458048->170"
            ]
        }
    },
    {
        "id": "140689770906528->171",
        "type": "column",
        "parentNode": "140689770906528",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": [
                "140689770458048->171"
            ]
        }
    },
    {
        "id": "140689770906528->172",
        "type": "column",
        "parentNode": "140689770906528",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": [
                "140689770458048->172"
            ]
        }
    },
    {
        "id": "140689770458048->168",
        "type": "column",
        "parentNode": "140689770458048",
        "expandParent": true,
        "data": {
            "id": 168,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#168: int\n",
            "linked_columns": [
                "140689770907776->168"
            ]
        }
    },
    {
        "id": "140689770458048->169",
        "type": "column",
        "parentNode": "140689770458048",
        "expandParent": true,
        "data": {
            "id": 169,
            "name": "name",
            "type": "string",
            "tree_string": "name#169: string\n",
            "linked_columns": [
                "140689770907776->169"
            ]
        }
    },
    {
        "id": "140689770458048->170",
        "type": "column",
        "parentNode": "140689770458048",
        "expandParent": true,
        "data": {
            "id": 170,
            "name": "age",
            "type": "int",
            "tree_string": "age#170: int\n",
            "linked_columns": [
                "140689770907776->170"
            ]
        }
    },
    {
        "id": "140689770458048->171",
        "type": "column",
        "parentNode": "140689770458048",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#171: float\n",
            "linked_columns": [
                "140689770907776->171"
            ]
        }
    },
    {
        "id": "140689770458048->172",
        "type": "column",
        "parentNode": "140689770458048",
        "expandParent": true,
        "data": {
            "id": 172,
            "name": "city",
            "type": "string",
            "tree_string": "city#172: string\n",
            "linked_columns": [
                "140689770907776->172"
            ]
        }
    },
    {
        "id": "140689770907776->168",
        "type": "column",
        "parentNode": "140689770907776",
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
        "id": "140689770907776->169",
        "type": "column",
        "parentNode": "140689770907776",
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
        "id": "140689770907776->170",
        "type": "column",
        "parentNode": "140689770907776",
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
        "id": "140689770907776->171",
        "type": "column",
        "parentNode": "140689770907776",
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
        "id": "140689770907776->172",
        "type": "column",
        "parentNode": "140689770907776",
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
        "id": "140689770458864->163",
        "type": "column",
        "parentNode": "140689770458864",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": [
                "140689770458912->163"
            ]
        }
    },
    {
        "id": "140689770458864->164",
        "type": "column",
        "parentNode": "140689770458864",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": [
                "140689770458912->164"
            ]
        }
    },
    {
        "id": "140689770458864->165",
        "type": "column",
        "parentNode": "140689770458864",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": [
                "140689770458912->165"
            ]
        }
    },
    {
        "id": "140689770458864->166",
        "type": "column",
        "parentNode": "140689770458864",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": [
                "140689770458912->166"
            ]
        }
    },
    {
        "id": "140689770458864->167",
        "type": "column",
        "parentNode": "140689770458864",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770458912->167"
            ]
        }
    },
    {
        "id": "140689770458912->163",
        "type": "column",
        "parentNode": "140689770458912",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#163: int\n",
            "linked_columns": [
                "140689770451664->163"
            ]
        }
    },
    {
        "id": "140689770458912->164",
        "type": "column",
        "parentNode": "140689770458912",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "name",
            "type": "string",
            "tree_string": "name#164: string\n",
            "linked_columns": [
                "140689770451664->164"
            ]
        }
    },
    {
        "id": "140689770458912->165",
        "type": "column",
        "parentNode": "140689770458912",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "age",
            "type": "int",
            "tree_string": "age#165: int\n",
            "linked_columns": [
                "140689770451664->165"
            ]
        }
    },
    {
        "id": "140689770458912->166",
        "type": "column",
        "parentNode": "140689770458912",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#166: float\n",
            "linked_columns": [
                "140689770451664->166"
            ]
        }
    },
    {
        "id": "140689770458912->167",
        "type": "column",
        "parentNode": "140689770458912",
        "expandParent": true,
        "data": {
            "id": 167,
            "name": "city",
            "type": "string",
            "tree_string": "city#167: string\n",
            "linked_columns": [
                "140689770451664->167"
            ]
        }
    },
    {
        "id": "140689770451664->163",
        "type": "column",
        "parentNode": "140689770451664",
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
        "id": "140689770451664->164",
        "type": "column",
        "parentNode": "140689770451664",
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
        "id": "140689770451664->165",
        "type": "column",
        "parentNode": "140689770451664",
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
        "id": "140689770451664->166",
        "type": "column",
        "parentNode": "140689770451664",
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
        "id": "140689770451664->167",
        "type": "column",
        "parentNode": "140689770451664",
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
        "id": "140689770652688->16",
        "type": "column",
        "parentNode": "140689770652688",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689771691264->16"
            ]
        }
    },
    {
        "id": "140689770652688->17",
        "type": "column",
        "parentNode": "140689770652688",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689771691264->17"
            ]
        }
    },
    {
        "id": "140689770652688->19",
        "type": "column",
        "parentNode": "140689770652688",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689771691264->19"
            ]
        }
    },
    {
        "id": "140689770652688->122",
        "type": "column",
        "parentNode": "140689770652688",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689771691264->122"
            ]
        }
    },
    {
        "id": "140689770652688->113",
        "type": "column",
        "parentNode": "140689770652688",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689771691264->113"
            ]
        }
    },
    {
        "id": "140689770652688->35",
        "type": "column",
        "parentNode": "140689770652688",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689771691264->35"
            ]
        }
    },
    {
        "id": "140689771691264->19",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "140689770449744->19",
                "140689771689344->114"
            ]
        }
    },
    {
        "id": "140689771691264->15",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140689770449744->15"
            ]
        }
    },
    {
        "id": "140689771691264->16",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770449744->16"
            ]
        }
    },
    {
        "id": "140689771691264->17",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770449744->17"
            ]
        }
    },
    {
        "id": "140689771691264->18",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140689770449744->18"
            ]
        }
    },
    {
        "id": "140689771691264->35",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689771689344->35"
            ]
        }
    },
    {
        "id": "140689771691264->40",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140689771689344->40"
            ]
        }
    },
    {
        "id": "140689771691264->109",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689771689344->109"
            ]
        }
    },
    {
        "id": "140689771691264->113",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689771689344->113"
            ]
        }
    },
    {
        "id": "140689771691264->122",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689771689344->122"
            ]
        }
    },
    {
        "id": "140689771691264->123",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140689771689344->123"
            ]
        }
    },
    {
        "id": "140689771691264->124",
        "type": "column",
        "parentNode": "140689771691264",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140689771689344->124"
            ]
        }
    },
    {
        "id": "140689771689344->114",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "140689771685792->114",
                "140689770653552->121"
            ]
        }
    },
    {
        "id": "140689771689344->35",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689771685792->35"
            ]
        }
    },
    {
        "id": "140689771689344->40",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140689771685792->40"
            ]
        }
    },
    {
        "id": "140689771689344->109",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689771685792->109"
            ]
        }
    },
    {
        "id": "140689771689344->113",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689771685792->113"
            ]
        }
    },
    {
        "id": "140689771689344->122",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140689770653552->122"
            ]
        }
    },
    {
        "id": "140689771689344->123",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140689770653552->123"
            ]
        }
    },
    {
        "id": "140689771689344->124",
        "type": "column",
        "parentNode": "140689771689344",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140689770653552->124"
            ]
        }
    },
    {
        "id": "140689770653552->121",
        "type": "column",
        "parentNode": "140689770653552",
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
        "id": "140689770653552->122",
        "type": "column",
        "parentNode": "140689770653552",
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
        "id": "140689770653552->123",
        "type": "column",
        "parentNode": "140689770653552",
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
        "id": "140689770653552->124",
        "type": "column",
        "parentNode": "140689770653552",
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
        "id": "140689771685792->35",
        "type": "column",
        "parentNode": "140689771685792",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "140689770656864->35",
                "140689770787120->115"
            ]
        }
    },
    {
        "id": "140689771685792->40",
        "type": "column",
        "parentNode": "140689771685792",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140689770656864->40"
            ]
        }
    },
    {
        "id": "140689771685792->109",
        "type": "column",
        "parentNode": "140689771685792",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770656864->109"
            ]
        }
    },
    {
        "id": "140689771685792->113",
        "type": "column",
        "parentNode": "140689771685792",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140689770787120->113"
            ]
        }
    },
    {
        "id": "140689771685792->114",
        "type": "column",
        "parentNode": "140689771685792",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "140689770787120->114"
            ]
        }
    },
    {
        "id": "140689770787120->113",
        "type": "column",
        "parentNode": "140689770787120",
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
        "id": "140689770787120->114",
        "type": "column",
        "parentNode": "140689770787120",
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
        "id": "140689770787120->115",
        "type": "column",
        "parentNode": "140689770787120",
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
        "id": "140689770656864->40",
        "type": "column",
        "parentNode": "140689770656864",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140689770653360->40"
            ]
        }
    },
    {
        "id": "140689770656864->35",
        "type": "column",
        "parentNode": "140689770656864",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689770653360->35"
            ]
        }
    },
    {
        "id": "140689770656864->109",
        "type": "column",
        "parentNode": "140689770656864",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140689770653360->109"
            ]
        }
    },
    {
        "id": "140689770653360->40",
        "type": "column",
        "parentNode": "140689770653360",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140689771686848->40"
            ]
        }
    },
    {
        "id": "140689770653360->35",
        "type": "column",
        "parentNode": "140689770653360",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140689771686848->35"
            ]
        }
    },
    {
        "id": "140689770653360->109",
        "type": "column",
        "parentNode": "140689770653360",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140689771686848->84"
            ]
        }
    },
    {
        "id": "140689771686848->35",
        "type": "column",
        "parentNode": "140689771686848",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "140689771685984->35",
                "140689770782224->39"
            ]
        }
    },
    {
        "id": "140689771686848->33",
        "type": "column",
        "parentNode": "140689771686848",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140689771685984->33"
            ]
        }
    },
    {
        "id": "140689771686848->34",
        "type": "column",
        "parentNode": "140689771686848",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140689771685984->34"
            ]
        }
    },
    {
        "id": "140689771686848->88",
        "type": "column",
        "parentNode": "140689771686848",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140689771685984->88"
            ]
        }
    },
    {
        "id": "140689771686848->84",
        "type": "column",
        "parentNode": "140689771686848",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689771685984->84"
            ]
        }
    },
    {
        "id": "140689771686848->40",
        "type": "column",
        "parentNode": "140689771686848",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140689770782224->40"
            ]
        }
    },
    {
        "id": "140689770782224->39",
        "type": "column",
        "parentNode": "140689770782224",
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
        "id": "140689770782224->40",
        "type": "column",
        "parentNode": "140689770782224",
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
        "id": "140689771685984->35",
        "type": "column",
        "parentNode": "140689771685984",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "140689770658352->35",
                "140689770785440->90"
            ]
        }
    },
    {
        "id": "140689771685984->33",
        "type": "column",
        "parentNode": "140689771685984",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140689770658352->33"
            ]
        }
    },
    {
        "id": "140689771685984->34",
        "type": "column",
        "parentNode": "140689771685984",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140689770658352->34"
            ]
        }
    },
    {
        "id": "140689771685984->88",
        "type": "column",
        "parentNode": "140689771685984",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140689770785440->88"
            ]
        }
    },
    {
        "id": "140689771685984->84",
        "type": "column",
        "parentNode": "140689771685984",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140689770785440->84"
            ]
        }
    },
    {
        "id": "140689770785440->90",
        "type": "column",
        "parentNode": "140689770785440",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140689771690640->90"
            ]
        }
    },
    {
        "id": "140689770785440->88",
        "type": "column",
        "parentNode": "140689770785440",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140689771690640->88"
            ]
        }
    },
    {
        "id": "140689770785440->84",
        "type": "column",
        "parentNode": "140689770785440",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140689771690640->61"
            ]
        }
    },
    {
        "id": "140689771690640->25",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "140689771690928->25",
                "140689770778240->89"
            ]
        }
    },
    {
        "id": "140689771690640->26",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140689771690928->26"
            ]
        }
    },
    {
        "id": "140689771690640->27",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140689771690928->27"
            ]
        }
    },
    {
        "id": "140689771690640->28",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140689771690928->28"
            ]
        }
    },
    {
        "id": "140689771690640->61",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689771690928->61"
            ]
        }
    },
    {
        "id": "140689771690640->88",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140689770778240->88"
            ]
        }
    },
    {
        "id": "140689771690640->90",
        "type": "column",
        "parentNode": "140689771690640",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140689770778240->90"
            ]
        }
    },
    {
        "id": "140689770778240->88",
        "type": "column",
        "parentNode": "140689770778240",
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
        "id": "140689770778240->89",
        "type": "column",
        "parentNode": "140689770778240",
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
        "id": "140689770778240->90",
        "type": "column",
        "parentNode": "140689770778240",
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
        "id": "140689771690928->25",
        "type": "column",
        "parentNode": "140689771690928",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "140689770456608->25",
                "140689770461840->137"
            ]
        }
    },
    {
        "id": "140689771690928->26",
        "type": "column",
        "parentNode": "140689771690928",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140689770456608->26"
            ]
        }
    },
    {
        "id": "140689771690928->27",
        "type": "column",
        "parentNode": "140689771690928",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140689770456608->27"
            ]
        }
    },
    {
        "id": "140689771690928->28",
        "type": "column",
        "parentNode": "140689771690928",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140689770456608->28"
            ]
        }
    },
    {
        "id": "140689771690928->61",
        "type": "column",
        "parentNode": "140689771690928",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140689770461840->61"
            ]
        }
    },
    {
        "id": "140689770461840->137",
        "type": "column",
        "parentNode": "140689770461840",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140689770779824->137"
            ]
        }
    },
    {
        "id": "140689770461840->61",
        "type": "column",
        "parentNode": "140689770461840",
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
        "id": "140689770779824->133",
        "type": "column",
        "parentNode": "140689770779824",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140689770787168->133"
            ]
        }
    },
    {
        "id": "140689770779824->134",
        "type": "column",
        "parentNode": "140689770779824",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140689770787168->134"
            ]
        }
    },
    {
        "id": "140689770779824->135",
        "type": "column",
        "parentNode": "140689770779824",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140689770787168->135"
            ]
        }
    },
    {
        "id": "140689770779824->136",
        "type": "column",
        "parentNode": "140689770779824",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140689770787168->136"
            ]
        }
    },
    {
        "id": "140689770779824->137",
        "type": "column",
        "parentNode": "140689770779824",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140689770787168->137"
            ]
        }
    },
    {
        "id": "140689770788032->138",
        "type": "column",
        "parentNode": "140689770788032",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140689770643856->138"
            ]
        }
    },
    {
        "id": "140689770788032->139",
        "type": "column",
        "parentNode": "140689770788032",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140689770643856->139"
            ]
        }
    },
    {
        "id": "140689770788032->140",
        "type": "column",
        "parentNode": "140689770788032",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140689770643856->140"
            ]
        }
    },
    {
        "id": "140689770788032->141",
        "type": "column",
        "parentNode": "140689770788032",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140689770643856->141"
            ]
        }
    },
    {
        "id": "140689770788032->142",
        "type": "column",
        "parentNode": "140689770788032",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140689770643856->142"
            ]
        }
    },
    {
        "id": "140689770643856->138",
        "type": "column",
        "parentNode": "140689770643856",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140689770778576->138"
            ]
        }
    },
    {
        "id": "140689770643856->139",
        "type": "column",
        "parentNode": "140689770643856",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140689770778576->139"
            ]
        }
    },
    {
        "id": "140689770643856->140",
        "type": "column",
        "parentNode": "140689770643856",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140689770778576->140"
            ]
        }
    },
    {
        "id": "140689770643856->141",
        "type": "column",
        "parentNode": "140689770643856",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140689770778576->141"
            ]
        }
    },
    {
        "id": "140689770643856->142",
        "type": "column",
        "parentNode": "140689770643856",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140689770778576->142"
            ]
        }
    },
    {
        "id": "140689770778576->138",
        "type": "column",
        "parentNode": "140689770778576",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140689770790192->138"
            ]
        }
    },
    {
        "id": "140689770778576->139",
        "type": "column",
        "parentNode": "140689770778576",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140689770790192->139"
            ]
        }
    },
    {
        "id": "140689770778576->140",
        "type": "column",
        "parentNode": "140689770778576",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140689770790192->140"
            ]
        }
    },
    {
        "id": "140689770778576->141",
        "type": "column",
        "parentNode": "140689770778576",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140689770790192->141"
            ]
        }
    },
    {
        "id": "140689770778576->142",
        "type": "column",
        "parentNode": "140689770778576",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140689770790192->142"
            ]
        }
    },
    {
        "id": "140689770790192->138",
        "type": "column",
        "parentNode": "140689770790192",
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
        "id": "140689770790192->139",
        "type": "column",
        "parentNode": "140689770790192",
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
        "id": "140689770790192->140",
        "type": "column",
        "parentNode": "140689770790192",
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
        "id": "140689770790192->141",
        "type": "column",
        "parentNode": "140689770790192",
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
        "id": "140689770790192->142",
        "type": "column",
        "parentNode": "140689770790192",
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
        "id": "140689770787168->133",
        "type": "column",
        "parentNode": "140689770787168",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140689770907056->133"
            ]
        }
    },
    {
        "id": "140689770787168->134",
        "type": "column",
        "parentNode": "140689770787168",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140689770907056->134"
            ]
        }
    },
    {
        "id": "140689770787168->135",
        "type": "column",
        "parentNode": "140689770787168",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140689770907056->135"
            ]
        }
    },
    {
        "id": "140689770787168->136",
        "type": "column",
        "parentNode": "140689770787168",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140689770907056->136"
            ]
        }
    },
    {
        "id": "140689770787168->137",
        "type": "column",
        "parentNode": "140689770787168",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140689770907056->137"
            ]
        }
    },
    {
        "id": "140689770907056->133",
        "type": "column",
        "parentNode": "140689770907056",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140689770787360->133"
            ]
        }
    },
    {
        "id": "140689770907056->134",
        "type": "column",
        "parentNode": "140689770907056",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140689770787360->134"
            ]
        }
    },
    {
        "id": "140689770907056->135",
        "type": "column",
        "parentNode": "140689770907056",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140689770787360->135"
            ]
        }
    },
    {
        "id": "140689770907056->136",
        "type": "column",
        "parentNode": "140689770907056",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140689770787360->136"
            ]
        }
    },
    {
        "id": "140689770907056->137",
        "type": "column",
        "parentNode": "140689770907056",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140689770787360->137"
            ]
        }
    },
    {
        "id": "140689770787360->133",
        "type": "column",
        "parentNode": "140689770787360",
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
        "id": "140689770787360->134",
        "type": "column",
        "parentNode": "140689770787360",
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
        "id": "140689770787360->135",
        "type": "column",
        "parentNode": "140689770787360",
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
        "id": "140689770787360->136",
        "type": "column",
        "parentNode": "140689770787360",
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
        "id": "140689770787360->137",
        "type": "column",
        "parentNode": "140689770787360",
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
        "id": "140689770456608->25",
        "type": "column",
        "parentNode": "140689770456608",
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
        "id": "140689770456608->26",
        "type": "column",
        "parentNode": "140689770456608",
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
        "id": "140689770456608->27",
        "type": "column",
        "parentNode": "140689770456608",
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
        "id": "140689770456608->28",
        "type": "column",
        "parentNode": "140689770456608",
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
        "id": "140689770658352->33",
        "type": "column",
        "parentNode": "140689770658352",
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
        "id": "140689770658352->34",
        "type": "column",
        "parentNode": "140689770658352",
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
        "id": "140689770658352->35",
        "type": "column",
        "parentNode": "140689770658352",
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
        "id": "140689770449744->15",
        "type": "column",
        "parentNode": "140689770449744",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140689770457664->15"
            ]
        }
    },
    {
        "id": "140689770449744->16",
        "type": "column",
        "parentNode": "140689770449744",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770457664->16"
            ]
        }
    },
    {
        "id": "140689770449744->17",
        "type": "column",
        "parentNode": "140689770449744",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770457664->17"
            ]
        }
    },
    {
        "id": "140689770449744->18",
        "type": "column",
        "parentNode": "140689770449744",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140689770457664->18"
            ]
        }
    },
    {
        "id": "140689770449744->19",
        "type": "column",
        "parentNode": "140689770449744",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689770457664->19"
            ]
        }
    },
    {
        "id": "140689770462176->44",
        "type": "column",
        "parentNode": "140689770462176",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140689770461408->44"
            ]
        }
    },
    {
        "id": "140689770462176->45",
        "type": "column",
        "parentNode": "140689770462176",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140689770461408->45"
            ]
        }
    },
    {
        "id": "140689770462176->46",
        "type": "column",
        "parentNode": "140689770462176",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140689770461408->46"
            ]
        }
    },
    {
        "id": "140689770462176->47",
        "type": "column",
        "parentNode": "140689770462176",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140689770461408->47"
            ]
        }
    },
    {
        "id": "140689770462176->48",
        "type": "column",
        "parentNode": "140689770462176",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140689770461408->48"
            ]
        }
    },
    {
        "id": "140689770461408->44",
        "type": "column",
        "parentNode": "140689770461408",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140689770646880->44"
            ]
        }
    },
    {
        "id": "140689770461408->45",
        "type": "column",
        "parentNode": "140689770461408",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140689770646880->45"
            ]
        }
    },
    {
        "id": "140689770461408->46",
        "type": "column",
        "parentNode": "140689770461408",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140689770646880->46"
            ]
        }
    },
    {
        "id": "140689770461408->47",
        "type": "column",
        "parentNode": "140689770461408",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140689770646880->47"
            ]
        }
    },
    {
        "id": "140689770461408->48",
        "type": "column",
        "parentNode": "140689770461408",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140689770646880->48"
            ]
        }
    },
    {
        "id": "140689770646880->44",
        "type": "column",
        "parentNode": "140689770646880",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140689770458672->44"
            ]
        }
    },
    {
        "id": "140689770646880->45",
        "type": "column",
        "parentNode": "140689770646880",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140689770458672->45"
            ]
        }
    },
    {
        "id": "140689770646880->46",
        "type": "column",
        "parentNode": "140689770646880",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140689770458672->46"
            ]
        }
    },
    {
        "id": "140689770646880->47",
        "type": "column",
        "parentNode": "140689770646880",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140689770458672->47"
            ]
        }
    },
    {
        "id": "140689770646880->48",
        "type": "column",
        "parentNode": "140689770646880",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140689770458672->48"
            ]
        }
    },
    {
        "id": "140689770458672->44",
        "type": "column",
        "parentNode": "140689770458672",
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
        "id": "140689770458672->45",
        "type": "column",
        "parentNode": "140689770458672",
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
        "id": "140689770458672->46",
        "type": "column",
        "parentNode": "140689770458672",
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
        "id": "140689770458672->47",
        "type": "column",
        "parentNode": "140689770458672",
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
        "id": "140689770458672->48",
        "type": "column",
        "parentNode": "140689770458672",
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
        "id": "140689770457664->15",
        "type": "column",
        "parentNode": "140689770457664",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140689770459200->15"
            ]
        }
    },
    {
        "id": "140689770457664->16",
        "type": "column",
        "parentNode": "140689770457664",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770459200->16"
            ]
        }
    },
    {
        "id": "140689770457664->17",
        "type": "column",
        "parentNode": "140689770457664",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770459200->17"
            ]
        }
    },
    {
        "id": "140689770457664->18",
        "type": "column",
        "parentNode": "140689770457664",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140689770459200->18"
            ]
        }
    },
    {
        "id": "140689770457664->19",
        "type": "column",
        "parentNode": "140689770457664",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689770459200->19"
            ]
        }
    },
    {
        "id": "140689770459200->15",
        "type": "column",
        "parentNode": "140689770459200",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140689770455504->15"
            ]
        }
    },
    {
        "id": "140689770459200->16",
        "type": "column",
        "parentNode": "140689770459200",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140689770455504->16"
            ]
        }
    },
    {
        "id": "140689770459200->17",
        "type": "column",
        "parentNode": "140689770459200",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140689770455504->17"
            ]
        }
    },
    {
        "id": "140689770459200->18",
        "type": "column",
        "parentNode": "140689770459200",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140689770455504->18"
            ]
        }
    },
    {
        "id": "140689770459200->19",
        "type": "column",
        "parentNode": "140689770459200",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140689770455504->19"
            ]
        }
    },
    {
        "id": "140689770455504->15",
        "type": "column",
        "parentNode": "140689770455504",
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
        "id": "140689770455504->16",
        "type": "column",
        "parentNode": "140689770455504",
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
        "id": "140689770455504->17",
        "type": "column",
        "parentNode": "140689770455504",
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
        "id": "140689770455504->18",
        "type": "column",
        "parentNode": "140689770455504",
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
        "id": "140689770455504->19",
        "type": "column",
        "parentNode": "140689770455504",
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
        "id": "140689770351488-140689770653504",
        "source": "140689770351488",
        "target": "140689770653504"
    },
    {
        "id": "140689770653504-140689770659072",
        "source": "140689770653504",
        "target": "140689770659072"
    },
    {
        "id": "140689770659072-140689771687856",
        "source": "140689770659072",
        "target": "140689771687856"
    },
    {
        "id": "140689771687856-140689770652448",
        "source": "140689771687856",
        "target": "140689770652448"
    },
    {
        "id": "140689770652448-140689770450512",
        "source": "140689770652448",
        "target": "140689770450512"
    },
    {
        "id": "140689770450512-140689770780736",
        "source": "140689770450512",
        "target": "140689770780736"
    },
    {
        "id": "140689770780736-140689770452192",
        "source": "140689770780736",
        "target": "140689770452192"
    },
    {
        "id": "140689770452192-140689771796352",
        "source": "140689770452192",
        "target": "140689771796352"
    },
    {
        "id": "140689771796352-140689770779104",
        "source": "140689771796352",
        "target": "140689770779104"
    },
    {
        "id": "140689771796352-140689771793232",
        "source": "140689771796352",
        "target": "140689771793232"
    },
    {
        "id": "140689771793232-140689770781600",
        "source": "140689771793232",
        "target": "140689770781600"
    },
    {
        "id": "140689770781600-140689771687232",
        "source": "140689770781600",
        "target": "140689771687232"
    },
    {
        "id": "140689771687232-140689770774832",
        "source": "140689771687232",
        "target": "140689770774832"
    },
    {
        "id": "140689771687232-140689770454880",
        "source": "140689771687232",
        "target": "140689770454880"
    },
    {
        "id": "140689770454880-140689770659552",
        "source": "140689770454880",
        "target": "140689770659552"
    },
    {
        "id": "140689770659552-140689770455792",
        "source": "140689770659552",
        "target": "140689770455792"
    },
    {
        "id": "140689770455792-140689770916512",
        "source": "140689770455792",
        "target": "140689770916512"
    },
    {
        "id": "140689770916512-140689770910128",
        "source": "140689770916512",
        "target": "140689770910128"
    },
    {
        "id": "140689770910128-140689770918768",
        "source": "140689770910128",
        "target": "140689770918768"
    },
    {
        "id": "140689770918768-140689770916944",
        "source": "140689770918768",
        "target": "140689770916944"
    },
    {
        "id": "140689770455792-140689770457952",
        "source": "140689770455792",
        "target": "140689770457952"
    },
    {
        "id": "140689770457952-140689770912816",
        "source": "140689770457952",
        "target": "140689770912816"
    },
    {
        "id": "140689770912816-140689770914256",
        "source": "140689770912816",
        "target": "140689770914256"
    },
    {
        "id": "140689770454880-140689771690400",
        "source": "140689770454880",
        "target": "140689771690400"
    },
    {
        "id": "140689771793232-140689770647744",
        "source": "140689771793232",
        "target": "140689770647744"
    },
    {
        "id": "140689771687856-140689771688816",
        "source": "140689771687856",
        "target": "140689771688816"
    },
    {
        "id": "140689771688816-140689770648704",
        "source": "140689771688816",
        "target": "140689770648704"
    },
    {
        "id": "140689770648704-140689770647648",
        "source": "140689770648704",
        "target": "140689770647648"
    },
    {
        "id": "140689770647648-140689770364736",
        "source": "140689770647648",
        "target": "140689770364736"
    },
    {
        "id": "140689770364736-140689770647696",
        "source": "140689770364736",
        "target": "140689770647696"
    },
    {
        "id": "140689770647696-140689771792224",
        "source": "140689770647696",
        "target": "140689771792224"
    },
    {
        "id": "140689771792224-140689770450896",
        "source": "140689771792224",
        "target": "140689770450896"
    },
    {
        "id": "140689771792224-140689771792512",
        "source": "140689771792224",
        "target": "140689771792512"
    },
    {
        "id": "140689771792512-140689770778144",
        "source": "140689771792512",
        "target": "140689770778144"
    },
    {
        "id": "140689770778144-140689770786640",
        "source": "140689770778144",
        "target": "140689770786640"
    },
    {
        "id": "140689770786640-140689770654224",
        "source": "140689770786640",
        "target": "140689770654224"
    },
    {
        "id": "140689770654224-140689770788128",
        "source": "140689770654224",
        "target": "140689770788128"
    },
    {
        "id": "140689770788128-140689770451328",
        "source": "140689770788128",
        "target": "140689770451328"
    },
    {
        "id": "140689770451328-140689770777136",
        "source": "140689770451328",
        "target": "140689770777136"
    },
    {
        "id": "140689770786640-140689770654656",
        "source": "140689770786640",
        "target": "140689770654656"
    },
    {
        "id": "140689770654656-140689770786208",
        "source": "140689770654656",
        "target": "140689770786208"
    },
    {
        "id": "140689770786208-140689770362768",
        "source": "140689770786208",
        "target": "140689770362768"
    },
    {
        "id": "140689771792512-140689770448304",
        "source": "140689771792512",
        "target": "140689770448304"
    },
    {
        "id": "140689771688816-140689771690448",
        "source": "140689771688816",
        "target": "140689771690448"
    },
    {
        "id": "140689771690448-140689770360704",
        "source": "140689771690448",
        "target": "140689770360704"
    },
    {
        "id": "140689770360704-140689770456752",
        "source": "140689770360704",
        "target": "140689770456752"
    },
    {
        "id": "140689770456752-140689770448688",
        "source": "140689770456752",
        "target": "140689770448688"
    },
    {
        "id": "140689770448688-140689770451952",
        "source": "140689770448688",
        "target": "140689770451952"
    },
    {
        "id": "140689770451952-140689770449024",
        "source": "140689770451952",
        "target": "140689770449024"
    },
    {
        "id": "140689770449024-140689770461648",
        "source": "140689770449024",
        "target": "140689770461648"
    },
    {
        "id": "140689770461648-140689770906528",
        "source": "140689770461648",
        "target": "140689770906528"
    },
    {
        "id": "140689770906528-140689770458048",
        "source": "140689770906528",
        "target": "140689770458048"
    },
    {
        "id": "140689770458048-140689770907776",
        "source": "140689770458048",
        "target": "140689770907776"
    },
    {
        "id": "140689770449024-140689770458864",
        "source": "140689770449024",
        "target": "140689770458864"
    },
    {
        "id": "140689770458864-140689770458912",
        "source": "140689770458864",
        "target": "140689770458912"
    },
    {
        "id": "140689770458912-140689770451664",
        "source": "140689770458912",
        "target": "140689770451664"
    },
    {
        "id": "140689771690448-140689770652688",
        "source": "140689771690448",
        "target": "140689770652688"
    },
    {
        "id": "140689770652688-140689771691264",
        "source": "140689770652688",
        "target": "140689771691264"
    },
    {
        "id": "140689771691264-140689771689344",
        "source": "140689771691264",
        "target": "140689771689344"
    },
    {
        "id": "140689771689344-140689770653552",
        "source": "140689771689344",
        "target": "140689770653552"
    },
    {
        "id": "140689771689344-140689771685792",
        "source": "140689771689344",
        "target": "140689771685792"
    },
    {
        "id": "140689771685792-140689770787120",
        "source": "140689771685792",
        "target": "140689770787120"
    },
    {
        "id": "140689771685792-140689770656864",
        "source": "140689771685792",
        "target": "140689770656864"
    },
    {
        "id": "140689770656864-140689770653360",
        "source": "140689770656864",
        "target": "140689770653360"
    },
    {
        "id": "140689770653360-140689771686848",
        "source": "140689770653360",
        "target": "140689771686848"
    },
    {
        "id": "140689771686848-140689770782224",
        "source": "140689771686848",
        "target": "140689770782224"
    },
    {
        "id": "140689771686848-140689771685984",
        "source": "140689771686848",
        "target": "140689771685984"
    },
    {
        "id": "140689771685984-140689770785440",
        "source": "140689771685984",
        "target": "140689770785440"
    },
    {
        "id": "140689770785440-140689771690640",
        "source": "140689770785440",
        "target": "140689771690640"
    },
    {
        "id": "140689771690640-140689770778240",
        "source": "140689771690640",
        "target": "140689770778240"
    },
    {
        "id": "140689771690640-140689771690928",
        "source": "140689771690640",
        "target": "140689771690928"
    },
    {
        "id": "140689771690928-140689770461840",
        "source": "140689771690928",
        "target": "140689770461840"
    },
    {
        "id": "140689770461840-140689770779824",
        "source": "140689770461840",
        "target": "140689770779824"
    },
    {
        "id": "140689770779824-140689770788032",
        "source": "140689770779824",
        "target": "140689770788032"
    },
    {
        "id": "140689770788032-140689770643856",
        "source": "140689770788032",
        "target": "140689770643856"
    },
    {
        "id": "140689770643856-140689770778576",
        "source": "140689770643856",
        "target": "140689770778576"
    },
    {
        "id": "140689770778576-140689770790192",
        "source": "140689770778576",
        "target": "140689770790192"
    },
    {
        "id": "140689770779824-140689770787168",
        "source": "140689770779824",
        "target": "140689770787168"
    },
    {
        "id": "140689770787168-140689770907056",
        "source": "140689770787168",
        "target": "140689770907056"
    },
    {
        "id": "140689770907056-140689770787360",
        "source": "140689770907056",
        "target": "140689770787360"
    },
    {
        "id": "140689771690928-140689770456608",
        "source": "140689771690928",
        "target": "140689770456608"
    },
    {
        "id": "140689771685984-140689770658352",
        "source": "140689771685984",
        "target": "140689770658352"
    },
    {
        "id": "140689771691264-140689770449744",
        "source": "140689771691264",
        "target": "140689770449744"
    },
    {
        "id": "140689770449744-140689770462176",
        "source": "140689770449744",
        "target": "140689770462176"
    },
    {
        "id": "140689770462176-140689770461408",
        "source": "140689770462176",
        "target": "140689770461408"
    },
    {
        "id": "140689770461408-140689770646880",
        "source": "140689770461408",
        "target": "140689770646880"
    },
    {
        "id": "140689770646880-140689770458672",
        "source": "140689770646880",
        "target": "140689770458672"
    },
    {
        "id": "140689770449744-140689770457664",
        "source": "140689770449744",
        "target": "140689770457664"
    },
    {
        "id": "140689770457664-140689770459200",
        "source": "140689770457664",
        "target": "140689770459200"
    },
    {
        "id": "140689770459200-140689770455504",
        "source": "140689770459200",
        "target": "140689770455504"
    },
    {
        "id": "(140689770351488->35)-(140689770653504->35)",
        "source": "140689770351488->35",
        "target": "140689770653504->35",
        "animated": true
    },
    {
        "id": "(140689770351488->113)-(140689770653504->113)",
        "source": "140689770351488->113",
        "target": "140689770653504->113",
        "animated": true
    },
    {
        "id": "(140689770351488->19)-(140689770653504->19)",
        "source": "140689770351488->19",
        "target": "140689770653504->19",
        "animated": true
    },
    {
        "id": "(140689770351488->16)-(140689770653504->16)",
        "source": "140689770351488->16",
        "target": "140689770653504->16",
        "animated": true
    },
    {
        "id": "(140689770351488->17)-(140689770653504->17)",
        "source": "140689770351488->17",
        "target": "140689770653504->17",
        "animated": true
    },
    {
        "id": "(140689770351488->122)-(140689770653504->122)",
        "source": "140689770351488->122",
        "target": "140689770653504->122",
        "animated": true
    },
    {
        "id": "(140689770351488->61)-(140689770653504->61)",
        "source": "140689770351488->61",
        "target": "140689770653504->61",
        "animated": true
    },
    {
        "id": "(140689770351488->198)-(140689770653504->198)",
        "source": "140689770351488->198",
        "target": "140689770653504->198",
        "animated": true
    },
    {
        "id": "(140689770351488->84)-(140689770653504->84)",
        "source": "140689770351488->84",
        "target": "140689770653504->84",
        "animated": true
    },
    {
        "id": "(140689770351488->231)-(140689770653504->231)",
        "source": "140689770351488->231",
        "target": "140689770653504->231",
        "animated": true
    },
    {
        "id": "(140689770351488->109)-(140689770653504->109)",
        "source": "140689770351488->109",
        "target": "140689770653504->109",
        "animated": true
    },
    {
        "id": "(140689770351488->245)-(140689770653504->245)",
        "source": "140689770351488->245",
        "target": "140689770653504->245",
        "animated": true
    },
    {
        "id": "(140689770351488->258)-(140689770653504->258)",
        "source": "140689770351488->258",
        "target": "140689770653504->258",
        "animated": true
    },
    {
        "id": "(140689770351488->272)-(140689770653504->109)",
        "source": "140689770351488->272",
        "target": "140689770653504->109",
        "animated": true
    },
    {
        "id": "(140689770653504->35)-(140689770659072->35)",
        "source": "140689770653504->35",
        "target": "140689770659072->35",
        "animated": true
    },
    {
        "id": "(140689770653504->113)-(140689770659072->113)",
        "source": "140689770653504->113",
        "target": "140689770659072->113",
        "animated": true
    },
    {
        "id": "(140689770653504->19)-(140689770659072->19)",
        "source": "140689770653504->19",
        "target": "140689770659072->19",
        "animated": true
    },
    {
        "id": "(140689770653504->16)-(140689770659072->16)",
        "source": "140689770653504->16",
        "target": "140689770659072->16",
        "animated": true
    },
    {
        "id": "(140689770653504->17)-(140689770659072->17)",
        "source": "140689770653504->17",
        "target": "140689770659072->17",
        "animated": true
    },
    {
        "id": "(140689770653504->122)-(140689770659072->122)",
        "source": "140689770653504->122",
        "target": "140689770659072->122",
        "animated": true
    },
    {
        "id": "(140689770653504->61)-(140689770659072->61)",
        "source": "140689770653504->61",
        "target": "140689770659072->61",
        "animated": true
    },
    {
        "id": "(140689770653504->198)-(140689770659072->198)",
        "source": "140689770653504->198",
        "target": "140689770659072->198",
        "animated": true
    },
    {
        "id": "(140689770653504->84)-(140689770659072->84)",
        "source": "140689770653504->84",
        "target": "140689770659072->84",
        "animated": true
    },
    {
        "id": "(140689770653504->231)-(140689770659072->231)",
        "source": "140689770653504->231",
        "target": "140689770659072->231",
        "animated": true
    },
    {
        "id": "(140689770653504->109)-(140689770659072->109)",
        "source": "140689770653504->109",
        "target": "140689770659072->109",
        "animated": true
    },
    {
        "id": "(140689770653504->245)-(140689770659072->245)",
        "source": "140689770653504->245",
        "target": "140689770659072->245",
        "animated": true
    },
    {
        "id": "(140689770653504->258)-(140689770659072->84)",
        "source": "140689770653504->258",
        "target": "140689770659072->84",
        "animated": true
    },
    {
        "id": "(140689770659072->35)-(140689771687856->35)",
        "source": "140689770659072->35",
        "target": "140689771687856->35",
        "animated": true
    },
    {
        "id": "(140689770659072->113)-(140689771687856->113)",
        "source": "140689770659072->113",
        "target": "140689771687856->113",
        "animated": true
    },
    {
        "id": "(140689770659072->19)-(140689771687856->19)",
        "source": "140689770659072->19",
        "target": "140689771687856->19",
        "animated": true
    },
    {
        "id": "(140689770659072->16)-(140689771687856->16)",
        "source": "140689770659072->16",
        "target": "140689771687856->16",
        "animated": true
    },
    {
        "id": "(140689770659072->17)-(140689771687856->17)",
        "source": "140689770659072->17",
        "target": "140689771687856->17",
        "animated": true
    },
    {
        "id": "(140689770659072->122)-(140689771687856->122)",
        "source": "140689770659072->122",
        "target": "140689771687856->122",
        "animated": true
    },
    {
        "id": "(140689770659072->61)-(140689771687856->61)",
        "source": "140689770659072->61",
        "target": "140689771687856->61",
        "animated": true
    },
    {
        "id": "(140689770659072->198)-(140689771687856->198)",
        "source": "140689770659072->198",
        "target": "140689771687856->198",
        "animated": true
    },
    {
        "id": "(140689770659072->84)-(140689771687856->84)",
        "source": "140689770659072->84",
        "target": "140689771687856->84",
        "animated": true
    },
    {
        "id": "(140689770659072->231)-(140689771687856->231)",
        "source": "140689770659072->231",
        "target": "140689771687856->231",
        "animated": true
    },
    {
        "id": "(140689770659072->109)-(140689771687856->109)",
        "source": "140689770659072->109",
        "target": "140689771687856->109",
        "animated": true
    },
    {
        "id": "(140689770659072->245)-(140689771687856->61)",
        "source": "140689770659072->245",
        "target": "140689771687856->61",
        "animated": true
    },
    {
        "id": "(140689771687856->35)-(140689771688816->35)",
        "source": "140689771687856->35",
        "target": "140689771688816->35",
        "animated": true
    },
    {
        "id": "(140689771687856->35)-(140689770652448->212)",
        "source": "140689771687856->35",
        "target": "140689770652448->212",
        "animated": true
    },
    {
        "id": "(140689771687856->113)-(140689771688816->113)",
        "source": "140689771687856->113",
        "target": "140689771688816->113",
        "animated": true
    },
    {
        "id": "(140689771687856->19)-(140689771688816->19)",
        "source": "140689771687856->19",
        "target": "140689771688816->19",
        "animated": true
    },
    {
        "id": "(140689771687856->16)-(140689771688816->16)",
        "source": "140689771687856->16",
        "target": "140689771688816->16",
        "animated": true
    },
    {
        "id": "(140689771687856->17)-(140689771688816->17)",
        "source": "140689771687856->17",
        "target": "140689771688816->17",
        "animated": true
    },
    {
        "id": "(140689771687856->122)-(140689771688816->122)",
        "source": "140689771687856->122",
        "target": "140689771688816->122",
        "animated": true
    },
    {
        "id": "(140689771687856->61)-(140689771688816->61)",
        "source": "140689771687856->61",
        "target": "140689771688816->61",
        "animated": true
    },
    {
        "id": "(140689771687856->198)-(140689771688816->198)",
        "source": "140689771687856->198",
        "target": "140689771688816->198",
        "animated": true
    },
    {
        "id": "(140689771687856->84)-(140689771688816->84)",
        "source": "140689771687856->84",
        "target": "140689771688816->84",
        "animated": true
    },
    {
        "id": "(140689771687856->231)-(140689770652448->231)",
        "source": "140689771687856->231",
        "target": "140689770652448->231",
        "animated": true
    },
    {
        "id": "(140689771687856->109)-(140689770652448->109)",
        "source": "140689771687856->109",
        "target": "140689770652448->109",
        "animated": true
    },
    {
        "id": "(140689770652448->231)-(140689770450512->231)",
        "source": "140689770652448->231",
        "target": "140689770450512->231",
        "animated": true
    },
    {
        "id": "(140689770652448->212)-(140689770450512->212)",
        "source": "140689770652448->212",
        "target": "140689770450512->212",
        "animated": true
    },
    {
        "id": "(140689770652448->109)-(140689770450512->109)",
        "source": "140689770652448->109",
        "target": "140689770450512->109",
        "animated": true
    },
    {
        "id": "(140689770450512->231)-(140689770780736->231)",
        "source": "140689770450512->231",
        "target": "140689770780736->231",
        "animated": true
    },
    {
        "id": "(140689770450512->212)-(140689770780736->212)",
        "source": "140689770450512->212",
        "target": "140689770780736->212",
        "animated": true
    },
    {
        "id": "(140689770450512->109)-(140689770780736->109)",
        "source": "140689770450512->109",
        "target": "140689770780736->109",
        "animated": true
    },
    {
        "id": "(140689770780736->231)-(140689770452192->231)",
        "source": "140689770780736->231",
        "target": "140689770452192->231",
        "animated": true
    },
    {
        "id": "(140689770780736->212)-(140689770452192->212)",
        "source": "140689770780736->212",
        "target": "140689770452192->212",
        "animated": true
    },
    {
        "id": "(140689770780736->109)-(140689770452192->109)",
        "source": "140689770780736->109",
        "target": "140689770452192->109",
        "animated": true
    },
    {
        "id": "(140689770452192->231)-(140689771796352->231)",
        "source": "140689770452192->231",
        "target": "140689771796352->231",
        "animated": true
    },
    {
        "id": "(140689770452192->212)-(140689771796352->212)",
        "source": "140689770452192->212",
        "target": "140689771796352->212",
        "animated": true
    },
    {
        "id": "(140689770452192->109)-(140689771796352->84)",
        "source": "140689770452192->109",
        "target": "140689771796352->84",
        "animated": true
    },
    {
        "id": "(140689771796352->212)-(140689771793232->212)",
        "source": "140689771796352->212",
        "target": "140689771793232->212",
        "animated": true
    },
    {
        "id": "(140689771796352->212)-(140689770779104->230)",
        "source": "140689771796352->212",
        "target": "140689770779104->230",
        "animated": true
    },
    {
        "id": "(140689771796352->210)-(140689771793232->210)",
        "source": "140689771796352->210",
        "target": "140689771793232->210",
        "animated": true
    },
    {
        "id": "(140689771796352->211)-(140689771793232->211)",
        "source": "140689771796352->211",
        "target": "140689771793232->211",
        "animated": true
    },
    {
        "id": "(140689771796352->227)-(140689771793232->227)",
        "source": "140689771796352->227",
        "target": "140689771793232->227",
        "animated": true
    },
    {
        "id": "(140689771796352->84)-(140689771793232->84)",
        "source": "140689771796352->84",
        "target": "140689771793232->84",
        "animated": true
    },
    {
        "id": "(140689771796352->231)-(140689770779104->231)",
        "source": "140689771796352->231",
        "target": "140689770779104->231",
        "animated": true
    },
    {
        "id": "(140689771793232->212)-(140689770647744->212)",
        "source": "140689771793232->212",
        "target": "140689770647744->212",
        "animated": true
    },
    {
        "id": "(140689771793232->212)-(140689770781600->229)",
        "source": "140689771793232->212",
        "target": "140689770781600->229",
        "animated": true
    },
    {
        "id": "(140689771793232->210)-(140689770647744->210)",
        "source": "140689771793232->210",
        "target": "140689770647744->210",
        "animated": true
    },
    {
        "id": "(140689771793232->211)-(140689770647744->211)",
        "source": "140689771793232->211",
        "target": "140689770647744->211",
        "animated": true
    },
    {
        "id": "(140689771793232->227)-(140689770781600->227)",
        "source": "140689771793232->227",
        "target": "140689770781600->227",
        "animated": true
    },
    {
        "id": "(140689771793232->84)-(140689770781600->84)",
        "source": "140689771793232->84",
        "target": "140689770781600->84",
        "animated": true
    },
    {
        "id": "(140689770781600->229)-(140689771687232->229)",
        "source": "140689770781600->229",
        "target": "140689771687232->229",
        "animated": true
    },
    {
        "id": "(140689770781600->227)-(140689771687232->227)",
        "source": "140689770781600->227",
        "target": "140689771687232->227",
        "animated": true
    },
    {
        "id": "(140689770781600->84)-(140689771687232->61)",
        "source": "140689770781600->84",
        "target": "140689771687232->61",
        "animated": true
    },
    {
        "id": "(140689771687232->213)-(140689770454880->213)",
        "source": "140689771687232->213",
        "target": "140689770454880->213",
        "animated": true
    },
    {
        "id": "(140689771687232->213)-(140689770774832->228)",
        "source": "140689771687232->213",
        "target": "140689770774832->228",
        "animated": true
    },
    {
        "id": "(140689771687232->214)-(140689770454880->214)",
        "source": "140689771687232->214",
        "target": "140689770454880->214",
        "animated": true
    },
    {
        "id": "(140689771687232->215)-(140689770454880->215)",
        "source": "140689771687232->215",
        "target": "140689770454880->215",
        "animated": true
    },
    {
        "id": "(140689771687232->216)-(140689770454880->216)",
        "source": "140689771687232->216",
        "target": "140689770454880->216",
        "animated": true
    },
    {
        "id": "(140689771687232->61)-(140689770454880->61)",
        "source": "140689771687232->61",
        "target": "140689770454880->61",
        "animated": true
    },
    {
        "id": "(140689771687232->227)-(140689770774832->227)",
        "source": "140689771687232->227",
        "target": "140689770774832->227",
        "animated": true
    },
    {
        "id": "(140689771687232->229)-(140689770774832->229)",
        "source": "140689771687232->229",
        "target": "140689770774832->229",
        "animated": true
    },
    {
        "id": "(140689770454880->213)-(140689771690400->213)",
        "source": "140689770454880->213",
        "target": "140689771690400->213",
        "animated": true
    },
    {
        "id": "(140689770454880->213)-(140689770659552->221)",
        "source": "140689770454880->213",
        "target": "140689770659552->221",
        "animated": true
    },
    {
        "id": "(140689770454880->214)-(140689771690400->214)",
        "source": "140689770454880->214",
        "target": "140689771690400->214",
        "animated": true
    },
    {
        "id": "(140689770454880->215)-(140689771690400->215)",
        "source": "140689770454880->215",
        "target": "140689771690400->215",
        "animated": true
    },
    {
        "id": "(140689770454880->216)-(140689771690400->216)",
        "source": "140689770454880->216",
        "target": "140689771690400->216",
        "animated": true
    },
    {
        "id": "(140689770454880->61)-(140689770659552->61)",
        "source": "140689770454880->61",
        "target": "140689770659552->61",
        "animated": true
    },
    {
        "id": "(140689770659552->221)-(140689770455792->221)",
        "source": "140689770659552->221",
        "target": "140689770455792->221",
        "animated": true
    },
    {
        "id": "(140689770455792->217)-(140689770457952->217)",
        "source": "140689770455792->217",
        "target": "140689770457952->217",
        "animated": true
    },
    {
        "id": "(140689770455792->218)-(140689770457952->218)",
        "source": "140689770455792->218",
        "target": "140689770457952->218",
        "animated": true
    },
    {
        "id": "(140689770455792->219)-(140689770457952->219)",
        "source": "140689770455792->219",
        "target": "140689770457952->219",
        "animated": true
    },
    {
        "id": "(140689770455792->220)-(140689770457952->220)",
        "source": "140689770455792->220",
        "target": "140689770457952->220",
        "animated": true
    },
    {
        "id": "(140689770455792->221)-(140689770457952->221)",
        "source": "140689770455792->221",
        "target": "140689770457952->221",
        "animated": true
    },
    {
        "id": "(140689770916512->222)-(140689770910128->222)",
        "source": "140689770916512->222",
        "target": "140689770910128->222",
        "animated": true
    },
    {
        "id": "(140689770916512->223)-(140689770910128->223)",
        "source": "140689770916512->223",
        "target": "140689770910128->223",
        "animated": true
    },
    {
        "id": "(140689770916512->224)-(140689770910128->224)",
        "source": "140689770916512->224",
        "target": "140689770910128->224",
        "animated": true
    },
    {
        "id": "(140689770916512->225)-(140689770910128->225)",
        "source": "140689770916512->225",
        "target": "140689770910128->225",
        "animated": true
    },
    {
        "id": "(140689770916512->226)-(140689770910128->226)",
        "source": "140689770916512->226",
        "target": "140689770910128->226",
        "animated": true
    },
    {
        "id": "(140689770910128->222)-(140689770918768->222)",
        "source": "140689770910128->222",
        "target": "140689770918768->222",
        "animated": true
    },
    {
        "id": "(140689770910128->223)-(140689770918768->223)",
        "source": "140689770910128->223",
        "target": "140689770918768->223",
        "animated": true
    },
    {
        "id": "(140689770910128->224)-(140689770918768->224)",
        "source": "140689770910128->224",
        "target": "140689770918768->224",
        "animated": true
    },
    {
        "id": "(140689770910128->225)-(140689770918768->225)",
        "source": "140689770910128->225",
        "target": "140689770918768->225",
        "animated": true
    },
    {
        "id": "(140689770910128->226)-(140689770918768->226)",
        "source": "140689770910128->226",
        "target": "140689770918768->226",
        "animated": true
    },
    {
        "id": "(140689770918768->222)-(140689770916944->222)",
        "source": "140689770918768->222",
        "target": "140689770916944->222",
        "animated": true
    },
    {
        "id": "(140689770918768->223)-(140689770916944->223)",
        "source": "140689770918768->223",
        "target": "140689770916944->223",
        "animated": true
    },
    {
        "id": "(140689770918768->224)-(140689770916944->224)",
        "source": "140689770918768->224",
        "target": "140689770916944->224",
        "animated": true
    },
    {
        "id": "(140689770918768->225)-(140689770916944->225)",
        "source": "140689770918768->225",
        "target": "140689770916944->225",
        "animated": true
    },
    {
        "id": "(140689770918768->226)-(140689770916944->226)",
        "source": "140689770918768->226",
        "target": "140689770916944->226",
        "animated": true
    },
    {
        "id": "(140689770457952->217)-(140689770912816->217)",
        "source": "140689770457952->217",
        "target": "140689770912816->217",
        "animated": true
    },
    {
        "id": "(140689770457952->218)-(140689770912816->218)",
        "source": "140689770457952->218",
        "target": "140689770912816->218",
        "animated": true
    },
    {
        "id": "(140689770457952->219)-(140689770912816->219)",
        "source": "140689770457952->219",
        "target": "140689770912816->219",
        "animated": true
    },
    {
        "id": "(140689770457952->220)-(140689770912816->220)",
        "source": "140689770457952->220",
        "target": "140689770912816->220",
        "animated": true
    },
    {
        "id": "(140689770457952->221)-(140689770912816->221)",
        "source": "140689770457952->221",
        "target": "140689770912816->221",
        "animated": true
    },
    {
        "id": "(140689770912816->217)-(140689770914256->217)",
        "source": "140689770912816->217",
        "target": "140689770914256->217",
        "animated": true
    },
    {
        "id": "(140689770912816->218)-(140689770914256->218)",
        "source": "140689770912816->218",
        "target": "140689770914256->218",
        "animated": true
    },
    {
        "id": "(140689770912816->219)-(140689770914256->219)",
        "source": "140689770912816->219",
        "target": "140689770914256->219",
        "animated": true
    },
    {
        "id": "(140689770912816->220)-(140689770914256->220)",
        "source": "140689770912816->220",
        "target": "140689770914256->220",
        "animated": true
    },
    {
        "id": "(140689770912816->221)-(140689770914256->221)",
        "source": "140689770912816->221",
        "target": "140689770914256->221",
        "animated": true
    },
    {
        "id": "(140689771688816->113)-(140689771690448->113)",
        "source": "140689771688816->113",
        "target": "140689771690448->113",
        "animated": true
    },
    {
        "id": "(140689771688816->113)-(140689770648704->196)",
        "source": "140689771688816->113",
        "target": "140689770648704->196",
        "animated": true
    },
    {
        "id": "(140689771688816->19)-(140689771690448->19)",
        "source": "140689771688816->19",
        "target": "140689771690448->19",
        "animated": true
    },
    {
        "id": "(140689771688816->16)-(140689771690448->16)",
        "source": "140689771688816->16",
        "target": "140689771690448->16",
        "animated": true
    },
    {
        "id": "(140689771688816->17)-(140689771690448->17)",
        "source": "140689771688816->17",
        "target": "140689771690448->17",
        "animated": true
    },
    {
        "id": "(140689771688816->122)-(140689771690448->122)",
        "source": "140689771688816->122",
        "target": "140689771690448->122",
        "animated": true
    },
    {
        "id": "(140689771688816->35)-(140689771690448->35)",
        "source": "140689771688816->35",
        "target": "140689771690448->35",
        "animated": true
    },
    {
        "id": "(140689771688816->61)-(140689771690448->61)",
        "source": "140689771688816->61",
        "target": "140689771690448->61",
        "animated": true
    },
    {
        "id": "(140689771688816->198)-(140689770648704->198)",
        "source": "140689771688816->198",
        "target": "140689770648704->198",
        "animated": true
    },
    {
        "id": "(140689771688816->84)-(140689770648704->84)",
        "source": "140689771688816->84",
        "target": "140689770648704->84",
        "animated": true
    },
    {
        "id": "(140689770648704->198)-(140689770647648->198)",
        "source": "140689770648704->198",
        "target": "140689770647648->198",
        "animated": true
    },
    {
        "id": "(140689770648704->196)-(140689770647648->196)",
        "source": "140689770648704->196",
        "target": "140689770647648->196",
        "animated": true
    },
    {
        "id": "(140689770648704->84)-(140689770647648->84)",
        "source": "140689770648704->84",
        "target": "140689770647648->84",
        "animated": true
    },
    {
        "id": "(140689770647648->198)-(140689770364736->198)",
        "source": "140689770647648->198",
        "target": "140689770364736->198",
        "animated": true
    },
    {
        "id": "(140689770647648->196)-(140689770364736->196)",
        "source": "140689770647648->196",
        "target": "140689770364736->196",
        "animated": true
    },
    {
        "id": "(140689770647648->84)-(140689770364736->84)",
        "source": "140689770647648->84",
        "target": "140689770364736->84",
        "animated": true
    },
    {
        "id": "(140689770364736->198)-(140689770647696->198)",
        "source": "140689770364736->198",
        "target": "140689770647696->198",
        "animated": true
    },
    {
        "id": "(140689770364736->196)-(140689770647696->196)",
        "source": "140689770364736->196",
        "target": "140689770647696->196",
        "animated": true
    },
    {
        "id": "(140689770364736->84)-(140689770647696->84)",
        "source": "140689770364736->84",
        "target": "140689770647696->84",
        "animated": true
    },
    {
        "id": "(140689770647696->198)-(140689771792224->198)",
        "source": "140689770647696->198",
        "target": "140689771792224->198",
        "animated": true
    },
    {
        "id": "(140689770647696->196)-(140689771792224->196)",
        "source": "140689770647696->196",
        "target": "140689771792224->196",
        "animated": true
    },
    {
        "id": "(140689770647696->84)-(140689771792224->61)",
        "source": "140689770647696->84",
        "target": "140689771792224->61",
        "animated": true
    },
    {
        "id": "(140689771792224->182)-(140689771792512->182)",
        "source": "140689771792224->182",
        "target": "140689771792512->182",
        "animated": true
    },
    {
        "id": "(140689771792224->182)-(140689770450896->197)",
        "source": "140689771792224->182",
        "target": "140689770450896->197",
        "animated": true
    },
    {
        "id": "(140689771792224->183)-(140689771792512->183)",
        "source": "140689771792224->183",
        "target": "140689771792512->183",
        "animated": true
    },
    {
        "id": "(140689771792224->184)-(140689771792512->184)",
        "source": "140689771792224->184",
        "target": "140689771792512->184",
        "animated": true
    },
    {
        "id": "(140689771792224->185)-(140689771792512->185)",
        "source": "140689771792224->185",
        "target": "140689771792512->185",
        "animated": true
    },
    {
        "id": "(140689771792224->61)-(140689771792512->61)",
        "source": "140689771792224->61",
        "target": "140689771792512->61",
        "animated": true
    },
    {
        "id": "(140689771792224->196)-(140689770450896->196)",
        "source": "140689771792224->196",
        "target": "140689770450896->196",
        "animated": true
    },
    {
        "id": "(140689771792224->198)-(140689770450896->198)",
        "source": "140689771792224->198",
        "target": "140689770450896->198",
        "animated": true
    },
    {
        "id": "(140689771792512->182)-(140689770448304->182)",
        "source": "140689771792512->182",
        "target": "140689770448304->182",
        "animated": true
    },
    {
        "id": "(140689771792512->182)-(140689770778144->190)",
        "source": "140689771792512->182",
        "target": "140689770778144->190",
        "animated": true
    },
    {
        "id": "(140689771792512->183)-(140689770448304->183)",
        "source": "140689771792512->183",
        "target": "140689770448304->183",
        "animated": true
    },
    {
        "id": "(140689771792512->184)-(140689770448304->184)",
        "source": "140689771792512->184",
        "target": "140689770448304->184",
        "animated": true
    },
    {
        "id": "(140689771792512->185)-(140689770448304->185)",
        "source": "140689771792512->185",
        "target": "140689770448304->185",
        "animated": true
    },
    {
        "id": "(140689771792512->61)-(140689770778144->61)",
        "source": "140689771792512->61",
        "target": "140689770778144->61",
        "animated": true
    },
    {
        "id": "(140689770778144->190)-(140689770786640->190)",
        "source": "140689770778144->190",
        "target": "140689770786640->190",
        "animated": true
    },
    {
        "id": "(140689770786640->186)-(140689770654656->186)",
        "source": "140689770786640->186",
        "target": "140689770654656->186",
        "animated": true
    },
    {
        "id": "(140689770786640->187)-(140689770654656->187)",
        "source": "140689770786640->187",
        "target": "140689770654656->187",
        "animated": true
    },
    {
        "id": "(140689770786640->188)-(140689770654656->188)",
        "source": "140689770786640->188",
        "target": "140689770654656->188",
        "animated": true
    },
    {
        "id": "(140689770786640->189)-(140689770654656->189)",
        "source": "140689770786640->189",
        "target": "140689770654656->189",
        "animated": true
    },
    {
        "id": "(140689770786640->190)-(140689770654656->190)",
        "source": "140689770786640->190",
        "target": "140689770654656->190",
        "animated": true
    },
    {
        "id": "(140689770654224->191)-(140689770788128->191)",
        "source": "140689770654224->191",
        "target": "140689770788128->191",
        "animated": true
    },
    {
        "id": "(140689770654224->192)-(140689770788128->192)",
        "source": "140689770654224->192",
        "target": "140689770788128->192",
        "animated": true
    },
    {
        "id": "(140689770654224->193)-(140689770788128->193)",
        "source": "140689770654224->193",
        "target": "140689770788128->193",
        "animated": true
    },
    {
        "id": "(140689770654224->194)-(140689770788128->194)",
        "source": "140689770654224->194",
        "target": "140689770788128->194",
        "animated": true
    },
    {
        "id": "(140689770654224->195)-(140689770788128->195)",
        "source": "140689770654224->195",
        "target": "140689770788128->195",
        "animated": true
    },
    {
        "id": "(140689770788128->191)-(140689770451328->191)",
        "source": "140689770788128->191",
        "target": "140689770451328->191",
        "animated": true
    },
    {
        "id": "(140689770788128->192)-(140689770451328->192)",
        "source": "140689770788128->192",
        "target": "140689770451328->192",
        "animated": true
    },
    {
        "id": "(140689770788128->193)-(140689770451328->193)",
        "source": "140689770788128->193",
        "target": "140689770451328->193",
        "animated": true
    },
    {
        "id": "(140689770788128->194)-(140689770451328->194)",
        "source": "140689770788128->194",
        "target": "140689770451328->194",
        "animated": true
    },
    {
        "id": "(140689770788128->195)-(140689770451328->195)",
        "source": "140689770788128->195",
        "target": "140689770451328->195",
        "animated": true
    },
    {
        "id": "(140689770451328->191)-(140689770777136->191)",
        "source": "140689770451328->191",
        "target": "140689770777136->191",
        "animated": true
    },
    {
        "id": "(140689770451328->192)-(140689770777136->192)",
        "source": "140689770451328->192",
        "target": "140689770777136->192",
        "animated": true
    },
    {
        "id": "(140689770451328->193)-(140689770777136->193)",
        "source": "140689770451328->193",
        "target": "140689770777136->193",
        "animated": true
    },
    {
        "id": "(140689770451328->194)-(140689770777136->194)",
        "source": "140689770451328->194",
        "target": "140689770777136->194",
        "animated": true
    },
    {
        "id": "(140689770451328->195)-(140689770777136->195)",
        "source": "140689770451328->195",
        "target": "140689770777136->195",
        "animated": true
    },
    {
        "id": "(140689770654656->186)-(140689770786208->186)",
        "source": "140689770654656->186",
        "target": "140689770786208->186",
        "animated": true
    },
    {
        "id": "(140689770654656->187)-(140689770786208->187)",
        "source": "140689770654656->187",
        "target": "140689770786208->187",
        "animated": true
    },
    {
        "id": "(140689770654656->188)-(140689770786208->188)",
        "source": "140689770654656->188",
        "target": "140689770786208->188",
        "animated": true
    },
    {
        "id": "(140689770654656->189)-(140689770786208->189)",
        "source": "140689770654656->189",
        "target": "140689770786208->189",
        "animated": true
    },
    {
        "id": "(140689770654656->190)-(140689770786208->190)",
        "source": "140689770654656->190",
        "target": "140689770786208->190",
        "animated": true
    },
    {
        "id": "(140689770786208->186)-(140689770362768->186)",
        "source": "140689770786208->186",
        "target": "140689770362768->186",
        "animated": true
    },
    {
        "id": "(140689770786208->187)-(140689770362768->187)",
        "source": "140689770786208->187",
        "target": "140689770362768->187",
        "animated": true
    },
    {
        "id": "(140689770786208->188)-(140689770362768->188)",
        "source": "140689770786208->188",
        "target": "140689770362768->188",
        "animated": true
    },
    {
        "id": "(140689770786208->189)-(140689770362768->189)",
        "source": "140689770786208->189",
        "target": "140689770362768->189",
        "animated": true
    },
    {
        "id": "(140689770786208->190)-(140689770362768->190)",
        "source": "140689770786208->190",
        "target": "140689770362768->190",
        "animated": true
    },
    {
        "id": "(140689771690448->19)-(140689770652688->19)",
        "source": "140689771690448->19",
        "target": "140689770652688->19",
        "animated": true
    },
    {
        "id": "(140689771690448->19)-(140689770360704->167)",
        "source": "140689771690448->19",
        "target": "140689770360704->167",
        "animated": true
    },
    {
        "id": "(140689771690448->16)-(140689770652688->16)",
        "source": "140689771690448->16",
        "target": "140689770652688->16",
        "animated": true
    },
    {
        "id": "(140689771690448->17)-(140689770652688->17)",
        "source": "140689771690448->17",
        "target": "140689770652688->17",
        "animated": true
    },
    {
        "id": "(140689771690448->122)-(140689770652688->122)",
        "source": "140689771690448->122",
        "target": "140689770652688->122",
        "animated": true
    },
    {
        "id": "(140689771690448->113)-(140689770652688->113)",
        "source": "140689771690448->113",
        "target": "140689770652688->113",
        "animated": true
    },
    {
        "id": "(140689771690448->35)-(140689770652688->35)",
        "source": "140689771690448->35",
        "target": "140689770652688->35",
        "animated": true
    },
    {
        "id": "(140689771690448->61)-(140689770360704->61)",
        "source": "140689771690448->61",
        "target": "140689770360704->61",
        "animated": true
    },
    {
        "id": "(140689770360704->167)-(140689770456752->167)",
        "source": "140689770360704->167",
        "target": "140689770456752->167",
        "animated": true
    },
    {
        "id": "(140689770360704->61)-(140689770456752->61)",
        "source": "140689770360704->61",
        "target": "140689770456752->61",
        "animated": true
    },
    {
        "id": "(140689770456752->167)-(140689770448688->167)",
        "source": "140689770456752->167",
        "target": "140689770448688->167",
        "animated": true
    },
    {
        "id": "(140689770456752->61)-(140689770448688->61)",
        "source": "140689770456752->61",
        "target": "140689770448688->61",
        "animated": true
    },
    {
        "id": "(140689770448688->167)-(140689770451952->167)",
        "source": "140689770448688->167",
        "target": "140689770451952->167",
        "animated": true
    },
    {
        "id": "(140689770448688->61)-(140689770451952->61)",
        "source": "140689770448688->61",
        "target": "140689770451952->61",
        "animated": true
    },
    {
        "id": "(140689770451952->167)-(140689770449024->167)",
        "source": "140689770451952->167",
        "target": "140689770449024->167",
        "animated": true
    },
    {
        "id": "(140689770449024->163)-(140689770458864->163)",
        "source": "140689770449024->163",
        "target": "140689770458864->163",
        "animated": true
    },
    {
        "id": "(140689770449024->164)-(140689770458864->164)",
        "source": "140689770449024->164",
        "target": "140689770458864->164",
        "animated": true
    },
    {
        "id": "(140689770449024->165)-(140689770458864->165)",
        "source": "140689770449024->165",
        "target": "140689770458864->165",
        "animated": true
    },
    {
        "id": "(140689770449024->166)-(140689770458864->166)",
        "source": "140689770449024->166",
        "target": "140689770458864->166",
        "animated": true
    },
    {
        "id": "(140689770449024->167)-(140689770458864->167)",
        "source": "140689770449024->167",
        "target": "140689770458864->167",
        "animated": true
    },
    {
        "id": "(140689770461648->168)-(140689770906528->168)",
        "source": "140689770461648->168",
        "target": "140689770906528->168",
        "animated": true
    },
    {
        "id": "(140689770461648->169)-(140689770906528->169)",
        "source": "140689770461648->169",
        "target": "140689770906528->169",
        "animated": true
    },
    {
        "id": "(140689770461648->170)-(140689770906528->170)",
        "source": "140689770461648->170",
        "target": "140689770906528->170",
        "animated": true
    },
    {
        "id": "(140689770461648->171)-(140689770906528->171)",
        "source": "140689770461648->171",
        "target": "140689770906528->171",
        "animated": true
    },
    {
        "id": "(140689770461648->172)-(140689770906528->172)",
        "source": "140689770461648->172",
        "target": "140689770906528->172",
        "animated": true
    },
    {
        "id": "(140689770906528->168)-(140689770458048->168)",
        "source": "140689770906528->168",
        "target": "140689770458048->168",
        "animated": true
    },
    {
        "id": "(140689770906528->169)-(140689770458048->169)",
        "source": "140689770906528->169",
        "target": "140689770458048->169",
        "animated": true
    },
    {
        "id": "(140689770906528->170)-(140689770458048->170)",
        "source": "140689770906528->170",
        "target": "140689770458048->170",
        "animated": true
    },
    {
        "id": "(140689770906528->171)-(140689770458048->171)",
        "source": "140689770906528->171",
        "target": "140689770458048->171",
        "animated": true
    },
    {
        "id": "(140689770906528->172)-(140689770458048->172)",
        "source": "140689770906528->172",
        "target": "140689770458048->172",
        "animated": true
    },
    {
        "id": "(140689770458048->168)-(140689770907776->168)",
        "source": "140689770458048->168",
        "target": "140689770907776->168",
        "animated": true
    },
    {
        "id": "(140689770458048->169)-(140689770907776->169)",
        "source": "140689770458048->169",
        "target": "140689770907776->169",
        "animated": true
    },
    {
        "id": "(140689770458048->170)-(140689770907776->170)",
        "source": "140689770458048->170",
        "target": "140689770907776->170",
        "animated": true
    },
    {
        "id": "(140689770458048->171)-(140689770907776->171)",
        "source": "140689770458048->171",
        "target": "140689770907776->171",
        "animated": true
    },
    {
        "id": "(140689770458048->172)-(140689770907776->172)",
        "source": "140689770458048->172",
        "target": "140689770907776->172",
        "animated": true
    },
    {
        "id": "(140689770458864->163)-(140689770458912->163)",
        "source": "140689770458864->163",
        "target": "140689770458912->163",
        "animated": true
    },
    {
        "id": "(140689770458864->164)-(140689770458912->164)",
        "source": "140689770458864->164",
        "target": "140689770458912->164",
        "animated": true
    },
    {
        "id": "(140689770458864->165)-(140689770458912->165)",
        "source": "140689770458864->165",
        "target": "140689770458912->165",
        "animated": true
    },
    {
        "id": "(140689770458864->166)-(140689770458912->166)",
        "source": "140689770458864->166",
        "target": "140689770458912->166",
        "animated": true
    },
    {
        "id": "(140689770458864->167)-(140689770458912->167)",
        "source": "140689770458864->167",
        "target": "140689770458912->167",
        "animated": true
    },
    {
        "id": "(140689770458912->163)-(140689770451664->163)",
        "source": "140689770458912->163",
        "target": "140689770451664->163",
        "animated": true
    },
    {
        "id": "(140689770458912->164)-(140689770451664->164)",
        "source": "140689770458912->164",
        "target": "140689770451664->164",
        "animated": true
    },
    {
        "id": "(140689770458912->165)-(140689770451664->165)",
        "source": "140689770458912->165",
        "target": "140689770451664->165",
        "animated": true
    },
    {
        "id": "(140689770458912->166)-(140689770451664->166)",
        "source": "140689770458912->166",
        "target": "140689770451664->166",
        "animated": true
    },
    {
        "id": "(140689770458912->167)-(140689770451664->167)",
        "source": "140689770458912->167",
        "target": "140689770451664->167",
        "animated": true
    },
    {
        "id": "(140689770652688->16)-(140689771691264->16)",
        "source": "140689770652688->16",
        "target": "140689771691264->16",
        "animated": true
    },
    {
        "id": "(140689770652688->17)-(140689771691264->17)",
        "source": "140689770652688->17",
        "target": "140689771691264->17",
        "animated": true
    },
    {
        "id": "(140689770652688->19)-(140689771691264->19)",
        "source": "140689770652688->19",
        "target": "140689771691264->19",
        "animated": true
    },
    {
        "id": "(140689770652688->122)-(140689771691264->122)",
        "source": "140689770652688->122",
        "target": "140689771691264->122",
        "animated": true
    },
    {
        "id": "(140689770652688->113)-(140689771691264->113)",
        "source": "140689770652688->113",
        "target": "140689771691264->113",
        "animated": true
    },
    {
        "id": "(140689770652688->35)-(140689771691264->35)",
        "source": "140689770652688->35",
        "target": "140689771691264->35",
        "animated": true
    },
    {
        "id": "(140689771691264->19)-(140689770449744->19)",
        "source": "140689771691264->19",
        "target": "140689770449744->19",
        "animated": true
    },
    {
        "id": "(140689771691264->19)-(140689771689344->114)",
        "source": "140689771691264->19",
        "target": "140689771689344->114",
        "animated": true
    },
    {
        "id": "(140689771691264->15)-(140689770449744->15)",
        "source": "140689771691264->15",
        "target": "140689770449744->15",
        "animated": true
    },
    {
        "id": "(140689771691264->16)-(140689770449744->16)",
        "source": "140689771691264->16",
        "target": "140689770449744->16",
        "animated": true
    },
    {
        "id": "(140689771691264->17)-(140689770449744->17)",
        "source": "140689771691264->17",
        "target": "140689770449744->17",
        "animated": true
    },
    {
        "id": "(140689771691264->18)-(140689770449744->18)",
        "source": "140689771691264->18",
        "target": "140689770449744->18",
        "animated": true
    },
    {
        "id": "(140689771691264->35)-(140689771689344->35)",
        "source": "140689771691264->35",
        "target": "140689771689344->35",
        "animated": true
    },
    {
        "id": "(140689771691264->40)-(140689771689344->40)",
        "source": "140689771691264->40",
        "target": "140689771689344->40",
        "animated": true
    },
    {
        "id": "(140689771691264->109)-(140689771689344->109)",
        "source": "140689771691264->109",
        "target": "140689771689344->109",
        "animated": true
    },
    {
        "id": "(140689771691264->113)-(140689771689344->113)",
        "source": "140689771691264->113",
        "target": "140689771689344->113",
        "animated": true
    },
    {
        "id": "(140689771691264->122)-(140689771689344->122)",
        "source": "140689771691264->122",
        "target": "140689771689344->122",
        "animated": true
    },
    {
        "id": "(140689771691264->123)-(140689771689344->123)",
        "source": "140689771691264->123",
        "target": "140689771689344->123",
        "animated": true
    },
    {
        "id": "(140689771691264->124)-(140689771689344->124)",
        "source": "140689771691264->124",
        "target": "140689771689344->124",
        "animated": true
    },
    {
        "id": "(140689771689344->114)-(140689771685792->114)",
        "source": "140689771689344->114",
        "target": "140689771685792->114",
        "animated": true
    },
    {
        "id": "(140689771689344->114)-(140689770653552->121)",
        "source": "140689771689344->114",
        "target": "140689770653552->121",
        "animated": true
    },
    {
        "id": "(140689771689344->35)-(140689771685792->35)",
        "source": "140689771689344->35",
        "target": "140689771685792->35",
        "animated": true
    },
    {
        "id": "(140689771689344->40)-(140689771685792->40)",
        "source": "140689771689344->40",
        "target": "140689771685792->40",
        "animated": true
    },
    {
        "id": "(140689771689344->109)-(140689771685792->109)",
        "source": "140689771689344->109",
        "target": "140689771685792->109",
        "animated": true
    },
    {
        "id": "(140689771689344->113)-(140689771685792->113)",
        "source": "140689771689344->113",
        "target": "140689771685792->113",
        "animated": true
    },
    {
        "id": "(140689771689344->122)-(140689770653552->122)",
        "source": "140689771689344->122",
        "target": "140689770653552->122",
        "animated": true
    },
    {
        "id": "(140689771689344->123)-(140689770653552->123)",
        "source": "140689771689344->123",
        "target": "140689770653552->123",
        "animated": true
    },
    {
        "id": "(140689771689344->124)-(140689770653552->124)",
        "source": "140689771689344->124",
        "target": "140689770653552->124",
        "animated": true
    },
    {
        "id": "(140689771685792->35)-(140689770656864->35)",
        "source": "140689771685792->35",
        "target": "140689770656864->35",
        "animated": true
    },
    {
        "id": "(140689771685792->35)-(140689770787120->115)",
        "source": "140689771685792->35",
        "target": "140689770787120->115",
        "animated": true
    },
    {
        "id": "(140689771685792->40)-(140689770656864->40)",
        "source": "140689771685792->40",
        "target": "140689770656864->40",
        "animated": true
    },
    {
        "id": "(140689771685792->109)-(140689770656864->109)",
        "source": "140689771685792->109",
        "target": "140689770656864->109",
        "animated": true
    },
    {
        "id": "(140689771685792->113)-(140689770787120->113)",
        "source": "140689771685792->113",
        "target": "140689770787120->113",
        "animated": true
    },
    {
        "id": "(140689771685792->114)-(140689770787120->114)",
        "source": "140689771685792->114",
        "target": "140689770787120->114",
        "animated": true
    },
    {
        "id": "(140689770656864->40)-(140689770653360->40)",
        "source": "140689770656864->40",
        "target": "140689770653360->40",
        "animated": true
    },
    {
        "id": "(140689770656864->35)-(140689770653360->35)",
        "source": "140689770656864->35",
        "target": "140689770653360->35",
        "animated": true
    },
    {
        "id": "(140689770656864->109)-(140689770653360->109)",
        "source": "140689770656864->109",
        "target": "140689770653360->109",
        "animated": true
    },
    {
        "id": "(140689770653360->40)-(140689771686848->40)",
        "source": "140689770653360->40",
        "target": "140689771686848->40",
        "animated": true
    },
    {
        "id": "(140689770653360->35)-(140689771686848->35)",
        "source": "140689770653360->35",
        "target": "140689771686848->35",
        "animated": true
    },
    {
        "id": "(140689770653360->109)-(140689771686848->84)",
        "source": "140689770653360->109",
        "target": "140689771686848->84",
        "animated": true
    },
    {
        "id": "(140689771686848->35)-(140689771685984->35)",
        "source": "140689771686848->35",
        "target": "140689771685984->35",
        "animated": true
    },
    {
        "id": "(140689771686848->35)-(140689770782224->39)",
        "source": "140689771686848->35",
        "target": "140689770782224->39",
        "animated": true
    },
    {
        "id": "(140689771686848->33)-(140689771685984->33)",
        "source": "140689771686848->33",
        "target": "140689771685984->33",
        "animated": true
    },
    {
        "id": "(140689771686848->34)-(140689771685984->34)",
        "source": "140689771686848->34",
        "target": "140689771685984->34",
        "animated": true
    },
    {
        "id": "(140689771686848->88)-(140689771685984->88)",
        "source": "140689771686848->88",
        "target": "140689771685984->88",
        "animated": true
    },
    {
        "id": "(140689771686848->84)-(140689771685984->84)",
        "source": "140689771686848->84",
        "target": "140689771685984->84",
        "animated": true
    },
    {
        "id": "(140689771686848->40)-(140689770782224->40)",
        "source": "140689771686848->40",
        "target": "140689770782224->40",
        "animated": true
    },
    {
        "id": "(140689771685984->35)-(140689770658352->35)",
        "source": "140689771685984->35",
        "target": "140689770658352->35",
        "animated": true
    },
    {
        "id": "(140689771685984->35)-(140689770785440->90)",
        "source": "140689771685984->35",
        "target": "140689770785440->90",
        "animated": true
    },
    {
        "id": "(140689771685984->33)-(140689770658352->33)",
        "source": "140689771685984->33",
        "target": "140689770658352->33",
        "animated": true
    },
    {
        "id": "(140689771685984->34)-(140689770658352->34)",
        "source": "140689771685984->34",
        "target": "140689770658352->34",
        "animated": true
    },
    {
        "id": "(140689771685984->88)-(140689770785440->88)",
        "source": "140689771685984->88",
        "target": "140689770785440->88",
        "animated": true
    },
    {
        "id": "(140689771685984->84)-(140689770785440->84)",
        "source": "140689771685984->84",
        "target": "140689770785440->84",
        "animated": true
    },
    {
        "id": "(140689770785440->90)-(140689771690640->90)",
        "source": "140689770785440->90",
        "target": "140689771690640->90",
        "animated": true
    },
    {
        "id": "(140689770785440->88)-(140689771690640->88)",
        "source": "140689770785440->88",
        "target": "140689771690640->88",
        "animated": true
    },
    {
        "id": "(140689770785440->84)-(140689771690640->61)",
        "source": "140689770785440->84",
        "target": "140689771690640->61",
        "animated": true
    },
    {
        "id": "(140689771690640->25)-(140689771690928->25)",
        "source": "140689771690640->25",
        "target": "140689771690928->25",
        "animated": true
    },
    {
        "id": "(140689771690640->25)-(140689770778240->89)",
        "source": "140689771690640->25",
        "target": "140689770778240->89",
        "animated": true
    },
    {
        "id": "(140689771690640->26)-(140689771690928->26)",
        "source": "140689771690640->26",
        "target": "140689771690928->26",
        "animated": true
    },
    {
        "id": "(140689771690640->27)-(140689771690928->27)",
        "source": "140689771690640->27",
        "target": "140689771690928->27",
        "animated": true
    },
    {
        "id": "(140689771690640->28)-(140689771690928->28)",
        "source": "140689771690640->28",
        "target": "140689771690928->28",
        "animated": true
    },
    {
        "id": "(140689771690640->61)-(140689771690928->61)",
        "source": "140689771690640->61",
        "target": "140689771690928->61",
        "animated": true
    },
    {
        "id": "(140689771690640->88)-(140689770778240->88)",
        "source": "140689771690640->88",
        "target": "140689770778240->88",
        "animated": true
    },
    {
        "id": "(140689771690640->90)-(140689770778240->90)",
        "source": "140689771690640->90",
        "target": "140689770778240->90",
        "animated": true
    },
    {
        "id": "(140689771690928->25)-(140689770456608->25)",
        "source": "140689771690928->25",
        "target": "140689770456608->25",
        "animated": true
    },
    {
        "id": "(140689771690928->25)-(140689770461840->137)",
        "source": "140689771690928->25",
        "target": "140689770461840->137",
        "animated": true
    },
    {
        "id": "(140689771690928->26)-(140689770456608->26)",
        "source": "140689771690928->26",
        "target": "140689770456608->26",
        "animated": true
    },
    {
        "id": "(140689771690928->27)-(140689770456608->27)",
        "source": "140689771690928->27",
        "target": "140689770456608->27",
        "animated": true
    },
    {
        "id": "(140689771690928->28)-(140689770456608->28)",
        "source": "140689771690928->28",
        "target": "140689770456608->28",
        "animated": true
    },
    {
        "id": "(140689771690928->61)-(140689770461840->61)",
        "source": "140689771690928->61",
        "target": "140689770461840->61",
        "animated": true
    },
    {
        "id": "(140689770461840->137)-(140689770779824->137)",
        "source": "140689770461840->137",
        "target": "140689770779824->137",
        "animated": true
    },
    {
        "id": "(140689770779824->133)-(140689770787168->133)",
        "source": "140689770779824->133",
        "target": "140689770787168->133",
        "animated": true
    },
    {
        "id": "(140689770779824->134)-(140689770787168->134)",
        "source": "140689770779824->134",
        "target": "140689770787168->134",
        "animated": true
    },
    {
        "id": "(140689770779824->135)-(140689770787168->135)",
        "source": "140689770779824->135",
        "target": "140689770787168->135",
        "animated": true
    },
    {
        "id": "(140689770779824->136)-(140689770787168->136)",
        "source": "140689770779824->136",
        "target": "140689770787168->136",
        "animated": true
    },
    {
        "id": "(140689770779824->137)-(140689770787168->137)",
        "source": "140689770779824->137",
        "target": "140689770787168->137",
        "animated": true
    },
    {
        "id": "(140689770788032->138)-(140689770643856->138)",
        "source": "140689770788032->138",
        "target": "140689770643856->138",
        "animated": true
    },
    {
        "id": "(140689770788032->139)-(140689770643856->139)",
        "source": "140689770788032->139",
        "target": "140689770643856->139",
        "animated": true
    },
    {
        "id": "(140689770788032->140)-(140689770643856->140)",
        "source": "140689770788032->140",
        "target": "140689770643856->140",
        "animated": true
    },
    {
        "id": "(140689770788032->141)-(140689770643856->141)",
        "source": "140689770788032->141",
        "target": "140689770643856->141",
        "animated": true
    },
    {
        "id": "(140689770788032->142)-(140689770643856->142)",
        "source": "140689770788032->142",
        "target": "140689770643856->142",
        "animated": true
    },
    {
        "id": "(140689770643856->138)-(140689770778576->138)",
        "source": "140689770643856->138",
        "target": "140689770778576->138",
        "animated": true
    },
    {
        "id": "(140689770643856->139)-(140689770778576->139)",
        "source": "140689770643856->139",
        "target": "140689770778576->139",
        "animated": true
    },
    {
        "id": "(140689770643856->140)-(140689770778576->140)",
        "source": "140689770643856->140",
        "target": "140689770778576->140",
        "animated": true
    },
    {
        "id": "(140689770643856->141)-(140689770778576->141)",
        "source": "140689770643856->141",
        "target": "140689770778576->141",
        "animated": true
    },
    {
        "id": "(140689770643856->142)-(140689770778576->142)",
        "source": "140689770643856->142",
        "target": "140689770778576->142",
        "animated": true
    },
    {
        "id": "(140689770778576->138)-(140689770790192->138)",
        "source": "140689770778576->138",
        "target": "140689770790192->138",
        "animated": true
    },
    {
        "id": "(140689770778576->139)-(140689770790192->139)",
        "source": "140689770778576->139",
        "target": "140689770790192->139",
        "animated": true
    },
    {
        "id": "(140689770778576->140)-(140689770790192->140)",
        "source": "140689770778576->140",
        "target": "140689770790192->140",
        "animated": true
    },
    {
        "id": "(140689770778576->141)-(140689770790192->141)",
        "source": "140689770778576->141",
        "target": "140689770790192->141",
        "animated": true
    },
    {
        "id": "(140689770778576->142)-(140689770790192->142)",
        "source": "140689770778576->142",
        "target": "140689770790192->142",
        "animated": true
    },
    {
        "id": "(140689770787168->133)-(140689770907056->133)",
        "source": "140689770787168->133",
        "target": "140689770907056->133",
        "animated": true
    },
    {
        "id": "(140689770787168->134)-(140689770907056->134)",
        "source": "140689770787168->134",
        "target": "140689770907056->134",
        "animated": true
    },
    {
        "id": "(140689770787168->135)-(140689770907056->135)",
        "source": "140689770787168->135",
        "target": "140689770907056->135",
        "animated": true
    },
    {
        "id": "(140689770787168->136)-(140689770907056->136)",
        "source": "140689770787168->136",
        "target": "140689770907056->136",
        "animated": true
    },
    {
        "id": "(140689770787168->137)-(140689770907056->137)",
        "source": "140689770787168->137",
        "target": "140689770907056->137",
        "animated": true
    },
    {
        "id": "(140689770907056->133)-(140689770787360->133)",
        "source": "140689770907056->133",
        "target": "140689770787360->133",
        "animated": true
    },
    {
        "id": "(140689770907056->134)-(140689770787360->134)",
        "source": "140689770907056->134",
        "target": "140689770787360->134",
        "animated": true
    },
    {
        "id": "(140689770907056->135)-(140689770787360->135)",
        "source": "140689770907056->135",
        "target": "140689770787360->135",
        "animated": true
    },
    {
        "id": "(140689770907056->136)-(140689770787360->136)",
        "source": "140689770907056->136",
        "target": "140689770787360->136",
        "animated": true
    },
    {
        "id": "(140689770907056->137)-(140689770787360->137)",
        "source": "140689770907056->137",
        "target": "140689770787360->137",
        "animated": true
    },
    {
        "id": "(140689770449744->15)-(140689770457664->15)",
        "source": "140689770449744->15",
        "target": "140689770457664->15",
        "animated": true
    },
    {
        "id": "(140689770449744->16)-(140689770457664->16)",
        "source": "140689770449744->16",
        "target": "140689770457664->16",
        "animated": true
    },
    {
        "id": "(140689770449744->17)-(140689770457664->17)",
        "source": "140689770449744->17",
        "target": "140689770457664->17",
        "animated": true
    },
    {
        "id": "(140689770449744->18)-(140689770457664->18)",
        "source": "140689770449744->18",
        "target": "140689770457664->18",
        "animated": true
    },
    {
        "id": "(140689770449744->19)-(140689770457664->19)",
        "source": "140689770449744->19",
        "target": "140689770457664->19",
        "animated": true
    },
    {
        "id": "(140689770462176->44)-(140689770461408->44)",
        "source": "140689770462176->44",
        "target": "140689770461408->44",
        "animated": true
    },
    {
        "id": "(140689770462176->45)-(140689770461408->45)",
        "source": "140689770462176->45",
        "target": "140689770461408->45",
        "animated": true
    },
    {
        "id": "(140689770462176->46)-(140689770461408->46)",
        "source": "140689770462176->46",
        "target": "140689770461408->46",
        "animated": true
    },
    {
        "id": "(140689770462176->47)-(140689770461408->47)",
        "source": "140689770462176->47",
        "target": "140689770461408->47",
        "animated": true
    },
    {
        "id": "(140689770462176->48)-(140689770461408->48)",
        "source": "140689770462176->48",
        "target": "140689770461408->48",
        "animated": true
    },
    {
        "id": "(140689770461408->44)-(140689770646880->44)",
        "source": "140689770461408->44",
        "target": "140689770646880->44",
        "animated": true
    },
    {
        "id": "(140689770461408->45)-(140689770646880->45)",
        "source": "140689770461408->45",
        "target": "140689770646880->45",
        "animated": true
    },
    {
        "id": "(140689770461408->46)-(140689770646880->46)",
        "source": "140689770461408->46",
        "target": "140689770646880->46",
        "animated": true
    },
    {
        "id": "(140689770461408->47)-(140689770646880->47)",
        "source": "140689770461408->47",
        "target": "140689770646880->47",
        "animated": true
    },
    {
        "id": "(140689770461408->48)-(140689770646880->48)",
        "source": "140689770461408->48",
        "target": "140689770646880->48",
        "animated": true
    },
    {
        "id": "(140689770646880->44)-(140689770458672->44)",
        "source": "140689770646880->44",
        "target": "140689770458672->44",
        "animated": true
    },
    {
        "id": "(140689770646880->45)-(140689770458672->45)",
        "source": "140689770646880->45",
        "target": "140689770458672->45",
        "animated": true
    },
    {
        "id": "(140689770646880->46)-(140689770458672->46)",
        "source": "140689770646880->46",
        "target": "140689770458672->46",
        "animated": true
    },
    {
        "id": "(140689770646880->47)-(140689770458672->47)",
        "source": "140689770646880->47",
        "target": "140689770458672->47",
        "animated": true
    },
    {
        "id": "(140689770646880->48)-(140689770458672->48)",
        "source": "140689770646880->48",
        "target": "140689770458672->48",
        "animated": true
    },
    {
        "id": "(140689770457664->15)-(140689770459200->15)",
        "source": "140689770457664->15",
        "target": "140689770459200->15",
        "animated": true
    },
    {
        "id": "(140689770457664->16)-(140689770459200->16)",
        "source": "140689770457664->16",
        "target": "140689770459200->16",
        "animated": true
    },
    {
        "id": "(140689770457664->17)-(140689770459200->17)",
        "source": "140689770457664->17",
        "target": "140689770459200->17",
        "animated": true
    },
    {
        "id": "(140689770457664->18)-(140689770459200->18)",
        "source": "140689770457664->18",
        "target": "140689770459200->18",
        "animated": true
    },
    {
        "id": "(140689770457664->19)-(140689770459200->19)",
        "source": "140689770457664->19",
        "target": "140689770459200->19",
        "animated": true
    },
    {
        "id": "(140689770459200->15)-(140689770455504->15)",
        "source": "140689770459200->15",
        "target": "140689770455504->15",
        "animated": true
    },
    {
        "id": "(140689770459200->16)-(140689770455504->16)",
        "source": "140689770459200->16",
        "target": "140689770455504->16",
        "animated": true
    },
    {
        "id": "(140689770459200->17)-(140689770455504->17)",
        "source": "140689770459200->17",
        "target": "140689770455504->17",
        "animated": true
    },
    {
        "id": "(140689770459200->18)-(140689770455504->18)",
        "source": "140689770459200->18",
        "target": "140689770455504->18",
        "animated": true
    },
    {
        "id": "(140689770459200->19)-(140689770455504->19)",
        "source": "140689770459200->19",
        "target": "140689770455504->19",
        "animated": true
    }
];
