## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2025-05-23 - Prevent XSS via URI Schemes and Attribute Injection
**Vulnerability:** User-provided links allowed dangerous protocols like `javascript:`, and homework IDs were directly interpolated into `onclick` attributes.
**Learning:** Even with HTML escaping, direct interpolation into URI-sensitive attributes (href) or JS-sensitive attributes (onclick) remains risky if the content itself can be a payload or break the attribute context.
**Prevention:** Use a `safeUrl` allowlist for protocols and prefer DOM-based data retrieval (`dataset`) over string interpolation in event handlers.
