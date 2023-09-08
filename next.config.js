/** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         use: ['@svgr/webpack'],
//       });
  
//       return config;
//     },
//     i18n: {
//       locales: ['en', 'pt'], // Add the locales you want to support
//       defaultLocale: 'en', // Set the default locale
//     },
//   };
  
//   module.exports = nextConfig;


module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt'], // Add the locales you want to support
    defaultLocale: 'en', // Set the default locale
  },
};
