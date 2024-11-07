import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../layout/Header";
import Modal from "../../components/ui/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { registerUser, loginUser } from "./services/apiService";

const Register: React.FC = () => {
	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState<string>("");
	const navigate = useNavigate();

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const toggleForm = () => {
		setIsLoginForm(!isLoginForm);
	};

	const handleRegister = async (username: string, email: string, password: string) => {
		const data = await registerUser(username, email, password);

		// Проверка на успех по содержанию сообщения
		if (data.message === "User created successfully") {
			// Показать сообщение об успешной регистрации и переключиться на форму логина
			setModalMessage("Registration successful! Please log in.");
			openModal();
			setIsLoginForm(true); // Переход на форму логина напрямую
		} else {
			// Обработка сообщения об ошибке
			const errorMessage =
				data.message === "User already exists"
					? "A user with such an email already exists"
					: `Registration failed: ${data.message || "Unknown error"}`;
			setModalMessage(errorMessage);
			openModal();
		}
	};

	const handleLogin = async (email: string, password: string) => {
		try {
			const data = await loginUser(email, password);

			if (data.success) {
				navigate("/personal-account");
			} else {
				setModalMessage(data.message || "Login failed: Unknown error");
				openModal();
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				setModalMessage(`Login failed: ${error.message}`);
			} else {
				setModalMessage("Login failed: Network error");
			}
			openModal();
		}
	};

	const handleError = (message: string) => {
		setModalMessage(message);
		openModal();
	};

	return (
		<>
			<AppHeader />
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<p>{modalMessage}</p>
			</Modal>

			<section className="register-components container">
				<div className="form-rg__wrapper">
					{isLoginForm ? (
						<LoginForm onLogin={handleLogin} onToggleForm={toggleForm} />
					) : (
						<RegisterForm onRegister={handleRegister} onToggleForm={toggleForm} onError={handleError} />
					)}
				</div>
			</section>
		</>
	);
};

export default Register;
