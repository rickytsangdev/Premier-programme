// le double pipe

// un peu comme l'opérateur celui si permet de définir une valeur par défaut !

let gareDeDepart = "Valenciennes";

let gareDarrivee = prompt("Ou souhaitez-vous allez ?") || "Gare du Nord?";

if (gareDeDepart != "" && gareDarrivee) {
	alert("le train va partir" + gareDarrivee);
}
