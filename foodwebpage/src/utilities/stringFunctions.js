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

    if (password.length < 7)
        return false;

    // La expresion regular evalua que la contrasse;a tenga
    /**
     * Letras Mayusculas o minusculas
     * Al menos 1 digito numerico
     * al menos 7 letras minimo
     */
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{7,}$');
    return validPassword.test(password);
}

export function isValidEmailWithRegex(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}