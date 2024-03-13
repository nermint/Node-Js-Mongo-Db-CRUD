const paths = {
  "/users": {
    get: {
      summary: "Get all users",
      description: "Returns a list of users",
      responses: {
        200: {
          description: "Successful response",
        },
      },
      tags: ["Users"],
    },
    post: {
      summary: "Create new user",
      parameters: [
        {
          name: "userCreate",
          in: "body",
          description: "The user to create.",
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
            },
          },
        },
      ],
      tags: ["Users"],
      responses: {
        201: {
          description: "New user added",
          content: {
            "application/json": {
              example: { id: 12, name: "Baku" },
            },
          },
        },
        400: {
          description: "Bad request, invalid input",
        },
      },
    },
  },
  "/user/{userId}": {
    get: {
      summary: "Return user by id",
      tags: ["Users"],
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          description: "ID of the user",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "User by id",
          content: {
            "application/json": {
              example: { id: 12, name: "Baku" },
            },
          },
        },
      },
    },
    put: {
      summary: "Update User by Id",
      tags: ["Users"],
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          description: "Change user by id",
          schema: {
            type: "integer",
          },
        },
        {
          name: "userUpdate",
          in: "body",
          required: true,
          description: "Change user by id",
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
            },
          },
        },
      ],
      responses: {
        200: {
          description: "User by id",
          content: {
            "application/json": {
              example: { id: 12, name: "Baku" },
            },
          },
        },
      },
    },
    delete: {
      summary: "Delete User by Id",
      tags: ["Users"],
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          description: "Change user by id",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "User by id",
          content: {
            "application/json": {
              example: { id: 12, name: "Baku" },
            },
          },
        },
      },
    },
  },
};

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Swagger API",
      version: "1.0.0",
      description: "User API with Swagger documentation",
    },
    tags: [
      {
        name: "Users",
        description: "Operations related to users",
      },
    ],
    paths,
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;
