document.addEventListener("DOMContentLoaded", () => {
    const transactions = [
        {
            id: "TXN001",
            date: "2025-02-15 10:30 AM",
            type: "Mobile Recharge",
            amount: "$50",
            status: "Successful",
            method: "Wallet",
            beneficiary: "9876543210",
        },
        {
            id: "TXN002",
            date: "2025-02-14 08:20 PM",
            type: "Data Recharge",
            amount: "$30",
            status: "Failed",
            method: "Credit Card",
            cardNumber: "1234567812345678",
            beneficiary: "12345",
        },
        
        // Add more transactions here...
        // {
        //     id: "TXN003",
        //     date: "2025-02-12 05:15 PM",
        //     type: "Mobile Recharge",
        //     amount: "$20",
        //     status: "Successful",
        //     method: "Bank Transfer",
        //     beneficiary: "1234567890",
        // },
        // {
        //     id: "TXN004",
        //     date: "2025-02-11 03:45 AM",
        //     type: "Data Recharge",
        //     amount: "$40",
        //     status: "Partial Success",
        //     method: "Mobile Recharge",
        //     beneficiary: "9876543210",
        // },
        // // Add more transactions here...
        // {
        //     id: "TXN005",
        //     date: "2025-02-09 12:30 PM",
        //     type: "Mobile Recharge",
        //     amount: "$60",
        //     status: "Failed",
        //     method: "Bank Transfer",
        //     beneficiary: "1234567890",
    ];
    const transactionBody = document.getElementById("transactionBody");
    const searchInput = document.getElementById("searchInput");
    const filterStatus = document.getElementById("filterStatus");
    function getMaskedCardNumber(cardNumber) {
        return `**** **** **** ${cardNumber.slice(-4)}`;
    }
    function renderTransactions(data) {
        transactionBody.innerHTML = ""; 
        data.forEach((transaction) => {
            const row = document.createElement("tr");
            const paymentMethod =
                transaction.method === "Credit Card"
                    ? `${transaction.method} (${getMaskedCardNumber(transaction.cardNumber)})`
                    : transaction.method;
            row.innerHTML = `
                <td>${transaction.id}</td>
                <td>${transaction.date}</td>
                <td>${transaction.type}</td>
                <td>${transaction.amount}</td>
                <td>${transaction.status}</td>
                <td>${paymentMethod}</td>
                <td>${transaction.beneficiary}</td>
            `;
            transactionBody.appendChild(row);
        });
    }
    renderTransactions(transactions);
    filterStatus.addEventListener("change", () => {
        const filteredTransactions = transactions.filter(
            (transaction) =>
                filterStatus.value === "all" || transaction.status === filterStatus.value
        );
        renderTransactions(filteredTransactions);
    });
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredTransactions = transactions.filter(
            (transaction) =>
                transaction.id.toLowerCase().includes(query) ||
                transaction.beneficiary.toLowerCase().includes(query)
        );
        renderTransactions(filteredTransactions);
    });
    document.getElementById("exportBtn").addEventListener("click", () => {
        alert("Export functionality coming soon!");
    });
});
