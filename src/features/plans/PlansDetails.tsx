import { Plan, PlanDetails } from "../../types";

interface PlanDetailsProps {
  planId: Number;
  plans: Plan[];
  planDetails: PlanDetails[];
}

export const PlanDetailsMenu: React.FunctionComponent<PlanDetailsProps> = (
  props
) => {
  return (
    <div>
      <h3>{props.plans.filter(p => p.id === props.planId).map(p => p.description)}</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(props.planDetails).map((val) => (
          <div style={{width: "25%", border: "1px solid", padding: "10px"}}>
            <p>{val.name}</p>
            <p>{val.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanDetailsMenu;
