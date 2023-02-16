import { Plan } from "../../types";
import MenuButton from "./MenuButton";

interface PlansMenuProps {
  plans: Plan[];
  handleMenuButtonClick: (id: Number) => void;
}

export const PlansMenu: React.FunctionComponent<PlansMenuProps> = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {Array.from(props.plans).map((val) => (
          <MenuButton
            key={val.id.toString()}
            id={val.id}
            onMenuButtonClick={props.handleMenuButtonClick}
          >
            {val.name}
          </MenuButton>
        ))}
      </div>
    </div>
  );
};

export default PlansMenu;
