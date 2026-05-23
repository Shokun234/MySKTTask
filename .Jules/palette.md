## 2025-05-14 - Interactive Toasts for Immediate Feedback
**Learning:** Providing an immediate "Undo" button within the success toast of a destructive or reversible action is significantly more discoverable and pleasant than directing users to an "Admin" or "Toolbar" menu. It reduces the cognitive load of fixing mistakes.
**Action:** When implementing toasts for reversible actions (like marking a task as done or deleting an item), always include a functional action button in the toast if possible.

## 2025-05-14 - Semantic Interactivity for Divs
**Learning:** In simple JS/HTML apps, developers often use `onclick` on `div` elements. This breaks keyboard navigation. Adding `role="button"`, `tabindex="0"`, and an `onkeydown` listener for Enter/Space makes these elements accessible without a full refactor to semantic `<button>` tags which might break existing layout.
**Action:** Always audit interactive `div` or `span` elements and apply proper ARIA roles and keyboard support.
## 2025-05-15 - Improved Admin Security and Access Control

**Learning/Action**
Encapsulated app logic in an IIFE to prevent console-based state manipulation. This improves security by ensuring that internal flags like `adminMode` cannot be accessed or modified by end-users.

## 2025-05-14 - Visual Noise Reduction via Conditional Badges
**Learning:** Constant "0" badges in navigation items create visual clutter and can be perceived as an "error" or a "missing piece" by users. Hiding the badge entirely when there are no items (count is 0) improves focus and makes the interface feel cleaner.
**Action:** When implementing badges for task lists or notifications, ensure they are conditionally rendered or hidden when the count is zero.

## 2025-05-16 - Contextual Relative Dates and Accessible Toggles
**Learning:** For a student-focused task manager, relative dates like "วันนี้" (Today) or "พรุ่งนี้" (Tomorrow) are much more intuitive than full dates for immediate deadlines. Additionally, icon-only buttons (like theme toggles) MUST have dynamic ARIA labels that describe the *action* or *target state* to be accessible to screen readers.
**Action:** Use relative date labels for short-term deadlines (±3 days) to reduce cognitive load. Always add and update `aria-label` on icon-only toggle buttons when their state changes.
