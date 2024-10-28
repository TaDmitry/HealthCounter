import { Router } from "express";
import User from "../models/User"; //! Импорт модели пользователя

const router = Router();

// Маршрут для регистрации
router.post("/register", async (req, res) => {
	const { username, email, password } = req.body;

	// Проверка, что все поля заполнены
	if (!username || !email || !password) {
		return res.status(400).send("All fields are required");
	}

	try {
		// Создание нового пользователя
		const newUser = new User({ username, email, password });
		await newUser.save();
		res.status(201).send("User registered successfully");
	} catch (error) {
		res.status(500).send("Error registering user");
	}
});

export default router;
