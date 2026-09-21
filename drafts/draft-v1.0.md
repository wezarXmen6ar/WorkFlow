# Draft for v1.0

**Status:** Active. This draft will be pushed as v1.0.

Staging area for anything discussed that could go into [objectives.md](../objectives.md), [problems.md](../problems.md), or [solutions.md](../solutions.md).

Nothing here has an ID. Entries move to the main documents only after the user's green light, and get an ID and a "Serves" parent at that point. Once this draft is pushed, this file is finished and never edited again; anything new goes into the next draft file.

**Entry format**

```
### Title
- Type: Objective | Problem | Solution | Sub-solution | Feature
- Description:
- Likely parent (suggestion only):
- Open questions:
```

---

## Overview tree

```
Objective: Manage all department projects in one place
 ├─ Problem: No department-wide view of all projects
 │   └─ Solution: Department portfolio view
 │       └─ Sub-solution: Yearly plan by quarter
 └─ Problem: Hard to see what each team member is working on
     ├─ Solution: Resource assignment and workload tracking
     └─ Solution: Developer progress reporting

Objective: Present accurate project status to stakeholders
 └─ Problem: No single source of truth for project status
     └─ Solution: Live project status timeline
         ├─ Sub-solution: Project phases
         └─ Sub-solution: Access by owning general department

Objective: Document everything about each project
 └─ Problem: Project files and context depend on each project manager
     └─ Solution: Central project file repository

Objective: Protect the team from scope creep and project pressure
 ├─ Problem: Requirements keep being added with no visible cost
 │   └─ Solution: Show the impact of new requirements before work starts
 │       ├─ Sub-solution: Log a new requirement with its estimated development days
 │       └─ Sub-solution: Highlight the added days on the timeline
 ├─ Problem: Stakeholders don't see the pile-up of concurrent projects
 │   └─ Solution: Workload indicator on the department-wide view
 └─ Problem: The cost of priority shifts is invisible
     └─ Solution: Show the price of a change across all projects before it is confirmed
         ├─ Sub-solution: Animated, highlighted impact on the department-wide view
         └─ Sub-solution: Price shown before confirmation
```

## Objectives

### Manage all department projects in one place
- Type: Objective
- Description: One tool to manage every project the department has worked on, is working on, and will work on, including the yearly plan and the big picture.
- Likely parent (suggestion only): none (top layer)
- Open questions: none

### Present accurate project status to stakeholders
- Type: Objective
- Description: Show stakeholders, decision makers, and business users the real status of projects from one source, and show the team's hard work.
- Likely parent (suggestion only): none (top layer)
- Open questions: none

### Document everything about each project
- Type: Objective
- Description: Keep all project documents, context, and history in one place so anyone can take over a project.
- Likely parent (suggestion only): none (top layer)
- Open questions: none

### Protect the team from scope creep and project pressure
- Type: Objective
- Description: Make the cost of new requirements, new priorities, and project pile-up visible to stakeholders and decision makers.
- Likely parent (suggestion only): none (top layer)
- Open questions: none

## Problems

### No department-wide view of all projects
- Type: Problem
- Description: Past, current, and planned projects are not visible in one place, so planning the year by quarter and seeing the big picture is hard.
- Likely parent (suggestion only): Objective "Manage all department projects in one place"
- Open questions: none

### Hard to see what each team member is working on
- Type: Problem
- Description: It is difficult to keep up with what developers, business analysts, tech leads, and project managers are working on.
- Likely parent (suggestion only): Objective "Manage all department projects in one place"
- Open questions: none

### No single source of truth for project status
- Type: Problem
- Description: Presentations are prepared manually, differ by preparer, and sometimes conflict. Finished projects get reported as unfinished because there is no central status.
- Likely parent (suggestion only): Objective "Present accurate project status to stakeholders"
- Open questions: none

### Project files and context depend on each project manager
- Type: Problem
- Description: Files, context, and history rely on each project manager's own organization, so handover during leave is unreliable.
- Likely parent (suggestion only): Objective "Document everything about each project"
- Open questions: none

### Requirements keep being added with no visible cost
- Type: Problem
- Description: Business users and decision makers add requirements mid-project without seeing the cost to the timeline, yet still expect the agreed due date.
- Likely parent (suggestion only): Objective "Protect the team from scope creep and project pressure"
- Open questions: none

### Stakeholders don't see the pile-up of concurrent projects
- Type: Problem
- Description: Business users and decision makers expect many projects to run at once without realizing the pressure and accumulation.
- Likely parent (suggestion only): Objective "Protect the team from scope creep and project pressure"
- Open questions: none

### The cost of priority shifts is invisible
- Type: Problem
- Description: When a new high-priority project pulls resources from a running one, stakeholders don't see the price of that decision and still expect the old project on time.
- Likely parent (suggestion only): Objective "Protect the team from scope creep and project pressure"
- Open questions: none

## Solutions and sub-solutions

### Department portfolio view
- Type: Solution
- Description: One view of all department projects (past, current, planned), with progress rolled up for the whole department, not only per project.
- Likely parent (suggestion only): Problem "No department-wide view of all projects"
- Open questions: none

### Yearly plan by quarter
- Type: Sub-solution
- Description: GDAI builds the yearly plan by quarter and decision makers approve it. A project can be logged with a start quarter and no end date; the end date is set later (see "Project phases").
- Likely parent (suggestion only): Solution "Department portfolio view"
- Open questions: none

### Resource assignment and workload tracking
- Type: Solution
- Description: Record which resources (developers, business analysts, tech leads, project managers) are assigned to which projects.
- Likely parent (suggestion only): Problem "Hard to see what each team member is working on"
- Open questions: none

### Developer progress reporting
- Type: Solution
- Description: Developers report their progress on the development phase of the projects they work on.
- Likely parent (suggestion only): Problem "Hard to see what each team member is working on"
- Open questions: none

### Live project status timeline
- Type: Solution
- Description: One live status timeline per project, viewable like a movie of its life cycle. Read-only for stakeholders.
- Likely parent (suggestion only): Problem "No single source of truth for project status"
- Open questions: none

### Project phases
- Type: Sub-solution
- Description: The timeline shows these phases: requirements gathering, BA analysis document (approved by the business user), development planning (sets the timeline and end date), development, UAT (optional), security testing (mandatory), deployment (mandatory), pilot on a small sample (optional, at the end). Phases can vary slightly per project.
- Likely parent (suggestion only): Solution "Live project status timeline"
- Open questions: Is the phase order right? Are requirements, analysis, planning, and development always present?

### Access by owning general department
- Type: Sub-solution
- Description: The business side is read-only and sees only projects owned by their general department. Each project has a business project manager, an optional vice project manager who covers leave, and a GDAI technical project manager.
- Likely parent (suggestion only): Solution "Live project status timeline"
- Open questions: Do decision makers see all projects, or only their own general department's?

### Central project file repository
- Type: Solution
- Description: All project files in one place with context and history, and the upload date recorded, ready for anyone who takes over.
- Likely parent (suggestion only): Problem "Project files and context depend on each project manager"
- Open questions: none

### Show the impact of new requirements before work starts
- Type: Solution
- Description: New requirements are written down, even if out of scope, and estimated in development days manually. Before work starts, the tool adds those days to the timeline and highlights them as a new requirement, so stakeholders see the impact visually.
- Likely parent (suggestion only): Problem "Requirements keep being added with no visible cost"
- Open questions: none

### Log a new requirement with its estimated development days
- Type: Sub-solution
- Description: The team enters the requirement and its manual estimate in development days.
- Likely parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Open questions: none

### Highlight the added days on the timeline
- Type: Sub-solution
- Description: The extra days appear on the project timeline, highlighted as a new requirement, before the work starts.
- Likely parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Open questions: none

### Show the price of a change across all projects before it is confirmed
- Type: Solution
- Description: Any change that affects other projects (for example moving resources to a new high-priority project) is shown on the department-wide view. Same preview-then-confirm idea as "Show the impact of new requirements before work starts", so it could be built once and reused.
- Likely parent (suggestion only): Problem "The cost of priority shifts is invisible"
- Open questions: How is the price calculated? Does the user enter which resources and how many days move, and the tool shifts the affected due dates?

### Animated, highlighted impact on the department-wide view
- Type: Sub-solution
- Description: Every affected project is clearly highlighted and animated on the view of all projects.
- Likely parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Open questions: none

### Price shown before confirmation
- Type: Sub-solution
- Description: The price of the change is shown before it is confirmed, so decision makers can decide in real time whether it is worth it.
- Likely parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Open questions: none

### Workload indicator on the department-wide view
- Type: Solution
- Description: Show how many projects run at once per quarter on the department-wide view, so stakeholders see the pile-up of concurrent projects.
- Likely parent (suggestion only): Problem "Stakeholders don't see the pile-up of concurrent projects"
- Open questions: Proposed by Claude, not yet discussed with the user.
