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
        USER_POOL_ID: "us-east-1_tEAAEDUCC",
        APP_CLIENT_ID: "3jnf0cjp4rb91eioeqqh9totsn",
        IDENTITY_POOL_ID: "us-east-1:6d86e6bd-82cc-4a78-a261-628f1b73ea08"
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
        USER_POOL_ID: "us-east-1_tEAAEDUCC",
        APP_CLIENT_ID: "3jnf0cjp4rb91eioeqqh9totsn",
        IDENTITY_POOL_ID: "us-east-1:6d86e6bd-82cc-4a78-a261-628f1b73ea08"
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