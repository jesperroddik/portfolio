const translations = {
  en: {
    // Nav
    'nav.home':         'Home',
    'nav.about':        'About',
    'nav.skills':       'Skills',
    'nav.projects':     'Projects',
    'nav.certificates': 'Certificates',
    'nav.contact':      'Contact',

    // Hero
    'hero.tagline':   "Hi, I'm",
    'hero.role':      'Data Analyst',
    'hero.sub':       'Turning raw data into clear decisions with Python, SQL, and visual storytelling.',
    'hero.cta.work':  'View My Work',
    'hero.cta.contact': 'Get In Touch',

    // About
    'about.title': 'About',
    'about.p1': "I'm a data analyst with a passion for transforming messy datasets into actionable insights. My toolkit spans Python (pandas, numpy), SQL, Power BI, and data visualization.",
    'about.p2': 'I enjoy finding patterns in data and communicating findings in a way that drives real decisions. Always looking to learn new tools and tackle interesting analytical challenges.',
    'about.cv.en': 'Download CV (English)',
    'about.cv.dk': 'Download CV (Danish)',

    // Skills
    'skills.title':    'Skills',
    'skills.dataviz':  'Data Visualization',
    'skills.excel':    'Excel & Spreadsheets',
    'skills.excel.sub': 'pivot tables · Power Query · reporting',

    // Projects
    'projects.title':  'Projects',
    'projects.p1.desc': 'Interactive marketing and customer analytics dashboard with campaign KPIs (ROAS, CTR, CPA) and RFM-based segmentation across 8,000+ customers.',
    'projects.p2.desc': 'End-to-end HR analytics pipeline: ETL into Google BigQuery, SQL analysis, and two Tableau dashboards identifying employee attrition drivers.',
    'projects.p3.desc': 'Multi-page Power BI dashboard on $8.34bn of Contoso retail sales: product mix, geography, YoY trends, and a 2014 DAX forecast.',

    // Buttons (shared)
    'btn.view-project':  'View Project',
    'btn.coming-soon':   'Coming Soon',
    'btn.view-cert':     'View Certificate',
    'btn.back':          'Back to Projects',
    'btn.github':        'View on GitHub',

    // Certificates
    'certs.title':       'Certificates',
    'certs.tag.python':  'Kaggle · June 2023',
    'certs.tag.pandas':  'Kaggle · July 2023',
    'certs.tag.ai-pm':   'Ricardo Vargas · June 2024',
    'certs.tag.py-ai':         'Teknologisk Institut · May 2025',
    'certs.tag.datacamp-ada': 'DataCamp · June 2026',

    // Contact
    'contact.title': 'Contact',
    'contact.sub':   'Open to opportunities and collaborations. Feel free to reach out.',

    // Footer
    'footer.text': 'Jesper © 2026 · Built with HTML, CSS & JS',

    // Project page shared headings
    'project.overview':    'Overview',
    'project.methodology': 'Methodology',
    'project.built-with':  'Built With',
    'project.screenshots': 'Screenshots',
    'project.results':     'Results',

    // Project 1
    'p1.badge':      'Analytics',
    'p1.title':      'E-Commerce Analytics Dashboard',
    'p1.overview':   'Interactive marketing and customer analytics dashboard backed by a Neon serverless PostgreSQL database. Two-tab Streamlit app: campaign efficiency KPIs (ROAS, CTR, CVR, CPA) with interactive filters, and RFM-based customer segmentation across 8,000+ customers.',
    'p1.method.1':   'Designed a star schema in Neon PostgreSQL with fact tables for marketing spend and customer RFM scores, and dimension tables for campaigns, channels, and customers',
    'p1.method.2':   'Queried and aggregated data with SQL via psycopg2; processed results with pandas and numpy',
    'p1.method.3':   'Built a two-tab Streamlit dashboard with multi-select filters and caching for performance',
    'p1.method.4':   'Visualized campaign ROAS, CTR vs CVR scatter, CPA by channel, and customer segment distribution using Plotly Express',
    'p1.method.5':   'Used Claude Code to accelerate schema design, query writing, and dashboard layout',
    'p1.screenshot.1': 'Campaign efficiency tab: ROAS, CTR/CVR scatter, CPA by channel',
    'p1.screenshot.2': 'Customer segmentation tab: RFM donut, frequency/value by segment, income mix',
    'p1.results':    'Identified top-performing campaign types and channels by ROAS and CPA. Segmented customers into Champions, Loyal, Regular, Recent, and At-Risk groups, revealing income bracket composition per segment to guide targeting strategy.',

    // Project 2
    'p2.badge':    'HR Analytics',
    'p2.title':    'HR Analytics Dashboard',
    'p2.overview': 'End-to-end HR analytics project built on the IBM HR Analytics Employee Attrition & Performance dataset (1,470 records, 35 features). The project covers the full data analyst workflow: ETL pipeline into Google BigQuery, SQL-based analysis, and two interactive Tableau dashboards that answer the core business question: which employees are most at risk of leaving, and what can the business do about it?',
    'p2.etl.title': 'ETL Pipeline',
    'p2.etl.1':    'Ingested the IBM Attrition CSV into Google BigQuery and verified row counts, column types, and nulls',
    'p2.etl.2':    'Built <code>src/bq_client.py</code> to authenticate via a GCP service account and query BigQuery from Python',
    'p2.etl.3':    'Wrote <code>src/etl.py</code> to extract the raw table into pandas, clean column names, cast types, handle nulls, and engineer new fields (tenure bands, income brackets, satisfaction tiers)',
    'p2.etl.4':    'Loaded the transformed data back to BigQuery as <code>hr_analytics.employees_clean</code> — the single source of truth for SQL queries and Tableau',
    'p2.method.1': 'Wrote SQL queries in BigQuery covering attrition by department, job role, salary band, overtime, and promotion recency',
    'p2.method.2': 'Conducted exploratory analysis in <code>notebooks/01_eda.ipynb</code> by pulling the cleaned table into pandas and visualising distributions, correlation heatmaps, and attrition breakdowns',
    'p2.method.3': 'Connected Tableau Desktop to BigQuery via the native connector; used an Extract connection for performance and offline portability',
    'p2.method.4': 'Built a two-dashboard Tableau workbook with cross-dashboard Department filter actions and exported as a packaged <code>.twbx</code> file',
    'p2.dashboards.title': 'Dashboards',
    'p2.dashboards.intro': 'The Tableau workbook contains two dashboards, each answering a distinct business question.',
    'p2.dashboards.1': '<strong>Attrition Overview:</strong> headline KPI, attrition by department and job role (with company average reference lines), and overtime vs attrition side-by-side bars. All sheets respond to a shared Department filter action.',
    'p2.dashboards.2': '<strong>Financial Drivers of Attrition:</strong> attrition rate across income bands, promotion recency groups, and salary hike bands, with a high-performer attrition line overlaid to test whether raises retain top talent.',
    'p2.screenshot.1': 'Attrition overview: KPI tile, attrition by department and job role, overtime vs attrition',
    'p2.screenshot.2': 'Financial drivers: attrition by income band, promotion recency, and salary hike',
    'p2.results':  'Employees earning below $2K/month leave at roughly 3-4x the company average. Overtime workers show attrition rates above 30%, versus ~10% for those who do not work overtime. Sales Representatives have the highest attrition of any job role at ~40%. Career stagnation is a clear risk signal: attrition climbs steeply for employees 10+ years without a promotion, while income level proves a stronger predictor of leaving than raise percentage alone.',

    // Project 3
    'p3.badge':    'Power BI',
    'p3.title':    'Contoso Sales Dashboard',
    'p3.overview': 'Multi-page Power BI dashboard built on the Contoso retail dataset, covering $8.34bn in global sales across 6 product categories, 306 stores, and dozens of countries from 2005 to 2013. The report spans four pages: a sales overview with year-on-year comparison, a product breakdown with margin analysis, a geographic view with a world map, and a 2014 sales forecast with DAX time-intelligence and confidence intervals.',
    'p3.method.1': 'Imported the Contoso retail tables into Power BI Desktop and defined relationships between fact and dimension tables in the model view',
    'p3.method.2': 'Used Power Query to clean and reshape raw tables — standardised column names, resolved data-type issues, and merged lookup tables',
    'p3.method.3': 'Wrote DAX measures for Total Sales, Gross Margin, Margin %, Total Sales Previous Year, and YoY % using CALCULATE and time-intelligence functions',
    'p3.method.4': 'Built cross-page slicers for Year, Country, and Product Category so filters carry through all four report pages',
    'p3.method.5': 'Created the 2014 forecast page using DAX forecast logic with upper and lower confidence interval measures overlaid on the historical trend',
    'p3.pages.title': 'Report Pages',
    'p3.pages.1': '<strong>Sales Overview:</strong> KPI cards for Total Sales ($8.34bn), YoY %, and Total Orders (2M). Monthly area chart comparing current-year sales to the prior year, sliceable by Year, Country, and Product Category.',
    'p3.pages.2': '<strong>Product Breakdown:</strong> Gross Margin ($4.79bn) and Margin % (57.41%) KPIs, treemap and horizontal bar chart by product category, and a detailed table with per-category margin data.',
    'p3.pages.3': '<strong>Geographic View:</strong> World map visual with bubble sizing by sales volume, KPI cards for Total Stores (306) and Sales per Store ($27.26M), and a continental breakdown table.',
    'p3.pages.4': '<strong>Sales Forecast:</strong> DAX-driven 2014 projection ($2.18bn, −14.5% YoY) with confidence intervals overlaid on the 2011–2013 historical trend, plus a forecast breakdown by product category.',
    'p3.screenshot.1': 'Sales Overview: Total Sales, YoY %, Total Orders, and monthly sales vs. prior year',
    'p3.screenshot.2': 'Product Breakdown: Gross Margin, Margin %, treemap and bar chart by category',
    'p3.screenshot.3': 'Geographic View: world map, store count, and sales per store by continent',
    'p3.screenshot.4': 'Sales Forecast: 2014 DAX projection with confidence intervals by product category',
    'p3.results':  'Computers are the top-selling category at $3.2bn (38% of total) with a 56.87% gross margin. Cameras and camcorders deliver the highest margin at ~60%, despite lower volume. The geographic view shows sales concentrated in a handful of high-performing regions, while the DAX forecast projects a 14.5% decline in 2014 sales, flagging a need for product mix or market expansion decisions.',
    'p3.btn.download': 'Download .pbix File',

    // Project page shared (coming soon)
    'project.coming-soon':      'Coming Soon',
    'project.planned-features': 'Planned Features',
    'placeholder.screenshot':   'Screenshots coming soon',

    // Project 4
    'p4.badge':          'Machine Learning',
    'p4.title':          'Customer Churn Prediction',
    'projects.p4.desc':  'Machine learning pipeline to predict customer churn using scikit-learn and XGBoost, with SHAP-based feature explainability.',
    'p4.overview':       'This project is currently in development. It will feature a full machine learning pipeline for predicting customer churn — from exploratory data analysis and feature engineering through model training, hyperparameter tuning, and SHAP-based explainability.',
    'p4.plan.1':         'Exploratory data analysis and feature engineering on a real-world churn dataset',
    'p4.plan.2':         'Baseline model comparison: Logistic Regression, Random Forest, and XGBoost',
    'p4.plan.3':         'Hyperparameter tuning with cross-validation and ROC-AUC evaluation',
    'p4.plan.4':         'SHAP values for global and per-customer feature importance explanations',
    'p4.plan.5':         'Interactive prediction interface built with Streamlit',

    // Project 5
    'p5.badge':          'Data Engineering',
    'p5.title':          'Automated Data Pipeline',
    'projects.p5.desc':  'End-to-end data pipeline with dbt transformations, automated scheduling, and data quality monitoring.',
    'p5.overview':       'This project is currently in development. It will demonstrate a production-style data pipeline — ingesting raw data, applying dbt transformations with documented lineage, and orchestrating the entire workflow with Apache Airflow and automated data quality checks.',
    'p5.plan.1':         'Raw data ingestion from multiple sources into a PostgreSQL data warehouse',
    'p5.plan.2':         'dbt models for staging, intermediate, and mart layers with full lineage documentation',
    'p5.plan.3':         'Data quality tests using dbt\'s built-in test framework (not null, unique, referential integrity)',
    'p5.plan.4':         'Airflow DAG for end-to-end orchestration with retry logic and alerting',
    'p5.plan.5':         'BI dashboard connected to the mart layer for real-time reporting',

    // Project 6
    'p6.badge':          'NLP',
    'p6.title':          'Sentiment Analysis Dashboard',
    'projects.p6.desc':  'Real-time sentiment analysis on social media text using transformer models, with an interactive Streamlit dashboard.',
    'p6.overview':       'This project is currently in development. It will apply natural language processing to classify sentiment in text data — using a pre-trained transformer model from Hugging Face — and present the results in an interactive Streamlit dashboard with trend analysis and topic breakdown.',
    'p6.plan.1':         'Data collection and preprocessing pipeline for text data',
    'p6.plan.2':         'Sentiment classification using a fine-tuned Hugging Face transformer model',
    'p6.plan.3':         'Topic modelling to identify recurring themes across positive and negative segments',
    'p6.plan.4':         'Time-series sentiment trend charts and keyword frequency analysis',
    'p6.plan.5':         'Interactive Streamlit dashboard with search, filtering, and export functionality',
  },

  da: {
    // Nav
    'nav.home':         'Hjem',
    'nav.about':        'Om',
    'nav.skills':       'Kompetencer',
    'nav.projects':     'Projekter',
    'nav.certificates': 'Certifikater',
    'nav.contact':      'Kontakt',

    // Hero
    'hero.tagline':     'Hej, jeg er',
    'hero.role':        'Dataanalytiker',
    'hero.sub':         'Forvandler rå data til klare beslutninger med Python, SQL og visuel historiefortælling.',
    'hero.cta.work':    'Se mit arbejde',
    'hero.cta.contact': 'Kontakt',

    // About
    'about.title': 'Om mig',
    'about.p1': 'Jeg er en dataanalytiker med en passion for at omdanne rodet data til handlingsbare indsigter. Min værktøjskasse dækker Python (pandas, numpy), SQL, Power BI og datavisualisering.',
    'about.p2': 'Jeg nyder at finde mønstre i data og kommunikere fund på en måde, der driver reelle beslutninger. Altid på udkig efter nye værktøjer og interessante analytiske udfordringer.',
    'about.cv.en': 'Download CV (Engelsk)',
    'about.cv.dk': 'Download CV (Dansk)',

    // Skills
    'skills.title':     'Kompetencer',
    'skills.dataviz':   'Datavisualisering',
    'skills.excel':     'Excel & Regneark',
    'skills.excel.sub': 'pivottabeller · Power Query · rapportering',

    // Projects
    'projects.title':   'Projekter',
    'projects.p1.desc': 'Interaktivt marketing- og kundeanalyse-dashboard med kampagne-KPI\'er (ROAS, CTR, CPA) og RFM-baseret segmentering af 8.000+ kunder.',
    'projects.p2.desc': 'End-to-end HR-analyseproces: ETL til Google BigQuery, SQL-analyse og to Tableau-dashboards, der identificerer drivkræfter bag medarbejderfrafald.',
    'projects.p3.desc': 'Flersides Power BI-dashboard over $8,34 mia. i Contoso-detailsalg: produktmix, geografi, ÅtÅ-tendenser og en 2014 DAX-prognose.',

    // Buttons (shared)
    'btn.view-project': 'Se projekt',
    'btn.coming-soon':  'Kommer snart',
    'btn.view-cert':    'Se certifikat',
    'btn.back':         'Tilbage til projekter',
    'btn.github':       'Se på GitHub',

    // Certificates
    'certs.title':      'Certifikater',
    'certs.tag.python': 'Kaggle · Juni 2023',
    'certs.tag.pandas': 'Kaggle · Juli 2023',
    'certs.tag.ai-pm':  'Ricardo Vargas · Juni 2024',
    'certs.tag.py-ai':        'Teknologisk Institut · Maj 2025',
    'certs.tag.datacamp-ada': 'DataCamp · Juni 2026',

    // Contact
    'contact.title': 'Kontakt',
    'contact.sub':   'Åben for nye muligheder. Tag gerne kontakt.',

    // Footer
    'footer.text': 'Jesper © 2026 · Bygget med HTML, CSS og JS',

    // Project page shared headings
    'project.overview':    'Oversigt',
    'project.methodology': 'Metode',
    'project.built-with':  'Bygget med',
    'project.screenshots': 'Skærmbilleder',
    'project.results':     'Resultater',

    // Project 1
    'p1.badge':    'Analyse',
    'p1.title':    'E-Commerce Analytics Dashboard',
    'p1.overview': 'Interaktivt marketing- og kundeanalyse-dashboard drevet af en Neon serverløs PostgreSQL-database. To-fane Streamlit-app: kampagne-effektivitets-KPI\'er (ROAS, CTR, CVR, CPA) med interaktive filtre og RFM-baseret kundesegmentering af 8.000+ kunder.',
    'p1.method.1': 'Designede et stjerneskema i Neon PostgreSQL med faktatabeller for marketingforbrug og kunde-RFM-scorer samt dimensionstabeller for kampagner, kanaler og kunder',
    'p1.method.2': 'Forespurgte og aggregerede data med SQL via psycopg2; behandlede resultater med pandas og numpy',
    'p1.method.3': 'Byggede et to-fane Streamlit-dashboard med flervalgsfiltre og caching for ydeevne',
    'p1.method.4': 'Visualiserede kampagne-ROAS, CTR vs CVR scatter, CPA pr. kanal og kundesegmentfordeling med Plotly Express',
    'p1.method.5': 'Brugte Claude Code til at accelerere skemadesign, forespørgselsudvikling og dashboard-layout',
    'p1.screenshot.1': 'Kampagneeffektivitetsfane: ROAS, CTR/CVR scatter, CPA pr. kanal',
    'p1.screenshot.2': 'Kundesegmenteringsfane: RFM-donut, frekvens/værdi pr. segment, indkomstmix',
    'p1.results':  'Identificerede topydende kampagnetyper og kanaler efter ROAS og CPA. Segmenterede kunder i Champions, Loyale, Regelmæssige, Nylige og I-risiko grupper og afslørede indkomstbracket-sammensætning pr. segment til at guide målretningsstrategi.',

    // Project 2
    'p2.badge':    'HR Analytics',
    'p2.title':    'HR Analytics Dashboard',
    'p2.overview': 'End-to-end HR-analyseprojekt bygget på IBM HR Analytics Employee Attrition & Performance-datasættet (1.470 poster, 35 funktioner). Projektet dækker hele dataanalytikerworkflowet: ETL-pipeline til Google BigQuery, SQL-baseret analyse og to interaktive Tableau-dashboards, der besvarer det centrale forretningsspørgsmål: hvilke medarbejdere er mest i risiko for at forlade virksomheden, og hvad kan virksomheden gøre ved det?',
    'p2.etl.title': 'ETL-pipeline',
    'p2.etl.1':    'Indlæste IBM Attrition CSV i Google BigQuery og verificerede rækkeantal, kolonnetyper og null-værdier',
    'p2.etl.2':    'Byggede <code>src/bq_client.py</code> til at autentificere via en GCP-tjenestekonto og forespørge BigQuery fra Python',
    'p2.etl.3':    'Skrev <code>src/etl.py</code> til at udtrække råtabellen til pandas, rense kolonnenavne, konvertere typer, håndtere null-værdier og tilføje nye felter (ansættelsesperiodebånd, indkomstbrackets, tilfredshedsniveauer)',
    'p2.etl.4':    'Indlæste de transformerede data tilbage til BigQuery som <code>hr_analytics.employees_clean</code> — den eneste kilde til sandhed for SQL-forespørgsler og Tableau',
    'p2.method.1': 'Skrev SQL-forespørgsler i BigQuery, der dækker frafald efter afdeling, jobrolle, lønbånd, overarbejde og forfremmelsesfrekvens',
    'p2.method.2': 'Udførte eksplorativ analyse i <code>notebooks/01_eda.ipynb</code> ved at trække den rensede tabel ind i pandas og visualisere fordelinger, korrelationsvarmekort og frafaldsopdelinger',
    'p2.method.3': 'Forbandt Tableau Desktop til BigQuery via den native connector; brugte en Extract-forbindelse for ydeevne og offline portabilitet',
    'p2.method.4': 'Byggede et to-dashboard Tableau-projektmappe med tværgående afdelingsfilterhandlinger og eksporterede som en pakket <code>.twbx</code>-fil',
    'p2.dashboards.title': 'Dashboards',
    'p2.dashboards.intro': 'Tableau-projektmappen indeholder to dashboards, der hver besvarer et distinkt forretningsspørgsmål.',
    'p2.dashboards.1': '<strong>Frafalds-oversigt:</strong> hoved-KPI, frafald efter afdeling og jobrolle (med virksomhedsgennemsnit som referencelinjer) og overarbejde vs. frafald side om side. Alle ark reagerer på en fælles afdelingsfilterhandling.',
    'p2.dashboards.2': '<strong>Finansielle drivere bag frafald:</strong> frafaldsrate på tværs af indkomstbånd, forfremmelsesfrekvensgrupper og lønforhøjelsesbånd, med en højtpræsterende frafaldsline overlejret for at teste, om lønforhøjelser fastholder toptalenter.',
    'p2.screenshot.1': 'Frafalds-oversigt: KPI-flise, frafald efter afdeling og jobrolle, overarbejde vs. frafald',
    'p2.screenshot.2': 'Finansielle drivere: frafald pr. indkomstbånd, forfremmelsesfrekvens og lønforhøjelse',
    'p2.results':  'Medarbejdere, der tjener under $2K/måned, forlader virksomheden med omtrent 3–4 gange virksomhedsgennemsnittet. Overarbejdende medarbejdere viser frafaldsrater over 30 %, mod ~10 % for dem, der ikke arbejder overarbejde. Salgsrepræsentanter har den højeste frafald af alle jobroller med ~40 %. Karrierestagnation er et klart risikosignal: frafald stiger kraftigt for medarbejdere uden forfremmelse i 10+ år, mens indkomstniveauet er en stærkere forudsigelse for at forlade end lønforhøjelsesprocenten alene.',

    // Project 3
    'p3.badge':    'Power BI',
    'p3.title':    'Contoso Sales Dashboard',
    'p3.overview': 'Flersides Power BI-dashboard bygget på Contoso-detaildatasættet, der dækker $8,34 mia. i globalt salg på tværs af 6 produktkategorier, 306 butikker og snesevis af lande fra 2005 til 2013. Rapporten spænder over fire sider: en salgsoversigt med år-til-år-sammenligning, en produktopdeling med marginsanalyse, en geografisk visning med et verdenskort og en 2014-salgsprognose med DAX-tidsintelligens og konfidensintervaller.',
    'p3.method.1': 'Importerede Contoso-detailtabeller i Power BI Desktop og definerede relationer mellem fakta- og dimensionstabeller i modelvisningen',
    'p3.method.2': 'Brugte Power Query til at rense og omforme råtabeller — standardiserede kolonnenavne, løste datatypeproblemer og fusionerede opslagstabeller',
    'p3.method.3': 'Skrev DAX-målinger for Samlet salg, Bruttomargin, Margin %, Samlet salg foregående år og ÅtÅ % med CALCULATE og tidsintelligens-funktioner',
    'p3.method.4': 'Byggede tværgående sideskærere for År, Land og Produktkategori, så filtre gælder på alle fire rapportsider',
    'p3.method.5': 'Oprettede 2014-prognosesiden med DAX-prognoselogik med øvre og nedre konfidensinterval-målinger lagt over den historiske trend',
    'p3.pages.title': 'Rapportsider',
    'p3.pages.1': '<strong>Salgsoversigt:</strong> KPI-kort for Samlet salg ($8,34 mia.), ÅtÅ % og Samlede ordrer (2M). Månedligt arealdiagram der sammenligner nuværende års salg med foregående år, filtrerbart på År, Land og Produktkategori.',
    'p3.pages.2': '<strong>Produktopdeling:</strong> Bruttomargin ($4,79 mia.) og Margin % (57,41 %) KPI\'er, treemap og vandret søjlediagram pr. produktkategori og en detaljeret tabel med marginstdata pr. kategori.',
    'p3.pages.3': '<strong>Geografisk visning:</strong> Verdenskortvisual med boblestørrelse efter salgsvolumen, KPI-kort for Samlede butikker (306) og Salg pr. butik ($27,26M) og en kontinental opdelingstore.',
    'p3.pages.4': '<strong>Salgsprognose:</strong> DAX-drevet 2014-projektion ($2,18 mia., −14,5 % ÅtÅ) med konfidensintervaller lagt over den historiske 2011–2013-trend, plus en prognose opdelt pr. produktkategori.',
    'p3.screenshot.1': 'Salgsoversigt: Samlet salg, ÅtÅ %, Samlede ordrer og månedligt salg vs. foregående år',
    'p3.screenshot.2': 'Produktopdeling: Bruttomargin, Margin %, treemap og søjlediagram pr. kategori',
    'p3.screenshot.3': 'Geografisk visning: verdenskort, butiksantal og salg pr. butik pr. kontinent',
    'p3.screenshot.4': 'Salgsprognose: 2014 DAX-projektion med konfidensintervaller pr. produktkategori',
    'p3.results':  'Computere er den bedst sælgende kategori med $3,2 mia. (38 % af total) og en bruttomargin på 56,87 %. Kameraer og videokameraer leverer den højeste margin på ~60 %, på trods af lavere volumen. Den geografiske visning viser salg koncentreret i en håndfuld højtydende regioner, mens DAX-prognosen forventer et fald på 14,5 % i 2014-salg, hvilket indikerer behov for produktmix- eller markedsudvidelsestiltag.',
    'p3.btn.download': 'Download .pbix-fil',

    // Project page shared (coming soon)
    'project.coming-soon':      'Kommer snart',
    'project.planned-features': 'Planlagte funktioner',
    'placeholder.screenshot':   'Skærmbilleder kommer snart',

    // Project 4
    'p4.badge':          'Maskinlæring',
    'p4.title':          'Forudsigelse af kundefrafald',
    'projects.p4.desc':  'Maskinlærings-pipeline til at forudsige kundefrafald med scikit-learn og XGBoost samt SHAP-baseret forklarbarhed.',
    'p4.overview':       'Dette projekt er i øjeblikket under udvikling. Det vil indeholde en komplet maskinlærings-pipeline til forudsigelse af kundefrafald — fra eksplorativ dataanalyse og feature engineering til modeltræning, hyperparametertunning og SHAP-baseret forklarbarhed.',
    'p4.plan.1':         'Eksplorativ dataanalyse og feature engineering på et virkelighedsnært frafaldsdatasæt',
    'p4.plan.2':         'Sammenligning af baseline-modeller: Logistisk regression, Random Forest og XGBoost',
    'p4.plan.3':         'Hyperparametertunning med krydsvalidering og ROC-AUC-evaluering',
    'p4.plan.4':         'SHAP-værdier for global og per-kunde feature importance-forklaring',
    'p4.plan.5':         'Interaktiv prædiktionsgrænseflade bygget med Streamlit',

    // Project 5
    'p5.badge':          'Dataingeniørarbejde',
    'p5.title':          'Automatiseret datapipeline',
    'projects.p5.desc':  'End-to-end datapipeline med dbt-transformationer, automatisk planlægning og datakvalitetsovervågning.',
    'p5.overview':       'Dette projekt er i øjeblikket under udvikling. Det vil demonstrere en produktionslignende datapipeline — indtagelse af rådata, anvendelse af dbt-transformationer med dokumenteret afstamning og orkestrering af hele arbejdsgangen med Apache Airflow og automatiske datakvalitetstjek.',
    'p5.plan.1':         'Rådata-indtagelse fra flere kilder til et PostgreSQL-datavarehus',
    'p5.plan.2':         'dbt-modeller til staging-, mellemliggende og mart-lag med fuld afstamningsdokumentation',
    'p5.plan.3':         'Datakvalitetstests med dbt\'s indbyggede testframework (not null, unique, referentiel integritet)',
    'p5.plan.4':         'Airflow DAG til end-to-end-orkestrering med retry-logik og advarsler',
    'p5.plan.5':         'BI-dashboard tilsluttet mart-laget til realtidsrapportering',

    // Project 6
    'p6.badge':          'NLP',
    'p6.title':          'Sentimentanalyse-dashboard',
    'projects.p6.desc':  'Realtids-sentimentanalyse af tekst ved hjælp af transformer-modeller med et interaktivt Streamlit-dashboard.',
    'p6.overview':       'Dette projekt er i øjeblikket under udvikling. Det vil anvende naturlig sprogbehandling til at klassificere sentiment i tekstdata — ved hjælp af en forudtrænet transformer-model fra Hugging Face — og præsentere resultaterne i et interaktivt Streamlit-dashboard med trendanalyse og emne-opdeling.',
    'p6.plan.1':         'Dataindsamlings- og forbehandlings-pipeline til tekstdata',
    'p6.plan.2':         'Sentimentklassificering med en finjusteret Hugging Face transformer-model',
    'p6.plan.3':         'Emnemodellering til at identificere tilbagevendende temaer på tværs af positive og negative segmenter',
    'p6.plan.4':         'Tidsseriens sentimenttrenddiagrammer og nøgleordsfrekvensanalyse',
    'p6.plan.5':         'Interaktivt Streamlit-dashboard med søge-, filter- og eksportfunktionalitet',
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = translations[lang][el.dataset.i18n];
    if (t !== undefined) el.textContent = t;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const t = translations[lang][el.dataset.i18nHtml];
    if (t !== undefined) el.innerHTML = t;
  });

  localStorage.setItem('lang', lang);

  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? 'DA' : 'EN';
}

// Apply saved language immediately (before DOM ready to avoid flash)
applyLanguage(localStorage.getItem('lang') || 'en');

// Wire toggle after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = (localStorage.getItem('lang') || 'en') === 'en' ? 'da' : 'en';
      applyLanguage(next);
    });
  }
});
