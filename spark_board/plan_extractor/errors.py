class RTFMException(Exception):
    def __init__(self, msg: str, link: str) -> None:
        super().__init__(msg)
        self.link = link
        self.msg = msg

    def __str__(self) -> str:
        return f"\n{self.msg}\nSee {self.link} for more information."
