# HR Analytics Dashboard
### Employee Attrition & Workforce Intelligence

![Python](https://img.shields.io/badge/Python-3.9+-blue?logo=python&logoColor=white)
![BigQuery](https://img.shields.io/badge/Google_BigQuery-4285F4?logo=googlebigquery&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau_Desktop-E97627?logo=tableau&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)

---

## Project Overview

An end-to-end HR analytics project built on the IBM HR Analytics Employee Attrition & Performance dataset. The project demonstrates the full data analyst workflow: data ingestion into a cloud data warehouse, SQL-based analysis, and interactive BI reporting in Tableau Desktop.

**Core business question:**
> *"Which employees are most at risk of leaving, and what can the business do about it?"*

---

## Tech Stack

| Category | Tool / Technology | Purpose |
|---|---|---|
| Data Storage | Google BigQuery | Cloud data warehouse — dataset uploaded directly, queried via SQL and Python |
| Data Processing | Python (pandas, google-cloud-bigquery) | Data cleaning, feature engineering, and writing transformed data back to BigQuery |
| Visualisation | Tableau Desktop | Interactive dashboards and visual storytelling via BigQuery connector |
| Version Control | Git / GitHub | Code, notebooks, SQL queries, and .twbx file all versioned |
| Environment | python-dotenv / GCP Service Account | Credential management for BigQuery authentication |

---

## Repository Structure

```
hr-analytics-dashboard/
├── data/                        # Raw CSV (local reference only)
│   └── WA_Fn-UseC_-HR-Employee-Attrition.csv
├── notebooks/                   # Exploratory analysis
│   └── 01_eda.ipynb
├── sql/                         # BigQuery SQL queries
│   └── analysis_queries.sql
├── src/                         # Python modules
│   ├── bq_client.py             # BigQuery connection helper
│   └── etl.py                   # Clean & transform data in BigQuery
├── tableau/                     # Tableau assets
│   └── hr_dashboard.twbx        # Packaged workbook (data embedded)
├── requirements.txt
├── .env.example                 # Template for GCP credentials
└── README.md
```

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/<your-username>/hr-analytics-dashboard.git
cd hr-analytics-dashboard
pip install -r requirements.txt
```

### 2. Configure BigQuery access

**Option A — Service account key (recommended for local dev):**

```bash
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account-key.json
BQ_PROJECT_ID=your-gcp-project-id
BQ_DATASET=hr_analytics
```

**Option B — Application Default Credentials (ADC):**

```bash
gcloud auth application-default login
```

### 3. Run the ETL and open Tableau

```bash
python src/etl.py    # Cleans and transforms data in BigQuery
```

Then open `tableau/hr_dashboard.twbx` in Tableau Desktop. If connecting live to BigQuery, update the data source credentials under **Data > Edit Connection**.

---

## Build Steps

| # | Phase | Description |
|---|---|---|
| 01 | **Confirm data in BigQuery** | Verify the IBM Attrition dataset is loaded correctly. Check row counts (expect 1,470), column types, and nulls. Note the full table path: `project.dataset.table`. |
| 02 | **BigQuery connection (Python)** | Create `src/bq_client.py` using the `google-cloud-bigquery` library. Authenticate via service account key or ADC. Test with a simple `SELECT COUNT(*)` query from Python. |
| 03 | **ETL pipeline** | Write `src/etl.py` to pull the raw table into a pandas DataFrame, clean column names, handle nulls, cast types, and engineer useful fields (e.g. tenure bands, income brackets, satisfaction tiers). Write the cleaned output back to BigQuery as `hr_analytics.employees_clean`. |
| 04 | **SQL analysis** | Write `analysis_queries.sql` with at least 5 business queries against the cleaned BigQuery table: attrition rate by department, average tenure by role, salary bands, overtime vs attrition, and satisfaction score distributions. |
| 05 | **EDA notebook** | In `notebooks/01_eda.ipynb`, pull the cleaned data from BigQuery into pandas and visualise distributions, correlation heatmaps, and attrition breakdowns. This becomes the reference for dashboard design. |
| 06 | **Tableau connection** | In Tableau Desktop, connect to BigQuery via **Connect > Google BigQuery**. Sign in with your Google account and select the cleaned table. Verify all fields load correctly and check data types. |
| 07 | **Tableau dashboards** | Build the two-dashboard workbook (see Dashboards section below). |
| 08 | **Publish & package** | Export the workbook as a `.twbx` packaged workbook via **File > Export Packaged Workbook**. Add it to the `tableau/` folder in the repo. |
| 09 | **Documentation** | Write a clean README, comment your SQL queries, and add a short project write-up explaining the business question and your findings. Push everything to GitHub. |

---

## Dashboards

The workbook contains two dashboards.

### Dashboard 1 — Attrition Overview

Answers the headline business question: how bad is attrition, and where is it concentrated?

| Sheet | Description |
|---|---|
| **KPI – Attrition Rate** | Single headline number showing overall attrition rate across all employees |
| **Attrition by Department** | Horizontal bar chart showing attrition rate per department, sorted descending, with company average reference line |
| **Attrition by Job Role** | Horizontal bar chart for all 9 job roles with company average reference line — reveals Sales Representatives and HR roles as highest-risk |
| **Overtime vs Attrition** | Side-by-side bars comparing attrition rate for overtime vs non-overtime employees, with headcount overlay |

All sheets are wired together via a Department filter action — clicking a department bar filters the entire dashboard.

### Dashboard 2 — Financial Drivers of Attrition

Explores the effect of compensation and career progression on attrition risk.

| Sheet | Description |
|---|---|
| **Attrition by Income Band** | Attrition rate across four salary bands (<$2K, $2K–$5K, $5K–$10K, $10K+) with headcount labels and risk-based color encoding |
| **Attrition by Promotion Recency** | Attrition rate by time since last promotion (Recently Promoted, 1–2 years, 3–5 years, 6–9 years, 10+), with average tenure overlay |
| **Attrition by Salary Hike Band** | Attrition rate across four raise bands with a high-performer attrition line overlaid — tests whether bigger raises retain top talent |

---

## Key Findings

- Employees earning **below $2K/month** leave at roughly **3–4x the company average**
- Employees working **overtime** show attrition rates around **30%+**, versus ~10% for those who don't
- The longer an employee goes **without a promotion**, the higher their attrition risk — employees at 10+ years since last promotion show the steepest rates
- **Sales Representatives** show the highest attrition of any job role at ~40%
- The relationship between **salary hike size and attrition** is real but weaker than expected — income level is a stronger predictor than raise percentage

---

## Key Business Questions Answered

- What is the overall attrition rate, and which departments drive it?
- Do employees with overtime have significantly higher attrition?
- Which job satisfaction and environment satisfaction scores predict leaving?
- Is there a salary threshold below which attrition risk spikes?
- How does career stagnation (years since last promotion) relate to attrition risk?
- Are high performers leaving in the groups receiving the smallest raises?

---

## Connecting Tableau to BigQuery

Tableau Desktop connects to BigQuery natively via **Connect > To a Server > Google BigQuery**. You will need:

- A Google account with access to the GCP project
- The BigQuery project ID and dataset name
- Tableau Desktop 2020.2 or later (BigQuery connector is built-in)
- For a live connection: credentials are stored per workbook; for a packaged `.twbx`, data is embedded as an extract

> **Recommended:** use an Extract connection rather than Live for better performance and offline portability. Schedule extract refreshes via Tableau Server or Tableau Cloud if you publish the workbook later.

---

## requirements.txt

```
pandas
google-cloud-bigquery
google-cloud-bigquery-storage
pyarrow
db-dtypes
python-dotenv
matplotlib
seaborn
```

---

## Dataset

**IBM HR Analytics Employee Attrition & Performance**

- **Source:** [Kaggle](https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset)
- **Size:** 1,470 employee records, 35 features
- **Key fields:** Age, Department, JobRole, MonthlyIncome, OverTime, YearsAtCompany, Attrition, JobSatisfaction, PercentSalaryHike, YearsSinceLastPromotion, and more
- **Note:** Synthetic data — safe to share publicly in your portfolio

---

*Built as a portfolio project to demonstrate end-to-end data analysis skills.*
