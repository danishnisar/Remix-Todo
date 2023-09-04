
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


export async function getExpenses(){
   try{
    const expenses =  await prisma.expense.findMany({
        orderBy:{date:'asc'}
    });
    return expenses
   }catch(error){
    console.log(error);
    throw error

   }
}
export async function getExpensById(id){

   try{
    const expense = await prisma.expense.findFirst({
        where:{id}
    });
    return expense;
   }catch(error){
    console.log(error)
    throw error
   }
}

