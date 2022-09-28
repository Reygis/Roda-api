"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1664396916112 = void 0;
class default1664396916112 {
    constructor() {
        this.name = 'default1664396916112';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_08afad1393dd58451ae4f62227e\``);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP FOREIGN KEY \`FK_406ca6a347af8464076cf431700\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_3662712601ef351bc51f31ee0aa\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_7265d63b7a5da801512e5a32f18\``);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`user_iduser\` \`users_iduser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` CHANGE \`book_idbook\` \`books_idbook\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP COLUMN \`user_iduser\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP COLUMN \`book_idbook\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD \`users_iduser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD \`books_idbook\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_d304381a686fc3e3ce8b7fa858d\` FOREIGN KEY (\`users_iduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD CONSTRAINT \`FK_5787e2dc72cf1f5a54dd2dcc5b1\` FOREIGN KEY (\`books_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_ed20b0d1c550368bf2f4cd1d381\` FOREIGN KEY (\`users_iduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_076f9a2ec37da0ca01bb6ba286c\` FOREIGN KEY (\`books_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_076f9a2ec37da0ca01bb6ba286c\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_ed20b0d1c550368bf2f4cd1d381\``);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP FOREIGN KEY \`FK_5787e2dc72cf1f5a54dd2dcc5b1\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_d304381a686fc3e3ce8b7fa858d\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP COLUMN \`books_idbook\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP COLUMN \`users_iduser\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD \`book_idbook\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD \`user_iduser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` CHANGE \`books_idbook\` \`book_idbook\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`users_iduser\` \`user_iduser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_7265d63b7a5da801512e5a32f18\` FOREIGN KEY (\`user_iduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_3662712601ef351bc51f31ee0aa\` FOREIGN KEY (\`book_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD CONSTRAINT \`FK_406ca6a347af8464076cf431700\` FOREIGN KEY (\`book_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_08afad1393dd58451ae4f62227e\` FOREIGN KEY (\`user_iduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.default1664396916112 = default1664396916112;
