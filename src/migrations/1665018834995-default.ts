import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665018834995 implements MigrationInterface {
    name = 'default1665018834995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`imgurl\` \`imgurl\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`imgurl\` \`imgurl\` varchar(255) NOT NULL`);
    }

}
