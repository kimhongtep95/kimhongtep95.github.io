const portfolioData = {
  profile: {
    repoCount: 5,
    signalTags: [
      "Python",
      "FastAPI",
      "Django",
      "React.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "AWS",
      "Azure",
      "OpenAI GPT-4",
      "LangChain",
      "ChromaDB",
    ],
  },
  projects: [
    {
      category: "Bug Tracking Platform",
      title: "SearchBugs",
      summary:
        "A bug tracking and project management platform designed with clean architecture, CQRS, and a React dashboard experience for engineering teams.",
      highlights: [
        "FastAPI backend with layered domain boundaries",
        "JWT auth, email verification, and password reset flows",
        "Live statistics, issue workflows, and role-aware project access",
      ],
      stack: ["FastAPI", "React", "SQLAlchemy", "PostgreSQL", "Redis", "CQRS"],
      repoUrl: "https://github.com/kimhongtep95/SearchBugs-Bug-Tracking-Project-Management",
    },
    {
      category: "Commerce Systems",
      title: "E-Commerce & Inventory Platform",
      summary:
        "A multi-tenant commerce system built for inventory flow, stock synchronization, and operational scale with modern cloud delivery practices.",
      highlights: [
        "Event-driven stock updates using Kafka",
        "Redis caching for high-read catalog paths",
        "Azure deployment with CI/CD and auto-scaling",
      ],
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "Kafka", "Azure"],
      repoUrl: "https://github.com/kimhongtep95/E-Commerce-Inventory-Platform",
    },
    {
      category: "Operations Tooling",
      title: "Location & Agent Management System",
      summary:
        "An internal operations tool that replaces spreadsheet-heavy workflows with map-driven search, secure documents, and real-distance matching.",
      highlights: [
        "Google Maps integration for agent proximity search",
        "Azure Blob Storage for secure document handling",
        "React interface backed by Python APIs and PostgreSQL",
      ],
      stack: ["Python", "React", "Google Maps API", "PostgreSQL", "Azure Blob Storage"],
      repoUrl: "https://github.com/kimhongtep95/Location-Agent-Management-System",
    },
    {
      category: "Media Platform",
      title: "News & Media Publishing Platform",
      summary:
        "A high-traffic publishing platform built for SEO, fast startup, and editorial operations with server-side rendering and performance tuning.",
      highlights: [
        "SSR architecture for search visibility",
        "Code splitting and lazy loading for faster startup",
        "Django, React, Node.js, and PostgreSQL delivery stack",
      ],
      stack: ["Django", "React", "Node.js", "PostgreSQL", "Webpack", "SSR"],
      repoUrl: "https://github.com/kimhongtep95/News-Media-Publishing-Platform",
    },
  ],
  experience: [
    {
      company: "Simpaz",
      role: "Senior Full-Stack & AI Software Engineer",
      period: "Apr 2024 - Present",
      location: "Los Angeles, CA",
      bullets: [
        "Built a production AI customer support chatbot with Python, LangChain, OpenAI GPT-4, and a ChromaDB-backed RAG pipeline.",
        "Delivered a multi-tenant e-commerce and inventory platform using FastAPI, SQLAlchemy, PostgreSQL, Docker, and Azure.",
        "Improved delivery speed by 25% through stronger CI/CD automation and containerized workflows.",
      ],
    },
    {
      company: "PHVCT A2888",
      role: "Software Engineer",
      period: "Jun 2021 - Aug 2023",
      location: "Remote",
      bullets: [
        "Built authentication systems with FastAPI, JWT, OAuth2, and a responsive React frontend.",
        "Delivered a location management platform with Google Maps APIs and Azure-backed document storage.",
        "Reduced initial load time by more than 40% through Webpack optimization and lazy loading.",
      ],
    },
    {
      company: "PLAN-B",
      role: "Full-Stack Developer",
      period: "Jan 2019 - Jun 2021",
      location: "Remote",
      bullets: [
        "Built a news website with Django and React using server-side rendering for stronger SEO.",
        "Reduced SPA startup time by roughly 80% through code splitting and bundle optimization.",
        "Improved slow database queries by adding indexes and tuning stored procedures.",
      ],
    },
  ],
  skills: [
    {
      title: "Frontend Systems",
      summary: "Interfaces that stay responsive, readable, and maintainable as products grow.",
      items: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Angular"],
    },
    {
      title: "Backend Engineering",
      summary: "API and service design centered on clarity, security, and production readiness.",
      items: ["FastAPI", "Django", "Flask", "Node.js", "GraphQL", "WebSocket"],
    },
    {
      title: "Data & Infrastructure",
      summary: "Practical persistence, async workflows, and cloud patterns for reliable systems.",
      items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes"],
    },
    {
      title: "Security & Delivery",
      summary: "Operational habits that keep releases steady and access control sane.",
      items: ["OAuth2", "JWT", "RBAC", "GitHub Actions", "Azure DevOps", "AWS"],
    },
  ],
  education: [
    {
      label: "2025 - 2027",
      title: "M.S. in Computer Science, Artificial Intelligence Focus",
      description:
        "Westcliff University, California. Coursework includes machine learning, deep learning, big data, database systems, and AWS/DevOps.",
    },
    {
      label: "2015 - 2019",
      title: "B.S. in Computer Science & Engineering",
      description:
        "Royal University of Phnom Penh, Cambodia. Strong foundation in algorithms, OOP, databases, software engineering, and networks.",
    },
  ],
  certifications: [
    {
      label: "2026",
      title: "AI Fluency: Framework & Foundations",
      description: "Anthropic Academy",
    },
    {
      label: "Current",
      title: "Google AI Essentials + Generative AI Fundamentals",
      description: "Google and Google Cloud",
    },
    {
      label: "Current",
      title: "ChatGPT Prompt Engineering for Developers",
      description: "DeepLearning.AI / OpenAI",
    },
    {
      label: "Current",
      title: "AWS Cloud Technical Essentials",
      description: "Amazon Web Services",
    },
  ],
};

function renderSignalTags() {
  const container = document.getElementById("signal-tags");
  if (!container) return;

  container.innerHTML = portfolioData.profile.signalTags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article>
          <div class="project-topline">
            <span>${project.category}</span>
            <a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">View Repo</a>
          </div>
          <div class="project-copy">
            <h3 class="project-title">${project.title}</h3>
            <p>${project.summary}</p>
          </div>
          <div class="chip-row">
            ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
          <ul>
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = portfolioData.experience
    .map(
      (job) => `
        <article>
          <div class="timeline-topline">
            <span>${job.period}</span>
            <span>${job.location}</span>
          </div>
          <h3>${job.role}</h3>
          <div class="timeline-meta">${job.company}</div>
          <ul>
            ${job.bullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = portfolioData.skills
    .map(
      (group) => `
        <article>
          <span>${group.title}</span>
          <h3>${group.title}</h3>
          <p>${group.summary}</p>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderEducation() {
  const container = document.getElementById("education-list");
  if (!container) return;

  container.innerHTML = portfolioData.education
    .map(
      (item) => `
        <article class="stack-item">
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderCertificates() {
  const container = document.getElementById("certificate-list");
  if (!container) return;

  container.innerHTML = portfolioData.certifications
    .map(
      (item) => `
        <article class="certificate-item">
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function wireCopyEmail() {
  const button = document.querySelector("[data-copy-email]");
  if (!(button instanceof HTMLButtonElement)) return;

  button.addEventListener("click", async () => {
    const originalText = button.textContent;

    try {
      await navigator.clipboard.writeText("kimhong.tep95@gmail.com");
      button.textContent = "Email Copied";
    } catch (error) {
      button.textContent = "Copy Failed";
      console.error(error);
    }

    window.setTimeout(() => {
      button.textContent = originalText || "Copy Email";
    }, 1800);
  });
}

function wireRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    },
  );

  elements.forEach((element) => observer.observe(element));
}

function setFooterContent() {
  const repoCount = document.getElementById("repo-count");
  const footer = document.getElementById("last-updated");

  if (repoCount) {
    repoCount.textContent = String(portfolioData.profile.repoCount);
  }

  if (footer) {
    footer.textContent = `Updated ${new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  }
}

renderSignalTags();
renderProjects();
renderExperience();
renderSkills();
renderEducation();
renderCertificates();
wireCopyEmail();
wireRevealAnimation();
setFooterContent();
