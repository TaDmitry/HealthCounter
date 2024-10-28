import { Schema, model } from "mongoose";

// Интерфейс для пользователя
interface IUser {
	username: string;
	email: string;
	password: string;
}

// Схема пользователя
const userSchema = new Schema<IUser>({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
