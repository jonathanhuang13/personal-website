export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5a6031ead69d72631705750485c4d90d'),
  },
});
