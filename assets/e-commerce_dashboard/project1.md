# project1.html — E-Commerce Analytics Dashboard

Project detail page for the E-Commerce Analytics Dashboard, linked from the main portfolio index.

## Page Structure

- **Navbar** — shared site navigation (About, Skills, Projects, Contact) with a hamburger toggle for mobile.
- **Back link** — returns the user to `index.html#projects`.
- **Hero** — "Analytics" badge, project title, tech stack summary, and year (2026).
- **Overview** — short description of the Streamlit app: two tabs covering campaign KPIs and RFM customer segmentation across 8,000+ customers.
- **Methodology** — bulleted breakdown of the technical approach: star-schema design in Neon PostgreSQL, SQL queries via psycopg2, pandas/numpy processing, Streamlit multi-select filters with caching, and Plotly Express charts.
- **Built With** — icon grid for Python, PostgreSQL, Neon, Streamlit, pandas, and Plotly.
- **Screenshots** — two captioned figures showing the campaign efficiency tab and the customer segmentation tab.
- **Results** — summary of findings: top-performing campaigns by ROAS/CPA, and customer segments (Champions, Loyal, Regular, Recent, At-Risk) with income-bracket composition.
- **GitHub link** — primary CTA button pointing to the portfolio repository.
- **Footer** — copyright line.

## Technologies Covered

| Technology | Role |
|---|---|
| Python | Core language |
| PostgreSQL / Neon | Serverless database; star-schema data store |
| psycopg2 | SQL query execution from Python |
| pandas / numpy | Data processing and aggregation |
| Streamlit | Two-tab interactive dashboard with caching |
| Plotly Express | ROAS bar charts, CTR/CVR scatter, CPA by channel, RFM donut |
| Claude Code | Accelerated schema design, query writing, and layout |

## Key Metrics Displayed

- **ROAS** (Return on Ad Spend)
- **CTR** (Click-Through Rate)
- **CVR** (Conversion Rate)
- **CPA** (Cost Per Acquisition)
- **RFM segments** — Champions, Loyal, Regular, Recent, At-Risk
