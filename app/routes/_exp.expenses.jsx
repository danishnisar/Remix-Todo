const Expense_Dummy = [
    {
        id:'e-1',
        title:'Income one',
        amount:123.30,
        date:new Date().toISOString()
    },
    {
        id:'e-2',
        title:'Income two',
        amount:13.30,
        date:new Date().toISOString()
    }
];


import {Link, Outlet} from '@remix-run/react'
// import styles from '~/styles/expenses.css'
import ExpensesList from '~/component/expenses/ExpensesList';
import {FaPlus,FaDownload} from 'react-icons/fa'

export default function Index(){
    return(
        <>
            <Outlet/>
            <main>
                <section id='expenses-actions'>
                    <Link to='add'>
                        <FaPlus/>
                        <span>Add Expenses</span>
                    </Link>
                    <a href='expenses/raw'>
                        <FaDownload/>
                        <span>Export Raw Data</span>
                    </a>
                </section>
                <ExpensesList expenses={Expense_Dummy}/>
            </main>
        </>
    );
}

// export function links(){
//     return [{rel:'stylesheet',href:styles}];
// }