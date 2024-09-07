import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FooterContenair, FooterLinksWrapper,
    FooterWrapper, FooterLinksContainer,
 FooterLinksItem, FooterLinksTitle,
    SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
    SocialMediaWrapper, WebsiteRights
 } from "./FooterElements"
import { Button } from "../ButtonElemet"

const Footer = () => {
  return (
    <FooterContenair>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>Ready to Refresh Your Wardrobe?</FooterLinksTitle>
                        <Button to="/signin">Shop Now</Button>
                    </FooterLinksItem>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/">Follow us on Social Media</SocialLogo>
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

