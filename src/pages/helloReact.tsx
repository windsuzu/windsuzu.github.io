import Layout from "@theme/Layout";

import React from "react";

const helloReact = (): JSX.Element => {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/helloReact.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
};

export default helloReact;
