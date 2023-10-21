import connectToDatabase from '$lib/db.server.js';
// Ensure you have a function to connect to your database

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const username = String(data.get('email'));
		const password = String(data.get('password'));

		const db = await connectToDatabase();
		const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);

		// Compare the password, you can use bcrypt for hashing and comparison
		console.log('here');
		if (user && password === user.password) {
			return {
				status: 200,
				body: {
					success: true,
					userId: user.id,
					username: user.username
				}
			};
		} else {
			return {
				status: 401,
				body: {
					success: false,
					message: 'Incorrect username or password.'
				}
			};
		}
	}
};
/*import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	login: async ({ cookies, request, locals }) => {
		const data = await request.formData();
		const email = String(data.get("email"));
		const password = String(data.get("password"));
		const pb = locals.pb;
		if (email && password) {
			try {
				await pb.collection("users").authWithPassword(email, password);
				await pb.collection("users").update(pb.authStore.model.id, { last_login: new Date() });
				cookies.set("pb", decodeURIComponent(pb.authStore.exportToCookie()), {
					path: "/",
					httpOnly: false
				});
			} catch (error) {
				console.log(error);
				if (error.status === 400) return fail(403, { authenticationError: true });
				if (error.status === 0) return fail(503, { databaseError: true });
			}
		}
		throw redirect(303, "/learn");
	},
	oauth: async ({ cookies, request, locals }) => {
		const data = await request.formData();
		const provider = String(data.get("provider"));
		const authMethod = (await getAuthProviders()).filter((e) => e.name === provider)[0];
		if (!authMethod) throw redirect(307, "/learn");
		cookies.set("oauth", JSON.stringify(authMethod));
		throw redirect(303, authMethod.authUrl);
	}
};*/
