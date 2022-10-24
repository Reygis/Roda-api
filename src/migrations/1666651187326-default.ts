import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666651187326 implements MigrationInterface {
    name = 'default1666651187326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`groups\` ADD \`label\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`pageCount\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`pageCount\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`pageCount\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`pageCount\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP COLUMN \`label\``);
    }

}
