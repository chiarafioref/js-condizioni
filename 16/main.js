console.log("connesso");

let textbalance = prompt("Qual è il tuo saldo attuale?");
let balance = Number(textmoney);

if (balance >= 0) {
    let money = prompt("Quale importo vuoi prelevare?")
} if (balance >= money) {
    console.log("Prelievo effettuato. " + "Saldo aggiornato: " + (balance - money))
} else {
    console.log("Saldo insufficiente")
};