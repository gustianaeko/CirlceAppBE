const swaggerAutogen = require("swagger-autogen")({
  openapi: "3.0.0",
  // autoHeaders: false,
});

const doc = {
  info: {
    title: "CircleApp",
    description: "CircleApp API Documentation",
  },
  host: "localhost:3000",
  servers: [
    {
        url: "https://cirlce-app-be5.vercel.app/",
    },
    
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    "@schemas": {
      registerSchema: {
        type: "object",
        properties: {
          fullname: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
            format: "password",
          },
        },
      },
      loginSchema: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
            format: "password",
          },
        },
      },
      profileEditSchema: {
        type: "object",
        properties: {
          fullname: {
            type: "string",
          },
          username: {
            type: "string",
          },
          bio: {
            type: "string",
          },
          profilePhoto: {
            type: "string",
            format: "binary",
          },
        },
      },
      createThreadSchema: {
        type: "object",
        properties: {
          content: {
            type: "string",
          },
          image: {
            type: "string",
            format: "binary",
          },
        },
      },
      createReplySchema: {
        type: "object",
        properties: {
          content: {
            type: "string",
          },
          image: {
            type: "string",
          },
        },
      },
      likeSchema: {
        type: "object",
        properties: {
          threadId: {
            type: "integer",
          },
        },
      },
      followSchema: {
        type: "object",
        properties: {
          followingId: {
            type: "integer",
          },
        },
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./index.ts"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
