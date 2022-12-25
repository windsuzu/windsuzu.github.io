import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { useColorMode } from "@docusaurus/theme-common";
import styles from "./index.module.css";

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useColorMode();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          src={isDarkTheme ? "img/logo/logo-dark.png" : "img/logo/logo.png"}
          alt="Site Logo"
          width="55%"
          style={{
            marginBottom: "-2rem",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        <p
          className="hero__subtitle"
          style={{
            userSelect: "none",
          }}
        >
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Hello">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
