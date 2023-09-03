import {Link} from '@remix-run/react'
import ExpenseRecordForm from '~/component/expenses/ExpenseForm'
import Modal from '../component/util/Modal';
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