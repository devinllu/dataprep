import os
import pystache
from typing import Any, Dict
from .page_data import PageData


class PageTemplate:
    htmlConfig: object
    template_directory = os.path.realpath(os.path.join(os.path.dirname(__file__), "..", "layout"))

    def __init__(self, database_name: str) -> None:
        self.database_name = database_name

    @staticmethod
    def get_root_path():
        return ""

    @staticmethod
    def get_root_path_to_home():
        return os.path.realpath(os.path.join(os.path.dirname(__file__), ".."))

    def write_data(
        self,
        page_data: PageData,
        output_file: str,
        page_script: str,
        pagination_configs: Dict[str, Any],
        root_path: str = "",
    ):
        """
        Render the html pages using template files for each section of the database
        """
        page_template = open(
            os.path.realpath(os.path.join(self.template_directory, page_data.template_name))
        ).read()

        page_scope = {
            "to_file_name": "true",
            "database_name": self.database_name,
            "pagination_enabled": "true",
            "display_num_rows": "true",
            "data_table_config": {},
        }
        for key, value in pagination_configs.items():
            page_scope["data_table_config"][key] = value
        page_scope.update(page_data.scope)
        html_template = pystache.render(page_template, page_scope)

        file = open(output_file, "w", encoding="utf-8")
        file.write(html_template)
        file.close()
        contents = open(output_file, "r", encoding="utf-8")
        fill = contents.read()

        tmpl = open(
            os.path.realpath(os.path.join(self.template_directory, "container.html"))
        ).read()
        container_scope = {
            "database_name": self.database_name,
            "content": fill,
            "page_script": page_script,
            "root_path": root_path or PageTemplate.get_root_path(),
            "root_path_to_home": PageTemplate.get_root_path_to_home(),
        }
        html = pystache.render(tmpl, container_scope)
        open(output_file, "w", encoding="utf-8").write(html)
        return output_file
