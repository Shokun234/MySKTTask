## 2025-05-15 - [Secret Handling]
**Vulnerability:** Hardcoded administrative PIN in plaintext in client-side code.
**Learning:** Even in static client-side applications where "absolute" security is impossible against a determined user, storing secrets in plaintext allows for trivial discovery via source inspection.
**Prevention:** Always use hashing (like SHA-256) for secrets even in client-side code to raise the bar for attackers and follow security best practices.
