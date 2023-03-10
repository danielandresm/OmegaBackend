"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCompletedToTodos1659143656931 = void 0;
class addCompletedToTodos1659143656931 {
    async up(queryRunner) {
        queryRunner.query(`alter table todos add column completed boolean not null default false`);
    }
    async down(queryRunner) {
        queryRunner.query(`alter table todos drop column completed`);
    }
}
exports.addCompletedToTodos1659143656931 = addCompletedToTodos1659143656931;
//# sourceMappingURL=1659143656931-add-completed-to-todos.js.map