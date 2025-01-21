export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        region: 'auto',
        endpoint: env('R2_ENDPOINT'),
        params: {
          Bucket: env('R2_BUCKET_NAME'),
        },
      },
    },
  },
});


