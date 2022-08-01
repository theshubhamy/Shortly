import {
  FooterTitle,
  FooterContainer,
  MainFooter,
  CTAButton,
  Head,
  Logo,
  FooterItems,
  FooterHead,
  FooterMenu,
  FooterList,
  FooterLinks,
  LinksLogo,
  LinksContainer,
} from "./FooterElement";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>
        <Head>Boost your links today</Head>
        <CTAButton>Get Started</CTAButton>
      </FooterTitle>
      <MainFooter>
        <LinksContainer>
          <Logo>
            <Image
              src={"/assets/logo_white.svg"}
              alt="logo"
              height={"40px"}
              width="130px"
            />
          </Logo>
          <FooterLinks>
            <LinksLogo>
              <Image
                src={"/assets/icon-facebook.svg"}
                alt="logo"
                height={"25px"}
                width={"25px"}
              />
            </LinksLogo>
            <LinksLogo>
              <Image
                src={"/assets/icon-twitter.svg"}
                alt="logo"
                height={"25px"}
                width={"25px"}
              />
            </LinksLogo>
            <LinksLogo>
              <Image
                src={"/assets/icon-pinterest.svg"}
                alt="logo"
                height={"25px"}
                width={"25px"}
              />
            </LinksLogo>
            <LinksLogo>
              <Image
                src={"/assets/icon-instagram.svg"}
                alt="logo"
                height={"25px"}
                width={"25px"}
              />
            </LinksLogo>
          </FooterLinks>
        </LinksContainer>
        <FooterItems>
          <FooterMenu>
            <FooterHead>Features</FooterHead>
            <FooterList>Link Shortning</FooterList>
            <FooterList>Branded Links</FooterList>
            <FooterList>Analytics</FooterList>
          </FooterMenu>
          <FooterMenu>
            <FooterHead>Resources</FooterHead>
            <FooterList>Blog</FooterList>
            <FooterList>Developers</FooterList>
            <FooterList>Support</FooterList>
          </FooterMenu>
          <FooterMenu>
            <FooterHead>Company</FooterHead>
            <FooterList>About</FooterList>
            <FooterList>Our Team</FooterList>
            <FooterList>Carrers</FooterList>
            <FooterList>Contacts</FooterList>
          </FooterMenu>
        </FooterItems>
      </MainFooter>
    </FooterContainer>
  );
};

export default Footer;
