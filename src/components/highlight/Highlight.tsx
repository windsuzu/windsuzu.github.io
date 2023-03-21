import React from "react";

export const Highlight = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <span
      style={{
        padding: "0 5px",
        background:
          "linear-gradient(to bottom, transparent 60%, #fce0414D 50%)",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
};
