// l'exemple d'un robot qui va chercher du pain à la boulangerie

// prendre l'argent
// fermer la Porte
// appeler l'ascenseur
// monter dans  l'ascenceur
// aller à la boulangerie
// prendre du pain
// payer le pain
// revenir à la maison

// Beaucoup d'instruction la pour beaucoup de répétition

// cette instruction personnalisé sera englobé dans ce qu'on appelle une fonction.

// cette instruction portera un nom comme "aller chercher du pain"

// quand je vais appeler cette fonction
// le robot va lire les instructions à l'interieur de ce bloc

// cela va beaucoup me faciliter la tache au quotidien

// lorsque l'on appele la fonction name () ci dessous tout ce qui a l'intérieur sra executé

function name() {}

function sayHello() {
	console.log("Hello Buddy!");
	console.log("What can I do for you today?");
	alert("Yo bro !");
}

sayHello();

function lastName(params) {}

// ici params est tout simplement une variable aussi simple que çà !!!!
// tout ce qui est entre parenthese est une variable MODIFIABLE
// on peut passer autant de parametre que l'on veut soi autant de variable que je veux

function addition(nombreUn, nombreDeux) {
	console.log(nombreUn + nombreDeux);
}

addition(5, 5.3);

// ici cela va me renvoyer Nan

function sayMyName(prenom) {
	console.log("Hello " + prenom + " !");
}

sayMyName();

function crieDeGuerre() {
	let crie = "Toujours plus fort!!!!!";
	console.log(crie);
}

crieDeGuerre();
console.log(crie);

// Ceci est une énorme erreur car la variable crie n'est pas accessible en dehors de notre fonction crieDeGuerre()
// si on essaye de l'afficher en dehors de notre fonction pour javascript elle n'existe pas
// pour ce faire il faudra la créer en dehors
// comme ci-dessous :

let crie2 = "salut salut";
console.log(crie2);
// ceci est une variable globale CAD à la racine de notre projet, elle sera accessible partout dans notre code

function crieDeGuerre2() {
	crie2 = "Toujours plus haut!!!!!";
}

crieDeGuerre2();
console.log(crie2);
