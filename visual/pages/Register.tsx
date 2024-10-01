/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Register: React.FC = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData); // Логика отправки данных
	};

	return (
		<div>
			<h2>Регистрация</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="Имя пользователя"
					value={formData.username}
					onChange={handleChange}
				/>
				<input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
				<input
					type="password"
					name="password"
					placeholder="Пароль"
					value={formData.password}
					onChange={handleChange}
				/>
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
};

// Создаем корневой элемент для рендеринга
const container = document.getElementById("register-root");
const root = createRoot(container!);
root.render(<Register />);
