import {Link, Outlet, useLoaderData} from '@remix-run/react'
// import styles from '~/styles/expenses.css'
import ExpensesList from '~/component/expenses/ExpensesList';
import {FaPlus,FaDownload} from 'react-icons/fa'
import { getExpenses } from '../data/expense.server';


export default function Index(){

    const Expense_Data = useLoaderData();

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
                <ExpensesList expenses={Expense_Data}/>
            </main>
        </>
    );
}


export function loader(){

    return getExpenses();

}

