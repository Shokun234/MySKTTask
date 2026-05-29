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

## 2026-05-29 - Actionable Empty States for Better UX
**Learning:** When a user encounters an empty list or dashboard, providing a clear Call-to-Action (CTA) button within the empty state is far more helpful than just displaying a "no data" message. It guides the user on how to resolve the state (e.g., "Sync now" or "Add item") without them having to search the UI for the correct action button.
**Action:** Always enhance the 'empty' helper or component to support an optional action button with a clear label and relevant callback.
