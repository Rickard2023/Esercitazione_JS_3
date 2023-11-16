//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 34;
let num2 = 33;
console.log( (num1 > num2) ? "1a) Il numero più grande è " + num1 : (num1 < num2) ? "1a) Il numero più grande è " + num2 : "1a) controlla che i due numeri non siano uguali");

// oppure
let greater = (num1 > num2) ? num1 : (num1 < num2) ? num2 : null;
console.log( greater ? "1b) Il numero più grande è " + greater : "controlla che i due numeri non siano uguali");

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num = 19;
let numSize = null;
if(num < 5){
  numSize = "2) - Tiny";
}
else if(num < 10){
  numSize = "2) - Small";
}
else if(num < 15){
  numSize = "2) - Medium";
}
else if(num < 20){
  numSize = "2) - Large";
}
else { // oppure if (num >= 20)
  numSize = "2) - Huge";
}
console.log(numSize);

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
for(let n = 0; n <= 10; n++)
{
  console.log("3) for cycle - printing " + n);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(let n = 0; n <= 15; n++)
{
  let numType = n % 2 === 0 ? " even" : " odd";
  console.log("4) for cycle - printing " + n + numType);
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let val1 = 0;
let val2 = 8;
let checks = [false, false, false] ;
if(val1 === 8 || val2 === 8){
  checks[0] = true;
}
if(val1 + val2 === 8){
  checks[1] = true;
}

if(val1 - val2 === 8){
  checks[2] = true;
}
if(checks[2] === false && (val2 - val1) === 8){
  checks[2] = true;
}

console.log(checks[0] ? "Extra 1) At least one of the variables is 8" : "Extra 1) None of the two variables is 8");
console.log(checks[1] ? "Extra 1) The sum of the two variables is 8" : "Extra 1) The sum of the two variable is not 8");

let biggerVal = val2 > val1 ? val2 : val1;
let smallerVal = biggerVal === val2 ? val1 : val2;
console.log(checks[2] ? "Extra 1) The difference of " + biggerVal + " and " + smallerVal + " is 8" : "Extra 1) The difference of the two numbers is not 8");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let deliveryFee = totalShoppingCart > 50 ? 0 : 10;
totalShoppingCart += deliveryFee;
console.log("Extra 2) totalShoppingCart is " + totalShoppingCart);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart -= deliveryFee; // adjusting final price back to normal, not counting fees

let discountValue = (totalShoppingCart / 100) * 20;
totalShoppingCart -= discountValue;

deliveryFee = totalShoppingCart > 50 ? 0 : 10;
totalShoppingCart += deliveryFee;

console.log("Extra 3) discountValue is " + discountValue + " delivery fee is " + deliveryFee + " totalShoppingCart is " + totalShoppingCart);

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
let isMale = false;
let gender = isMale === false ? "female" : "male";
console.log("Extra 4) gender is " + gender);

/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let i = 0; i <= 100; i++)
{
  let print = null;
  if(i % 5 === 0 && i % 3 === 0){
    print = "Extra 5) FizzBuzz instead of " + i;
  }
  else if(i % 5 === 0){
    print = "Extra 5) Buzz instead of " + i;
  }
  else if(i % 3 === 0){
     print = "Extra 5) Fizz instead of " + i;
  }
  else
    print = "Extra 5) " + i;

  console.log(print);
}