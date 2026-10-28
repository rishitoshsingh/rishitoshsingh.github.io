import { Component } from '@angular/core';
import { MascotComponent } from './mascot.component';

type Link = { label: string; href: string; icon?: string };

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.css'
})
export class PortfolioHomeComponent {
  protected readonly name = 'Rishitosh Kumar Singh';
  protected readonly tagline =
    'ML engineer. I build data pipelines and training workflows, and I research how LLM agents fail.';
  protected readonly email = 'rishitoshs@gmail.com';

  protected readonly links: Link[] = [
    { label: 'GitHub', icon: 'M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.22 1.84 1.22 1.08 1.82 2.82 1.3 3.5 1 .11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.87 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.12 0 0 1-.32 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.62.24 2.82.12 3.12.77.84 1.23 1.9 1.23 3.2 0 4.56-2.8 5.57-5.48 5.86.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z', href: 'https://github.com/rishitoshsingh' },
    { label: 'LinkedIn', icon: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z', href: 'https://linkedin.com/in/rishitoshsingh' },
    { label: 'Email', icon: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z', href: 'mailto:rishitoshs@gmail.com' },
    { label: 'Resume', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-2 16-4-4h3v-4h2v4h3l-4 4Zm1-9V3.5L18.5 9H13Z', href: 'https://drive.google.com/file/d/1HVDFARDoh9XOAFL2QZv5lCDmGiWoqmfI/view' }
  ];

  protected readonly experience = [
    {
      role: 'Research Assistant',
      org: 'CogInt Lab & GLAD Lab, Arizona State University',
      when: 'Feb 2025 – Present',
      logo: '/logos/asu-logo.png',
      current: true,
      stats: ['580 tasks · 10 domains', '+13.8–19.7 pts Avg@3', 'EMNLP 2026 co-first'],
      points: [
        'Built Tracer, the agentic data generator behind τ-Emotion-Bench: 580 verified tool-calling tasks across 10 domains with emotional simulated users. The best frontier agent reaches only 55.9% Avg@3; fine-tuning Qwen3 on 1,958 Tracer trajectories adds 13.8–19.7 points.',
        'Co-first author on benchmarking VLMs (InternVL3.5, Qwen3-VL, GPT-4o) for reading player engagement from gameplay video across 9 games. Zero-shot scored below a majority baseline (~57% vs 67.2%); retrieval-augmented few-shot prompting closed the gap by +18pp (EMNLP 2026).',
        'Built Dask and PySpark pipelines that clean, validate and normalize raw research datasets into Parquet for analysis and training.',
        'Built 2 CrewAI multi-agent workflows that generate course assignments for AI/ML coursework.'
      ]
    },
    {
      role: 'Machine Learning Engineer',
      org: 'Tiger Analytics',
      when: 'Jun 2022 – Dec 2023',
      logo: '/logos/tiger-analytics-logo.png',
      stats: ['35% faster retraining', '25% shorter batches', '60% less manual work'],
      points: [
        'Built SageMaker pipelines for a financial client that chain data cleaning, inference, evaluation and drift detection: 35% faster retraining.',
        'Built drift detection and retraining workflows with MLflow to keep production models reliable.',
        'Tuned PySpark and StreamSets ETL over millions of daily records: 25% shorter batch runs.',
        'Automated model monitoring and CI/CD: 60% less manual work.'
      ]
    },
    {
      role: 'Senior Product Analyst (Applied ML)',
      org: 'Techlearn (EduGrad)',
      when: 'Nov 2020 – Jun 2022',
      logo: '',
      stats: ['Churn 10% → 2%', '62% lower inference cost'],
      points: [
        'NLP models on user behavior drove product recommendations that cut churn from 10% to 2%.',
        'Shipped EduFace, a face recognition pipeline (GStreamer, OpenCV, Docker) on local hardware: 62% lower inference cost.',
        'Used computer vision to split mentor recordings by topic, cutting manual review time.',
        'Built a Flask platform for labeling and processing user and product data.'
      ]
    }
  ];

  protected readonly projects = [
    {
      name: 'τ-Emotion-Bench',
      what: '580 tool-calling tasks in 10 domains where the simulated user carries one of 594 emotion conditions and can walk away. Fine-tuning Qwen3 on Tracer trajectories adds 13.8–19.7 points.',
      stack: ['Python', 'LLM eval', 'Fine-tuning'],
      image: { src: '/images/projects/tau-emotion.jpg', alt: 'τ-Emotion-Bench leaderboard: agent scores with and without emotional users' },
      links: [{ label: 'Dashboard', href: 'https://tau-emotion-bench.github.io/' }]
    },
    {
      name: 'SunTransit',
      what: 'Real-time transit delay tracking from GTFS-RT feeds. ETA model cuts MAE 39% vs a lookup-table baseline.',
      stack: ['Spark', 'Kafka', 'Docker', 'SageMaker', 'Streamlit'],
      image: { src: '/images/projects/suntransit.jpg', alt: 'SunTransit live map of Phoenix buses with bunching alerts' },
      links: [
        { label: 'suntransit.live', href: 'https://suntransit.live' },
        { label: 'Docs', href: 'https://rishitoshsingh.github.io/suntransit/' },
        { label: 'Code', href: 'https://github.com/rishitoshsingh/suntransit' }
      ]
    },
    {
      name: 'Richie',
      what: 'Chatbot that answers questions about my work. Indexes 50+ GitHub repos into Pinecone; LangGraph routes each query.',
      stack: ['LangGraph', 'Pinecone', 'MongoDB', 'Streamlit'],
      image: { src: '/images/projects/richie.png', alt: 'Richie LangGraph routing: query classifier dispatching to chatbot nodes' },
      links: [
        { label: 'Docs', href: 'https://rishitoshsingh.github.io/richie/' },
        { label: 'Code', href: 'https://github.com/rishitoshsingh/richie' }
      ]
    }
  ];

  protected readonly publications = [
    {
      title: 'τ-Emotion-Bench: Exposing the Interaction Fragility of LLM Agents through Real-World User Emotions',
      venue: 'NeurIPS 2026 Workshop (UserSim)',
      href: 'https://tau-emotion-bench.github.io/'
    },
    {
      title: 'Do Vision–Language Models Understand Human Engagement in Games?',
      venue: 'EMNLP 2026 · co-first author',
      href: 'https://doi.org/10.48550/arXiv.2603.18480'
    },
    {
      title: 'CAST: Critique-Aware Supervision for Training Reliable Long-Horizon Tool-Calling Agents',
      venue: 'EMNLP 2026',
      href: 'https://doi.org/10.48550/arXiv.2608.30147'
    },
    {
      title: 'A novel non-linear neuron model based on multiplicative aggregation in quaternionic domain',
      venue: 'Complex & Intelligent Systems, 2023',
      href: 'https://doi.org/10.1007/s40747-022-00911-6'
    },
    {
      title: 'On the Learning Machine with Amplificatory Neuron in Complex Domain',
      venue: 'Arabian Journal for Science and Engineering, 2020',
      href: 'https://doi.org/10.1007/s13369-020-04692-3'
    }
  ];

  protected readonly skills = [
    { label: 'LLM research', items: 'Tool-calling agents, SFT (Qwen, LLaMA), critique/reward modeling, VLMs, RAG, benchmark construction, LLM-as-judge' },
    { label: 'ML / LLM', items: 'PyTorch, Hugging Face Transformers, scikit-learn, LangChain, LangGraph, CrewAI, FastMCP' },
    { label: 'Data', items: 'Spark, Kafka, Airflow, Dask, Snowflake, Pandas, SQL' },
    { label: 'Infra', items: 'AWS (SageMaker, S3, EC2, Lambda), Docker, Kubernetes, MLflow, FastAPI, Flask' },
    { label: 'Languages', items: 'Python, SQL, C++, JavaScript, Bash' }
  ];

  protected readonly education = [
    { degree: 'MS, Computer Science', school: 'Arizona State University', when: '2024 – 2026', logo: '/logos/asu-logo.png' },
    { degree: 'BTech, Computer Science', school: 'Dr. A.P.J. Abdul Kalam Technical University', when: '2016 – 2020', logo: '/logos/aktu-logo.png' }
  ];

  protected toggleTheme(): void {
    const root = document.documentElement;
    const dark = root.dataset['theme']
      ? root.dataset['theme'] === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset['theme'] = dark ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', root.dataset['theme']);
    } catch {}
  }
}
