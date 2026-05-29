console.log("connesso");

let age = prompt("Quanti anni hai?");
let gender = prompt("Sei maschio 'M' o femmina 'F'?");

if (age >= 67 && gender === "M") {
    console.log("Puoi andare in pensione")
} else if (age >= 62 && gender === "F") {
    console.log("Puoi andare in pensione")
} else {
    console.log("Devi ancora lavorare")
};

