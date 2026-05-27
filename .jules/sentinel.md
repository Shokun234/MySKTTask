## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2026-05-27 - XSS via Direct ID Interpolation in Attributes

**Vulnerability:** Cross-Site Scripting (XSS) via attribute breakout and URI-based script execution.
**Learning:** Even when using `esc()` to encode HTML entities, interpolating user-controlled IDs directly into inline event handler strings (like `onclick="func('${id}')"`) remains dangerous because browsers decode these entities before executing the JS. Additionally, `esc()` does not prevent `javascript:` protocol execution in `href` attributes.
**Prevention:** Use a `dataset` pattern to store IDs in HTML (e.g., `data-id="${esc(id)}"`) and retrieve them via `this.closest('.hw').dataset.id` within the handler. Implement a `safeUrl` helper to strictly whitelist allowed protocols (http, https, mailto, tel) and sanitize dangerous ones to `about:blank`.
