import * as Pool from 'pg';

export default function connectToDatabase() {
	console.log('Connecting to database...');
	const config = {
		user: process.env.PGUSER,
		host: process.env.PGHOST,
		database: process.env.PGDATABASE,
		password: process.env.PGPASSWORD,
		port: Number(process.env.PGPORT)
	};

	console.log(config);
	console.log('Connecting to 3...');

	const pool = new Pool.Pool(config);
	console.log('Connecting to 4...');

	pool.on('error', (err, client) => {
		console.error('Unexpected error on idle client', err);
		process.exit(-1);
	});
	console.log('Connecting to 5...');

	return pool;
}
