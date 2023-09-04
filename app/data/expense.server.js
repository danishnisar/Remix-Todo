
import {prisma} from  '~/data/database.server';

export async function AddExpense(ExpenseData){

    try {
        
        return await prisma.expense.create({data:{
            title: ExpenseData.title,
            amount: +ExpenseData.amount,
            date: new Date(ExpenseData.date)
        }});

    }catch(error){
        console.log(error);
        throw error;
    }


}
