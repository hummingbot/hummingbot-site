def on_page_markdown(markdown, config, **kwargs):
    return markdown.replace("{{ botcamp_url }}", config.extra["botcamp_url"])
