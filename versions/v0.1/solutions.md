# Solutions

Holds solutions, their sub-solutions, and the features that implement them.

- "Serves" is the home parent: the one that gives the item its place and ID.
- "Also serves" lists any other parents. Write each idea once and reference it; never duplicate.
- A sub-solution's ID includes its home parent's ID.
- A feature records its location in the page design.

**Entry format**

```
## S-001: Solution title
- Idea:
- Serves: P-001
- Also serves: P-006

### S-001.1: Sub-solution title
- Idea:
- Serves: S-001
- Also serves: S-007

#### F-001: Feature title
- Description:
- Serves: S-001.1
- Also serves:
- Design location:
```

---

## S-001: Landing page
- Idea: The first screen anyone sees when they open the tool. It reads who is signed in and routes them straight to what matters to them — a project manager to "Project manager home dashboard"; other roles to their own view once those exist. There is no shared, generic home screen to sit through first.
- Serves: P-001
- Also serves: none

#### F-001: Identify the visitor by role
- Description: The landing page shows a role picker. Clicking a role signs the visitor in as that role for the session — the prototype's stand-in for real authentication. For v0.1 only "Project manager" is a real, functional choice.
- Serves: S-001
- Also serves: none
- Design location: Landing page

#### F-002: Route project manager to their dashboard
- Description: Clicking "Project manager" on the role picker routes straight to "Project manager home dashboard".
- Serves: S-001
- Also serves: S-003
- Design location: Landing page

#### F-003: Placeholder for other roles
- Description: Clicking any role other than "Project manager" shows a placeholder screen, not a real view — acknowledges the choice without functionality, since only the project-manager route has a built destination in v0.1.
- Serves: S-001
- Also serves: none
- Design location: Landing page

## S-002: Create and manage projects
- Idea: One place where the project manager creates a project and manages it through its life. Creating a project sets its name, owning general department, business and GDAI project managers, start quarter (no end date needed yet), and phases with planned time frames. From then on the project is managed here: progress, changes, and launch. A project is always in one of four states: planned (with a future start date, or with no start date because no decision to start has been made yet), active, on hold, or launched. A project on hold always has a reason: waiting for business approval, waiting for a requirement, resources pulled to another project, or another reason. The reason and the days on hold show on the timeline. Some fields can be edited after creation; every edit is recorded in the project's history log. A launched project is done — on the year-long department-wide view it is marked as finished, distinct from active and planned projects.
- Serves: P-001
- Also serves: P-006

#### F-004: Create a project — core details
- Description: The create-project form's core fields: project name; start date and end date (both optional); categorization (strategic or operational); project category (criminal, customer, or management — a fixed list, no custom values); goal (digitalization of internal operations, or other); requested — internal, external, or both (checkboxes); business user, which is the owning general department (dropdown; a new department can be added to the list inline); beneficiary (employees or customers); background (text); summary (text).
- Serves: S-002
- Also serves: none
- Design location: Create-project form

#### F-005: Definition tables: scope, problem statements, objectives
- Description: Three add-to-table lists on the create-project form. Each is a text box with an "Add" button: scope points are added as a numbered list (1, 2, 3…); problem statements and objectives are each added the same way, free text per entry, as many as needed.
- Serves: S-002
- Also serves: none
- Design location: Create-project form

### S-002.1: Project phases
- Idea: Phases are fully flexible: nothing is always the same, and a small project can skip some. When creating a project, the project manager adds its phases and a planned time frame for each (for example, analysis: five days). Each project picks and orders its own phases (and can add custom ones), and the timeline shows them. The project's end date never moves automatically when a phase takes fewer or more days than planned. Known phases: requirements gathering, BA analysis document (approved by the business user), development planning (optional; sets the timeline and end date), development, UAT, security testing, deployment, pilot on a small sample. Security testing and deployment are mandatory in the department's process.
- Serves: S-002
- Also serves: none

#### F-006: Timeline / phase builder
- Description: While creating or editing a project, phases are added as blocks chosen from "Project phases"'s known list (or a custom one) and shown as colored bars on a horizontal timeline. Each phase optionally takes a planned number of work days. The timeline's axis uses the project's start and end dates if they were set; otherwise it is built from the summed work-days of the phases added; if neither is available, it stays empty.
- Serves: S-002.1
- Also serves: none
- Design location: Create-project form, phases section

## S-003: Project manager home dashboard
- Idea: Reached through the tool's "Landing page" once it identifies the visitor as a project manager. They land on a personal dashboard listing every project they currently manage. It is a page the project manager chooses to open: nothing here is pushed to them, they see it because they came to look.
- Serves: P-001
- Also serves: P-003

### S-003.1: At-a-glance project status
- Idea: Each project on the dashboard shows its most recent and most important action, whether it is close to finishing its current phase or close to starting the next one, and — if it is on hold — how many days it has been on hold and whether releasing it needs an action from the project manager, read from the hold's reason.
- Serves: S-003
- Also serves: none
