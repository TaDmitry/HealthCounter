import { Link } from "react-router-dom";

const IntroductionAppHeader = () => {
	return (
		<header className="header">
			<section className="header__navigation">
				<div className="header__logo">
					<Link to="/">
						<h1>LifeCounter</h1>
					</Link>
				</div>
				<nav className="header__nav">
					<div className="header__office">
						<Link to="/register" className="header__office-a">
							<i className="fa-regular fa-circle-user"></i>
							<p>Entrance</p>
						</Link>
					</div>
				</nav>
			</section>
		</header>
	);
};

export default IntroductionAppHeader;
