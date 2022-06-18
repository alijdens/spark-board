from plan_extractor.output_capturer import OutputCapturer


class ExplainGenerator:
    def __init__(self, df):
        self.df = df.select('*')
    
    def generate_all(self):
        with OutputCapturer() as capturer:
            self.df.explain(True)
            return capturer.getOutput()

    def generate(self):
        all_output = self.generate_all()
        only_parsed_plan = ""
        header_was_seen = False
        for line in iter(all_output.splitlines()):
            if line == "== Parsed Logical Plan ==":
                header_was_seen = True
                continue

            if line == "" and header_was_seen:
                break

            if header_was_seen:
                only_parsed_plan += line
                only_parsed_plan += '\n'

        return only_parsed_plan
