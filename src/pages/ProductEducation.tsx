import ServiceDetailPage, { ServicePageContent } from "@/components/ServiceDetailPage";

const content: ServicePageContent = {
  eyebrow: "Product Education",
  title: "Turn new users into confident",
  accent: "power users.",
  introduction: "Build a structured product academy that explains every important capability, the problem it solves and how to use it successfully.",
  productEducationArtwork: true,
  ctaEyebrow: "Building product education?",
  ctaHeadline: "Help users reach value faster.",
  ctaButtonLabel: "Build your academy",
  educationOverview: {
    title: "Users hit a wall before they reach value.",
    description: "Complex products lose good users when the path from signup to first success is unclear. A focused tutorial library helps people understand the product, experience value sooner and keep moving without waiting for support.",
    bestFor: [
      "Full-product education",
      "From first login to confident use",
      "A reusable product-learning library",
    ],
    journey: ["Sign up", "Understand the workflow", "Reach first value", "Become a power user"],
  },
  processTitle: "A complete path from discovery to integration.",
  steps: [
    { title: "Discovery", description: "We learn your product, audience and onboarding goals, then identify where users hesitate, get confused or leave." },
    { title: "Value mapping & user journey", description: "We map the actions and aha moments that move each user group toward value, including the blockers between them." },
    { title: "Tutorial content plan", description: "We create a feature-by-feature learning roadmap, prioritising the lessons that help users solve real problems and progress." },
    { title: "Capture & production", description: "We script each lesson, capture the product clearly, and combine editing, motion and narration into a consistent tutorial system." },
    { title: "Integration", description: "We organise and place the finished library across onboarding, in-product guidance, help centres and customer-success workflows." },
  ],
};

const ProductEducation = () => <ServiceDetailPage content={content} />;

export default ProductEducation;
