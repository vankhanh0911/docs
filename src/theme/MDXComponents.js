// Libraries
import React from "react";

// Components
import MDXComponents from "@theme-original/MDXComponents";
import { BlogBanner } from "@site/src/components/BlogBanner";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  BlogBanner,
};
