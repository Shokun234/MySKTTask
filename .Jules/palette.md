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

## 2025-05-16 - Actionable Empty States for Better Onboarding
**Learning:** Empty states without a clear path forward leave users stranded. Adding a prominent CTA button (e.g., "Sync Sheets" or "Add Item") within the empty state container transforms a dead end into a helpful guidance point.
**Action:** Always provide at least one relevant action button in empty state components.

## 2025-05-16 - Focus Preservation in Live Search
**Learning:** In vanilla JS apps that re-render large DOM chunks on every keystroke, the active search input often loses focus, breaking the user's flow. Manually restoring focus to the input immediately after the innerHTML update is a simple but critical fix for usability.
**Action:** Ensure search inputs are re-focused after live-filtering triggers a DOM update.
