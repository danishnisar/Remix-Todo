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


export default function Index(){
    return(
        <>
            <Outlet/>
            <main>
                <ExpensesList expenses={Expense_Dummy}/>
            </main>
        </>
    );
}

// export function links(){
//     return [{rel:'stylesheet',href:styles}];
// }