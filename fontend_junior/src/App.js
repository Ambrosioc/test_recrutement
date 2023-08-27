import React, { useState } from "react";
import PopularProviders from "./components/PopularProviders.js";
import "./App.css";

export default function App() {
	const [input, setInput] = useState("");

	return (
		<div className="App">
			<h1>Suggestions de fournisseurs d'e-mail</h1>
			<PopularProviders input={input} setInput={setInput} />
		</div>
	);
}
