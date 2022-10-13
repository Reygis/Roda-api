"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1665018767937 = void 0;
class default1665018767937 {
    constructor() {
        this.name = 'default1665018767937';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`bio\` \`bio\` varchar(255) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`bio\` \`bio\` varchar(255) NOT NULL`);
    }
}
exports.default1665018767937 = default1665018767937;
