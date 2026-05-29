console.log("connesso");

let textbalance = prompt("Qual è il tuo saldo attuale?");
let balance = Number(textbalance);

if (balance >= 0) {
    let textmoney = prompt("Quale importo vuoi prelevare?")
    let money = Number(textmoney)
} if (balance >= money) {
    console.log("Prelievo effettuato. " + "Saldo aggiornato: " + (balance - money))
} else {
    console.log("Saldo insufficiente")
};