import ModuleDetailPage from "@/components/ModuleDetailPage";

const Mandate = () => (
  <ModuleDetailPage
    label="MANDATE — POLITICAL INTELLIGENCE"
    headline="Simulate the electorate. Win the decision."
    description="Understand how events, endorsements, and narratives shift sentiment and turnout across any electorate. Mandate gives campaigns and political organizations the predictive edge they need."
    capabilities={[
      { name: "Election Forecasting", detail: "Run full-scale electorate simulations to predict outcomes under different scenarios and turnout models." },
      { name: "Voter Turnout Modeling", detail: "Simulate how campaign strategies, events, and external factors affect turnout across key demographics." },
      { name: "Message Testing", detail: "Test persuasion messaging across simulated voter segments to identify the highest-impact narratives." },
      { name: "Opposition Scenario Planning", detail: "Model your opponent's likely moves and simulate electorate response to develop counter-strategies." },
      { name: "Endorsement Impact", detail: "Quantify the effect of endorsements on voter sentiment and turnout across different districts and demographics." },
      { name: "Ground Game Strategy", detail: "Optimize resource allocation across districts by simulating the marginal impact of field operations." },
    ]}
    steps={[
      "Upload your campaign strategy, opponent analysis, or electoral scenario.",
      "Presage generates a simulated electorate matching the target districts' demographic and behavioral profiles.",
      "Receive a structured report: sentiment shifts, turnout projections, optimal resource allocation by district.",
    ]}
    questions={[
      "If a prominent endorsement drops this week, how does turnout shift in our target districts?",
      "Which message variant produces the highest persuasion among undecided voters aged 35–54?",
      "How does our opponent's likely attack line land with our base?",
      "What ground game allocation maximizes our margin in the three closest districts?",
    ]}
  />
);

export default Mandate;
