import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth"; //! Импорт маршрутов для аутентификации

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

//! Подключение к базе данных MongoDB
mongoose
	.connect("mongodb://localhost:27017/healthcounter")
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Failed to connect to MongoDB", err));

// Роуты
app.use("/api/auth", authRoutes);

// Добавляем маршрут для главной страницы
app.get("/", (req, res) => {
	res.send("Welcome to the HealthCounter API");
});

// Запуск сервера
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
