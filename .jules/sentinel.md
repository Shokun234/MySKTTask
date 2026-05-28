## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2025-05-16 - Sanitization of User-Controlled IDs and URLs

**Vulnerability:**
Attacker-controlled IDs could break out of HTML attribute strings (e.g., in `onclick` handlers), and `javascript:` protocols in attachment links enabled XSS.

**Learning:**
Even when using `esc()`, interpolating raw IDs into event handler strings (like `onclick="func('${id}')"`) is dangerous if the ID contains a single quote. Furthermore, standard HTML escaping does not block dangerous URI protocols.

**Prevention:**
Implement a `safeId` helper to restrict IDs to alphanumeric/dash/underscore characters and a `safeUrl` helper to whitelist safe protocols (`http:`, `https:`, etc.). Apply these filters at the data normalization layer and during rendering of sensitive attributes.
