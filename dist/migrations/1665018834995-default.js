"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1665018834995 = void 0;
class default1665018834995 {
    constructor() {
        this.name = 'default1665018834995';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`imgurl\` \`imgurl\` varchar(255) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`imgurl\` \`imgurl\` varchar(255) NOT NULL`);
    }
}
exports.default1665018834995 = default1665018834995;
