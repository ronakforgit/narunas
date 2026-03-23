import ModuleDetailPage from "@/components/ModuleDetailPage";

const Mandate = () => (
  <ModuleDetailPage
    label="MANDATE — POLITICAL INTELLIGENCE"
    headline="Simulate the electorate. Win the decision."
    description="Understand how events, endorsements, and narratives shift sentiment and turnout across any electorate. Mandate gives campaigns and political organizations the predictive edge they need."
    capabilities={[
      { name: "Election forecasting", detail: "Predict vote share and outcome likelihood across districts and demographic segments with agent-level behavioral modeling." },
      { name: "Voter turnout modeling", detail: "Identify which conditions, messages, or events increase or suppress turnout among specific voter groups." },
      { name: "Message testing", detail: "Determine which candidate or policy message generates the strongest response among persuadable and low-propensity voters." },
      { name: "Opposition scenario planning", detail: "Simulate how an opponent's likely moves land across different voter segments before they are made." },
      { name: "Endorsement impact", detail: "Quantify how much a specific endorsement shifts sentiment, favorability, or turnout among target constituencies." },
      { name: "Ground game strategy", detail: "Model where to concentrate field resources for maximum electoral return across districts." },
    ]}
    steps={[
      "Upload your campaign brief, message variants, or electoral scenario.",
      "Narunas generates a voter population matched to your target districts and runs them through the scenario.",
      "Receive a structured report covering vote share projections, persuasion rates, turnout impact, and district-level strategy recommendations.",
    ]}
    questions={[
      "If a major endorsement drops this week, how does turnout shift in our three closest districts?",
      "Which message variant generates the strongest movement among undecided voters aged 35 to 54?",
      "How does our opponent's most likely attack line land with our base?",
      "Where should we concentrate ground game resources to maximize our margin in the closest races?",
    ]}
  />
);

export default Mandate;