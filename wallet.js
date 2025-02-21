let balance = 110.00;
let cashback = 10.00;
let amount = 100.00;

function addFunds() {
    function updateUI() {
        document.getElementById("balance").innerText = balance.toFixed(2);
        document.getElementById("cashback").innerText = cashback.toFixed(2);
        document.getElementById("amount").innerText = amount.toFixed(2);
    }
    const input = parseFloat(document.getElementById("amountInput").value);
    if (!isNaN(input) && input > 0) {
        balance += input;
        updateUI();
        alert(`Added $${input.toFixed(2)} to your wallet.`);
    } else {
        alert("Please enter a valid amount.");
    }
}

function withdrawFunds() {
    function updateUI() {
        document.getElementById("balance").innerText = balance.toFixed(2);
        document.getElementById("cashback").innerText = cashback.toFixed(2);
        document.getElementById("amount").innerText = amount.toFixed(2);
    }
    const input = parseFloat(document.getElementById("amountInput").value);
    if (!isNaN(input) && input > 0 && input <= balance) {
        balance -= input;
        cashback += input * 0.05; // Cashback is updated only when funds are withdrawn
        updateUI();
        alert(`Withdrew $${input.toFixed(2)} from your wallet.`);
    } else {
        alert("Invalid amount or insufficient balance.");
    }
}

function repay() {
    alert("Repayment functionality coming soon!");
}
