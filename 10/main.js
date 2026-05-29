console.log("connesso");

let hours = prompt("Quante ore sosterai nel parcheggio?");

if (hours <= 2) {
    console.log("Il costo è 5 €")
} else if (hours >= 3 && hours <= 5) {
    console.log("Il costo è 10 €")
} else if (hours >= 6) {
    console.log("Il costo è 15 €")
};