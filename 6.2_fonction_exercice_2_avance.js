function calculImc(poids, tailleEnCm) {
	poids = prompt("quel est votre poids en kg ?");
	tailleEnCm = prompt("quel est votre taille en cm ? ");
	let tailleEnM = tailleEnCm / 100;
	console.log(tailleEnM);
	let imc = poids / (tailleEnM * tailleEnM);
	return imc;
}

let imc = calculImc();
alert("votre imc est de  " + imc);
