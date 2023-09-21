import {Link, Outlet, useLoaderData} from '@remix-run/react'
// import styles from '~/styles/expenses.css'
import ExpensesList from '~/component/expenses/ExpensesList';
import {FaPlus,FaDownload} from 'react-icons/fa'
import { getExpenses } from '../data/expense.server';
import { guardSessionValidation } from '../data/auth.server';


export default function Index(){

    

    const Expense_Data = useLoaderData();
    const hasExpense = Expense_Data && Expense_Data.length > 0
    return(
        <>
            <Outlet/>
            <main>
                <section id='expenses-actions' >
                    <Link to='add'>
                        <FaPlus/>
                        <span >Add Expenses</span>
                    </Link>
                    <a href='expenses/raw'>
                        <FaDownload/>
                        <span>Export Raw Data</span>
                    </a>
                    
                    
                </section>

             
                {hasExpense && <ExpensesList expenses={Expense_Data} />}
                {!hasExpense && <section id='no-expenses'>
                    <p>No Expenses found</p>
                    <p>Start <Link to='add'>add something</Link> today</p>
                    </section>
                    }
            </main>

        </>
    );
}


export async function loader({request}){
   const userId =  await guardSessionValidation(request)

    const expense = await getExpenses(userId);
    return expense
}

