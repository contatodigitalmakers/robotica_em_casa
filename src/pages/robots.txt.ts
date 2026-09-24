import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () => {
  const corpo = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`;
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
