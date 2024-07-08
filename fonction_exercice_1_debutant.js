function abracadabra() {
	let prenom = prompt("Quel est votre prénom ?");
	let nom = prompt("Quel est votre nom ?");
	let age = prompt("Quel est votre age ?");

	// methode 1
	// alert(
	// 	`Sapristi ! On ne m'avait pas prévenu que c'était vous, ${prenom} ! Euh... Je veux dire... Monsieur le grand magicien ${nom} ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !`
	// );

	// methode 2
	alert(
		"Sapristi ! On ne m'avait pas prévenu que c'était vous, " +
			prenom +
			"! Euh... Je veux dire... Monsieur le grand magicien " +
			nom +
			"! Cela fait déjà " +
			age +
			" ans que vous faites rayonner notre contrée !"
	);
}

abracadabra();
