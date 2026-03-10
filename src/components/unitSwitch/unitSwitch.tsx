import { useContext } from "react";
import { UnitSwitchContainer, UnitSwitchButton } from "./unitSwitch.styles";
import { AppContext } from "../../contextProvider.ts";

export default function UnitSwitch() {
  const { unit, setUnit } = useContext(AppContext);
  const handleUnitSwitch = () => {
    setUnit(unit === "°C" ? "°F" : "°C");
  };
  return (
    <UnitSwitchContainer>
      <UnitSwitchButton onClick={handleUnitSwitch}>{unit}</UnitSwitchButton>
    </UnitSwitchContainer>
  );
}
