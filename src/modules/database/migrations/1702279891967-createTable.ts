import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTable1702279891967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE "todos(
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "create_date" TIMESTAMP NOT NULL DEFAULT now(), 
            "update_date" TIMESTAMP NOT NULL DEFAULT now(),
            "title" character varying NOT NULL, 
            "completed" boolean NOT NULL,
            "description" character varying NOT NULL,
        )"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
    }

}
