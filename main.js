async function loadExpenseData() {
    try {
        const response = await fetch('/data.json');
        
        if (!response.ok) {
            throw new Error('Fail to load data');
        }
        
        const dayColumns = document.querySelectorAll('.day-column')
        
        
        const expenses = await response.json();
        
        expenses.forEach(expense => {updateBarValue(expense);})
        
    }
    
    catch (error) {
        console.error("Error loading expense data", error)
    }
}

// function calculateTotal(expenses) {
//         let total = 0;
//         for(const expense of expenses ){
//             total += expense.amount ;
//         }
//         return total
//     }

// function updateBarHeight(expense, totalExpense) {
//     const day = expense.day;

//     const barWrappers = document.querySelectorAll('.bar-wrapper');
//     barWrappers.forEach(wrapper => {
//         const bar = document.querySelector(`bar.${day}`);
//         console.log(bar)
//         const amount = expense.amount;
//         const barHeight = (amount / totalExpense) * 300;
        
//         bar.style.height = `${barHeight}px`;
//     })
// }


// function updateExpenseBag(expense) {
//     const day = expense.day.toLowerCase();
    
//     barWrappers.document.querySelectorAll('.bar-wrapper')
//     console.log(barWrappers)
    
//     if (day) {
//         const barValue = document.querySelector('.bar-value');
//         barValue.textContent = expense.amount;
//         barValue.style.display = "block";
//         //   console.log(bar-value)
//     }
// }
// loadExpenseData();


function updateBarValue(expense) {
    // console.log(`Processing expense for day: ${expense.day}, amount: ${expense.amount}`);
    
    const day = expense.day;
    const dayColumn = document.querySelector(`[data-day="${day}"]`);
    
    // console.log(`Found dayColumn:`, dayColumn);
    
    if (dayColumn) {
        const barValue = dayColumn.querySelector('.bar-value');
        // console.log(`Found barValue:`, barValue);
        
        if (barValue) {
            barValue.textContent = `$${expense.amount}`;
            // console.log(`Updated barValue to: $${expense.amount}`);
        }
    }
}
loadExpenseData()

// Add hover effect to show value
const bars = document.querySelectorAll('.day-column');

bars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
        barValue.style.opacity = '1';
    });
    
    bar.addEventListener('mouseleave', () => {
        barValue.style.opacity = '0';
    });
})