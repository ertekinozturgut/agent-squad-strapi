import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FinalCtaSection } from '../../../features/contact';

interface SystemDetail {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  organization: string;
  challenge: string;
  howItWorks: { step: string; name: string; desc: string }[];
  myRole: string[];
  outcome: string;
  outcomeMetric: string;
  diagram: {
    title: string;
    nodes: string[];
    flowSummary: string;
  };
  nextSlug: string;
  nextTitle: string;
}

const systemsMap: Record<string, SystemDetail> = {
  'enterprise-ai-assistant': {
    slug: 'enterprise-ai-assistant',
    eyebrow: '01 / PRODUCTION AI',
    title: 'Enterprise AI Assistant',
    subtitle: 'Turning enterprise knowledge into an intelligent, secure employee experience.',
    role: 'Solution Architecture · Integration · Delivery Lead',
    year: '2025',
    organization: 'Toyota Türkiye',
    challenge:
      'Large enterprises possess vast amounts of procedural knowledge scattered across intranets, policy PDFs, and disparate operational documents. Employees wasted hours locating answers, HR and support teams were overburdened by routine inquiries, and strict privacy regulations strictly prohibited unvetted LLM API access.',
    howItWorks: [
      {
        step: '01',
        name: 'Enterprise Data Layer',
        desc: 'Automated ingestion pipelines index enterprise policies, guides, and intranet documents with strict RBAC access controls.',
      },
      {
        step: '02',
        name: 'Hybrid Retrieval Engine',
        desc: 'Semantic vector similarity combined with keyword BM25 retrieval ensures high precision search across Turkish corporate documentation.',
      },
      {
        step: '03',
        name: 'Orchestration & Reasoning',
        desc: 'Deterministic prompt engineering and guardrails validate context relevance, detect hallucinations, and filter private data.',
      },
      {
        step: '04',
        name: 'Enterprise Application Integration',
        desc: 'Deployed directly into employee everyday workspaces with single sign-on (SSO) and continuous feedback telemetry.',
      },
    ],
    myRole: [
      'End-to-end Solution Architecture',
      'Data Privacy & RBAC Security Governance',
      'RAG Pipeline & Hallucination Guardrail Design',
      'Integration with Internal SSO & Systems',
      'Production Rollout & Executive Enablement',
    ],
    outcome:
      'First production-grade AI system deployed in Toyota Türkiye history. 70% reduction in first-response time for routine policy requests with zero security incidents.',
    outcomeMetric: '70% FASTER RESPONSE',
    diagram: {
      title: 'RAG ORCHESTRATION TOPOLOGY',
      nodes: [
        'EMPLOYEE / WORKSPACE',
        'AI ASSISTANT (ORCHESTRATOR)',
        'HYBRID RETRIEVAL (QDRANT VECTORS + BM25)',
        'ENTERPRISE DATA & SECURE APIS',
      ],
      flowSummary: 'Employee ──► Auth / Guardrails ──► LLM Orchestrator ──► Vector Index ──► Synthesized Verified Answer',
    },
    nextSlug: 'kaizen-intelligence',
    nextTitle: 'Kaizen Intelligence Platform',
  },
  'kaizen-intelligence': {
    slug: 'kaizen-intelligence',
    eyebrow: '02 / KNOWLEDGE INTELLIGENCE',
    title: 'Kaizen Intelligence Platform',
    subtitle: 'Turning 200+ historical project decks and video records into structured enterprise intelligence.',
    role: 'Lead Architect & AI Systems Engineer',
    year: '2025 – 2026',
    organization: 'Global ALJ & Toyota Türkiye',
    challenge:
      'Toyota’s renowned continuous improvement (Kaizen) marathons generated hundreds of project presentations, video recordings, and technical reports over years. This invaluable problem-solving knowledge was trapped in siloed file shares, causing engineering teams to duplicate effort instead of standing on past insights.',
    howItWorks: [
      {
        step: '01',
        name: 'Multimodal Ingestion',
        desc: 'Automatic transcription of speech from project videos, OCR on presentation slides, and technical document extraction.',
      },
      {
        step: '02',
        name: 'Structured Problem-Solving Schema',
        desc: 'LLM agents dissect each project into 5-Why root cause analysis, countermeasures, and quantified savings.',
      },
      {
        step: '03',
        name: 'Vector & Knowledge Graph Layer',
        desc: 'Semantic embeddings allow engineers to query historical projects using natural conversational language.',
      },
      {
        step: '04',
        name: 'Decision Support Copilot',
        desc: 'Integrated copilot agent recommends proven Kaizen methodologies whenever a new problem is registered.',
      },
    ],
    myRole: [
      'Multimodal Data Pipeline Architecture',
      'Kaizen Problem-Solving Schema Design',
      'Vector Indexing & Speech-to-Text Pipeline',
      'Copilot Agent Integration & Prompt Engineering',
      'Global ALJ Kaizen Marathon 1st Place Pitch',
    ],
    outcome:
      'Over 200 projects converted into an active organizational knowledge base. Search time reduced by 10x, winning 1st Place in Internal Innovation.',
    outcomeMetric: '200+ PROJECTS ANALYSED',
    diagram: {
      title: 'MULTIMODAL KNOWLEDGE PIPELINE',
      nodes: [
        '200+ RAW PROJECTS (VIDEO / DECKS / PDF)',
        'MULTIMODAL AI EXTRACTOR (WHISPER + OCR)',
        'STRUCTURED KNOWLEDGE LAYER (5-WHY + METRICS)',
        'ENGINEERING SEARCH & COPILOT AGENT',
      ],
      flowSummary: 'Unstructured Archives ──► Speech/OCR Pipeline ──► Semantic Parsing ──► Vector Index ──► Engineering Copilot',
    },
    nextSlug: 'ai-lead-intelligence',
    nextTitle: 'AI Lead Intelligence',
  },
  'ai-lead-intelligence': {
    slug: 'ai-lead-intelligence',
    eyebrow: '03 / AI + CRM',
    title: 'AI Lead Intelligence',
    subtitle: 'From multi-channel incoming lead to intelligent action in under 3 minutes.',
    role: 'CRM Architect & AI Integrator',
    year: '2026',
    organization: 'Toyota Dealer Network',
    challenge:
      'Customer leads arrived from dozens of scattered digital touchpoints (web car configurator, test drive requests, social media, call centers). Manual sorting delayed dealership response times, qualified buyers received generic replies, and sales consultants lost track of high-intent purchase signals.',
    howItWorks: [
      {
        step: '01',
        name: 'Event-Driven Ingestion',
        desc: 'Real-time webhook and Azure Event Grid capture lead inputs instantly across all digital and call channels.',
      },
      {
        step: '02',
        name: 'AI Intent & Urgency Extraction',
        desc: 'LLM analyzes customer notes, model preferences, trade-in interest, and financing urgency within seconds.',
      },
      {
        step: '03',
        name: 'Intelligent CRM Routing',
        desc: 'Dynamics 365 routing engine matches lead profile against dealership capacity, region, and consultant specialty.',
      },
      {
        step: '04',
        name: 'Consultant Action Card',
        desc: 'Pre-populates the CRM with recommended talking points, vehicle availability, and personalized financing options.',
      },
    ],
    myRole: [
      'CRM Architecture & Dataverse Schema Modeling',
      'Event-Driven Ingestion Pipeline Implementation',
      'LLM Intent Classifier & Prompt Testing',
      'Dealership Distribution Logic & SLA Monitoring',
      'Field Training for Regional Sales Managers',
    ],
    outcome:
      'Reduced initial qualification time from hours to under 3 minutes across 60+ authorized dealerships, boosting initial engagement conversion by 35%.',
    outcomeMetric: '< 3 MIN QUALIFICATION',
    diagram: {
      title: 'EVENT-DRIVEN CRM AI PIPELINE',
      nodes: [
        'MULTI-CHANNEL SOURCES (WEB / CHAT / CALLS)',
        'EVENT INGESTION & DATAVERSE STAGING',
        'AI INTENT & PRIORITY REASONER',
        'ROUTED DEALER ACTION IN DYNAMICS 365',
      ],
      flowSummary: 'Customer Signal ──► Webhook Ingestion ──► AI Intent Classification ──► Dynamics 365 Routing ──► Dealer Action',
    },
    nextSlug: 'api-modernisation',
    nextTitle: 'Enterprise API Modernisation',
  },
  'api-modernisation': {
    slug: 'api-modernisation',
    eyebrow: '04 / ENTERPRISE ARCHITECTURE',
    title: 'Enterprise API Modernisation',
    subtitle: 'Simplifying fragmented point-to-point integrations into a governed API platform.',
    role: 'Integration Architect & Tech Lead',
    year: '2024 – 2025',
    organization: 'Enterprise IT Backbone',
    challenge:
      'Over years of organic growth, the core CRM had grown tangled with fragile, direct point-to-point connections to ERP, billing, parts logistics, and third-party dealer systems. Schema changes caused cascade failures, and adding autonomous AI agents would have been catastrophic without a clean, governed interface layer.',
    howItWorks: [
      {
        step: '01',
        name: 'Dependency & Topology Auditing',
        desc: 'Mapped all legacy SOAP, direct SQL, and batch connections linking CRM to satellite enterprise platforms.',
      },
      {
        step: '02',
        name: 'Central API Gateway Design',
        desc: 'Constructed an abstraction layer with unified RESTful contracts, OAuth 2.0 security, and strict rate limits.',
      },
      {
        step: '03',
        name: 'Microservice Decoupling',
        desc: 'Encapsulated legacy transaction logic behind isolated services with circuit breakers and fallback caches.',
      },
      {
        step: '04',
        name: 'Agent-Ready Schema Contracts',
        desc: 'OpenAPI-compliant schemas now serve as tool definitions for modern Model Context Protocol (MCP) agents.',
      },
    ],
    myRole: [
      'Enterprise Integration Architecture & Roadmap',
      'API Gateway Specification & Governance Rules',
      'Legacy SOAP to Modern REST Migration Lead',
      'Contract-First Testing Strategy & Depcruise Audits',
      'Developer Enablement across 3 External Agencies',
    ],
    outcome:
      'Replaced 20+ brittle integrations with a single governed gateway. Cut integration maintenance costs by 60% and established the foundational substrate for autonomous AI agent tool execution.',
    outcomeMetric: '60% LOWER MAINTENANCE',
    diagram: {
      title: 'BEFORE VS. AFTER ARCHITECTURE',
      nodes: [
        'LEGACY: CRM ─── FRAGMENTED POINT-TO-POINT ─── [ ERP, DMS, BILLING ]',
        'MODERN: CRM ──► UNIFIED API GATEWAY ──► [ GOVERNED ENTERPRISE APIS ]',
      ],
      flowSummary: 'Point-to-Point Spaghetti ──► Centralized Enterprise Gateway ──► Autonomous AI Agent Readiness',
    },
    nextSlug: 'enterprise-ai-assistant',
    nextTitle: 'Enterprise AI Assistant',
  },
  'personalised-communication-and-offers': {
    slug: 'personalised-communication-and-offers',
    eyebrow: '05 / CRM INNOVATION',
    title: 'PS 1st Place · Personalised Communication & Offers',
    subtitle: 'Hyper-personalized customer recommendation engine integrated into Dynamics 365 CRM.',
    role: 'CRM Tech Lead & Data Architect',
    year: '2024',
    organization: 'Toyota Turkey Kaizen Platform',
    challenge:
      'Standard broadcast campaigns delivered diminishing conversion rates across automotive customers without reflecting vehicle replacement cycles or individual service history.',
    howItWorks: [
      {
        step: '01',
        name: 'Customer Profile Aggregation',
        desc: 'Aggregates vehicle lifecycle, service history, and interaction touchpoints within Dataverse.',
      },
      {
        step: '02',
        name: 'Propensity & Recommendation Engine',
        desc: 'Calculates personalized financing, trade-in, and accessory packages tailored to each customer.',
      },
      {
        step: '03',
        name: 'Omnichannel CRM Synchronization',
        desc: 'Dispatches personalized triggers across email, SMS, and dealership sales consultation queues.',
      },
      {
        step: '04',
        name: 'Closed-Loop Feedback Telemetry',
        desc: 'Tracks customer conversion and continuously refines recommendation weightings.',
      },
    ],
    myRole: [
      'Dynamics 365 CRM Customization & Dataverse Architecture',
      'Recommendation Model & Segmentation Logic Specification',
      'Omnichannel Campaign Automation Integration',
      'Kaizen Problem-Solving Competition Presentation',
    ],
    outcome:
      'Awarded PS 1st Place on the Toyota Turkey Kaizen Platform. Achieved +28% uplift in campaign engagement and dealership visit bookings.',
    outcomeMetric: 'PS 1ST PLACE · +28% ENGAGEMENT',
    diagram: {
      title: 'PERSONALIZATION ENGINE TOPOLOGY',
      nodes: [
        'CUSTOMER SIGNALS & VEHICLE HISTORY',
        'DATAVERSE PROFILE AGGREGATOR',
        'DYNAMIC RECOMMENDATION REASONER',
        'DYNAMICS 365 & OMNICHANNEL DISPATCH',
      ],
      flowSummary: 'Customer Signals ──► Dataverse Aggregator ──► Recommendation Reasoner ──► Omnichannel Dispatch',
    },
    nextSlug: 'post-sales-customer-targeting',
    nextTitle: 'Post-Sales Customer Targeting',
  },
  'post-sales-customer-targeting': {
    slug: 'post-sales-customer-targeting',
    eyebrow: '06 / PREDICTIVE ANALYTICS',
    title: 'PS 1st Place · Improving Post-Sales Customer Targeting with Data Analytics Models',
    subtitle: 'Predictive analytics models analyzing service history and lifecycle patterns to optimize customer retention.',
    role: 'Lead Data Engineer & CRM Architect',
    year: '2023 – 2024',
    organization: 'Toyota Turkey Kaizen Platform',
    challenge:
      'Customer service attrition increased sharply after initial vehicle warranty expiration, with dealerships lacking predictive indicators for maintenance timing.',
    howItWorks: [
      {
        step: '01',
        name: 'Maintenance History Mining',
        desc: 'Analyzes millions of historical service transactions, part replacements, and vehicle mileage velocity.',
      },
      {
        step: '02',
        name: 'Service Propensity Modeling',
        desc: 'Forecasts periodic maintenance and component replacement windows per vehicle VIN.',
      },
      {
        step: '03',
        name: 'Automated Advisor Action Lists',
        desc: 'Populates Dynamics 365 with prioritized proactive contact tasks for dealer service consultants.',
      },
      {
        step: '04',
        name: 'Service Retention Telemetry',
        desc: 'Monitors service booking conversion and workshop utilization across authorized dealerships.',
      },
    ],
    myRole: [
      'Predictive Analytics Modeling & Data Extraction',
      'Dynamics 365 Service Workflow Integration',
      'Dealer Service Advisor Enablement',
      'Kaizen Competition Evaluation & Defense',
    ],
    outcome:
      'Awarded PS 1st Place in Toyota Kaizen Problem-Solving. Generated a +22% improvement in post-warranty service retention.',
    outcomeMetric: 'PS 1ST PLACE · +22% RETENTION',
    diagram: {
      title: 'PREDICTIVE AFTERSALES ARCHITECTURE',
      nodes: [
        'HISTORICAL SERVICE & PARTS LOGS',
        'ML PROPENSITY & RETENTION MODEL',
        'AUTOMATED ADVISOR ACTION QUEUES',
        'DEALERSHIP WORKSHOP RETENTION',
      ],
      flowSummary: 'Service History ──► Predictive Model ──► Dynamics 365 Outreach ──► Authorized Dealership Retention',
    },
    nextSlug: 'business-reform-alj-marathon',
    nextTitle: 'ALJ Global Kaizen Marathon',
  },
  'business-reform-alj-marathon': {
    slug: 'business-reform-alj-marathon',
    eyebrow: '07 / GLOBAL REPRESENTATION',
    title: 'Business Reform — Represented Toyota Turkey at the ALJ Global Kaizen Marathon',
    subtitle: 'Represented Toyota Turkey internationally on the global stage at the ALJ Global Kaizen Marathon.',
    role: 'Global Representative & Systems Architect',
    year: '2024',
    organization: 'Toyota Turkey Kaizen Platform & ALJ Group',
    challenge:
      'Demonstrating enterprise-scale digital reform, AI system adoption, and continuous operational agility capable of serving as a benchmark across international distributor networks.',
    howItWorks: [
      {
        step: '01',
        name: 'Institutional Blueprint',
        desc: 'Unified production AI deployments, CRM modernization, and Kaizen problem-solving into a cohesive model.',
      },
      {
        step: '02',
        name: 'System Architecture Demonstration',
        desc: 'Presented the technical substrate connecting modern LLMs, MCP tool execution, and centralized APIs.',
      },
      {
        step: '03',
        name: 'Executive Validation',
        desc: 'Defended architectural scalability and operational ROI before international enterprise leaders.',
      },
      {
        step: '04',
        name: 'Cross-Border Knowledge Transfer',
        desc: 'Packaged implementation standards for adoption across regional automotive operating companies.',
      },
    ],
    myRole: [
      'National Representative for Toyota Turkey',
      'Technical Architecture Blueprint Author',
      'Global Stage Executive Presentation',
      'Continuous Improvement Knowledge Sharing',
    ],
    outcome:
      'Represented Toyota Turkey internationally in the Business Reform category at the ALJ Global Kaizen Marathon, validating national digital initiatives on the global stage.',
    outcomeMetric: 'GLOBAL REPRESENTATIVE',
    diagram: {
      title: 'ENTERPRISE BUSINESS REFORM TOPOLOGY',
      nodes: [
        'TOYOTA TURKEY KAIZEN PLATFORM',
        'ENTERPRISE AI & AUTOMATION CORE',
        'INTERNATIONAL ALJ EVALUATION',
        'GLOBAL ADOPTION BENCHMARK',
      ],
      flowSummary: 'Toyota Turkey Platform ──► Production AI Core ──► Global Evaluation ──► International Benchmark',
    },
    nextSlug: 'enterprise-ai-assistant',
    nextTitle: 'Enterprise AI Assistant',
  },
  'fleet-retail-invoice-compliance-automation': {
    slug: 'fleet-retail-invoice-compliance-automation',
    eyebrow: '08 / COMPLIANCE AUTOMATION',
    title: 'Fleet & Retail Invoice Compliance: Automated Campaign Auditing',
    subtitle: 'Rule engine and AI auditing pipeline scanning high-volume fleet and retail invoices.',
    role: 'Supervisor & Delivery Lead',
    year: '2026',
    organization: 'Toyota Türkiye',
    challenge:
      'Complex multi-tiered promotional campaigns creating heavy manual audit burdens, human verification errors, and revenue leakage risks.',
    howItWorks: [
      {
        step: '01',
        name: 'Invoice Line Ingestion',
        desc: 'Captures billing streams from transactional ERP and sales portals in real time.',
      },
      {
        step: '02',
        name: 'Dynamic Campaign Verification',
        desc: 'Evaluates discount limits, fleet tier bonuses, and commercial agreement clauses.',
      },
      {
        step: '03',
        name: 'Discrepancy Annotation',
        desc: 'Automatically tags non-compliant invoice lines with precise rule violation reasoning.',
      },
      {
        step: '04',
        name: 'Finance Controller Queue',
        desc: 'Dispatches flagged items directly to finance teams before accounting closure.',
      },
    ],
    myRole: [
      'Automated Audit Service Architecture',
      'ERP & Billing API Integration',
      'Campaign Rule Modeling in C# .NET',
      'Finance Team Workflow Enablement',
    ],
    outcome:
      '100% audit coverage with 85% reduction in manual verification effort and zero revenue leakage.',
    outcomeMetric: '100% AUDIT COVERAGE',
    diagram: {
      title: 'INVOICE COMPLIANCE AUDITING PIPELINE',
      nodes: [
        'TRANSACTIONAL INVOICE STREAM',
        'DYNAMIC CAMPAIGN RULE EVALUATOR',
        'DISCREPANCY DETECTION ENGINE',
        'FINANCE CONTROLLER QUEUE',
      ],
      flowSummary: 'Invoice Stream ──► Rule Evaluator ──► Exception Detection ──► Finance Controller',
    },
    nextSlug: 'toyota-communication-centre-omnichannel',
    nextTitle: 'Toyota Communication Centre Platform',
  },
  'toyota-communication-centre-omnichannel': {
    slug: 'toyota-communication-centre-omnichannel',
    eyebrow: '09 / PLATFORM MIGRATION',
    title: 'Toyota Communication Centre & Omnichannel Platform Migration',
    subtitle: 'Taking over mid-project responsibility through to production release and omnichannel renewal.',
    role: 'Senior Software Specialist / Software Supervisor',
    year: '2024 – 2025',
    organization: 'Toyota Türkiye Pazarlama ve Satış A.Ş.',
    challenge:
      'Mid-stream platform delivery risks, fragmented legacy communication channels, and complex customer data synchronization across distributor and dealer touchpoints.',
    howItWorks: [
      {
        step: '01',
        name: 'Technical Recovery & Sprint Realignment',
        desc: 'Assumed operational and architectural ownership to realign agency sprint velocity and resolve integration blockers.',
      },
      {
        step: '02',
        name: 'Omnichannel Data Pipeline Design',
        desc: 'Engineered high-throughput event buses linking web, SMS, email, and call centre channels into unified CRM profiles.',
      },
      {
        step: '03',
        name: 'Toyota Europe System Alignment',
        desc: 'Integrated digital solution modules from Toyota Europe with domestic backend infrastructure.',
      },
      {
        step: '04',
        name: 'Zero-Downtime Cutover',
        desc: 'Executed staged migration and cutover strategy ensuring zero disruption to live customer service operations.',
      },
    ],
    myRole: [
      'Mid-Project Delivery Ownership & Architecture',
      'Omnichannel Marketing Platform Gap Analysis',
      'Toyota Europe Digital Solution Integration',
      'Agency Coordination & Production Go-Live',
    ],
    outcome:
      'Completed remaining delivery phases through to a successful production release with zero data loss and unified omnichannel communication.',
    outcomeMetric: '100% ON-SCHEDULE RELEASE',
    diagram: {
      title: 'OMNICHANNEL PLATFORM INTEGRATION ARCHITECTURE',
      nodes: [
        'DISPERSED CHANNELS (WEB / SMS / EMAIL / PBX)',
        'CENTRAL COMMUNICATION HUB (API ORCHESTRATION)',
        'DATAVERSE UNIFIED CUSTOMER TIMELINE',
        'PRODUCTION TOYOTA COMMUNICATION CENTRE',
      ],
      flowSummary: 'Multi-Channel Touchpoints ──► Integration Hub ──► Dataverse Profiles ──► Toyota Communication Centre',
    },
    nextSlug: 'call-centre-crm-telephony-integration',
    nextTitle: 'Call Centre CRM Telephony Integration',
  },
  'call-centre-crm-telephony-integration': {
    slug: 'call-centre-crm-telephony-integration',
    eyebrow: '10 / CTI INTEGRATION',
    title: 'Call Centre – Dealer Switchboards CRM Telephony Integration',
    organization: 'Toyota Türkiye Pazarlama ve Satış A.Ş.',
    subtitle: 'Connecting authorized dealer switchboards and call centre telephony directly into Dynamics CRM.',
    role: 'Software Specialist',
    year: '2021 – 2024',
    challenge:
      'Unlinked phone calls across dealer switchboards resulted in lost sales leads, lack of caller identification, and no central reporting on dealer responsiveness.',
    howItWorks: [
      {
        step: '01',
        name: 'PBX Telephony Bridging',
        desc: 'Connected digital and IP switchboards with Dynamics CRM using CTI middleware and web services.',
      },
      {
        step: '02',
        name: 'Instant Screen-Pop Identification',
        desc: 'Incoming numbers automatically queried against CRM customer and vehicle VIN databases.',
      },
      {
        step: '03',
        name: 'Automated Lead & Ticket Creation',
        desc: 'Auto-generates inquiry records and routes missed calls to sales consultants with SLA timers.',
      },
      {
        step: '04',
        name: 'Dealer Network Telemetry',
        desc: 'Provides real-time dashboards on call handling times, conversion attribution, and service quality.',
      },
    ],
    myRole: [
      'Telephony & CRM Integration Architecture',
      'Real-Time C# Screen-Pop Middleware Development',
      'Dealer Switchboard Integration & Field Testing',
      'Ongoing System Maintenance & Performance Tuning',
    ],
    outcome:
      'Real-time call attribution and caller identification standardized across the dealer network, drastically accelerating lead follow-up.',
    outcomeMetric: '100% DEALER COVERAGE',
    diagram: {
      title: 'TELEPHONY CTI INTEGRATION TOPOLOGY',
      nodes: [
        'DEALER SWITCHBOARDS (IP PBX / SOFTPHONE)',
        'CTI INTEGRATION ENGINE (C# WEBSERVICE)',
        'DATAVERSE / DYNAMICS CRM 2011/365',
        'CONSULTANT SCREEN-POP & CALL LOG',
      ],
      flowSummary: 'Inbound Caller ──► CTI Middleware ──► CRM Lookup ──► Instant Screen-Pop & Lead Attribution',
    },
    nextSlug: 'toyota-enterprise-web-application-suite',
    nextTitle: 'Toyota Enterprise Web Application Suite',
  },
  'toyota-enterprise-web-application-suite': {
    slug: 'toyota-enterprise-web-application-suite',
    eyebrow: '11 / WEB PLATFORMS',
    title: 'Toyota Enterprise Web Applications Suite (.NET / REST & SOAP)',
    organization: 'Toyota Türkiye Pazarlama ve Satış A.Ş.',
    subtitle: 'High-availability enterprise portals including TAC, Lexus Catalog, Fleet Portal, and Price List.',
    role: 'Software Specialist',
    year: '2021 – 2024',
    challenge:
      'Distributor, dealer, and fleet operations required resilient, always-updated web tools for pricing, accessories, fleet ordering, and vehicle data exchange with Toyota Motors Europe.',
    howItWorks: [
      {
        step: '01',
        name: 'Enterprise Web Portal Engineering',
        desc: 'Developed TAC (Toyota Application Centre), Lexus Catalog, and Fleet Portal using .NET and Bootstrap.',
      },
      {
        step: '02',
        name: 'European Integration APIs',
        desc: 'Built REST and SOAP APIs consumed by Toyota Motors Europe and domestic internal systems.',
      },
      {
        step: '03',
        name: 'Legacy CRM Automation',
        desc: 'Automated Dynamics CRM 2011 sync flows via FTP, direct SQL, and APIs with C# and MsSQL.',
      },
      {
        step: '04',
        name: 'High-Throughput Price Engine',
        desc: 'Dynamic catalog calculations for vehicle options, tariffs, and fleet discount structures.',
      },
    ],
    myRole: [
      'Full-Stack .NET Application Development & Maintenance',
      'REST & SOAP API Specification for Toyota Motors Europe',
      'Legacy CRM 2011 Integration Pipelines (C# / MsSQL)',
      'Security Hardening & Production Reliability Ownership',
    ],
    outcome:
      '4 mission-critical portals in continuous production with 99.9% uptime, serving thousands of dealer and fleet users.',
    outcomeMetric: '4 PRODUCTION PORTALS · 99.9% UPTIME',
    diagram: {
      title: 'ENTERPRISE WEB APPLICATION & API TOPOLOGY',
      nodes: [
        'DEALERS & DISTRIBUTOR USERS (WEB UI)',
        '.NET APPLICATION LAYER (TAC, LEXUS, FLEET)',
        'REST / SOAP API GATEWAY (TOYOTA EUROPE CONSUMED)',
        'DYNAMICS CRM & TRANSACTIONAL MSSQL',
      ],
      flowSummary: 'Enterprise Users ──► .NET Web Apps ──► REST/SOAP APIs ──► Toyota Europe & Internal Core',
    },
    nextSlug: 'bakiciburada-custom-crm-platforms',
    nextTitle: 'Bakiciburada Custom CRM Platforms',
  },
  'bakiciburada-custom-crm-platforms': {
    slug: 'bakiciburada-custom-crm-platforms',
    eyebrow: '12 / FULL-STACK & CRM',
    title: 'Bakiciburada.com & Unisbul.com Custom CRM Systems (.NET / SignalR)',
    organization: 'Bakiciburada.com',
    subtitle: 'Custom CRM platforms, high-concurrency portals, banking integrations, and junior team mentorship.',
    role: 'Web Software Developer & Team Lead',
    year: '2019 – 2021',
    challenge:
      'High-traffic marketplaces matching thousands of caregivers and students with families and employers required custom transactional CRM logic, real-time messaging, and secure banking payment gateways.',
    howItWorks: [
      {
        step: '01',
        name: 'Custom Domain CRM Backends',
        desc: 'Architected modular .NET backends utilizing Entity Framework, Dependency Injection, and MsSQL.',
      },
      {
        step: '02',
        name: 'Real-Time SignalR Messaging',
        desc: 'Engineered instant push notification and messaging hubs connecting employers and candidates.',
      },
      {
        step: '03',
        name: 'Banking & Softphone Integrations',
        desc: 'Integrated secure third-party SOAP/REST banking payment processors and IP softphones.',
      },
      {
        step: '04',
        name: 'Team Leadership & Code Quality',
        desc: 'Led a squad of 2 junior software engineers, performing code reviews and workload distribution.',
      },
    ],
    myRole: [
      'Full-Stack .NET & SignalR Architecture',
      'Banking Payment Gateway & CTI Softphone Integration',
      'Team Lead for 2 Junior Developers',
      'Sprint Planning, Code Review & On-Budget Delivery',
    ],
    outcome:
      '2 custom CRM systems and 2 high-traffic production websites delivered on schedule, hitting 100% of deadlines within budget.',
    outcomeMetric: '2 CUSTOM CRMS · 100% ON-TIME',
    diagram: {
      title: 'CUSTOM CRM & REAL-TIME MESSAGING TOPOLOGY',
      nodes: [
        'HIGH-TRAFFIC WEB CLIENTS (BAKICIBURADA / UNISBUL)',
        '.NET MVC & SIGNALR REAL-TIME ENGINE',
        'BANKING APIS & SOFTPHONE INTEGRATIONS',
        'MSSQL CLUSTER & ENTITY FRAMEWORK',
      ],
      flowSummary: 'Marketplace Users ──► SignalR Real-Time Hub ──► .NET CRM Engine ──► Banking APIs & Database',
    },
    nextSlug: 'bepro-crm-automation-data-scraping',
    nextTitle: 'BePro Networks Zoho CRM Automation',
  },
  'bepro-crm-automation-data-scraping': {
    slug: 'bepro-crm-automation-data-scraping',
    eyebrow: '13 / AUTOMATION & UTILITIES',
    title: 'Zoho CRM Custom Automation, .NET Data Scraping & Validation Tools',
    organization: 'BePro Networks',
    subtitle: 'Custom Java CRM modules, .NET scraping tools, email validation engine, and multi-platform apps.',
    role: 'Information Technology Consultant',
    year: '2017 – 2019',
    challenge:
      'Client businesses struggled with repetitive manual data entry in CRM, poor lead data hygiene, and fragmented communication channels across desktop and mobile devices.',
    howItWorks: [
      {
        step: '01',
        name: 'Zoho CRM Java Automations',
        desc: 'Developed custom business modules, triggers, and automated workflows in Zoho Deluge / Java.',
      },
      {
        step: '02',
        name: '.NET Scraping & Validation Engine',
        desc: 'Built multithreaded web scrapers and rigorous email syntax/SMTP validation tools.',
      },
      {
        step: '03',
        name: 'Desktop & Mobile Utilities',
        desc: 'Constructed UWP desktop tools and cross-platform mobile prototypes using Ionic and Flutter.',
      },
      {
        step: '04',
        name: 'Corporate Web Delivery',
        desc: 'Delivered customized client websites with high-performance responsive frontend architecture.',
      },
    ],
    myRole: [
      'Zoho CRM Workflow Automation (Java / Deluge)',
      '.NET Data Scraping & Validation Engine Development',
      'Desktop (UWP) & Mobile (Flutter/Ionic) Utility Engineering',
      'Client IT Consulting & Architecture Delivery',
    ],
    outcome:
      'Streamlined business processes across multiple client accounts, eliminating manual data entry bottlenecks.',
    outcomeMetric: 'HIGH-PRECISION AUTOMATION',
    diagram: {
      title: 'ZOHO CRM & AUTOMATION TOPOLOGY',
      nodes: [
        'CLIENT SALES & MARKETING WORKFLOWS',
        'ZOHO CRM CUSTOM MODULES (JAVA / DELUGE)',
        '.NET DATA SCRAPING & EMAIL VALIDATOR',
        'UWP & FLUTTER CROSS-PLATFORM APPS',
      ],
      flowSummary: 'Client Workflows ──► Zoho Deluge Automations ──► .NET Tools ──► Validated Clean Data',
    },
    nextSlug: 'enterprise-ai-assistant',
    nextTitle: 'Enterprise AI Assistant',
  },
};

// Aliases for seed data slugs
systemsMap['toyota-first-production-ai-system'] = systemsMap['enterprise-ai-assistant'];
systemsMap['kaizen-marathon-multimodal-knowledge-base'] = systemsMap['kaizen-intelligence'];
systemsMap['dynamics-365-agentic-lead-intelligence'] = systemsMap['ai-lead-intelligence'];

export function generateStaticParams() {
  return [
    { slug: 'enterprise-ai-assistant' },
    { slug: 'kaizen-intelligence' },
    { slug: 'ai-lead-intelligence' },
    { slug: 'api-modernisation' },
    { slug: 'personalised-communication-and-offers' },
    { slug: 'post-sales-customer-targeting' },
    { slug: 'fleet-retail-invoice-compliance-automation' },
    { slug: 'business-reform-alj-marathon' },
    { slug: 'toyota-communication-centre-omnichannel' },
    { slug: 'call-centre-crm-telephony-integration' },
    { slug: 'toyota-enterprise-web-application-suite' },
    { slug: 'bakiciburada-custom-crm-platforms' },
    { slug: 'bepro-crm-automation-data-scraping' },
    { slug: 'toyota-first-production-ai-system' },
    { slug: 'kaizen-marathon-multimodal-knowledge-base' },
    { slug: 'dynamics-365-agentic-lead-intelligence' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = systemsMap[slug];

  if (!system) {
    return { title: 'System Not Found' };
  }

  return {
    title: `${system.title} — System Case Study`,
    description: system.subtitle,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = systemsMap[slug];

  if (!system) {
    notFound();
  }

  return (
    <article className="bg-canvas text-ink flex flex-col">
      {/* Top Breadcrumb & Navigation */}
      <section className="pt-12 pb-6 border-b border-border-light bg-canvas-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-ink transition-colors uppercase tracking-wider mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>

          {/* Eyebrow and Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-signal rounded-none" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {system.eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink uppercase leading-none">
              {system.title}
            </h1>

            <p className="text-lg sm:text-xl text-ink-muted font-normal leading-relaxed pt-1 max-w-3xl">
              {system.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border-light font-mono text-xs">
              <div>
                <span className="block text-[10px] text-ink-faint uppercase tracking-wider">ORGANISATION</span>
                <span className="font-semibold text-ink">{system.organization}</span>
              </div>
              <div>
                <span className="block text-[10px] text-ink-faint uppercase tracking-wider">YEAR</span>
                <span className="font-semibold text-ink">{system.year}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="block text-[10px] text-ink-faint uppercase tracking-wider">MY ROLE</span>
                <span className="font-semibold text-ink">{system.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* 1. THE CHALLENGE */}
        <section className="space-y-4 border-b border-border-light pb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block">
            THE CHALLENGE //
          </span>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {system.challenge}
          </p>
        </section>

        {/* 2. THE SYSTEM (Architecture Diagram) */}
        <section className="space-y-6 border-b border-border-light pb-16">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
              THE SYSTEM ARCHITECTURE //
            </span>
            <span className="font-mono text-[11px] text-ink-muted">
              {system.diagram.title}
            </span>
          </div>

          <div className="bg-canvas-white border border-border-light p-8 rounded-[2px] shadow-xs">
            <div className="space-y-4">
              <div className="font-mono text-xs text-ink-muted uppercase border-b border-border-light pb-2">
                CORE SYSTEM PIPELINE & TOPOLOGY
              </div>

              <div className="space-y-3">
                {system.diagram.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white border border-border-light rounded-[2px] font-mono text-xs text-ink flex items-center justify-between"
                  >
                    <span className="font-semibold">{node}</span>
                    <span className="text-[10px] text-ink-faint">LAYER 0{i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-border-light font-mono text-xs text-ink-faint">
                <span className="font-bold text-ink">DATA FLOW: </span>
                <span>{system.diagram.flowSummary}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS (4 Step Pipeline) */}
        <section className="space-y-6 border-b border-border-light pb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block">
            HOW IT WORKS //
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {system.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-canvas-white border border-border-light p-6 rounded-[2px]"
              >
                <span className="font-mono text-xs font-bold text-signal-contrast bg-signal/25 px-2 py-0.5 rounded-[1px] inline-block mb-3">
                  STEP {step.step}
                </span>
                <h3 className="font-mono text-sm font-bold text-ink uppercase mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. MY ROLE */}
        <section className="space-y-4 border-b border-border-light pb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block">
            MY RESPONSIBILITIES //
          </span>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-ink">
            {system.myRole.map((roleItem, idx) => (
              <li
                key={idx}
                className="p-3 bg-white border border-border-light rounded-[2px] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-signal rounded-none" />
                <span>{roleItem}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. MEASURABLE OUTCOME */}
        <section className="space-y-4 border-b border-border-light pb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block">
            OUTCOME & IMPACT //
          </span>

          <div className="bg-dark text-white p-8 rounded-[2px] border border-dark">
            <span className="font-mono text-xs text-signal font-bold uppercase tracking-widest block mb-2">
              VERIFIED RESULT: {system.outcomeMetric}
            </span>
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {system.outcome}
            </p>
          </div>
        </section>

        {/* 6. NEXT SYSTEM LINK */}
        <section className="pt-4 flex items-center justify-between">
          <Link
            href="/work"
            className="font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-wider"
          >
            ← All Systems
          </Link>

          <Link
            href={`/work/${system.nextSlug}`}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-dark border-b border-ink pb-0.5 group"
          >
            <span>Next System: {system.nextTitle}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

      </div>

      {/* Final CTA */}
      <FinalCtaSection />
    </article>
  );
}
