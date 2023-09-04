import Chart from '~/component/expenses/Chart'
import ExpenseStatistics from '~/component/expenses/ExpenseStatistics'
import { getExpenses } from '../data/expense.server';
import { useLoaderData } from '@remix-run/react';
// import styles from '~/styles/expenses.css'




export default function AnalysisIndex(){
    const Expense_Data = useLoaderData();
    return (
        <main>
            <Chart expenses={Expense_Data}/>
            <ExpenseStatistics expenses={Expense_Data}/>
        </main>
    );
}

export function loader(){
    return getExpenses();
}