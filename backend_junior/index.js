const axios = require("axios");
const fs = require("fs/promises");

async function fetchData() {
	try {
		const urls = [
			{
				url: "https://recrutement-practice-default-rtdb.firebaseio.com/informations.json",
				fileName: "informations.json",
			},
			{
				url: "https://recrutement-practice-default-rtdb.firebaseio.com/jobs.json",
				fileName: "jobs.json",
			},
			{
				url: "https://recrutement-practice-default-rtdb.firebaseio.com/users.json",
				fileName: "users.json",
			},
		];

		const responses = await Promise.all(
			urls.map((urlObj) => axios.get(urlObj.url))
		);

		const result = {}; // Initialisez l'objet de résultat à l'extérieur de la boucle

		// Traitement des réponses
		responses.forEach((response, index) => {
			const fileName = urls[index].fileName;
			const data = response.data;

			Object.keys(data).forEach(async (userId) => {
				if (!result[userId]) {
					result[userId] = {};
				}
				Object.assign(result[userId], data[userId]);
			});

			// Écrire les données dans un fichier JSON
			fs.writeFile(fileName, JSON.stringify(data, null, 2))
				.then(() => console.log(`Fichier ${fileName} créé avec succès`))
				.catch((error) =>
					console.error(
						`Erreur lors de la création du fichier ${fileName} :`,
						error
					)
				);
		});

		console.log("Tous les fichiers ont été créés avec succès");
	} catch (error) {
		console.error("Erreur lors de la récuperation des données", error);
	}
}

fetchData();
