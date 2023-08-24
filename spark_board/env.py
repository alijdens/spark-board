import os


def allow_unknown_transformations() -> bool:
    """If "true", the graph will include nodes for transformations that are not
    recognized by spark-board. If "false", unkonwn transformations will raise
    errors. We may want to disable this in testing environments to find unsupported
    transformations, but in production we probably want to show the visualization
    anyway (whith possibly a couple of unkown transformations with a default
    representation).
    """

    return _get_boolean("SPARK_BOARD_ALLOW_UNKNOWN_TRANSFORMATIONS", default=True)


def _get_boolean(name: str, default: bool) -> bool:
    """Read a boolean value from the environment variable `name`. If the value is not set,
    returns the `default` value."""

    value = os.environ.get(name)
    if value is None:
        return default

    return value.lower() in ("true", "1", "yes")
