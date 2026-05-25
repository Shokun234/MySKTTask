## 2025-05-14 - Search Filter Bottlenecks
**Learning:** Joining multiple object fields into a single string for search filtering (`[a, b, c].join(' ').includes(q)`) is a major performance anti-pattern. It forces large string allocations and redundant `toLowerCase()` calls on every iteration.
**Action:** Use individual field checks and early-exit logic (`field1.includes(q) || field2.includes(q)`) to minimize memory pressure and CPU cycles.

## 2025-05-14 - Dangers of Naive Date Caching
**Learning:** Caching a "today" date string in a global variable without an automatic invalidation strategy (e.g., at midnight) can lead to stale data if the application stays open for long periods.
**Action:** Only cache such values within a single logical operation (like a render pass) or use a robust invalidation mechanism if global caching is necessary.

## 2026-05-25 - Consolidating Derived State Calculations
**Learning:** Performing multiple .filter().length passes or nested subject-specific filters for dashboard stats leads to O(kN) or O(S*N) complexity. This scales poorly as data grows.
**Action:** Use a single .forEach() or .reduce() pass to calculate all required counters and grouped statistics simultaneously, achieving true O(N) performance.
