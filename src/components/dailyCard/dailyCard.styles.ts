import styled from "styled-components";

export const DailyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 75px;
  min-width: 75px;
  height: 130px;
  flex-shrink: 0;
  background-color: rgba(179 221 255 / 30%);
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
  cursor: default;

  @media (min-width: 768px) {
    width: 124px;
    min-width: 124px;
    height: 175px;
    padding: 0.6rem;
    margin: 0.5rem;
  }

  @media (min-width: 1024px) {
    height: 220px;
    padding: 10px;
    margin: 10px;
    scroll-snap-align: none;
  }
`;

export const Weekday = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 4px;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;

  @media (min-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const TempMax = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const TempMin = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(11, 22, 69);

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const Unit = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: inherit;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    margin-top: 0.5rem;
  }

  @media (min-width: 1024px) {
    margin-top: 10px;
  }
`;
