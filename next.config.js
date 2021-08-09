module.exports = {
  async rewrites() {
    return {
      // Have to use beforeFiles so that this gets precedence over file routing (i.e. if school slug is present, we route to
      // school's page first before we route to pages/index.tsx)
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: '(?!www)(?<schoolSlug>.*).((jonathanlhuang.com)|(localhost.*))' }], // (?!www) is negative lookahead so we don't think wwww.jonathanlhuang.com is for schoolSlug "www"
          // We need this /slugs folder and the (?!slugs) below to avoid a loop. Without /slugs, going to
          // school1.jonathanlhuang.com will rewrite to school1.jonathanlhuang.com/school1. This matches the below
          // 'source', which would then rewrite the route to school1.jonathanlhuang.com/school1/school1 which doesn't exist.
          // A phantom /slugs folder avoids this because the rewrite path below avoids rewriting if the path
          // has the /slugs folder already prepended. Essentially, we are only allowing one of these rewrites to happen,
          // not multiple.
          destination: '/slugs/:schoolSlug',
        },
      ],
      afterFiles: [
        {
          source: '/:path((?!slugs).+)', //
          has: [{ type: 'host', value: '(?!www)(?<schoolSlug>.*).((jonathanlhuang.com)|(localhost.*))' }],
          destination: '/slugs/:schoolSlug/:path',
        },
      ],
    };
  },
};
