"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1665701755823 = void 0;
class default1665701755823 {
    constructor() {
        this.name = 'default1665701755823';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`groups\` DROP FOREIGN KEY \`FK_5787e2dc72cf1f5a54dd2dcc5b1\``);
        await queryRunner.query(`ALTER TABLE \`groups\` CHANGE \`books_idbook\` \`books\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`condition\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`authors\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`pageCount\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`imageurl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP COLUMN \`books\``);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD \`books\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`genres\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`genres\` text NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`genres\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`genres\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP COLUMN \`books\``);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD \`books\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`imageurl\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`pageCount\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`authors\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`condition\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` CHANGE \`books\` \`books_idbook\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD CONSTRAINT \`FK_5787e2dc72cf1f5a54dd2dcc5b1\` FOREIGN KEY (\`books_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.default1665701755823 = default1665701755823;
