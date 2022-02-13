export function numberValidation (value) {  
    if (!/\d/g.test(value)) {
        return 'Invalid number';
    }
}
export function phoneValidation (value) {  
    if (!/\d{10,12}/g.test(value)) {
        return 'must number 10 - 12 digits';
    }
}
export function emailValidation (value) {   
    if (!/^[\w._%+-]+@[\w.-]+\.\w{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
}