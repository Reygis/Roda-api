"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1666651187326 = void 0;
class default1666651187326 {
    constructor() {
        this.name = 'default1666651187326';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`groups\` ADD \`label\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`pageCount\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`pageCount\` int NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`pageCount\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`pageCount\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP COLUMN \`label\``);
    }
}
exports.default1666651187326 = default1666651187326;
