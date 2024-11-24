import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

interface LoginFormProps {
	onLogin: (email: string, password: string) => void;
	onToggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onToggleForm }) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onLogin(email, password);
	};

	return (
		<section className="form-box login">
			<h2>Login</h2>
			<form className="form-rg" onSubmit={handleSubmit}>
				<div className="input-box">
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
						<button type="button" onClick={onToggleForm} className="register-link">
							Register
						</button>
					</p>
				</div>
			</form>
		</section>
	);
};

export default LoginForm;
