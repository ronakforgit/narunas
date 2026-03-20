export type PredictionStatus = "PENDING" | "CONFIRMED" | "REVISED";
export type ModuleType = "Signal" | "Civitas" | "Mandate";

export interface Prediction {
  slug: string;
  module: ModuleType;
  title: string;
  summary: string;
  date: string;
  status: PredictionStatus;
  content?: {
    executiveSummary: string;
    question: string;
    population: string;
    simulation: string;
    prediction: string;
    outcome?: string;
  };
}

export const predictions: Prediction[] = [
  {
    slug: "premium-tier-churn-q2-price-increase",
    module: "Signal",
    title: "Premium tier churn will rise 12–18% following the Q2 price increase",
    summary:
      "Simulation of 4,200 enterprise customer agents across three segments predicts elevated churn in the SMB cohort.",
    date: "March 4, 2026",
    status: "PENDING",
    content: {
      executiveSummary:
        "A population-scale simulation of 4,200 enterprise customer agents — segmented by company size, contract tenure, and product usage intensity — was conducted to forecast the retention impact of a planned 20% price increase on the Premium tier, effective Q2 2026. The simulation predicts a net churn increase of 12–18%, concentrated almost entirely in the SMB cohort with contracts under 18 months.",
      question:
        "The client's pricing team proposed a 20% increase to the Premium tier, effective at the start of Q2. Leadership needed to understand how this would affect retention across customer segments before committing to the change. Traditional survey-based research could not model a decision customers hadn't yet experienced, and historical churn data from prior increases was too sparse to extrapolate reliably.",
      population:
        "4,200 autonomous agents were generated to represent the client's active Premium-tier customer base. Each agent was parameterized with company size (Enterprise, Mid-Market, SMB), contract tenure (0–6 months, 6–18 months, 18+ months), monthly product usage frequency, support ticket history, and NPS survey response patterns. Behavioral logic incorporated published research on B2B price sensitivity, switching cost thresholds, and contract renewal decision-making.",
      simulation:
        "The price increase was introduced at simulation day 0. Over a simulated 90-day period, agents evaluated the change against their usage patterns, perceived alternatives, and contract renewal timelines. SMB agents with under 18 months of tenure showed the earliest and strongest negative response — 68% initiated competitive evaluation within 30 simulated days. Enterprise agents with high usage showed negligible reaction. A cascade effect emerged in the SMB cohort: as early churners departed, remaining SMB agents perceived reduced community value, accelerating secondary churn. Mid-Market agents exhibited a bimodal response — those with active support relationships remained stable, while those with low engagement mirrored SMB behavior.",
      prediction:
        "Net churn across the Premium tier will increase by 12–18% in the 90 days following the Q2 price change. The SMB cohort (contracts under 18 months) will account for approximately 74% of all incremental churn. Enterprise retention will remain within 2% of baseline. The client should expect the churn curve to steepen between days 30–60 as competitive evaluation cycles complete.",
    },
  },
  {
    slug: "product-naming-purchase-intent",
    module: "Signal",
    title: "New product naming drives 23% higher purchase intent vs. current brand",
    summary:
      "Consumer simulation across 8,000 agents in the US and UK tests three naming variants against the existing product line.",
    date: "February 18, 2026",
    status: "CONFIRMED",
    content: {
      executiveSummary:
        "An 8,000-agent consumer simulation tested three candidate product names against the incumbent brand name across US and UK markets. Variant B outperformed all alternatives with a 23% lift in purchase intent, driven primarily by stronger resonance in the 25–44 demographic.",
      question:
        "The client was preparing to rebrand a flagship product line and needed to understand which of three naming candidates would maximize purchase intent without cannibalizing existing brand equity.",
      population:
        "8,000 consumer agents representing the client's target demographic across US and UK markets, segmented by age, income, brand familiarity, and category purchase frequency.",
      simulation:
        "Each agent was exposed to product descriptions using one of four names (three candidates plus incumbent). Agents evaluated names based on perceived quality, memorability, and alignment with their stated needs. Social influence dynamics allowed agents to discuss preferences, revealing network effects on name perception.",
      prediction:
        "Variant B will generate 23% higher purchase intent than the current brand name, with the strongest lift among consumers aged 25–44. Variant A will underperform the incumbent by 4%. Variant C will perform at parity.",
      outcome:
        "Post-launch tracking confirmed Variant B achieved a 21% lift in purchase intent in the first 60 days — within the simulation's predicted range. The 25–44 demographic drove 61% of incremental interest, closely matching the simulated 58%.",
    },
  },
  {
    slug: "rural-digital-identity-adoption-lag",
    module: "Civitas",
    title: "Rural adoption of the digital identity program will lag urban uptake by 18–24 months",
    summary:
      "Citizen simulation across income and geography segments models rollout resistance and trust gaps.",
    date: "February 27, 2026",
    status: "PENDING",
  },
  {
    slug: "crisis-communication-variant-b",
    module: "Civitas",
    title: "Crisis communication variant B reduces public anxiety 31% faster than variant A",
    summary:
      "Simulation of 6,500 citizen agents tests two emergency messaging strategies during a natural disaster scenario.",
    date: "January 15, 2026",
    status: "CONFIRMED",
  },
  {
    slug: "endorsement-shifts-undecided-voters",
    module: "Mandate",
    title: "Endorsement by a prominent regional figure shifts undecided voters +4.2pts in three target districts",
    summary:
      "Electoral simulation of 12,000 voter agents models endorsement timing, message pairing, and district-level impact.",
    date: "March 11, 2026",
    status: "PENDING",
  },
  {
    slug: "attack-ad-healthcare-turnout",
    module: "Mandate",
    title: "Attack ad on healthcare increases base turnout but loses persuadable voters net -2.1pts",
    summary:
      "Message testing simulation across voter segments forecasts net electoral movement from opposition messaging strategy.",
    date: "January 29, 2026",
    status: "REVISED",
  },
];
