import { useState, useEffect } from "react";
import ParallaxBackground from "../components/ParallaxBackground";

const TypingEffect = () => {
	const fullText = "Lorem"; // Текст, который нужно напечатать
	const [displayedText, setDisplayedText] = useState(""); // Текущее отображаемое состояние текста
	const [isDeleting, setIsDeleting] = useState(false); // Флаг для удаления текста
	const [index, setIndex] = useState(0); // Текущий индекс символа
	const [isBlinking, setIsBlinking] = useState(true); // Для мигающего курсора
	const typingSpeed = 150; // Скорость печати
	const deleteSpeed = 100; // Скорость удаления
	const pauseTime = 1000; // Задержка перед удалением/началом печати

	useEffect(() => {
		let timeout;

		if (isDeleting) {
			if (index > 0) {
				// Удаление текста по символу
				timeout = setTimeout(() => {
					setDisplayedText(fullText.slice(0, index - 1));
					setIndex(index - 1);
				}, deleteSpeed);
			} else {
				// Текст полностью удален, начинаем печатать заново
				timeout = setTimeout(() => {
					setIsDeleting(false);
				}, pauseTime);
			}
		} else {
			if (index < fullText.length) {
				// Печать текста по символу
				timeout = setTimeout(() => {
					setDisplayedText(fullText.slice(0, index + 1));
					setIndex(index + 1);
				}, typingSpeed);
			} else {
				// Текст полностью напечатан, задержка перед удалением
				timeout = setTimeout(() => {
					setIsDeleting(true);
				}, pauseTime);
			}
		}

		return () => clearTimeout(timeout);
	}, [index, isDeleting, fullText]);

	// Логика для мигания курсора
	useEffect(() => {
		const cursorBlinkInterval = setInterval(() => {
			setIsBlinking((prev) => !prev);
		}, 1500); // Каждые полсекунды мигает курсор

		return () => clearInterval(cursorBlinkInterval);
	}, []);

	return (
		<header className="header">
			<section className="header__navigation">
				<div className="logo">
					<h1>LifeCounter</h1>
				</div>
				<nav className="header__nav">
					<ul className="header__nav-ul">
						<li className="header__nav-li">
							<a href="#home"></a>
						</li>
					</ul>

					<div className="header__office">
						<a href="">
							<i className="fa-regular fa-circle-user"></i>
							<p>Entrance</p>
						</a>
					</div>
				</nav>
			</section>

			<section className="header__introduction">
				<div className="header__introduction-container">
					<p>Lorem ipsum dolor sit.</p>
					<p>
						Lorem, ipsum dolor:
						<samp>
							{displayedText}
							<span className={`header__cursor ${isBlinking ? "blinking" : ""}`}></span>
						</samp>
					</p>
				</div>
				<button className="header__introduction-button">
					<a href="../../pages/test.tsx">Register</a>
				</button>
			</section>

			<ParallaxBackground imageSrc="src/assets/img/header__background.png" />
		</header>
	);
};

export default TypingEffect;
