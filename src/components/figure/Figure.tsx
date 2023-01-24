import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const Figure = ({
  src,
  caption,
}: {
  src: string;
  caption: string;
}): JSX.Element => {
  return (
    <figure
      style={{
        padding: 20,
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
        gap: 4,
      }}
    >
      <img src={useBaseUrl(src)} alt={caption} />
      <figcaption
        style={{ fontSize: 14, textAlign: "center", color: "#BDBDBD" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
};
