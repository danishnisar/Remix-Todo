function amountValidation(value){
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
}


export function ValidationCheck(input){
    let validError = {};

    if(!amountValidation(input.amount)){
        validError.amount = "Input must be greater then 0";

    }

    if(Object.keys(validError).length > 0) {
        throw validError
    }
}