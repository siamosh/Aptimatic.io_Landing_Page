---
name: FormSubmit email limitations
description: Provider constraint affecting visitor autoresponses and lead-capture copy
---

FormSubmit does not send visitor autoresponses when reCAPTCHA is disabled or when forms submit through AJAX.

**Why:** FormSubmit's published documentation explicitly states this limitation. A configured `_autoresponse` field alone is not evidence that visitors will receive email.

**How to apply:** Before promising an emailed resource, confirm the owner accepts CAPTCHA or chooses a different delivery service. If CAPTCHA must remain off, provide the download on screen and avoid claiming an email was sent. See https://formsubmit.co/ for current provider documentation.

The owner explicitly chose CAPTCHA-enabled submissions for the AI Handbook flow.

**Why:** The owner preferred automatic visitor email replies over a CAPTCHA-free form after learning the provider's limitation.

**How to apply:** Preserve CAPTCHA for handbook submissions unless the owner changes that decision or email delivery is moved to another provider. This decision does not change the homepage contact form.

Review-stage form testing must not depend on unpublished public pages.

**Why:** The owner encountered a 404 when a preview submission redirected to the public domain before the handbook pages were published.

**How to apply:** Keep preview redirects on the preview origin and preserve the canonical production redirect for live use. Public links in autoresponse emails still require the pages to be published, and PDF delivery requires the owner's uploaded PDF.
