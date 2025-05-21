import re

def on_page_markdown(markdown, **kwargs):
    markdown = re.sub(r'<color=(#[0-9a-fA-F]{3,8})>', r'<span style="color:\1">', markdown)
    return markdown.replace("</color>", "</span>")