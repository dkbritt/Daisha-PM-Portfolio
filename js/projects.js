const cards = document.querySelectorAll('.project-card');
const modal = document.querySelector('.project-modal');
const title = document.getElementById('modal-title');
const modalImg = document.querySelector('.modal-img');
const overview = document.getElementById('modal-overview');
const linksContainer = document.getElementById('modal-links');
const role = document.getElementById('modal-role');
const tech = document.getElementById('modal-techstack');
const description = document.getElementById('modal-descr');
const takeaway = document.getElementById('modal-takeaway');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.project;
    const project = projectData[id];
    linksContainer.innerHTML = "";

    if (project) {
      title.textContent = project.title || "";
      overview.textContent = project.overview || "";
      role.textContent = project.role || "";
      tech.textContent = project.tech || "";
      description.textContent = project.description || "";
      takeaway.textContent = project.takeaway || "";

      // Handle media
      if (project.media && project.media.type === 'image') {
        modalImg.src = project.media.src;
        modalImg.alt = project.title;
        modalImg.style.display = 'block';
        if (modalImg.nextElementSibling && modalImg.nextElementSibling.tagName === 'VIDEO') {
          modalImg.nextElementSibling.remove();
        }
      } else if (project.media && project.media.type === 'video') {
        modalImg.style.display = 'none';
        if (modalImg.nextElementSibling && modalImg.nextElementSibling.tagName === 'VIDEO') {
          modalImg.nextElementSibling.remove();
        }
        const video = document.createElement('video');
        video.src = project.media.src;
        video.controls = true;
        // video.style.width = '100%';
        video.className = project.media.className;
        modalImg.parentNode.insertBefore(video, modalImg.nextSibling);
      } else {
        modalImg.style.display = 'none';
        if (modalImg.nextElementSibling && modalImg.nextElementSibling.tagName === 'VIDEO') {
          modalImg.nextElementSibling.remove();
        }
      }

      // Handle links
      if (project.links && project.links.length > 0) {
        linksContainer.style.display = 'block';
        project.links.forEach((link, idx) => {
          const a = document.createElement('a');
          a.href = link.url;
          a.textContent = link.label;
          a.target = '_blank';
          a.rel = 'noopener';
          linksContainer.appendChild(a);
          if (idx < project.links.length - 1) {
            linksContainer.appendChild(document.createElement('br'));
          }
        });
      } else {
        linksContainer.style.display = 'none';
      }

      // Show modal
      modal.classList.remove('hidden');
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});


  // For images use --> media: { type: "image", src: "imgs/pc.jpg" },
  // For videos use --> media: { type: "video", src: "media/demo.mp4" },
  //                    ...other fields...

const projectData = {
  1: {
    title: "Minimalistic Reddit Clone",
    media: { type: "video", src: "./imgs/RedditLurker.mp4", className:"reddit-demo-video" },
    overview: "A simplified full-stack clone of Reddit, built as part of my full-stack certification course to sharpen my frontend-to-backend integration skills.",
    links: [
      { url: "https://github.com/dkbritt/My-Reddit-Client", label: "🔗GitHub Repo\n" },
      { url: "https://myredditlurker.netlify.app/", label: "🔗Live Site" }
    ],
    role: "Full-Stack Developer — designed and implemented end-to-end functionality including user authentication, post submission, and voting logic.",
    tech: "React · Redux · Node.js · Express · CSS Modules",
    description: "Through this project, I honed my ability to scope features down to an MVP, focusing on the most essential user actions like posting, voting, and logging in. I worked through frontend state management and backend setup simultaneously, building responsive components while balancing tradeoffs between functionality and polish. It gave me a strong foundation in how real users move through basic social platforms—and how technical decisions shape that flow",
    takeaway: "This taught me how to narrow in on core user actions and reduce complexity early—an essential PM skill when defining a first build."
  },
  2: {
    title: "CorkCount",
    media: { type: "video", src: "./imgs/CorkCount_demo_official.mp4", className:"cork-demo-video"},
    overview: "Building a simple website and ordering system for my father-in-law’s wine-sharing hobby—helping him distribute bottles to family and friends.",
    links: [
      { url: "https://www.notion.so/KB-Winery-248626cf6e0480b0bfbbd511a1edc203?source=copy_link", label: "🔗Follow Along on Notion\n" },
      {url: "https://github.com/dkbritt/CorkCount", label: "🔗Github Repo\n"},
    ],
    role: "Product Manager & Developer — leading the UX, wireframing, and feature planning through interviews and collaborative iteration.",
    tech: "Builder.io · Figma · Notion",
    description: "This project is giving me hands-on experience designing around a real stakeholder with specific goals and limitations. From early conversations, I’ve mapped a lightweight system that mirrors his offline habits and priorities, while translating them into digital flows. It’s a great exercise in building user empathy, prototyping early, and deciding what “just enough” looks like for launch.",
    takeaway: "This project blends stakeholder alignment with user-first thinking. It's a sandbox for practicing roadmap shaping, versioning, and feedback loops."
  },
  3: {
    title: "PingMe.Sis (IN PROGRESS)",
    media: { type: "image", src: "./imgs/tiktok.jpg" },
    overview: "Launching an educational IG & TikTok channel focused on tech, coding tips, and encouragement for Black women and underrepresented communities in STEM.",
    role: "Founder, Product Manager — scripting, filming, and experimenting with platform-native formats and inclusive storytelling.",
    tech: "Canva · CapCut · Figma · Notion · Later",
    description: "By treating content creation like product delivery, I’m experimenting with audience-driven strategy, accessible messaging, and platform-native storytelling. Each post is a mini product: scoped, tailored to my target users, and designed to deliver value. I’m also testing feedback loops through analytics to refine what resonates—blending creative intuition with iterative thinking.",
    takeaway: "This is product thinking in the wild—discovering your audience, shaping value delivery, and iterating based on real feedback."
  },
  4: {
    title: "Local Food Discovery App",
    media: { type: "image", src: "./imgs/food.jpg" },
    overview: "A mood-first take on food discovery—this concept helps users find local eats based on cravings, vibes, or spontaneous moments (think “comfort food on a rainy day” or “low-effort lunch after errands”). A playful rethink of traditional filters that centers how people *feel*, not just what they want to eat.",
    role: "Concept creator and future designer/dev. Planning to lead user interviews and prototype playful filtering systems built around emotion and context.",
    tech: "HTML · CSS · JavaScript · lightweight backend (possibly Firebase) · Optional stretch goal: location + mood API pairing",
    description: "- Builds empathy into search experience design. Encourages intuitive interaction patterns like tapping moods or dragging cravings. Great experiment in scoping content curation, tag logic, and inclusive UX writing",
    takeaway: "TBD"
  },
  5: {
    title: "PlanDemic: A Group Trip Planner",
    media: { type: "image", src: "./imgs/travel.jpg" },
    overview: "Born from lived chaos: this tool is a lightweight trip planning app for families juggling dates, to-dos, and packing lists. Think shared timelines, who’s bringing what, and maybe… a gentle emoji-based mood tracker.",
    role: "Product Manager and everything—from planning the MVP feature list to designing the UI and user flow. Drawing inspiration from real family travel friction + my own PM toolkit.",
    tech: "React · Firebase or Supabase · Framer Motion for UI polish",
    description: "Built around a real user persona (my fam!). Prioritizing simplicity, shareability, and mobile-first UX. Opportunity to explore collaborative flows, notifications, and value per feature",
    takeaway: "TBD"
  },
  6: {
    title: "Micro-Case Blog: PM in Progress",
    media: { type: "image", src: "./imgs/blog.jpg" },
    overview: "A living journal of product thinking—this blog explores what I’m learning, noticing, and questioning as I transition into product. From UI critiques to roadmap reflections, each post breaks down a small moment in tech with curiosity and care.",
    links: [
      { url: "https://www.notion.so/246626cf6e048079a0cad4a48bece0a1?v=246626cf6e048055b324000c37e25a5b&source=copy_link", label: "🔗Follow Along on Notion\n" },
    ],
    role: "Writer, researcher, and UX observer-in-chief. I’ll be analyzing apps, games, and everyday workflows through a product lens, with a focus on inclusion and intuition.",
    tech: "Markdown-based blog hosted on Notion, light CSS styling, later migration to a CMS.",
    description: "Demonstrates my ability to articulate product trade-offs. Shows how I apply my technical and human-centered background to real-world flows. A great way to build thought leadership while continuing to learn in public.",
    takeaway: "TBD"
  }
}

// blank project detail:
// 7: {
//     title: "",
//     media: { type: "", src: "" },
//     overview: "",
//     role: "",
//     tech: "",
//     description: "",
//     takeaway: ""
//   }