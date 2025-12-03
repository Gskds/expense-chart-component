async function loadExpenseData() {
    try {
        const response = await fetch('/data.json');
        
        if (!response.ok) {
            throw new Error('Fail to load data');
        }
        
        const expenses = await response.json();
        
        const totalExpense = calculateTotal(expenses);
        
        expenses.forEach(expense => {
            updateExpenseBag(expense);
            updateBarHeight(expense, totalExpense)
        })
        
        console.log('Total Expense: ', totalExpense);
    }
    
    catch (error) {
        console.error("Error loading expense data", error)
    }
}

function calculateTotal(expenses) {
        let total = 0;
        for(const expense of expenses ){
            total += expense.amount ;
        }
        return total
    }

function updateBarHeight(expense, totalExpense) {
    const day = expense.day;

    const barWrappers = document.querySelectorAll('.bar-wrapper');
    barWrappers.forEach(wrapper => {
        const bar = document.querySelector(`bar.${day}`);
        console.log(bar)
        const amount = expense.amount;
        const barHeight = (amount / totalExpense) * 300;
        
        bar.style.height = `${barHeight}px`;
    })
}


function updateExpenseBag(expense) {
    const day = expense.day.toLowerCase();
    
    barWrappers.document.querySelectorAll('.bar-wrapper')
    console.log(barWrappers)
    
    if (day) {
        const barValue = document.querySelector('.bar-value');
        barValue.textContent = expense.amount;
        barValue.style.display = "block";
        //   console.log(bar-value)
    }
}
loadExpenseData();