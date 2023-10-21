import Pool from 'pg';

export default function connectToDatabase() {
	console.log('Connecting to database...');

	// If you have DATABASE_URL, it overrides individual connection params.
	const config = process.env.PGDATABASE
		? { connectionString: process.env.PGDATABASE }
		: {
				user: process.env.PGUSER,
				host: process.env.PGHOST,
				database: process.env.PGDATABASE,
				password: process.env.PGPASSWORD,
				port: Number(process.env.PGPORT)
		  };

	const pool = new Pool(config);

	pool.on('error', (err, client) => {
		console.error('Unexpected error on idle client', err);
		process.exit(-1);
	});

	return pool;
}
