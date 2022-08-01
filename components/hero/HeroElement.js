import styled from "styled-components";

export const HeroPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const HeroPageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  padding: 0 0.1rem;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 6rem;
    padding: 0 4rem;
    font-weight: bolder;
    margin-top: -0.5rem;
    margin-bottom: 0rem;
    line-height: 1.2;
  }
`;
