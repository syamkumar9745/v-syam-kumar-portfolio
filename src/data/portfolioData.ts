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
    id: "autonomous-data-analyst",
    title: "Autonomous Data Analyst",
    liveDemoUrl: "https://ada-frontend-fg76.onrender.com/",
    category: "AI / ML",
    tagline: "AI-powered data analysis system designed to automate data exploration and analytical workflows.",
    description: "An autonomous AI project focused on turning data analysis tasks into an intelligent, tool-driven workflow.",
    fullOverview: "An AI-focused project demonstrating autonomous data analysis workflows and intelligent interaction with data.",
    highlights: [
      "Autonomous data analysis workflow",
      "AI-driven analytical reasoning",
      "Designed as an intelligent data analysis application"
    ],
    technologies: ["Python", "AI", "Data Analysis", "Machine Learning"],
    metrics: [
      { label: "Project Type", value: "AI Agent" },
      { label: "Deployment", value: "Live" }
    ],
    architectureSummary: [
      "Data Input",
      "AI Reasoning",
      "Analysis Workflow",
      "Generated Insights"
    ],
    keyContribution: "Built an AI-focused system for automating data analysis workflows.",
    githubUrl: "https://github.com/syamkumar9745/autonomous-data-analyst",
    badge: "AI Agent"
  },
  {
    id: "stock-research-agent",
    title: "Stock Research Agent",
    category: "AI / ML",
    tagline: "AI agent project focused on automating stock research and financial information analysis.",
    description: "AI agent designed to support structured stock research through automated information analysis.",
    fullOverview: "AI-focused research agent demonstrating intelligent workflows for financial research and analysis.",
    highlights: [
      "AI-powered research workflow",
      "Automated financial information analysis",
      "Agent-oriented application architecture"
    ],
    technologies: ["Python", "AI Agents", "LLMs", "Financial Research"],
    metrics: [
      { label: "Project Type", value: "AI Agent" },
      { label: "Status", value: "GitHub" }
    ],
    architectureSummary: [
      "Research Input",
      "Information Processing",
      "AI Reasoning",
      "Research Output"
    ],
    keyContribution: "Developed an AI-agent project focused on automating structured stock research workflows.",
    githubUrl: "https://github.com/syamkumar9745/stock-research-agent",
    badge: "AI Agent"
  },
  {
    id: "fintrack-ai",
    title: "FinTrack AI ? Personal Finance Analytics",
    category: "AI / ML",
    tagline: "AI-powered personal finance platform combining analytics, machine learning, dashboards, and financial reporting.",
    description: "Python-based personal finance analytics platform for transaction management, financial insights, visualization, reporting, and expense prediction.",
    fullOverview: "A financial analytics application combining transaction management, data analysis, interactive dashboards, report generation, and machine learning-based expense prediction.",
    highlights: [
      "Financial analytics for income, expenses, cash flow, savings, and spending categories",
      "Machine learning workflow for expense prediction using feature engineering and Linear Regression",
      "Interactive Streamlit dashboards for financial visualization",
      "Automated CSV, Excel, and PDF financial reports"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit", "Plotly"],
    metrics: [
      { label: "ML Model", value: "Linear Regression" },
      { label: "Dashboard", value: "Streamlit" },
      { label: "Reports", value: "CSV / Excel / PDF" }
    ],
    architectureSummary: [
      "Transaction Collection",
      "Data Cleaning & Feature Engineering",
      "Financial Analytics",
      "ML Expense Prediction",
      "Interactive Dashboard & Reports"
    ],
    keyContribution: "Integrated personal finance analytics, machine learning, visualization, and reporting into a single application.",
    githubUrl: "https://github.com/syamkumar9745/FinTrack_AI",
    badge: "AI / ML"
  },
  {
    id: "retail-bi-sql",
    title: "Retail Business Intelligence System",
    category: "Data Analytics / BI",
    tagline: "End-to-end SQL analytics system for retail sales, inventory, profitability, promotions, and customer behavior.",
    description: "Business intelligence project transforming retail datasets into structured SQL analysis and business insights.",
    fullOverview: "A retail analytics system covering sales, inventory, profitability, promotions, and customer behavior through structured SQL analysis.",
    highlights: [
      "Analyzed sales, inventory, profitability, promotions, and customer behavior",
      "Used joins, aggregations, CASE expressions, subqueries, CTEs, and window functions",
      "Analyzed stockouts, overstock, replenishment, and promotion effectiveness",
      "Translated analytical results into business decision support"
    ],
    technologies: ["SQL", "MySQL", "Data Analysis", "Business Intelligence", "Data Modeling"],
    metrics: [
      { label: "Data Domains", value: "5+" },
      { label: "SQL", value: "Advanced" },
      { label: "Project Type", value: "BI Analytics" }
    ],
    architectureSummary: [
      "Retail Dataset Preparation",
      "Relational Data Analysis",
      "SQL Query Development",
      "Business KPI Analysis"
    ],
    keyContribution: "Built an end-to-end SQL analytics workflow for extracting retail business insights.",
    githubUrl: "https://github.com/syamkumar9745/Retail_Business_Intelligence_System_SQL_Analytics",
    badge: "SQL & BI"
  },
  {
    id: "grocery-store-sales-analysis",
    title: "Grocery Store Sales Analysis",
    category: "Data Science",
    tagline: "Python-based grocery sales analysis using data cleaning, visualization, and exploratory analysis.",
    description: "Data analysis project focused on understanding grocery sales patterns and extracting business insights.",
    fullOverview: "An exploratory data analysis project using Python to clean, analyze, visualize, and interpret grocery sales data.",
    highlights: [
      "Performed data cleaning and exploratory data analysis",
      "Analyzed sales patterns and trends",
      "Created visualizations to communicate analytical findings"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Project Type", value: "Data Analysis" },
      { label: "Core Tool", value: "Python" }
    ],
    architectureSummary: [
      "Data Cleaning",
      "Exploratory Analysis",
      "Statistical Visualization",
      "Business Insights"
    ],
    keyContribution: "Analyzed grocery sales data and converted raw records into structured analytical insights.",
    githubUrl: "https://github.com/syamkumar9745/grocery-store-sales-analysis",
    badge: "Data Analysis"
  },
  {
    id: "netflix-data-analysis",
    title: "Netflix Data Analysis",
    category: "Data Science",
    tagline: "End-to-end Netflix data analysis using Python, Pandas, NumPy, Matplotlib, and Seaborn.",
    description: "Data science project covering data cleaning, feature engineering, exploratory analysis, visualization, and business insights.",
    fullOverview: "An end-to-end Netflix content data analysis project using the Python data science stack.",
    highlights: [
      "Performed data cleaning and preprocessing",
      "Applied feature engineering to prepare analytical variables",
      "Conducted exploratory data analysis and visualization",
      "Generated business-oriented insights from Netflix content data"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Project Type", value: "EDA" },
      { label: "Core Language", value: "Python" }
    ],
    architectureSummary: [
      "Data Cleaning",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Data Visualization"
    ],
    keyContribution: "Performed end-to-end exploratory analysis of Netflix content data using Python.",
    githubUrl: "https://github.com/syamkumar9745/Netflix_Data_Analysis",
    badge: "Data Science"
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


