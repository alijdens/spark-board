import pytest
from typing import List
from spark_board.plan_extractor.transformation_node_builders import build_dag_from_java_object
from spark_board.plan_extractor.transformation_node_builders.transformation_node_builder import TransformationNodeBuilder
from spark_board.plan_extractor.transformation_node_builders.unknown_node_builder import UnknownNodeBuilder
from spark_board.plan_extractor.transformation_node_builders.project_node_builder import ProjectNodeBuilder
from spark_board.plan_extractor.transformation_node_builders.repository import create_default, create_empty, create_strict
from spark_board.plan_extractor.transformations_dag import TransformationType


def test_empty_repository_doesnt_have_project_builder() -> None:
    repository = create_empty()

    project_node_builder = repository.get_builder("Project")
    assert isinstance(project_node_builder, UnknownNodeBuilder)


def test_default_repository_has_project_builder() -> None:
    repository = create_default()

    project_node_builder = repository.get_builder("Project")
    assert isinstance(project_node_builder, ProjectNodeBuilder)


def test_strict_repository_throws_exception_for_unknown_transformation_name() -> None:
    repository = create_strict()

    with pytest.raises(NotImplementedError) as e:
        repository.get_builder("Zaraza")

    assert f"Transformation not supported: 'Zaraza'" == str(e.value)


def test_strict_repository_has_project_builder() -> None:
    repository = create_strict()

    project_node_builder = repository.get_builder("Project")
    assert isinstance(project_node_builder, ProjectNodeBuilder)


def test_default_repository_doesnt_throw_exception_for_unknown_transformation_name() -> None:
    repository = create_default()

    project_node_builder = repository.get_builder("Zaraza")
    assert isinstance(project_node_builder, UnknownNodeBuilder)


def test_set_custom_logic_for_unknown_transformation_name() -> None:
    def _track_name_and_return_unknown(name: str, tracking_list: List[str]) -> TransformationNodeBuilder:
        tracking_list.append(name)
        return UnknownNodeBuilder()

    unknown_transformations: List[str] = []
    repository = create_empty().with_default_builder(lambda name: _track_name_and_return_unknown(name, unknown_transformations))
    builder = repository.get_builder("Zaraza")
    assert "Zaraza" in unknown_transformations


def test_set_custom_node_builder() -> None:
    class TestNodeBuilder(TransformationNodeBuilder):
        pass

    repository = create_empty().add_builder("Test", TestNodeBuilder())
    builder = repository.get_builder("Test")
    assert isinstance(builder, TestNodeBuilder)
