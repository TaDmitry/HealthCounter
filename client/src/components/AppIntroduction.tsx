import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppIntroduction: React.FC = () => {
	const fullText = "Lorem"; //! Текст для печати
	const [displayedText, setDisplayedText] = useState<string>(""); // Отображаемый текст
	const [isDeleting, setIsDeleting] = useState<boolean>(false); // Флаг удаления текста
	const [index, setIndex] = useState<number>(0); // Индекс символа текста
	const [isBlinking, setIsBlinking] = useState<boolean>(true); // Флаг мигания курсора

	const typingSpeed: number = 150; // Скорость печати
	const deleteSpeed: number = 100; // Скорость удаления
	const pauseTime: number = 1000; // Задержка перед удалением/началом печати

	useEffect(() => {
		let typingTimeout: ReturnType<typeof setTimeout>;
		let pauseTimeout: ReturnType<typeof setTimeout>;

		if (!isDeleting && index === fullText.length) {
			pauseTimeout = setTimeout(() => {
				setIsDeleting(true);
			}, pauseTime);
		} else if (isDeleting && index === 0) {
			pauseTimeout = setTimeout(() => {
				setIsDeleting(false);
			}, pauseTime);
		} else {
			typingTimeout = setTimeout(
				() => {
					if (isDeleting) {
						setDisplayedText(fullText.slice(0, index - 1));
						setIndex(index - 1);
					} else {
						setDisplayedText(fullText.slice(0, index + 1));
						setIndex(index + 1);
					}
				},
				isDeleting ? deleteSpeed : typingSpeed
			);
		}

		return () => {
			clearTimeout(typingTimeout);
			clearTimeout(pauseTimeout);
		};
	}, [index, isDeleting, fullText, pauseTime, deleteSpeed, typingSpeed]);

	useEffect(() => {
		const cursorBlinkInterval = setInterval(() => {
			setIsBlinking((prev) => !prev);
		}, 500);

		return () => clearInterval(cursorBlinkInterval);
	}, []);

	return (
		<section className="app__introduction container">
			<div className="app__introduction-container">
				<div className="app__introduction-window">
					<p>Lorem ipsum dolor sit.</p>
					<p>
						Lorem, ipsum dolor:
						<samp>
							{displayedText}
							<span className={`app__cursor ${isBlinking ? "blinking" : ""}`}></span>
						</samp>
					</p>
					<button className="app__introduction-button">
						<Link to="/register">Register</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default AppIntroduction;
