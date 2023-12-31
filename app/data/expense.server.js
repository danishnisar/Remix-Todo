
import { prisma } from '~/data/database.server';

export async function AddExpense(ExpenseData, userId) {

    try {

        return await prisma.expense.create({
            data: {
                title: ExpenseData.title,
                amount: +ExpenseData.amount,
                date: new Date(ExpenseData.date),
                User: { connect: { id: userId } },
            }
        });

    } catch (error) {
        console.log(error);
        throw error;
    }


}


export async function getExpenses(userId) {
    try {
        const expenses = await prisma.expense.findMany({
            where: { userId },
            orderBy: { date: 'asc' }
        });

        return expenses
    } catch (error) {
        console.log(error);
        throw error

    }
}
export async function getExpensById(id) {

    try {
        const expense = await prisma.expense.findFirst({
            where: { id }
        });
        return expense;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function updateExpenseById(ExpenseData) {

    try {
        const expense = await prisma.expense.update({
            where: {
                id: ExpenseData.id
            },
            data: {
                title: ExpenseData.title,
                amount: +ExpenseData.amount,
                date: new Date(ExpenseData.date)
            }
        })
        return expense
    } catch (error) {
        console.log(error)
        throw error
    }
}
export async function deleteExpenseById(id) {
    try {
        return await prisma.expense.delete({
            where: {
                id: id
            },
        });


    } catch (error) {
        throw new Error('Failed to delete expense.')
    }
}