let i = 1;

while (i < 5) {
	console.log("Ligne: " + i);
	i++;
}

// il y a un moment ou cette condition doit venir fausse sinon elle se répètera infiniment
// Eviter de faire des boucles infini car cela peut détruire la machine
// en incrémentant 1 cela va augmenter la valeur de 1 un moment donné elle sera plus inférieur à 5

// il faut que tout tard...cette condition devient fausse pour sortir de la boucle

// la boucle for

// premier argument une variable
// deuxieme argument une condition
// troisieme argument une incrémentation
// voici la boucle For
for (let i = 1; i < 5; i++) {
	console.log("ligne numéro : " + i);
}

// -----------------------------------------------------------------------------------------------------------
// Hey !

// Certains d'entre-vous se demandent peut-être pourquoi je ne parle pas des boucles suivantes :

// for...in

// for...of

// foreach

// Il s'agit de boucles qui vont être utilisées pour parcourir des objets. Nous n'avons pas encore vu cette notion, nous parlerons donc de ces boucles lorsque nous aborderons les objets, don't panic !

// Je vous attends dans la prochaine session, on va casser nos boucles !
