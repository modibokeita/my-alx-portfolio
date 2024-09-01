import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FooterContenair, FooterLinksWrapper,
    FooterWrapper, FooterLinksContainer,
    FooterLink, FooterLinksItem, FooterLinksTitle,
    SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
    SocialMediaWrapper, WebsiteRights
 } from "./FooterElements"

const Footer = () => {
  return (
    <FooterContenair>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to="/signin">contact</FooterLink>
                        <FooterLink to="/signin">outd Us</FooterLink>
                        <FooterLink to="/signin">About Us</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to="/signin">contact</FooterLink>
                        <FooterLink to="/signin">outd Us</FooterLink>
                        <FooterLink to="/signin">About Us</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to="/signin">contact</FooterLink>
                        <FooterLink to="/signin">outd Us</FooterLink>
                        <FooterLink to="/signin">About Us</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to="/signin">contact</FooterLink>
                        <FooterLink to="/signin">outd Us</FooterLink>
                        <FooterLink to="/signin">About Us</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/">Keita</SocialLogo>
                    <WebsiteRights>© Keita {new  Date().getFullYear()} all rights reserved</WebsiteRights>
                    <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="intagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="whatsapp">
                            <FaWhatsapp/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContenair>
  )
}

export default Footer

