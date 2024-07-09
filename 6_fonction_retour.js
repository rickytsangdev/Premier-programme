let nombreUn = 4,
	nombreDeux = 8;

function addition() {
	let result = nombreUn + nombreDeux;
	// console.log(result);
	return result;
}

// addition();

console.log(addition());

// une fonction qui retourne quelque chose n'affiche pas quelque chose comme console.log
// met une fonction qui nous retourne des valeurs pour qu'on puisse la réutiliser ailleurs
// tout ce qui est après "return" ne sera jamais executé.

// parametre par default
function cuisiner(
	nombreDeGateaux,
	minutesDePreparation = 10,
	minusteDeCuisson = 15
) {
	let resultat = nombreDeGateaux * (minusteDeCuisson + minutesDePreparation);
	return resultat;
}

console.log(cuisiner(5));

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);

console.log(tempsDePreparationFraisier);

let TotalDeTempsDePreparation =
	tempsDePreparationChocolat + tempsDePreparationFraisier;

console.log(TotalDeTempsDePreparation);
