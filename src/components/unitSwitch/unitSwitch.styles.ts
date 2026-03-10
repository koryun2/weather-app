import styled from "styled-components";

export const UnitSwitchContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

export const UnitSwitchButton = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  background: #ec6e4c;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background-color: rgb(201, 73, 38);
  }
`;
