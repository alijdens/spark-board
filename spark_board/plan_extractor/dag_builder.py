from py4j.java_gateway import JavaObject
from pyspark.sql import DataFrame
from typing import List, Dict, Any, Generator, Optional

from .dag_simplification import simplify, default_simplifiers
from .dag_simplification.dag_simplifier import DagSimplifier
from .transformations_dag import TransformationNode
from .transformation_node_builders import build_dag_from_java_object
from .transformation_node_builders.repository import Repository as TnbRepository, create_default
from .py4j_utils import iterate_java_object


def build_dag(df: DataFrame, dag_simplifiers: List[DagSimplifier] = default_simplifiers(), tnb_repository: TnbRepository=create_default()) -> TransformationNode:
    """
    Builds a DAG from a PySpark's DataFrame.
    
    :param    df:               The PySpark's DataFrame.
    :param    dag_simplifiers:  The list of DAG simplifiers to be applied.
    :param    tnb_repository:   A repository of specific transformation node builders.
    :returns: The DAG for the passed PySpark's DataFrame.
    """
    first_child = _get_last_transformation(df)
    raw_dag = build_dag_from_java_object(node=first_child, repository=tnb_repository)
    return simplify(raw_dag, dag_simplifiers)


def _get_last_transformation(df: DataFrame) -> JavaObject:
    # we add a dummy projection of all columns to Spark resolves the next
    # transformations in the plan. Otherwise, the columns will be "unresolved"
    df = df.select("*")
    root = df._jdf.queryExecution().logical()

    # skip the 'Project [*]' node
    return next(iterate_java_object(root.children()))
