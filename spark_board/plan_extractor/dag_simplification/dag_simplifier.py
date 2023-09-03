from ..transformations_dag import TransformationNode


class DagSimplifier(object):
    """
    The DAG Simplifiers detect certain pattern in a DAG, and map them to
    a simplified version of it.
    For example, four filters in a row could be simplified as one filter
    with four conditions.
    """

    def can_apply(self, dag: TransformationNode) -> bool:
        """Determines whether a pattern can be simplified by this simplifier or not"""
        raise NotImplementedError("Abstract method")
    
    def apply(self, original: TransformationNode) -> TransformationNode:
        """Returns a simplified version of the original DAG"""
        raise NotImplementedError("Abstract method")
