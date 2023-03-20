// Libraries
import React from "react";
import IdealImage from "@theme/IdealImage";

export const BlogBanner = ({ imageUrl }) => {
  return (
    <IdealImage
      img={imageUrl}
      className="w-full lg:h-96 h-56 my-5 object-cover object-center rounded-3xl hidden"
    />
  );
};
