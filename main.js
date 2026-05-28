console.log(connesso)
let height = prompt("Qual è la tua altezza in cm?")
let age = prompt("Quanti anni hai?")
if (height < 140) {
    console.log("Non puoi accedere alle montagne russe")
}
if (age < 14) {
    console.log("Non puoi accedere alle montagne russe")
}
if (height > 140 & age > 14) {
    console.log("Puoi accedere alle montagne russe")
}