import {Link, useNavigate} from '@remix-run/react'
import ExpenseRecordForm from '~/component/expenses/ExpenseForm'
import Model from '~/component/util/Modal'
import { deleteExpenseById, getExpensById, updateExpenseById } from '../data/expense.server';
import { ValidationCheck } from '../data/errorValidation.server';
import { Response, redirect } from '@remix-run/node';




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


// export async function loader({params}){
//     const expenseId = params.id;
//     const expenseIdRecord = await getExpensById(expenseId);
//     return expenseIdRecord
// }


export async function action({request,params}){

    const idD = params.id 

    if(request.method === 'PATCH'){
        let data = await request.formData();
        let parsData = Object.fromEntries(data);
        parsData['id'] = idD
        console.log(parsData);
        try{
            ValidationCheck(parsData);
        }catch(error){
            console.log('validationError',error);
            return error;
        }
    await updateExpenseById(parsData);
    return redirect('/expenses')
    }else if(request.method === 'DELETE'){
       await deleteExpenseById(idD);
       return {'Deleted':idD};
    //    return redirect('/expenses')
    }

   

}