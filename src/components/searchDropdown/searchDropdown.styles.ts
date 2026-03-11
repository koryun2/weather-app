import styled from "styled-components";

export const SearchDropdownContainer = styled.div`
  position: absolute;
  width: calc(100vw - 16px);
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  background-color: rgb(202, 205, 238)
  border: 1px solid rgba(126, 162, 247, 0.08);
  border-radius: 14px;
  box-shadow: 0 2px 8px rgb(0, 29, 194);
  margin-top: 4px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const SearchDropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const SearchDropdownItem = styled.li`
  &:first-child {
    border-top: none;
  }
  border-top: 1px solid #ccc;
  color: #000;
  padding: 10px 16px;
  min-height: 44px;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  background-color: rgb(255, 255, 255);

  &:hover {
    background-color: rgba(52, 149, 239);
  }
`;
