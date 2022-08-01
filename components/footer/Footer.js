import {
  FooterTitle,
  FooterContainer,
  MainFooter,
  CTAButton,
  Head,
  Logo,
  FooterItems,
  FooterHead,
  FooterMenu1,
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
          <FooterMenu1>
            <FooterHead>Features</FooterHead>
            <FooterList>Link Shortning</FooterList>
            <FooterList>Branded Links</FooterList>
            <FooterList>Analytics</FooterList>
          </FooterMenu1>
          <FooterMenu1>
            <FooterHead>Resources</FooterHead>
            <FooterList>Blog</FooterList>
            <FooterList>Developers</FooterList>
            <FooterList>Support</FooterList>
          </FooterMenu1>
          <FooterMenu1>
            <FooterHead>Company</FooterHead>
            <FooterList>About</FooterList>
            <FooterList>Our Team</FooterList>
            <FooterList>Carrers</FooterList>
            <FooterList>Contacts</FooterList>
          </FooterMenu1>
        </FooterItems>
      </MainFooter>
    </FooterContainer>
  );
};

export default Footer;
