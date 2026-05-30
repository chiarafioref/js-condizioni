console.log("connesso");

// DICHIARAZIONE
let temperature = prompt("Quanti gradi ci sono fuori?");
let message;


// LOGICA
if (temperature < 15) {
    let rain = prompt("Piove?")
    if (rain.toLowerCase() === "si") {
        message = "metti l'impermeabile";
    } else {
        message = "metti la giacca";
    }
} else {
    message = "vai leggero";
}


// OUTPUT
console.log(message);
