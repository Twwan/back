import MongoAdapter from "./core/database/mongo-adapter.js";
import Routing from "./core/routes.js";
import Server from "./core/server.js";
import SwaggerDoc from "./core/swagger.js";
import UserRouter from "./modules/user/router.js";
import MovieRouter from "./modules/movie/router.js";
import BioRouter from "./modules/bio/router.js";

const APP_PORT = process.env.PORT || 7000;

new Server(APP_PORT, [
    // ! Мирон, это адаптер для постгры, делаешь на монге (реши что со стеком) - я дам тебе другой адаптер
    new MongoAdapter({
        database: process.env.DB_NAME,
        host: process.env.MG_HOST || "127.0.0.1",
        port: process.env.MG_PORT || 27017,
        login: process.env.MG_USER,
        password: process.env.MG_PASS
    }),
    // ! Мирон, это для роутинга, оно надо
    new Routing([{ prefix: "/user", router: UserRouter }]),
    new Routing([{ prefix: "/person", router: BioRouter }]),
    new Routing([{ prefix: "/movie", router: MovieRouter }]),
    // ! Мирон, это для документации. Если тебе не надо - не прописывай new Swagger...
    new SwaggerDoc(
        {
            definition: {
                openapi: "3.0.0",
                info: {
                    title: "IMDB MASTER-API SERVER",
                    version: "1.0.0",
                    description: "The REST API documentation for IMDB-Master-Server.",
                    contact: {
                        name: "Twwan",
                        url: "https://github.com/twwan"
                    }
                },
                servers: [{ url: process.env.APP_DOMAIN }],
                components: {
                    securitySchemes: {
                        bearer: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
                    }
                },
                security: [{ bearer: [] }]
            },
            apis: ["./documents/**/*.yml", "./documents/**/*.yaml"]
        },
        { docExpansion: "none" }
    )
])
    .initServices()
    .then((server) => server.run(() => console.log("Server started on port %s", APP_PORT)));
