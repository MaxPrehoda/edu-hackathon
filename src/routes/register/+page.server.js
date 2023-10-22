import connectToDatabase from '$lib/db.server.js';
import { v4 as uuidv4 } from 'uuid';

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const email = String(data.get('email'));
		const password = String(data.get('password'));
		const date = new Date().toISOString();

		const db = await connectToDatabase();

		// Check if email already exists
		const result = await db.query('SELECT * FROM "User" WHERE email = $1', [email]);
		if (result.rows.length > 0) {
			return {
				status: 409,
				body: {
					success: false,
					message: 'Email already exists.'
				}
			};
		}

		// Save the new user
		console.log(uuidv4(), date);
		await db.query(
			'INSERT INTO "User" (id, "createdAt", "updatedAt", email, password) VALUES ($1, $2, $3, $4, $5)',
			[uuidv4(), date, date, email, password]
		);

		return {
			status: 201,
			body: {
				success: true,
				message: 'Registration successful.'
			}
		};
	}
};
