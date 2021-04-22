const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Test Swagger',
        version: '1.0.0',
        description: 'This is a REST API application made with express',
        license: {
            name: 'Licensed under MIT'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server'
        }
    ]
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./api/routes/*.js'],
};

// console.log(options.apis)
module.exports = options