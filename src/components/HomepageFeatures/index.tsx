import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import Svg1 from "@site/static/img/undraw_docusaurus_mountain.svg";
import Svg2 from "@site/static/img/undraw_docusaurus_tree.svg";
import Svg3 from "@site/static/img/undraw_docusaurus_react.svg";

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link?: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: "閱讀分享",
    Svg: Svg1,
    description: (
      <>
        我訂閱了許多電子報，常常收到許多有趣的文章，我會將喜歡的技術文章整理成筆記分享給你。
      </>
    ),
  },
  {
    title: "學習筆記",
    Svg: Svg2,
    description: (
      <>
        我喜歡學習新的技術並整理成筆記，我會將我學習的過程分享給你，希望能幫助到你。
      </>
    ),
  },
  {
    title: "部落格",
    Svg: Svg3,
    description: (
      <>
        我會在這裡嘗試編寫一些原創文章，或者整理各種技術或概念，希望能和你互相交流。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem): JSX.Element {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
