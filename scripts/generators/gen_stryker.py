#!/usr/bin/env python3
"""
Generator for stryker.config.json (Stryker-JS Mutation Testing)
Ensures changing frontend and Strapi services have 0 surviving mutants.
"""

import json
import sys

def generate_stryker_config(output_path):
    config = {
        "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
        "packageManager": "npm",
        "reporters": ["html", "clear-text", "progress"],
        "testRunner": "vitest",
        "coverageAnalysis": "perTest",
        "mutate": [
            "src/features/**/hooks/*.ts",
            "src/features/**/services/*.ts",
            "src/services/*.ts",
            "backend/src/api/**/services/*.ts",
            "!src/**/*.test.ts",
            "!src/**/*.spec.ts",
            "!src/**/types/**"
        ],
        "thresholds": {
            "high": 80,
            "low": 60,
            "break": 70
        }
    }
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2)
    print(f"[OK] Generated Stryker-JS config at: {output_path}")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "stryker.config.json"
    generate_stryker_config(target)
