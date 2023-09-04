import { Form, Link, useActionData, useNavigation } from "@remix-run/react";

function ExpenseForm() {

  const dataValidation = useActionData()
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const useNavigations = useNavigation();
  const isSubmitting = useNavigations.state !== 'idle';
  

  // const submit = useSubmit()
  
  // function SubmitHandler(event){
  //   event.preventDefault();

  //   submit(event.target,{
  //     action:'/expenses/add',
  //     method:'post'
  //   })

// }



  return (
    <Form
     method="post" 
     className="form" 
     id="expense-form" 
    // onSubmit={SubmitHandler}
    > 
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title"  maxLength={30} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            // min="0"
            step="0.01"
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date"  required />
        </p>
      </div>
      {dataValidation && (
       <ul>
        {Object.values(dataValidation).map((error) =>(
          <li key={error}>{error}</li>
        ))}
       </ul> 
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Saving...." : "Save Expense"}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
