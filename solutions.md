# Solutions

Holds solutions, their sub-solutions, and the features that implement them.

- A solution serves a problem.
- A sub-solution serves a solution; its ID includes the parent's ID.
- A feature serves a solution or sub-solution and records its location in the page design.

**Entry format**

```
## S-001: Solution title
- Idea:
- Serves: P-001

### S-001.1: Sub-solution title
- Idea:
- Serves: S-001

#### F-001: Feature title
- Description:
- Serves: S-001.1
- Design location:
```

---
