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
