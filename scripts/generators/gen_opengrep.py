#!/usr/bin/env python3
"""
Generator for Semgrep / Opengrep security & standards rules.
Enforces OWASP ASVS v5.0, XSS prevention, JWT cookie storage, and Strapi injection guards.
"""

import os
import sys

def generate_opengrep_rules(output_path):
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    content = """rules:
  - id: r-sec-dangerously-set-inner-html
    languages: [typescript, javascript, tsx, jsx]
    severity: ERROR
    message: "R-SEC-001 (ASVS V5 / CWE-79): React bileşenlerinde 'dangerouslySetInnerHTML' kullanımı XSS riski oluşturur. İçerik mutlak surette DOMPurify.sanitize() ile temizlenmelidir."
    patterns:
      - pattern: |
          <$TAG ... dangerouslySetInnerHTML={{ __html: $VAL }} ... />
      - pattern-not: |
          <$TAG ... dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(...) }} ... />

  - id: r-auth-jwt-in-localstorage
    languages: [typescript, javascript, tsx, jsx]
    severity: ERROR
    message: "R-AUTH-002 (ASVS V3 / CWE-384): JWT veya oturum tokenları asla localStorage veya sessionStorage içinde saklanamaz. httpOnly, Secure, SameSite çerezler kullanılmalıdır."
    pattern-either:
      - pattern: localStorage.setItem($KEY, ...)
      - pattern: sessionStorage.setItem($KEY, ...)
    paths:
      include:
        - "*token*"
        - "*jwt*"
        - "*auth*"

  - id: r-sec-client-secret-leak
    languages: [typescript, javascript, tsx, jsx]
    severity: ERROR
    message: "R-SEC-003 (ASVS V14 / CWE-200): Next.js istemci paketine backend gizli anahtarları sızdırılamaz. NEXT_PUBLIC_ ön eki almayan gizli anahtarlar yalnızca Server Components veya Server Actions içinde okunmalıdır."
    patterns:
      - pattern: process.env.$SECRET
      - metavariable-regex:
          metavariable: $SECRET
          regex: ^(STRAPI_ADMIN_TOKEN|DATABASE_PASSWORD|JWT_SECRET|PRIVATE_KEY)
    paths:
      exclude:
        - "**/server/**"
        - "**/*.server.ts"
        - "**/app/api/**"

  - id: r-strapi-raw-sql-injection
    languages: [typescript, javascript]
    severity: ERROR
    message: "R-INJ-001 (ASVS V5 / CWE-89): Strapi servislerinde Knex raw sorgusu içinde dize birleştirme yapılamaz. Parametreli bağlama (bindings) zorunludur."
    patterns:
      - pattern-either:
          - pattern: strapi.db.connection.raw($STR + ...)
          - pattern: strapi.db.connection.raw(`...${...}...`)
          - pattern: knex.raw($STR + ...)
          - pattern: knex.raw(`...${...}...`)

  - id: r-sec-empty-catch
    languages: [typescript, javascript, tsx, jsx]
    severity: WARNING
    message: "R-SEC-005 (CWE-390): Boş catch blokları hataların yutulmasına ve sistem durumunun belirsiz kalmasına yol açar. Hata loglanmalı veya üst katmana iletilmelidir."
    pattern: |
      try {
        ...
      } catch ($ERR) {
      }

  - id: r-react-no-array-index-key
    languages: [typescript, javascript, tsx, jsx]
    severity: WARNING
    message: "R-REACT-004 (React Performance): Liste render işlemlerinde dizi indeksi 'key' olarak kullanılamaz; kararlı bir id kullanılmalıdır."
    pattern: |
      $ARR.map(($ITEM, $INDEX) => <$TAG ... key={$INDEX} ... />)
"""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[OK] Generated Opengrep/Semgrep rules at: {output_path}")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else ".agents/rules/semgrep/strapi-react-rules.yaml"
    generate_opengrep_rules(target)
