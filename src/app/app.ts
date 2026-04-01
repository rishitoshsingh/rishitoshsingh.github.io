import { Component } from '@angular/core';

type EducationItem = {
  school: string;
  timeframe: string;
  degree: string;
  courses: string;
  logoSrc?: string;
  logoAlt?: string;
};

type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  timeframe: string;
  logoSrc?: string;
  logoAlt?: string;
  highlights: string[];
};

type ProjectItem = {
  name: string;
  timeframe: string;
  href: string;
  hrefLabel: string;
  docsHref?: string;
  docsLabel?: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

type PublicationItem = {
  title: string;
  venue: string;
  year: string;
  href: string;
  authors: string;
  note?: string;
  logoSrc?: string;
  logoAlt?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly name = 'Rishitosh Kumar Singh';
  protected readonly role = 'Machine Learning Engineer and Applied AI Builder';
  protected readonly intro =
    'I build production-minded ML systems, data pipelines, and applied AI products across research, analytics, and real-world deployment.';
  protected readonly heroSummary =
    'My work sits at the intersection of machine learning engineering, data systems, and practical product thinking. I enjoy taking an ambiguous problem, designing the pipeline around it, and shipping something useful that can be measured, maintained, and extended.';
  protected readonly location = 'Tempe, Arizona';
  protected readonly email = 'rishitoshs@gmail.com';
  protected readonly phone = '602-642-6645';
  protected readonly linkedin = 'https://linkedin.com/in/rishitoshsingh';
  protected readonly github = 'https://github.com/rishitoshsingh';
  protected readonly resumePath = '/resume/resume.pdf';
  protected readonly profileImage = '/images/profile.png';

  protected readonly focusAreas = [
    'Production ML pipelines',
    'LLMs, RAG, and agentic systems',
    'Data engineering and MLOps',
    'NLP and analytics workflows'
  ];

  protected readonly quickFacts = [
    { value: '5+', label: 'years across ML, analytics, and product-facing systems' },
    { value: '10K+', label: 'simulation trials automated for research evaluation' },
    { value: '35%', label: 'faster retraining cycles in production ML workflows' },
    { value: '62%', label: 'lower inference cost on deployed computer vision systems' }
  ];

  protected readonly portfolioSections = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Current Work', href: '#current-work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' }
  ];

  protected readonly strengths = [
    {
      title: 'Production-minded ML',
      description:
        'I focus on workflows that do not stop at experimentation: training, retraining, drift detection, deployment, monitoring, and long-term maintainability.'
    },
    {
      title: 'Data systems thinking',
      description:
        'A lot of model quality comes from the quality of the pipeline around it. I like building the ingestion, transformation, and evaluation paths that make ML useful.'
    },
    {
      title: 'Applied AI with product context',
      description:
        'I am most effective when the work connects technical depth with a user or operational need, whether that is a recruiter-facing RAG tool or an internal analytics platform.'
    }
  ];

  protected readonly workingStyle = [
    'Translate ambiguous problems into measurable technical milestones',
    'Prefer simple architectures that can scale gradually over clever demos',
    'Balance research exploration with production constraints',
    'Build systems that leave behind reusable tooling, not one-off notebooks'
  ];

  protected readonly education: EducationItem[] = [
    {
      school: 'Arizona State University',
      timeframe: 'Anticipated May 2026',
      degree: 'Master of Science in Computer Science',
      courses: 'NLP, Statistical ML, Cloud Computing, Algorithms, Image Analytics, Data Mining, Web Mining',
      logoSrc: '/logos/asu-logo.png',
      logoAlt: 'Arizona State University logo'
    },
    {
      school: 'Dr. A.P.J. Abdul Kalam Technical University',
      timeframe: 'September 2020',
      degree: 'Bachelor of Technology in Computer Science',
      courses: 'Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks',
      logoSrc: '/logos/aktu-logo.png',
      logoAlt: 'Dr. A.P.J. Abdul Kalam Technical University logo'
    }
  ];

  protected readonly skillGroups = [
    {
      label: 'Machine Learning and AI',
      items: 'Python, PyTorch, TensorFlow, scikit-learn, LLMs, RAG, MCP, LangChain, LiteLLM, LangGraph, fine-tuning, agentic AI, NLP'
    },
    {
      label: 'Data Engineering and MLOps',
      items: 'Spark, PySpark, Airflow, Kafka, MLflow, SageMaker, Docker, Kubernetes, CI/CD, automated pipelines, model deployment'
    },
    {
      label: 'Cloud and Infrastructure',
      items: 'AWS, Snowflake, Linux, Bash scripting'
    },
    {
      label: 'Software Development',
      items: 'Python, C++, SQL, JavaScript, Flask, FastAPI, REST APIs, Git, system design'
    },
    {
      label: 'Visualization and Analytics',
      items: 'Pandas, NumPy, Matplotlib, Streamlit'
    }
  ];

  protected readonly experience: ExperienceItem[] = [
    {
      role: 'Research Assistant',
      organization: 'Arizona State University',
      location: 'Tempe, AZ',
      timeframe: 'February 2025 - Present',
      logoSrc: '/logos/asu-logo.png',
      logoAlt: 'Arizona State University logo',
      highlights: [
        'Automated large-scale simulation pipelines across 10K+ trials to generate structured gameplay data for benchmarking optimization strategies.',
        'Developed text analytics workflows for interview and survey data using Python, scikit-learn, clustering, and topic modeling.',
        'Designed and maintained Snowflake preprocessing pipelines for downstream analytics and model training.'
      ]
    },
    {
      role: 'Machine Learning Engineer',
      organization: 'Tiger Analytics India Private Limited',
      location: 'Hyderabad, India',
      timeframe: 'June 2022 - December 2023',
      logoSrc: '/logos/tiger-analytics-logo.png',
      logoAlt: 'Tiger Analytics logo',
      highlights: [
        'Automated ML pipelines in AWS SageMaker for a financial institution, reducing retraining cycles by 35%.',
        'Built drift detection and retraining workflows with MLflow and Python to improve model reliability.',
        'Optimized PySpark ETL pipelines processing millions of records daily and cut batch runtime by 25%.',
        'Automated monitoring and CI/CD tasks, removing 60% of manual effort from financial ML operations.'
      ]
    },
    {
      role: 'Senior Product Analyst (Applied ML)',
      organization: 'Techlearn / Ashoka Systems India Pvt. Ltd.',
      location: 'Hyderabad, India',
      timeframe: 'July 2020 - June 2022',
      highlights: [
        'Built NLP-driven recommendation workflows that reduced churn from 10% to 2%.',
        'Developed and deployed EduFace, a face recognition pipeline using GStreamer, OpenCV, and Docker, lowering inference costs by 62%.',
        'Applied computer vision to segment mentor recordings by topic and reduce manual content review.',
        'Created a Flask-based internal platform for labeling and processing user and product data.'
      ]
    }
  ];

  protected readonly projects: ProjectItem[] = [
    {
      name: 'Richie: Multi-Agent RAG and Knowledge Graph System',
      timeframe: 'October 2025',
      href: 'https://github.com/rishitoshsingh/richie',
      hrefLabel: 'View repository',
      docsHref: 'https://rishitoshsingh.github.io/richie/',
      docsLabel: 'Read More',
      summary:
        'A personal AI system for repository understanding that combines multi-step retrieval, recruiter-style Q&A, and graph-linked reasoning over technical work.',
      stack: ['LangChain', 'OpenAI APIs', 'Vector DB', 'Knowledge Graph', 'Streamlit'],
      highlights: [
        'Includes a live Streamlit experience for asking recruiter-style questions about repositories and technical work.',
        'Indexed and summarized GitHub repositories using LangChain, vector databases, and model APIs.',
        'Built a semantic web mining pipeline over LinkedIn job postings and 30K resumes to construct candidate-job skill graphs.',
        'Unified LLM retrieval with graph-based entity linking for context-aware responses.'
      ]
    },
    {
      name: 'SunTransit: Transit Performance Dashboard',
      timeframe: 'July 2025',
      href: 'https://github.com/rishitoshsingh/suntransit',
      hrefLabel: 'View repository',
      docsHref: 'https://rishitoshsingh.github.io/suntransit/',
      docsLabel: 'Read More',
      summary:
        'A public-sector transit analytics platform built around streaming data, reproducible datasets, and operational dashboards.',
      stack: ['Python', 'Spark', 'Kafka', 'Airflow', 'Docker', 'Streamlit'],
      highlights: [
        'Implemented Spark, Kafka, and Python pipelines for real-time GTFS and GTFS-RT processing.',
        'Containerized ingestion and orchestration with Docker and Airflow for scheduling and monitoring.',
        'Published an analysis-ready transit delay dataset to support research and urban planning.'
      ]
    },
    {
      name: 'EduFace',
      timeframe: '2021 to 2022',
      href: 'https://github.com/rishitoshsingh/EduFace',
      hrefLabel: 'View repository',
      summary:
        'An applied computer vision pipeline for face recognition and content processing, designed to run efficiently on local hardware instead of expensive cloud GPU infrastructure.',
      stack: ['Python', 'OpenCV', 'GStreamer', 'Docker', 'Linux', 'Computer Vision'],
      highlights: [
        'Built and deployed a face recognition workflow used in a product context, with an emphasis on operational efficiency.',
        'Reduced inference costs by shifting workloads onto optimized local hardware.',
        'Demonstrates practical deployment concerns including multiprocessing and long-running service management.'
      ]
    },
    {
      name: 'LinkedIn Knowledge Graph',
      timeframe: 'October 2025',
      href: 'https://github.com/rishitoshsingh/linkedin-knowledge-graph',
      hrefLabel: 'View repository',
      summary:
        'An experimental knowledge graph project connecting roles, skills, resumes, and job postings to support semantic matching and richer labor-market analysis.',
      stack: ['Knowledge Graph', 'NLP', 'Resume Mining', 'Job Data', 'Jupyter', 'Python'],
      highlights: [
        'Built around the same candidate-skill-role linking ideas referenced in my AI retrieval work.',
        'Explores structured skill extraction and graph relationships rather than plain keyword search.',
        'Best viewed as a research-oriented companion project to the RAG system.'
      ]
    }
  ];

  protected readonly currentProject: ProjectItem = {
    name: 'Agent Trace and Task Generation System',
    timeframe: 'Current project · 2026',
    href: 'https://github.com/rishitoshsingh/magnet-tau',
    hrefLabel: 'View repository',
    summary:
      'A tooling and evaluation project for generating tool-use traces from graphs and turning those traces into downstream task data for agent and reasoning workflows.',
    stack: ['Python', 'LLM Evaluation', 'Task Generation', 'Graph Workflows', 'Tool Traces'],
    highlights: [
      'Generates random-walk traces from tool graphs to simulate structured interaction paths.',
      'Uses those traces to create downstream tasks for agent or benchmark-style evaluation.',
      'Represents my current interest in agent tooling, evaluation infrastructure, and synthetic workflow generation.'
    ]
  };

  protected readonly publications: PublicationItem[] = [
    {
      title: 'Do Vision Language Models Understand Human Engagement in Games?',
      venue: 'arXiv',
      year: '2026',
      href: 'https://doi.org/10.48550/arXiv.2603.18480',
      authors: 'Ziyi Wang, Qizan Guo, Rishitosh Singh, Xiyang Hu',
      note: 'Submitted March 19, 2026. arXiv:2603.18480 [cs.CV]',
      logoSrc: '/logos/arxiv-logo.png',
      logoAlt: 'arXiv logo'
    },
    {
      title: 'A novel non-linear neuron model based on multiplicative aggregation in quaternionic domain',
      venue: 'Complex & Intelligent Systems',
      year: '2023',
      href: 'https://doi.org/10.1007/s40747-022-00911-6',
      authors: 'Sushil Kumar, Rishitosh Kumar Singh, Aryan Chaudhary',
      logoSrc: '/logos/springer-nature-logo.png',
      logoAlt: 'Springer Nature logo'
    },
    {
      title: 'On the Learning Machine with Amplificatory Neuron in Complex Domain',
      venue: 'Arabian Journal for Science and Engineering',
      year: '2020',
      href: 'https://doi.org/10.1007/s13369-020-04692-3',
      authors: 'Sushil Kumar, Rishitosh Kumar Singh, Aryan Chaudhary',
      note: 'Verified via public institutional and index references because Google Scholar did not render directly in this environment.',
      logoSrc: '/logos/springer-nature-logo.png',
      logoAlt: 'Springer Nature logo'
    }
  ];

  protected readonly certification = {
    name: 'AWS Certified Cloud Practitioner',
    id: 'S73F8JT24NEE16CS',
    href: 'https://www.credly.com/badges/7ec4d3d5-1a7f-4f14-98fc-04a8cd55b552/public_url'
  };

  protected pillIcon(label: string): string | null {
    switch (label) {
      case 'LangChain':
        return '/logos/tech/langchain.png';
      case 'Python':
        return '/logos/tech/python.png';
      case 'Docker':
        return '/logos/tech/docker.png';
      case 'Streamlit':
        return '/logos/tech/streamlit.svg';
      case 'Jupyter':
        return '/logos/tech/jupyter.svg';
      case 'LinkedIn':
        return null;
      case 'Spark':
        return '/logos/tech/spark.png';
      case 'Kafka':
        return '/logos/tech/kafka.png';
      case 'Airflow':
        return '/logos/tech/airflow.png';
      case 'OpenCV':
        return '/logos/tech/opencv.png';
      case 'Linux':
        return '/logos/tech/linux.svg';
      case 'OpenAI APIs':
        return null;
      default:
        return null;
    }
  }
}
