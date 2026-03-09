import {
  DailyCardContainer,
  Icon,
  TempContainer,
  Weekday,
  Unit,
  TempDay,
  TempNight,
} from "./dailyCard.styles";

export interface DailyCardProps {
  weekday: string;
  icon: string;
  temp_day: number;
  temp_night: number;
  unit: string;
}

export default function DailyCard({
  weekday,
  icon,
  temp_day,
  temp_night,
  unit,
}: DailyCardProps) {
  return (
    <DailyCardContainer>
      <Weekday>{weekday}</Weekday>
      <Icon src={icon} alt={weekday} />
      <TempContainer>
        <TempDay>
          {temp_day}
          <Unit>{unit}</Unit>
        </TempDay>
        <TempNight>
          {temp_night}
          <Unit>{unit}</Unit>
        </TempNight>
      </TempContainer>
    </DailyCardContainer>
  );
}
