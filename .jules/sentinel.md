## 2025-05-15 - Prevent Admin Mode Bypass via Console

**Learning**
Clientside global variables like `adminMode` can be easily manipulated by users through the browser's developer console, allowing them to bypass simple authentication checks.

**Action**
Encapsulated the entire application logic within an Immediately Invoked Function Expression (IIFE) to remove sensitive variables from the global scope. Explicitly exposed only the necessary functions to the `window` object that are required for HTML event handlers and testing.

## 2026-05-25 - Prevent Protocol-based XSS and ID Injection

**Vulnerability:**
1. Protocol-based XSS via  URIs in homework attachments and summary links.
2. Potential XSS via unescaped fallback strings in the  function when parsing invalid date inputs.
3. ID injection risks when using unsanitized IDs from external sources (Google Sheets) in HTML event handlers.

**Learning:**
Relying solely on  for attribute values is insufficient for  attributes, as it doesn't block dangerous protocols like . Furthermore, fallback values in formatting functions must always be escaped if they can contain user-controlled data.

**Prevention:**
1. Use a  helper to whitelist safe protocols (, , , ) for all user-provided links.
2. Use a  helper to restrict identifiers to alphanumeric characters, preventing attribute breakout or injection in event handlers.
3. Ensure all fallback paths in template helpers (like ) use proper HTML escaping.

## 2026-05-25 - Prevent Protocol-based XSS and ID Injection

**Vulnerability:**
1. Protocol-based XSS via `javascript:` URIs in homework attachments and summary links.
2. Potential XSS via unescaped fallback strings in the `thaiDate` function when parsing invalid date inputs.
3. ID injection risks when using unsanitized IDs from external sources (Google Sheets) in HTML event handlers.

**Learning:**
Relying solely on `esc()` for attribute values is insufficient for `href` attributes, as it doesn't block dangerous protocols like `javascript:`. Furthermore, fallback values in formatting functions must always be escaped if they can contain user-controlled data.

**Prevention:**
1. Use a `safeUrl` helper to whitelist safe protocols (`http`, `https`, `mailto`, `tel`) for all user-provided links.
2. Use a `safeId` helper to restrict identifiers to alphanumeric characters, preventing attribute breakout or injection in event handlers.
3. Ensure all fallback paths in template helpers (like `thaiDate`) use proper HTML escaping.
