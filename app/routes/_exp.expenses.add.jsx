import {Link, useNavigate} from '@remix-run/react'
import ExpenseRecordForm from '~/component/expenses/ExpenseForm'
import Modal from '../component/util/Modal';
import { AddExpense } from '../data/expense.server';


export default function ExpenseAddIndex(){
    const navigate = useNavigate();

    function CloseHandler(){
        navigate('..');
    }

    return(
        <main>
            <Modal onClose={CloseHandler}>
                <ExpenseRecordForm/>
            </Modal>
        </main>
    );

}

export async function action({request}){
    
    let data = await request.formData();
    const expenseData = Object.fromEntries(data);
    console.log('log',expenseData);
    const isError = await AddExpense(expenseData);
    console.log('log-db',isError);
    return null

}