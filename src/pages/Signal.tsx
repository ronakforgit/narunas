import ModuleDetailPage from "@/components/ModuleDetailPage";

const Signal = () => (
  <ModuleDetailPage
    label="SIGNAL — COMMERCIAL INTELLIGENCE"
    headline="Know how the market reacts before you move."
    description="Pressure-test market strategies, simulate consumer reactions, and forecast demand before committing capital. Signal transforms how enterprises make commercial decisions."
    capabilities={[
      { name: "Creative Testing", detail: "Simulate audience response to brand campaigns, messaging variants, and visual assets before launch." },
      { name: "Product Launches", detail: "Model adoption curves, identify early resistance points, and optimize go-to-market sequencing." },
      { name: "Price Optimization", detail: "Test pricing strategies across simulated customer segments to find optimal price points and elasticity thresholds." },
      { name: "Market Segmentation", detail: "Discover behavioral segments that traditional research can't surface through emergent agent clustering." },
      { name: "Churn Prediction", detail: "Simulate how changes in service, pricing, or competitive landscape affect customer retention." },
      { name: "Competitive Positioning", detail: "Model how your market responds to competitor moves — and find the counter-strategy that wins." },
    ]}
    steps={[
      "Upload your product brief, campaign assets, or competitive analysis.",
      "Presage spawns a consumer population matching your target demographic.",
      "Receive a structured report: adoption likelihood, message resonance, price sensitivity thresholds.",
    ]}
    questions={[
      "If we increase the premium tier price by 20%, what is the projected churn impact among our core segment?",
      "How do different customer segments respond to our new brand positioning?",
      "Which of these three product names generates the highest purchase intent?",
      "What is the expected adoption curve for our new feature among enterprise accounts?",
    ]}
  />
);

export default Signal;
