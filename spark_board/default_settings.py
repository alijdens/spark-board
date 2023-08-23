"""
Defines the class that allows spark-board users to set the default values for
the website settings.
"""

import dataclasses


@dataclasses.dataclass
class DefaultSettings:
    """Default settings for the HTML DAG renderer. The settings can be changed through the UI, but
    here we only define the default value they'll take when the website loads."""

    # enable or disable all "bouncy" node animations
    animationEnabled: bool = True

    # nodes are animated (pull linked nodes) when dragged with the mouse on the screen
    animationEnabledOnDrag: bool = True

    # Data source nodes will appear multiple times on each used transformation that
    # accesses it.
    duplicateDataSources: bool = False

    # whenever a node's size is changed, all the DAG layout is reacommodated (but still
    # respecting the nodes that were manually placed).
    organizeNodesOnResize: bool = False

    # inverts the DAG layout (from data source nodes to last transformation or the
    # other way around).
    invertDag: bool = True
