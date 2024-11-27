# DigitalAlchemy

A library of AI prompt content for my personal and professional usage.

```mathematica
DigitalAlchemy/
├── ChatGPT/
│   ├── Personalities/
|   |   ├── agile_product_owner.yaml
|   |   ├── agile_scrum_master.yaml
│   │   ├── communications_expert.yaml
|   |   ├── documentation_converter.yaml
|   |   ├── documentation_creator.yaml
│   ├── Prompts/
│   │   ├── Agile/
|   |   |   ├── create_user_stories.yaml
|   |   |   ├── create_features.yaml
|   |   |   ├── create_ceremony_guide.yaml
│   │   ├── Communications/
|   |   |   ├── create_product_release_update_advert.yaml
|   |   |   ├── improved_business_communication.yaml
|   |   |   ├── improved_purchase_req_memos.yaml
├── Flux/
│   ├── Positive-Prompts/
│   │   ├── vibrant_landscapes.yaml
│   ├── Negative-Prompts/
│   │   ├── artifacts_reduction.yaml
│   ├── Key-Settings/
│   │   ├── default_settings.yaml
│   ├── Filters/
│   │   ├── positive_prompts.json
│   │   ├── negative_prompts.json
├── README.md
```

## Getting Setup

1. Install MkDocs Locally:
```bash
pip install requirements.txt
```
2. Create a New MkDocs Site:
```bash
mkdocs new .
```
3. Organize Files: Place your converted Markdown files in the docs/ directory.
4. Configure mkdocs.yml: Add navigation links to your YAML-based personalities:
```yaml
site_name: AI Personality Library
theme:
  name: material
nav:
  - Agile Product Owner: agile_product_owner.md
```
5. Preview Locally:
```bash
mkdocs serve
```
6. Deploy to GitHub Pages:
```bash
mkdocs gh-deploy --remote-branch pages
```
