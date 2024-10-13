
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefintion = {
    openapi: '3.0.0',
    info:{
        title: "blog app",
        version: '1.0.0',
        description: 'API for managing grades of students',
    },
    servers: [
        {
            url: 'http://localhost:3500'
        }
    ]
}

const options = {
    definition: swaggerDefintion,
    apis: ['./src/routes/*.ts','./src/server.ts']
}

export const swaggerSpec = swaggerJSDoc(options);