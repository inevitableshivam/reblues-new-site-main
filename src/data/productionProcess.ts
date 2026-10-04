export type ProductionFormat = "motion" | "talking-head";

// Web-sized video copies are served locally so the page can use clean native players.
export const productionProcess = {
  project: "Mina AI / AI workforce for manufacturing",
  exampleLabel: "Project walkthrough · motion-led film",
  figmaEmbedUrl: "https://embed.figma.com/design/LEAtGs1i2kxlqd2xLMjRAg/Mina-AI-Final-Storyboard?node-id=1-7&embed-host=share",
  figmaPreviewUrl: "/process/storyboard/mina-final-storyboard.png",
  figmaUrl: "https://www.figma.com/design/LEAtGs1i2kxlqd2xLMjRAg/Mina-AI-Final-Storyboard?node-id=1-7",
  videoEmbeds: [
    { title: "Mina AI / Full film", fileUrl: "/process/videos/mina-full-film.mp4", posterUrl: "/process/videos/mina-full-poster.jpg", sourceUrl: "https://drive.google.com/file/d/1sRp7CL6gnhDeSgrhSfnMslOY4Pjryccv/view" },
    { title: "Mina AI / 30-second cut · V3", fileUrl: "/process/videos/mina-30-second-cut.mp4", posterUrl: "/process/videos/mina-cut-poster.jpg", sourceUrl: "https://drive.google.com/file/d/1C_gZRH7YyWQvNLMCJ2tMV9AkAo7dagIO/view" },
  ],
  finalVideoUrl: "",
  soundAudioUrl: "",
  formats: {
    motion: {
      label: "A · Motion-led",
      direction: "Mina AI: explore the concepts, scene-by-scene drafts and revised launch script.",
      scripts: [
        { name: "01 / Concepts & angles", angle: "", hook: "", body: "", ending: "", embedUrl: "https://docs.google.com/document/d/1_sVZkX9ZMJHmsy4-E0vh1Gsk1goHlA3SLZ81NUPp6QA/preview" },
        { name: "02 / Launch film drafts", angle: "", hook: "", body: "", ending: "", embedUrl: "https://docs.google.com/document/d/1YEoo6fSJvhX3Mjibwg831c7UgD8eRh2HkU1VtKcgbWs/preview" },
        { name: "03 / Revised launch script", angle: "", hook: "", body: "", ending: "", embedUrl: "https://docs.google.com/document/d/1lYVXvPJ7JsrxKQQ63AcFeqt84dtMf7FAir1PPJqyl2E/preview" },
      ],
      scenes: ["The scattered workflow", "A single, clear workspace", "The useful product moment", "The outcome + next step"],
      production: ["UI & design assets", "Key poses & timing", "Animation & transitions", "Sound & final mix"],
    },
    "talking-head": {
      label: "B · Talking head example",
      direction: "Illustrative format only—not a Mina AI deliverable. A person leads the narrative; motion makes key points visible.",
      scripts: [
        { name: "01 / Founder story", angle: "Start with a lived problem", hook: "We kept asking a simple question: why does a small task need so many handoffs?", body: "That question became Atlas. We wanted a workspace where context stays with the work, so teams can spend their time making progress.", ending: "Here’s what we’re building next.", embedUrl: "" },
        { name: "02 / Guided demo", angle: "Teach through one workflow", hook: "Let me show you how we take a request from first message to finished work.", body: "Start with the request. Add the context, assign the next step, and keep everyone in the same flow. Here’s the part that saves the back-and-forth.", ending: "Try it with your next request.", embedUrl: "" },
        { name: "03 / Announcement", angle: "Give the news a human voice", hook: "Today marks the next chapter for Atlas.", body: "This milestone helps us build on what our customers have taught us: clear work needs clear context. We’re investing in the workflows that make that possible.", ending: "Thank you for being part of the journey.", embedUrl: "" },
      ],
      scenes: ["The speaker’s opening", "Supporting product footage", "Motion callouts & proof", "The speaker’s closing"],
      production: ["Supplied footage", "Story edit & pacing", "Motion & captions", "Sound & final mix"],
    },
  },
  voices: [
    { name: "Leo", type: "The energetic explainer", age: "Middle-aged", voice: "Male", language: "English", accent: "Not specified", delivery: "Upbeat and animated", fit: "Tutorials and explainers", description: "Clear, articulate and naturally enthusiastic, with a contemporary, approachable edge.", audioUrl: "/process/voices/leo.mp3" },
    { name: "Miles", type: "The poised narrator", age: "24 / young adult", voice: "Male", language: "English", accent: "American", delivery: "Confident and steady", fit: "Dynamic narration", description: "A smooth mid-range voice with energy and subtle charisma, without sounding forceful.", audioUrl: "/process/voices/miles.mp3" },
    { name: "Maya", type: "The thoughtful guide", age: "Middle-aged", voice: "Female", language: "English", accent: "Indian", delivery: "Calm and deliberate", fit: "Reflective tutorials and explainers", description: "Warm and grounded, with a slower pace that gives each idea room to land.", audioUrl: "/process/voices/maya.mp3" },
  ],
};
