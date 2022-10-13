import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665018767937 implements MigrationInterface {
    name = 'default1665018767937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`bio\` \`bio\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`bio\` \`bio\` varchar(255) NOT NULL`);
    }

}
