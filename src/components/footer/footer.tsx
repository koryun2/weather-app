import { FooterLink, FooterText, FooterWrapper } from "./footer.styles";

const GITHUB_REPO = "https://github.com/koryun2/weather-app";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        This project is built by Koryun Hayryan. All rights reserved.
      </FooterText>
      <FooterLink href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
        GitHub
      </FooterLink>
    </FooterWrapper>
  );
}
