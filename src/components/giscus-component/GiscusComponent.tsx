import Giscus from "@giscus/react";
import React from "react";

import { useColorMode } from "@docusaurus/theme-common";

export const GiscusComponent = (): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <Giscus
      repo="windsuzu/windsuzu.github.io"
      repoId="R_kgDOIlO8WQ"
      category="Announcements"
      categoryId="DIC_kwDOIlO8Wc4CUp9E"
      mapping="url"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
    />
  );
};
