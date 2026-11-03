// Keep the canonical redirect in HTML for production, but return preview
// submissions to the preview rather than an as-yet unpublished public page.
(() => {
  const { hostname, origin } = window.location;
  const isPreview = hostname.endsWith('.replit.dev')
    || hostname === 'localhost'
    || hostname === '127.0.0.1';

  if (isPreview) {
    const nextField = document.querySelector('input[name="_next"]');
    if (nextField) {
      nextField.value = new URL('/handbook/thank-you/', origin).href;
    }
  }
})();
