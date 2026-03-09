import { useContext } from "react";
import { UnitSwitchContainer, UnitSwitchButton } from "./unitSwitch.styles";
import { UnitContext } from "../../contextProvider";

export default function UnitSwitch() {
  const { unit, setUnit } = useContext(UnitContext);
  const handleUnitSwitch = () => {
    setUnit(unit === "℃" ? "℉" : "℃");
  };
  return (
    <UnitSwitchContainer>
      <UnitSwitchButton onClick={handleUnitSwitch}>{unit}</UnitSwitchButton>
    </UnitSwitchContainer>
  );
}
