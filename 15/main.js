console.log("connesso");

let temperature = prompt("Quanti gradi ci sono fuori?");
let rain = "si";

if (temperature < 15) {
    prompt("Piove?")
} else if (temperature < 15) {
    console.log("Metti impermeabile")
} else if (temperature < 15 && rain === "si") {
    console.log("Metti giacca")
} else if (temperature >= 15) {
    console.log("Vai leggero")
};