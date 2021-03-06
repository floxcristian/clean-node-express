# A basic Express.js API following Clean Architecture principles

- Arquitectura basada en componentes.
- Cada componente tiene múltiples capas.
- Arquitectura basada en **Clean Architecture** y **Arquitectura Hexagonal**.
- Capas separadas para gestionar las peticiones del API y las consultas a la base de datos.
- Facilita la creación de test unitarios.

### Project anatomy

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── components
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

```

```
app
 └ lib                              → Application sources
    └ application                   → Application services layer
       └ security                   → Security tools interfaces (ex: AccessTokenManager.js, to generate and decode OAuth access token)
       └ use_cases                  → Application business rules
    └ domain                        → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
    └ infrastructure                → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ config                     → Application configuration files, modules and services
          └ service-locator.js      → Module that manage service implementations by environment
       └ orm                        → Database ORMs middleware (Sequelize for SQLite3 or PostgreSQL, Mongoose for MongoDB)
          └ mongoose                → Mongoose client and schemas
          └ sequelize               → Sequelize client and models
       └ repositories               → Implementation of domain repository interfaces
       └ security                   → Security tools implementations (ex: JwtAccessTokenManager)
       └ webserver                  → Hapi.js Web server configuration (server, routes, plugins, etc.)
          └ oauth                   → Hapi.js authentication strategies and schemas
          └ server.js               → Hapi.js server definition
    └ interfaces                    → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers                → Hapi.js route handlers
       └ routes                     → Hapi.js route definitions
       └ serializers                → Converter objects that transform outside objects (ex: HTTP request payload) to inside objects (ex: Use Case request object)
 └ node_modules (generated)         → NPM dependencies
 └ test                             → Source folder for unit or functional tests
 └ index.js                         → Main application entry point
```

# Referencias

- https://github.com/goldbergyoni/nodebestpractices/
- https://github.com/sqreen/awesome-nodejs-projects
- https://medium.mybridge.co/45-amazing-node-js-open-source-for-the-past-year-v-2019-c774d750e925#6bd0
