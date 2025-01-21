module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID', "0127ba6d366a7a0eec014df47be8912b"),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY', "d79bbc513685ecd13a2d8b955fd2104aa091884daaba9dd8c939336e90468d2f"),
        region: 'auto',
        endpoint: env('R2_ENDPOINT', "https://fdbe95617d90cde42b1b98d84ca8ad31.eu.r2.cloudflarestorage.com"),
        params: {
          Bucket: env('R2_BUCKET_NAME', "strapi-assets"),
        },
      },
    },
  },
  logger: console.log
});


