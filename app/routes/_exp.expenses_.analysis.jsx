import Chart from '~/component/expenses/Chart'
import ExpenseStatistics from '~/component/expenses/ExpenseStatistics'
// import styles from '~/styles/expenses.css'

const Dummy_Expenses = [
    {
        id:'e-1',
        title:'First Expense',
        amount:12.99,
        date:new Date().toISOString(),
    },
    {
        id:'e-2',
        title:'Secound Expense',
        amount:19.99,
        date:new Date().toISOString(),
    }

];


export default function AnalysisIndex(){
    return (
        <main>
            <Chart expenses={Dummy_Expenses}/>
            <ExpenseStatistics expenses={Dummy_Expenses}/>
        </main>
    );
}

// export function links(){
//     return [{rel:'stylesheet',href:styles}];
// }