import ServiceDetailPage, { ServicePageContent } from "@/components/ServiceDetailPage";

const content: ServicePageContent = {
  eyebrow: "Ad Campaigns",
  title: "Motion ads for SaaS teams that need more than one",
  accent: "creative angle.",
  introduction: "We turn product value, buyer pain and campaign ideas into motion-led ads designed for LinkedIn, Meta and YouTube testing.",
  adCampaignArtwork: true,
  ctaEyebrow: "Planning a paid campaign?",
  ctaHeadline: "Build ads people understand before they scroll.",
  ctaButtonLabel: "Plan an ad campaign",
  adCampaignOverview: {
    title: "One campaign idea should create more than one ad.",
    description: "Strong SaaS ad creative needs a clear audience, a sharp message and enough purposeful variation to learn what earns attention. We develop the creative system and deliver platform-ready motion assets; media buying stays with your team or performance partner.",
    formats: [
      {
        label: "Product-led",
        title: "Motion Product Ads",
        description: "Short UI-led ads that show the useful moment quickly and connect a product workflow to a buyer outcome.",
        deliverables: ["15–30 second masters", "UI and motion design", "1:1, 4:5, 9:16 and 16:9"],
      },
      {
        label: "Concept-led",
        title: "Pain & Point-of-View Ads",
        description: "Narrative ads built around the problem, belief or category tension your audience already recognises.",
        deliverables: ["Hooks and scripts", "Visual concept system", "LinkedIn, Meta and YouTube cuts"],
      },
      {
        label: "Iteration-led",
        title: "Creative Variant Packs",
        description: "New openings, messages and cutdowns built from a campaign system so your team can test without starting over.",
        deliverables: ["Hook and CTA variants", "Length and ratio cutdowns", "Organised testing matrix"],
      },
    ],
  },
  processTitle: "A repeatable path from brief to test-ready creative.",
  steps: [
    { title: "Audience & campaign brief", description: "We define the ICP, buying stage, channel, offer and action the ad needs to create before choosing a visual direction." },
    { title: "Angles, hooks & scripts", description: "We develop distinct message angles and opening hooks, then shape the strongest options into concise scripts." },
    { title: "Design & motion production", description: "We build an on-brand motion system, animate the product or concept, and finish each ad with sound, captions and pacing." },
    { title: "Variants & channel rollout", description: "We prepare the required ratios, cutdowns, hooks and CTAs so each concept can be tested across the campaign mix." },
  ],
};

const AdCampaigns = () => <ServiceDetailPage content={content} />;

export default AdCampaigns;

