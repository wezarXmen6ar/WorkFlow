# Draft for v1.0

**Status:** Pending. Deferred until after v0.1 is pushed and the prototype's first slice is built from it; not the active draft.
**Map:** [draft-v1.0-map.html](draft-v1.0-map.html)

Staging area for anything discussed that could go into [objectives.md](../objectives.md), [problems.md](../problems.md), or [solutions.md](../solutions.md).

Nothing here has an ID. Entries move to the main documents only after the user's green light, and get an ID and a "Serves" parent at that point. Once this draft is pushed, this file is finished and never edited again; anything new goes into the next draft file.

Each entry has one **home parent** (where it lives and where its ID comes from) and may **also serve** other parents. Nothing is duplicated: an idea is written once and referenced from every parent it serves.

**Entry format**

```
### Title
- Type: Objective | Problem | Solution | Sub-solution | Feature
- Description:
- Home parent (suggestion only):
- Also serves (suggestion only):
- Open questions:
```

---

## Overview tree

Home parents only. The "also serves" links are listed after the tree.

```
Objective: Manage all department projects in one place
 ├─ Problem: No tool to create and manage projects
 │   ├─ Solution: Landing page (mirrored from draft-v0.1.md)
 │   │   ├─ Feature: Identify the visitor by role
 │   │   ├─ Feature: Route project manager to their dashboard
 │   │   └─ Feature: Placeholder for other roles
 │   ├─ Sub-solution: Duplicate a project (home: Solution "Create and manage projects" — now in draft-v0.1.md)
 │   ├─ Sub-solution: Archive and permanent delete (home: Solution "Create and manage projects" — now in draft-v0.1.md)
 │   └─ Sub-solution: Personal task list (home: Solution "Project manager home dashboard" — now in draft-v0.1.md)
 ├─ Problem: No department-wide view of all projects
 │   └─ Solution: Department portfolio view
 │       ├─ Sub-solution: Yearly plan by quarter
 │       ├─ Sub-solution: Import existing Excel data
 │       └─ Sub-solution: Search and filter the project list
 └─ Problem: Hard to see what each team member is working on
     ├─ Solution: Resource assignment and workload tracking
     │   ├─ Sub-solution: Resource pool
     │   ├─ Sub-solution: Assign resources to phases
     │   ├─ Sub-solution: Leave and absences
     │   └─ Sub-solution: Person view
     └─ Solution: Phase progress reporting
         └─ Sub-solution: Project manager approval of progress

Objective: Present accurate project status to stakeholders
 ├─ Problem: No single source of truth for project status
 │   └─ Solution: Live project status timeline
 │       ├─ Sub-solution: Jira link for deployment and security testing
 │       ├─ Sub-solution: Project health, quiet by default
 │       ├─ Sub-solution: Project's life span
 │       └─ Sub-solution: Access by role and owning general department
 └─ Problem: Stakeholders can't be shown only what concerns them
     └─ Solution: Stakeholder view: only what concerns them
         └─ Sub-solution: Shared or internal, per item

Objective: Document everything about each project
 ├─ Problem: Project files and context depend on each project manager
 │   └─ Solution: Central project file repository
 │       ├─ Sub-solution: Second project manager and takeover
 │       ├─ Sub-solution: Meeting records
 │       └─ Sub-solution: Attach documents to projects and phases
 └─ Problem: No history log for projects
     └─ Solution: Project history log

Objective: Protect the team from scope creep and project pressure
 ├─ Problem: Requirements keep being added with no visible cost
 │   └─ Solution: Show the impact of new requirements before work starts
 │       ├─ Sub-solution: Log a new requirement with its estimated development days
 │       ├─ Sub-solution: Highlight the impact
 │       └─ Sub-solution: Original plan vs current plan
 ├─ Problem: Stakeholders don't see the pile-up of concurrent projects
 │   └─ Solution: Workload indicator on the department-wide view
 │       └─ Sub-solution: Capacity check in the yearly plan
 └─ Problem: The cost of priority shifts is invisible
     └─ Solution: Show the price of a change across all projects before it is confirmed
         ├─ Sub-solution: Automatic pull and delay calculation
         ├─ Sub-solution: Price shown, confirm before applying
         ├─ Sub-solution: Decision log
         └─ Sub-solution: Project priority
```

Nine items moved out of this draft into [draft-v0.1.md](draft-v0.1.md) this session — chosen as the first prototype slice: Create and manage projects, Project phases, Project manager home dashboard, At-a-glance project status, Resource assignment and workload tracking, Resource pool, Assign resources to phases, Phase progress reporting, Project manager approval of progress. Five of those — Resource assignment and workload tracking, Resource pool, Assign resources to phases, Phase progress reporting, Project manager approval of progress — were later cut from v0.1's narrowed scope and moved back here with full entries, restoring their "also serves" links to solutions that live in this same draft.

All objectives and problems also moved to draft-v0.1.md (the active draft) — referenced here by name only.

## Also serves

Twenty-six entries serve more than one parent.

| Entry | Also serves |
|---|---|
| Department portfolio view | Problem: Stakeholders don't see the pile-up of concurrent projects |
| Live project status timeline | Problem: Requirements keep being added with no visible cost |
| Show the price of a change across all projects before it is confirmed | Problems: Requirements keep being added with no visible cost; Stakeholders don't see the pile-up |
| Yearly plan by quarter | Solution: Create and manage projects |
| Original plan vs current plan | Solutions: Live project status timeline; Show the price of a change |
| Decision log | Solutions: Show the impact of new requirements before work starts; Project history log |
| Meeting records | Solutions: Show the price of a change across all projects before it is confirmed; Project history log |
| Central project file repository | Problem: No history log for projects |
| Attach documents to projects and phases | Solution: Project history log |
| Log a new requirement with its estimated development days | Solution: Project history log |
| Capacity check in the yearly plan | Solution: Department portfolio view |
| Leave and absences | Solution: Workload indicator on the department-wide view |
| Project priority | Solution: Department portfolio view |
| Person view | Solution: Phase progress reporting |
| Project's life span | Solutions: Project history log; Stakeholder view: only what concerns them |
| Access by role and owning general department | Solutions: Department portfolio view; Workload indicator; Stakeholder view: only what concerns them |
| Highlight the impact | Solution: Show the price of a change across all projects before it is confirmed |
| Price shown, confirm before applying | Solution: Show the impact of new requirements before work starts |
| Search and filter the project list | Solutions: Project manager home dashboard; Resource assignment and workload tracking |
| Archive and permanent delete | Solution: Live project status timeline |
| Resource assignment and workload tracking | Problems: Stakeholders don't see the pile-up of concurrent projects; The cost of priority shifts is invisible |
| Resource pool | Solutions: Workload indicator on the department-wide view; Show the price of a change across all projects before it is confirmed |
| Assign resources to phases | Solutions: Create and manage projects; Workload indicator on the department-wide view; Show the price of a change across all projects before it is confirmed |
| Phase progress reporting | Problem: No single source of truth for project status |
| Project manager approval of progress | Solution: Live project status timeline |
| Route project manager to their dashboard | Solution: Project manager home dashboard |

## Objectives and problems

All objectives and problems are staged in [draft-v0.1.md](draft-v0.1.md) (the active draft) — full descriptions live there, referenced here by name only, except the two mirrored below because "Landing page" (see below) depends on them.

### Manage all department projects in one place
- Type: Objective
- Description: One tool to manage every project the department has worked on, is working on, and will work on, including the yearly plan and the big picture.
- Home parent (suggestion only): none (top layer)
- Also serves (suggestion only): none
- Open questions: none. (Mirrored from draft-v0.1.md; that file remains the source of truth — edit there, not here.)

### No tool to create and manage projects
- Type: Problem
- Description: The department has no tool to create a project and manage it through its life. Today this is done in Excel and by hand.
- Home parent (suggestion only): Objective "Manage all department projects in one place"
- Also serves (suggestion only): none
- Open questions: none. (Mirrored from draft-v0.1.md; that file remains the source of truth — edit there, not here.)

## Solutions and sub-solutions

### Landing page
- Type: Solution
- Description: The first screen anyone sees when they open the tool. It reads who is signed in and routes them straight to what matters to them — a project manager to "Project manager home dashboard"; other roles to their own view once those exist. There is no shared, generic home screen to sit through first.
- Home parent (suggestion only): Problem "No tool to create and manage projects"
- Also serves (suggestion only): none
- Open questions: For v0.1, only the project-manager route has a real destination built. Other roles' routes stay placeholders until their views exist. (Mirrored from draft-v0.1.md; that file remains the source of truth — edit there, not here.)

### Identify the visitor by role
- Type: Feature
- Description: The landing page shows a role picker. Clicking a role signs the visitor in as that role for the session — the prototype's stand-in for real authentication. The full role list and what each role can do is defined in "Access by role and owning general department" (see above, in this same draft); for v0.1 only "Project manager" is a real, functional choice.
- Home parent (suggestion only): Solution "Landing page"
- Also serves (suggestion only): none
- Open questions: none. (Mirrored from draft-v0.1.md; that file remains the source of truth — edit there, not here.)

### Route project manager to their dashboard
- Type: Feature
- Description: Clicking "Project manager" on the role picker routes straight to "Project manager home dashboard" (see draft-v0.1.md).
- Home parent (suggestion only): Solution "Landing page"
- Also serves (suggestion only): Solution "Project manager home dashboard" — this is the feature's destination.
- Open questions: none. (Mirrored from draft-v0.1.md; that file remains the source of truth — edit there, not here.)

### Placeholder for other roles
- Type: Feature
- Description: Clicking any role other than "Project manager" shows a placeholder screen, not a real view — acknowledges the choice without functionality, since only the project-manager route has a built destination in v0.1.
- Home parent (suggestion only): Solution "Landing page"
- Also serves (suggestion only): none
- Open questions: none. (Mirrored from draft-v0.1.md; that file remains the source of truth — edit there, not here.)

### Duplicate a project
- Type: Sub-solution
- Description: A new project can be created starting from an existing one's setup (its phases, their time frames, and the assigned team) instead of from scratch.
- Home parent (suggestion only): Solution "Create and manage projects"
- Also serves (suggestion only): none
- Open questions: none

### Archive and permanent delete
- Type: Sub-solution
- Description: Deleting a project archives it: removed from the active views, never destroyed. A permanent, unrecoverable delete is restricted to a super admin, and only after they explicitly confirm the decision.
- Home parent (suggestion only): Solution "Create and manage projects"
- Also serves (suggestion only): Solution "Live project status timeline" — its "Access by role and owning general department" sub-solution defines the super admin role that alone can do this.
- Open questions: none

### Personal task list
- Type: Sub-solution
- Description: A project manager can add tasks or actions for themselves against any project they manage. These show grouped across all their projects on the dashboard, so they know what to tackle next, and again inside each project when they open it.
- Home parent (suggestion only): Solution "Project manager home dashboard" — now in draft-v0.1.md.
- Also serves (suggestion only): none
- Open questions: none

### Department portfolio view
- Type: Solution
- Description: One view of all department projects (past, current, planned), with progress rolled up for the whole department, not only per project. Once "Landing page" (see above, in this same draft) routes by role, this is a likely landing view for decision makers.
- Home parent (suggestion only): Problem "No department-wide view of all projects"
- Also serves (suggestion only): Problem "Stakeholders don't see the pile-up of concurrent projects" — this view is where the pile-up becomes visible.
- Open questions: none

### Yearly plan by quarter
- Type: Sub-solution
- Description: GDAI builds the yearly plan by quarter and decision makers approve it. A project can be logged with a start quarter and no end date; the end date is set later (see "Project phases").
- Home parent (suggestion only): Solution "Department portfolio view"
- Also serves (suggestion only): Solution "Create and manage projects" — a new project is logged in the plan with its start quarter.
- Open questions: none

### Import existing Excel data
- Type: Sub-solution
- Description: The tool replaces Excel for tracking projects. Existing Excel tables and data can be imported, so nothing has to be retyped and the department-wide view is filled from day one.
- Home parent (suggestion only): Solution "Department portfolio view"
- Also serves (suggestion only): none
- Open questions: What do the Excel files contain today (project list, yearly plan, resources), and which should be imported first?

### Search and filter the project list
- Type: Sub-solution
- Description: The project list can be filtered by owning department, project manager, priority, developer, tech lead, completion state (finished, not started, or by phase), and whether a project is late.
- Home parent (suggestion only): Solution "Department portfolio view"
- Also serves (suggestion only): Solutions "Project manager home dashboard" and "Resource assignment and workload tracking" — the same filters narrow the dashboard's list, and the developer/tech-lead filters reuse resource-assignment data.
- Open questions: none

### Leave and absences
- Type: Sub-solution
- Description: Leave and absences are entered by hand per person in the tool, with no integration to any other system. Capacity excludes them, and assigning someone to a phase during their leave shows a warning.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): Solution "Workload indicator on the department-wide view" — capacity is worked out after leave.
- Open questions: none

### Person view
- Type: Sub-solution
- Description: Clicking anyone in the resource pool shows their timeline: projects, phases, and planned against actual days. For project managers it also shows the reports waiting for their confirmation. Only GDAI staff see it; stakeholders never see the names of the resources.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): Solution "Phase progress reporting" — it shows the reports waiting for confirmation.
- Open questions: none

### Resource assignment and workload tracking
- Type: Solution
- Description: Record which resources (developers, business analysts, tech leads, project managers) are assigned to which projects.
- Home parent (suggestion only): Problem "Hard to see what each team member is working on"
- Also serves (suggestion only): Problems "Stakeholders don't see the pile-up of concurrent projects" and "The cost of priority shifts is invisible" — both are calculated from this data.
- Open questions: none

### Resource pool
- Type: Sub-solution
- Description: All team members are kept in a resource pool: developers, business analysts, tech leads, and project managers. The user assigns them to projects for a time frame, so it is clear who is on what and when.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): Solutions "Workload indicator on the department-wide view" and "Show the price of a change across all projects before it is confirmed" — both read capacity from the pool.
- Open questions: none

### Assign resources to phases
- Type: Sub-solution
- Description: Resources are assigned not only to a project but to its phases: developers to the development phase, BAs to the analysis phase, and so on. Each phase has a planned time frame, and the days the person reports (confirmed by the project manager) are the exact time they actually worked on the project.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): Solutions "Workload indicator on the department-wide view", "Show the price of a change across all projects before it is confirmed", and "Create and manage projects" (see draft-v0.1.md) — the first two need the real time each person spends per phase; the third assigns the team when a project is created. Depends on "Resource pool" and "Project phases" (the latter in draft-v0.1.md).
- Open questions: none

### Phase progress reporting
- Type: Solution
- Description: Whoever is assigned to a phase reports on it: the days they actually spent and when the phase is done (for example, analysis planned for five days, the analyst reports three and marks it done). Developers report progress on the development phase as a share of the whole development (for example, a finished task worth 10%). Applies to every phase. Progress counts only after the project manager confirms it.
- Home parent (suggestion only): Problem "Hard to see what each team member is working on"
- Also serves (suggestion only): Problem "No single source of truth for project status" — this is what keeps the status current.
- Open questions: none

### Project manager approval of progress
- Type: Sub-solution
- Description: A team member's report on a phase (for example the analyst's three days, or a finished task worth 10% of development) is not counted until the project manager confirms it. Only confirmed progress moves the project's status. The project manager can also enter the report directly on the team member's behalf, for example when the information comes to them verbally.
- Home parent (suggestion only): Solution "Phase progress reporting"
- Also serves (suggestion only): Solution "Live project status timeline" — approved progress is what the timeline shows.
- Open questions: Who splits the development into weighted tasks (for example a task worth 10%), and when? The project manager at development planning?

### Live project status timeline
- Type: Solution
- Description: One live status timeline per project, viewable like a movie of its life cycle. Read-only for stakeholders.
- Home parent (suggestion only): Problem "No single source of truth for project status"
- Also serves (suggestion only): Problem "Requirements keep being added with no visible cost" — the added days are shown on this timeline.
- Open questions: none

### Jira link for deployment and security testing
- Type: Sub-solution
- Description: Deployment and security testing are done in Jira, so the tool complements Jira instead of replacing it. Those phases appear on the project timeline with their Jira status, so nobody enters the same information twice.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): none
- Open questions: Does the tool only link to the Jira ticket and the project manager sets the status, or does it pull the status from Jira automatically?

### Project health, quiet by default
- Type: Sub-solution
- Description: Each project shows its health on the project itself, worked out automatically from its plan. Only two conditions are marked: late (measured against the current plan, after confirmed changes) and waiting on the business (on hold for a business approval or a requirement, shown with the days waiting). An on-track project shows nothing special. There are no notifications, no alert lists, and no counters: nothing asks for action, and health is only seen by whoever looks. The project manager can override the health with a reason, which goes on record in the history log. This is deliberate, so the tool is never filled with alerts and abandoned. The waiting-on-the-business marker is visible to stakeholders on their own projects.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): none
- Open questions: none

### Project's life span
- Type: Sub-solution
- Description: The project's life span is a replay of its life, day by day from its first day, like watching a movie. The project manager sets the milestones and chooses what appears in it; by default it shows the shared items. A marker moves along the timeline; quiet days pass quickly, and each highlight slows the replay and stands out: a phase starting or ending, a milestone, a document delivered (for example the BA analysis document), a request received, a change request approved, a hold or pause with its reason, and anything that made the project late. The original plan stays visible as a ghost, so the viewer sees the project stretch and what caused it. The viewer can pause, change the speed, and jump to any day or to the next highlight. The replay ends on a summary: the original end date, the current end date, and the days added by each cause. It shows only what stakeholders can see. Visual quality is a core requirement: the animation must be smooth, polished, and visually pleasing.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): Solutions "Project history log" and "Stakeholder view: only what concerns them" — the life span is built from the history log and shows only shared items.
- Open questions: none

### Access by role and owning general department
- Type: Sub-solution
- Description: Roles: (1) GDAI project managers manage their projects, keep them updated, and approve developer progress. (2) Developers report progress on their assigned phases. (3) Business analysts see the projects they are assigned to, report on their phases, and can add project documents (for example the BA analysis document), but have no project-manager rights. (4) Business users see only projects owned by their general department; decision makers see all projects. Both can see the names of the project managers (business side and GDAI) but never the names of the resources (tech leads, developers, BAs). Business users and decision makers only view: they never enter data, requests, or input of any kind. Each project also has a business project manager, an optional vice project manager on the business side, and a GDAI technical project manager. (5) Super admin: full access across the tool, and the only role that can permanently delete a project (see "Archive and permanent delete"). A single fixed role, held by the tool's owner.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): Solutions "Department portfolio view", "Workload indicator on the department-wide view", and "Stakeholder view: only what concerns them" — the same rule applies to every view, and it is the base for what stakeholders see.
- Open questions: Are the business-side project manager and vice project manager view-only like the other business users?

### Stakeholder view: only what concerns them
- Type: Solution
- Description: Stakeholders get a view built for them, showing only what concerns them. Each kind of information has a default, shared or internal. Shared by default: status, phases, health markers (including waiting on the business), hold reasons, decisions that affect the project, change requests, and the additional requirements raised by the business, each kept with its date. Internal by default: the names of resources, individual workload, and internal notes. The project manager can override the default for any single item. Once "Landing page" (see above, in this same draft) routes by role, this is the landing view for business users.
- Home parent (suggestion only): Problem "Stakeholders can't be shown only what concerns them"
- Also serves (suggestion only): none
- Open questions: none

### Shared or internal, per item
- Type: Sub-solution
- Description: Every entry (a document, a decision, a meeting, a note, a marker) carries a shared or internal setting. The project manager can change it at any time.
- Home parent (suggestion only): Solution "Stakeholder view: only what concerns them"
- Also serves (suggestion only): none
- Open questions: none

### Central project file repository
- Type: Solution
- Description: All project files in one place with context and history, and the upload date recorded, ready for anyone who takes over. Project managers and business analysts can add documents (for example the BA analysis document).
- Home parent (suggestion only): Problem "Project files and context depend on each project manager"
- Also serves (suggestion only): Problem "No history log for projects" — official documents and letters are stored here with their dates.
- Open questions: none

### Second project manager and takeover
- Type: Sub-solution
- Description: A project can have a second project manager with the same rights, so nothing needs to happen when one is away. If a project manager is pulled from a project entirely, any other project manager can take their place. Because the history, attachments, and context are all in the tool, no handover steps are needed.
- Home parent (suggestion only): Solution "Central project file repository"
- Also serves (suggestion only): none
- Open questions: none

### Meeting records
- Type: Sub-solution
- Description: The project manager can create a meeting and record everything from it in one place, linked to the project or projects it concerns: the date, who attended, the key points, the decisions made, and the actions that came out of it. Each decision recorded in a meeting also appears in the decision log.
- Home parent (suggestion only): Solution "Central project file repository"
- Also serves (suggestion only): Solutions "Show the price of a change across all projects before it is confirmed" and "Project history log" — its decisions feed the decision log. Meeting notes are also project context that survives a handover, and part of the project's history.
- Open questions: Are actions just listed, or do they have an owner and a due date and get tracked until done?

### Attach documents to projects and phases
- Type: Sub-solution
- Description: Official documents and letters are attached to the project or to one of its phases, for example the BA analysis document attached to the analysis phase. Each document keeps two dates: when it was created and when it was uploaded. This applies to every document in the project, including the official letters received about a project (updates, approvals, orders).
- Home parent (suggestion only): Solution "Central project file repository"
- Also serves (suggestion only): Solution "Project history log" — every attachment appears in the log with its dates.
- Open questions: none

### Project history log
- Type: Solution
- Description: A dated log for every project of everything that happens to it: the requirement given, the change request and its approval, a hold ordered and approved, decisions and meetings, edits to a project's fields, and every document attached. It is built from records kept elsewhere in the tool, so nothing is entered twice and nothing is lost when people change.
- Home parent (suggestion only): Problem "No history log for projects"
- Also serves (suggestion only): none
- Open questions: none

### Show the impact of new requirements before work starts
- Type: Solution
- Description: New requirements are written down, even if out of scope, and estimated in development days manually. Before work starts, the tool adds those days to the timeline and highlights them as a new requirement, so stakeholders see the impact visually.
- Home parent (suggestion only): Problem "Requirements keep being added with no visible cost"
- Also serves (suggestion only): none
- Open questions: none

### Log a new requirement with its estimated development days
- Type: Sub-solution
- Description: The team enters the requirement, who gave it, the date it was given, and its manual estimate in development days.
- Home parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Also serves (suggestion only): Solution "Project history log" — the date a requirement was given goes on record.
- Open questions: none

### Highlight the impact
- Type: Sub-solution
- Description: The impact of a change is highlighted and animated where it lands: the extra days on the project's own timeline, and every affected project on the department-wide view. (Merged from "Highlight the added days on the timeline" and "Animated, highlighted impact on the department-wide view" — one mechanism at two scales.)
- Home parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Also serves (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Open questions: none

### Original plan vs current plan
- Type: Sub-solution
- Description: When the end date is first set, the original plan is saved. The timeline shows it beside the current plan, so everything added or delayed since (new requirements, pulled resources) shows as the gap between the two. The end date only moves when the project manager confirms a change.
- Home parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Also serves (suggestion only): Solutions "Live project status timeline" and "Show the price of a change across all projects before it is confirmed" — the timeline shows both plans, and every confirmed delay adds to the gap.
- Open questions: Is the original plan fixed for good once set, or can it be reset?

### Show the price of a change across all projects before it is confirmed
- Type: Solution
- Description: Any change that affects other projects (for example moving resources to a new high-priority project) is shown on the department-wide view. The price is the delay caused to the affected projects, calculated automatically (see "Automatic pull and delay calculation").
- Home parent (suggestion only): Problem "The cost of priority shifts is invisible"
- Also serves (suggestion only): Problems "Requirements keep being added with no visible cost" and "Stakeholders don't see the pile-up of concurrent projects" — the same preview-then-confirm mechanism covers all three.
- Open questions: none

### Automatic pull and delay calculation
- Type: Sub-solution
- Description: When a new project is created and a chosen resource is already working on another project in the same time frame, he is pulled from that project to the new one. The tool calculates the development days he spends on the new project; his previous project pauses for the same number of days, and that is its delay. The delay is calculated automatically, but the pull is never applied automatically: the tool first shows the price and asks for confirmation. Most projects have one developer, so the previous project simply pauses for the days he is pulled. In the rare case of more than one developer, the user chooses: pause the whole project, or let the other developer continue, which makes the due date longer. Depends on "Resource pool".
- Home parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Also serves (suggestion only): none
- Open questions: When the other developer continues, how does the tool estimate the longer due date? (Not needed until feature design.)

### Price shown, confirm before applying
- Type: Sub-solution
- Description: The price of a change is shown before it is confirmed, and the tool asks for confirmation. Nothing changes until the user confirms, so decision makers can see and understand the price and decide in real time whether it is worth it.
- Home parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Also serves (suggestion only): Solution "Show the impact of new requirements before work starts" — a new requirement is confirmed the same way.
- Open questions: none

### Decision log
- Type: Sub-solution
- Description: Every confirmed change is recorded (a delay, an added requirement, or a hold ordered and approved): what changed, the price that was shown (days of delay), who decided (picked from a list of names with their position), the date, and an attachment such as an official letter. The history behind any decision that impacted the project is always visible: when someone later asks why a project is late, the decision, who made it, and its price are all on record.
- Home parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Also serves (suggestion only): Solutions "Show the impact of new requirements before work starts" and "Project history log" — added requirements are confirmed and recorded the same way, and every decision is part of the project's history.
- Open questions: The drop-down needs a list of people and their positions. Is it the same list used for the access rules (business users and decision makers), and who keeps it up to date?

### Project priority
- Type: Sub-solution
- Description: Every project has a priority: low, normal, high, or the special level crucial. Crucial is reserved for an order from the decision makers or someone with power, and it outranks every other level; it is recorded with who ordered it, their position, and the official letter if there is one. The portfolio view sorts by it. When a resource is pulled, the tool suggests pulling from the lowest-priority project and shows that in the price. Priority changes are recorded in the decision log with who decided.
- Home parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Also serves (suggestion only): Solution "Department portfolio view" — the view sorts by priority.
- Open questions: none

### Workload indicator on the department-wide view
- Type: Solution
- Description: Show the department's load by quarter (zoomable to month) on the department-wide view. Load is the development days of all assigned work divided by the development days the resource pool has available in that period; over 100% means the department has more work than resources. Work on projects put on hold still counts as assigned workload, so the true demand stays visible. Colored from green to red. Needs development-day estimates per project and data from the "Resource pool". A project without an estimate still counts as a project but adds no effort to the load. The what-if preview when new work is added belongs to "Show the price of a change across all projects before it is confirmed", which shows the load rising before confirmation.
- Home parent (suggestion only): Problem "Stakeholders don't see the pile-up of concurrent projects"
- Also serves (suggestion only): none
- Open questions: With all roles in the pool, is the load shown per role (developers, BAs, and so on) or as one overall figure? Do planned projects that have no decision to start yet count toward the load?

### Capacity check in the yearly plan
- Type: Sub-solution
- Description: While the yearly plan is built, each quarter shows its load against capacity, the same indicator used elsewhere. Adding a project to a quarter makes the load rise before decision makers approve the plan. A rough size in development days can be given when a project is logged, but not always. A project without a size still counts as a project in its quarter, but its effort is not included in the load, and the quarter shows how many unsized projects it holds.
- Home parent (suggestion only): Solution "Workload indicator on the department-wide view"
- Also serves (suggestion only): Solution "Department portfolio view" — it lives inside the yearly plan.
- Open questions: none
