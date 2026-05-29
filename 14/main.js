console.log("connesso");

let testototal = prompt("Quanto hai speso in totale?");
let total = Number(testototal)
const shipping = 5;

if (total >= 50) {
    console.log("Spedizione gratuita")
} else if (total <= 49.99) {
    console.log("Il totale è " + [total + shipping] + " €")
};