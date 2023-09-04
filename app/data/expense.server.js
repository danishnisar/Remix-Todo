
import prisma from  '~/data/expense.server'

export async function AddExpense(ExpenseData){

    try {
        return await prisma.Expense.create({data:{
            title: ExpenseData.title,
            amount: +ExpenseData.amount,
            date: new Date(ExpenseData.date)
        }});
        
    }catch(error){
        console.log(error);
        throw error;
    }


}