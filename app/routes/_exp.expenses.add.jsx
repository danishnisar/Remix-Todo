import {Link, useNavigate} from '@remix-run/react'
import ExpenseRecordForm from '~/component/expenses/ExpenseForm'
import Modal from '../component/util/Modal';
import { AddExpense } from '../data/expense.server';
import { ValidationCheck } from '../data/errorValidation.server';
import { redirect } from '@remix-run/node';


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
    try{
        ValidationCheck(expenseData)
    }catch(error){
        console.log('validationError',error);
        return error;
    }
    
        

    await AddExpense(expenseData);
    
    return redirect('/expense')

}