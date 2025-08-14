// scripts/generate-sitemap.js
// Generates sitemap.xml for static export

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://saiinclusive.com'; // Change to your actual domain if needed
const PUBLIC_PATH = path.join(__dirname, '../public');
const APP_PATH = path.join(__dirname, '../app');

// List of static pages (add more if needed)
const staticPages = [
  '/',
  '/contact',
  '/services',
];

// Priority map for static pages
const priorities = {
  '/': '1.00',
  '/contact': '0.80',
  '/services': '0.80',
};
const changefreq = 'monthly';

// Optionally, scan for more static pages in app/
function getStaticPages() {
  const pages = [];
  const dirs = fs.readdirSync(APP_PATH, { withFileTypes: true });
  for (const dir of dirs) {
    if (dir.isDirectory()) {
      // Only add if contains page.tsx
      const pageFile = path.join(APP_PATH, dir.name, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        pages.push(`/${dir.name}`);
      }
    } else if (dir.isFile() && dir.name === 'page.tsx') {
      pages.push('/');
    }
  }
  return pages;
}

const allPages = Array.from(new Set([...staticPages, ...getStaticPages()]));
const now = new Date().toISOString();
const urls = allPages.map((page) => {
  return `  <url>\n    <loc>${DOMAIN}${page}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priorities[page] || '0.64'}</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n${urls}\n</urlset>\n`;

fs.writeFileSync(path.join(PUBLIC_PATH, 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated with', allPages.length, 'pages.');
