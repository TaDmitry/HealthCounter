import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroductionApp from "./views/IntroductionApp";
import Register from "./views/Register";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<IntroductionApp />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
};

export default App;
