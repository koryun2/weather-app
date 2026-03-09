import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  width: 100%;
  margin: 10px;
  max-width: 100%;
  background-color: #f0f0f0;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.16);

  @media (min-width: 768px) {
    width: 75%;
    max-width: 560px;
  }

  @media (min-width: 1024px) {
    width: 50vw;
    max-width: none;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const SearchBarInput = styled.input`
  font-family: "Poppins", sans-serif;
  margin: 1rem 0 1rem 1rem;
  padding: 10px 20px;
  min-width: 0;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin: 1.25rem 0 1.25rem 1.25rem;
    padding: 10px 20px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    margin: 25px 0 25px 25px;
    padding: 10px 20px;
    font-size: 1.2rem;
  }
`;

export const SearchBarButton = styled.button`
  height: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: rgb(0, 165, 241);
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 165, 241, 0.4);

  @media (min-width: 768px) {
    gap: 8px;
    margin: 1.25rem;
    padding: 10px 20px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    gap: 10px;
    margin: 25px;
    padding: 10px 20px;
    font-size: 1.2rem;
  }
`;

export const SearchBarButtonIcon = styled.img`
  width: 18px;
  height: 18px;

  @media (min-width: 768px) {
    width: 19px;
    height: 19px;
  }

  @media (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;
