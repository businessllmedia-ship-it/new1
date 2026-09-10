export async function onRequestGet(context) {
  const hasWebhook = Boolean(context.env.N8N_WEBHOOK_URL);

  return new Response(JSON.stringify({
    ok: true,
    service: 'llmedia-cloudflare-pages',
    webhook_configured: hasWebhook,
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}
