console.log("connesso");

let textBalance = prompt("Qual è il tuo saldo attuale?");
let balance = Number(textBalance);

if (balance > 0) {
    let textMoney = prompt("Quale importo vuoi prelevare?")
    let money = Number(textMoney)
    if (balance >= money) {
        balance = balance - money;
        console.log("Prelievo effettuato. " + "Saldo aggiornato: " + balance)
    } else {
        console.error("Saldo insufficiente")
    }
} else {
    console.warn("Importo non valido");
}