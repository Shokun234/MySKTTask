## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2025-05-16 - Prevent XSS via ID Injection and Malicious Links

**Vulnerability:** XSS via attribute breakout in inline event handlers and malicious `javascript:` URLs.
**Learning:** Interpolating user-controlled IDs into string-based event handlers (e.g., `onclick="delete('${id}')"`) is dangerous because single quotes in the ID can break out of the literal and execute arbitrary code.
**Prevention:** Use `data-id` attributes and DOM traversal (`this.closest(...).dataset.id`) to pass state to event handlers. Implement a `safeUrl` helper to block dangerous URI schemes.
