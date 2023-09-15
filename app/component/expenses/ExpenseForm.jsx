import { Form, Link, useActionData, useLoaderData, useMatches, useNavigation, useParams } from "@remix-run/react";

function ExpenseForm() {

  const dataValidation = useActionData();
  // const expenseIdRecord = useLoaderData();
  const params = useParams();
  const expenseIdRecord = useMatches();
  // console.log(expenseIdRecord)
  const expenseIDRecordFinal = expenseIdRecord.find((routeData) => routeData.id === 'routes/_exp.expenses').data.find(exactExpense => exactExpense.id === params.id);
  console.log(expenseIDRecordFinal)
  // const expenseOnlyParamRecord = expenseIDRecordFinal.find(exactExpense => exactExpense.id === params.id);
  // console.log(expenseOnlyParamRecord, 'expenseOnlyParamRecord')

  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const useNavigations = useNavigation();
  const isSubmitting = useNavigations.state !== 'idle';

  const defaultValues = expenseIDRecordFinal ? {
    title: expenseIDRecordFinal.title,
    amount: expenseIDRecordFinal.amount,
    date: expenseIDRecordFinal.date
  } : {
    title: '',
    amount: '',
    date: ''
  }

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
      method={expenseIDRecordFinal ? 'PATCH':'POST'}
      className="form"
      id="expense-form"
    // onSubmit={SubmitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" maxLength={30} defaultValue={defaultValues.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input

            defaultValue={defaultValues.amount}
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
          <input type="date" id="date" name="date" required defaultValue={defaultValues.date ? defaultValues.date.slice(0,10) : ''} />
        </p>
      </div>
      {dataValidation && (
        <ul>
          {Object.values(dataValidation).map((error) => (
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
