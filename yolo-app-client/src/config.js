const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "imagefordetection"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://48de5wdxzj.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_KMFNwzLjB",
        APP_CLIENT_ID: "3f1idmfm3kppcjfe2c16io3trh",
        IDENTITY_POOL_ID: "us-east-1:e9dc4179-d5f0-4bfd-a767-e1db71aa694d"
    }
};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "imagefordetection"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://48de5wdxzj.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_KMFNwzLjB",
        APP_CLIENT_ID: "3f1idmfm3kppcjfe2c16io3trh",
        IDENTITY_POOL_ID: "us-east-1:e9dc4179-d5f0-4bfd-a767-e1db71aa694d"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};