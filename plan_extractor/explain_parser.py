from tree_sitter import Language, Parser


class ExplainParser:
    def __init__(self):
        Language.build_library(
            # Store the library in the `build` directory
            'build/my-languages.so',

            # Include one or more languages
            [
                './tree-sitter-spark-explain'
            ]
        )

        PYSPARK_EXPLAIN_LANGUAGE = Language('build/my-languages.so', 'PYSPARK_EXPLAIN')
        self.parser = Parser()
        self.parser.set_language(PYSPARK_EXPLAIN_LANGUAGE)


    def parse(self, explain_str):
        return self.parser.parse(bytes(explain_str, "utf8"))
        