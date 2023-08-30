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
        "id": "139700071012176",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "139700071012176->35",
                "139700071012176->113",
                "139700071012176->19",
                "139700071012176->16",
                "139700071012176->17",
                "139700071012176->122",
                "139700071012176->61",
                "139700071012176->212",
                "139700071012176->84",
                "139700071012176->245",
                "139700071012176->109",
                "139700071012176->163",
                "139700071012176->164",
                "139700071012176->165",
                "139700071012176->166",
                "139700071012176->171",
                "139700071012176->291",
                "139700071012176->309",
                "139700071012176->328"
            ]
        }
    },
    {
        "id": "139700071012512",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "139700071012512->35",
                "139700071012512->113",
                "139700071012512->19",
                "139700071012512->16",
                "139700071012512->17",
                "139700071012512->122",
                "139700071012512->61",
                "139700071012512->212",
                "139700071012512->84",
                "139700071012512->245",
                "139700071012512->109",
                "139700071012512->163",
                "139700071012512->164",
                "139700071012512->165",
                "139700071012512->166",
                "139700071012512->171",
                "139700071012512->291",
                "139700071012512->309"
            ]
        }
    },
    {
        "id": "139700071010832",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "139700071010832->35",
                "139700071010832->113",
                "139700071010832->19",
                "139700071010832->16",
                "139700071010832->17",
                "139700071010832->122",
                "139700071010832->61",
                "139700071010832->212",
                "139700071010832->84",
                "139700071010832->245",
                "139700071010832->109",
                "139700071010832->163",
                "139700071010832->164",
                "139700071010832->165",
                "139700071010832->166",
                "139700071010832->171",
                "139700071010832->291"
            ]
        }
    },
    {
        "id": "139700073653744",
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
                "139700073653744->35",
                "139700073653744->113",
                "139700073653744->19",
                "139700073653744->16",
                "139700073653744->17",
                "139700073653744->122",
                "139700073653744->61",
                "139700073653744->212",
                "139700073653744->84",
                "139700073653744->245",
                "139700073653744->109",
                "139700073653744->163",
                "139700073653744->164",
                "139700073653744->165",
                "139700073653744->166",
                "139700073653744->171"
            ]
        }
    },
    {
        "id": "139700072519984",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n"
            },
            "columns": [
                "139700072519984->163",
                "139700072519984->164",
                "139700072519984->165",
                "139700072519984->166",
                "139700072519984->171"
            ]
        }
    },
    {
        "id": "139700072954704",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072954704->163",
                "139700072954704->164",
                "139700072954704->165",
                "139700072954704->166"
            ]
        }
    },
    {
        "id": "139700073676752",
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
                "139700073676752->35",
                "139700073676752->113",
                "139700073676752->19",
                "139700073676752->16",
                "139700073676752->17",
                "139700073676752->122",
                "139700073676752->61",
                "139700073676752->212",
                "139700073676752->84",
                "139700073676752->245",
                "139700073676752->109"
            ]
        }
    },
    {
        "id": "139700072388720",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "139700072388720->245",
                "139700072388720->226",
                "139700072388720->109"
            ]
        }
    },
    {
        "id": "139700072941360",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "139700072941360->245",
                "139700072941360->226",
                "139700072941360->109"
            ]
        }
    },
    {
        "id": "139700071008816",
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
                "139700071008816->245",
                "139700071008816->226",
                "139700071008816->109"
            ]
        }
    },
    {
        "id": "139700072950672",
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
                "139700072950672->245",
                "139700072950672->226",
                "139700072950672->109"
            ]
        }
    },
    {
        "id": "139700073528288",
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
                "139700073528288->226",
                "139700073528288->224",
                "139700073528288->225",
                "139700073528288->241",
                "139700073528288->84",
                "139700073528288->245"
            ]
        }
    },
    {
        "id": "139700072955040",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072955040->244",
                "139700072955040->245"
            ]
        }
    },
    {
        "id": "139700271382048",
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
                "139700271382048->226",
                "139700271382048->224",
                "139700271382048->225",
                "139700271382048->241",
                "139700271382048->84"
            ]
        }
    },
    {
        "id": "139700072940496",
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
                "139700072940496->243",
                "139700072940496->241",
                "139700072940496->84"
            ]
        }
    },
    {
        "id": "139700072953408",
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
                "139700072953408->227",
                "139700072953408->228",
                "139700072953408->229",
                "139700072953408->230",
                "139700072953408->61",
                "139700072953408->241",
                "139700072953408->243"
            ]
        }
    },
    {
        "id": "139700072954464",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072954464->241",
                "139700072954464->242",
                "139700072954464->243"
            ]
        }
    },
    {
        "id": "139700072944528",
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
                "139700072944528->227",
                "139700072944528->228",
                "139700072944528->229",
                "139700072944528->230",
                "139700072944528->61"
            ]
        }
    },
    {
        "id": "139700072944000",
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
                "139700072944000->235",
                "139700072944000->61"
            ]
        }
    },
    {
        "id": "139700072952064",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072952064->231",
                "139700072952064->232",
                "139700072952064->233",
                "139700072952064->234",
                "139700072952064->235"
            ]
        }
    },
    {
        "id": "139700072950528",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072950528->236",
                "139700072950528->237",
                "139700072950528->238",
                "139700072950528->239",
                "139700072950528->240"
            ]
        }
    },
    {
        "id": "139700072939728",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139700072939728->236",
                "139700072939728->237",
                "139700072939728->238",
                "139700072939728->239",
                "139700072939728->240"
            ]
        }
    },
    {
        "id": "139700072944384",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072944384->236",
                "139700072944384->237",
                "139700072944384->238",
                "139700072944384->239",
                "139700072944384->240"
            ]
        }
    },
    {
        "id": "139700072945824",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139700072945824->231",
                "139700072945824->232",
                "139700072945824->233",
                "139700072945824->234",
                "139700072945824->235"
            ]
        }
    },
    {
        "id": "139700072523296",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072523296->231",
                "139700072523296->232",
                "139700072523296->233",
                "139700072523296->234",
                "139700072523296->235"
            ]
        }
    },
    {
        "id": "139700072941408",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072941408->227",
                "139700072941408->228",
                "139700072941408->229",
                "139700072941408->230"
            ]
        }
    },
    {
        "id": "139700072396976",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072396976->224",
                "139700072396976->225",
                "139700072396976->226"
            ]
        }
    },
    {
        "id": "139700073667056",
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
                "139700073667056->113",
                "139700073667056->19",
                "139700073667056->16",
                "139700073667056->17",
                "139700073667056->122",
                "139700073667056->35",
                "139700073667056->61",
                "139700073667056->212",
                "139700073667056->84"
            ]
        }
    },
    {
        "id": "139700073648032",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139700073648032->212",
                "139700073648032->210",
                "139700073648032->84"
            ]
        }
    },
    {
        "id": "139700072386128",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139700072386128->212",
                "139700072386128->210",
                "139700072386128->84"
            ]
        }
    },
    {
        "id": "139700072395152",
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
                "139700072395152->212",
                "139700072395152->210",
                "139700072395152->84"
            ]
        }
    },
    {
        "id": "139700073652880",
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
                "139700073652880->212",
                "139700073652880->210",
                "139700073652880->84"
            ]
        }
    },
    {
        "id": "139700072940352",
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
                "139700072940352->196",
                "139700072940352->197",
                "139700072940352->198",
                "139700072940352->199",
                "139700072940352->61",
                "139700072940352->210",
                "139700072940352->212"
            ]
        }
    },
    {
        "id": "139700073648464",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700073648464->210",
                "139700073648464->211",
                "139700073648464->212"
            ]
        }
    },
    {
        "id": "139700072527904",
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
                "139700072527904->196",
                "139700072527904->197",
                "139700072527904->198",
                "139700072527904->199",
                "139700072527904->61"
            ]
        }
    },
    {
        "id": "139700072390544",
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
                "139700072390544->204",
                "139700072390544->61"
            ]
        }
    },
    {
        "id": "139700072388528",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072388528->200",
                "139700072388528->201",
                "139700072388528->202",
                "139700072388528->203",
                "139700072388528->204"
            ]
        }
    },
    {
        "id": "139700072393712",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072393712->205",
                "139700072393712->206",
                "139700072393712->207",
                "139700072393712->208",
                "139700072393712->209"
            ]
        }
    },
    {
        "id": "139700073657680",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139700073657680->205",
                "139700073657680->206",
                "139700073657680->207",
                "139700073657680->208",
                "139700073657680->209"
            ]
        }
    },
    {
        "id": "139700072513984",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072513984->205",
                "139700072513984->206",
                "139700072513984->207",
                "139700072513984->208",
                "139700072513984->209"
            ]
        }
    },
    {
        "id": "139700072383488",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139700072383488->200",
                "139700072383488->201",
                "139700072383488->202",
                "139700072383488->203",
                "139700072383488->204"
            ]
        }
    },
    {
        "id": "139700072528384",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072528384->200",
                "139700072528384->201",
                "139700072528384->202",
                "139700072528384->203",
                "139700072528384->204"
            ]
        }
    },
    {
        "id": "139700073646496",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700073646496->196",
                "139700073646496->197",
                "139700073646496->198",
                "139700073646496->199"
            ]
        }
    },
    {
        "id": "139700073663840",
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
                "139700073663840->19",
                "139700073663840->16",
                "139700073663840->17",
                "139700073663840->122",
                "139700073663840->113",
                "139700073663840->35",
                "139700073663840->61"
            ]
        }
    },
    {
        "id": "139700072516336",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139700072516336->181",
                "139700072516336->61"
            ]
        }
    },
    {
        "id": "139700072528576",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "139700072528576->181",
                "139700072528576->61"
            ]
        }
    },
    {
        "id": "139700072519792",
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
                "139700072519792->181",
                "139700072519792->61"
            ]
        }
    },
    {
        "id": "139700072515712",
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
                "139700072515712->181",
                "139700072515712->61"
            ]
        }
    },
    {
        "id": "139700072514512",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072514512->177",
                "139700072514512->178",
                "139700072514512->179",
                "139700072514512->180",
                "139700072514512->181"
            ]
        }
    },
    {
        "id": "139700072529536",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072529536->182",
                "139700072529536->183",
                "139700072529536->184",
                "139700072529536->185",
                "139700072529536->186"
            ]
        }
    },
    {
        "id": "139700072528000",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139700072528000->182",
                "139700072528000->183",
                "139700072528000->184",
                "139700072528000->185",
                "139700072528000->186"
            ]
        }
    },
    {
        "id": "139700072513600",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072513600->182",
                "139700072513600->183",
                "139700072513600->184",
                "139700072513600->185",
                "139700072513600->186"
            ]
        }
    },
    {
        "id": "139700072526512",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139700072526512->177",
                "139700072526512->178",
                "139700072526512->179",
                "139700072526512->180",
                "139700072526512->181"
            ]
        }
    },
    {
        "id": "139700072515520",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072515520->177",
                "139700072515520->178",
                "139700072515520->179",
                "139700072515520->180",
                "139700072515520->181"
            ]
        }
    },
    {
        "id": "139700072519456",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "139700072519456->16",
                "139700072519456->17",
                "139700072519456->19",
                "139700072519456->122",
                "139700072519456->113",
                "139700072519456->35"
            ]
        }
    },
    {
        "id": "139700073675312",
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
                "139700073675312->19",
                "139700073675312->15",
                "139700073675312->16",
                "139700073675312->17",
                "139700073675312->18",
                "139700073675312->35",
                "139700073675312->40",
                "139700073675312->109",
                "139700073675312->113",
                "139700073675312->122",
                "139700073675312->123",
                "139700073675312->124"
            ]
        }
    },
    {
        "id": "139700073664512",
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
                "139700073664512->114",
                "139700073664512->35",
                "139700073664512->40",
                "139700073664512->109",
                "139700073664512->113",
                "139700073664512->122",
                "139700073664512->123",
                "139700073664512->124"
            ]
        }
    },
    {
        "id": "139700072388384",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072388384->121",
                "139700072388384->122",
                "139700072388384->123",
                "139700072388384->124"
            ]
        }
    },
    {
        "id": "139700073667632",
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
                "139700073667632->35",
                "139700073667632->40",
                "139700073667632->109",
                "139700073667632->113",
                "139700073667632->114"
            ]
        }
    },
    {
        "id": "139700072394816",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072394816->113",
                "139700072394816->114",
                "139700072394816->115"
            ]
        }
    },
    {
        "id": "139700073667392",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "139700073667392->40",
                "139700073667392->35",
                "139700073667392->109"
            ]
        }
    },
    {
        "id": "139700072391216",
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
                "139700072391216->40",
                "139700072391216->35",
                "139700072391216->109"
            ]
        }
    },
    {
        "id": "139700072522336",
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
                "139700072522336->35",
                "139700072522336->33",
                "139700072522336->34",
                "139700072522336->88",
                "139700072522336->84",
                "139700072522336->40"
            ]
        }
    },
    {
        "id": "139700072517872",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072517872->39",
                "139700072517872->40"
            ]
        }
    },
    {
        "id": "139700072515184",
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
                "139700072515184->35",
                "139700072515184->33",
                "139700072515184->34",
                "139700072515184->88",
                "139700072515184->84"
            ]
        }
    },
    {
        "id": "139700072397600",
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
                "139700072397600->90",
                "139700072397600->88",
                "139700072397600->84"
            ]
        }
    },
    {
        "id": "139700072514272",
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
                "139700072514272->25",
                "139700072514272->26",
                "139700072514272->27",
                "139700072514272->28",
                "139700072514272->61",
                "139700072514272->88",
                "139700072514272->90"
            ]
        }
    },
    {
        "id": "139700072391936",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072391936->88",
                "139700072391936->89",
                "139700072391936->90"
            ]
        }
    },
    {
        "id": "139700073659408",
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
                "139700073659408->25",
                "139700073659408->26",
                "139700073659408->27",
                "139700073659408->28",
                "139700073659408->61"
            ]
        }
    },
    {
        "id": "139700073651824",
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
                "139700073651824->137",
                "139700073651824->61"
            ]
        }
    },
    {
        "id": "139700072396832",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072396832->133",
                "139700072396832->134",
                "139700072396832->135",
                "139700072396832->136",
                "139700072396832->137"
            ]
        }
    },
    {
        "id": "139700072392656",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072392656->138",
                "139700072392656->139",
                "139700072392656->140",
                "139700072392656->141",
                "139700072392656->142"
            ]
        }
    },
    {
        "id": "139700073653072",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139700073653072->138",
                "139700073653072->139",
                "139700073653072->140",
                "139700073653072->141",
                "139700073653072->142"
            ]
        }
    },
    {
        "id": "139700072387136",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700072387136->138",
                "139700072387136->139",
                "139700072387136->140",
                "139700072387136->141",
                "139700072387136->142"
            ]
        }
    },
    {
        "id": "139700072389776",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139700072389776->133",
                "139700072389776->134",
                "139700072389776->135",
                "139700072389776->136",
                "139700072389776->137"
            ]
        }
    },
    {
        "id": "139700071011024",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700071011024->133",
                "139700071011024->134",
                "139700071011024->135",
                "139700071011024->136",
                "139700071011024->137"
            ]
        }
    },
    {
        "id": "139700072514944",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072514944->25",
                "139700072514944->26",
                "139700072514944->27",
                "139700072514944->28"
            ]
        }
    },
    {
        "id": "139700072385264",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "139700072385264->33",
                "139700072385264->34",
                "139700072385264->35"
            ]
        }
    },
    {
        "id": "139700073644096",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700073644096->15",
                "139700073644096->16",
                "139700073644096->17",
                "139700073644096->18",
                "139700073644096->19"
            ]
        }
    },
    {
        "id": "139700072384784",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "139700072384784->44",
                "139700072384784->45",
                "139700072384784->46",
                "139700072384784->47",
                "139700072384784->48"
            ]
        }
    },
    {
        "id": "139700073659072",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "139700073659072->44",
                "139700073659072->45",
                "139700073659072->46",
                "139700073659072->47",
                "139700073659072->48"
            ]
        }
    },
    {
        "id": "139700073648944",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700073648944->44",
                "139700073648944->45",
                "139700073648944->46",
                "139700073648944->47",
                "139700073648944->48"
            ]
        }
    },
    {
        "id": "139700072382672",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "139700072382672->15",
                "139700072382672->16",
                "139700072382672->17",
                "139700072382672->18",
                "139700072382672->19"
            ]
        }
    },
    {
        "id": "139700071011168",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "location_files": [
                    "file:/tmp/tmpis1y1f91/spark-warehouse/people"
                ],
                "partition_schema": "StructType()",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmpis1y1f91/spark-warehouse/people)"
            },
            "columns": [
                "139700071011168->15",
                "139700071011168->16",
                "139700071011168->17",
                "139700071011168->18",
                "139700071011168->19"
            ]
        }
    },
    {
        "id": "139700071012176->35",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700071012512->35"
            ]
        }
    },
    {
        "id": "139700071012176->113",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700071012512->113"
            ]
        }
    },
    {
        "id": "139700071012176->19",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700071012512->19"
            ]
        }
    },
    {
        "id": "139700071012176->16",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700071012512->16"
            ]
        }
    },
    {
        "id": "139700071012176->17",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700071012512->17"
            ]
        }
    },
    {
        "id": "139700071012176->122",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700071012512->122"
            ]
        }
    },
    {
        "id": "139700071012176->61",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700071012512->61"
            ]
        }
    },
    {
        "id": "139700071012176->212",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700071012512->212"
            ]
        }
    },
    {
        "id": "139700071012176->84",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700071012512->84"
            ]
        }
    },
    {
        "id": "139700071012176->245",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700071012512->245"
            ]
        }
    },
    {
        "id": "139700071012176->109",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700071012512->109"
            ]
        }
    },
    {
        "id": "139700071012176->163",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139700071012512->163"
            ]
        }
    },
    {
        "id": "139700071012176->164",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139700071012512->164"
            ]
        }
    },
    {
        "id": "139700071012176->165",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139700071012512->165"
            ]
        }
    },
    {
        "id": "139700071012176->166",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139700071012512->166"
            ]
        }
    },
    {
        "id": "139700071012176->171",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139700071012512->171"
            ]
        }
    },
    {
        "id": "139700071012176->291",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "139700071012512->291"
            ]
        }
    },
    {
        "id": "139700071012176->309",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#309: boolean\n",
            "linked_columns": [
                "139700071012512->309"
            ]
        }
    },
    {
        "id": "139700071012176->328",
        "type": "column",
        "parentNode": "139700071012176",
        "expandParent": true,
        "data": {
            "id": 328,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#328\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "139700071012512->109"
            ]
        }
    },
    {
        "id": "139700071012512->35",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700071010832->35"
            ]
        }
    },
    {
        "id": "139700071012512->113",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700071010832->113"
            ]
        }
    },
    {
        "id": "139700071012512->19",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700071010832->19"
            ]
        }
    },
    {
        "id": "139700071012512->16",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700071010832->16"
            ]
        }
    },
    {
        "id": "139700071012512->17",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700071010832->17"
            ]
        }
    },
    {
        "id": "139700071012512->122",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700071010832->122"
            ]
        }
    },
    {
        "id": "139700071012512->61",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700071010832->61"
            ]
        }
    },
    {
        "id": "139700071012512->212",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700071010832->212"
            ]
        }
    },
    {
        "id": "139700071012512->84",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700071010832->84"
            ]
        }
    },
    {
        "id": "139700071012512->245",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700071010832->245"
            ]
        }
    },
    {
        "id": "139700071012512->109",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700071010832->109"
            ]
        }
    },
    {
        "id": "139700071012512->163",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139700071010832->163"
            ]
        }
    },
    {
        "id": "139700071012512->164",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139700071010832->164"
            ]
        }
    },
    {
        "id": "139700071012512->165",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139700071010832->165"
            ]
        }
    },
    {
        "id": "139700071012512->166",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139700071010832->166"
            ]
        }
    },
    {
        "id": "139700071012512->171",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139700071010832->171"
            ]
        }
    },
    {
        "id": "139700071012512->291",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "139700071010832->291"
            ]
        }
    },
    {
        "id": "139700071012512->309",
        "type": "column",
        "parentNode": "139700071012512",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#309\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "139700071010832->84"
            ]
        }
    },
    {
        "id": "139700071010832->35",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700073653744->35"
            ]
        }
    },
    {
        "id": "139700071010832->113",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700073653744->113"
            ]
        }
    },
    {
        "id": "139700071010832->19",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700073653744->19"
            ]
        }
    },
    {
        "id": "139700071010832->16",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700073653744->16"
            ]
        }
    },
    {
        "id": "139700071010832->17",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700073653744->17"
            ]
        }
    },
    {
        "id": "139700071010832->122",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700073653744->122"
            ]
        }
    },
    {
        "id": "139700071010832->61",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700073653744->61"
            ]
        }
    },
    {
        "id": "139700071010832->212",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700073653744->212"
            ]
        }
    },
    {
        "id": "139700071010832->84",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700073653744->84"
            ]
        }
    },
    {
        "id": "139700071010832->245",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700073653744->245"
            ]
        }
    },
    {
        "id": "139700071010832->109",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700073653744->109"
            ]
        }
    },
    {
        "id": "139700071010832->163",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139700073653744->163"
            ]
        }
    },
    {
        "id": "139700071010832->164",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139700073653744->164"
            ]
        }
    },
    {
        "id": "139700071010832->165",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139700073653744->165"
            ]
        }
    },
    {
        "id": "139700071010832->166",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139700073653744->166"
            ]
        }
    },
    {
        "id": "139700071010832->171",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139700073653744->171"
            ]
        }
    },
    {
        "id": "139700071010832->291",
        "type": "column",
        "parentNode": "139700071010832",
        "expandParent": true,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#291\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "139700073653744->61"
            ]
        }
    },
    {
        "id": "139700073653744->35",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700073676752->35"
            ]
        }
    },
    {
        "id": "139700073653744->113",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700073676752->113"
            ]
        }
    },
    {
        "id": "139700073653744->19",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700073676752->19"
            ]
        }
    },
    {
        "id": "139700073653744->16",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700073676752->16"
            ]
        }
    },
    {
        "id": "139700073653744->17",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700073676752->17"
            ]
        }
    },
    {
        "id": "139700073653744->122",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700073676752->122"
            ]
        }
    },
    {
        "id": "139700073653744->61",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700073676752->61"
            ]
        }
    },
    {
        "id": "139700073653744->212",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700073676752->212"
            ]
        }
    },
    {
        "id": "139700073653744->84",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700073676752->84"
            ]
        }
    },
    {
        "id": "139700073653744->245",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700073676752->245"
            ]
        }
    },
    {
        "id": "139700073653744->109",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700073676752->109"
            ]
        }
    },
    {
        "id": "139700073653744->163",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139700072519984->163"
            ]
        }
    },
    {
        "id": "139700073653744->164",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139700072519984->164"
            ]
        }
    },
    {
        "id": "139700073653744->165",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139700072519984->165"
            ]
        }
    },
    {
        "id": "139700073653744->166",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139700072519984->166"
            ]
        }
    },
    {
        "id": "139700073653744->171",
        "type": "column",
        "parentNode": "139700073653744",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139700072519984->171"
            ]
        }
    },
    {
        "id": "139700072519984->163",
        "type": "column",
        "parentNode": "139700072519984",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139700072954704->163"
            ]
        }
    },
    {
        "id": "139700072519984->164",
        "type": "column",
        "parentNode": "139700072519984",
        "expandParent": true,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139700072954704->164"
            ]
        }
    },
    {
        "id": "139700072519984->165",
        "type": "column",
        "parentNode": "139700072519984",
        "expandParent": true,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139700072954704->165"
            ]
        }
    },
    {
        "id": "139700072519984->166",
        "type": "column",
        "parentNode": "139700072519984",
        "expandParent": true,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139700072954704->166"
            ]
        }
    },
    {
        "id": "139700072519984->171",
        "type": "column",
        "parentNode": "139700072519984",
        "expandParent": true,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "(((a#163 + b#164) / c#165) + d#166) AS sum#171\n+- (((a#163 + b#164) / c#165) + d#166)\n   :- ((a#163 + b#164) / c#165)\n   :  :- (a#163 + b#164)\n   :  :  :- a#163: double\n   :  :  +- b#164: double\n   :  +- c#165: double\n   +- d#166: double\n",
            "linked_columns": [
                "139700072954704->163",
                "139700072954704->164",
                "139700072954704->165",
                "139700072954704->166"
            ]
        }
    },
    {
        "id": "139700072954704->163",
        "type": "column",
        "parentNode": "139700072954704",
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
        "id": "139700072954704->164",
        "type": "column",
        "parentNode": "139700072954704",
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
        "id": "139700072954704->165",
        "type": "column",
        "parentNode": "139700072954704",
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
        "id": "139700072954704->166",
        "type": "column",
        "parentNode": "139700072954704",
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
        "id": "139700073676752->35",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "139700073667056->35",
                "139700072388720->226"
            ]
        }
    },
    {
        "id": "139700073676752->113",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700073667056->113"
            ]
        }
    },
    {
        "id": "139700073676752->19",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700073667056->19"
            ]
        }
    },
    {
        "id": "139700073676752->16",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700073667056->16"
            ]
        }
    },
    {
        "id": "139700073676752->17",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700073667056->17"
            ]
        }
    },
    {
        "id": "139700073676752->122",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700073667056->122"
            ]
        }
    },
    {
        "id": "139700073676752->61",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700073667056->61"
            ]
        }
    },
    {
        "id": "139700073676752->212",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#226)\n:- continent#35: string\n+- continent#226: string\n",
            "linked_columns": [
                "139700073667056->35",
                "139700072388720->226"
            ]
        }
    },
    {
        "id": "139700073676752->84",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700073667056->84"
            ]
        }
    },
    {
        "id": "139700073676752->245",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700072388720->245"
            ]
        }
    },
    {
        "id": "139700073676752->109",
        "type": "column",
        "parentNode": "139700073676752",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700072388720->109"
            ]
        }
    },
    {
        "id": "139700072388720->245",
        "type": "column",
        "parentNode": "139700072388720",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700072941360->245"
            ]
        }
    },
    {
        "id": "139700072388720->226",
        "type": "column",
        "parentNode": "139700072388720",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139700072941360->226"
            ]
        }
    },
    {
        "id": "139700072388720->109",
        "type": "column",
        "parentNode": "139700072388720",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700072941360->109"
            ]
        }
    },
    {
        "id": "139700072941360->245",
        "type": "column",
        "parentNode": "139700072941360",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700071008816->245"
            ]
        }
    },
    {
        "id": "139700072941360->226",
        "type": "column",
        "parentNode": "139700072941360",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139700071008816->226"
            ]
        }
    },
    {
        "id": "139700072941360->109",
        "type": "column",
        "parentNode": "139700072941360",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700071008816->109"
            ]
        }
    },
    {
        "id": "139700071008816->245",
        "type": "column",
        "parentNode": "139700071008816",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700072950672->245"
            ]
        }
    },
    {
        "id": "139700071008816->226",
        "type": "column",
        "parentNode": "139700071008816",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139700072950672->226"
            ]
        }
    },
    {
        "id": "139700071008816->109",
        "type": "column",
        "parentNode": "139700071008816",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700072950672->109"
            ]
        }
    },
    {
        "id": "139700072950672->245",
        "type": "column",
        "parentNode": "139700072950672",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700073528288->245"
            ]
        }
    },
    {
        "id": "139700072950672->226",
        "type": "column",
        "parentNode": "139700072950672",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "139700073528288->226"
            ]
        }
    },
    {
        "id": "139700072950672->109",
        "type": "column",
        "parentNode": "139700072950672",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "139700073528288->84"
            ]
        }
    },
    {
        "id": "139700073528288->226",
        "type": "column",
        "parentNode": "139700073528288",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#244)\n:- continent#226: string\n+- continent#244: string\n",
            "linked_columns": [
                "139700271382048->226",
                "139700072955040->244"
            ]
        }
    },
    {
        "id": "139700073528288->224",
        "type": "column",
        "parentNode": "139700073528288",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "139700271382048->224"
            ]
        }
    },
    {
        "id": "139700073528288->225",
        "type": "column",
        "parentNode": "139700073528288",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "139700271382048->225"
            ]
        }
    },
    {
        "id": "139700073528288->241",
        "type": "column",
        "parentNode": "139700073528288",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139700271382048->241"
            ]
        }
    },
    {
        "id": "139700073528288->84",
        "type": "column",
        "parentNode": "139700073528288",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700271382048->84"
            ]
        }
    },
    {
        "id": "139700073528288->245",
        "type": "column",
        "parentNode": "139700073528288",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139700072955040->245"
            ]
        }
    },
    {
        "id": "139700072955040->244",
        "type": "column",
        "parentNode": "139700072955040",
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
        "id": "139700072955040->245",
        "type": "column",
        "parentNode": "139700072955040",
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
        "id": "139700271382048->226",
        "type": "column",
        "parentNode": "139700271382048",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#226 = continent#243)\n:- continent#226: string\n+- continent#243: string\n",
            "linked_columns": [
                "139700072396976->226",
                "139700072940496->243"
            ]
        }
    },
    {
        "id": "139700271382048->224",
        "type": "column",
        "parentNode": "139700271382048",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "139700072396976->224"
            ]
        }
    },
    {
        "id": "139700271382048->225",
        "type": "column",
        "parentNode": "139700271382048",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "139700072396976->225"
            ]
        }
    },
    {
        "id": "139700271382048->241",
        "type": "column",
        "parentNode": "139700271382048",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139700072940496->241"
            ]
        }
    },
    {
        "id": "139700271382048->84",
        "type": "column",
        "parentNode": "139700271382048",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700072940496->84"
            ]
        }
    },
    {
        "id": "139700072940496->243",
        "type": "column",
        "parentNode": "139700072940496",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "139700072953408->243"
            ]
        }
    },
    {
        "id": "139700072940496->241",
        "type": "column",
        "parentNode": "139700072940496",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139700072953408->241"
            ]
        }
    },
    {
        "id": "139700072940496->84",
        "type": "column",
        "parentNode": "139700072940496",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "139700072953408->61"
            ]
        }
    },
    {
        "id": "139700072953408->227",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#242)\n:- city#227: string\n+- city#242: string\n",
            "linked_columns": [
                "139700072944528->227",
                "139700072954464->242"
            ]
        }
    },
    {
        "id": "139700072953408->228",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "139700072944528->228"
            ]
        }
    },
    {
        "id": "139700072953408->229",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "139700072944528->229"
            ]
        }
    },
    {
        "id": "139700072953408->230",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "139700072944528->230"
            ]
        }
    },
    {
        "id": "139700072953408->61",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072944528->61"
            ]
        }
    },
    {
        "id": "139700072953408->241",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139700072954464->241"
            ]
        }
    },
    {
        "id": "139700072953408->243",
        "type": "column",
        "parentNode": "139700072953408",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "139700072954464->243"
            ]
        }
    },
    {
        "id": "139700072954464->241",
        "type": "column",
        "parentNode": "139700072954464",
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
        "id": "139700072954464->242",
        "type": "column",
        "parentNode": "139700072954464",
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
        "id": "139700072954464->243",
        "type": "column",
        "parentNode": "139700072954464",
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
        "id": "139700072944528->227",
        "type": "column",
        "parentNode": "139700072944528",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "(city#227 = city#235)\n:- city#227: string\n+- city#235: string\n",
            "linked_columns": [
                "139700072941408->227",
                "139700072944000->235"
            ]
        }
    },
    {
        "id": "139700072944528->228",
        "type": "column",
        "parentNode": "139700072944528",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "139700072941408->228"
            ]
        }
    },
    {
        "id": "139700072944528->229",
        "type": "column",
        "parentNode": "139700072944528",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "139700072941408->229"
            ]
        }
    },
    {
        "id": "139700072944528->230",
        "type": "column",
        "parentNode": "139700072944528",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "139700072941408->230"
            ]
        }
    },
    {
        "id": "139700072944528->61",
        "type": "column",
        "parentNode": "139700072944528",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072944000->61"
            ]
        }
    },
    {
        "id": "139700072944000->235",
        "type": "column",
        "parentNode": "139700072944000",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "139700072952064->235"
            ]
        }
    },
    {
        "id": "139700072944000->61",
        "type": "column",
        "parentNode": "139700072944000",
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
        "id": "139700072952064->231",
        "type": "column",
        "parentNode": "139700072952064",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "139700072945824->231"
            ]
        }
    },
    {
        "id": "139700072952064->232",
        "type": "column",
        "parentNode": "139700072952064",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "139700072945824->232"
            ]
        }
    },
    {
        "id": "139700072952064->233",
        "type": "column",
        "parentNode": "139700072952064",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "139700072945824->233"
            ]
        }
    },
    {
        "id": "139700072952064->234",
        "type": "column",
        "parentNode": "139700072952064",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "139700072945824->234"
            ]
        }
    },
    {
        "id": "139700072952064->235",
        "type": "column",
        "parentNode": "139700072952064",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "139700072945824->235"
            ]
        }
    },
    {
        "id": "139700072950528->236",
        "type": "column",
        "parentNode": "139700072950528",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "139700072939728->236"
            ]
        }
    },
    {
        "id": "139700072950528->237",
        "type": "column",
        "parentNode": "139700072950528",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "139700072939728->237"
            ]
        }
    },
    {
        "id": "139700072950528->238",
        "type": "column",
        "parentNode": "139700072950528",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "139700072939728->238"
            ]
        }
    },
    {
        "id": "139700072950528->239",
        "type": "column",
        "parentNode": "139700072950528",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "139700072939728->239"
            ]
        }
    },
    {
        "id": "139700072950528->240",
        "type": "column",
        "parentNode": "139700072950528",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "139700072939728->240"
            ]
        }
    },
    {
        "id": "139700072939728->236",
        "type": "column",
        "parentNode": "139700072939728",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "139700072944384->236"
            ]
        }
    },
    {
        "id": "139700072939728->237",
        "type": "column",
        "parentNode": "139700072939728",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "139700072944384->237"
            ]
        }
    },
    {
        "id": "139700072939728->238",
        "type": "column",
        "parentNode": "139700072939728",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "139700072944384->238"
            ]
        }
    },
    {
        "id": "139700072939728->239",
        "type": "column",
        "parentNode": "139700072939728",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "139700072944384->239"
            ]
        }
    },
    {
        "id": "139700072939728->240",
        "type": "column",
        "parentNode": "139700072939728",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "139700072944384->240"
            ]
        }
    },
    {
        "id": "139700072944384->236",
        "type": "column",
        "parentNode": "139700072944384",
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
        "id": "139700072944384->237",
        "type": "column",
        "parentNode": "139700072944384",
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
        "id": "139700072944384->238",
        "type": "column",
        "parentNode": "139700072944384",
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
        "id": "139700072944384->239",
        "type": "column",
        "parentNode": "139700072944384",
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
        "id": "139700072944384->240",
        "type": "column",
        "parentNode": "139700072944384",
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
        "id": "139700072945824->231",
        "type": "column",
        "parentNode": "139700072945824",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "139700072523296->231"
            ]
        }
    },
    {
        "id": "139700072945824->232",
        "type": "column",
        "parentNode": "139700072945824",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "139700072523296->232"
            ]
        }
    },
    {
        "id": "139700072945824->233",
        "type": "column",
        "parentNode": "139700072945824",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "139700072523296->233"
            ]
        }
    },
    {
        "id": "139700072945824->234",
        "type": "column",
        "parentNode": "139700072945824",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "139700072523296->234"
            ]
        }
    },
    {
        "id": "139700072945824->235",
        "type": "column",
        "parentNode": "139700072945824",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "139700072523296->235"
            ]
        }
    },
    {
        "id": "139700072523296->231",
        "type": "column",
        "parentNode": "139700072523296",
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
        "id": "139700072523296->232",
        "type": "column",
        "parentNode": "139700072523296",
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
        "id": "139700072523296->233",
        "type": "column",
        "parentNode": "139700072523296",
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
        "id": "139700072523296->234",
        "type": "column",
        "parentNode": "139700072523296",
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
        "id": "139700072523296->235",
        "type": "column",
        "parentNode": "139700072523296",
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
        "id": "139700072941408->227",
        "type": "column",
        "parentNode": "139700072941408",
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
        "id": "139700072941408->228",
        "type": "column",
        "parentNode": "139700072941408",
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
        "id": "139700072941408->229",
        "type": "column",
        "parentNode": "139700072941408",
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
        "id": "139700072941408->230",
        "type": "column",
        "parentNode": "139700072941408",
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
        "id": "139700072396976->224",
        "type": "column",
        "parentNode": "139700072396976",
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
        "id": "139700072396976->225",
        "type": "column",
        "parentNode": "139700072396976",
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
        "id": "139700072396976->226",
        "type": "column",
        "parentNode": "139700072396976",
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
        "id": "139700073667056->113",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#210)\n:- country#113: string\n+- country#210: string\n",
            "linked_columns": [
                "139700073663840->113",
                "139700073648032->210"
            ]
        }
    },
    {
        "id": "139700073667056->19",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700073663840->19"
            ]
        }
    },
    {
        "id": "139700073667056->16",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700073663840->16"
            ]
        }
    },
    {
        "id": "139700073667056->17",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700073663840->17"
            ]
        }
    },
    {
        "id": "139700073667056->122",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700073663840->122"
            ]
        }
    },
    {
        "id": "139700073667056->35",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700073663840->35"
            ]
        }
    },
    {
        "id": "139700073667056->61",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700073663840->61"
            ]
        }
    },
    {
        "id": "139700073667056->212",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700073648032->212"
            ]
        }
    },
    {
        "id": "139700073667056->84",
        "type": "column",
        "parentNode": "139700073667056",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700073648032->84"
            ]
        }
    },
    {
        "id": "139700073648032->212",
        "type": "column",
        "parentNode": "139700073648032",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700072386128->212"
            ]
        }
    },
    {
        "id": "139700073648032->210",
        "type": "column",
        "parentNode": "139700073648032",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139700072386128->210"
            ]
        }
    },
    {
        "id": "139700073648032->84",
        "type": "column",
        "parentNode": "139700073648032",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700072386128->84"
            ]
        }
    },
    {
        "id": "139700072386128->212",
        "type": "column",
        "parentNode": "139700072386128",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700072395152->212"
            ]
        }
    },
    {
        "id": "139700072386128->210",
        "type": "column",
        "parentNode": "139700072386128",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139700072395152->210"
            ]
        }
    },
    {
        "id": "139700072386128->84",
        "type": "column",
        "parentNode": "139700072386128",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700072395152->84"
            ]
        }
    },
    {
        "id": "139700072395152->212",
        "type": "column",
        "parentNode": "139700072395152",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700073652880->212"
            ]
        }
    },
    {
        "id": "139700072395152->210",
        "type": "column",
        "parentNode": "139700072395152",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139700073652880->210"
            ]
        }
    },
    {
        "id": "139700072395152->84",
        "type": "column",
        "parentNode": "139700072395152",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700073652880->84"
            ]
        }
    },
    {
        "id": "139700073652880->212",
        "type": "column",
        "parentNode": "139700073652880",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700072940352->212"
            ]
        }
    },
    {
        "id": "139700073652880->210",
        "type": "column",
        "parentNode": "139700073652880",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139700072940352->210"
            ]
        }
    },
    {
        "id": "139700073652880->84",
        "type": "column",
        "parentNode": "139700073652880",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "139700072940352->61"
            ]
        }
    },
    {
        "id": "139700072940352->196",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#211)\n:- city#196: string\n+- city#211: string\n",
            "linked_columns": [
                "139700072527904->196",
                "139700073648464->211"
            ]
        }
    },
    {
        "id": "139700072940352->197",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "139700072527904->197"
            ]
        }
    },
    {
        "id": "139700072940352->198",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "139700072527904->198"
            ]
        }
    },
    {
        "id": "139700072940352->199",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "139700072527904->199"
            ]
        }
    },
    {
        "id": "139700072940352->61",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072527904->61"
            ]
        }
    },
    {
        "id": "139700072940352->210",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": [
                "139700073648464->210"
            ]
        }
    },
    {
        "id": "139700072940352->212",
        "type": "column",
        "parentNode": "139700072940352",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "139700073648464->212"
            ]
        }
    },
    {
        "id": "139700073648464->210",
        "type": "column",
        "parentNode": "139700073648464",
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
        "id": "139700073648464->211",
        "type": "column",
        "parentNode": "139700073648464",
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
        "id": "139700073648464->212",
        "type": "column",
        "parentNode": "139700073648464",
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
        "id": "139700072527904->196",
        "type": "column",
        "parentNode": "139700072527904",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "(city#196 = city#204)\n:- city#196: string\n+- city#204: string\n",
            "linked_columns": [
                "139700073646496->196",
                "139700072390544->204"
            ]
        }
    },
    {
        "id": "139700072527904->197",
        "type": "column",
        "parentNode": "139700072527904",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "139700073646496->197"
            ]
        }
    },
    {
        "id": "139700072527904->198",
        "type": "column",
        "parentNode": "139700072527904",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "139700073646496->198"
            ]
        }
    },
    {
        "id": "139700072527904->199",
        "type": "column",
        "parentNode": "139700072527904",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "139700073646496->199"
            ]
        }
    },
    {
        "id": "139700072527904->61",
        "type": "column",
        "parentNode": "139700072527904",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072390544->61"
            ]
        }
    },
    {
        "id": "139700072390544->204",
        "type": "column",
        "parentNode": "139700072390544",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "139700072388528->204"
            ]
        }
    },
    {
        "id": "139700072390544->61",
        "type": "column",
        "parentNode": "139700072390544",
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
        "id": "139700072388528->200",
        "type": "column",
        "parentNode": "139700072388528",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "139700072383488->200"
            ]
        }
    },
    {
        "id": "139700072388528->201",
        "type": "column",
        "parentNode": "139700072388528",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "139700072383488->201"
            ]
        }
    },
    {
        "id": "139700072388528->202",
        "type": "column",
        "parentNode": "139700072388528",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "139700072383488->202"
            ]
        }
    },
    {
        "id": "139700072388528->203",
        "type": "column",
        "parentNode": "139700072388528",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "139700072383488->203"
            ]
        }
    },
    {
        "id": "139700072388528->204",
        "type": "column",
        "parentNode": "139700072388528",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "139700072383488->204"
            ]
        }
    },
    {
        "id": "139700072393712->205",
        "type": "column",
        "parentNode": "139700072393712",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "139700073657680->205"
            ]
        }
    },
    {
        "id": "139700072393712->206",
        "type": "column",
        "parentNode": "139700072393712",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "139700073657680->206"
            ]
        }
    },
    {
        "id": "139700072393712->207",
        "type": "column",
        "parentNode": "139700072393712",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "139700073657680->207"
            ]
        }
    },
    {
        "id": "139700072393712->208",
        "type": "column",
        "parentNode": "139700072393712",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "139700073657680->208"
            ]
        }
    },
    {
        "id": "139700072393712->209",
        "type": "column",
        "parentNode": "139700072393712",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "139700073657680->209"
            ]
        }
    },
    {
        "id": "139700073657680->205",
        "type": "column",
        "parentNode": "139700073657680",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "139700072513984->205"
            ]
        }
    },
    {
        "id": "139700073657680->206",
        "type": "column",
        "parentNode": "139700073657680",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "139700072513984->206"
            ]
        }
    },
    {
        "id": "139700073657680->207",
        "type": "column",
        "parentNode": "139700073657680",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "139700072513984->207"
            ]
        }
    },
    {
        "id": "139700073657680->208",
        "type": "column",
        "parentNode": "139700073657680",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "139700072513984->208"
            ]
        }
    },
    {
        "id": "139700073657680->209",
        "type": "column",
        "parentNode": "139700073657680",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "139700072513984->209"
            ]
        }
    },
    {
        "id": "139700072513984->205",
        "type": "column",
        "parentNode": "139700072513984",
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
        "id": "139700072513984->206",
        "type": "column",
        "parentNode": "139700072513984",
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
        "id": "139700072513984->207",
        "type": "column",
        "parentNode": "139700072513984",
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
        "id": "139700072513984->208",
        "type": "column",
        "parentNode": "139700072513984",
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
        "id": "139700072513984->209",
        "type": "column",
        "parentNode": "139700072513984",
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
        "id": "139700072383488->200",
        "type": "column",
        "parentNode": "139700072383488",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "139700072528384->200"
            ]
        }
    },
    {
        "id": "139700072383488->201",
        "type": "column",
        "parentNode": "139700072383488",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "139700072528384->201"
            ]
        }
    },
    {
        "id": "139700072383488->202",
        "type": "column",
        "parentNode": "139700072383488",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "139700072528384->202"
            ]
        }
    },
    {
        "id": "139700072383488->203",
        "type": "column",
        "parentNode": "139700072383488",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "139700072528384->203"
            ]
        }
    },
    {
        "id": "139700072383488->204",
        "type": "column",
        "parentNode": "139700072383488",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "139700072528384->204"
            ]
        }
    },
    {
        "id": "139700072528384->200",
        "type": "column",
        "parentNode": "139700072528384",
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
        "id": "139700072528384->201",
        "type": "column",
        "parentNode": "139700072528384",
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
        "id": "139700072528384->202",
        "type": "column",
        "parentNode": "139700072528384",
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
        "id": "139700072528384->203",
        "type": "column",
        "parentNode": "139700072528384",
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
        "id": "139700072528384->204",
        "type": "column",
        "parentNode": "139700072528384",
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
        "id": "139700073646496->196",
        "type": "column",
        "parentNode": "139700073646496",
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
        "id": "139700073646496->197",
        "type": "column",
        "parentNode": "139700073646496",
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
        "id": "139700073646496->198",
        "type": "column",
        "parentNode": "139700073646496",
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
        "id": "139700073646496->199",
        "type": "column",
        "parentNode": "139700073646496",
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
        "id": "139700073663840->19",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#181)\n:- city#19: string\n+- city#181: string\n",
            "linked_columns": [
                "139700072519456->19",
                "139700072516336->181"
            ]
        }
    },
    {
        "id": "139700073663840->16",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700072519456->16"
            ]
        }
    },
    {
        "id": "139700073663840->17",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700072519456->17"
            ]
        }
    },
    {
        "id": "139700073663840->122",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700072519456->122"
            ]
        }
    },
    {
        "id": "139700073663840->113",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700072519456->113"
            ]
        }
    },
    {
        "id": "139700073663840->35",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700072519456->35"
            ]
        }
    },
    {
        "id": "139700073663840->61",
        "type": "column",
        "parentNode": "139700073663840",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072516336->61"
            ]
        }
    },
    {
        "id": "139700072516336->181",
        "type": "column",
        "parentNode": "139700072516336",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139700072528576->181"
            ]
        }
    },
    {
        "id": "139700072516336->61",
        "type": "column",
        "parentNode": "139700072516336",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072528576->61"
            ]
        }
    },
    {
        "id": "139700072528576->181",
        "type": "column",
        "parentNode": "139700072528576",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139700072519792->181"
            ]
        }
    },
    {
        "id": "139700072528576->61",
        "type": "column",
        "parentNode": "139700072528576",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072519792->61"
            ]
        }
    },
    {
        "id": "139700072519792->181",
        "type": "column",
        "parentNode": "139700072519792",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139700072515712->181"
            ]
        }
    },
    {
        "id": "139700072519792->61",
        "type": "column",
        "parentNode": "139700072519792",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700072515712->61"
            ]
        }
    },
    {
        "id": "139700072515712->181",
        "type": "column",
        "parentNode": "139700072515712",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139700072514512->181"
            ]
        }
    },
    {
        "id": "139700072515712->61",
        "type": "column",
        "parentNode": "139700072515712",
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
        "id": "139700072514512->177",
        "type": "column",
        "parentNode": "139700072514512",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "139700072526512->177"
            ]
        }
    },
    {
        "id": "139700072514512->178",
        "type": "column",
        "parentNode": "139700072514512",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "139700072526512->178"
            ]
        }
    },
    {
        "id": "139700072514512->179",
        "type": "column",
        "parentNode": "139700072514512",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "139700072526512->179"
            ]
        }
    },
    {
        "id": "139700072514512->180",
        "type": "column",
        "parentNode": "139700072514512",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "139700072526512->180"
            ]
        }
    },
    {
        "id": "139700072514512->181",
        "type": "column",
        "parentNode": "139700072514512",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139700072526512->181"
            ]
        }
    },
    {
        "id": "139700072529536->182",
        "type": "column",
        "parentNode": "139700072529536",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "139700072528000->182"
            ]
        }
    },
    {
        "id": "139700072529536->183",
        "type": "column",
        "parentNode": "139700072529536",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "139700072528000->183"
            ]
        }
    },
    {
        "id": "139700072529536->184",
        "type": "column",
        "parentNode": "139700072529536",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "139700072528000->184"
            ]
        }
    },
    {
        "id": "139700072529536->185",
        "type": "column",
        "parentNode": "139700072529536",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "139700072528000->185"
            ]
        }
    },
    {
        "id": "139700072529536->186",
        "type": "column",
        "parentNode": "139700072529536",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "139700072528000->186"
            ]
        }
    },
    {
        "id": "139700072528000->182",
        "type": "column",
        "parentNode": "139700072528000",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "139700072513600->182"
            ]
        }
    },
    {
        "id": "139700072528000->183",
        "type": "column",
        "parentNode": "139700072528000",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "139700072513600->183"
            ]
        }
    },
    {
        "id": "139700072528000->184",
        "type": "column",
        "parentNode": "139700072528000",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "139700072513600->184"
            ]
        }
    },
    {
        "id": "139700072528000->185",
        "type": "column",
        "parentNode": "139700072528000",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "139700072513600->185"
            ]
        }
    },
    {
        "id": "139700072528000->186",
        "type": "column",
        "parentNode": "139700072528000",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "139700072513600->186"
            ]
        }
    },
    {
        "id": "139700072513600->182",
        "type": "column",
        "parentNode": "139700072513600",
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
        "id": "139700072513600->183",
        "type": "column",
        "parentNode": "139700072513600",
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
        "id": "139700072513600->184",
        "type": "column",
        "parentNode": "139700072513600",
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
        "id": "139700072513600->185",
        "type": "column",
        "parentNode": "139700072513600",
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
        "id": "139700072513600->186",
        "type": "column",
        "parentNode": "139700072513600",
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
        "id": "139700072526512->177",
        "type": "column",
        "parentNode": "139700072526512",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "139700072515520->177"
            ]
        }
    },
    {
        "id": "139700072526512->178",
        "type": "column",
        "parentNode": "139700072526512",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "139700072515520->178"
            ]
        }
    },
    {
        "id": "139700072526512->179",
        "type": "column",
        "parentNode": "139700072526512",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "139700072515520->179"
            ]
        }
    },
    {
        "id": "139700072526512->180",
        "type": "column",
        "parentNode": "139700072526512",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "139700072515520->180"
            ]
        }
    },
    {
        "id": "139700072526512->181",
        "type": "column",
        "parentNode": "139700072526512",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "139700072515520->181"
            ]
        }
    },
    {
        "id": "139700072515520->177",
        "type": "column",
        "parentNode": "139700072515520",
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
        "id": "139700072515520->178",
        "type": "column",
        "parentNode": "139700072515520",
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
        "id": "139700072515520->179",
        "type": "column",
        "parentNode": "139700072515520",
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
        "id": "139700072515520->180",
        "type": "column",
        "parentNode": "139700072515520",
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
        "id": "139700072515520->181",
        "type": "column",
        "parentNode": "139700072515520",
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
        "id": "139700072519456->16",
        "type": "column",
        "parentNode": "139700072519456",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700073675312->16"
            ]
        }
    },
    {
        "id": "139700072519456->17",
        "type": "column",
        "parentNode": "139700072519456",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700073675312->17"
            ]
        }
    },
    {
        "id": "139700072519456->19",
        "type": "column",
        "parentNode": "139700072519456",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700073675312->19"
            ]
        }
    },
    {
        "id": "139700072519456->122",
        "type": "column",
        "parentNode": "139700072519456",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700073675312->122"
            ]
        }
    },
    {
        "id": "139700072519456->113",
        "type": "column",
        "parentNode": "139700072519456",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700073675312->113"
            ]
        }
    },
    {
        "id": "139700072519456->35",
        "type": "column",
        "parentNode": "139700072519456",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700073675312->35"
            ]
        }
    },
    {
        "id": "139700073675312->19",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "139700073644096->19",
                "139700073664512->114"
            ]
        }
    },
    {
        "id": "139700073675312->15",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "139700073644096->15"
            ]
        }
    },
    {
        "id": "139700073675312->16",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700073644096->16"
            ]
        }
    },
    {
        "id": "139700073675312->17",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700073644096->17"
            ]
        }
    },
    {
        "id": "139700073675312->18",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "139700073644096->18"
            ]
        }
    },
    {
        "id": "139700073675312->35",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700073664512->35"
            ]
        }
    },
    {
        "id": "139700073675312->40",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139700073664512->40"
            ]
        }
    },
    {
        "id": "139700073675312->109",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700073664512->109"
            ]
        }
    },
    {
        "id": "139700073675312->113",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700073664512->113"
            ]
        }
    },
    {
        "id": "139700073675312->122",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700073664512->122"
            ]
        }
    },
    {
        "id": "139700073675312->123",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "139700073664512->123"
            ]
        }
    },
    {
        "id": "139700073675312->124",
        "type": "column",
        "parentNode": "139700073675312",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "139700073664512->124"
            ]
        }
    },
    {
        "id": "139700073664512->114",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "139700073667632->114",
                "139700072388384->121"
            ]
        }
    },
    {
        "id": "139700073664512->35",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700073667632->35"
            ]
        }
    },
    {
        "id": "139700073664512->40",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139700073667632->40"
            ]
        }
    },
    {
        "id": "139700073664512->109",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700073667632->109"
            ]
        }
    },
    {
        "id": "139700073664512->113",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700073667632->113"
            ]
        }
    },
    {
        "id": "139700073664512->122",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "139700072388384->122"
            ]
        }
    },
    {
        "id": "139700073664512->123",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "139700072388384->123"
            ]
        }
    },
    {
        "id": "139700073664512->124",
        "type": "column",
        "parentNode": "139700073664512",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "139700072388384->124"
            ]
        }
    },
    {
        "id": "139700072388384->121",
        "type": "column",
        "parentNode": "139700072388384",
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
        "id": "139700072388384->122",
        "type": "column",
        "parentNode": "139700072388384",
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
        "id": "139700072388384->123",
        "type": "column",
        "parentNode": "139700072388384",
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
        "id": "139700072388384->124",
        "type": "column",
        "parentNode": "139700072388384",
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
        "id": "139700073667632->35",
        "type": "column",
        "parentNode": "139700073667632",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "139700073667392->35",
                "139700072394816->115"
            ]
        }
    },
    {
        "id": "139700073667632->40",
        "type": "column",
        "parentNode": "139700073667632",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139700073667392->40"
            ]
        }
    },
    {
        "id": "139700073667632->109",
        "type": "column",
        "parentNode": "139700073667632",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700073667392->109"
            ]
        }
    },
    {
        "id": "139700073667632->113",
        "type": "column",
        "parentNode": "139700073667632",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "139700072394816->113"
            ]
        }
    },
    {
        "id": "139700073667632->114",
        "type": "column",
        "parentNode": "139700073667632",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "139700072394816->114"
            ]
        }
    },
    {
        "id": "139700072394816->113",
        "type": "column",
        "parentNode": "139700072394816",
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
        "id": "139700072394816->114",
        "type": "column",
        "parentNode": "139700072394816",
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
        "id": "139700072394816->115",
        "type": "column",
        "parentNode": "139700072394816",
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
        "id": "139700073667392->40",
        "type": "column",
        "parentNode": "139700073667392",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139700072391216->40"
            ]
        }
    },
    {
        "id": "139700073667392->35",
        "type": "column",
        "parentNode": "139700073667392",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700072391216->35"
            ]
        }
    },
    {
        "id": "139700073667392->109",
        "type": "column",
        "parentNode": "139700073667392",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139700072391216->109"
            ]
        }
    },
    {
        "id": "139700072391216->40",
        "type": "column",
        "parentNode": "139700072391216",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139700072522336->40"
            ]
        }
    },
    {
        "id": "139700072391216->35",
        "type": "column",
        "parentNode": "139700072391216",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "139700072522336->35"
            ]
        }
    },
    {
        "id": "139700072391216->109",
        "type": "column",
        "parentNode": "139700072391216",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "139700072522336->84"
            ]
        }
    },
    {
        "id": "139700072522336->35",
        "type": "column",
        "parentNode": "139700072522336",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "139700072515184->35",
                "139700072517872->39"
            ]
        }
    },
    {
        "id": "139700072522336->33",
        "type": "column",
        "parentNode": "139700072522336",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "139700072515184->33"
            ]
        }
    },
    {
        "id": "139700072522336->34",
        "type": "column",
        "parentNode": "139700072522336",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "139700072515184->34"
            ]
        }
    },
    {
        "id": "139700072522336->88",
        "type": "column",
        "parentNode": "139700072522336",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139700072515184->88"
            ]
        }
    },
    {
        "id": "139700072522336->84",
        "type": "column",
        "parentNode": "139700072522336",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700072515184->84"
            ]
        }
    },
    {
        "id": "139700072522336->40",
        "type": "column",
        "parentNode": "139700072522336",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "139700072517872->40"
            ]
        }
    },
    {
        "id": "139700072517872->39",
        "type": "column",
        "parentNode": "139700072517872",
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
        "id": "139700072517872->40",
        "type": "column",
        "parentNode": "139700072517872",
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
        "id": "139700072515184->35",
        "type": "column",
        "parentNode": "139700072515184",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "139700072385264->35",
                "139700072397600->90"
            ]
        }
    },
    {
        "id": "139700072515184->33",
        "type": "column",
        "parentNode": "139700072515184",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "139700072385264->33"
            ]
        }
    },
    {
        "id": "139700072515184->34",
        "type": "column",
        "parentNode": "139700072515184",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "139700072385264->34"
            ]
        }
    },
    {
        "id": "139700072515184->88",
        "type": "column",
        "parentNode": "139700072515184",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139700072397600->88"
            ]
        }
    },
    {
        "id": "139700072515184->84",
        "type": "column",
        "parentNode": "139700072515184",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "139700072397600->84"
            ]
        }
    },
    {
        "id": "139700072397600->90",
        "type": "column",
        "parentNode": "139700072397600",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "139700072514272->90"
            ]
        }
    },
    {
        "id": "139700072397600->88",
        "type": "column",
        "parentNode": "139700072397600",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139700072514272->88"
            ]
        }
    },
    {
        "id": "139700072397600->84",
        "type": "column",
        "parentNode": "139700072397600",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "139700072514272->61"
            ]
        }
    },
    {
        "id": "139700072514272->25",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "139700073659408->25",
                "139700072391936->89"
            ]
        }
    },
    {
        "id": "139700072514272->26",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "139700073659408->26"
            ]
        }
    },
    {
        "id": "139700072514272->27",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "139700073659408->27"
            ]
        }
    },
    {
        "id": "139700072514272->28",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "139700073659408->28"
            ]
        }
    },
    {
        "id": "139700072514272->61",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700073659408->61"
            ]
        }
    },
    {
        "id": "139700072514272->88",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "139700072391936->88"
            ]
        }
    },
    {
        "id": "139700072514272->90",
        "type": "column",
        "parentNode": "139700072514272",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "139700072391936->90"
            ]
        }
    },
    {
        "id": "139700072391936->88",
        "type": "column",
        "parentNode": "139700072391936",
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
        "id": "139700072391936->89",
        "type": "column",
        "parentNode": "139700072391936",
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
        "id": "139700072391936->90",
        "type": "column",
        "parentNode": "139700072391936",
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
        "id": "139700073659408->25",
        "type": "column",
        "parentNode": "139700073659408",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "139700072514944->25",
                "139700073651824->137"
            ]
        }
    },
    {
        "id": "139700073659408->26",
        "type": "column",
        "parentNode": "139700073659408",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "139700072514944->26"
            ]
        }
    },
    {
        "id": "139700073659408->27",
        "type": "column",
        "parentNode": "139700073659408",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "139700072514944->27"
            ]
        }
    },
    {
        "id": "139700073659408->28",
        "type": "column",
        "parentNode": "139700073659408",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "139700072514944->28"
            ]
        }
    },
    {
        "id": "139700073659408->61",
        "type": "column",
        "parentNode": "139700073659408",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139700073651824->61"
            ]
        }
    },
    {
        "id": "139700073651824->137",
        "type": "column",
        "parentNode": "139700073651824",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "139700072396832->137"
            ]
        }
    },
    {
        "id": "139700073651824->61",
        "type": "column",
        "parentNode": "139700073651824",
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
        "id": "139700072396832->133",
        "type": "column",
        "parentNode": "139700072396832",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "139700072389776->133"
            ]
        }
    },
    {
        "id": "139700072396832->134",
        "type": "column",
        "parentNode": "139700072396832",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "139700072389776->134"
            ]
        }
    },
    {
        "id": "139700072396832->135",
        "type": "column",
        "parentNode": "139700072396832",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "139700072389776->135"
            ]
        }
    },
    {
        "id": "139700072396832->136",
        "type": "column",
        "parentNode": "139700072396832",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "139700072389776->136"
            ]
        }
    },
    {
        "id": "139700072396832->137",
        "type": "column",
        "parentNode": "139700072396832",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "139700072389776->137"
            ]
        }
    },
    {
        "id": "139700072392656->138",
        "type": "column",
        "parentNode": "139700072392656",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "139700073653072->138"
            ]
        }
    },
    {
        "id": "139700072392656->139",
        "type": "column",
        "parentNode": "139700072392656",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "139700073653072->139"
            ]
        }
    },
    {
        "id": "139700072392656->140",
        "type": "column",
        "parentNode": "139700072392656",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "139700073653072->140"
            ]
        }
    },
    {
        "id": "139700072392656->141",
        "type": "column",
        "parentNode": "139700072392656",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "139700073653072->141"
            ]
        }
    },
    {
        "id": "139700072392656->142",
        "type": "column",
        "parentNode": "139700072392656",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "139700073653072->142"
            ]
        }
    },
    {
        "id": "139700073653072->138",
        "type": "column",
        "parentNode": "139700073653072",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "139700072387136->138"
            ]
        }
    },
    {
        "id": "139700073653072->139",
        "type": "column",
        "parentNode": "139700073653072",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "139700072387136->139"
            ]
        }
    },
    {
        "id": "139700073653072->140",
        "type": "column",
        "parentNode": "139700073653072",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "139700072387136->140"
            ]
        }
    },
    {
        "id": "139700073653072->141",
        "type": "column",
        "parentNode": "139700073653072",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "139700072387136->141"
            ]
        }
    },
    {
        "id": "139700073653072->142",
        "type": "column",
        "parentNode": "139700073653072",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "139700072387136->142"
            ]
        }
    },
    {
        "id": "139700072387136->138",
        "type": "column",
        "parentNode": "139700072387136",
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
        "id": "139700072387136->139",
        "type": "column",
        "parentNode": "139700072387136",
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
        "id": "139700072387136->140",
        "type": "column",
        "parentNode": "139700072387136",
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
        "id": "139700072387136->141",
        "type": "column",
        "parentNode": "139700072387136",
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
        "id": "139700072387136->142",
        "type": "column",
        "parentNode": "139700072387136",
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
        "id": "139700072389776->133",
        "type": "column",
        "parentNode": "139700072389776",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "139700071011024->133"
            ]
        }
    },
    {
        "id": "139700072389776->134",
        "type": "column",
        "parentNode": "139700072389776",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "139700071011024->134"
            ]
        }
    },
    {
        "id": "139700072389776->135",
        "type": "column",
        "parentNode": "139700072389776",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "139700071011024->135"
            ]
        }
    },
    {
        "id": "139700072389776->136",
        "type": "column",
        "parentNode": "139700072389776",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "139700071011024->136"
            ]
        }
    },
    {
        "id": "139700072389776->137",
        "type": "column",
        "parentNode": "139700072389776",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "139700071011024->137"
            ]
        }
    },
    {
        "id": "139700071011024->133",
        "type": "column",
        "parentNode": "139700071011024",
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
        "id": "139700071011024->134",
        "type": "column",
        "parentNode": "139700071011024",
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
        "id": "139700071011024->135",
        "type": "column",
        "parentNode": "139700071011024",
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
        "id": "139700071011024->136",
        "type": "column",
        "parentNode": "139700071011024",
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
        "id": "139700071011024->137",
        "type": "column",
        "parentNode": "139700071011024",
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
        "id": "139700072514944->25",
        "type": "column",
        "parentNode": "139700072514944",
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
        "id": "139700072514944->26",
        "type": "column",
        "parentNode": "139700072514944",
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
        "id": "139700072514944->27",
        "type": "column",
        "parentNode": "139700072514944",
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
        "id": "139700072514944->28",
        "type": "column",
        "parentNode": "139700072514944",
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
        "id": "139700072385264->33",
        "type": "column",
        "parentNode": "139700072385264",
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
        "id": "139700072385264->34",
        "type": "column",
        "parentNode": "139700072385264",
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
        "id": "139700072385264->35",
        "type": "column",
        "parentNode": "139700072385264",
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
        "id": "139700073644096->15",
        "type": "column",
        "parentNode": "139700073644096",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "139700072382672->15"
            ]
        }
    },
    {
        "id": "139700073644096->16",
        "type": "column",
        "parentNode": "139700073644096",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700072382672->16"
            ]
        }
    },
    {
        "id": "139700073644096->17",
        "type": "column",
        "parentNode": "139700073644096",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700072382672->17"
            ]
        }
    },
    {
        "id": "139700073644096->18",
        "type": "column",
        "parentNode": "139700073644096",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "139700072382672->18"
            ]
        }
    },
    {
        "id": "139700073644096->19",
        "type": "column",
        "parentNode": "139700073644096",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700072382672->19"
            ]
        }
    },
    {
        "id": "139700072384784->44",
        "type": "column",
        "parentNode": "139700072384784",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "139700073659072->44"
            ]
        }
    },
    {
        "id": "139700072384784->45",
        "type": "column",
        "parentNode": "139700072384784",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "139700073659072->45"
            ]
        }
    },
    {
        "id": "139700072384784->46",
        "type": "column",
        "parentNode": "139700072384784",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "139700073659072->46"
            ]
        }
    },
    {
        "id": "139700072384784->47",
        "type": "column",
        "parentNode": "139700072384784",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "139700073659072->47"
            ]
        }
    },
    {
        "id": "139700072384784->48",
        "type": "column",
        "parentNode": "139700072384784",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "139700073659072->48"
            ]
        }
    },
    {
        "id": "139700073659072->44",
        "type": "column",
        "parentNode": "139700073659072",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "139700073648944->44"
            ]
        }
    },
    {
        "id": "139700073659072->45",
        "type": "column",
        "parentNode": "139700073659072",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "139700073648944->45"
            ]
        }
    },
    {
        "id": "139700073659072->46",
        "type": "column",
        "parentNode": "139700073659072",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "139700073648944->46"
            ]
        }
    },
    {
        "id": "139700073659072->47",
        "type": "column",
        "parentNode": "139700073659072",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "139700073648944->47"
            ]
        }
    },
    {
        "id": "139700073659072->48",
        "type": "column",
        "parentNode": "139700073659072",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "139700073648944->48"
            ]
        }
    },
    {
        "id": "139700073648944->44",
        "type": "column",
        "parentNode": "139700073648944",
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
        "id": "139700073648944->45",
        "type": "column",
        "parentNode": "139700073648944",
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
        "id": "139700073648944->46",
        "type": "column",
        "parentNode": "139700073648944",
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
        "id": "139700073648944->47",
        "type": "column",
        "parentNode": "139700073648944",
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
        "id": "139700073648944->48",
        "type": "column",
        "parentNode": "139700073648944",
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
        "id": "139700072382672->15",
        "type": "column",
        "parentNode": "139700072382672",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "139700071011168->15"
            ]
        }
    },
    {
        "id": "139700072382672->16",
        "type": "column",
        "parentNode": "139700072382672",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "139700071011168->16"
            ]
        }
    },
    {
        "id": "139700072382672->17",
        "type": "column",
        "parentNode": "139700072382672",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "139700071011168->17"
            ]
        }
    },
    {
        "id": "139700072382672->18",
        "type": "column",
        "parentNode": "139700072382672",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "139700071011168->18"
            ]
        }
    },
    {
        "id": "139700072382672->19",
        "type": "column",
        "parentNode": "139700072382672",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139700071011168->19"
            ]
        }
    },
    {
        "id": "139700071011168->15",
        "type": "column",
        "parentNode": "139700071011168",
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
        "id": "139700071011168->16",
        "type": "column",
        "parentNode": "139700071011168",
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
        "id": "139700071011168->17",
        "type": "column",
        "parentNode": "139700071011168",
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
        "id": "139700071011168->18",
        "type": "column",
        "parentNode": "139700071011168",
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
        "id": "139700071011168->19",
        "type": "column",
        "parentNode": "139700071011168",
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
        "id": "139700071012176-139700071012512",
        "source": "139700071012176",
        "target": "139700071012512",
        "data": {}
    },
    {
        "id": "139700071012512-139700071010832",
        "source": "139700071012512",
        "target": "139700071010832",
        "data": {}
    },
    {
        "id": "139700071010832-139700073653744",
        "source": "139700071010832",
        "target": "139700073653744",
        "data": {}
    },
    {
        "id": "139700073653744-139700072519984",
        "source": "139700073653744",
        "target": "139700072519984",
        "data": {}
    },
    {
        "id": "139700072519984-139700072954704",
        "source": "139700072519984",
        "target": "139700072954704",
        "data": {}
    },
    {
        "id": "139700073653744-139700073676752",
        "source": "139700073653744",
        "target": "139700073676752",
        "data": {}
    },
    {
        "id": "139700073676752-139700072388720",
        "source": "139700073676752",
        "target": "139700072388720",
        "data": {}
    },
    {
        "id": "139700072388720-139700072941360",
        "source": "139700072388720",
        "target": "139700072941360",
        "data": {}
    },
    {
        "id": "139700072941360-139700071008816",
        "source": "139700072941360",
        "target": "139700071008816",
        "data": {}
    },
    {
        "id": "139700071008816-139700072950672",
        "source": "139700071008816",
        "target": "139700072950672",
        "data": {}
    },
    {
        "id": "139700072950672-139700073528288",
        "source": "139700072950672",
        "target": "139700073528288",
        "data": {}
    },
    {
        "id": "139700073528288-139700072955040",
        "source": "139700073528288",
        "target": "139700072955040",
        "data": {}
    },
    {
        "id": "139700073528288-139700271382048",
        "source": "139700073528288",
        "target": "139700271382048",
        "data": {}
    },
    {
        "id": "139700271382048-139700072940496",
        "source": "139700271382048",
        "target": "139700072940496",
        "data": {}
    },
    {
        "id": "139700072940496-139700072953408",
        "source": "139700072940496",
        "target": "139700072953408",
        "data": {}
    },
    {
        "id": "139700072953408-139700072954464",
        "source": "139700072953408",
        "target": "139700072954464",
        "data": {}
    },
    {
        "id": "139700072953408-139700072944528",
        "source": "139700072953408",
        "target": "139700072944528",
        "data": {}
    },
    {
        "id": "139700072944528-139700072944000",
        "source": "139700072944528",
        "target": "139700072944000",
        "data": {}
    },
    {
        "id": "139700072944000-139700072952064",
        "source": "139700072944000",
        "target": "139700072952064",
        "data": {}
    },
    {
        "id": "139700072952064-139700072950528",
        "source": "139700072952064",
        "target": "139700072950528",
        "data": {}
    },
    {
        "id": "139700072950528-139700072939728",
        "source": "139700072950528",
        "target": "139700072939728",
        "data": {}
    },
    {
        "id": "139700072939728-139700072944384",
        "source": "139700072939728",
        "target": "139700072944384",
        "data": {}
    },
    {
        "id": "139700072952064-139700072945824",
        "source": "139700072952064",
        "target": "139700072945824",
        "data": {}
    },
    {
        "id": "139700072945824-139700072523296",
        "source": "139700072945824",
        "target": "139700072523296",
        "data": {}
    },
    {
        "id": "139700072944528-139700072941408",
        "source": "139700072944528",
        "target": "139700072941408",
        "data": {}
    },
    {
        "id": "139700271382048-139700072396976",
        "source": "139700271382048",
        "target": "139700072396976",
        "data": {}
    },
    {
        "id": "139700073676752-139700073667056",
        "source": "139700073676752",
        "target": "139700073667056",
        "data": {}
    },
    {
        "id": "139700073667056-139700073648032",
        "source": "139700073667056",
        "target": "139700073648032",
        "data": {}
    },
    {
        "id": "139700073648032-139700072386128",
        "source": "139700073648032",
        "target": "139700072386128",
        "data": {}
    },
    {
        "id": "139700072386128-139700072395152",
        "source": "139700072386128",
        "target": "139700072395152",
        "data": {}
    },
    {
        "id": "139700072395152-139700073652880",
        "source": "139700072395152",
        "target": "139700073652880",
        "data": {}
    },
    {
        "id": "139700073652880-139700072940352",
        "source": "139700073652880",
        "target": "139700072940352",
        "data": {}
    },
    {
        "id": "139700072940352-139700073648464",
        "source": "139700072940352",
        "target": "139700073648464",
        "data": {}
    },
    {
        "id": "139700072940352-139700072527904",
        "source": "139700072940352",
        "target": "139700072527904",
        "data": {}
    },
    {
        "id": "139700072527904-139700072390544",
        "source": "139700072527904",
        "target": "139700072390544",
        "data": {}
    },
    {
        "id": "139700072390544-139700072388528",
        "source": "139700072390544",
        "target": "139700072388528",
        "data": {}
    },
    {
        "id": "139700072388528-139700072393712",
        "source": "139700072388528",
        "target": "139700072393712",
        "data": {}
    },
    {
        "id": "139700072393712-139700073657680",
        "source": "139700072393712",
        "target": "139700073657680",
        "data": {}
    },
    {
        "id": "139700073657680-139700072513984",
        "source": "139700073657680",
        "target": "139700072513984",
        "data": {}
    },
    {
        "id": "139700072388528-139700072383488",
        "source": "139700072388528",
        "target": "139700072383488",
        "data": {}
    },
    {
        "id": "139700072383488-139700072528384",
        "source": "139700072383488",
        "target": "139700072528384",
        "data": {}
    },
    {
        "id": "139700072527904-139700073646496",
        "source": "139700072527904",
        "target": "139700073646496",
        "data": {}
    },
    {
        "id": "139700073667056-139700073663840",
        "source": "139700073667056",
        "target": "139700073663840",
        "data": {}
    },
    {
        "id": "139700073663840-139700072516336",
        "source": "139700073663840",
        "target": "139700072516336",
        "data": {}
    },
    {
        "id": "139700072516336-139700072528576",
        "source": "139700072516336",
        "target": "139700072528576",
        "data": {}
    },
    {
        "id": "139700072528576-139700072519792",
        "source": "139700072528576",
        "target": "139700072519792",
        "data": {}
    },
    {
        "id": "139700072519792-139700072515712",
        "source": "139700072519792",
        "target": "139700072515712",
        "data": {}
    },
    {
        "id": "139700072515712-139700072514512",
        "source": "139700072515712",
        "target": "139700072514512",
        "data": {}
    },
    {
        "id": "139700072514512-139700072529536",
        "source": "139700072514512",
        "target": "139700072529536",
        "data": {}
    },
    {
        "id": "139700072529536-139700072528000",
        "source": "139700072529536",
        "target": "139700072528000",
        "data": {}
    },
    {
        "id": "139700072528000-139700072513600",
        "source": "139700072528000",
        "target": "139700072513600",
        "data": {}
    },
    {
        "id": "139700072514512-139700072526512",
        "source": "139700072514512",
        "target": "139700072526512",
        "data": {}
    },
    {
        "id": "139700072526512-139700072515520",
        "source": "139700072526512",
        "target": "139700072515520",
        "data": {}
    },
    {
        "id": "139700073663840-139700072519456",
        "source": "139700073663840",
        "target": "139700072519456",
        "data": {}
    },
    {
        "id": "139700072519456-139700073675312",
        "source": "139700072519456",
        "target": "139700073675312",
        "data": {}
    },
    {
        "id": "139700073675312-139700073664512",
        "source": "139700073675312",
        "target": "139700073664512",
        "data": {}
    },
    {
        "id": "139700073664512-139700072388384",
        "source": "139700073664512",
        "target": "139700072388384",
        "data": {}
    },
    {
        "id": "139700073664512-139700073667632",
        "source": "139700073664512",
        "target": "139700073667632",
        "data": {}
    },
    {
        "id": "139700073667632-139700072394816",
        "source": "139700073667632",
        "target": "139700072394816",
        "data": {}
    },
    {
        "id": "139700073667632-139700073667392",
        "source": "139700073667632",
        "target": "139700073667392",
        "data": {}
    },
    {
        "id": "139700073667392-139700072391216",
        "source": "139700073667392",
        "target": "139700072391216",
        "data": {}
    },
    {
        "id": "139700072391216-139700072522336",
        "source": "139700072391216",
        "target": "139700072522336",
        "data": {}
    },
    {
        "id": "139700072522336-139700072517872",
        "source": "139700072522336",
        "target": "139700072517872",
        "data": {}
    },
    {
        "id": "139700072522336-139700072515184",
        "source": "139700072522336",
        "target": "139700072515184",
        "data": {}
    },
    {
        "id": "139700072515184-139700072397600",
        "source": "139700072515184",
        "target": "139700072397600",
        "data": {}
    },
    {
        "id": "139700072397600-139700072514272",
        "source": "139700072397600",
        "target": "139700072514272",
        "data": {}
    },
    {
        "id": "139700072514272-139700072391936",
        "source": "139700072514272",
        "target": "139700072391936",
        "data": {}
    },
    {
        "id": "139700072514272-139700073659408",
        "source": "139700072514272",
        "target": "139700073659408",
        "data": {}
    },
    {
        "id": "139700073659408-139700073651824",
        "source": "139700073659408",
        "target": "139700073651824",
        "data": {}
    },
    {
        "id": "139700073651824-139700072396832",
        "source": "139700073651824",
        "target": "139700072396832",
        "data": {}
    },
    {
        "id": "139700072396832-139700072392656",
        "source": "139700072396832",
        "target": "139700072392656",
        "data": {}
    },
    {
        "id": "139700072392656-139700073653072",
        "source": "139700072392656",
        "target": "139700073653072",
        "data": {}
    },
    {
        "id": "139700073653072-139700072387136",
        "source": "139700073653072",
        "target": "139700072387136",
        "data": {}
    },
    {
        "id": "139700072396832-139700072389776",
        "source": "139700072396832",
        "target": "139700072389776",
        "data": {}
    },
    {
        "id": "139700072389776-139700071011024",
        "source": "139700072389776",
        "target": "139700071011024",
        "data": {}
    },
    {
        "id": "139700073659408-139700072514944",
        "source": "139700073659408",
        "target": "139700072514944",
        "data": {}
    },
    {
        "id": "139700072515184-139700072385264",
        "source": "139700072515184",
        "target": "139700072385264",
        "data": {}
    },
    {
        "id": "139700073675312-139700073644096",
        "source": "139700073675312",
        "target": "139700073644096",
        "data": {}
    },
    {
        "id": "139700073644096-139700072384784",
        "source": "139700073644096",
        "target": "139700072384784",
        "data": {}
    },
    {
        "id": "139700072384784-139700073659072",
        "source": "139700072384784",
        "target": "139700073659072",
        "data": {}
    },
    {
        "id": "139700073659072-139700073648944",
        "source": "139700073659072",
        "target": "139700073648944",
        "data": {}
    },
    {
        "id": "139700073644096-139700072382672",
        "source": "139700073644096",
        "target": "139700072382672",
        "data": {}
    },
    {
        "id": "139700072382672-139700071011168",
        "source": "139700072382672",
        "target": "139700071011168",
        "data": {}
    },
    {
        "id": "(139700071012176->35)-(139700071012512->35)",
        "source": "139700071012176->35",
        "target": "139700071012512->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->113)-(139700071012512->113)",
        "source": "139700071012176->113",
        "target": "139700071012512->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->19)-(139700071012512->19)",
        "source": "139700071012176->19",
        "target": "139700071012512->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->16)-(139700071012512->16)",
        "source": "139700071012176->16",
        "target": "139700071012512->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->17)-(139700071012512->17)",
        "source": "139700071012176->17",
        "target": "139700071012512->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->122)-(139700071012512->122)",
        "source": "139700071012176->122",
        "target": "139700071012512->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->61)-(139700071012512->61)",
        "source": "139700071012176->61",
        "target": "139700071012512->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->212)-(139700071012512->212)",
        "source": "139700071012176->212",
        "target": "139700071012512->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->84)-(139700071012512->84)",
        "source": "139700071012176->84",
        "target": "139700071012512->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->245)-(139700071012512->245)",
        "source": "139700071012176->245",
        "target": "139700071012512->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->109)-(139700071012512->109)",
        "source": "139700071012176->109",
        "target": "139700071012512->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->163)-(139700071012512->163)",
        "source": "139700071012176->163",
        "target": "139700071012512->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->164)-(139700071012512->164)",
        "source": "139700071012176->164",
        "target": "139700071012512->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->165)-(139700071012512->165)",
        "source": "139700071012176->165",
        "target": "139700071012512->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->166)-(139700071012512->166)",
        "source": "139700071012176->166",
        "target": "139700071012512->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->171)-(139700071012512->171)",
        "source": "139700071012176->171",
        "target": "139700071012512->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->291)-(139700071012512->291)",
        "source": "139700071012176->291",
        "target": "139700071012512->291",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->309)-(139700071012512->309)",
        "source": "139700071012176->309",
        "target": "139700071012512->309",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012176->328)-(139700071012512->109)",
        "source": "139700071012176->328",
        "target": "139700071012512->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->35)-(139700071010832->35)",
        "source": "139700071012512->35",
        "target": "139700071010832->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->113)-(139700071010832->113)",
        "source": "139700071012512->113",
        "target": "139700071010832->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->19)-(139700071010832->19)",
        "source": "139700071012512->19",
        "target": "139700071010832->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->16)-(139700071010832->16)",
        "source": "139700071012512->16",
        "target": "139700071010832->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->17)-(139700071010832->17)",
        "source": "139700071012512->17",
        "target": "139700071010832->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->122)-(139700071010832->122)",
        "source": "139700071012512->122",
        "target": "139700071010832->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->61)-(139700071010832->61)",
        "source": "139700071012512->61",
        "target": "139700071010832->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->212)-(139700071010832->212)",
        "source": "139700071012512->212",
        "target": "139700071010832->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->84)-(139700071010832->84)",
        "source": "139700071012512->84",
        "target": "139700071010832->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->245)-(139700071010832->245)",
        "source": "139700071012512->245",
        "target": "139700071010832->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->109)-(139700071010832->109)",
        "source": "139700071012512->109",
        "target": "139700071010832->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->163)-(139700071010832->163)",
        "source": "139700071012512->163",
        "target": "139700071010832->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->164)-(139700071010832->164)",
        "source": "139700071012512->164",
        "target": "139700071010832->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->165)-(139700071010832->165)",
        "source": "139700071012512->165",
        "target": "139700071010832->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->166)-(139700071010832->166)",
        "source": "139700071012512->166",
        "target": "139700071010832->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->171)-(139700071010832->171)",
        "source": "139700071012512->171",
        "target": "139700071010832->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->291)-(139700071010832->291)",
        "source": "139700071012512->291",
        "target": "139700071010832->291",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071012512->309)-(139700071010832->84)",
        "source": "139700071012512->309",
        "target": "139700071010832->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->35)-(139700073653744->35)",
        "source": "139700071010832->35",
        "target": "139700073653744->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->113)-(139700073653744->113)",
        "source": "139700071010832->113",
        "target": "139700073653744->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->19)-(139700073653744->19)",
        "source": "139700071010832->19",
        "target": "139700073653744->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->16)-(139700073653744->16)",
        "source": "139700071010832->16",
        "target": "139700073653744->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->17)-(139700073653744->17)",
        "source": "139700071010832->17",
        "target": "139700073653744->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->122)-(139700073653744->122)",
        "source": "139700071010832->122",
        "target": "139700073653744->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->61)-(139700073653744->61)",
        "source": "139700071010832->61",
        "target": "139700073653744->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->212)-(139700073653744->212)",
        "source": "139700071010832->212",
        "target": "139700073653744->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->84)-(139700073653744->84)",
        "source": "139700071010832->84",
        "target": "139700073653744->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->245)-(139700073653744->245)",
        "source": "139700071010832->245",
        "target": "139700073653744->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->109)-(139700073653744->109)",
        "source": "139700071010832->109",
        "target": "139700073653744->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->163)-(139700073653744->163)",
        "source": "139700071010832->163",
        "target": "139700073653744->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->164)-(139700073653744->164)",
        "source": "139700071010832->164",
        "target": "139700073653744->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->165)-(139700073653744->165)",
        "source": "139700071010832->165",
        "target": "139700073653744->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->166)-(139700073653744->166)",
        "source": "139700071010832->166",
        "target": "139700073653744->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->171)-(139700073653744->171)",
        "source": "139700071010832->171",
        "target": "139700073653744->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071010832->291)-(139700073653744->61)",
        "source": "139700071010832->291",
        "target": "139700073653744->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->35)-(139700073676752->35)",
        "source": "139700073653744->35",
        "target": "139700073676752->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->113)-(139700073676752->113)",
        "source": "139700073653744->113",
        "target": "139700073676752->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->19)-(139700073676752->19)",
        "source": "139700073653744->19",
        "target": "139700073676752->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->16)-(139700073676752->16)",
        "source": "139700073653744->16",
        "target": "139700073676752->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->17)-(139700073676752->17)",
        "source": "139700073653744->17",
        "target": "139700073676752->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->122)-(139700073676752->122)",
        "source": "139700073653744->122",
        "target": "139700073676752->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->61)-(139700073676752->61)",
        "source": "139700073653744->61",
        "target": "139700073676752->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->212)-(139700073676752->212)",
        "source": "139700073653744->212",
        "target": "139700073676752->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->84)-(139700073676752->84)",
        "source": "139700073653744->84",
        "target": "139700073676752->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->245)-(139700073676752->245)",
        "source": "139700073653744->245",
        "target": "139700073676752->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->109)-(139700073676752->109)",
        "source": "139700073653744->109",
        "target": "139700073676752->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->163)-(139700072519984->163)",
        "source": "139700073653744->163",
        "target": "139700072519984->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->164)-(139700072519984->164)",
        "source": "139700073653744->164",
        "target": "139700072519984->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->165)-(139700072519984->165)",
        "source": "139700073653744->165",
        "target": "139700072519984->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->166)-(139700072519984->166)",
        "source": "139700073653744->166",
        "target": "139700072519984->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653744->171)-(139700072519984->171)",
        "source": "139700073653744->171",
        "target": "139700072519984->171",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->163)-(139700072954704->163)",
        "source": "139700072519984->163",
        "target": "139700072954704->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->164)-(139700072954704->164)",
        "source": "139700072519984->164",
        "target": "139700072954704->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->165)-(139700072954704->165)",
        "source": "139700072519984->165",
        "target": "139700072954704->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->166)-(139700072954704->166)",
        "source": "139700072519984->166",
        "target": "139700072954704->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->171)-(139700072954704->163)",
        "source": "139700072519984->171",
        "target": "139700072954704->163",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->171)-(139700072954704->164)",
        "source": "139700072519984->171",
        "target": "139700072954704->164",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->171)-(139700072954704->165)",
        "source": "139700072519984->171",
        "target": "139700072954704->165",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519984->171)-(139700072954704->166)",
        "source": "139700072519984->171",
        "target": "139700072954704->166",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->35)-(139700073667056->35)",
        "source": "139700073676752->35",
        "target": "139700073667056->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->35)-(139700072388720->226)",
        "source": "139700073676752->35",
        "target": "139700072388720->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->113)-(139700073667056->113)",
        "source": "139700073676752->113",
        "target": "139700073667056->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->19)-(139700073667056->19)",
        "source": "139700073676752->19",
        "target": "139700073667056->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->16)-(139700073667056->16)",
        "source": "139700073676752->16",
        "target": "139700073667056->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->17)-(139700073667056->17)",
        "source": "139700073676752->17",
        "target": "139700073667056->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->122)-(139700073667056->122)",
        "source": "139700073676752->122",
        "target": "139700073667056->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->61)-(139700073667056->61)",
        "source": "139700073676752->61",
        "target": "139700073667056->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->212)-(139700073667056->35)",
        "source": "139700073676752->212",
        "target": "139700073667056->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->212)-(139700072388720->226)",
        "source": "139700073676752->212",
        "target": "139700072388720->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->84)-(139700073667056->84)",
        "source": "139700073676752->84",
        "target": "139700073667056->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->245)-(139700072388720->245)",
        "source": "139700073676752->245",
        "target": "139700072388720->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073676752->109)-(139700072388720->109)",
        "source": "139700073676752->109",
        "target": "139700072388720->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388720->245)-(139700072941360->245)",
        "source": "139700072388720->245",
        "target": "139700072941360->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388720->226)-(139700072941360->226)",
        "source": "139700072388720->226",
        "target": "139700072941360->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388720->109)-(139700072941360->109)",
        "source": "139700072388720->109",
        "target": "139700072941360->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072941360->245)-(139700071008816->245)",
        "source": "139700072941360->245",
        "target": "139700071008816->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072941360->226)-(139700071008816->226)",
        "source": "139700072941360->226",
        "target": "139700071008816->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072941360->109)-(139700071008816->109)",
        "source": "139700072941360->109",
        "target": "139700071008816->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071008816->245)-(139700072950672->245)",
        "source": "139700071008816->245",
        "target": "139700072950672->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071008816->226)-(139700072950672->226)",
        "source": "139700071008816->226",
        "target": "139700072950672->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700071008816->109)-(139700072950672->109)",
        "source": "139700071008816->109",
        "target": "139700072950672->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950672->245)-(139700073528288->245)",
        "source": "139700072950672->245",
        "target": "139700073528288->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950672->226)-(139700073528288->226)",
        "source": "139700072950672->226",
        "target": "139700073528288->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950672->109)-(139700073528288->84)",
        "source": "139700072950672->109",
        "target": "139700073528288->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->226)-(139700271382048->226)",
        "source": "139700073528288->226",
        "target": "139700271382048->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->226)-(139700072955040->244)",
        "source": "139700073528288->226",
        "target": "139700072955040->244",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->224)-(139700271382048->224)",
        "source": "139700073528288->224",
        "target": "139700271382048->224",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->225)-(139700271382048->225)",
        "source": "139700073528288->225",
        "target": "139700271382048->225",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->241)-(139700271382048->241)",
        "source": "139700073528288->241",
        "target": "139700271382048->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->84)-(139700271382048->84)",
        "source": "139700073528288->84",
        "target": "139700271382048->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073528288->245)-(139700072955040->245)",
        "source": "139700073528288->245",
        "target": "139700072955040->245",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700271382048->226)-(139700072396976->226)",
        "source": "139700271382048->226",
        "target": "139700072396976->226",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700271382048->226)-(139700072940496->243)",
        "source": "139700271382048->226",
        "target": "139700072940496->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700271382048->224)-(139700072396976->224)",
        "source": "139700271382048->224",
        "target": "139700072396976->224",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700271382048->225)-(139700072396976->225)",
        "source": "139700271382048->225",
        "target": "139700072396976->225",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700271382048->241)-(139700072940496->241)",
        "source": "139700271382048->241",
        "target": "139700072940496->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700271382048->84)-(139700072940496->84)",
        "source": "139700271382048->84",
        "target": "139700072940496->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940496->243)-(139700072953408->243)",
        "source": "139700072940496->243",
        "target": "139700072953408->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940496->241)-(139700072953408->241)",
        "source": "139700072940496->241",
        "target": "139700072953408->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940496->84)-(139700072953408->61)",
        "source": "139700072940496->84",
        "target": "139700072953408->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->227)-(139700072944528->227)",
        "source": "139700072953408->227",
        "target": "139700072944528->227",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->227)-(139700072954464->242)",
        "source": "139700072953408->227",
        "target": "139700072954464->242",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->228)-(139700072944528->228)",
        "source": "139700072953408->228",
        "target": "139700072944528->228",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->229)-(139700072944528->229)",
        "source": "139700072953408->229",
        "target": "139700072944528->229",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->230)-(139700072944528->230)",
        "source": "139700072953408->230",
        "target": "139700072944528->230",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->61)-(139700072944528->61)",
        "source": "139700072953408->61",
        "target": "139700072944528->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->241)-(139700072954464->241)",
        "source": "139700072953408->241",
        "target": "139700072954464->241",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072953408->243)-(139700072954464->243)",
        "source": "139700072953408->243",
        "target": "139700072954464->243",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944528->227)-(139700072941408->227)",
        "source": "139700072944528->227",
        "target": "139700072941408->227",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944528->227)-(139700072944000->235)",
        "source": "139700072944528->227",
        "target": "139700072944000->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944528->228)-(139700072941408->228)",
        "source": "139700072944528->228",
        "target": "139700072941408->228",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944528->229)-(139700072941408->229)",
        "source": "139700072944528->229",
        "target": "139700072941408->229",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944528->230)-(139700072941408->230)",
        "source": "139700072944528->230",
        "target": "139700072941408->230",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944528->61)-(139700072944000->61)",
        "source": "139700072944528->61",
        "target": "139700072944000->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072944000->235)-(139700072952064->235)",
        "source": "139700072944000->235",
        "target": "139700072952064->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072952064->231)-(139700072945824->231)",
        "source": "139700072952064->231",
        "target": "139700072945824->231",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072952064->232)-(139700072945824->232)",
        "source": "139700072952064->232",
        "target": "139700072945824->232",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072952064->233)-(139700072945824->233)",
        "source": "139700072952064->233",
        "target": "139700072945824->233",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072952064->234)-(139700072945824->234)",
        "source": "139700072952064->234",
        "target": "139700072945824->234",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072952064->235)-(139700072945824->235)",
        "source": "139700072952064->235",
        "target": "139700072945824->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950528->236)-(139700072939728->236)",
        "source": "139700072950528->236",
        "target": "139700072939728->236",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950528->237)-(139700072939728->237)",
        "source": "139700072950528->237",
        "target": "139700072939728->237",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950528->238)-(139700072939728->238)",
        "source": "139700072950528->238",
        "target": "139700072939728->238",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950528->239)-(139700072939728->239)",
        "source": "139700072950528->239",
        "target": "139700072939728->239",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072950528->240)-(139700072939728->240)",
        "source": "139700072950528->240",
        "target": "139700072939728->240",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072939728->236)-(139700072944384->236)",
        "source": "139700072939728->236",
        "target": "139700072944384->236",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072939728->237)-(139700072944384->237)",
        "source": "139700072939728->237",
        "target": "139700072944384->237",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072939728->238)-(139700072944384->238)",
        "source": "139700072939728->238",
        "target": "139700072944384->238",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072939728->239)-(139700072944384->239)",
        "source": "139700072939728->239",
        "target": "139700072944384->239",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072939728->240)-(139700072944384->240)",
        "source": "139700072939728->240",
        "target": "139700072944384->240",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072945824->231)-(139700072523296->231)",
        "source": "139700072945824->231",
        "target": "139700072523296->231",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072945824->232)-(139700072523296->232)",
        "source": "139700072945824->232",
        "target": "139700072523296->232",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072945824->233)-(139700072523296->233)",
        "source": "139700072945824->233",
        "target": "139700072523296->233",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072945824->234)-(139700072523296->234)",
        "source": "139700072945824->234",
        "target": "139700072523296->234",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072945824->235)-(139700072523296->235)",
        "source": "139700072945824->235",
        "target": "139700072523296->235",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->113)-(139700073663840->113)",
        "source": "139700073667056->113",
        "target": "139700073663840->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->113)-(139700073648032->210)",
        "source": "139700073667056->113",
        "target": "139700073648032->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->19)-(139700073663840->19)",
        "source": "139700073667056->19",
        "target": "139700073663840->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->16)-(139700073663840->16)",
        "source": "139700073667056->16",
        "target": "139700073663840->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->17)-(139700073663840->17)",
        "source": "139700073667056->17",
        "target": "139700073663840->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->122)-(139700073663840->122)",
        "source": "139700073667056->122",
        "target": "139700073663840->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->35)-(139700073663840->35)",
        "source": "139700073667056->35",
        "target": "139700073663840->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->61)-(139700073663840->61)",
        "source": "139700073667056->61",
        "target": "139700073663840->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->212)-(139700073648032->212)",
        "source": "139700073667056->212",
        "target": "139700073648032->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667056->84)-(139700073648032->84)",
        "source": "139700073667056->84",
        "target": "139700073648032->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073648032->212)-(139700072386128->212)",
        "source": "139700073648032->212",
        "target": "139700072386128->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073648032->210)-(139700072386128->210)",
        "source": "139700073648032->210",
        "target": "139700072386128->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073648032->84)-(139700072386128->84)",
        "source": "139700073648032->84",
        "target": "139700072386128->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072386128->212)-(139700072395152->212)",
        "source": "139700072386128->212",
        "target": "139700072395152->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072386128->210)-(139700072395152->210)",
        "source": "139700072386128->210",
        "target": "139700072395152->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072386128->84)-(139700072395152->84)",
        "source": "139700072386128->84",
        "target": "139700072395152->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072395152->212)-(139700073652880->212)",
        "source": "139700072395152->212",
        "target": "139700073652880->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072395152->210)-(139700073652880->210)",
        "source": "139700072395152->210",
        "target": "139700073652880->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072395152->84)-(139700073652880->84)",
        "source": "139700072395152->84",
        "target": "139700073652880->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073652880->212)-(139700072940352->212)",
        "source": "139700073652880->212",
        "target": "139700072940352->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073652880->210)-(139700072940352->210)",
        "source": "139700073652880->210",
        "target": "139700072940352->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073652880->84)-(139700072940352->61)",
        "source": "139700073652880->84",
        "target": "139700072940352->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->196)-(139700072527904->196)",
        "source": "139700072940352->196",
        "target": "139700072527904->196",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->196)-(139700073648464->211)",
        "source": "139700072940352->196",
        "target": "139700073648464->211",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->197)-(139700072527904->197)",
        "source": "139700072940352->197",
        "target": "139700072527904->197",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->198)-(139700072527904->198)",
        "source": "139700072940352->198",
        "target": "139700072527904->198",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->199)-(139700072527904->199)",
        "source": "139700072940352->199",
        "target": "139700072527904->199",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->61)-(139700072527904->61)",
        "source": "139700072940352->61",
        "target": "139700072527904->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->210)-(139700073648464->210)",
        "source": "139700072940352->210",
        "target": "139700073648464->210",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072940352->212)-(139700073648464->212)",
        "source": "139700072940352->212",
        "target": "139700073648464->212",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072527904->196)-(139700073646496->196)",
        "source": "139700072527904->196",
        "target": "139700073646496->196",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072527904->196)-(139700072390544->204)",
        "source": "139700072527904->196",
        "target": "139700072390544->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072527904->197)-(139700073646496->197)",
        "source": "139700072527904->197",
        "target": "139700073646496->197",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072527904->198)-(139700073646496->198)",
        "source": "139700072527904->198",
        "target": "139700073646496->198",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072527904->199)-(139700073646496->199)",
        "source": "139700072527904->199",
        "target": "139700073646496->199",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072527904->61)-(139700072390544->61)",
        "source": "139700072527904->61",
        "target": "139700072390544->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072390544->204)-(139700072388528->204)",
        "source": "139700072390544->204",
        "target": "139700072388528->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388528->200)-(139700072383488->200)",
        "source": "139700072388528->200",
        "target": "139700072383488->200",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388528->201)-(139700072383488->201)",
        "source": "139700072388528->201",
        "target": "139700072383488->201",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388528->202)-(139700072383488->202)",
        "source": "139700072388528->202",
        "target": "139700072383488->202",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388528->203)-(139700072383488->203)",
        "source": "139700072388528->203",
        "target": "139700072383488->203",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072388528->204)-(139700072383488->204)",
        "source": "139700072388528->204",
        "target": "139700072383488->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072393712->205)-(139700073657680->205)",
        "source": "139700072393712->205",
        "target": "139700073657680->205",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072393712->206)-(139700073657680->206)",
        "source": "139700072393712->206",
        "target": "139700073657680->206",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072393712->207)-(139700073657680->207)",
        "source": "139700072393712->207",
        "target": "139700073657680->207",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072393712->208)-(139700073657680->208)",
        "source": "139700072393712->208",
        "target": "139700073657680->208",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072393712->209)-(139700073657680->209)",
        "source": "139700072393712->209",
        "target": "139700073657680->209",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073657680->205)-(139700072513984->205)",
        "source": "139700073657680->205",
        "target": "139700072513984->205",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073657680->206)-(139700072513984->206)",
        "source": "139700073657680->206",
        "target": "139700072513984->206",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073657680->207)-(139700072513984->207)",
        "source": "139700073657680->207",
        "target": "139700072513984->207",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073657680->208)-(139700072513984->208)",
        "source": "139700073657680->208",
        "target": "139700072513984->208",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073657680->209)-(139700072513984->209)",
        "source": "139700073657680->209",
        "target": "139700072513984->209",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072383488->200)-(139700072528384->200)",
        "source": "139700072383488->200",
        "target": "139700072528384->200",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072383488->201)-(139700072528384->201)",
        "source": "139700072383488->201",
        "target": "139700072528384->201",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072383488->202)-(139700072528384->202)",
        "source": "139700072383488->202",
        "target": "139700072528384->202",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072383488->203)-(139700072528384->203)",
        "source": "139700072383488->203",
        "target": "139700072528384->203",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072383488->204)-(139700072528384->204)",
        "source": "139700072383488->204",
        "target": "139700072528384->204",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->19)-(139700072519456->19)",
        "source": "139700073663840->19",
        "target": "139700072519456->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->19)-(139700072516336->181)",
        "source": "139700073663840->19",
        "target": "139700072516336->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->16)-(139700072519456->16)",
        "source": "139700073663840->16",
        "target": "139700072519456->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->17)-(139700072519456->17)",
        "source": "139700073663840->17",
        "target": "139700072519456->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->122)-(139700072519456->122)",
        "source": "139700073663840->122",
        "target": "139700072519456->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->113)-(139700072519456->113)",
        "source": "139700073663840->113",
        "target": "139700072519456->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->35)-(139700072519456->35)",
        "source": "139700073663840->35",
        "target": "139700072519456->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073663840->61)-(139700072516336->61)",
        "source": "139700073663840->61",
        "target": "139700072516336->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072516336->181)-(139700072528576->181)",
        "source": "139700072516336->181",
        "target": "139700072528576->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072516336->61)-(139700072528576->61)",
        "source": "139700072516336->61",
        "target": "139700072528576->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528576->181)-(139700072519792->181)",
        "source": "139700072528576->181",
        "target": "139700072519792->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528576->61)-(139700072519792->61)",
        "source": "139700072528576->61",
        "target": "139700072519792->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519792->181)-(139700072515712->181)",
        "source": "139700072519792->181",
        "target": "139700072515712->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519792->61)-(139700072515712->61)",
        "source": "139700072519792->61",
        "target": "139700072515712->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515712->181)-(139700072514512->181)",
        "source": "139700072515712->181",
        "target": "139700072514512->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514512->177)-(139700072526512->177)",
        "source": "139700072514512->177",
        "target": "139700072526512->177",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514512->178)-(139700072526512->178)",
        "source": "139700072514512->178",
        "target": "139700072526512->178",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514512->179)-(139700072526512->179)",
        "source": "139700072514512->179",
        "target": "139700072526512->179",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514512->180)-(139700072526512->180)",
        "source": "139700072514512->180",
        "target": "139700072526512->180",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514512->181)-(139700072526512->181)",
        "source": "139700072514512->181",
        "target": "139700072526512->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072529536->182)-(139700072528000->182)",
        "source": "139700072529536->182",
        "target": "139700072528000->182",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072529536->183)-(139700072528000->183)",
        "source": "139700072529536->183",
        "target": "139700072528000->183",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072529536->184)-(139700072528000->184)",
        "source": "139700072529536->184",
        "target": "139700072528000->184",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072529536->185)-(139700072528000->185)",
        "source": "139700072529536->185",
        "target": "139700072528000->185",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072529536->186)-(139700072528000->186)",
        "source": "139700072529536->186",
        "target": "139700072528000->186",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528000->182)-(139700072513600->182)",
        "source": "139700072528000->182",
        "target": "139700072513600->182",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528000->183)-(139700072513600->183)",
        "source": "139700072528000->183",
        "target": "139700072513600->183",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528000->184)-(139700072513600->184)",
        "source": "139700072528000->184",
        "target": "139700072513600->184",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528000->185)-(139700072513600->185)",
        "source": "139700072528000->185",
        "target": "139700072513600->185",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072528000->186)-(139700072513600->186)",
        "source": "139700072528000->186",
        "target": "139700072513600->186",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072526512->177)-(139700072515520->177)",
        "source": "139700072526512->177",
        "target": "139700072515520->177",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072526512->178)-(139700072515520->178)",
        "source": "139700072526512->178",
        "target": "139700072515520->178",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072526512->179)-(139700072515520->179)",
        "source": "139700072526512->179",
        "target": "139700072515520->179",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072526512->180)-(139700072515520->180)",
        "source": "139700072526512->180",
        "target": "139700072515520->180",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072526512->181)-(139700072515520->181)",
        "source": "139700072526512->181",
        "target": "139700072515520->181",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519456->16)-(139700073675312->16)",
        "source": "139700072519456->16",
        "target": "139700073675312->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519456->17)-(139700073675312->17)",
        "source": "139700072519456->17",
        "target": "139700073675312->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519456->19)-(139700073675312->19)",
        "source": "139700072519456->19",
        "target": "139700073675312->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519456->122)-(139700073675312->122)",
        "source": "139700072519456->122",
        "target": "139700073675312->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519456->113)-(139700073675312->113)",
        "source": "139700072519456->113",
        "target": "139700073675312->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072519456->35)-(139700073675312->35)",
        "source": "139700072519456->35",
        "target": "139700073675312->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->19)-(139700073644096->19)",
        "source": "139700073675312->19",
        "target": "139700073644096->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->19)-(139700073664512->114)",
        "source": "139700073675312->19",
        "target": "139700073664512->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->15)-(139700073644096->15)",
        "source": "139700073675312->15",
        "target": "139700073644096->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->16)-(139700073644096->16)",
        "source": "139700073675312->16",
        "target": "139700073644096->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->17)-(139700073644096->17)",
        "source": "139700073675312->17",
        "target": "139700073644096->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->18)-(139700073644096->18)",
        "source": "139700073675312->18",
        "target": "139700073644096->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->35)-(139700073664512->35)",
        "source": "139700073675312->35",
        "target": "139700073664512->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->40)-(139700073664512->40)",
        "source": "139700073675312->40",
        "target": "139700073664512->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->109)-(139700073664512->109)",
        "source": "139700073675312->109",
        "target": "139700073664512->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->113)-(139700073664512->113)",
        "source": "139700073675312->113",
        "target": "139700073664512->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->122)-(139700073664512->122)",
        "source": "139700073675312->122",
        "target": "139700073664512->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->123)-(139700073664512->123)",
        "source": "139700073675312->123",
        "target": "139700073664512->123",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073675312->124)-(139700073664512->124)",
        "source": "139700073675312->124",
        "target": "139700073664512->124",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->114)-(139700073667632->114)",
        "source": "139700073664512->114",
        "target": "139700073667632->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->114)-(139700072388384->121)",
        "source": "139700073664512->114",
        "target": "139700072388384->121",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->35)-(139700073667632->35)",
        "source": "139700073664512->35",
        "target": "139700073667632->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->40)-(139700073667632->40)",
        "source": "139700073664512->40",
        "target": "139700073667632->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->109)-(139700073667632->109)",
        "source": "139700073664512->109",
        "target": "139700073667632->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->113)-(139700073667632->113)",
        "source": "139700073664512->113",
        "target": "139700073667632->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->122)-(139700072388384->122)",
        "source": "139700073664512->122",
        "target": "139700072388384->122",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->123)-(139700072388384->123)",
        "source": "139700073664512->123",
        "target": "139700072388384->123",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073664512->124)-(139700072388384->124)",
        "source": "139700073664512->124",
        "target": "139700072388384->124",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667632->35)-(139700073667392->35)",
        "source": "139700073667632->35",
        "target": "139700073667392->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667632->35)-(139700072394816->115)",
        "source": "139700073667632->35",
        "target": "139700072394816->115",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667632->40)-(139700073667392->40)",
        "source": "139700073667632->40",
        "target": "139700073667392->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667632->109)-(139700073667392->109)",
        "source": "139700073667632->109",
        "target": "139700073667392->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667632->113)-(139700072394816->113)",
        "source": "139700073667632->113",
        "target": "139700072394816->113",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667632->114)-(139700072394816->114)",
        "source": "139700073667632->114",
        "target": "139700072394816->114",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667392->40)-(139700072391216->40)",
        "source": "139700073667392->40",
        "target": "139700072391216->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667392->35)-(139700072391216->35)",
        "source": "139700073667392->35",
        "target": "139700072391216->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073667392->109)-(139700072391216->109)",
        "source": "139700073667392->109",
        "target": "139700072391216->109",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072391216->40)-(139700072522336->40)",
        "source": "139700072391216->40",
        "target": "139700072522336->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072391216->35)-(139700072522336->35)",
        "source": "139700072391216->35",
        "target": "139700072522336->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072391216->109)-(139700072522336->84)",
        "source": "139700072391216->109",
        "target": "139700072522336->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->35)-(139700072515184->35)",
        "source": "139700072522336->35",
        "target": "139700072515184->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->35)-(139700072517872->39)",
        "source": "139700072522336->35",
        "target": "139700072517872->39",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->33)-(139700072515184->33)",
        "source": "139700072522336->33",
        "target": "139700072515184->33",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->34)-(139700072515184->34)",
        "source": "139700072522336->34",
        "target": "139700072515184->34",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->88)-(139700072515184->88)",
        "source": "139700072522336->88",
        "target": "139700072515184->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->84)-(139700072515184->84)",
        "source": "139700072522336->84",
        "target": "139700072515184->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072522336->40)-(139700072517872->40)",
        "source": "139700072522336->40",
        "target": "139700072517872->40",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515184->35)-(139700072385264->35)",
        "source": "139700072515184->35",
        "target": "139700072385264->35",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515184->35)-(139700072397600->90)",
        "source": "139700072515184->35",
        "target": "139700072397600->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515184->33)-(139700072385264->33)",
        "source": "139700072515184->33",
        "target": "139700072385264->33",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515184->34)-(139700072385264->34)",
        "source": "139700072515184->34",
        "target": "139700072385264->34",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515184->88)-(139700072397600->88)",
        "source": "139700072515184->88",
        "target": "139700072397600->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072515184->84)-(139700072397600->84)",
        "source": "139700072515184->84",
        "target": "139700072397600->84",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072397600->90)-(139700072514272->90)",
        "source": "139700072397600->90",
        "target": "139700072514272->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072397600->88)-(139700072514272->88)",
        "source": "139700072397600->88",
        "target": "139700072514272->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072397600->84)-(139700072514272->61)",
        "source": "139700072397600->84",
        "target": "139700072514272->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->25)-(139700073659408->25)",
        "source": "139700072514272->25",
        "target": "139700073659408->25",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->25)-(139700072391936->89)",
        "source": "139700072514272->25",
        "target": "139700072391936->89",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->26)-(139700073659408->26)",
        "source": "139700072514272->26",
        "target": "139700073659408->26",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->27)-(139700073659408->27)",
        "source": "139700072514272->27",
        "target": "139700073659408->27",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->28)-(139700073659408->28)",
        "source": "139700072514272->28",
        "target": "139700073659408->28",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->61)-(139700073659408->61)",
        "source": "139700072514272->61",
        "target": "139700073659408->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->88)-(139700072391936->88)",
        "source": "139700072514272->88",
        "target": "139700072391936->88",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072514272->90)-(139700072391936->90)",
        "source": "139700072514272->90",
        "target": "139700072391936->90",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659408->25)-(139700072514944->25)",
        "source": "139700073659408->25",
        "target": "139700072514944->25",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659408->25)-(139700073651824->137)",
        "source": "139700073659408->25",
        "target": "139700073651824->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659408->26)-(139700072514944->26)",
        "source": "139700073659408->26",
        "target": "139700072514944->26",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659408->27)-(139700072514944->27)",
        "source": "139700073659408->27",
        "target": "139700072514944->27",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659408->28)-(139700072514944->28)",
        "source": "139700073659408->28",
        "target": "139700072514944->28",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659408->61)-(139700073651824->61)",
        "source": "139700073659408->61",
        "target": "139700073651824->61",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073651824->137)-(139700072396832->137)",
        "source": "139700073651824->137",
        "target": "139700072396832->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072396832->133)-(139700072389776->133)",
        "source": "139700072396832->133",
        "target": "139700072389776->133",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072396832->134)-(139700072389776->134)",
        "source": "139700072396832->134",
        "target": "139700072389776->134",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072396832->135)-(139700072389776->135)",
        "source": "139700072396832->135",
        "target": "139700072389776->135",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072396832->136)-(139700072389776->136)",
        "source": "139700072396832->136",
        "target": "139700072389776->136",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072396832->137)-(139700072389776->137)",
        "source": "139700072396832->137",
        "target": "139700072389776->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072392656->138)-(139700073653072->138)",
        "source": "139700072392656->138",
        "target": "139700073653072->138",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072392656->139)-(139700073653072->139)",
        "source": "139700072392656->139",
        "target": "139700073653072->139",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072392656->140)-(139700073653072->140)",
        "source": "139700072392656->140",
        "target": "139700073653072->140",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072392656->141)-(139700073653072->141)",
        "source": "139700072392656->141",
        "target": "139700073653072->141",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072392656->142)-(139700073653072->142)",
        "source": "139700072392656->142",
        "target": "139700073653072->142",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653072->138)-(139700072387136->138)",
        "source": "139700073653072->138",
        "target": "139700072387136->138",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653072->139)-(139700072387136->139)",
        "source": "139700073653072->139",
        "target": "139700072387136->139",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653072->140)-(139700072387136->140)",
        "source": "139700073653072->140",
        "target": "139700072387136->140",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653072->141)-(139700072387136->141)",
        "source": "139700073653072->141",
        "target": "139700072387136->141",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073653072->142)-(139700072387136->142)",
        "source": "139700073653072->142",
        "target": "139700072387136->142",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072389776->133)-(139700071011024->133)",
        "source": "139700072389776->133",
        "target": "139700071011024->133",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072389776->134)-(139700071011024->134)",
        "source": "139700072389776->134",
        "target": "139700071011024->134",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072389776->135)-(139700071011024->135)",
        "source": "139700072389776->135",
        "target": "139700071011024->135",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072389776->136)-(139700071011024->136)",
        "source": "139700072389776->136",
        "target": "139700071011024->136",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072389776->137)-(139700071011024->137)",
        "source": "139700072389776->137",
        "target": "139700071011024->137",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073644096->15)-(139700072382672->15)",
        "source": "139700073644096->15",
        "target": "139700072382672->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073644096->16)-(139700072382672->16)",
        "source": "139700073644096->16",
        "target": "139700072382672->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073644096->17)-(139700072382672->17)",
        "source": "139700073644096->17",
        "target": "139700072382672->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073644096->18)-(139700072382672->18)",
        "source": "139700073644096->18",
        "target": "139700072382672->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073644096->19)-(139700072382672->19)",
        "source": "139700073644096->19",
        "target": "139700072382672->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072384784->44)-(139700073659072->44)",
        "source": "139700072384784->44",
        "target": "139700073659072->44",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072384784->45)-(139700073659072->45)",
        "source": "139700072384784->45",
        "target": "139700073659072->45",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072384784->46)-(139700073659072->46)",
        "source": "139700072384784->46",
        "target": "139700073659072->46",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072384784->47)-(139700073659072->47)",
        "source": "139700072384784->47",
        "target": "139700073659072->47",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072384784->48)-(139700073659072->48)",
        "source": "139700072384784->48",
        "target": "139700073659072->48",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659072->44)-(139700073648944->44)",
        "source": "139700073659072->44",
        "target": "139700073648944->44",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659072->45)-(139700073648944->45)",
        "source": "139700073659072->45",
        "target": "139700073648944->45",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659072->46)-(139700073648944->46)",
        "source": "139700073659072->46",
        "target": "139700073648944->46",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659072->47)-(139700073648944->47)",
        "source": "139700073659072->47",
        "target": "139700073648944->47",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700073659072->48)-(139700073648944->48)",
        "source": "139700073659072->48",
        "target": "139700073648944->48",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072382672->15)-(139700071011168->15)",
        "source": "139700072382672->15",
        "target": "139700071011168->15",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072382672->16)-(139700071011168->16)",
        "source": "139700072382672->16",
        "target": "139700071011168->16",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072382672->17)-(139700071011168->17)",
        "source": "139700072382672->17",
        "target": "139700071011168->17",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072382672->18)-(139700071011168->18)",
        "source": "139700072382672->18",
        "target": "139700071011168->18",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    },
    {
        "id": "(139700072382672->19)-(139700071011168->19)",
        "source": "139700072382672->19",
        "target": "139700071011168->19",
        "animated": true,
        "data": {
            "is_column_link": true
        }
    }
];
