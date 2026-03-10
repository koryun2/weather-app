import {
  DailyCardContainer,
  Icon,
  TempContainer,
  Weekday,
  Unit,
  TempMax,
  TempMin,
} from "./dailyCard.styles";
import { convertTemperature } from "@/utils";

export interface DailyCardProps {
  weekday: string;
  icon: string;
  temp_max: number;
  temp_min: number;
  unit: string;
}

export default function DailyCard({
  weekday,
  icon,
  temp_max,
  temp_min,
  unit,
}: DailyCardProps) {
  return (
    <DailyCardContainer>
      <Weekday>{weekday}</Weekday>
      <Icon src={icon} alt={weekday} />
      <TempContainer>
        <TempMax>
          {convertTemperature(temp_max, unit).toFixed(1)}
          <Unit>{unit}</Unit>
        </TempMax>
        <TempMin>
          {convertTemperature(temp_min, unit).toFixed(1)}
          <Unit>{unit}</Unit>
        </TempMin>
      </TempContainer>
    </DailyCardContainer>
  );
}
