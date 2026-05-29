## 2025-05-14 - Search Filter Bottlenecks
**Learning:** Joining multiple object fields into a single string for search filtering (`[a, b, c].join(' ').includes(q)`) is a major performance anti-pattern. It forces large string allocations and redundant `toLowerCase()` calls on every iteration.
**Action:** Use individual field checks and early-exit logic (`field1.includes(q) || field2.includes(q)`) to minimize memory pressure and CPU cycles.

## 2025-05-14 - Dangers of Naive Date Caching
**Learning:** Caching a "today" date string in a global variable without an automatic invalidation strategy (e.g., at midnight) can lead to stale data if the application stays open for long periods.
**Action:** Only cache such values within a single logical operation (like a render pass) or use a robust invalidation mechanism if global caching is necessary.

## 2026-05-29 - Dashboard Stats Consolidation
**Learning:** Computing multiple statistics (counts, per-group progress) by repeatedly filtering a large array is inefficient (O(kN)). These can be gathered in a single O(N) pass using a reducer or forEach loop.
**Action:** Consolidate statistics gathering into a single iteration pass for complex views like dashboards to reduce computation time from O(k*N + S*N) to O(N).
