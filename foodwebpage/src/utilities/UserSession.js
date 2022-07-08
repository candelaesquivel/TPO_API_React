import {users_info} from './sharedData';


export function setUserLoggedData(userData){

    console.log("User Data: ", userData)

    sessionStorage.setItem('isLogged', 'true');
    sessionStorage.setItem('user-name', userData.name);
    sessionStorage.setItem('user-email', userData.email);
    sessionStorage.setItem('user-lastname', userData.lastName);
    sessionStorage.setItem('user-phone', userData.phone);
}


export function isLogged(){
    return sessionStorage.getItem('isLogged') === 'true'
}

export function setLogged(isLogged){

    sessionStorage.setItem('isLogged', isLogged.toString())
}

export function getLoggedEmail(){
    return sessionStorage.getItem('loggedEmail');
}

export function getUserName(){
    return sessionStorage.getItem('user-name');
}

export function getUserLastName(){
    return sessionStorage.getItem('user-lastname');
}

export function getUserEmail(){
    return sessionStorage.getItem('user-email')
}

export function getUserPhone(){
    return sessionStorage.getItem('user-phone')
}

export function getUserData(){

    let values = {
        name : getUserName(),
        lastName : getUserLastName(),
        phone : getUserPhone(),
        email : getUserEmail()
    };

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
