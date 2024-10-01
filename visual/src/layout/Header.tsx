const IntroductionAppHeader = () => {
	return (
		<header className="header">
			<section className="header__navigation">
				<div className="header__logo">
					<h1>LifeCounter</h1>
				</div>
				<nav className="header__nav">
					<div className="header__office">
						<a href="../../pages/Register.tsx" className="header__office-a">
							<i className="fa-regular fa-circle-user"></i>
							<p>Entrance</p>
						</a>
					</div>
				</nav>
			</section>
		</header>
	);
};

export default IntroductionAppHeader;
