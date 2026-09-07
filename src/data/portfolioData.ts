import { Project, SkillCategory, ExperienceItem, CertificationItem, AIPipelineNode } from '../types';

export const PERSONAL_INFO = {
  name: "V. SYAM KUMAR",
  shortName: "VSK",
  title: "AI Engineer | Gen-AI Developer | Machine Learning & Data Scientist",
  tagline: "Engineering autonomous AI agents, machine learning architectures, and scalable data systems by fusing cutting-edge Generative AI with production-grade engineering.",
  email: "syamkumar7586@gmail.com",
  phone: "6302278053",
  phoneFormatted: "+91 6302278053",
  location: "Chennai, India",
  status: "Available for AI Engineering & Machine Learning Roles",
  socials: {
    github: "https://github.com/syamkumar9745",
    linkedin: "https://linkedin.com/in/syam-kumar-63b848303",
    leetcode: "https://leetcode.com/u/syam_venigalla_87/",
    hackerrank: "https://www.hackerrank.com/profile/syamvenigalla87",
  },
  education: {
    degree: "B.Tech — Computer Science and Engineering",
    specialization: "Artificial Intelligence & Data Science",
    institution: "Jeppiaar University, Chennai",
    status: "Final Year (Expected Graduation: June 2027)",
    cgpa: "8.00",
    highlights: [
      "Specialized in Deep Learning, Neural Networks & Machine Learning Architectures",
      "Rigorous foundations in Data Structures, Algorithms, Probability & Statistics",
      "Hands-on coursework in Big Data Analytics, Cloud Computing, and NLP",
      "Active problem solver on LeetCode & HackerRank algorithmic platforms"
    ]
  }
};

export const PROJECTS: Project[] = [
  {
    id: "fraud-detection",
    title: "AI-Powered Financial Fraud Detection",
    category: "AI / ML",
    tagline: "Machine learning system for real-time anomaly detection and fraud classification in high-volume transaction streams.",
    description: "An intelligent fraud detection system designed to identify suspicious financial transactions using machine learning and data-driven analysis.",
    fullOverview: "Financial fraud imposes billions of dollars in losses annually. This project establishes an end-to-end machine learning pipeline that handles extreme class imbalance, extracts high-signal behavioral features, and classifies anomalous transactions with high precision and low false positives.",
    highlights: [
      "Addressed severe class imbalance (0.17% fraud) using SMOTE and stratified cross-validation",
      "Engineered robust temporal and transactional features (velocity, amount deviation, time-since-last-txn)",
      "Trained and benchmarked multiple algorithms: XGBoost, Random Forest, Logistic Regression, and Isolation Forests",
      "Evaluated models using Precision-Recall AUC (PR-AUC), ROC-AUC (0.96), and F1-Score to prioritize recall without overwhelming fraud analysts"
    ],
    technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "ROC-AUC", value: "0.96" },
      { label: "PR-AUC", value: "0.89" },
      { label: "Recall Rate", value: "92.4%" }
    ],
    architectureSummary: [
      "Data Ingestion & Cleaning",
      "Feature Scaling (RobustScaler)",
      "SMOTE Resampling",
      "Ensemble Classification (XGBoost)",
      "Threshold Tuning for Optimal Business Cost"
    ],
    keyContribution: "Designed end-to-end data preprocessing pipeline, executed extensive feature importance analysis, and achieved 0.96 ROC-AUC on imbalanced financial datasets.",
    githubUrl: "https://github.com/syamkumar9745",
    badge: "Machine Learning"
  },
  {
    id: "fintrack-ai",
    title: "FinTrack AI — Predictive Financial Intelligence",
    category: "Full-Stack",
    tagline: "Intelligent financial analytics system with automated spending classification and predictive cash flow forecasting.",
    description: "An AI-oriented financial management architecture focused on automated transaction categorization, trend detection, and expense forecasting.",
    fullOverview: "FinTrack AI demonstrates how machine learning heuristics and automated categorization rules transform unformatted bank transactions into actionable budget insights, predictive savings goals, and cash flow projections.",
    highlights: [
      "Designed clean modular user interface with interactive expense tracking charts",
      "Integrated automated transaction categorization algorithms for recurring subscription detection",
      "Engineered monthly budget forecasting based on historical expenditure velocity",
      "Structured lightweight client-side state management for instantaneous UI feedback"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js", "Express.js"],
    metrics: [
      { label: "Categorization Accuracy", value: "94%" },
      { label: "Latency", value: "< 50ms" },
      { label: "Architecture", value: "Modular" }
    ],
    architectureSummary: [
      "Transaction Parsing & Hygiene Engine",
      "Rule-Based & ML Classification Pipeline",
      "Predictive Budget Time-Series Forecasting",
      "Interactive Real-time Visual Dashboard"
    ],
    keyContribution: "Architected full-stack concept, interactive dashboard visualizations, responsive UI components, and transaction classification logic.",
    githubUrl: "https://github.com/syamkumar9745",
    badge: "AI Product Architecture"
  },
  {
    id: "retail-bi-sql",
    title: "Retail Sales Business Intelligence & SQL Analytics System",
    category: "Data Analytics / BI",
    tagline: "Enterprise SQL analytical pipeline uncovering revenue drivers, store KPIs, and cohort retention.",
    description: "A comprehensive business intelligence and SQL analytics system transforming raw retail transaction records into strategic executive insights.",
    fullOverview: "Retail enterprises generate millions of row transactions across multiple store branches. This project executes complex SQL analytical queries (window functions, CTEs, rollups, cohort analyses) to evaluate store performance, customer lifetime value, seasonal purchasing trends, and stock turnover.",
    highlights: [
      "Constructed complex multi-table SQL queries utilizing CTEs, Window Functions (DENSE_RANK, LEAD/LAG, PARTITION BY), and aggregations",
      "Identified top 20% revenue-generating customer cohorts driving 72% of total store profitability",
      "Calculated Month-over-Month (MoM) revenue growth, customer retention rates, and average order values (AOV)",
      "Extracted clear operational recommendations for inventory replenishment and markdown schedules"
    ],
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design", "Excel", "Data Transformation"],
    metrics: [
      { label: "Records Analyzed", value: "100k+" },
      { label: "Query Execution", value: "Optimized" },
      { label: "KPI Accuracy", value: "100%" }
    ],
    architectureSummary: [
      "Relational Schema Design (Star/Snowflake schema)",
      "Data Cleaning & Normalization",
      "Analytical CTEs & Window Aggregations",
      "Executive KPI Summary Generation"
    ],
    keyContribution: "Formulated complete analytical SQL query suite, optimized database indexing for analytical queries, and synthesized key business findings into strategic summaries.",
    githubUrl: "https://github.com/syamkumar9745",
    badge: "SQL & Analytics"
  },
  {
    id: "grocery-powerbi",
    title: "Grocery Store Sales Analysis & Executive Dashboard",
    category: "Data Analytics / BI",
    tagline: "Interactive Power BI executive dashboard tracking inventory turnover, category margins, and regional sales.",
    description: "An end-to-end Power BI business intelligence dashboard offering deep visibility into retail sales performance, product category margins, and customer purchasing patterns.",
    fullOverview: "A data analytics project focused on designing intuitive, high-impact business intelligence dashboards. Cleaned and modeled grocery sales data, developed custom DAX measures, and created an interactive multi-page dashboard for store managers and regional directors.",
    highlights: [
      "Engineered customized DAX calculated measures (YTD Sales, Profit Margins, Rolling Averages)",
      "Designed dynamic filterable dashboard views for Category Breakdown, Regional Store Heatmaps, and Payment Method Preferences",
      "Identified high-margin impulse goods vs high-velocity low-margin staple items to optimize shelf placement",
      "Built intuitive drill-through capabilities allowing drill-downs from national performance to individual SKU levels"
    ],
    technologies: ["Power BI", "DAX", "Data Modeling", "Excel", "Data Storytelling"],
    metrics: [
      { label: "Custom DAX Measures", value: "25+" },
      { label: "Dashboard Views", value: "3 Pages" },
      { label: "Insight Clarity", value: "Executive" }
    ],
    architectureSummary: [
      "ETL Pipeline in Power Query",
      "Star Schema Dimensional Modeling",
      "DAX Measure Development",
      "Interactive UI Layout & Visual Hierarchy"
    ],
    keyContribution: "Executed entire data modeling in Power Query, authored custom DAX calculations, and constructed user-friendly interactive report layouts.",
    githubUrl: "https://github.com/syamkumar9745",
    badge: "Power BI / BI"
  },
  {
    id: "netflix-eda",
    title: "Netflix Content Trends & Viewing Analytics",
    category: "Data Science",
    tagline: "Exploratory Data Analysis investigating content release velocity, genre distributions, and international expansion.",
    description: "Comprehensive exploratory data analysis uncovering Netflix's global content strategy, duration distributions, rating shifts, and geographical production trends.",
    fullOverview: "Analyzing thousands of Netflix titles to understand streaming platform content acquisition and original production strategies over the past decade. Utilized Python data science stack to clean messy metadata, parse multi-value genre lists, and visualize content evolution.",
    highlights: [
      "Processed and cleansed missing values in directorial, cast, and regional metadata",
      "Discovered exponential growth in TV Show productions starting in 2016 alongside international expansion in Asian and European markets",
      "Analyzed distribution of content ratings (TV-MA, TV-14) showing a strategic pivot toward mature audience demographics",
      "Created publication-quality visualizations using Matplotlib and Seaborn with custom color palettes"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy", "Jupyter Notebook"],
    metrics: [
      { label: "Titles Cleansed", value: "8,800+" },
      { label: "Visualizations", value: "15+ Plots" },
      { label: "Insights Derived", value: "10 Core Trends" }
    ],
    architectureSummary: [
      "Data Cleaning & Handling Nulls",
      "String Tokenization & Genre Parsing",
      "Univariate & Bivariate Statistical Analysis",
      "Visual Data Storytelling"
    ],
    keyContribution: "Conducted statistical exploratory data analysis, handled complex nested strings, and generated structured visual reports illustrating platform content evolution.",
    githubUrl: "https://github.com/syamkumar9745",
    badge: "Data Science / EDA"
  },
  {
    id: "student-performance",
    title: "Student Academic Performance Statistical EDA",
    category: "Data Science",
    tagline: "Statistical analysis and multivariate regression uncovering factors influencing academic achievement.",
    description: "An in-depth statistical exploratory data analysis examining demographic, socioeconomic, and educational variables affecting student exam performance.",
    fullOverview: "Investigating the key determinants of educational outcomes using structured tabular data. Evaluated relationships between parental education levels, test preparation courses, lunch subsidies, and standardized math/reading/writing scores.",
    highlights: [
      "Conducted hypothesis testing and correlation analysis across socioeconomic factors",
      "Identified that completed test preparation courses accounted for a statistically significant 10-12% boost in overall test composite scores",
      "Visualized score distributions and identified potential intervention targets to narrow achievement disparities",
      "Built clean, reproducible Jupyter Notebook workflows with statistical summary tables"
    ],
    technologies: ["Python", "Pandas", "Seaborn", "Scipy / Stats", "Data Storytelling"],
    metrics: [
      { label: "Score Variance Explained", value: "High" },
      { label: "Hypothesis Tests", value: "Validated" },
      { label: "Code Quality", value: "Modular" }
    ],
    architectureSummary: [
      "Data Hygiene & Verification",
      "Grouped Statistical Aggregations",
      "Correlation Matrix & Distribution Plots",
      "Actionable Policy Findings"
    ],
    keyContribution: "Executed thorough statistical hypothesis evaluations, generated multivariate correlation plots, and compiled data-driven educational insights.",
    githubUrl: "https://github.com/syamkumar9745",
    badge: "Statistical Analysis"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Core software engineering & algorithmic foundation",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Core Focus", tag: "Data, ML, Neural Nets, Scripting" },
      { name: "Java", level: "Proficient", tag: "OOP, Data Structures, Algorithms" },
      { name: "JavaScript (ES6+)", level: "Proficient", tag: "Modern Web, Async, APIs" },
      { name: "TypeScript", level: "Hands-on", tag: "Type-safe Engineering" }
    ]
  },
  {
    title: "Machine Learning & AI",
    subtitle: "Predictive models, classification, and neural architectures",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", level: "Core Focus", tag: "Scikit-Learn, XGBoost" },
      { name: "Generative AI & LLMs", level: "Core Focus", tag: "Prompt Eng., Reasoning" },
      { name: "RAG & Vector Search", level: "Core Focus", tag: "Embeddings, Retrieval" },
      { name: "Anomaly Detection", level: "Core Focus", tag: "Isolation Forests, Fraud" },
      { name: "Feature Engineering", level: "Core Focus", tag: "SMOTE, Scaling, Imbalance" },
      { name: "Model Evaluation", level: "Core Focus", tag: "ROC-AUC, PR-AUC, F1" }
    ]
  },
  {
    title: "Data Science & Analytics",
    subtitle: "Exploratory data analysis, statistical tests & arrays",
    icon: "Activity",
    skills: [
      { name: "Pandas", level: "Core Focus", tag: "Data Manipulation, Wrangling" },
      { name: "NumPy", level: "Core Focus", tag: "Vectorized Computations" },
      { name: "Matplotlib & Seaborn", level: "Proficient", tag: "Statistical Plots" },
      { name: "Statistical Hypothesis Testing", level: "Proficient", tag: "Correlation, Distributions" },
      { name: "Data Cleaning & Hygiene", level: "Core Focus", tag: "Outliers, Null Imputation" }
    ]
  },
  {
    title: "Databases & Storage",
    subtitle: "Relational modeling, complex queries, and NoSQL stores",
    icon: "Database",
    skills: [
      { name: "SQL", level: "Core Focus", tag: "Window Functions, CTEs, Joins" },
      { name: "MySQL", level: "Proficient", tag: "Relational Schemas, Indexing" },
      { name: "MongoDB", level: "Hands-on", tag: "Document Stores, JSON" }
    ]
  },
  {
    title: "Business Intelligence & Tools",
    subtitle: "Executive dashboarding and quantitative business metrics",
    icon: "BarChart3",
    skills: [
      { name: "Power BI", level: "Proficient", tag: "DAX, Interactive Dashboards" },
      { name: "Microsoft Excel", level: "Proficient", tag: "VLOOKUP, Pivot Tables, Formulas" },
      { name: "Tableau", level: "Hands-on", tag: "Visual Analytics" }
    ]
  },
  {
    title: "Full-Stack & Developer Tools",
    subtitle: "Modern interfaces, REST APIs, and developer environments",
    icon: "Terminal",
    skills: [
      { name: "React", level: "Proficient", tag: "Hooks, Component Architecture" },
      { name: "Node.js & Express.js", level: "Hands-on", tag: "REST API Backend" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Modern UI Styling" },
      { name: "Git & GitHub", level: "Proficient", tag: "Version Control" },
      { name: "VS Code & Jupyter", level: "Core Focus", tag: "Development IDEs" },
      { name: "Google Colab", level: "Proficient", tag: "GPU Cloud Acceleration" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Code N Career (CNC)",
    role: "Virtual Intern — Data Science & Data Analytics",
    period: "June 15, 2025 – July 15, 2025",
    type: "Virtual Internship",
    description: [
      "Conducted comprehensive data analysis and statistical preprocessing on structured business datasets using Python and Pandas.",
      "Engineered interactive exploratory data analysis (EDA) workflows to extract trends, anomalies, and performance metrics.",
      "Developed visual storytelling dashboards to communicate quantitative findings and business insights effectively."
    ],
    skills: ["Python", "Pandas", "Data Analytics", "EDA", "Statistical Visualization"],
    verified: true
  },
  {
    company: "CodeSoft",
    role: "Data Science Intern",
    period: "2026",
    type: "Internship",
    description: [
      "Built and evaluated machine learning classification and regression models using Scikit-Learn on structured problem datasets.",
      "Implemented rigorous feature engineering, outlier detection, and data cleansing pipelines.",
      "Documented predictive model metrics (Accuracy, Precision, Recall, ROC curves) to validate model generalization."
    ],
    skills: ["Machine Learning", "Scikit-Learn", "Feature Engineering", "Python", "Model Evaluation"],
    verified: true
  },
  {
    company: "Deloitte",
    role: "Virtual Internship / Learning Program",
    period: "Virtual Experience",
    type: "Program Participant",
    description: [
      "Completed virtual learning simulations centered on business intelligence, data analytics, and forensic technology tasks.",
      "Applied Tableau visualization techniques to analyze enterprise datasets and detect transaction irregularities.",
      "Strengthened problem-solving capabilities in corporate data governance and quantitative reporting."
    ],
    skills: ["Tableau", "Data Analysis", "Forensic Analytics", "Executive Reporting"],
    verified: true
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Microsoft Prompt Engineering",
    issuer: "Microsoft",
    category: "Generative AI & LLMs",
    verified: true,
    skillsCovered: ["Prompt Design", "In-context Learning", "LLM Guardrails", "Reasoning Strategies"]
  },
  {
    title: "Machine Learning Using Python",
    issuer: "Simplilearn SkillUp",
    category: "Machine Learning",
    verified: true,
    skillsCovered: ["Supervised Learning", "Regression & Classification", "Model Tuning", "Python ML"]
  },
  {
    title: "IT Primer Course",
    issuer: "L&T EduTech",
    category: "Core Software Engineering",
    verified: true,
    skillsCovered: ["Software Fundamentals", "Database Concepts", "IT Architecture", "Enterprise Systems"]
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    category: "Data Science",
    verified: true,
    skillsCovered: ["Data Analysis", "NumPy & Pandas", "Data Structures", "APIs & Web Scraping"]
  }
];

export const AI_PIPELINE_STEPS: AIPipelineNode[] = [
  {
    step: "01",
    name: "Data Ingestion & Cleaning",
    desc: "Ingesting raw tabular, text, and event data. Handling missing values, tokenization, and schema validation.",
    icon: "Database",
    tags: ["Pandas", "ETL", "Validation"],
    color: "#6366F1"
  },
  {
    step: "02",
    name: "Feature Engineering & Embeddings",
    desc: "Transforming raw data into predictive feature spaces and generating semantic vector embeddings.",
    icon: "Binary",
    tags: ["Vector Embeddings", "Feature Scaling", "Encoding"],
    color: "#06B6D4"
  },
  {
    step: "03",
    name: "Foundation LLMs & Models",
    desc: "Leveraging state-of-the-art models for reasoning, extraction, classification, and language synthesis.",
    icon: "Cpu",
    tags: ["OpenAI", "Anthropic", "Llama", "Gemini"],
    color: "#A855F7"
  },
  {
    step: "04",
    name: "Retrieval-Augmented Generation (RAG)",
    desc: "Grounding LLMs on enterprise knowledge bases with semantic search to eliminate hallucination.",
    icon: "Search",
    tags: ["Vector DBs", "Chunking", "Context Window"],
    color: "#38BDF8"
  },
  {
    step: "05",
    name: "Autonomous AI Agents",
    desc: "Equipping models with tool-calling capabilities, multi-step planning, and self-reflection loops.",
    icon: "Bot",
    tags: ["Tool Use", "ReAct Loops", "Decision Trees"],
    color: "#EC4899"
  },
  {
    step: "06",
    name: "Pipeline & Action Automation",
    desc: "Connecting agent decisions directly to business execution channels, APIs, and data warehouses.",
    icon: "GitBranch",
    tags: ["Event Bus", "Webhooks", "API Orchestration"],
    color: "#10B981"
  },
  {
    step: "07",
    name: "Production Intelligent Applications",
    desc: "Delivering fast, responsive, and secure digital products with telemetry and human-in-the-loop controls.",
    icon: "Rocket",
    tags: ["React", "TypeScript", "Observability", "UX"],
    color: "#F59E0B"
  }
];

export const PHILOSOPHY_STEPS = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Deconstruct the core problem",
    description: "Start by analyzing the domain challenge, data distribution, and end-user objective. Identify bottlenecks before writing a single line of code.",
    points: [
      "Define quantitative success metrics (latency, accuracy, PR-AUC)",
      "Audit underlying data quality and distribution imbalances",
      "Map out system constraints and edge cases"
    ]
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Architect for scale & resilience",
    description: "Formulate resilient data schemas, API contracts, modular component hierarchies, and machine learning pipelines.",
    points: [
      "Design normalized schemas and decoupled pipelines",
      "Select optimal ML/AI models for performance vs compute cost",
      "Create clean, accessible, and responsive user interfaces"
    ]
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Engineer with precision",
    description: "Implement solutions using modern software engineering best practices, type safety, robust error handling, and clean code.",
    points: [
      "Write modular, reusable, and self-documenting code",
      "Implement defensive validation and error recovery",
      "Optimize computational efficiency and GPU/CPU inference"
    ]
  },
  {
    number: "04",
    title: "Improve",
    subtitle: "Measure, benchmark & iterate",
    description: "Continuous telemetry, prompt refinement, model evaluation, and performance tuning based on real operational feedback.",
    points: [
      "Monitor response times and model drift",
      "Refine prompts and embeddings to minimize hallucination",
      "Iterate based on statistical data observations"
    ]
  }
];
