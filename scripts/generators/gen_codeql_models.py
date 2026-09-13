#!/usr/bin/env python3
"""
Generator for CodeQL Dataflow / Taint Tracking models for JavaScript / TypeScript.
Maps sources (HTTP query, body), sinks (dangerouslySetInnerHTML, eval, raw SQL), and sanitizers.
"""

import os
import sys

def generate_codeql_models(output_path):
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    content = """extensions:
  - addsTo:
      pack: codeql/javascript-all
      extensible: sourceModel
    data:
      - ["req", "Member[body]", "remote"]
      - ["req", "Member[query]", "remote"]
      - ["req", "Member[params]", "remote"]
      - ["searchParams", "Member[get]", "remote"]

  - addsTo:
      pack: codeql/javascript-all
      extensible: sinkModel
    data:
      - ["JSXAttribute[dangerouslySetInnerHTML]", "Argument[0]", "xss"]
      - ["strapi.db.connection", "Member[raw].Argument[0]", "sql-injection"]
      - ["knex", "Member[raw].Argument[0]", "sql-injection"]

  - addsTo:
      pack: codeql/javascript-all
      extensible: neutralModel
    data:
      - ["DOMPurify", "Member[sanitize]"]
      - ["strapi.utils.sanitize.contentAPI", "Member[output]"]
"""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[OK] Generated CodeQL model at: {output_path}")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else ".agents/codeql/models.yml"
    generate_codeql_models(target)
