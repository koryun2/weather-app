import styled from "styled-components";

export const UnitSwitchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnitSwitchButton = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  &:active {
    opacity: 0.85;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.8);
    outline-offset: 2px;
  }
`;
