// Top-level async function to handle dynamic import
const loadConfig = async () => {
  let userConfig = undefined;
  try {
    const userConfigModule = await import('./v0-user-next.config');
    userConfig = userConfigModule.default; // ES Modules use .default for export
  } catch (e) {
    // Ignore error if v0-user-next.config doesn’t exist
  }

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export', // Required for GitHub Pages
    basePath: '', // Serve from root of custom domain
    assetPrefix: '', // Assets from root
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true, // Required for static export to avoid image optimization
    },
    experimental: {
      webpackBuildWorker: true,
      parallelServerBuildTraces: true,
      parallelServerCompiles: true,
    },
  };

  // Merge user config into nextConfig
  if (userConfig) {
    for (const key in userConfig) {
      if (
        typeof nextConfig[key] === 'object' &&
        !Array.isArray(nextConfig[key])
      ) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig[key],
        };
      } else {
        nextConfig[key] = userConfig[key];
      }
    }
  }

  return nextConfig;
};

// Export the config (Next.js supports async configs in .mjs)
export default await loadConfig();