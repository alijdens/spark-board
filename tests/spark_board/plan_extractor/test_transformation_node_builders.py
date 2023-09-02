import pytest
from spark_board.plan_extractor.transformation_node_builders import build_dag_from_java_object
from spark_board.plan_extractor.transformation_node_builders.repository import create_default
from spark_board.plan_extractor.transformations_dag import TransformationType


class MockNode:
    """Very simple object that mocks the minimal interface of a Spark node
    that we access when parsing an unknown transformation."""

    class EmptyIterator:
        def iterator(self) -> "MockNode.EmptyIterator":
            return self

        def hasNext(self) -> bool:
            return False

    class MockClass:
        def getSimpleName(self) -> str:
            return "mockClass"

    def nodeName(self) -> str:
        # return a node type that does not exist in Spark
        return "mockNode"
    
    def schemaString(self) -> str:
        return "mock schema string"
    
    def output(self) -> 'MockNode.EmptyIterator':
        return MockNode.EmptyIterator()

    def children(self) -> 'MockNode.EmptyIterator':
        return MockNode.EmptyIterator()

    def toString(self) -> str:
        return "mock node contents"

    def getClass(self) -> 'MockNode.MockClass':
        
        return MockNode.MockClass()


def test_unknown_transformations_are_properly_handled() -> None:
    dag = build_dag_from_java_object(node=MockNode(), repository=create_default().set_allow_unknown(True))

    assert dag.type == TransformationType.Unknown
    assert dag.metadata["inferred_type"] == "mockClass"
    assert dag.metadata["representation"] == "mock node contents"
    assert dag.children == []


def test_unknown_transformations_are_rejected_if_requested() -> None:
    with pytest.raises(NotImplementedError) as e:
        build_dag_from_java_object(node=MockNode(), repository=create_default().set_allow_unknown(False))

    assert f"Transformation not supported: 'mockNode'" == str(e.value)
