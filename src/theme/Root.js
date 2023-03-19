// Libraries
import React from "react";
import { ConfigProvider } from "antd";

// Css
import "animate.css";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#005fb8",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export const BlogBanner = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      className="w-full h-40 object-cover object-top rounded-md"
    />
  );
};
