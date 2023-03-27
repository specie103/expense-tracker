import React from 'react'

function TransactionList() {
  return (
    <div className='mb-3 transactionList'>
        <h3>History</h3>
        <ul>
            <li>
                cash <span>-#400</span> <button className='mx-auto'>x</button>
            </li>
        </ul>
    </div>
  )
}

export default TransactionList