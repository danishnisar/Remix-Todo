
const Expense_Dummy = [
    {
        id:'e-1',
        title:'Income one',
        amount:123.30,
        date:new Date().toISOString()
    },
    {
        id:'e-2',
        title:'Income two',
        amount:13.30,
        date:new Date().toISOString()
    }
];

export function loader(){
    return Expense_Dummy;
}