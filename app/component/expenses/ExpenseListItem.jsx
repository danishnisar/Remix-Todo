import { Form, Link,useNavigate } from "@remix-run/react";
import { deleteExpenseById } from "../../data/expense.server";

function  ExpenseListItem({id, title, amount,date }) {

  const navigate = useNavigate()
 
  async  function deleteExpenseItemHandler(){
    const idd = id
    const result =  await deleteExpenseById(idd);
      console.log(result,'deleteResult');
      navigate('..');
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
        <sub>{new Date(date).toISOString().slice(0,10)}</sub>
      </div>
      <menu className="expense-actions">
        {/* <button onClick={deleteExpenseItemHandler}>Delete</button> */}
        <Form method="DELETE" action={`/expenses/${id}`}>
        <button>Delete</button>
        </Form>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;


