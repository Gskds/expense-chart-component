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

function updateBarValue(expense) {
    const day = expense.day;
    const dayColumn = document.querySelector(`[data-day="${day}"]`);
    
    if (dayColumn) {
        const barValue = dayColumn.querySelector('.bar-value');
        
        if (barValue) {
            barValue.textContent = `$${expense.amount}`;
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