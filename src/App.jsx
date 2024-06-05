import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./components/Profile";

function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/perfil" element={<Profile />} />
		</Routes>
	);
};

export default App;
