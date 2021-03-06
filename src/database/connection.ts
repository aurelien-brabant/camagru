import { Pool } from 'pg';

export const db = new Pool({
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
});
