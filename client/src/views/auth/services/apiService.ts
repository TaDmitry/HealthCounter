export const registerUser = async (username: string, email: string, password: string) => {
	const response = await fetch("http://localhost:5000/api/auth/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, email, password }),
	});

	if (!response.ok) {
		const data = await response.json();
		return { success: false, message: data.message || "Unknown error" };
	}

	return await response.json();
};

export const loginUser = async (email: string, password: string) => {
	const response = await fetch("http://localhost:5000/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});
	return await response.json();
};
