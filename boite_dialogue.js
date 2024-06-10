console.log("test");

// n'oubliez pas qu'a chaque utilisation de méthode JS, souvent l'IDE vient proposer ce qu'il y a comme paramettre a cette fonction
// a bien regarder

// la fonction alert
alert("hello world");

// message de confirmation
if (confirm("Souhaitez-vous confirmer ? ")) {
	alert("c'est confirmé!");
} else {
	alert("ok j'annule");
}
// le bouton 'annuler' va annuler la condition

// le mot clé prompt prend en paramettre un message

// exercice de prompt
let age = "";
userAge = prompt("Entrez votre age : ");
console.log(typeof userAge);
age = userAge;
alert("vous avez " + age + " ans");
