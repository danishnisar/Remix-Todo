import {Link, useNavigate} from '@remix-run/react'
import ExpenseRecordForm from '~/component/expenses/ExpenseForm'
import Model from '~/component/util/Modal'
import { getExpensById } from '../data/expense.server';
export default function ExpenseDynamicIndex(){
    const navigate = useNavigate();

    function CloseHandler(){
        navigate('..');
    }
    return(
        <main>
            <Model onClose={CloseHandler}>
                <ExpenseRecordForm/>
            </Model>
        </main>
    );
    

}


export async function loader({params}){
    const expenseId = params.id;
    const expenseIdRecord = await getExpensById(expenseId);
    return expenseIdRecord
}