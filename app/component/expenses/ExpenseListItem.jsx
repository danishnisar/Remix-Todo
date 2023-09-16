import { Form, Link, useSubmit } from "@remix-run/react";


function  ExpenseListItem({id, title, amount,date }) {


 const submitDelete = useSubmit();
  async function deleteExpenseItemHandler(){
    submitDelete(null,{
      method:'DELETE',
      action:`/expenses/${id}`
    });
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
        <sub>{new Date(date).toISOString().slice(0,10)}</sub>
      </div>
      <menu className="expense-actions">
        <button onSubmit={deleteExpenseItemHandler}>Delete</button>
        {/* <Form method="DELETE" action={`/expenses/${id}`}>
        <button>Delete</button>
        </Form> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;


