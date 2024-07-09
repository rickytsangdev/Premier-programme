// challenge
// créer une fonction demanderAge() qui ne prends aucun parametre et qui va se contenter de demander à l'utilsiateur son age et va lui afficher x ans

function demanderAge() {
	let userAge = prompt("Quel âge avez vous ?");
	alert("vous avez " + userAge + " ans !");
}
// demanderAge();

function prevoirAge() {
	let userAge = prompt("Quel âge avez vous ?"); // "32" + 1 = 321
	userAge = parseInt(userAge);
	// ici avec parseInt ----------> "32" = 32

	alert("Avec prévoir age...vous aurez " + (userAge + 1) + " ans !");
}
prevoirAge();

// si je met 32 :
// cela affiche 321 car prompt() de javascript les stooooocks toujours en chaaaaaaaiiiiiiinnnnneeeeeee deeeeeeee caracteeeerreeee

// c'est pourquoi cela nous introduit la méthode javascript parseInt()
// tout ce qui a entre ces parenthese (les parametre que l'on lui passe) transforme les chaines de caractere en nombre

// d'autre fonctions comme parseInt () =
// - Number()
// - parseFloat()

// convertir des informations (chaine de caractere) en nombre il faut impérativement utiliser l'un de ces 3 méthodes

// INVERSEMENT

// transformer un nombre en chaine de caractere :

// BASE : utiliser la concaténation (méthode barbare)

// nombre.toString(); qui s'ajoute à notre variable avec un point.
