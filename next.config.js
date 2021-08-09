module.exports = {
  async rewrites() {
    return {
      // Have to use beforeFiles so that this gets precedence over file routing (i.e. if school slug is present, we route to
      // school's page first before we route to pages/index.tsx)
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: '(?!www)(?<schoolSlug>.*).((jonathanlhuang.com)|(localhost.*))' }], // (?!www) is negative lookahead so we don't think wwww.jonathanlhuang.com is for schoolSlug "www"
          destination: '/:schoolSlug',
        },
        {
          source: '/:path([\\w\\d/]+)', // Match on letters, digits, and '/' so we ensure that pathname actually exists before we route
          has: [{ type: 'host', value: '(?!www)(?<schoolSlug>.*).((jonathanlhuang.com)|(localhost.*))' }],
          destination: '/:schoolSlug/:path',
        },
      ],
    };
  },
};
