/* ============================================================
   Portfolio — interactivity
   ============================================================ */

/* ---------- Project data -------------------------------------
   Add, remove or edit projects here. Every card and modal is
   generated from this array.
   ------------------------------------------------------------ */
const projects = [
  {
    tag: "Research",
    status: "Ongoing",
    statusClass: "wip",
    title: "Semi-Supervised Domain Adaptation for Polyp Segmentation",
    summary:
      "A teacher–student EMA pipeline that adapts a segmentation model to unlabelled target-domain colonoscopy data using temporally-stable pseudo-labels.",
    stack: ["PyTorch", "PolypGen2021", "EMA teacher–student", "Dynamic Cross-Entropy"],
    detail: {
      what:
        "A semi-supervised domain adaptation pipeline for automated polyp segmentation, trained on the multi-center PolypGen2021 dataset. A teacher–student EMA framework adapts a source-domain model to unlabelled target-domain data.",
      why:
        "Segmentation models degrade badly when they move between hospitals — different scopes, lighting, bowel preparation. Expert annotation at every new site is slow and expensive, so the model has to make use of unlabelled target data instead.",
      objective:
        "Adapt a source-domain segmentation model to unlabelled target-domain data without fresh expert annotations, while keeping the pseudo-labels reliable enough to actually learn from.",
      tools:
        "PyTorch, teacher–student EMA framework, PolypGen2021 multi-center dataset, composite loss combining Dynamic Cross-Entropy for class imbalance.",
      whatIDid: [
        "Designed and implemented the full semi-supervised domain adaptation pipeline in PyTorch.",
        "Built the teacher–student EMA framework that adapts to unlabelled target-domain data.",
        "Designed a temporal stability weighting scheme that weights pseudo-labels by prediction consistency across training iterations.",
        "Engineered a composite loss combining focal-style components with Dynamic Cross-Entropy to handle severe foreground/background class imbalance.",
      ],
      skills: [
        "Domain adaptation",
        "Semi-supervised learning",
        "EMA teacher–student training",
        "Medical image segmentation",
        "Loss function design",
        "PyTorch",
      ],
      outcome:
        "Research in progress — the pipeline is implemented and training; evaluation is focused on cross-center generalisation on held-out PolypGen centers.",
      relevance:
        "This is the core problem for deployed medical imaging: a segmentation model that has to hold up at a new hospital without re-annotation. The same pattern applies to any cross-site vision deployment.",
      evidence: [
        { label: "GitHub repository", url: null, note: "Repository URL" },
        { label: "Write-up", url: null, note: "Research write-up or paper URL" },
        { label: "Screenshots", url: null, note: "Screenshot gallery URL" },
        { label: "Technical documentation", url: null, note: "Technical documentation URL" },
      ],
    },
  },
  {
    tag: "LLM Application",
    status: "Complete",
    statusClass: "",
    title: "Job Description RAG Assistant",
    summary:
      "A retrieval-augmented career assistant that answers job questions, matches resumes to descriptions, surfaces skill gaps and drafts tailored cover letters.",
    stack: ["Python", "LangChain", "FAISS", "HuggingFace Embeddings", "Gradio"],
    detail: {
      what:
        "A RAG-based career assistant that answers job-related questions, matches resumes with job descriptions, identifies skill gaps, and generates tailored cover letters.",
      why:
        "Generic LLM answers about a specific job description hallucinate. Grounding the generation in retrieved chunks of the actual JD fixes that — and makes the output auditable.",
      objective:
        "Build a retrieval pipeline accurate enough that generated answers stay grounded in the source job description rather than inventing requirements.",
      tools:
        "Python, LangChain, FAISS vector database, all-MiniLM-L6-v2 HuggingFace embeddings, GPT-OSS 120B via Groq, Gradio UI.",
      whatIDid: [
        "Built a pipeline to chunk and embed job descriptions using all-MiniLM-L6-v2.",
        "Stored embeddings in a FAISS vector database for semantic retrieval at query time.",
        "Wired retrieved chunks as context into GPT-OSS 120B via Groq, reducing hallucination.",
        "Exposed the full pipeline through an interactive Gradio interface.",
      ],
      skills: [
        "RAG architecture",
        "Embedding models",
        "Vector databases",
        "Prompt construction",
        "LLM integration",
        "Gradio",
      ],
      outcome:
        "Working end-to-end assistant that answers grounded questions about a job description, matches resumes to roles, and drafts tailored cover letters.",
      relevance:
        "The exact retrieval pattern used in production LLM assistants — grounding generation in a private corpus. Directly reusable for internal knowledge assistants, support bots and document Q&A.",
      evidence: [
        { label: "GitHub repository", url: null, note: "Repository URL" },
        { label: "Demo", url: null, note: "Live demo URL" },
        { label: "Write-up", url: null, note: "Write-up URL" },
      ],
    },
  },
  {
    tag: "Agentic Workflow",
    status: "Complete",
    statusClass: "",
    title: "AI Trip Planner",
    summary:
      "An agentic trip planner that pulls live weather, attractions and currency data through a LangGraph workflow and renders personalised plans in a Streamlit UI.",
    stack: ["Streamlit", "FastAPI", "LangGraph", "Agentic Workflow"],
    detail: {
      what:
        "An AI-powered trip planning system that generates personalised trip plans by orchestrating real-time tools through an agentic workflow.",
      why:
        "LLM-only trip planning invents restaurants and ignores weather. An agentic workflow that calls real tools fixes both — the plan responds to live data instead of fabricating it.",
      objective:
        "Build a planner where tool calls (weather, attractions, FX) are orchestrated by an agentic graph rather than free-form generation.",
      tools: "Streamlit frontend, FastAPI backend, LangGraph agentic workflow.",
      whatIDid: [
        "Built the Streamlit frontend integrated with a FastAPI backend.",
        "Implemented an agentic workflow using LangGraph to fetch and analyse real-time weather, attractions and currency exchange data.",
        "Wired tool results back into the plan so recommendations respond to live conditions.",
        "Presented results interactively in the web UI.",
      ],
      skills: [
        "Agentic orchestration (LangGraph)",
        "FastAPI backend design",
        "Streamlit UI",
        "Tool calling",
        "Multi-service integration",
      ],
      outcome:
        "Working planner that produces personalised plans driven by real data instead of invented facts.",
      relevance:
        "Agentic orchestration is how modern LLM apps move beyond chat — calling tools, APIs and data services. Directly applicable to any workflow automation product.",
      evidence: [
        { label: "GitHub repository", url: null, note: "Repository URL" },
        { label: "Demo", url: null, note: "Live demo URL" },
        { label: "Write-up", url: null, note: "Write-up URL" },
      ],
    },
  },
  {
    tag: "Time Series & MLOps",
    status: "Complete",
    statusClass: "",
    title: "Store Sales Time-Series Forecasting",
    summary:
      "A Temporal Convolutional Network forecasting 1,782 product-store combinations, with MLflow tracking, DVC versioning and post-training quantization that shrank the model by 61.6%.",
    stack: ["PyTorch", "MLflow", "DVC", "TCN"],
    detail: {
      what:
        "A Temporal Convolutional Network (TCN) to forecast sales for 1,782 product-store combinations using 5 years of historical data.",
      why:
        "Store-level sales forecasting is a classic high-value ML problem — and a good excuse to build the MLOps stack that keeps experiments reproducible and the model deployable.",
      objective:
        "Build an accurate multi-series forecaster, then put it on a reproducible experiment-tracking, data-versioning and model-compression pipeline.",
      tools: "PyTorch, TCN architecture, MLflow, DVC, post-training quantization.",
      whatIDid: [
        "Developed a TCN to forecast sales across 1,782 product-store combinations from 5 years of historical data.",
        "Implemented experiment tracking with MLflow to optimise model convergence and stability.",
        "Used DVC to efficiently track and manage large-scale CSV datasets and model artifacts.",
        "Applied post-training quantization, reducing model size by 61.6% (8.88 MB → 3.41 MB).",
      ],
      skills: [
        "Time-series modelling (TCN)",
        "Experiment tracking",
        "Data versioning",
        "Model compression",
        "PyTorch",
      ],
      outcome:
        "Working forecaster with reproducible training runs and a model small enough to deploy comfortably on constrained infrastructure.",
      relevance:
        "Forecasting discipline and MLOps are what separate a notebook from a deployed system. Directly applicable to retail, inventory and demand planning.",
      evidence: [
        { label: "GitHub repository", url: null, note: "Repository URL" },
        { label: "Write-up", url: null, note: "Write-up URL" },
        { label: "Demo", url: null, note: "Demo URL" },
        { label: "Technical documentation", url: null, note: "Technical documentation URL" },
      ],
    },
  },
];

/* ---------- Helpers ------------------------------------------ */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

/* ---------- Render project cards ----------------------------- */
function renderProjects() {
  const grid = $("#projectGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p, i) => `
    <article
      class="card project-card reveal"
      data-project="${i}"
      style="--d:${i * 80}ms"
      tabindex="0"
      role="button"
      aria-label="Open details for ${escapeHtml(p.title)}"
    >
      <div class="project-top">
        <span class="project-tag">${escapeHtml(p.tag)}</span>
        <span class="project-status ${escapeHtml(p.statusClass || "")}">${escapeHtml(p.status)}</span>
      </div>
      <h3>${escapeHtml(p.title)}</h3>
      <p class="project-summary">${escapeHtml(p.summary)}</p>
      <div class="chips">
        ${p.stack.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
      </div>
      <div class="project-foot">
        <span class="project-open">View details</span>
        <span class="project-arrow" aria-hidden="true">→</span>
      </div>
    </article>`
    )
    .join("");
}

/* ---------- Modal -------------------------------------------- */
const modal = $("#modal");
const modalBody = $("#modalBody");
let lastFocused = null;

function renderProjectDetail(p) {
  const d = p.detail;
  return `
    <div class="modal-head">
      <span class="kicker">Project · ${escapeHtml(p.tag)}</span>
      <h2 id="modalTitle">${escapeHtml(p.title)}</h2>
      <div class="chips">
        ${p.stack.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
      </div>
    </div>

    <div class="modal-section">
      <h3>What was the project?</h3>
      <p>${escapeHtml(d.what)}</p>
    </div>
    <div class="modal-section">
      <h3>Why did I build it?</h3>
      <p>${escapeHtml(d.why)}</p>
    </div>
    <div class="modal-section">
      <h3>Objective</h3>
      <p>${escapeHtml(d.objective)}</p>
    </div>
    <div class="modal-section">
      <h3>Tools &amp; technologies</h3>
      <p>${escapeHtml(d.tools)}</p>
    </div>
    <div class="modal-section">
      <h3>What I actually did</h3>
      <ul class="m-list">${d.whatIDid.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h3>Skills developed</h3>
      <div class="chips">${d.skills.map((s) => `<span class="chip">${escapeHtml(s)}</span>`).join("")}</div>
    </div>
    <div class="modal-section">
      <h3>Outcome</h3>
      <p>${escapeHtml(d.outcome)}</p>
    </div>
    <div class="modal-section">
      <h3>Real-world relevance</h3>
      <p>${escapeHtml(d.relevance)}</p>
    </div>
    <div class="modal-section">
      <h3>Evidence</h3>
      <div class="ev-row">
        ${d.evidence
          .map((ev) =>
            ev.url
              ? `<a class="ev-btn" href="${escapeHtml(ev.url)}" target="_blank" rel="noopener">${escapeHtml(ev.label)}</a>`
              : `<a class="ev-btn is-placeholder" href="#" data-evidence="${escapeHtml(ev.note || ev.label)}">${escapeHtml(ev.label)}<span class="ev-tag">placeholder</span></a>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function openModal(index) {
  const p = projects[index];
  if (!p) return;
  lastFocused = document.activeElement;
  modalBody.innerHTML = renderProjectDetail(p);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

/* ---------- Toast -------------------------------------------- */
let toastTimer;
function showToast(msg) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------- Global click / keyboard -------------------------- */
function initGlobalHandlers() {
  document.addEventListener("click", (e) => {
    const ph = e.target.closest(".is-placeholder");
    if (ph) {
      e.preventDefault();
      const label = ph.dataset.evidence || ph.textContent.trim();
      showToast(`Placeholder — replace with: ${label}`);
      return;
    }
    const card = e.target.closest(".project-card");
    if (card) {
      openModal(Number(card.dataset.project));
      return;
    }
    if (e.target.closest("[data-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
      return;
    }
    const card = e.target.closest(".project-card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openModal(Number(card.dataset.project));
    }
  });
}

/* ---------- Header / scroll progress ------------------------- */
function initHeader() {
  const header = $("#header");
  const progress = $("#progress");
  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 12);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Mobile nav --------------------------------------- */
function initNav() {
  const toggle = $("#navToggle");
  const nav = $("#nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- Reveal on scroll --------------------------------- */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));

  setTimeout(() => {
    $$(".reveal:not(.visible)").forEach((el) => el.classList.add("visible"));
  }, 3000);
}

/* ---------- Starfield canvas (Enhanced for Galaxy look) ------ */
function initStarfield() {
  const canvas = $("#starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr;
  let stars = [];
  let flares = [];
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  function buildStars() {
    // Increase count for a richer galaxy feel
    const count = Math.min(700, Math.round((w * h) / 6000));
    stars = [];
    flares = [];
    
    for (let i = 0; i < count; i++) {
      const depth = Math.random();
      const isCyan = Math.random() < 0.15;
      const isViolet = !isCyan && Math.random() < 0.2;
      const isWarm = !isCyan && !isViolet && Math.random() < 0.1;
      
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.3 + depth * 1.2,
        baseAlpha: 0.2 + depth * 0.7,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.0005 + Math.random() * 0.0015,
        depth,
        hue: isCyan ? 190 : isViolet ? 275 : isWarm ? 350 : 215,
      });
    }

    // Add a few large, glowing "hero" stars with flare effects
    for (let i = 0; i < 8; i++) {
      flares.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1.5 + Math.random() * 2.5,
        alpha: 0.6 + Math.random() * 0.4,
        depth: 0.8 + Math.random() * 0.2,
        twinkle: Math.random() * Math.PI * 2,
      });
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(now - last, 60);
    last = now;

    // Smooth parallax mouse tracking
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    ctx.clearRect(0, 0, w, h);
    
    // Draw standard stars
    for (const s of stars) {
      s.twinkle += s.twinkleSpeed * dt;
      const alpha = s.baseAlpha * (0.65 + 0.35 * Math.sin(s.twinkle));
      const px = s.x + mouseX * s.depth * 20;
      const py = s.y + mouseY * s.depth * 20;
      // Wrap around edges for infinite parallax
      const wx = ((px % w) + w) % w;
      const wy = ((py % h) + h) % h;
      
      ctx.beginPath();
      ctx.fillStyle = `hsla(${s.hue}, 90%, ${75 + s.depth * 15}%, ${alpha})`;
      ctx.arc(wx, wy, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw flare/hero stars (like the bright ones in the image)
    for (const f of flares) {
      f.twinkle += 0.001 * dt;
      const alpha = f.alpha * (0.7 + 0.3 * Math.sin(f.twinkle));
      const px = f.x + mouseX * f.depth * 30;
      const py = f.y + mouseY * f.depth * 30;
      const wx = ((px % w) + w) % w;
      const wy = ((py % h) + h) % h;

      // Outer glow
      const gradient = ctx.createRadialGradient(wx, wy, 0, wx, wy, f.r * 4);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.4, `rgba(180, 220, 255, ${alpha * 0.3})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(wx, wy, f.r * 4, 0, Math.PI * 2);
      ctx.fill();

      // Cross flare lines
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
      ctx.lineWidth = 0.5;
      ctx.moveTo(wx - f.r * 6, wy);
      ctx.lineTo(wx + f.r * 6, wy);
      ctx.moveTo(wx, wy - f.r * 6);
      ctx.lineTo(wx, wy + f.r * 6);
      ctx.stroke();
    }

    requestAnimationFrame(frame);
  }

  function drawStatic() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      ctx.beginPath();
      ctx.fillStyle = `hsla(${s.hue}, 90%, 80%, ${s.baseAlpha})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    targetX = (e.clientX / w - 0.5) * 2;
    targetY = (e.clientY / h - 0.5) * 2;
  });

  resize();
  if (prefersReducedMotion) drawStatic();
  else requestAnimationFrame(frame);
}

/* ---------- Parallax for Nebulas (orbs removed) -------------- */
function initParallax() {
  if (prefersReducedMotion) return;
  const nebulas = $$(".nebula");
  if (!nebulas.length) return;

  let mx = 0, my = 0, tx = 0, ty = 0;
  let sy = window.scrollY;

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX / window.innerWidth - 0.5;
    ty = e.clientY / window.innerHeight - 0.5;
  });
  window.addEventListener("scroll", () => { sy = window.scrollY; }, { passive: true });

  function loop() {
    mx += (tx - mx) * 0.04;
    my += (ty - my) * 0.04;

    nebulas.forEach((neb, i) => {
      const depth = 0.15 + i * 0.05;
      const x = mx * depth * 100;
      const y = my * depth * 100 - sy * depth * 0.1;
      neb.style.translate = `${x}px ${y}px`;
    });

    requestAnimationFrame(loop);
  }
  loop();
}

/* ---------- Project card cursor glow ------------------------- */
function initCardGlow() {
  $$(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- Init --------------------------------------------- */
function init() {
  document.documentElement.classList.add("js-enabled");

  renderProjects();
  initReveal();
  initStarfield();
  initParallax();
  initCardGlow();
  initHeader();
  initNav();
  initGlobalHandlers();

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}