#!/usr/bin/env python3
"""
Generator: gen_traceability.py
Reads .agents/rules_registry.yaml to generate a comprehensive Standards Traceability Matrix.
Outputs:
  - docs/TRACEABILITY_MATRIX.md (Auditor-ready Markdown report)
  - docs/traceability_matrix.csv (Machine-readable spreadsheet)
"""

import os
import csv
import yaml

def load_yaml(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

def generate_traceability(rules):
    rows = []
    
    standard_families = [
        ("asvs", "OWASP ASVS v5.0"),
        ("iso25010", "ISO/IEC 25010:2023"),
        ("cwe", "MITRE CWE"),
        ("owasp_top10", "OWASP Top 10:2025"),
        ("owasp_api10", "OWASP API Top 10:2023"),
        ("kvkk", "KVKK / GDPR"),
        ("wcag", "W3C WCAG 2.2 AA"),
        ("ssdf", "NIST SP 800-218 SSDF")
    ]
    
    for rule in rules:
        r_id = rule.get("id")
        text = rule.get("text")
        severity = rule.get("severity")
        owner = rule.get("owner")
        enforced_by = rule.get("enforced_by")
        fixture_proven = "Yes" if rule.get("fixture_proven") else "No"
        standards = rule.get("standards", {})
        
        has_any_standard = False
        for key, fam_name in standard_families:
            items = standards.get(key, [])
            if items:
                has_any_standard = True
                for it in items:
                    rows.append({
                        "StandardFamily": fam_name,
                        "Requirement": it,
                        "RuleId": r_id,
                        "Severity": severity,
                        "Owner": owner,
                        "EnforcedBy": enforced_by,
                        "FixtureProven": fixture_proven,
                        "RuleText": text
                    })
        
        if not has_any_standard:
            rows.append({
                "StandardFamily": "Proje Dahili / Clean Architecture",
                "Requirement": "General",
                "RuleId": r_id,
                "Severity": severity,
                "Owner": owner,
                "EnforcedBy": enforced_by,
                "FixtureProven": fixture_proven,
                "RuleText": text
            })
            
    return rows

def write_csv(rows, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    fieldnames = ["StandardFamily", "Requirement", "RuleId", "Severity", "Owner", "EnforcedBy", "FixtureProven", "RuleText"]
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"[OK] Traceability CSV written to: {output_path}")

def write_markdown(rules, rows, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Stats
    total_rules = len(rules)
    s1_rules = sum(1 for r in rules if r.get("severity") == "S1")
    s2_rules = sum(1 for r in rules if r.get("severity") == "S2")
    s3_rules = sum(1 for r in rules if r.get("severity") == "S3")
    
    owners = {}
    for r in rules:
        o = r.get("owner", "unknown")
        owners[o] = owners.get(o, 0) + 1
        
    md = []
    md.append("# 📊 Standart İzlenebilirlik Matrisi (Standards Traceability Matrix)")
    md.append("")
    md.append("> **Agent Squad Strapi & React** için OWASP ASVS v5.0, Top 10, CWE, ISO 25010 ve WCAG 2.2 standartları eşleme raporu.")
    md.append("")
    md.append("## 📈 İstatistikler")
    md.append(f"- **Toplam Kural Sayısı:** {total_rules}")
    md.append(f"- **Şiddet Seviyeleri:** S1 (Build Kırar): **{s1_rules}** | S2 (PR Bloklar): **{s2_rules}** | S3 (Uyarı): **{s3_rules}**")
    md.append("- **Denetim Motoru Dağılımı:**")
    for o, count in sorted(owners.items()):
        md.append(f"  - `{o}`: {count} kural")
    md.append("")
    md.append("---")
    md.append("")
    md.append("## 📋 İzlenebilirlik Tablosu")
    md.append("")
    md.append("| Standart Ailesi | Madde / Gereksinim | Kural Kodu | Şiddet | Denetçi | Uygulayan Araç | Kural Başlığı |")
    md.append("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |")
    
    for row in rows:
        md.append(f"| {row['StandardFamily']} | `{row['Requirement']}` | `{row['RuleId']}` | **{row['Severity']}** | `{row['Owner']}` | `{row['EnforcedBy']}` | {row['RuleText']} |")
        
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(md) + "\n")
    print(f"[OK] Traceability Markdown written to: {output_path}")

def main():
    rules_path = ".agents/rules_registry.yaml"
    if not os.path.exists(rules_path):
        rules_path = os.path.join(os.path.dirname(__file__), "../../.agents/rules_registry.yaml")
        
    if not os.path.exists(rules_path):
        print(f"[ERR] rules_registry.yaml not found at {rules_path}")
        return
        
    rules = load_yaml(rules_path)
    rows = generate_traceability(rules)
    
    csv_path = "docs/traceability_matrix.csv"
    md_path = "docs/TRACEABILITY_MATRIX.md"
    
    write_csv(rows, csv_path)
    write_markdown(rules, rows, md_path)

if __name__ == "__main__":
    main()
