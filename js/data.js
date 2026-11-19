/* Site content. Edit this file to change what the site says.
   Items with  todo: true  render with a dashed outline and a TBD tag
   until the real detail is filled in. */
window.SITE = {
  meta: {
    name: "ANURODH JHA",
    index: "PROFILE — INDEX Nº 001",
    place: "GREENSBORO, NC — 36.07° N & 79.79° W",
    tagline: "Environmental Epidemiology · Machine Learning · Geospatial Analysis",
    affiliation: "PhD Candidate, Applied Science & Technology · North Carolina A&T State University",
    rotating: [
      "Predicting residential soil metals, and reporting honestly when they will not be predicted.",
      "PFAS mixtures and a liver enzyme that NHANES had never measured before 2021.",
      "Small-area stroke prevalence from soil, housing, roads and demographics.",
      "Teaching language models to read a urinary biomonitoring panel against a reference set."
    ],
    currently: "CURRENTLY ▸ dissertation on pollutant distribution, exposure risk and health outcomes · May 2027",
    github: "Dr-Zero69",
    links: [
      { label: "GITHUB", href: "https://github.com/Dr-Zero69" },
      { label: "LINKEDIN", href: "https://www.linkedin.com/in/anurodh-jha-690105145/" },
      { label: "NC A&T", href: "https://www.ncat.edu/" },
      { label: "NHANES", href: "https://www.cdc.gov/nchs/nhanes/" },
      { label: "CDC", href: "https://www.cdc.gov/" },
      { label: "EMAIL", href: "mailto:", todo: true }
    ]
  },

  whoami: {
    lines: [
      "PhD candidate, North Carolina A&T State University, Greensboro, NC. Environmental Health & Disease Lab.",
      "I work where environmental measurements, biomonitoring data and predictive models meet, and I care whether a model survives honest validation: blocked, nested, weighted, uncertain."
    ],
    facts: [
      { k: "FOCUS", v: "Exposure science · Mixture epidemiology · Spatial ML · Agentic AI · LLMs · RAG" },
      { k: "DATA", v: "Soil metals · Serum PFAS · Urinary biomonitoring · CDC PLACES · Census & TIGER" },
      { k: "STATUS", v: "Prelims submitted · one paper accepted, two under review · open to collaboration", accent: true }
    ]
  },

  education: [
    { years: "2022 — 2027 (exp.)", degree: "PhD, Applied Science & Technology", place: "North Carolina A&T State University · Greensboro, NC",
      note: "Environmental Health & Disease Lab. Dissertation on pollutant distribution, exposure risk and health outcomes. Preliminary exams submitted 2026." },
    { years: "[years]", degree: "[Master's degree · field]", place: "[Institution · city]", note: "[one line on thesis or focus]", todo: true },
    { years: "[years]", degree: "[Bachelor's degree · field]", place: "[Institution · city]", note: "[one line]", todo: true }
  ],

  experience: [
    { years: "2022 — present", role: "Graduate Research Assistant", place: "Environmental Health & Disease Lab · North Carolina A&T State University",
      bullets: [
        "Residential soil-metal campaigns (XRF), spatial modelling and small-area health outcome analyses.",
        "NHANES survey-weighted mixture epidemiology (quantile g-computation, WQS, BKMR).",
        "Reproducible, script-verified manuscripts with Word and Zotero automation."
      ] },
    { years: "[years]", role: "[Role]", place: "[Organisation · city]", bullets: ["[what you did]", "[what it produced]"], todo: true }
  ],

  areas: [
    { title: "EXPOSURE SCIENCE", text: "Where pollutants are, how much, and who is near them: residential soil metals, serum PFAS, urinary biomonitoring." },
    { title: "MIXTURE EPIDEMIOLOGY", text: "Joint effects of correlated exposures in complex survey data, with design-based inference and honest sensitivity analyses." },
    { title: "SPATIAL MACHINE LEARNING", text: "Tree ensembles and penalised models under spatially blocked and nested validation, kriging, Moran's I, SHAP." },
    { title: "AGENTIC AI · LLMS · RAG", text: "Reference sets and evaluation pipelines so language models interpreting health data can be scored against truth." }
  ],

  publications: [
    { n: "01", title: "Soil metals → small-area stroke prevalence",
      q: "Can household soil metals, soil properties, housing, roads and demographics predict modeled stroke prevalence by census tract?",
      how: "Tree ensembles and Ridge under nested leave-one-tract-out and spatially blocked validation; SHAP; honest about 36 tracts.",
      tags: "PYTHON · SCIKIT-LEARN · SHAP · ARCGIS PRO · KRIGING · MORAN'S I", venue: "IJERPH", status: "REVISED AFTER REVIEW" },
    { n: "02", title: "PFAS mixtures × butyrylcholinesterase",
      q: "Serum PFAS and circulating BChE in U.S. adults, using the NHANES 2021–2023 cycle that measured the enzyme for the first time.",
      how: "Survey-weighted quantile g-computation and single-PFAS models; WQS and BKMR sensitivity analyses.",
      tags: "R · SURVEY · QGCOMP · GWQS · BKMR", venue: "TOXICS", status: "ACCEPTED NOVEMBER 2026" },
    { n: "03", title: "Element-specific predictability of residential soil metals",
      q: "Multi-output machine learning for Pb, Cd, Zn, Se and Cu from covariates alone, tested with spatial blocking and an external city.",
      how: "Shows which elements carry covariate signal and which do not, and why random CV overstates all of them.",
      tags: "PYTHON · RANDOM FOREST · SPATIAL CV · GEOPANDAS", venue: "ENVIRONMENTS", status: "REVISED AFTER REVIEW" },
    { n: "04", title: "Language models × urinary biomonitoring",
      q: "An NHANES-based reference set so that LLMs interpreting urinary biomonitoring results can be scored against truth.",
      how: "Phase 0 complete: analyte and cycle selection, detection audit, joint cohort. Phase 1: weighted percentiles.",
      tags: "NHANES 2011–2018 · PYTHON · DESIGN-BASED ESTIMATION · LLM EVALUATION", venue: "", status: "IN PROGRESS" }
  ],

  projects: [
    { n: "05", title: "Valorant win-rate prediction",
      l1: "Player performance statistics (K/D, kills, deaths, assists, maps, agents) as predictors of win rate.",
      l2: "Feature engineering and model comparison in a notebook, because epidemiologists also play games.",
      tags: "JUPYTER · PYTHON · SCIKIT-LEARN", repo: "Dr-Zero69/Valorant-Win-Rate-Prediction" },
    { n: "06", title: "Firebrand trajectory predictor",
      l1: "Predicting where wind-borne embers land, an input to wildfire spread and structure-ignition risk.",
      l2: "Physics-informed features with a learned trajectory model.",
      tags: "PYTHON · SIMULATION", repo: "Dr-Zero69/Firebrand-Trajectory-Predictor" },
    { n: "07", title: "Battery heating and heater signal",
      l1: "Thermal behaviour of a battery pack and the control signal that keeps it in its operating window.",
      l2: "Signal processing and modelling of heater response.",
      tags: "PYTHON", repo: "Dr-Zero69/Battery-heating-and-heater-signal" }
  ],

  stack: [
    { k: "LANGUAGES", v: "Python · R · SQL · PowerShell · C#" },
    { k: "MODELLING", v: "scikit-learn · Random Forest / Extra Trees · Ridge · SHAP · nested & spatial CV" },
    { k: "MIXTURES", v: "survey · qgcomp · gWQS · bkmr · design-based inference, domain analysis, FDR control" },
    { k: "GEOSPATIAL", v: "ArcGIS Pro · geopandas · ordinary kriging · Moran's I · spatial folds · TIGER/Line" },
    { k: "DATA", v: "NHANES · CDC PLACES / 500 Cities · Census & ACS · county GIS · XRF soil campaigns" },
    { k: "WRITING", v: "Word & Zotero automation (lxml, CSL) · reproducible, script-verified manuscripts" },
    { k: "AI", v: "Agentic AI workflows · LLM evaluation · RAG pipelines · Claude API & Code · Azure AI" },
    { k: "TOOLING", v: "Jupyter · Git · VS Code · PowerShell" }
  ],

  timeline: [
    { year: "2022", text: "Joined GitHub. First notebooks." },
    { year: "2024", text: "Firebrand trajectory predictor · Azure AI Vision labs · first spatial models." },
    { year: "2025", text: "Battery heater-signal modelling · Valorant win-rate prediction · soil metal analyses begin." },
    { year: "2026", text: "Three manuscripts submitted and revised · Toxics paper accepted · prelims · LLM Phase 0.", now: true },
    { year: "2027", text: "Phase 1 reference percentiles · full dissertation draft · defense · graduation (May)." }
  ],

  hobbies: [
    { title: "COOKING", text: "[what you cook, a dish you are proud of]", todo: true },
    { title: "WORKOUT", text: "[lifting, running, whatever it is]", todo: true },
    { title: "GAMES", text: "Valorant, enough to build a win-rate model about it." },
    { title: "THE OTHER 997", text: "[the rest of the 1000 hobbies go here]", todo: true }
  ],

  footer: {
    status: "STATUS — RESEARCH, COOK, WORKOUT AND WORK ON MY 1000 HOBBIES :D",
    quote: "\"If the held-out error is good, check the folds.\" — Dr. Zero",
    right: "Greensboro, NC   ·   © 2026"
  }
};
