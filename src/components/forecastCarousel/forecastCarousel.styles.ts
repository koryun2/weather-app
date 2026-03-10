import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 1024px) {
    width: 75vw;
  }
  @media (min-width: 1420px) {
    width: 100%;
`;

export const CarouselHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  margin: 1rem 0;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.85rem;
    margin: 1.25rem 0;
  }

  @media (min-width: 1024px) {
    font-size: 2.2rem;
    margin: 1.5rem 0;
  }
`;

export const CarouselInnerWrapper = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  gap: 0;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
  }

  @media (min-width: 1024px) {
    scroll-snap-type: none;
    gap: 0;
  }
  @media (min-width: 1420px) {
    justify-content: center;
  }
`;
