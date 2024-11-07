import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

interface RegisterFormProps {
	onRegister: (username: string, email: string, password: string) => void;
	onToggleForm: () => void;
	onError: (message: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister, onToggleForm, onError }) => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// Функция для проверки наличия пробелов
	const hasSpaces = (str: string) => /\s/.test(str);

	// Функция для проверки правильного формата email
	const isValidEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Проверка на пробелы в имени пользователя и пароле
		if (hasSpaces(username) || hasSpaces(password)) {
			onError("The 'Username' and 'Password' fields must not contain spaces");
			return;
		}

		// Проверка правильного формата email
		if (!isValidEmail(email)) {
			onError("Enter the correct email address");
			return;
		}

		// Если все проверки пройдены, вызываем onRegister
		onRegister(username, email, password);
	};

	return (
		<section className="form-box register">
			<h2>Register</h2>
			<form onSubmit={handleSubmit} className="form-rg">
				<div className="input-box">
					<span className="form-rg__icon">
						<FontAwesomeIcon icon={faUser} className="register-icon" />
					</span>
					<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
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
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
						<button type="button" onClick={onToggleForm} className="register-link">
							Login
						</button>
					</p>
				</div>
			</form>
		</section>
	);
};

export default RegisterForm;
