import ModuleDetailPage from "@/components/ModuleDetailPage";

const Civitas = () => (
  <ModuleDetailPage
    label="CIVITAS — GOVERNMENT INTELLIGENCE"
    headline="Design policy outcomes before anything goes live."
    description="Simulate how citizens, institutions, and stakeholders respond to policy initiatives, crisis events, or public communications. Civitas gives governments the evidence they need before going public."
    capabilities={[
      { name: "Policy sequencing", detail: "Model the optimal order to introduce policy changes to reduce public resistance and build stakeholder support." },
      { name: "Crisis response", detail: "Test which communication approaches reduce public anxiety fastest across different demographic groups during a crisis." },
      { name: "Regulatory impact", detail: "Simulate how affected industries, businesses, and citizens respond to proposed regulatory changes before they are announced." },
      { name: "Public communications", detail: "Identify which messaging strategy performs best across geographic, demographic, and psychographic segments." },
      { name: "Unreachable population modeling", detail: "Simulate groups that are difficult or impossible to survey directly, including rural communities, low-trust populations, and high-net-worth households." },
      { name: "Infrastructure rollout", detail: "Predict community response to major public projects so that objections can be addressed before implementation begins." },
    ]}
    steps={[
      "Upload your policy draft, communications plan, or crisis scenario.",
      "Narunas generates a citizen population across relevant demographic and geographic segments and runs the simulation.",
      "Receive a structured report covering public sentiment, resistance clusters, likely media narratives, and recommended sequencing.",
    ]}
    questions={[
      "How will different income groups respond to this proposed tax reform?",
      "Which communication strategy reduces public resistance to this infrastructure project?",
      "What is the projected public reaction if this policy is announced during a period of economic stress?",
      "How does this regulatory change affect sentiment across the industry groups most affected?",
    ]}
  />
);

export default Civitas;