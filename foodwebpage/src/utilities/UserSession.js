import {users_info} from './sharedData';

export function setGlobalLogged(isLogged = false, email = ''){
    sessionStorage.setItem('isGlobalLogged', isLogged.toString());
    sessionStorage.setItem('loggedEmail', email);
}

export function getLoggedEmail(){
    return sessionStorage.getItem('loggedEmail');
}

export function getUserData(){
    const email = getLoggedEmail();

    let values = {};

    for (let index in users_info){
        const userData = users_info[index];

        if (userData.email === email){
            values.name = userData.name;
            values.lastName = userData.last_name;
            values.phone = userData.phone;
            values.email = email;
            return values;
        }
    }

    return values;
}

export function emailMatchWithPassword(password) {
    const email = getLoggedEmail();
    let matchPassword = false;

    users_info.forEach( userData => {
        if (userData.email === email){
            matchPassword = userData.password === password;
        }
    });

    return matchPassword;
}

export function isGlobalLogged(){
    const isLogged = sessionStorage.getItem('isGlobalLogged');

    if (isLogged === 'true')
        return true;
    else
        return false;
}