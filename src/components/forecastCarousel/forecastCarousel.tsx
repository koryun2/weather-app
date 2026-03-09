import { UnitContext } from "../../contextProvider";
import { useContext } from "react";
import type { DailyCardInterface } from "../../types";
import DailyCard from "../dailyCard/dailyCard";
import {
  CarouselContainer,
  CarouselHeader,
  CarouselInnerWrapper,
} from "./forecastCarousel.styles";

interface ForecastCarouselProps {
  header_text: string;
  daily_cards: DailyCardInterface[];
}

export default function ForecastCarousel({
  header_text,
  daily_cards,
}: ForecastCarouselProps) {
  const { unit } = useContext(UnitContext);
  return (
    <CarouselContainer>
      <CarouselHeader>{header_text}</CarouselHeader>
      <CarouselInnerWrapper>
        {daily_cards.map((card, index) => (
          <DailyCard
            key={index}
            weekday={card.weekday}
            icon={card.icon}
            temp_day={card.temp_day}
            temp_night={card.temp_night}
            unit={unit}
          />
        ))}
      </CarouselInnerWrapper>
    </CarouselContainer>
  );
}
