import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
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

		if (data.message === "User created successfully") {
			const loginData = await loginUser(email, password);
			if (loginData.message === "Login successful") {
				closeModal();
				navigate("/register/personal-account");
			} else {
				setModalMessage("Registration successful, but login failed. Please log in manually.");
				openModal();
				setIsLoginForm(true);
			}
		} else {
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

			if (data.message === "Login successful") {
				closeModal();
				navigate("/register/personal-account");
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
			<Header />
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
