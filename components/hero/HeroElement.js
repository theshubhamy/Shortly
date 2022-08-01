import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Heading = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;
export const Title = styled.h1`
  margin: 0;
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.VeryDarkBlue};
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 560px) {
    font-size: 3rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    height: fit-content;
    margin-bottom: 2rem;
    order: 1;
  }
`;
