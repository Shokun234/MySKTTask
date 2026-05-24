## 2025-05-14 - Search Filter Bottlenecks
**Learning:** Joining multiple object fields into a single string for search filtering (`[a, b, c].join(' ').includes(q)`) is a major performance anti-pattern. It forces large string allocations and redundant `toLowerCase()` calls on every iteration.
**Action:** Use individual field checks and early-exit logic (`field1.includes(q) || field2.includes(q)`) to minimize memory pressure and CPU cycles.

## 2025-05-14 - Dangers of Naive Date Caching
**Learning:** Caching a "today" date string in a global variable without an automatic invalidation strategy (e.g., at midnight) can lead to stale data if the application stays open for long periods.
**Action:** Only cache such values within a single logical operation (like a render pass) or use a robust invalidation mechanism if global caching is necessary.

## 2025-05-24 - Redundant Array Iterations
**Learning:** Performing multiple `.filter().length` calls on the same large array (e.g., for dashboard stats) scales poorly (O(kN)). Consolidating these into a single `forEach` or `reduce` pass is significantly more efficient.
**Action:** Use a single iteration pass when calculating multiple derived metrics from the same data source.
