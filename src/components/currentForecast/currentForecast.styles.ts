import styled from "styled-components";

export const CurrentForecastContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.16);
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.5rem;
    margin: 0.75rem 0;
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    padding: 50px;
    width: 75vw;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (min-width: 768px) {
    width: auto;
    flex-wrap: nowrap;
    gap: 0;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-right: 16px;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding-right: 0;
  }
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  gap: 2rem;
  color: rgb(104, 104, 104);
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
    gap: 8px;
    width: auto;
  }
`;

export const Local = styled.div`
  display: inline-block;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: inherit;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.35rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Time = styled.div`
  margin: 0;
  padding-left: 0.5rem;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 400;
  color: inherit;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding-left: 8px;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
    padding-left: 10px;
  }
`;

export const Temp = styled.div`
  display: flex;
  line-height: 1;
  align-items: left;
  justify-content: left;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  color: inherit;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const FeelsLike = styled.div`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.15;
  color: inherit;

  @media (min-width: 768px) {
    display: inline-flex;
    gap: 8px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const Humidity = styled.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.15;
  font-weight: 400;
  font-style: italic;
  color: inherit;

  @media (min-width: 768px) {
    display: inline-flex;
    gap: 8px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const WindSpeed = styled.div`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.15;
  color: inherit;

  @media (min-width: 768px) {
    display: inline-flex;
    gap: 8px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const Unit = styled.div`
  margin: 0;
  font-size: inherit;
  font-weight: 400;
  color: inherit;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  padding-right: 0;

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    padding-right: 1rem;
  }

  @media (min-width: 1024px) {
    width: 160px;
    height: 160px;
    padding-right: 20px;
  }
`;

export const Value = styled.p`
  line-height: 1.15;
  margin: 0;
`;

export const CurrentForecastHeader = styled.h2`
  font-size: 1.5rem;
  padding: 0;
  margin: 1rem 0;
  font-weight: 600;
  color: white;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.85rem;
    margin: 1.25rem 0;
  }

  @media (min-width: 1024px) {
    font-size: 2.2rem;
    margin: 1.5rem 0;
  }
`;
