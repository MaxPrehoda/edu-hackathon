import connectToDatabase from '$lib/db.server.js';
import { fail, redirect } from '@sveltejs/kit';

// Ensure you have a function to connect to your database

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = String(data.get('email'));
		const password = String(data.get('password'));

		const db = await connectToDatabase();
		const result = await db.query('SELECT * FROM "User" WHERE email = $1', [email]);
		const user = result.rows[0];
		// Compare the password, you can use bcrypt for hashing and comparison
		console.log('here', user);
		if (email === user.email && password === user.password) {
			console.log('heresdadasdas');
			throw redirect(303, '/decks');
		} else {
			return {
				status: 401,
				body: {
					success: false,
					message: 'Incorrect email or password.'
				}
			};
		}
	}
};
