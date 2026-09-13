#!/usr/bin/env python3
"""
Generator for .eslintrc.json enforcing TypeScript strictness,
React Hooks integrity, and Accessibility rules.
"""

import json
import sys

def generate_eslint_config(output_path):
    config = {
        "env": {
            "browser": True,
            "es2024": True,
            "node": True
        },
        "extends": [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "plugin:jsx-a11y/recommended",
            "plugin:security/recommended"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": True
            },
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "@typescript-eslint",
            "react",
            "react-hooks",
            "jsx-a11y",
            "security"
        ],
        "rules": {
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/explicit-function-return-type": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "no-console": ["warn", { "allow": ["warn", "error"] }],
            "security/detect-object-injection": "off",
            "jsx-a11y/anchor-is-valid": "error"
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        }
    }
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2, ensure_ascii=False)
    print(f"[OK] Generated ESLint config at: {output_path}")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else ".eslintrc.json"
    generate_eslint_config(target)
