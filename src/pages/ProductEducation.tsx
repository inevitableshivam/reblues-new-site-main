import ServiceDetailPage, { ServicePageContent } from "@/components/ServiceDetailPage";

const content: ServicePageContent = {
  eyebrow: "Product Education",
  title: "Turn new users into confident",
  accent: "power users.",
  introduction: "Build a product education system that explains every important capability and shows each audience how it creates value in their work.",
  productEducationArtwork: true,
  ctaEyebrow: "Building product education?",
  ctaHeadline: "Help every user reach value faster.",
  ctaButtonLabel: "Build your education system",
  educationOverview: {
    title: "Users hit a wall before they reach value.",
    description: "Complex products lose good users when the path from signup to first success is unclear. A focused tutorial library helps people understand the product, experience value sooner and keep moving without waiting for support.",
    bestFor: [
      "Complete product academies",
      "Audience-specific workflow tutorials",
      "Onboarding, adoption and self-serve education",
    ],
    journey: ["Sign up", "Understand the workflow", "Reach first value", "Become a power user"],
  },
  educationFormats: [
    {
      label: "Structured learning",
      title: "Product Academy",
      description: "A concise, feature-by-feature learning system that takes users from first login to confident use without asking your team to repeat the same explanation.",
      format: "6–12 focused lessons",
      bestFor: "Onboarding and full-product education",
      bullets: ["Feature and workflow lessons", "In-product or help-centre delivery", "One consistent learning system", "Reusable across customer success"],
    },
    {
      label: "Value by audience",
      title: "ICP Tutorial Library",
      description: "Deeper workflow tutorials for the different people your product serves. Each video shows how the same software creates a distinct outcome for a specific role, team or industry.",
      format: "4–12 workflow deep dives",
      bestFor: "Multi-ICP, AI and complex SaaS products",
      bullets: ["End-to-end use cases", "Role and industry-specific stories", "Searchable, evergreen education", "One clear path to value per ICP"],
      audiences: ["Finance", "Marketing", "Operations"],
    },
  ],
  educationWork: {
    client: "Pillir",
    logoSrc: "/logos/pillir.png",
    title: "A product video library for Pillir.",
    description: "We produced 6 videos for Pillir: four SAP workflow tutorials, a product launch film and a campaign video. Each tutorial shows Claude doing one real SAP task through Pillir, from prompt to finished report.",
    caseStudyHref: "/cases",
    caseStudy: {
      title: "6 videos for Pillir's product library.",
      subtitle: "Four workflow tutorials, a launch film and a campaign video for an AI execution platform on SAP.",
      cover: "/cases/pillir-case-study-cover.jpg",
      pdf: "/cases/pillir-case-study.pdf",
      tags: ["Product education", "Workflow tutorials", "Launch film"],
    },
    videos: [],
    quote: {
      text: "The quality of work was outstanding. Their team understood our product deeply and delivered beyond expectations.",
      name: "Vijay Raghavan",
      role: "Director of India Marketing & Operations, Pillir",
      img: "/testimonials/vijayraghvan.png",
    },
  },
  playbook: {
    title: "Product Education Playbook",
    description: "How we map your ICP, features and roadmap into a video library, the two ways we produce it, and where each video earns its keep.",
    cover: "/playbook/cover.jpg",
    pdf: "/playbook/reblues-product-education-playbook.pdf",
    points: [
      "The 5-step process, from ICP to finished library",
      "Academy, tutorials, how-tos, releases and changelogs",
      "Motion and UI reconstruction vs. on-camera shoots",
    ],
  },
  faqs: [
    { question: "What do you need from our team?", answer: "A walkthrough of the product, access to a demo or staging account, and one person who can review scripts and cuts. We handle the rest." },
    { question: "Does this work for complex or enterprise products?", answer: "Yes. That's where education matters most. Our Pillir library teaches AI agents running real SAP workflows, a long way from a simple signup flow." },
    { question: "Academy or ICP library: which do we need?", answer: "If users get lost learning the product, start with an Academy. If different buyers can't see what it does for them, start with an ICP library. Many teams end up with both." },
    { question: "Where do the videos live?", answer: "Wherever your users learn: onboarding, in-product tours, your help centre, YouTube, sales follow-ups and customer success. We deliver the formats each place needs." },
  ],
  processTitle: "A complete path from discovery to integration.",
  steps: [
    { title: "Discovery", description: "We learn your product, audience and onboarding goals, then identify where users hesitate, get confused or leave." },
    { title: "Value mapping & user journey", description: "We map the actions and aha moments that move each user group toward value, including the blockers between them." },
    { title: "Tutorial content plan", description: "We create a feature-by-feature learning roadmap, prioritising the lessons that help users solve real problems and progress." },
    { title: "Capture & production", description: "We script each lesson, capture the product clearly, and combine editing, motion and narration into a consistent tutorial system." },
    { title: "Integration", description: "We organise and place the finished library across onboarding, in-product guidance, help centres and customer-success workflows." },
  ],
  educationExamples: [
    { company: "Webflow", mark: "W", logoSrc: "/logos/education-webflow.svg", accent: "#146EF5", pattern: "Role-based learning paths", description: "Webflow University guides beginners through fundamentals while giving marketers, editors and advanced builders paths designed around their jobs." },
    { company: "HubSpot", mark: "H", logoSrc: "/logos/education-hubspot.svg", accent: "#FF5C35", pattern: "Goal-led academy", description: "HubSpot Academy organises learning around marketing, sales and service outcomes, helping different teams connect product skills to business goals." },
    { company: "Zapier", mark: "Z", logoSrc: "/logos/education-zapier.svg", accent: "#FF4F00", pattern: "Workflow-first tutorials", description: "Zapier pairs foundations with templates and end-to-end workflow education, so users learn through the automation they want to build." },
  ],
};

const ProductEducation = () => <ServiceDetailPage content={content} />;

export default ProductEducation;
