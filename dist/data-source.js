"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("./todo/entities/todo.entity");
require("dotenv/config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: [todo_entity_1.Todo],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map