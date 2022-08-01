import {
  Div,
  Flex,
  Title,
  Subtitle,
  SubTitleWrapper,
  CardsWrapper,
  CardContainer,
  CardHeading,
  CradDescription,
  Circle,
  Line,
} from "./StatsElements";
import BrandRecognition from "../../public/assets/icon-brand-recognition.svg";
import Image from "next/image";
const AdvStats = () => {
  return (
    <Flex>
      <Div>
        <SubTitleWrapper>
          <Title>Advanced Statistics</Title>
          <Subtitle>
            Track how your links are working performing accross the web with our
            advance statistics dashboard.
          </Subtitle>
        </SubTitleWrapper>
        <CardsWrapper>
          <CardContainer>
            <Circle>
              <Image src={BrandRecognition} alt="brand-recognition" />
            </Circle>
            <CardHeading>Brand Recognition</CardHeading>
            <CradDescription>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </CradDescription>
          </CardContainer>
          <Line />
          <CardContainer>
            <Circle>
              <Image src={BrandRecognition} alt="brand-recognition" />
            </Circle>
            <CardHeading>Brand Recognition</CardHeading>
            <CradDescription>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </CradDescription>
          </CardContainer>
          <Line />
          <CardContainer>
            <Circle>
              <Image src={BrandRecognition} alt="brand-recognition" />
            </Circle>
            <CardHeading>Brand Recognition</CardHeading>
            <CradDescription>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </CradDescription>
          </CardContainer>
          <Line />
        </CardsWrapper>
      </Div>
    </Flex>
  );
};

export default AdvStats;
