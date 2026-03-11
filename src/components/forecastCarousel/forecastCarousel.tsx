import { AppContext } from "@/contextProvider";
import { useContext } from "react";
import type { ForecastDaily } from "@/types";
import DailyCard from "@/components/dailyCard/dailyCard";
import { getWeekday } from "@/utils";
import {
  CarouselContainer,
  CarouselHeader,
  CarouselInnerWrapper,
} from "./forecastCarousel.styles";
import { getIconURL } from "../../utils";

interface ForecastCarouselProps {
  header_text: string;
  daily_cards: ForecastDaily | null;
}

export default function ForecastCarousel({
  header_text,
  daily_cards,
}: ForecastCarouselProps) {
  const { unit } = useContext(AppContext);
  const weekdays = daily_cards?.time.map((time) => getWeekday(time));
  const icons = daily_cards?.weather_code.map((code) => getIconURL(code));
  const temp_max = daily_cards?.temperature_2m_max.map((temp) => temp);
  const temp_min = daily_cards?.temperature_2m_min.map((temp) => temp);
  return (
    <CarouselContainer>
      <CarouselHeader>{header_text}</CarouselHeader>
      <CarouselInnerWrapper>
        {weekdays?.map((weekday, index) => (
          <DailyCard
            key={index}
            weekday={weekday}
            icon={icons?.[index] ?? getIconURL(0)}
            temp_max={temp_max?.[index] ?? 0}
            temp_min={temp_min?.[index] ?? 0}
            unit={unit}
          />
        ))}
      </CarouselInnerWrapper>
    </CarouselContainer>
  );
}
