module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: '(?!www)(?<schoolSlug>.*).((jonathanlhuang.com)|(localhost.*))' }],
          destination: '/schoolSlug/:schoolSlug',
        },
      ],
      afterFiles: [
        // {
        //   source: '/',
        //   has: [{ type: 'host', value: '(?<schoolSlug>.*)' }],
        //   destination: '/schoolSlug/:schoolSlug',
        // },
        // {
        //   source: '/:path*',
        //   has: [{ type: 'host', value: '(?<schoolSlug>.*)' }],
        //   destination: '/schoolSlug/:schoolSlug/:path*',
        // },
      ],
    };
  },
};
