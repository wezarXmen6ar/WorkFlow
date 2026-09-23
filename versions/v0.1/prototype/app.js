/* ===========================================================================
   Shared prototype logic: traceability chain data, the "!" marker component,
   the localStorage-backed project store, and small shared helpers.

   Only ships what was actually pushed to objectives.md / problems.md /
   solutions.md as of v0.1 (O-001..O-004, P-001/P-003/P-006, S-001/S-002/
   S-002.1/S-003/S-003.1, F-001..F-006). Nothing here represents a feature
   that doesn't have an ID yet.
   =========================================================================== */

/* ------------------------------- CHAIN DATA ------------------------------- */

const CHAIN = {
  "O-001": { type: "Objective", name: "Manage all department projects in one place" },
  "O-002": { type: "Objective", name: "Present accurate project status to stakeholders" },
  "O-003": { type: "Objective", name: "Document everything about each project" },
  "O-004": { type: "Objective", name: "Protect the team from scope creep and project pressure" },

  "P-001": { type: "Problem", name: "No tool to create and manage projects", home: "O-001", also: [] },
  "P-003": { type: "Problem", name: "Hard to see what each team member is working on", home: "O-001", also: ["O-004"] },
  "P-006": { type: "Problem", name: "Project files and context depend on each project manager", home: "O-003", also: [] },

  "S-001": { type: "Solution", name: "Landing page", home: "P-001", also: [] },
  "S-002": { type: "Solution", name: "Create and manage projects", home: "P-001", also: ["P-006"] },
  "S-002.1": { type: "Sub-solution", name: "Project phases", home: "S-002", also: [] },
  "S-003": { type: "Solution", name: "Project manager home dashboard", home: "P-001", also: ["P-003"] },
  "S-003.1": { type: "Sub-solution", name: "At-a-glance project status", home: "S-003", also: [] },

  "F-001": { type: "Feature", name: "Identify the visitor by role", home: "S-001", also: [] },
  "F-002": { type: "Feature", name: "Route project manager to their dashboard", home: "S-001", also: ["S-003"] },
  "F-003": { type: "Feature", name: "Placeholder for other roles", home: "S-001", also: [] },
  "F-004": { type: "Feature", name: "Create a project — core details", home: "S-002", also: [] },
  "F-005": { type: "Feature", name: "Definition tables: scope, problem statements, objectives", home: "S-002", also: [] },
  "F-006": { type: "Feature", name: "Timeline / phase builder", home: "S-002.1", also: [] },
};

/* Walk from an id up to every objective it reaches, home path first. */
function traceHTML(id) {
  const node = CHAIN[id];
  if (!node) return "";

  function walk(nid, seen) {
    const n = CHAIN[nid];
    if (!n) return [nid];
    if (n.type === "Objective") return [`${nid} — ${n.name}`];
    const parents = [n.home, ...(n.also || [])].filter(Boolean);
    const lines = [];
    parents.forEach((pid, i) => {
      const isHome = i === 0;
      const label = isHome ? "" : " (also serves)";
      walk(pid, seen).forEach((sub) => {
        lines.push(`${nid} — ${n.name}${label} → ${sub}`);
      });
    });
    return lines.length ? lines : [`${nid} — ${n.name}`];
  }

  const rows = walk(id, new Set());
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return (
    `<div class="tc-hd"><b>${id}</b> — ${esc(node.name)} <span class="tc-ty">(${node.type})</span></div>` +
    rows.map((r) => `<div class="tc-row">${esc(r)}</div>`).join("")
  );
}

/* --------------------------------- MARKER --------------------------------- */

function initMarkers(root) {
  (root || document).querySelectorAll("[data-trace]").forEach((host) => {
    if (host.dataset.traceInit) return;
    host.dataset.traceInit = "1";
    host.classList.add("trace-anchor");

    const ids = host.dataset.trace.split(/\s+/).filter(Boolean);
    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "trace-badge";
    badge.textContent = "!";
    badge.setAttribute("aria-label", "Show what this builds toward");
    host.appendChild(badge);

    const tip = document.createElement("div");
    tip.className = "trace-tip";
    tip.innerHTML = ids.map(traceHTML).join('<div class="tc-sep"></div>');
    host.appendChild(tip);

    let pinned = false;
    function show() { tip.classList.add("on"); }
    function hide() { if (!pinned) tip.classList.remove("on"); }

    badge.addEventListener("mouseenter", show);
    badge.addEventListener("mouseleave", hide);
    badge.addEventListener("focus", show);
    badge.addEventListener("blur", hide);
    badge.addEventListener("click", (e) => {
      e.preventDefault();
      pinned = !pinned;
      badge.classList.toggle("pin", pinned);
      if (pinned) show(); else hide();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && pinned) {
        pinned = false;
        badge.classList.remove("pin");
        hide();
      }
    });
  });
}

/* ---------------------------------- STORE ---------------------------------- */

const STORE_KEY = "workflow_prototype_projects_v1";

const PHASES = [
  "Requirements gathering",
  "BA analysis document",
  "Development planning",
  "Development",
  "UAT",
  "Security testing",
  "Deployment",
  "Pilot on a small sample",
];
const MANDATORY_PHASES = ["Security testing", "Deployment"];

const DEPARTMENTS_KEY = "workflow_prototype_departments_v1";

function loadProjects() {
  let list;
  try {
    list = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
  } catch (e) {
    return [];
  }
  // Self-heal browsers that still have sample projects saved from an
  // earlier version of this prototype (sample seeding was removed).
  const cleaned = list.filter((p) => !p.sample);
  if (cleaned.length !== list.length) saveProjects(cleaned);
  return cleaned;
}
function saveProjects(list) {
  localStorage.setItem(STORE_KEY, JSON.stringify(list));
}
function addProject(project) {
  const list = loadProjects();
  list.push(project);
  saveProjects(list);
}
function loadDepartments() {
  try {
    return JSON.parse(localStorage.getItem(DEPARTMENTS_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function addDepartment(name) {
  const list = loadDepartments();
  if (!list.includes(name)) {
    list.push(name);
    localStorage.setItem(DEPARTMENTS_KEY, JSON.stringify(list));
  }
}

function uid() {
  return "p_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* Derive an "At-a-glance project status" (S-003.1) line for a project.
   There is no phase-progress-reporting feature yet, so the only honest
   signal available for a project today is "which planned phase comes
   first" - shown as "Not started yet". The on-hold/in-progress branches
   below are ready for when a status feature (see draft-v0.1.1) is pushed
   and projects can actually carry that data. */
function atAGlanceLine(project) {
  const a = project.atAGlance;
  if (a && a.kind === "on-hold") {
    const action = a.needsPmAction
      ? "needs your action to release it"
      : "no action needed from you yet";
    return {
      text: `On hold ${a.daysOnHold} day${a.daysOnHold === 1 ? "" : "s"} — ${a.holdReason} (${action})`,
      tone: "hold",
    };
  }
  if (a && a.kind === "in-progress" && project.phases[a.currentPhaseIndex]) {
    return { text: `Currently on: ${project.phases[a.currentPhaseIndex].name}`, tone: "active" };
  }
  if (project.phases.length) {
    return { text: `Not started yet — first phase: ${project.phases[0].name}`, tone: "planned" };
  }
  return { text: "No phases planned yet", tone: "planned" };
}

function fmtDate(d) {
  if (!d) return "";
  return d;
}

/* Escape untrusted, user-typed text before it goes into innerHTML anywhere
   (project names, custom phase names, scope/problem/objective entries,
   department names). */
function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
