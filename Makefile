.ONESHELL:
.PHONY: run
.PHONY: conda_remove
.PHONY: conda_create

run:
	mkdocs serve

env_remove:
	conda env remove -n hummingbot-site

env_create:
	conda env create -f environment.yml
