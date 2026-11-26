import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const template = readFileSync(new URL("index.html", dist), "utf8");
const site = "https://www.rebluesmedia.com";
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
];

for (const [slug, title, description] of pages) {
  const url = `${site}/${slug}`;
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?\s*>)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?\s*>)/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?\s*>)/, `$1${title}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/?\s*>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`);
  const directory = new URL(`${slug}/`, dist);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL("index.html", directory), html);
}

const urls = [site + "/", ...pages.map(([slug]) => `${site}/${slug}`)];
writeFileSync(new URL("sitemap.xml", dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`);
