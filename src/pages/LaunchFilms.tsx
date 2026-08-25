import ServiceDetailPage, { ServicePageContent } from "@/components/ServiceDetailPage";

const content: ServicePageContent = {
  eyebrow: "Launch Films",
  title: "Launch campaigns for ambitious SaaS companies,",
  accent: "led by video.",
  introduction: "We develop the idea, write the script, produce the video and help prepare the campaign around it for X and LinkedIn.",
  launchArtwork: true,
  ctaEyebrow: "Planning a launch?",
  ctaHeadline: "Give your product a launch people understand.",
  ctaButtonLabel: "Plan your launch",
  processTitle: "A reliable process from discovery to rollout.",
  steps: [
    { title: "Discovery sprint", description: "We get inside your product, positioning and audience to understand the value drivers, objections and launch moment the story must address." },
    { title: "Script & storyboard", description: "We explore hooks and narrative directions, write the script, then map each beat visually so the story is resolved before design begins." },
    { title: "Design & animation", description: "We translate your design system into a clear visual language, simplify product UI where needed, and bring it together with motion, sound and voice." },
    { title: "Launch & funnel rollout", description: "We prepare platform-ready versions, launch copy and timing for X and LinkedIn, then help place the video across your website, sales and wider funnel." },
  ],
  caseStudies: [
    { company: "Median", url: "https://x.com/albysjourney/status/2048809398076919849", engagement: "641+ likes on X" },
    { company: "10X", url: "https://x.com/EvanYadegari/status/2053965603447173585", engagement: "684+ likes on X" },
    { company: "10X Web", url: "https://x.com/EvanYadegari/status/2087193758433526027?s=20", engagement: "250+ likes on X" },
  ],
};

const LaunchFilms = () => <ServiceDetailPage content={content} />;

export default LaunchFilms;
