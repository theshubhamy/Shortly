import styled from "styled-components";
// Shorten the url Input and Button
export const ShortenerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  background-color: #ece9f2;
`;
export const FormContainer = styled.form`
  width: 85%;
  margin: auto;
  height: 150px;
  margin-top: -50px;
  margin-bottom: 30px;
  padding: 40px 80px;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 40px;
  z-index: 5;
  position: relative;
  overflow: auto;
  object-fit: cover;
  background-image: url(/assets/Meteor.svg);
`;

export const UrlInput = styled.input`
  width: 75%;
  height: 60px;
  border-radius: 8px;
  padding: 10px 30px;
  font-size: 18px;
  outline: none;
  &::placeholder {
    color: red;
  }
`;

export const ShortnerButton = styled.button`
  padding: 10px 20px;
  height: 60px;
  width: 200px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  color: #fff;
  background-color: #2acfcf;
  &:hover {
    background-color: #69d1d1;
  }
`;

// Shorten the url Output and copy to clipboard

export const ShortnerCard = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  line-height: 1;
  margin: auto;
  margin: 10px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const UrlShortnerInputUrl = styled.div``;
export const UrlShortnerIUrl = styled.p``;
export const UrlShortnerOutputUrl = styled.div`
  display: flex;
  gap: 30px;
`;

export const UrlShortnerOUrl = styled.p`
  color: #2acfcf;
  font-size: 18px;
`;

export const CopyButton = styled.button`
  color: white;
  border: none;
  line-height: 1;
  font-weight: 700;
  padding: 10px 30px;
  border-radius: 8px;
  font-size: 18px;
  background-color: ${(props) => (props.links ? "#3b3054" : "#2acfcf")};
`;
