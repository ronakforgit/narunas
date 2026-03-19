import ModuleDetailPage from "@/components/ModuleDetailPage";

const Civitas = () => (
  <ModuleDetailPage
    label="CIVITAS — GOVERNMENT INTELLIGENCE"
    headline="Design policy outcomes before anything goes live."
    description="Simulate how citizens, institutions, and stakeholders respond to policy initiatives, crisis events, or public communications. Civitas gives governments the evidence they need before going public."
    capabilities={[
      { name: "Policy Sequencing", detail: "Test the order and timing of policy rollouts to minimize public resistance and maximize adoption." },
      { name: "Crisis Response", detail: "Simulate public reaction to crisis communications and intervention strategies before deploying them." },
      { name: "Regulatory Impact", detail: "Model how proposed regulations affect different stakeholder groups across industries and demographics." },
      { name: "Public Communications", detail: "Test messaging strategies and communication channels to optimize public understanding and compliance." },
      { name: "Unreachable Population Modeling", detail: "Simulate responses from populations that traditional surveys cannot access — classified personnel, remote communities, marginalized groups." },
      { name: "Infrastructure Rollout", detail: "Predict community response to infrastructure projects and identify optimal engagement strategies." },
    ]}
    steps={[
      "Upload your policy draft, regulatory proposal, or crisis communication plan.",
      "Presage generates a citizenry matching the affected population's demographics and behavioral patterns.",
      "Receive a structured report: public sentiment forecast, resistance hotspots, optimal communication strategy.",
    ]}
    questions={[
      "How will different income groups respond to this proposed tax reform?",
      "What communication strategy minimizes public resistance to this infrastructure project?",
      "How does this regulatory change affect stakeholder sentiment across industry groups?",
      "What is the projected public reaction if this policy is announced during a crisis?",
    ]}
  />
);

export default Civitas;
