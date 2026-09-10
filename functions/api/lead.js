export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    if (!env.N8N_WEBHOOK_URL) {
      return json({ ok: false, error: 'Missing N8N_WEBHOOK_URL' }, 500);
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return json({ ok: false, error: 'JSON required' }, 415);
    }

    const body = await request.json();

    // Honeypot anti-spam: bots often fill this hidden field.
    if (body.website) return json({ ok: true }, 200);

    const name = clean(body.name, 160);
    const phone = clean(body.phone, 80);
    const email = clean(body.email, 200);
    const city = clean(body.city, 160);
    const project = clean(body.project || body.service, 200);

    if (!name || !phone) {
      return json({ ok: false, error: 'Name and phone are required' }, 400);
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return json({ ok: false, error: 'Invalid phone number' }, 400);
    }

    // Preserve reusable form answers while ensuring server-owned fields cannot be spoofed.
    const answers = {};
    for (const [key, value] of Object.entries(body)) {
      if (['website', 'cf', 'user_agent', 'submitted_at'].includes(key)) continue;
      if (typeof value === 'string') answers[key] = clean(value, 2000);
      else if (Array.isArray(value)) answers[key] = value.slice(0, 30).map(v => clean(v, 500));
      else if (typeof value === 'number' || typeof value === 'boolean') answers[key] = value;
    }

    const payload = {
      ...answers,
      source: clean(body.source, 160) || 'llmedia-cloudflare-template',
      name,
      phone,
      email,
      city,
      project,
      page: clean(body.page || body.landing_url, 2000),
      landing_url: clean(body.landing_url || body.page, 2000),
      utm_source: clean(body.utm_source, 300),
      utm_medium: clean(body.utm_medium, 300),
      utm_campaign: clean(body.utm_campaign, 500),
      utm_term: clean(body.utm_term, 500),
      utm_content: clean(body.utm_content, 500),
      gclid: clean(body.gclid, 500),
      fbclid: clean(body.fbclid, 500),
      submitted_at: new Date().toISOString(),
      cf: request.cf || null,
      user_agent: request.headers.get('user-agent') || ''
    };

    const response = await fetch(env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return json({ ok: false, error: 'Upstream webhook failed' }, 502);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    return json({ ok: false, error: 'Unexpected error' }, 500);
  }
}

function clean(value, maxLength = 500) {
  if (value === null || value === undefined) return '';
  return String(value).trim().slice(0, maxLength);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}
