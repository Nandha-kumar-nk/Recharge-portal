let balance = 500;
const transactionList = document.getElementById("transaction-list");
const balanceElement = document.getElementById("balance");
function addMoney() {
    let amount = prompt("Enter amount to add:");
    amount = parseInt(amount);
    if (!isNaN(parseFloat(amount)) && parseFloat(amount) > 0) {
        const numericAmount = parseFloat(amount); // Ensure `amount` is converted to a number
        balance += numericAmount;
        updateBalance();
        addTransaction(`+₹${numericAmount}`, "green"); // Correct template literal usage
    } else {
        alert("Invalid amount! Please enter a positive number.");
    }
    
}
function updateBalance() {
    balanceElement.innerText = balance;
}
function addTransaction(amount, color) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${new Date().toLocaleDateString()}</span> <span style="color:${color};">${amount}</span>`;
    transactionList.prepend(li);
}
// Example transactions
addTransaction("-₹100", "red");
addTransaction("+₹200", "green");