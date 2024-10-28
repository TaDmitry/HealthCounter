import AppHeader from "../layout/Header";
import React, { useState } from "react";

const Register: React.FC = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();

		const response = await fetch("http://localhost:5000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, email, password }),
		});

		const data = await response.text();

		if (response.ok) {
			alert("Registration successful");
		} else {
			alert(`Registration failed: ${data}`);
		}
	};

	return (
		<section className="register">
			<AppHeader />

			<section className="register-section container">
				<div className="register-block">
					<h2>Register</h2>
					<form onSubmit={handleRegister} className="register__form">
						<div className="register__form-box">
							<span className="register__form-icon"></span>
							<input
								type="text"
								id="register-username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<label htmlFor="username">Username</label>
						</div>

						<div className="register__form-box">
							<span className="register__form-icon"></span>
							<input
								type="email"
								id="register-email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor="email">Email:</label>
						</div>

						<div className="register__form-box">
							<span className="register__form-icon"></span>
							<input
								type="password"
								id="register-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor="password">Password:</label>
						</div>

						<button type="submit" className="register__form-button">
							Register
						</button>
					</form>
				</div>
			</section>
		</section>
	);
};

export default Register;
