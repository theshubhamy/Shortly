import styled from "styled-components";
export const Header = styled.header`
  margin: 0;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1rem 6rem;
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
export const Hamburger = styled.div`
  cursor: pointer;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MenuItem = styled.div`
  cursor: pointer;
  margin: 0 0.5rem;
  color: #bfbfbf;
  &:hover {
    color: black;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const Menu = styled.div`
  display: none;
  overflow: hidden;
  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }
`;
