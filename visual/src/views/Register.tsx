import React, { useState } from "react";
import AppHeader from "../layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const AuthPage: React.FC = () => {
	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const toggleForm = () => {
		setIsLoginForm(!isLoginForm);
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		const response = await fetch("http://localhost:5000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, email, password }),
		});

		const data = await response.json();

		if (response.ok) {
			alert("Registration successful / Всё супер");
		} else {
			alert(`Registration failed: ${data.message || data}`);
		}
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ email, password });

		const response = await fetch("http://localhost:5000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();
		if (response.ok) {
			alert("Login successful / Ты в системе");
		} else {
			alert(`Login failed: ${data.message || data}`);
		}
	};

	return (
		<>
			<AppHeader />
			<section className="register-components container">
				<div className="form-rg__wrapper">
					{isLoginForm ? (
						<div className="form-box login">
							<h2>Login</h2>
							<form className="form-rg" onSubmit={handleLogin}>
								<div className="input-box">
									<span className="form-rg__icon">
										<FontAwesomeIcon icon={faEnvelope} className="register-icon" />
									</span>
									<input
										type="text"
										value={email} // Используйте email для входа
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
									<label>Email</label>
								</div>

								<div className="input-box">
									<span className="form-rg__icon">
										<FontAwesomeIcon icon={faLock} className="register-icon" />
									</span>
									<input
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
									<label>Password</label>
								</div>

								<div className="login-remember">
									<label>
										<input type="checkbox" />
										Remember me
									</label>
									<a href="#">Forgot Password?</a>
								</div>

								<button type="submit" className="form-rg__button">
									Login
								</button>
								<div className="login-register">
									<p>
										Don’t have an account?{" "}
										<button onClick={toggleForm} className="register-link">
											Register
										</button>
									</p>
								</div>
							</form>
						</div>
					) : (
						<div className="form-box register">
							<h2>Register</h2>
							<form onSubmit={handleRegister} className="form-rg">
								<div className="input-box">
									<span className="form-rg__icon">
										<FontAwesomeIcon icon={faUser} className="register-icon" />
									</span>
									<input
										type="text"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										required
									/>
									<label>Username</label>
								</div>

								<div className="input-box" style={{ marginBottom: "10px" }}>
									<span className="form-rg__icon">
										<FontAwesomeIcon icon={faEnvelope} className="register-icon" />
									</span>
									<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
									<label>Email</label>
								</div>

								<div className="input-box">
									<span className="form-rg__icon">
										<FontAwesomeIcon icon={faLock} className="register-icon" />
									</span>
									<input
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
									<label>Password</label>
								</div>

								<div className="login-remember">
									<label>
										<input type="checkbox" required />I accept the user agreement
									</label>
								</div>

								<button type="submit" className="form-rg__button">
									Register
								</button>

								<div className="login-register">
									<p>
										Already have an account?{" "}
										<button onClick={toggleForm} className="register-link">
											Login
										</button>
									</p>
								</div>
							</form>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default AuthPage;
