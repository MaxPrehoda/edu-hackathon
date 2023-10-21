import axios from 'axios';

export function useLogin() {
	async function login(username, password) {
		try {
			const response = await axios.post('/api/login', { username, password });
			if (response.data.success) {
				return {
					success: true,
					user: { id: response.data.userId, username }
				};
			} else {
				return {
					success: false,
					error: response.data.message
				};
			}
		} catch (error) {
			return {
				success: false,
				error: 'Error logging in'
			};
		}
	}

	return { login };
}
