import ServiceDetailPage, { ServicePageContent } from "@/components/ServiceDetailPage";
import fundingAnnouncementArtwork from "@/assets/funding-announcement-art.txt?raw";
import productLaunchArtwork from "@/assets/launch-product-film-art.txt?raw";

const content: ServicePageContent = {
  eyebrow: "Launch Films",
  title: "Launch campaigns for ambitious SaaS companies,",
  accent: "led by video.",
  introduction: "We develop the idea, write the script, produce the video and help prepare the campaign around it for X and LinkedIn.",
  launchArtwork: true,
  ctaEyebrow: "Planning a launch?",
  ctaHeadline: "Give your product a launch people understand.",
  ctaButtonLabel: "Plan your launch",
  launchFormats: [
    {
      label: "Product launch",
      title: "Product Launch Films",
      description: "Make a new product or feature easy to understand—and worth paying attention to.",
      outcome: "A clear, reusable story for launch day and beyond.",
      artwork: productLaunchArtwork,
      pointers: ["Launch narrative and hook", "Product-led motion design"],
    },
    {
      label: "Funding announcement",
      title: "Funding Announcement Films",
      description: "Turn a funding round into a story about the mission, the progress and what the company can build next.",
      outcome: "A shareable announcement with meaning beyond the round.",
      artwork: fundingAnnouncementArtwork,
      pointers: ["Milestone story and positioning", "Announcement-day assets"],
    },
  ],
  processTitle: "A reliable process from discovery to rollout.",
  steps: [
    { title: "Discovery sprint", description: "We get inside your product, positioning and audience to understand the value drivers, objections and launch moment the story must address." },
    { title: "Script & storyboard", description: "We explore hooks and narrative directions, write the script, then map each beat visually so the story is resolved before design begins." },
    { title: "Design & animation", description: "We translate your design system into a clear visual language, simplify product UI where needed, and bring it together with motion, sound and voice." },
    { title: "Launch & funnel rollout", description: "We prepare platform-ready versions, launch copy and timing for X and LinkedIn, then help place the video across your website, sales and wider funnel." },
  ],
  featuredLaunchVideos: [
    { title: "Opsvara — Product Video", youtubeId: "oNX-eAd3XgE" },
    { title: "Arqia — Product Video", youtubeId: "KJnGpIkucdg" },
    { title: "Pillir — Campaign Video", youtubeId: "cxLNAHH8-K0" },
  ],
  caseStudies: [
    { company: "Median", url: "https://x.com/albysjourney/status/2048809398076919849", videoSrc: "/videos/median-launch.mp4", views: "83.1K views" },
    { company: "10X", url: "https://x.com/EvanYadegari/status/2053965603447173585", videoSrc: "/videos/10x-launch.mp4", views: "198.4K views" },
    { company: "10X Web", url: "https://x.com/EvanYadegari/status/2087193758433526027", videoSrc: "/videos/10x-web-launch.mp4", views: "106.3K views" },
  ],
};

const LaunchFilms = () => <ServiceDetailPage content={content} />;

export default LaunchFilms;
