import React, { useMemo } from "react";
import styles from "./ArticleProfile.module.css";

type Category = "react/next" | "js/ts" | "html/css" | "other";

export interface ArticleProfileProps {
  title: string;
  url: string;
  author: string;
  level: "beginner" | "intermediate" | "advanced";
  category: Category | Category[];
}

export const ArticleProfile = ({
  title,
  url,
  author,
  level,
  category,
}: ArticleProfileProps): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "start",
        textAlign: "start",
        padding: "1.5rem 0",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles["gradient-text"]}
      >
        {title}
      </a>
      <p
        style={{
          fontWeight: 600,
          margin: 0,
          color: "gray",
          fontSize: "1.5rem",
          fontFamily: "monospace",
        }}
      >
        {author}
      </p>
      <div
        style={{
          padding: "0.6rem 0",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <LevelBadge level={level} />
        <p
          style={{
            margin: 0,
            fontWeight: 900,
            fontSize: 19,
            verticalAlign: "middle",
          }}
        >
          /
        </p>
        <CategoryBadge category={category} />
      </div>
    </div>
  );
};

const Badge = ({
  children,
  color,
  style,
}: {
  children: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
}): JSX.Element => {
  return (
    <div
      style={{
        userSelect: "none",
        padding: "0.2rem 0.5rem",
        background: color,
        fontWeight: 700,
        color: "white",
        fontFamily: "Archivo Black, sans-serif",
        letterSpacing: "0.05rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const LevelBadge = ({
  level,
}: {
  level: "beginner" | "intermediate" | "advanced";
}): JSX.Element => {
  const colors = useMemo(
    () => ({
      beginner: "#8b9862",
      intermediate: "#f18f43",
      advanced: "#ca4246",
    }),
    []
  );
  return (
    <Badge color={colors[level]}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </Badge>
  );
};

const CategoryBadge = ({
  category,
}: {
  category: Category | Category[];
}): JSX.Element => {
  const colors = useMemo(
    () => ({
      "react/next": "#476098",
      "js/ts": "#89632a",
      "html/css": "#ca4246",
      other: "#a7489b",
    }),
    []
  );

  const text = useMemo(
    () => ({
      "react/next": "React / Next",
      "js/ts": "JavaScript / TypeScript",
      "html/css": "HTML / CSS",
      other: "Other",
    }),
    []
  );

  const categories = useMemo(() => {
    return Array.isArray(category) ? category : [category];
  }, [category]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.2rem",
      }}
    >
      {categories.map((category) => (
        <Badge color={colors[category]} key={category}>
          {text[category]}
        </Badge>
      ))}
    </div>
  );
};
