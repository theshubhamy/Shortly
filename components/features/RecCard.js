import React from "react";
import {
  BrandRecContainer,
  BrandRecDescription,
  BrandRecHeading,
  BrandRecImgDiv,
} from "./StatsElements";
import Image from "next/image";
const RecCard = () => {
  return (
    <BrandRecContainer>
      <BrandRecHeading>Brand Recognition</BrandRecHeading>
      <BrandRecDescription>
        Boost your brand recogniztion with each click.Generic links dont mean a
        thing.Branded links help instil confidence in your content
      </BrandRecDescription>
      <BrandRecImgDiv>
        <Image
          src="/assets/icon-brand-recognition.svg"
          alt="brand-recognition"
          width={40}
          height={40}
        />
      </BrandRecImgDiv>
    </BrandRecContainer>
  );
};

export default RecCard;
