import { getExpenses } from "../data/expense.server";



export function loader(){
    return getExpenses();
}