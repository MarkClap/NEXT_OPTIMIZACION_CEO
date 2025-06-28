// app/api/sitemap/route.ts
const BASE_URL = "https://621f-2800-200-e660-d-8425-74ae-adda-78f0.ngrok-free.app";

export async function GET() {
  const urls = ["/", "/blog", "/contact"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
    .join("")}
</urlset>`;

  // Asegúrate de que el Content-Type sea correcto:
return new Response(sitemap, {
  headers: {
    'Content-Type': 'application/xml', // Cambia de 'text/xml'
  },  
});
}