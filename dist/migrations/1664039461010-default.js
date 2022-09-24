"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1664039461010 = void 0;
class default1664039461010 {
    constructor() {
        this.name = 'default1664039461010';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`groups\` (\`idgroup\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`about\` varchar(255) NOT NULL, \`discussion\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`book_idbook\` int NULL, PRIMARY KEY (\`idgroup\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reviews\` (\`idreview\` int NOT NULL AUTO_INCREMENT, \`tags\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`rating\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_iduser\` int NULL, \`book_idbook\` int NULL, PRIMARY KEY (\`idreview\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`iduser\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`bio\` varchar(255) NOT NULL, \`imgurl\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`iduser\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`books\` (\`iduserbook\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`genres\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`condition\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_iduser\` int NULL, PRIMARY KEY (\`iduserbook\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users_groups_groups\` (\`usersIduser\` int NOT NULL, \`groupsIdgroup\` int NOT NULL, INDEX \`IDX_f99408a5fcdac75fa4f1356d8e\` (\`usersIduser\`), INDEX \`IDX_bde3325d2d9d87abf3d8860354\` (\`groupsIdgroup\`), PRIMARY KEY (\`usersIduser\`, \`groupsIdgroup\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD CONSTRAINT \`FK_406ca6a347af8464076cf431700\` FOREIGN KEY (\`book_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_7265d63b7a5da801512e5a32f18\` FOREIGN KEY (\`user_iduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_3662712601ef351bc51f31ee0aa\` FOREIGN KEY (\`book_idbook\`) REFERENCES \`books\`(\`iduserbook\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_08afad1393dd58451ae4f62227e\` FOREIGN KEY (\`user_iduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_groups_groups\` ADD CONSTRAINT \`FK_f99408a5fcdac75fa4f1356d8ed\` FOREIGN KEY (\`usersIduser\`) REFERENCES \`users\`(\`iduser\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`users_groups_groups\` ADD CONSTRAINT \`FK_bde3325d2d9d87abf3d88603545\` FOREIGN KEY (\`groupsIdgroup\`) REFERENCES \`groups\`(\`idgroup\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users_groups_groups\` DROP FOREIGN KEY \`FK_bde3325d2d9d87abf3d88603545\``);
        await queryRunner.query(`ALTER TABLE \`users_groups_groups\` DROP FOREIGN KEY \`FK_f99408a5fcdac75fa4f1356d8ed\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_08afad1393dd58451ae4f62227e\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_3662712601ef351bc51f31ee0aa\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_7265d63b7a5da801512e5a32f18\``);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP FOREIGN KEY \`FK_406ca6a347af8464076cf431700\``);
        await queryRunner.query(`DROP INDEX \`IDX_bde3325d2d9d87abf3d8860354\` ON \`users_groups_groups\``);
        await queryRunner.query(`DROP INDEX \`IDX_f99408a5fcdac75fa4f1356d8e\` ON \`users_groups_groups\``);
        await queryRunner.query(`DROP TABLE \`users_groups_groups\``);
        await queryRunner.query(`DROP TABLE \`books\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`reviews\``);
        await queryRunner.query(`DROP TABLE \`groups\``);
    }
}
exports.default1664039461010 = default1664039461010;
