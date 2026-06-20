# Aptimatic Mobility Advisory Landing Page

This package contains a deployable MVP landing page for:

**Aptimatic Mobility Advisory**  
U.S. Market Entry & Business Development for Automotive Software Companies

## Files

- `mobility/index.html` — main landing page for `aptimatic.io/mobility/`
- `mobility/styles.css` — styling for the landing page
- `thank-you/index.html` — thank-you page for Netlify form submissions
- `assets/favicon.svg` — simple Aptimatic favicon

## Deployment

### For an existing static site

Copy the `mobility` folder, `thank-you` folder, and `assets/favicon.svg` into the root of your existing Aptimatic website repository.

The page should then be available at:

`https://aptimatic.io/mobility/`

### Netlify form handling

The contact form is configured for Netlify Forms using:

```html
<form name="mobility-contact" method="POST" data-netlify="true" action="/thank-you/">
```

After deployment, submit a test message and check Netlify's Forms area.

## Items to customize before publishing

1. Confirm contact email. Current placeholder: `support@aptimatic.io`.
2. Replace the simple text-based Aptimatic mark if you have a production logo.
3. Add a scheduling link if you want the CTA to point to Calendly or another booking tool.
4. Add analytics if desired.
5. Review conflict-of-interest and employment restrictions before public outreach.

## Suggested CTA options

- Schedule a Market Entry Discussion
- Request Discussion
- Discuss a Market Entry Sprint

## Notes

The page intentionally avoids promising guaranteed introductions or guaranteed customer meetings. The positioning is focused on market-entry strategy, messaging, stakeholder planning, pipeline development support, and customer conversation preparation.
