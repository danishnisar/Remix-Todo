function titlevalidation(value){
    return value && value.trim().length > 0 && value.trim().length <= 33 
}

function amountValidation(value){
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
}

function dateValidation(value){
    return value && new Date(value).getTime() <= new Date().getTime()
}

export function ValidationCheck(input){
    let validError = {};

    if (!titlevalidation(input.title)){
        validError.title = "Input must be more then 0 "
    }

    if(!amountValidation(input.amount)){
        validError.amount = "Input must be greater then 0";

    }
    if(!dateValidation(input.date)){
        validError.date = "Date must be current or previous";
    }

    if(Object.keys(validError).length > 0) {
        throw validError
    }
}