import React, { useState, useEffect } from "react";

interface ParallaxBackgroundProps {
	imageSrc: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ imageSrc }) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const maxOffset = 5; //! Максимальное смещение в процентах

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const coordX = (e.pageX - innerWidth / 2) / innerWidth;
			const coordY = (e.pageY - innerHeight / 2) / innerHeight;

			setOffset({
				x: Math.max(Math.min(coordX * maxOffset, maxOffset), -maxOffset),
				y: Math.max(Math.min(coordY * maxOffset, maxOffset), -maxOffset),
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="parallax__background">
			<img
				src={imageSrc}
				className="parallax__background-img"
				style={{
					transform: `translate(${offset.x}%, ${offset.y}%)`,
					transition: "transform 0.2s ease-out",
				}}
				alt="Background"
			/>
		</div>
	);
};

export default ParallaxBackground;
