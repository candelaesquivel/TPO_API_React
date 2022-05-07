
export function setGlobalLogged(isLogged = false){
    sessionStorage.setItem('isGlobalLogged', isLogged.toString());
}

export function isGlobalLogged(){
    const isLogged = sessionStorage.getItem('isGlobalLogged');
    return isLogged;
}