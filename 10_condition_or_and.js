let gareDeDepart = "Valenciennes";

let gareDarrivee = "dezz";

let chauffeur = "edez";

// ici c'est une conditon AND il faut le les deux conditons soit VRAI pour que cela fonctionne !
if (gareDeDepart != "" && gareDarrivee != "") {
	console.log("le train va démaré !!!!!! ");
}

if (gareDeDepart != "" || gareDarrivee != "") {
	console.log("le train va démaré");
}

if (gareDeDepart != "" && gareDarrivee != "" && chauffeur != "") {
	console.log("le train va partir");
}

// Dans ce genre de cas bien définir si la conditon est true or false

// Pour que la condition se passe il faut que se soit true (sauf si on indique le contraire)

// BONUS

// && double eperluette
// || double pipe
// ! NOT (le résultat de ma conditon est inversé. Si le résultat de ma condition est TRUE alors elle vaut FALSE // elle inverse une condition !!!!! )
