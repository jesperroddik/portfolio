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
    'projects.p3.desc': 'Coming soon.',

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
    'certs.tag.py-ai':   'Teknologisk Institut · May 2025',

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
    'p3.coming-soon': 'Coming Soon',
    'p3.message':     'This project is currently in progress. Check back soon.',
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
    'projects.p3.desc': 'Kommer snart.',

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
    'certs.tag.py-ai':  'Teknologisk Institut · Maj 2025',

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
    'p3.coming-soon': 'Kommer snart',
    'p3.message':     'Dette projekt er i gang. Kig forbi snart.',
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
