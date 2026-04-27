import { Component } from '@angular/core';

@Component({
  selector: 'app-tau-emotion',
  standalone: true,
  templateUrl: './tau-emotion.component.html',
  styleUrl: './tau-emotion.component.css'
})
export class TauEmotionComponent {
  readonly title = 'τ-emotion: Evaluating Tool-Using Agents Under Emotional Conditions';
  readonly author = 'Rishitosh Kumar Singh';
  readonly venue = 'NeurIPS 2026';
  readonly year = '2026';
  readonly pdfLink = 'https://github.com/rishitoshsingh/tau-emotion-bench';

  readonly summary = `τ-emotion is a benchmark for tool-using agents operating under explicit emotional conditions. The work addresses a critical gap: while agent benchmarks test functional correctness, they miss how emotional context—anger, frustration, urgency, politeness—affects agent reliability in real-world customer-service scenarios.`;

  readonly pipelineSection = {
    title: 'Generating Scalable Task Pipelines',
    description: `Building the foundation required three key components: (1) constructing directed tool graphs from environments to capture valid state transitions, (2) sampling realistic tool-use traces via random walks, and (3) grounding those traces into executable user instructions with verifiable outcomes. This pipeline is designed to scale across four customer-service domains: airline, retail, telecom, and telehealth, each with 70 test instances and corresponding training data.`
  };

  readonly emotionSection = {
    title: 'Including Emotional Context',
    description: `Each task is paired with an emotion specification drawn from a structured taxonomy: 5 emotion families (anger, fear, sadness, enjoyment, disgust), 22 leaf-level categories, and 3 behavioral dimensions (politeness, urgency, trust). Using language models, we generate natural-language instruction variants per emotion specification across all domains. Each variant is validated to ensure consistency with underlying tool traces and domain policies.`
  };

  readonly evaluationSection = {
    title: 'Evaluating Frontier Models',
    description: `We benchmark GPT-4.1 and Qwen3 across four trials per task, measuring Pass@1 (first-attempt success), Pass@4 (success within 4 attempts), tool recall, and failure attribution. Results reveal that emotional context materially shifts reliability: GPT-4.1 achieves 43.2% Pass@1 on airline tasks and 63.6% on retail, while Qwen3 reaches 35.8% and 58.4% respectively. Across both models, negative emotion families (anger, sadness) reduce success below domain means, while enjoyment and disgust remain above average.`
  };

  readonly statistics = [
    { value: '280', label: 'Test instances (70 per domain)' },
    { value: '4', label: 'Domains' },
    { value: '22', label: 'Emotion categories' },
    { value: '3', label: 'Behavioral dimensions' }
  ];

  readonly domains = [
    'Airline customer service',
    'Retail e-commerce support',
    'Telecom account management',
    'Telehealth appointment handling'
  ];

  readonly figures = {
    pipeline: { src: '/images/tau-emotion/pipeline.png', alt: 'Dataset generation pipeline with tool graph, trace, and instruction generation flows', fullWidth: true },
    graphs: [
      { src: '/images/tau-emotion/graph-airline.png', alt: 'Airline domain tool graph with valid state transitions' }
    ],
    emotion: [
      { src: '/images/tau-emotion/emotion_family_by_domain.png', alt: 'Distribution of emotion families across domains' },
      { src: '/images/tau-emotion/emotion_knn_airline.png', alt: 'Emotion space structure (t-SNE) for airline domain' }
    ],
    results: [
      { src: '/images/tau-emotion/recall_by_family.png', alt: 'Tool recall performance broken down by emotion family', fullWidth: true }
    ]
  };

  readonly keyContributions = [
    'Tracer: generalized framework for grounded task generation from executable tool graphs and traces, with environment-consistent data grounding.',
    'τ-emotion Bench: first emotion-conditioned benchmark for tool-using agents, with 5,940 tasks across two domains.',
    'Empirical analysis: demonstrates that emotional context measurably affects agent reliability and identifies high-impact emotion families.'
  ];
}
