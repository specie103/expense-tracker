import React from 'react'

function IncomeExpensis() {
  return (
    <div className='d-flex p-0 border border-1 w-75 incomeExpense mb-2'>
        <div className='income'>
            <h3> <i className="bi bi-plus-circle p-1"></i> Income</h3>
            <p>+#0.00</p>
        </div>
        <div className='expense'>
            <h3> <i className="bi bi-dash-circle p-1 fw-bold"></i> Expense</h3>
            <p>-#0.00</p>
        </div>
        
    </div>
  )
}

export default IncomeExpensis