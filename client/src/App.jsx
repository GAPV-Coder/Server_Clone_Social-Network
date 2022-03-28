import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/displays/Home";
import Signup from "./components/displays/Signup";
import Signin from "./components/displays/Signin";
import Profile from "./components/displays/Profile";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/signin">
						<Signin />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
