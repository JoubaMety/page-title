import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import { pathToRoot } from "../util/path";
import { i18n } from "../i18n";

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const locale = cfg?.locale ?? "en-US";
  const title = cfg?.pageTitle ?? i18n(locale).propertyDefaults.title;
  const baseDir = pathToRoot(fileData.slug as string);
  const avatar = "/static/icon.webp";
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={avatar} alt="JoubaMety's Notes Icon"></img>
        {title}
      </a>
    </h2>
  );
};

PageTitle.css = `
.page-title a {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.page-title a img {
  height: 3rem;
}
`;

export default (() => PageTitle) satisfies QuartzComponentConstructor;
