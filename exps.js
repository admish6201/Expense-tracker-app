


let expenses = [];

let table = document.querySelector('table');

function addExpense() {
    let expenseName = document.getElementById('expense').value;
    let expenseAmount = document.getElementById('amount').value;

    let expense = {
        name: expenseName,
        amount: expenseAmount
    };

    expenses.push(expense);

    updateTable();

    document.getElementById('expense').value = '';
    document.getElementById('amount').value = '';
}

function updateTable() {
    table.innerHTML = `
        <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    `;

    expenses.forEach(function(expense, index) {
        let row = table.insertRow();
        let nameCell = row.insertCell(0);
        let amountCell = row.insertCell(1);
        let editCell = row.insertCell(2);
        let deleteCell = row.insertCell(3);

        nameCell.innerHTML = expense.name;
        amountCell.innerHTML = expense.amount;
        editCell.innerHTML = `<button onclick="editExpense(${index})">Edit</button>`;
        deleteCell.innerHTML = `<button onclick="deleteExpense(${index})">Delete</button>`;
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateTable();
}

function editExpense(index) {
    let expense = expenses[index];
    let expenseName = prompt('Enter new expense name', expense.name);
    let expenseAmount = prompt('Enter new expense amount', expense.amount);

    expense.name = expenseName;
    expense.amount = expenseAmount;

    updateTable();
}
