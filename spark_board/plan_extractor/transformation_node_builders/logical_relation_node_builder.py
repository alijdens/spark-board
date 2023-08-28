from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


class LogicalRelationNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["type"] = "relation"
        metadata["file_format"] = node.relation().fileFormat().toString()

        if node.relation().getClass().getSimpleName() == "HadoopFsRelation":
            metadata["location_files"] = [
                path.toString() for path in
                iterate_java_object(node.relation().location().rootPaths())
            ]
            metadata["partition_schema"] = node.relation().location().partitionSchema().toString()

        catalog_table_option = node.catalogTable()
        if not catalog_table_option.isEmpty():
            catalog_table = catalog_table_option.get()
            metadata["database"] = catalog_table.database()
            metadata["table"] = catalog_table.identifier().table()
            metadata["partition_columns"] = [name for name in iterate_java_object(catalog_table.partitionColumnNames())]
            metadata["storage"] = catalog_table.storage().toString()

    def _get_type(self) -> TransformationType:
        return TransformationType.Relation

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 0
