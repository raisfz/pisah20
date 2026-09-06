export async function onRequestGet(context) {
  const host = context.request.headers.get("host");

  const body = `User-agent: *
Allow: /

Sitemap: https://${host}/sitemap.xml

`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "public, max-age=2592000"
    }
  });
}
