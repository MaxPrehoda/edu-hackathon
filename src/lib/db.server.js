import * as Pool from 'pg';

export default function connectToDatabase() {
	console.log('Connecting to database...');
	const config = {
		user: 'postgres',
		host: 'containers-us-west-146.railway.app',
		database: 'railway',
		password: 'zb4nL95ilTVTRXjNwYc3',
		port: 7199
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
