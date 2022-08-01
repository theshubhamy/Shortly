import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;

export const FooterTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem 1rem;
  background-color: ${({ theme }) => theme.colors.DarkVoilet};
  background-image: url("/assets/Meteor.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Head = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const CTAButton = styled.button`
  display: flex;
  color: white;
  background-color: ${({ theme }) => theme.colors.Cyan};
  white-space: nowrap;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: 700;
  padding: 15px 40px;
  border-radius: 30px;
  &:hover {
    background-color: #9be3e2;
  }
`;

// <------------------->

export const MainFooter = styled.div`
  display: flex;
  width: 100%;
  background-color: #232127;
  justify-content: space-evenly;
  padding: 4rem;
  position: relative;
  @media screen and (max-width: 1024px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 2rem 7rem;
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterItems = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1200px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 540px) {
    width: 80%;
  }
`;

export const FooterHead = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-inline: 10px;
  color: white;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
  width: 30%;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

export const FooterList = styled.li`
  font-size: 1rem;
  margin: 10px;
  color: #bfbfbf;
  cursor: pointer;
  &:hover {
    color: #2ac3c3;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding-block: 1rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 2rem;
    width: 100vw;
    margin-top: 1rem;
    left: 0;
    justify-content: center;
  }
`;

export const LinksLogo = styled.div`
  cursor: pointer;
  display: flex;
  color: white;
  font-size: 1.5rem;
  &:hover {
    color: #2acfcf;
  }
`;
