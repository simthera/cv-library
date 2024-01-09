/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './i18n.js'
);
const nextConfig = {
    compiler: {
        styledComponents: true,
      },
}

module.exports = withNextIntl(nextConfig);
