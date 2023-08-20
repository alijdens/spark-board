from py4j.java_gateway import JavaObject
from typing import Generator


def iterate_java_object(iterable: JavaObject) -> Generator[JavaObject, None, None]:
    it = iterable.iterator()
    while it.hasNext():
        yield it.next()
