from py4j.java_gateway import JavaObject
from typing import List, Dict, Any, Generator, Optional, Tuple

from ..transformations_dag import JoinCondition, Metadata, TransformationColumn, TransformationNode, TransformationType

from .repository import Repository, create_default


def build_dag_from_java_object(node: JavaObject, repository: Repository=create_default()) -> TransformationNode:
    """
    Builds a DAG from the PySpark DataFrame's root java object.
    
    :param      node:                           The root java node of the dataframe to be transformed into a DAG.
    :param      repository:                     A repository of specific transformation node builders.
    :returns:   The DAG representing the DataFrame.
    """
    builder = repository.get_builder(node.nodeName())
    return builder.build(node, lambda java_node: build_dag_from_java_object(java_node, repository))
