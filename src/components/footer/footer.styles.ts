import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0;
  text-align: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  font-style: italic;
  color: rgb(255, 188, 121);
`;

export const FooterLink = styled.a`
  color: inherit;
  font-style: italic;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: #fff;
`;
