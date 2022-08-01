import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  position: relative;
  background-color: #eff1f7;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`;

export const Div = styled.div`
  display: flex;
  position: relative;
  padding: 30px;
  width: 90%;
  max-width: 1500px;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    padding: 0px;
  }
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #737373a1;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    width: 90%;
  }
`;

export const CardsWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  justify-content: space-evenly;
  cursor: pointer;
  padding: 1.5rem;
  width: 30%;
  z-index: 20;
  border-radius: 8px;
  transform: translateY(-3rem);
  transition: all 0.2s;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 28%;
    width: 100%;
    align-items: center;
    text-align: center;
    transform: translateY(0rem);
  }
`;

export const CardHeading = styled.h3`
  display: flex;
  margin-bottom: 0;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.3rem;
  }
`;

export const CradDescription = styled.p`
  display: flex;
  font-size: 1.2rem;
  color: #bfbfbf;
  margin: 0;
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3054;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  position: absolute;
  top: -2rem;
  background-size: cover;
  z-index: 100;
`;

export const Line = styled.div`
  display: flex;
  position: absolute;
  height: 1rem;
  width: 60%;
  top: 20%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: #2acfcf;
  z-index: 10;

  @media screen and (max-width: 768px) {
    transform: rotate(90deg);
    width: 100%;
    height: 0.5rem;
    margin-left: 0%;
    top: 50%;
  }

  @media screen and (max-width: 480px) {
    width: 200%;
  }
`;
