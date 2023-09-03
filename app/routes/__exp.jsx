import { Outlet } from "@remix-run/react";
import ExpesensStyle from '~/styles/expenses.css'

export default function ExpensePathless(){
    return <Outlet/>;
}


export function links(){
    return [{rel:'stylesheet',href:ExpesensStyle}];
}

