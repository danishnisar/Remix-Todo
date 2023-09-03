import { Outlet } from "@remix-run/react";
import ExpesensStyle from '~/styles/expenses.css'
import ExpensesHeader from "../component/navigation/ExpensesHeader";

export default function ExpensePathless(){
    return(
        <>
        <ExpensesHeader/>
        <Outlet/>
        </>
    ); 
}


export function links(){
    return [{rel:'stylesheet',href:ExpesensStyle}];
}

