## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2024-05-24 - Comprehensive XSS Defense and Secure ID Handling

**Vulnerability:**
1. Potential for `javascript:` URI injection in attachment and summary links.
2. Risk of attribute-breakout XSS when interpolating unvalidated IDs into `onclick` handlers.
3. Unsanitized rendering of malformed date strings in `thaiDate` error path.

**Learning:**
Relying solely on string escaping (`esc`) is insufficient for dangerous attributes like `href` or complex event handler strings. A combination of schema whitelisting (`safeUrl`) and moving state to data-attributes (`dataset.id`) provides a much more robust defense.

**Prevention:**
1. Use `safeUrl` for all external links to block non-standard protocols.
2. Use `safeId` to ensure identifiers follow a strict alphanumeric/separator format.
3. Avoid JS-string interpolation in HTML attributes; prefer `data-*` attributes and retrieve them via the event object or `this`.
