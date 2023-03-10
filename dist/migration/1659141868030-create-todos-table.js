"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodosTable1659141868030 = void 0;
class createTodosTable1659141868030 {
    async up(queryRunner) {
        queryRunner.query(`
        create table todos (
            id bigserial primary key,
            name text
        );
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`drop table todos;`);
    }
}
exports.createTodosTable1659141868030 = createTodosTable1659141868030;
//# sourceMappingURL=1659141868030-create-todos-table.js.map