let heure = 12;

// une condition est un Boolean
// elle est vrai d'origine (true)

// heure = 11;
// heure != 11;
// heure < 11;
// heure > 11
// heure >= 11

if (heure < 12) {
	console.log("c'est le matin!");
} else {
	console.log("c'est laprès midi");
}

// age
// -18 : vous n'etes pas majeur
// 18 à 20 : vous etes majeur en France
// 21+ : vous êtes majeur partout, à vous les casinos

// exercice de l'age

let ageInput = prompt("Quel age avez-vous ?");

if (ageInput < 18) {
	alert("Vous n'êtes pas majeur ! Rentrez chez vous !");
} else if (ageInput >= 21) {
	alert("vous êtes majeur partout , à vous les casinos !");
} else {
	alert("Vous êtes majeur qu'en France, alors restez la!");
}
