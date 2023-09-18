import Chart from '~/component/expenses/Chart'
import ExpenseStatistics from '~/component/expenses/ExpenseStatistics'
import { getExpenses } from '../data/expense.server';
import { useLoaderData,useRouteError,isRouteErrorResponse } from '@remix-run/react';
import { json } from '@remix-run/node';
import Error from '../component/util/Error';
// import styles from '~/styles/expenses.css'




export default function AnalysisIndex(){
    const Expense_Data = useLoaderData();
    return (
        <main>
            <Chart expenses={Expense_Data}/>
            <ExpenseStatistics expenses={Expense_Data}/>
        </main>
    );
}

export async function loader(){
    
    const expense = await getExpenses();

    if (!expense || expense.length === 0){
        throw json({message:'No Data Available'},{
            status:404,
            statusText:'No data found'
        })
    }
    return expense
}

export function ErrorBoundary(){

    const error = useRouteError();
    if(isRouteErrorResponse(error)) {
        return(
            <main>
                <p>{error.status} {error.statusText}</p>
            </main>
        );
    }
    else if (error instanceof Error) {
        console.log(error);
        return (
            <main>
                <Error title={error.statusText}>
                    <p>{error.message}</p>
                </Error>
            </main>
        )
    }else{
        
            return <h1>Unknown Error</h1>;
          
    }
}