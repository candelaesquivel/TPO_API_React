// Ask the Time Complexity of startsWith in terms of O(n)
export function prefixStr(source, target){
    if (target.length === 0)
        return true;

    const srcLower = source.toLowerCase();
    const targetLower = target.toLowerCase();
    
    return srcLower.startsWith(targetLower);
}

export function isNumeric(str){
    return /\d/.test(str)
}

export function isValidPassword(password){

    if (password.length === 0)
        return true;

    if (password.length < 7)
        return false;

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    return validPassword.test(password);
}

export function isValidEmailWithRegex(email){

    if (email.length === 0)
        return true;

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );

    return validEmail.test(email);
}