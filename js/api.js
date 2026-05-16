/* WebBook SaaS — RESTful API helpers (newsletter, contact, signup) */
(function () {
  async function postRow(table, data) {
    try {
      const res = await fetch(`tables/${table}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return res.ok ? await res.json() : null;
    } catch (e) { return null; }
  }

  function bindForm(selector, table, msg) {
    document.querySelectorAll(selector).forEach(form => {
      if (form.dataset.bound) return;
      form.dataset.bound = '1';
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const obj = Object.fromEntries(fd.entries());
        obj.created_at = Date.now();
        const ok = await postRow(table, obj);
        const status = form.querySelector('[data-form-status]');
        if (status) {
          status.textContent = ok ? (msg || 'Thanks! We received your message.') : 'Something went wrong. Please try again.';
          status.className = 'text-sm mt-3 ' + (ok ? 'text-emerald-500' : 'text-rose-500');
        }
        if (ok) form.reset();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindForm('[data-newsletter]', 'wb_subscribers', 'Subscribed! Watch your inbox for monthly tips.');
    bindForm('[data-contact]',    'wb_contacts',    'Thanks — we\'ll reply within one business day.');
    bindForm('[data-join]',       'wb_signups',     'Welcome aboard! Check your inbox for next steps.');
    bindForm('[data-demo]',       'wb_demo_requests','Demo requested. We\'ll be in touch shortly.');
  });
})();
