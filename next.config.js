module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: '(?<schoolSlug>.*)' }],
          destination: '/:schoolSlug'
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: '(?<schoolSlug>.*)' }],
          destination: '/:schoolSlug/:path*'
        }
      ]
    }

  },
}
