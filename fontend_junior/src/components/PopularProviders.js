import React, { useState } from "react";
import providers from "../providers.json"; // Importez le fichier JSON
import "./PopularProviders.css"; // Importez le fichier CSS

const PopularProviders = ({ input, setInput }) => {
	const [suggestions, setSuggestions] = useState([]);

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setInput(inputValue);
		console.log(inputValue);

		// Si l'entrée ne contient pas le caractère "@"
		if (!inputValue.includes("@")) {
			// Affiche les 3 fournisseurs les plus populaires
			const popularSuggestions = providers.slice(0, 3);
			setSuggestions(popularSuggestions);
		} else {
			// Si l'entrée contient le caractère "@"
			// Affiche les suggestions correspondantes
			const matchingSuggestions = providers.filter((provider) =>
				provider.includes(inputValue.split("@")[1])
			);
			setSuggestions(matchingSuggestions.slice(0, 3));
		}
	};

	const handleSuggestionClick = (suggestion) => {
		const inputValue = input.includes("@") ? input.split("@")[0] : input;
		// Crée une nouvelle saisie avec le fournisseur sélectionné
		const newInput = `${inputValue}@${suggestion}`;
		console.log("Selected suggestion:", newInput);
		setInput(newInput);
		setSuggestions([]);
	};

	return (
		<div>
			{/* Saisie de l'utilisateur */}
			<input
				type="text"
				value={input}
				onChange={handleInputChange}
				placeholder="Saisissez une adresse e-mail"
			/>
			{/* Liste des suggestions */}
			<ul>
				{suggestions.map((suggestion, index) => (
					<li key={index} onClick={() => handleSuggestionClick(suggestion)}>
						{suggestion}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularProviders;
