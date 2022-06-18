# -*- coding: utf-8 -*-

from .context import plan_extractor
from plan_extractor.explain_parser import ExplainParser

import unittest


class ExplainParserTestSuite(unittest.TestCase):
    """ExplainParser test cases."""

    def test_explain_parser_parse(self):
        explain_str_test = """
'Project [*]
+- Filter (nationality#24 = Argentina)
   +- Project [long_name#19, player_positions#32, nationality#24]
      +- Relation [short_name#18,long_name#19,player_positions#32,nationality#24] csv
"""
        expected_tree_sexp = "(source_file (transformation (prefix) (filter (condition (column (column_name) (number)) (operator) (literal)))) (transformation (prefix) (project (columns (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number))))) (transformation (prefix) (relation (columns (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number))) (file_format (literal)))))"
        self.parse_and_assert(explain_str_test, expected_tree_sexp)

    def test_explain_parser_parse_2(self):
        explain_str_test = """
'Project [*]
+- Project [firstname#0, lastname#2]
   +- Filter (gender#4 = M)
      +- Project [firstname#0, lastname#2, gender#4]
         +- LogicalRDD [firstname#0, middlename#1, lastname#2, id#3, gender#4], false
"""
        expected_tree_sexp = "(source_file (transformation (prefix) (project (columns (column (column_name) (number)) (column (column_name) (number))))) (transformation (prefix) (filter (condition (column (column_name) (number)) (operator) (literal)))) (transformation (prefix) (project (columns (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number))))) (transformation (prefix) (rdd (columns (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number))) (boolean))))"
        self.parse_and_assert(explain_str_test, expected_tree_sexp)

    def parse_and_assert(self, explain_str, expected_tree_sexp):
        parser = ExplainParser()
        tree = parser.parse(explain_str)
        got_sexp = tree.root_node.sexp()
        assert got_sexp == expected_tree_sexp, f'Got: [{got_sexp}] vs Expected: [{expected_tree_sexp}]'


if __name__ == '__main__':
    unittest.main()
