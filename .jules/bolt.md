## 2025-05-14 - Search Filter Bottlenecks
**Learning:** Joining multiple object fields into a single string for search filtering (`[a, b, c].join(' ').includes(q)`) is a major performance anti-pattern. It forces large string allocations and redundant `toLowerCase()` calls on every iteration.
**Action:** Use individual field checks and early-exit logic (`field1.includes(q) || field2.includes(q)`) to minimize memory pressure and CPU cycles.

## 2025-05-14 - Dangers of Naive Date Caching
**Learning:** Caching a "today" date string in a global variable without an automatic invalidation strategy (e.g., at midnight) can lead to stale data if the application stays open for long periods.
**Action:** Only cache such values within a single logical operation (like a render pass) or use a robust invalidation mechanism if global caching is necessary.

## 2026-05-27 - Consolidated Dashboard Stats pass
**Learning:** Calculating multiple statistics (pending, overdue, done, and per-subject progress) using separate `.filter()` calls on the same array results in O(kN) complexity. As the array grows, these redundant passes add up.
**Action:** Use a single `forEach` or `reduce` pass to gather all required metrics in O(N) time. This is especially effective when child components (like progress bars) also need subset data.
