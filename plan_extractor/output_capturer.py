import sys


class OutputCapturer:
  def __init__(self):
    self.captured = ""

  def __enter__(self):
    self.real_stdout = sys.stdout
    sys.stdout = self
    return self

  def __exit__(self, etype, value, traceback):
    sys.stdout = self.real_stdout

  def getOutput(self):
    return self.captured

  def write(self, message):
    self.captured += message
