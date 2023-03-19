// Libraries
import React from "react";

export const BlogBanner = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      className="w-full lg:h-96 h-56 my-5 object-cover object-center rounded-3xl"
    />
  );
};
