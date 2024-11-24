import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as regularCircleUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
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
							<FontAwesomeIcon icon={regularCircleUser} />
							<p>Entrance</p>
						</Link>
					</div>
				</nav>
			</section>
		</header>
	);
};

export default Header;
