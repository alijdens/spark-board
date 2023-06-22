from py4j.java_gateway import JavaObject
from .transformations_dag import TransformationNode
from .transformation_node_builders import build_dag_from_java_object
from typing import List, Dict, Any, Generator, Optional
from pyspark.sql import DataFrame
from .py4j_utils import iterate_java_object


def build_dag(df: DataFrame) -> TransformationNode:
    first_child = _get_last_transformation(df)
    return build_dag_from_java_object(node=first_child)


def _get_last_transformation(df: DataFrame) -> JavaObject:
    # we add a dummy projection of all columns to Spark resolves the next
    # transformations in the plan. Otherwise, the columns will be "unresolved"
    df = df.select("*")
    root = df._jdf.queryExecution().logical()

    # skip the 'Project [*]' node
    return next(iterate_java_object(root.children()))
