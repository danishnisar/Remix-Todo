import { guardSessionValidation } from "../data/auth.server";
import { getExpenses } from "../data/expense.server";



export async function loader({request}){
    await guardSessionValidation(request)
    return getExpenses();
}