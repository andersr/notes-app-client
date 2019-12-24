export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_wwJm4LjpYVnms3LXsmzSJkk600Iub2tUL8",
    s3: {
      REGION: "us-east-1",
      BUCKET: "andersco-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://jwqg8o6s85.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_i4A7QLUF9",
      APP_CLIENT_ID: "3m9v2p3099vtooru9gmtf4u0i2",
      IDENTITY_POOL_ID: "us-east-1:e01210fc-2c1a-42c7-ae30-783cd5e0febd"
    }
  };