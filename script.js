/* =========================================================
   1) DADOS DAS AULAS
   Edite aqui os links (url), textos e ícones.
   status: "completed" | "current" | "available" | "locked"
   ========================================================= */
const lessonData = [
  {
    id: 1,
    title: "Introdução",
    icon: "wired.gif",
    hint: "Primeiros passos",
    status: "completed",
    exercises: [
      { title: "Exercício 1.0", sub: "Praticar", url: "#exercicio-1-0" },
      { title: "Exercício 1.1", sub: "Praticar", url: "#exercicio-1-1" }
    ]
  },
  {
    id: 2,
    title: "Aula 2",
    icon: "🧮",
    hint: "Fundamentos numéricos",
    status: "completed",
    decor: "rocket",
    exercises: [
      { title: "Exercício 2.1", sub: "Praticar", url: "#exercicio-2-1" },
      { title: "Exercício 2.2", sub: "Somatório e Produtório · Tarefa", url: "#exercicio-2-2" },
      { title: "Exercício 2.3", sub: "Potência e Fatorial · Tarefa", url: "#exercicio-2-3" },
      { title: "Exercício 2.4", sub: "Combinação", url: "#exercicio-2-4" }
    ]
  },
  {
    id: 3,
    title: "Aula 3",
    icon: "📊",
    hint: "Em andamento",
    status: "current",
    exercises: [
      { title: "Exercícios — Aula 3", sub: "Abrir lista completa", url: "#exercicios-aula-3" }
    ]
  },
  {
    id: 4,
    title: "Aula 4",
    icon: "💻",
    hint: "Disponível",
    status: "available",
    decor: "trophy",
    exercises: [
      { title: "Acessar Aula 4", sub: "Ir para o conteúdo", url: "#aula-4" }
    ]
  },
  {
    id: 5,
    title: "Aula 5",
    icon: "🚀",
    hint: "Disponível",
    status: "available",
    exercises: [
      { title: "Link 5.1.a", sub: "Praticar", url: "#link-5-1-a" },
      { title: "Link 5.1.b", sub: "Praticar", url: "#link-5-1-b" },
      { title: "Link 5.2", sub: "Praticar", url: "#link-5-2" },
      { title: "Link 5.3", sub: "Praticar", url: "#link-5-3" }
    ]
  },
  {
    id: 6,
    title: "Aula 6",
    icon: "💡",
    hint: "Disponível",
    status: "available",
    decor: "bulb",
    exercises: [
      { title: "Link 6.1.a", sub: "Praticar", url: "#link-6-1-a" },
      { title: "Link 6.1.b", sub: "Praticar", url: "#link-6-1-b" }
    ]
  },
  {
    id: 7,
    title: "Aula 7",
    icon: "🏆",
    hint: "Disponível",
    status: "available",
    exercises: [
      { title: "Acessar Aula 7", sub: "Ir para o conteúdo", url: "#aula-7" }
    ]
  },
  {
    id: 8,
    title: "Aula 8",
    icon: "🎓",
    hint: "Disponível",
    status: "available",
    exercises: [
      { title: "Acessar Aula 8", sub: "Ir para o conteúdo", url: "#aula-8" }
    ]
  }
];

/* Fallback ilustrações decorativas (usadas quando não há Lottie disponível) */
const DECOR_FALLBACK = {
  rocket: "🚀",
  trophy: "🏆",
  bulb: "💡"
};

/* =========================================================
   2) ESTADO
   ========================================================= */
let expandedLessonId = null;

/* =========================================================
   3) RENDERIZAÇÃO
   ========================================================= */
const track = document.getElementById("roadmap-track");

function statusClass(status) {
  return {
    completed: "is-completed",
    current: "is-current",
    available: "is-available",
    locked: "is-locked"
  }[status] || "is-available";
}

function isClickable(status) {
  return status !== "locked";
}

function renderLessons() {
  track.innerHTML = "";

  lessonData.forEach((lesson, index) => {
    const side = index % 2 === 0 ? "side-left" : "side-right";

    const item = document.createElement("div");
    item.className = `lesson-item ${side}`;
    item.dataset.lessonId = lesson.id;
    item.style.animationDelay = `${index * 70}ms`;

    // Nó da aula
    const nodeWrap = document.createElement("div");
    nodeWrap.className = "lesson-node-wrap";

    const node = document.createElement("button");
    node.type = "button";
    node.className = `lesson-node ${statusClass(lesson.status)}`;
    node.setAttribute("aria-expanded", "false");
    node.setAttribute(
      "aria-label",
      `${lesson.title}, ${lesson.hint}${lesson.status === "locked" ? ", bloqueada" : ""}`
    );
    node.disabled = !isClickable(lesson.status);
    node.innerHTML = `
      <span aria-hidden="true">${lesson.status === "locked" ? "🔒" : lesson.icon}</span>
      <span class="check-badge" aria-hidden="true">✓</span>
    `;
    node.addEventListener("click", () => toggleLesson(lesson.id));

    const number = document.createElement("span");
    number.className = "lesson-number";
    number.textContent = `Aula ${lesson.id}`;

    const title = document.createElement("span");
    title.className = "lesson-title";
    title.textContent = lesson.title;

    const hint = document.createElement("span");
    hint.className = "lesson-hint";
    hint.textContent = lesson.hint;

    nodeWrap.append(node, number, title, hint);
    item.appendChild(nodeWrap);

    // Ilustração decorativa (Lottie-ready com fallback em CSS/emoji)
    if (lesson.decor) {
      const decorSlot = document.createElement("div");
      decorSlot.className = "lesson-decor";
      decorSlot.setAttribute("data-lottie-slot", lesson.decor);
      // Container pronto para receber uma animação Lottie real:
      // ex.: lottie.loadAnimation({ container: decorSlot, path: "animations/" + lesson.decor + ".json", loop: true, autoplay: true })
      // Como nenhum arquivo Lottie foi fornecido, exibimos o fallback ilustrado:
      decorSlot.innerHTML = `<span class="decor-fallback" aria-hidden="true">${DECOR_FALLBACK[lesson.decor] || "✨"}</span>`;
      item.appendChild(decorSlot);
    }

    // Painel de exercícios (fechado por padrão)
    const panel = document.createElement("div");
    panel.className = "exercise-panel";
    panel.id = `panel-${lesson.id}`;

    const panelTitle = document.createElement("p");
    panelTitle.className = "exercise-panel-title";
    panelTitle.textContent = lesson.title;
    panel.appendChild(panelTitle);

    lesson.exercises.forEach((ex) => {
      const link = document.createElement("a");
      link.className = "exercise-link";
      link.href = ex.url;
      link.innerHTML = `
        <span class="exercise-link-text">
          <span class="exercise-link-title">✨ ${ex.title}</span>
          <span class="exercise-link-sub">${ex.sub}</span>
        </span>
        <span class="exercise-link-arrow" aria-hidden="true">→</span>
      `;
      panel.appendChild(link);
    });

    item.appendChild(panel);
    track.appendChild(item);
  });
}

/* =========================================================
   4) INTERAÇÃO — abrir/fechar painel de exercícios
   ========================================================= */
function toggleLesson(lessonId) {
  const lesson = lessonData.find((l) => l.id === lessonId);
  if (!lesson || lesson.status === "locked") return;

  const wasOpen = expandedLessonId === lessonId;

  // Fecha o painel atualmente aberto (apenas um por vez)
  if (expandedLessonId !== null) {
    const prevPanel = document.getElementById(`panel-${expandedLessonId}`);
    const prevNode = document.querySelector(
      `.lesson-item[data-lesson-id="${expandedLessonId}"] .lesson-node`
    );
    if (prevPanel) prevPanel.classList.remove("is-open");
    if (prevNode) {
      prevNode.classList.remove("is-expanded");
      prevNode.setAttribute("aria-expanded", "false");
    }
  }

  expandedLessonId = wasOpen ? null : lessonId;

  if (!wasOpen) {
    const panel = document.getElementById(`panel-${lessonId}`);
    const node = document.querySelector(
      `.lesson-item[data-lesson-id="${lessonId}"] .lesson-node`
    );
    if (panel) panel.classList.add("is-open");
    if (node) {
      node.classList.add("is-expanded");
      node.setAttribute("aria-expanded", "true");
    }
  }

  // O roadmap permanece na mesma posição — apenas redesenha o caminho,
  // já que a altura dos itens pode mudar quando um painel abre/fecha.
  requestAnimationFrame(drawPath);
}

/* =========================================================
   5) PROGRESSO
   ========================================================= */
function updateProgress() {
  const total = lessonData.length;
  const completed = lessonData.filter((l) => l.status === "completed").length;
  const percent = Math.round((completed / total) * 100);

  const fill = document.getElementById("progress-fill");
  const label = document.getElementById("progress-percent");
  const bar = document.getElementById("progress-bar");

  fill.style.width = `${percent}%`;
  label.textContent = `${percent}%`;
  bar.setAttribute("aria-valuenow", String(percent));
}

/* =========================================================
   6) CAMINHO DO ROADMAP (SVG curvo conectando os nós)
   ========================================================= */
function drawPath() {
  const svg = document.getElementById("roadmap-path");
  const pathEl = document.getElementById("roadmap-path-line");
  const wrapper = document.querySelector(".roadmap-wrapper");
  const nodes = Array.from(document.querySelectorAll(".lesson-node"));

  if (!nodes.length) return;

  const wrapperRect = wrapper.getBoundingClientRect();
  svg.setAttribute("width", wrapperRect.width);
  svg.setAttribute("height", wrapperRect.height);
  svg.setAttribute("viewBox", `0 0 ${wrapperRect.width} ${wrapperRect.height}`);

  // Gradiente para o trecho já concluído
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
      <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4dd08a" />
        <stop offset="100%" stop-color="#4fa7ff" />
      </linearGradient>
    `;
    svg.appendChild(defs);
  }

  const points = nodes.map((node) => {
    const r = node.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - wrapperRect.left,
      y: r.top + r.height / 2 - wrapperRect.top
    };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midY = (p0.y + p1.y) / 2;
    // Curva suave em "S" entre um nó e o próximo
    d += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
  }

  pathEl.setAttribute("d", d);

  const hasCompleted = lessonData.some((l) => l.status === "completed");
  pathEl.classList.toggle("has-progress", hasCompleted);
}

/* =========================================================
   7) INICIALIZAÇÃO
   ========================================================= */
function init() {
  renderLessons();
  updateProgress();
  // Pequeno atraso para garantir que o layout já foi calculado
  requestAnimationFrame(() => requestAnimationFrame(drawPath));
}

window.addEventListener("load", init);
window.addEventListener("resize", () => {
  clearTimeout(window.__pathResizeTimer);
  window.__pathResizeTimer = setTimeout(drawPath, 120);
});
