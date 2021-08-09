module.exports = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: '(?<schoolSlug>.*)' }],
          destination: '/:schoolSlug',
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: '(?<schoolSlug>.*)' }],
          destination: '/:schoolSlug/:path*',
        },
      ],
    };
  },
};
