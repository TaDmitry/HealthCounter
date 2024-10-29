import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Подключение к базе данных MongoDB
mongoose
	.connect("mongodb://localhost:27017/healthcounter")
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to the HealthCounter API, Добро пожаловать в API HealthCounter");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
