console.log("connesso");

const price = 20;
let fidelity = prompt("Hai la tessera fedeltà? si/no");

if (fidelity === "si") {
    console.log("Il prezzo è " + (price - (price / 10)) + " €")
} else {
    console.log("Il prezzo è " + price + " €")
};
