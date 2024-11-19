import Header from "../layout/Header";
import AppIntroduction from "../components/AppIntroduction";
import ParallaxBackground from "../components/ParallaxBackground";

const TypingEffect = () => {
	return (
		<>
			<Header />
			<AppIntroduction />
			<ParallaxBackground imageSrc="src/assets/img/ParallaxBackground.png" />
		</>
	);
};

export default TypingEffect;
