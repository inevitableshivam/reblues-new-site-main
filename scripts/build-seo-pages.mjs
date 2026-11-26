import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";

const dist = new URL("../dist/", import.meta.url);
const template = readFileSync(new URL("index.html", dist), "utf8");
const site = "https://www.rebluesmedia.com";
const assets = readdirSync(new URL("assets/", dist));
const routes = {
  "": "Index",
  "launch-films": "LaunchFilms",
  "product-education": "ProductEducation",
  "ad-campaigns": "AdCampaigns",
  portfolio: "Portfolio",
  process: "Process",
  cases: "Cases",
  blog: "Blog",
};

// react-pdf reads DOMMatrix while its module loads, even though the closed case
// study viewer does not use it during server rendering.
globalThis.DOMMatrix ??= class DOMMatrix {};
const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false },
  optimizeDeps: { noDiscovery: true },
});

function productionAssetPaths(html) {
  return html.replace(/(["'])\/src\/assets\/([^"']+)\1/g, (match, quote, source) => {
    const dot = source.lastIndexOf(".");
    const base = source.slice(0, dot);
    const ext = source.slice(dot);
    const built = assets.find((asset) => asset.startsWith(`${base}-`) && asset.endsWith(ext));
    if (!built) throw new Error(`No production asset for ${source}`);
    return `${quote}/assets/${built}${quote}`;
  });
}

async function renderRoute(slug) {
  const moduleName = routes[slug] ?? "BlogPost";
  const path = slug.startsWith("blog/") ? "/blog/:slug" : `/${slug}`;
  const location = `/${slug}`;
  const { default: Page } = await vite.ssrLoadModule(`/src/pages/${moduleName}.tsx`);
  const markup = renderToString(createElement(
    StaticRouter, { location },
    createElement(Routes, null, createElement(Route, {
      path,
      element: createElement(Page),
    })),
  ));
  if (!/<h1\b/i.test(markup)) throw new Error(`Missing heading for ${location}`);
  return productionAssetPaths(markup);
}
const pages = [
  ["launch-films", "Launch Films for Software Companies | Reblues", "Launch films and funding announcement videos for software companies. Reblues handles strategy, scripting, animation and launch support for X and LinkedIn."],
  ["product-education", "Product Education Videos for SaaS | Reblues", "Help users reach value faster with product tutorials, onboarding videos and role-specific education. Explore Reblues’ product education process."],
  ["ad-campaigns", "Motion Graphics Ads for SaaS | Reblues", "Motion graphics ads for software companies, from audience strategy and scripts to animated creative, cutdowns and channel-ready variations."],
  ["portfolio", "Video Portfolio for Software Companies | Reblues", "Explore Reblues’ launch films, product demos, brand stories and animated explainers for software companies."],
  ["process", "Our Video Production Process | Reblues", "Follow a video project from scripting and voice direction through storyboard, animation and delivery. See how Reblues produces software videos."],
  ["cases", "Video Case Studies | Reblues", "Read Reblues case studies for 10x, Mina AI and Genlook, including launch films, brand identity and campaign assets."],
  ["blog", "Blog: Software Video Production | Reblues", "Practical notes on launch films, product education and video production for software companies."],
  ["blog/how-to-plan-a-product-education-library", "How to Plan a Product Education Video Library | Reblues", "Plan useful product tutorials around user goals, role-specific workflows and a library you can maintain as the software changes."],
  ["blog/what-a-good-launch-film-needs", "How to Make a Software Launch Film | Reblues", "A practical framework for turning a complicated software product into one clear launch story."],
  ["blog/launch-film-vs-product-demo", "Launch Film vs Product Demo for SaaS | Reblues", "Learn when software companies should use a launch film, product demo or tutorial, and how the videos work together."],
  ["blog/what-goes-into-a-software-video-storyboard", "Software Video Storyboard: What to Review | Reblues", "See what a software video storyboard should explain before animation begins: narrative, product actions, timing and review decisions."],
];

for (const [slug, title, description] of pages) {
  const url = `${site}/${slug}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?\s*>)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?\s*>)/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?\s*>)/, `$1${title}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/?\s*>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace('<div id="root"></div>', `<div id="root">${await renderRoute(slug)}</div>`);
  if (slug.startsWith("blog/") && slug !== "blog/") {
    const source = readFileSync(new URL(`../src/content/blog/${slug.slice(5)}.md`, import.meta.url), "utf8");
    const published = source.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title.replace(/ \| Reblues$/, ""),
      description,
      mainEntityOfPage: url,
      ...(published ? { datePublished: published } : {}),
      author: { "@type": "Organization", name: "Reblues" },
      publisher: { "@type": "Organization", name: "Reblues", url: site },
    };
    html = html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(schema)}</script></head>`);
  }
  const directory = new URL(`${slug}/`, dist);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL("index.html", directory), html);
}

writeFileSync(new URL("index.html", dist), template.replace(
  '<div id="root"></div>',
  `<div id="root">${await renderRoute("")}</div>`,
));
await vite.close();

const urls = [site + "/", ...pages.map(([slug]) => `${site}/${slug}`)];
writeFileSync(new URL("sitemap.xml", dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`);
