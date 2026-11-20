const projectData = {
  polyp: {
    kicker: "ONGOING M.TECH RESEARCH · COMPUTER VISION",
    title: "Semi-Supervised Domain Adaptation for Polyp Segmentation",
    summary: "A semi-supervised segmentation pipeline designed to adapt a model trained on multi-center medical imagery to an unlabelled target domain, addressing the challenge of domain shift in medical image analysis.",
    stats: [{value:"PolypGen2021",label:"MULTI-CENTER DATASET"},{value:"Teacher–Student",label:"EMA FRAMEWORK"},{value:"Ongoing",label:"RESEARCH STATUS"}],
    sections: [
      ["WHAT WAS THE PROJECT?", "An M.Tech research project exploring semi-supervised domain adaptation for automated polyp segmentation across medical centers. The pipeline uses labelled source-domain data and unlabelled target-domain data."],
      ["WHY I WORKED ON IT", "Medical imaging data can vary across centers because of differences in devices, acquisition settings, and patient populations. A model that performs well in one domain may not generalize reliably to another. I wanted to investigate ways to improve adaptation without requiring extensive target-domain annotations."],
      ["OBJECTIVE", "Develop a domain-adaptation approach that makes use of unlabelled target-domain images while maintaining stable and useful segmentation predictions."],
      ["WHAT I IMPLEMENTED", "Built a teacher–student framework using exponential moving average (EMA). Designed temporal stability to weight pseudo-labels according to prediction consistency across training iterations. Engineered a composite loss incorporating Dynamic Cross-Entropy to address class imbalance."],
      ["SKILLS DEVELOPED", "Medical image segmentation, semi-supervised learning, domain adaptation, teacher–student training, EMA, pseudo-labeling, loss-function design, experimental evaluation, and PyTorch development."],
      ["OUTCOME & STATUS", "An implemented research pipeline using the PolypGen2021 multi-center dataset. The work is ongoing; final results, paper details, and publication status should be added when verified."],
      ["REAL-WORLD RELEVANCE", "Domain adaptation can help medical AI systems cope with variation between clinical sites. More robust segmentation could support research into computer-assisted polyp detection and analysis; clinical use would require extensive validation."]
    ],
    tech:["Python","PyTorch","PolypGen2021","Semi-Supervised Learning","Domain Adaptation","EMA","Pseudo-Labeling"],
    evidence:["GitHub repository","Research write-up","Training / evaluation screenshots","Technical documentation","Publication / paper"]
  },
  rag: {
    kicker: "GENERATIVE AI · RETRIEVAL-AUGMENTED GENERATION",
    title: "Job Description RAG Assistant",
    summary: "A retrieval-augmented career assistant that helps users understand job descriptions, compare a resume against role requirements, identify skill gaps, and generate tailored cover letters.",
    stats: [{value:"FAISS",label:"VECTOR DATABASE"},{value:"all-MiniLM-L6-v2",label:"EMBEDDING MODEL"},{value:"GPT-OSS 120B",label:"LLM VIA GROQ"}],
    sections: [
      ["WHAT WAS THE PROJECT?", "A RAG-based application that answers questions grounded in job-description content and supports practical career tasks such as resume–JD matching, skill-gap identification, and cover-letter drafting."],
      ["WHY I BUILT IT", "Job descriptions often contain dense, role-specific requirements. I wanted to build a tool that could retrieve relevant information from a JD and use it as context, rather than relying only on a model's general knowledge."],
      ["OBJECTIVE", "Create a workflow that can ingest job descriptions, retrieve semantically relevant passages for a user query, and generate context-aware responses for career-related tasks."],
      ["WHAT I IMPLEMENTED", "Built a pipeline to chunk job descriptions and create embeddings using all-MiniLM-L6-v2. Stored the vectors in FAISS and retrieved relevant chunks at query time. Passed retrieved context to GPT-OSS 120B through Groq to generate answers with a focus on reducing unsupported responses. Developed the application interface with Gradio."],
      ["SKILLS DEVELOPED", "RAG architecture, document chunking, embeddings, vector search, retrieval pipelines, prompt design, LLM integration, application prototyping, and grounding responses in retrieved context."],
      ["OUTCOME", "An end-to-end career assistant concept covering JD question answering, resume matching, skill-gap analysis, and tailored cover-letter generation. Add measured evaluation results if you have them."],
      ["REAL-WORLD RELEVANCE", "The workflow demonstrates how retrieval-grounded LLM applications can make unstructured hiring information easier to explore and help candidates understand role requirements. Outputs should be reviewed by the user, not treated as automated hiring decisions."]
    ],
    tech:["Python","LangChain","FAISS","Hugging Face Embeddings","all-MiniLM-L6-v2","Groq","GPT-OSS 120B","Gradio"],
    evidence:["GitHub repository","Live demo","Application screenshots","Architecture / RAG write-up","Technical documentation"]
  },
  trip: {
    kicker: "AGENTIC AI · FULL-STACK APPLICATION",
    title: "AI Trip Planner",
    summary: "An interactive trip-planning application that uses an agentic workflow to gather and reason over travel context such as weather, attractions, and currency exchange information.",
    stats: [{value:"LangGraph",label:"AGENT WORKFLOW"},{value:"FastAPI",label:"BACKEND API"},{value:"Streamlit",label:"USER INTERFACE"}],
    sections: [
      ["WHAT WAS THE PROJECT?", "An AI-powered trip planner with a Streamlit frontend and FastAPI backend. The backend executes a LangGraph workflow that uses external information sources to help assemble a personalized travel plan."],
      ["WHY I BUILT IT", "Travel planning involves multiple kinds of information that need to be considered together. I wanted to explore how an agentic workflow could coordinate different steps and data sources instead of relying on a single prompt."],
      ["OBJECTIVE", "Build an interactive system that fetches and analyzes relevant travel information, then presents a useful trip plan through a web interface."],
      ["WHAT I IMPLEMENTED", "Created a Streamlit frontend integrated with a FastAPI backend. Designed a LangGraph-based agentic workflow to fetch and analyze real-time weather, attractions, and currency exchange data. Connected the workflow output to the interactive UI."],
      ["SKILLS DEVELOPED", "Agentic workflow design, LangGraph, API integration, backend development, frontend-to-backend communication, orchestration, and building interactive AI applications."],
      ["OUTCOME", "An end-to-end trip-planning application combining a UI, API backend, and multi-step agent workflow. Add screenshots and a working demo when available."],
      ["REAL-WORLD RELEVANCE", "The project illustrates how AI workflows can coordinate changing information from multiple sources to support planning tasks. Live data should be checked for freshness and accuracy before travel decisions."]
    ],
    tech:["Python","Streamlit","FastAPI","LangGraph","Agentic Workflow","Weather Data","Attractions Data","Currency Exchange"],
    evidence:["GitHub repository","Live demo","UI screenshots","Workflow diagram","Technical documentation"]
  },
  sales: {
    kicker: "TIME-SERIES FORECASTING · MLOPS",
    title: "Store Sales Time-Series Forecasting",
    summary: "A Temporal Convolutional Network forecasting sales across 1,782 product-store combinations using five years of historical data, supported by experiment tracking, dataset versioning, and post-training quantization.",
    stats: [{value:"1,782",label:"PRODUCT-STORE SERIES"},{value:"5 YEARS",label:"HISTORICAL DATA"},{value:"61.6%",label:"MODEL SIZE REDUCTION"}],
    sections: [
      ["WHAT WAS THE PROJECT?", "A multi-series retail sales forecasting project using a Temporal Convolutional Network (TCN) to learn patterns across product families and stores."],
      ["WHY I BUILT IT", "Retail demand varies by product and store over time. I wanted to explore a deep-learning approach for multi-series forecasting while also practicing reproducible experiment management and model optimization."],
      ["OBJECTIVE", "Train a TCN to forecast sales for 33 product families across 54 stores, and build a workflow for experiment tracking, data/model versioning, and reducing model footprint."],
      ["WHAT I IMPLEMENTED", "Prepared five years of historical data for 1,782 product-store combinations. Used a 120-timestep lookback window and a 16-day forecasting horizon. Implemented the TCN in PyTorch, tracked experiments with MLflow, managed datasets and model artifacts with DVC, and applied post-training quantization."],
      ["SKILLS DEVELOPED", "Time-series forecasting, temporal convolutional networks, sequence-window preparation, PyTorch, experiment tracking, data and model versioning, quantization, and model optimization."],
      ["OUTCOME", "Post-training quantization reduced model size from 8.88 MB to 3.41 MB — a 61.6% reduction. The project covered 1,782 product-store series. Forecast accuracy metrics can be added when you choose which evaluation results to publish."],
      ["REAL-WORLD RELEVANCE", "Retail forecasting can inform inventory planning, replenishment, and demand management. Smaller model artifacts can also make deployment and distribution more practical, depending on runtime constraints."]
    ],
    tech:["Python","PyTorch","TCN","MLflow","DVC","Time-Series Forecasting","Post-Training Quantization"],
    evidence:["GitHub repository","Forecast visualizations","Experiment tracking screenshots","Model-size comparison","Technical write-up"]
  }
};

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
let lastFocused = null;

function openProject(key) {
  const project = projectData[key];
  if (!project) return;
  lastFocused = document.activeElement;
  const sections = project.sections.map(([heading, body]) =>
    `<section class="detail-block"><h3>${heading}</h3><p>${body}</p></section>`
  ).join("");
  const stats = project.stats.map(item =>
    `<div class="modal-stat"><strong>${item.value}</strong><span>${item.label}</span></div>`
  ).join("");
  const tech = project.tech.map(item => `<span>${item}</span>`).join("");
  const evidence = project.evidence.map(item =>
    `<span class="evidence-link placeholder">${item} · ADD LINK</span>`
  ).join("");
  modalContent.innerHTML = `
    <div class="modal-kicker">${project.kicker}</div>
    <h2 id="modalTitle">${project.title}</h2>
    <p class="modal-summary">${project.summary}</p>
    <div class="modal-stat-row">${stats}</div>
    <div class="detail-grid">${sections}</div>
    <div class="modal-tech">${tech}</div>
    <div class="evidence-area"><h3>PROJECT EVIDENCE / ADD YOUR LINKS</h3>
      <div class="evidence-links">${evidence}</div>
      <p class="detail-block"><small>These are intentionally non-clickable placeholders. Replace them with real repository, demo, screenshot, write-up, or documentation links.</small></p>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}
function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}
document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.open)));
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", event => {
    if (event.target.closest("a")) return;
    openProject(card.dataset.project);
  });
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${card.querySelector("h3").textContent} details`);
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProject(card.dataset.project); }
  });
});
modalClose.addEventListener("click", closeProject);
modal.addEventListener("click", event => { if (event.target === modal) closeProject(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeProject(); });

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

// Update the identity and social/contact URLs in index.html before publishing.

// Progressive, accessible scroll reveals. Content remains visible if JS or
// IntersectionObserver is unavailable, and reduced-motion preferences win.
(function initScrollMotion() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const selectors = [
    '.hero-copy', '.hero-visual', '.section-heading', '.about-main', '.about-aside',
    '.project-toolbar', '.project-card', '.timeline-item', '.milestone-strip > div',
    '.learning-card', '.empty-evidence', '.simple-card', '.contact-panel'
  ];
  const revealTargets = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));

  revealTargets.forEach((element, index) => {
    element.dataset.reveal = (element.classList.contains('hero-visual') || element.classList.contains('about-aside')) ? 'right' : 'up';
    if (element.classList.contains('project-card') || element.classList.contains('simple-card')) {
      element.style.setProperty('--reveal-delay', `${(index % 3) * 85}ms`);
    }
  });

  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });
  revealTargets.forEach(element => observer.observe(element));
})();


// Premium interaction polish: reading progress and elevated sticky header.
(function initPageChrome() {
  const header = document.querySelector('.site-header');
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, amount))}%`;
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
