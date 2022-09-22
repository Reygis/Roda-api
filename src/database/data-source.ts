import { DataSource, DataSourceOptions } from "typeorm";

const options : DataSourceOptions = {
	type: 'mysql',
	host: 'localhost',
    port: 3306,
    username: "root",
    password: "root",
    database: "",
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
}

export const AppDataSource = new DataSource(options)