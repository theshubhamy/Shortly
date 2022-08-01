import Image from "next/image";
import { Container, Title,Heading, ImageContainer } from "./HeroElement";
const Hero = () => {
  return (
    <Container>
      <Heading>
        <Title>MORE THAN JUST SHORTER LINKS</Title>
      </Heading>

      <ImageContainer>
        <Image
          src="/assets/people-working.svg"
          alt="svg"
          width="300px"
          height="300px"
          objectFit="cover"
        />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
