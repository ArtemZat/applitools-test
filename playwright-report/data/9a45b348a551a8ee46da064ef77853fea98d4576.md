# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SauceDemo.spec.js >> SauceDemo
- Location: e2e\SauceDemo.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: "Checkout: Your Information"
    - generic [ref=e18]:
      - generic [ref=e19]:
        - textbox "First Name" [ref=e21]: "1111"
        - textbox "Last Name" [ref=e23]: "2222"
        - textbox "Zip/Postal Code" [ref=e25]: "3333"
      - generic [ref=e27]:
        - button "Go back Cancel" [ref=e28] [cursor=pointer]:
          - img "Go back" [ref=e29]
          - text: Cancel
        - button "Continue" [ref=e30] [cursor=pointer]
  - contentinfo [ref=e31]:
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "Twitter" [ref=e34]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e35]:
        - link "Facebook" [ref=e36]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e37]:
        - link "LinkedIn" [ref=e38]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e39]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```