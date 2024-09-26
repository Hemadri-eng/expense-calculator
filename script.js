let total = 0;

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerText = `${expenseName}: $${expenseAmount.toFixed(2)}`;
    
    // Append to the expense list
    document.getElementById('expenseList').appendChild(li);
    
    // Update total
    total += expenseAmount;
    document.getElementById('totalAmount').innerText = `Total: $${total.toFixed(2)}`;
    
    // Clear inputs
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
}
