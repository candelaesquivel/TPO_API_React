
export function setGlobalLogged(isLogged = false){
    sessionStorage.setItem('isGlobalLogged', isLogged.toString());
}

export function isGlobalLogged(){
    const isLogged = sessionStorage.getItem('isGlobalLogged');

    if (isLogged === 'true')
        return true;
    else
        return false;
}