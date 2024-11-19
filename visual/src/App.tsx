import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroductionApp from "./views/IntroductionApp";
import Register from "./views/auth/Register";
import PersonalAccount from "./views/auth/PersonalAccount/PersonalAccount";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<IntroductionApp />} />
				<Route path="/register" element={<Register />} />
				<Route path="/register/personal-account" element={<PersonalAccount />} />
			</Routes>
		</Router>
	);
};

export default App;
