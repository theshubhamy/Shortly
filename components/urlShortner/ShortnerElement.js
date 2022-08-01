import styled from "styled-components";
// Shorten the url Input and Button
export const ShortenerContainer = styled.div`
  background-color: #eff1f7;
  position: relative;
  width: 100%;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 0 2rem;
  flex-direction: column;
  gap: 2rem;
`;
export const FormContainer = styled.form`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1500px;
  margin: 0 auto 5rem;
  top: -5rem;
  height: 10rem;
  background: url("/assets/Meteor.svg");
  background-size: cover;
  background-position: center;
  flex-direction: row;
  z-index: 1;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const UrlInput = styled.input`
  position: relative;
  display: flex;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  width: 80%;
  max-width: 75%;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.colors.Red};
  outline: none;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    max-width: 90%;
  }
  &::placeholder {
    color: #f1b0b7;
  }
`;

export const ShortnerButton = styled.button`
  height: 40%;
  border-radius: 8px;
  color: white;
  background-color: ${({ theme }) => theme.colors.Cyan};
  white-space: nowrap;
  padding: 0 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #9be3e2;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    max-width: 90%;
    margin-top: 1rem;
  }
`;

// Shorten the url Output and copy to clipboard

export const ShortnerCard = styled.div`
  display: flex;
  background-color: white;
  width: 85%;
  max-width: 1500px;
  align-items: center;
  height: 4rem;
  border-radius: 10px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 10rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const OrignalUrl = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #444242;
  margin: 0;
  padding: 1rem 1.5rem;
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    font-weight: 500;
    width: 50%;
    padding-inline: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    border-bottom: 2px solid #e7e6e6;
    font-weight: 500;
    width: 100%;
  }
`;
export const ShortedUrlContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  gap: 0 1.5rem;
  align-items: center;
  padding-inline: 1.5rem;

  @media screen and (max-width: 1200px) {
    width: 45%;
    padding-inline: 1rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-bottom: 1rem;
  }
`;

export const ShortedUrl = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #2acfcf;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const CopyButton = styled.button`
  display: flex;
  border-radius: 8px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #9be3e2;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
