import "./css/App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Entrar from "./Entrar";
import Login from "./LoginPath";

function App() {

	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/" element={<Entrar />} />
			<Route path="/login" element={<Login />} />
		</Routes>

		
	);
};

export default App;
