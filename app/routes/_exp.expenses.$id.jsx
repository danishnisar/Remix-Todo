import {Link, useNavigate} from '@remix-run/react'
import ExpenseRecordForm from '~/component/expenses/ExpenseForm'
import Model from '~/component/util/Modal'
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