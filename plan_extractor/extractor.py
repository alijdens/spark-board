from plan_extractor.explain_parser import ExplainParser
from plan_extractor.explain_generator import ExplainGenerator


class PlanExtractor:
    def __init__(self, df):
        self.generator = ExplainGenerator(df)
        self.parser = ExplainParser()
    
    def extract(self):
        explain_str = self.generator.generate()
        return self.parser.parse(explain_str)
