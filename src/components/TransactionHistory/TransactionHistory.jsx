import css from './TransactionHistory.module.css'


export default function TransationHistory ({items}) {
    return (
    <table className={css.table}>
    <thead className={css.thead}>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map(item => ( 
            <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            </tr>
            )
        )}
    </tbody>
    </table>
    )
}