import React from "react";
import ParallaxBackground from "../components/ParallaxBackground";

const Header: React.FC = () => {
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
					<h1>
						Lorem ipsum dolor sit.
						<br />
						<p>
							Lorem, ipsum dolor:<samp> Lorem.</samp>
						</p>
					</h1>
				</div>
				<button className="header__introduction-button">
					<a href="">Зарегистрироваться</a>
				</button>
			</section>

			<ParallaxBackground imageSrc="src/assets/img/header__background.png" />
		</header>
	);
};

export default Header;
