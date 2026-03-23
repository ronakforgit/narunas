import ModuleDetailPage from "@/components/ModuleDetailPage";

const Signal = () => (
  <ModuleDetailPage
    label="SIGNAL — COMMERCIAL INTELLIGENCE"
    headline="Know how the market reacts before you move."
    description="Pressure-test market strategies, simulate consumer reactions, and forecast demand before committing capital. Signal transforms how enterprises make commercial decisions."
    capabilities={[
      { name: "Creative testing", detail: "Test which ad concept, message, or visual direction lands best with a specific audience before spending on production or media." },
      { name: "Product launches", detail: "Predict adoption rates, identify resistance points, and understand how response varies across customer segments before launch day." },
      { name: "Price optimization", detail: "Simulate how demand shifts when price changes across different buyer profiles and willingness-to-pay thresholds." },
      { name: "Market segmentation", detail: "Identify which populations behave differently from each other and understand what drives those differences." },
      { name: "Churn prediction", detail: "Surface which customers are likely to leave, what triggers that decision, and which interventions change the outcome." },
      { name: "Competitive positioning", detail: "Understand how your brand is perceived relative to competitors among the segments that matter most." },
    ]}
    steps={[
      "Upload your product brief, campaign concept, or pricing scenario.",
      "Narunas generates a consumer population matching your target demographic and runs them through the scenario.",
      "Receive a structured report covering adoption likelihood, message resonance, segment-level variation, and risk factors.",
    ]}
    questions={[
      "If we raise the premium tier price by 20 percent, what happens to churn among our core segment?",
      "Which of these three product names generates the highest purchase intent?",
      "How does our new brand positioning land with enterprise buyers compared to SMB?",
      "What is the expected adoption curve for our new feature in the first 90 days?",
    ]}
  />
);

export default Signal;