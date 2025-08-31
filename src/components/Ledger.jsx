import React from 'react';
import '../styless/Ledger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFilter } from '@fortawesome/free-solid-svg-icons';

const Ledger = () => {
    const transactions = [
        { date: '2024-02-15', description: 'Medical Supplies', type: 'Expense', amount: -2500.00, balance: 47500.00 },
        { date: '2024-02-14', description: 'Patient Payment', type: 'Income', amount: 1200.00, balance: 50000.00 },
        { date: '2024-02-13', description: 'Equipment Purchase', type: 'Expense', amount: -5000.00, balance: 48800.00 },
        { date: '2024-02-12', description: 'Consultation Fees', type: 'Income', amount: 3500.00, balance: 53800.00 },
        { date: '2024-02-11', description: 'Insurance Payment', type: 'Income', amount: 2800.00, balance: 50300.00 },
    ];

    return (
        <div className="ledger-container">
            <div className="ledger-header">
                <h2>Financial Ledger</h2>
                <div className="header-actions">
                    <button className="filter-btn">
                        <FontAwesomeIcon icon={faFilter} /> Filter
                    </button>
                    <button className="export-btn">
                        <FontAwesomeIcon icon={faDownload} /> Export
                    </button>
                </div>
            </div>

            <div className="summary-cards">
                <div className="summary-card income">
                    <h3>Total Income</h3>
                    <p>₹7,500.00</p>
                </div>
                <div className="summary-card expense">
                    <h3>Total Expenses</h3>
                    <p>₹7,500.00</p>
                </div>
                <div className="summary-card balance">
                    <h3>Net Balance</h3>
                    <p>₹47,500.00</p>
                </div>
            </div>

            <div className="ledger-table-container">
                <table className="ledger-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td>
                                    <span className={`transaction-type ${transaction.type.toLowerCase()}`}>
                                        {transaction.type}
                                    </span>
                                </td>
                                <td className={transaction.amount < 0 ? 'expense-amount' : 'income-amount'}>
                                    ₹{Math.abs(transaction.amount).toFixed(2)}
                                </td>
                                <td>₹{transaction.balance.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ledger;