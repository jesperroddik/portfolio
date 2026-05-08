# Jesper — Data Analytics Portfolio

Personal portfolio website showcasing data analytics projects and skills.

**Live site**: https://jesperroddik.github.io/portfolio

## Structure

```
portfolio/
├── index.html          # Main single-page site
├── style.css           # All styles (dark theme, responsive)
├── script.js           # Scroll animations, nav behavior
├── assets/             # Photos, screenshots (add your own)
├── projects/
│   ├── project1.html   # E-Commerce Analytics Dashboard (Python, SQL, Neon, Streamlit)
│   ├── project2.html   # Customer Segmentation (SQL)
│   └── project3.html   # KPI Performance Dashboard (Power BI)
└── README.md
```

## Skills Highlighted

Python (pandas, numpy) · SQL · PostgreSQL · Streamlit · Plotly · Power BI

## Projects

1. **E-Commerce Analytics Dashboard** — Two-tab Streamlit app backed by a Neon serverless PostgreSQL database. Tab 1 shows campaign efficiency KPIs (ROAS, CTR, CVR, CPA) with interactive filters; Tab 2 provides RFM-based customer segmentation across 8,000+ customers. Star schema designed in Neon, queries written with psycopg2, visualizations built with Plotly Express.
2. **Customer Segmentation** — RFM analysis with SQL/PostgreSQL to identify customer groups
3. **KPI Performance Dashboard** — Interactive Power BI executive dashboard with DAX measures

## Deploying to GitHub Pages

1. Push all files to the `main` branch
2. Go to **Settings** → **Pages** on the GitHub repo
3. Source: **Deploy from a branch** → `main` → `/ (root)` → Save
4. Site goes live at `https://jesperroddik.github.io/portfolio` within a couple of minutes
