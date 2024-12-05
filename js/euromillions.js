/* L'euromillions consiste à faire un tirage de 5 nombres entre 1 et 50 et deux numéros étoiles entre 1 et 12

liste de courses bien utiles :
Math.random()
while(**)
Math.ceil(**)
push(**)
includes(**)
setTimeout(**)
zone boule show
*/

let numeroPrincipal = [];
while (numeroPrincipal.length < 5) {
    const num = Math.ceil(Math.random() * 50);
    if (!numeroPrincipal.includes(num)) {
        numeroPrincipal.push(num);
    }
};
console.log(numeroPrincipal);

let numeroEtoile = [];
while (numeroEtoile.length < 2) {
    const num = Math.ceil(Math.random() * 12);
    if (!numeroEtoile.includes(num)) {
        numeroEtoile.push(num);
    }
};

console.log(numeroEtoile)

let numeroGagnant = document.getElementById("resultat")

numeroPrincipal.forEach((numero, index) => {
    let div = document.createElement("div");
    div.textContent = numero;
    div.classList.add(`zone`, `boule`);
    numeroGagnant.appendChild(div);

    setTimeout(() => { div.classList.add('show') }, index * 2000);
   
    });

numeroEtoile.forEach((numero,index) => {
    let div = document.createElement("div");
    div.textContent = numero;
    div.classList.add(`zone`, `etoile`);
    numeroGagnant.appendChild(div);
    setTimeout(() => { div.classList.add('show') }, (index + 5)  * 2000);

});



