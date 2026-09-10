export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    if (!env.N8N_WEBHOOK_URL) {
      return json({ ok: false, error: 'Missing N8N_WEBHOOK_URL' }, 500);
    }

    const body = await request.json();

    // Honeypot anti-spam.
    if (body.website) return json({ ok: true }, 200);

    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim();
    const city = String(body.city || '').trim();
    const project = String(body.project || '').trim();

    if (!name || !phone) {
      return json({ ok: false, error: 'Name and phone are required' }, 400);
    }

    const payload = {
      source: 'llmedia-cloudflare-template',
      name,
      phone,
      email,
      city,
      project,
      page: body.page || '',
      submitted_at: body.submitted_at || new Date().toISOString(),
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

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}
