import MDXComponents from "@theme-original/MDXComponents";
import { CaptionFigure } from "@site/src/components/caption-figure";
import { ArticleProfile } from "../components/article-profile";
import { Highlight } from "../components/highlight";
import { Divider } from "../components/divider";

export default {
  ...MDXComponents,
  fig: CaptionFigure,
  profile: ArticleProfile,
  highlight: Highlight,
  divider: Divider,
};
