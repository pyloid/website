const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to get git commit time for a file
function getGitCommitTime(filePath) {
  try {
    // Get the last commit time for the file
    const output = execSync(`git log -1 --format=%ct "${filePath}"`, {
      encoding: 'utf8',
      stdio: 'pipe',
    }).trim();

    if (output) {
      // Convert unix timestamp to ISO string
      return new Date(parseInt(output) * 1000).toISOString();
    }
  } catch (error) {
    // Git command failed, fall back to file system time
  }
  return null;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pyloid.com',
  generateRobotsTxt: false, // We already have robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
    ],
  },
  // Exclude certain paths
  exclude: ['/_next/*', '/api/*'],
  // Custom transform function for dynamic routes
  transform: async (config, path) => {
    // Custom priority for different types of pages
    const pathPriority = path.includes('/docs/api/')
      ? 0.8
      : path.includes('/docs/guides/')
      ? 0.7
      : path.includes('/docs/core-concepts/')
      ? 0.7
      : path === '/'
      ? 1.0
      : path === '/docs'
      ? 0.9
      : 0.7;

    const pathChangefreq = path.includes('/docs/api/')
      ? 'weekly'
      : path.includes('/docs/guides/')
      ? 'monthly'
      : path.includes('/docs/core-concepts/')
      ? 'monthly'
      : 'weekly';

    // Get actual file modification time for docs pages
    let lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    if (path.startsWith('/docs/') && path !== '/docs') {
      try {
        // Convert URL path to file path
        // /docs/api/pyloid/browserwindow -> content/docs/api/pyloid/browserwindow.mdx
        const filePath = path.replace('/docs/', 'content/docs/') + '.mdx';
        const fullPath = path.join(process.cwd(), filePath);

        if (fs.existsSync(fullPath)) {
          // Try git commit time first (more accurate for content changes)
          const gitTime = getGitCommitTime(fullPath);
          if (gitTime) {
            lastmod = gitTime;
          } else {
            // Fall back to file system modification time
            const stats = fs.statSync(fullPath);
            lastmod = stats.mtime.toISOString();
          }
        }
      } catch (error) {
        // If file reading fails, use build time
        console.warn(`Could not get file stats for ${path}:`, error.message);
      }
    }

    return {
      loc: path,
      changefreq: pathChangefreq,
      priority: pathPriority,
      lastmod: lastmod,
    };
  },
};
