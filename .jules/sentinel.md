## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2025-05-16 - URL Sanitization Beyond HTML Escaping
**Vulnerability:** XSS via `javascript:` protocol in homework attachments and summary links.
**Learning:** Standard HTML escaping (`esc`) only prevents attribute breakout; it does not block execution of dangerous protocols within `href` attributes. User-controlled URLs must be validated against a protocol allowlist.
**Prevention:** Implement and enforce a `safeUrl` helper that restricts links to `http:`, `https:`, `mailto:`, `tel:`, or relative paths, and apply it to all dynamic links in the UI.
