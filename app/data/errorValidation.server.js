function titlevalidation(value) {
    return value && value.trim().length > 0 && value.trim().length <= 33
}

function amountValidation(value) {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
}

function dateValidation(value) {
    return value && new Date(value).getTime() <= new Date().getTime()
}

export function ValidationCheck(input) {
    let validError = {};

    if (!titlevalidation(input.title)) {
        validError.title = "Input must be more then 0 "
    }

    if (!amountValidation(input.amount)) {
        validError.amount = "Input must be greater then 0";

    }
    if (!dateValidation(input.date)) {
        validError.date = "Date must be current or previous";
    }

    if (Object.keys(validError).length > 0) {
        throw validError
    }
}

function validEmail(value) {
    return value && value.includes('@');
}
function validPassword(value) {
    return value && value.length > 6
}


export function ValidateCredentials(input) {
    let errors = {}
    if (!validEmail(input.email)) {
        errors.email = 'Email is not valid'
    }
    if (!validPassword(input.password)) {
        errors.password = 'Password is not valid. It should be more than 6 charachter'
    }
    if (Object.keys(errors).length > 0) {
        throw errors
    }
}