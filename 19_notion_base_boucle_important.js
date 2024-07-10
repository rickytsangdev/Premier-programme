let i = 1;

while (i < 5) {
	console.log("Ligne: " + i);
	i++;
}

// il y a un moment ou cette condition doit venir fausse sinon elle se répètera infiniment
// Eviter de faire des boucles infini car cela peut détruire la machine
// en incrémentant 1 cela va augmenter la valeur de 1 un moment donné elle sera plus inférieur à 5

// il faut que tout tard...cette condition devient fausse pour sortir de la boucle
