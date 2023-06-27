"""
We use the repository README as the package long description. This is done by reading the
README file and applying some transformations to it.
However, this is not so straightforward because the README file contains relative links,
which Github transforms to the corresponding absolute links. But when PyPI renders the
links, they are broken because they are relative to PyPI and not Github.
"""

import re
from pathlib import Path
from typing import Match


# regular expression to match Markdown links
MD_LINK_RE = re.compile(r"\[(.*?)\]\((?!https://)(.*?)\)")


def process_readme(path: Path, base_url: str) -> str:
    """Read the contents of the given README markdown file applyting the required
    transformations and returns it.
    `base_url` defines the base url to use prefix relative links."""
    
    data = path.read_text()    
    return fix_links(data, base_url)


def fix_links(data: str, base_url: str) -> str:
    """Relative links work on the repository but will be broken in PyPI. This function will
    convert them into absolute links."""

    def replacer(match: Match[str]) -> str:
        link = match.group(2)
        if link.startswith("./"):
            link = link[2:]

        # recreate the link but with the base_url prepended
        return f"[{match.group(1)}]({base_url + link})"

    return MD_LINK_RE.sub(replacer, data)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--rel-links-base", help="Base url to use for relative links", required=True)
    parser.add_argument("--file", help="Path to the README file", required=True)
    parser.add_argument("--output", help="Path to the output file", required=True)

    args = parser.parse_args()

    data = process_readme(
        path=Path(args.file),
        base_url=args.rel_links_base,
    )
    Path(args.output).write_text(data)
