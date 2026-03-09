import styled from "styled-components";

export const SearchDropdownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0 0 20px 20px;
`;

export const SearchDropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
