const cards = document.querySelectorAll('.project-card');
const modal = document.querySelector('.project-modal');
const title = document.getElementById('modal-title');
const overview = document.getElementById('modal-overview');
const role = document.getElementById('modal-role');
const tech = document.getElementById('modal-techstack');
const description = document.getElementById('modal-descr');
const takeaway = document.getElementById('modal-takeaway');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.project;
    const project = projectData[id];

    if (project) {
      title.textContent = project.title;
      overview.textContent = project.overview;
      role.textContent = project.role;
      tech.textContent = project.tech;
      description.textContent = project.description;
      takeaway.textContent = project.takeaway;
      modal.classList.remove('hidden'); 
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});


const projectData = {
  1: {
    title: "Minimalistic Reddit Clone",
    overview: "A simplified full-stack clone of Reddit, built as part of my full-stack certification course to sharpen my frontend-to-backend integration skills.",
    role: "Full-Stack Developer — designed and implemented end-to-end functionality including user authentication, post submission, and voting logic.",
    tech: "React · Redux · Node.js · Express · MongoDB · CSS Modules",
    description: "Through this project, I honed my ability to scope features down to an MVP, focusing on the most essential user actions like posting, voting, and logging in. I worked through frontend state management and backend setup simultaneously, building responsive components while balancing tradeoffs between functionality and polish. It gave me a strong foundation in how real users move through basic social platforms—and how technical decisions shape that flow",
    takeaway: "This taught me how to narrow in on core user actions and reduce complexity early—an essential PM skill when defining a first build."
  },
  2: {
    title: "Wine Ordering System (IN PROGRESS)",
    overview: "Building a simple website and ordering system for my father-in-law’s wine-sharing hobby—helping him distribute bottles to family and friends.",
    role: "Sole Designer & Developer — leading the UX, wireframing, and feature planning through interviews and collaborative iteration.",
    tech: "HTML · CSS · JavaScript · Google Sheets as backend MVP (switching to Firebase later)",
    description: "This project is giving me hands-on experience designing around a real stakeholder with specific goals and limitations. From early conversations, I’ve mapped a lightweight system that mirrors his offline habits and priorities, while translating them into digital flows. It’s a great exercise in building user empathy, prototyping early, and deciding what “just enough” looks like for launch.",
    takeaway: "This project blends stakeholder alignment with user-first thinking. It's a sandbox for practicing roadmap shaping, versioning, and feedback loops."
  },
  3: {
    title: "Tech Content Channel (COMING SOON)",
    overview: "Launching an educational IG & TikTok channel focused on tech, coding tips, and encouragement for Black women and underrepresented communities in STEM.",
    role: "Content Creator, Strategist, and Visual Designer — scripting, filming, and experimenting with platform-native formats and inclusive storytelling.",
    tech: "Canva · CapCut · Figma · Notion · Later",
    description: "By treating content creation like product delivery, I’m experimenting with audience-driven strategy, accessible messaging, and platform-native storytelling. Each post is a mini product: scoped, tailored to my target users, and designed to deliver value. I’m also testing feedback loops through analytics to refine what resonates—blending creative intuition with iterative thinking.",
    takeaway: "This is product thinking in the wild—discovering your audience, shaping value delivery, and iterating based on real feedback."
  },
  4: {
    title: "Local Food Discovery App",
    overview: "A mood-first take on food discovery—this concept helps users find local eats based on cravings, vibes, or spontaneous moments (think “comfort food on a rainy day” or “low-effort lunch after errands”). A playful rethink of traditional filters that centers how people *feel*, not just what they want to eat.",
    role: "Concept creator and future designer/dev. Planning to lead user interviews and prototype playful filtering systems built around emotion and context.",
    tech: "HTML · CSS · JavaScript · lightweight backend (possibly Firebase) · Optional stretch goal: location + mood API pairing",
    description: "- Builds empathy into search experience design. Encourages intuitive interaction patterns like tapping moods or dragging cravings. Great experiment in scoping content curation, tag logic, and inclusive UX writing",
    takeaway: "TBD"
  },
  5: {
    title: "Tiny Saas: Family Trip Planner",
    overview: "Born from lived chaos: this tool is a lightweight trip planning app for families juggling dates, to-dos, and packing lists. Think shared timelines, who’s bringing what, and maybe… a gentle emoji-based mood tracker (because everyone deserves a meltdown buffer).",
    role: "Everything—from planning the MVP feature list to designing the UI and user flow. Drawing inspiration from real family travel friction + my own PM toolkit.",
    tech: "React · Firebase or Supabase · Framer Motion for UI polish",
    description: "Built around a real user persona (my fam!). Prioritizing simplicity, shareability, and mobile-first UX. Opportunity to explore collaborative flows, notifications, and value per feature",
    takeaway: "TBD"
  },
  6: {
    title: "Micro-Case Blog: PM in Progress",
    overview: "A living journal of product thinking—this blog explores what I’m learning, noticing, and questioning as I transition into product. From UI critiques to roadmap reflections, each post breaks down a small moment in tech with curiosity and care.",
    role: "Writer, researcher, and UX observer-in-chief. I’ll be analyzing apps, games, and everyday workflows through a product lens, with a focus on inclusion and intuition.",
    tech: "Markdown-based blog (possibly hosted via GitHub Pages or Notion), light CSS styling, later migration to a CMS",
    description: "Demonstrates my ability to articulate product trade-offs. Shows how I apply my technical and human-centered background to real-world flows. A great way to build thought leadership while continuing to learn in public.",
    takeaway: "TBD"
  }
}

// blank project detail:
// 7: {
//     title: "",
//     overview: "",
//     role: "",
//     tech: "",
//     description: "",
//     takeaway: ""
//   }