from pathlib import Path
from scripts import readme_renderer


def test_fix_links_without_any_link() -> None:
    readme_renderer.fix_links("some text", "http://base.url/") == "some text"


def test_fix_links_does_not_modify_absolute_links() -> None:
    readme_renderer.fix_links(
        "some text [link](http://absolute.url)", "http://base.url/"
    ) == "some text [link](http://absolute.url)"
    
    
def test_fix_links_preprends_the_base_url_to_the_relative_links() -> None:
    readme_renderer.fix_links(
        "some text [link](./relative/link)", "http://base.url/"
    ) == "some text [link](http://base.url/relative/link)"


def test_with_readme_file() -> None:
    file = Path(__file__).parent / "test_readme.md"

    expected = """# Title

This is a [relative Link](http://base.url/path/to/file) but this is an [absolute link](https://example.com).
Only the relative link will be converted.

## [Relative Link in the title](http://base.url/my/file.png)

Here we write some text and then we add a link to a [relative link](http://base.url/path/to/file) and
another to an [absolute link](https://google.com).
"""

    assert readme_renderer.process_readme(file, "http://base.url/") == expected
