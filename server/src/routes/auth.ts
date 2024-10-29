import { Router } from "express";
import User from "../models/User";
//! bcrypt-------------------------------------------
const router = Router();

// Маршрут для регистрации пользователя
router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = new User({
			username,
			email,
			password,
		});

		await user.save();

		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		if (user.password !== password) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		res.status(200).json({ message: "Login successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
});

export default router;
