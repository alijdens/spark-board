# -*- coding: utf-8 -*-

from .context import plan_extractor
from plan_extractor.output_capturer import OutputCapturer

import unittest


class OutputCapturerTestSuite(unittest.TestCase):
    """OutputCapturer test cases."""

    def test_output_capturer_redirects_sysout_to_string(self):
        with OutputCapturer() as oc:
            print("SomeString")
            captured = oc.getOutput()

        assert captured == "SomeString\n"


if __name__ == '__main__':
    unittest.main()
