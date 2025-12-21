🧭 EMPLOYEE HIERARCHY REACT PROJECT – MASTER PLAN

(Hands-on practice + interview preparation)

🎯 PROJECT GOALS

Hands-on React practice (senior-level)

Clear understanding of WHY each concept exists

Gradual evolution: simple → scalable → production-ready

Strong interview narrative

Deployed & shareable GitHub project

🧱 TECH STACK

React + TypeScript

Vite

Tailwind CSS (v3.4.19)

React Router v6

Context API → Redux Toolkit

Redux Thunk / Saga

Vitest (logic tests only)

GitHub + GitHub Pages / Netlify

🗂️ BRANCH STRATEGY (SIMPLIFIED)

main → stable

develop → active development (all commits here)

No feature branches (solo learning project)

=========================
PHASE 0 — PROJECT SETUP
=========================
Goal

Stable development environment.

Deliverables

Vite + React + TypeScript

Tailwind CSS configured correctly

Git + GitHub repo

Clean folder structure

App runs with Tailwind styles

Covered Topics

Vite vs CRA

Tailwind setup & PostCSS

ES modules vs CJS

Git fundamentals

=========================
PHASE 1 — LOCAL STATE + PROP DRILLING (COMPLETED)
=========================
Goal

Build full CRUD using local state and prop drilling to understand scalability issues.

Features

Routing (/employees, /hierarchy)

Navbar layout

Employee List Page

Employee Hierarchy Page (read-only JSON)

Add Employee form

Update Employee (inline edit)

Delete Employee

Flat employee model

Local state lifted to routing level

Heavy prop drilling

Explicitly NOT used

❌ Context
❌ Redux
❌ Global store

Why this phase matters

You feel the pain

You can justify Context / Redux in interviews

Interview Topics

Prop drilling

Lifting state up

Controlled components

UI state vs business state

Flat vs hierarchical data

=========================
PHASE 2 — CONTEXT API + REDUCER
=========================
Goal

Eliminate prop drilling and centralize state.

What Will Change

Introduce EmployeeContext

Use useReducer

Move CRUD logic out of routes

Pages consume context directly

Memoize context value

Custom hook: useEmployeeContext

Deliverables

EmployeeProvider

employeeReducer

Context-based CRUD

Clean routing

Same UI, better architecture

Interview Topics

Context re-render pitfalls

Why reducers scale

Why memoization is critical

Context vs Redux

=========================
PHASE 3 — HIERARCHY TREE (RECURSION + PERFORMANCE)
=========================
Goal

Render real employee hierarchy.

Features

Convert flat list → tree

Recursive <EmployeeNode />

Expand / collapse nodes

Memoized tree computation

Avoid unnecessary re-renders

Explicitly NOT stored

❌ Hierarchy in state (derived data only)

Interview Topics

Recursion in React

Derived state

Reconciliation

Memoization vs computation

=========================
PHASE 4 — VALIDATIONS + BUSINESS RULES
=========================
Goal

Add real-world constraints.

Rules to Add

Employee cannot report to themselves

Prevent circular hierarchy

Manager must exist

CEO has no manager

Optional max depth

Input validations

Placement

Business rules in reducer / service

UI shows errors

Interview Topics

Where validations should live

Business logic vs UI logic

Error handling patterns

=========================
PHASE 5 — CUSTOM HOOKS
=========================
Goal

Improve separation of concerns.

Hooks to Build

useEmployees()

useHierarchy()

useValidation()

useModal()

Interview Topics

Why custom hooks exist

Stale closures

Reusability

=========================
PHASE 6 — TESTING (LOGIC ONLY)
=========================
Goal

Test what matters.

Tests

Reducer tests

Tree conversion tests

Validation tests

Hook tests

Tools

Vitest

renderHook

Explicitly NOT doing

❌ DOM snapshot tests
❌ Cypress / Playwright

Interview Topics

What to test vs not test

Unit vs integration

Why logic tests give best ROI

=========================
PHASE 7 — REDUX TOOLKIT MIGRATION
=========================
Goal

Show scalable architecture evolution.

Steps

Replace Context with RTK

Create employeeSlice

Move reducer logic

Add selectors

Use Redux DevTools

Interview Topics

Context vs Redux

RTK benefits

Store design

Selectors & memoization

=========================
PHASE 8 — THUNK OR SAGA (SIDE EFFECTS)
=========================
Goal

Handle async & complex flows.

Use Cases

Async CRUD

Debounced search

Bulk updates

Retry logic

Choice

Thunk (simple)

Saga (advanced)

Interview Topics

Thunk vs Saga

Generator functions

Side-effect orchestration

=========================
PHASE 9 — PERFORMANCE OPTIMIZATION
=========================
Topics

React.memo

useCallback / useMemo

Code splitting

Lazy loading routes

Bundle analysis

Interview Topics

Render cycle

Wasted renders

When NOT to optimize

=========================
PHASE 10 — DEPLOYMENT + POLISH
=========================
Goal

Make it portfolio-ready.

Tasks

Deploy (Netlify / GitHub Pages)

README with architecture

Screenshots

Live demo link

Interview Topics

SPA routing issues

CI/CD basics

Build vs runtime config

🕒 TOTAL TIME ESTIMATE

Phase 0–3: ~2.5 hours

Phase 4–6: ~1 hour

Phase 7–10: ~1 hour

✅ HOW TO USE THIS PLAN

When you’re back:

Tell me the phase number

I will give:

Step-by-step instructions

Full code

Commit guidance

Interview explanations

Example:

“Start Phase 2”

👏 FINAL NOTE

You are doing this the right way:

Not rushing

Asking why

Building incrementally

Caring about architecture

This project will genuinely make you stand out in interviews.

Enjoy your break ☕
When you’re back, just say:

“Start Phase X”