import urlWebServices from '../controllers/WebServices';
import { setLogged, setUserLoggedData, setUserToken } from '../utilities/UserSession';
import { getToken } from '../utilities/UserSession';

export const updateUserData = async function(userData){
    //url webservices
    let url = urlWebServices.updateUserData;
    //armo json con datos
    const formData = new URLSearchParams();

    formData.append('name', userData.name);
    formData.append('lastName', userData.lastName);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);

    try
        {
            let response = await fetch(url,{
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers:{
                    'Accept':'application/x-www-form-urlencoded',
                    'x-access-token': getToken(),
                    'Origin':'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded'},
                body: formData,
                
            });
    
            
            let rdo = response.status;
            console.log("response",response);
            let data = await response.json();
            console.log("Data Response: ", data)
            switch(rdo)
            {
                case 201:
                {
                    const user = data.userData;
                    setUserLoggedData(user)
                    return ({rdo:0,mensaje:"Ok", userData : user});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: data.message, errorCode: data.errorCode})
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
        }
        catch(error)
        {
            console.log("error",error);
        };
}

export const recoveryPasswordQuestion = async function(email){
    //url webservices
    let url = urlWebServices.securityQuestion;
    //armo json con datos
    const formData = new URLSearchParams();

    formData.append('email', email);
    //console.log("dato",formData);
    //console.log("url",url);

    try
        {
            let response = await fetch(url,{
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers:{
                    'Accept':'application/x-www-form-urlencoded',
                   // 'x-access-token': WebToken.webToken,
                    'Origin':'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded'},
                body: formData,
                
            });
    
            
            let rdo = response.status;
            console.log("response",response);
            let data = await response.json();
            console.log("Data Response: ", data)
            switch(rdo)
            {
                case 201:
                {
                    return ({rdo:0,mensaje:"Ok", securityQuestion:data.data});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: data.message, errorCode: data.errorCode})
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
        }
        catch(error)
        {
            console.log("error",error);
        };
}

export const recoveryPasswordAnswer = async function(email, answer){
    //url webservices
    let url = urlWebServices.securityAnswer;
    //armo json con datos
    const formData = new URLSearchParams();

    formData.append('email', email);
    formData.append('answer', answer)

    try
        {
            let response = await fetch(url,{
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers:{
                    'Accept':'application/x-www-form-urlencoded',
                   // 'x-access-token': WebToken.webToken,
                    'Origin':'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded'},
                body: formData,
                
            });
    
            
            let rdo = response.status;
            console.log("response",response);
            let data = await response.json();
            console.log("Data Response: ", data)
            switch(rdo)
            {
                case 201:
                {
                    return ({rdo:0,mensaje:"Ok", isAnswerValid : data.data});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: data.message, errorCode: data.errorCode})
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
        }
        catch(error)
        {
            console.log("error",error);
        };
}

export const register = async function(registerForm){
        //url webservices
        let url = urlWebServices.register;
        //armo json con datos
        const formData = new URLSearchParams();

        formData.append('name', registerForm.name);
        formData.append('lastName', registerForm.lastName);
        formData.append('email', registerForm.email);
        formData.append('password', registerForm.password);
        formData.append('phone', registerForm.phone);
        formData.append('securityQ', registerForm.securityQuestion);
        formData.append('answer', registerForm.securityAnswer);
        //console.log("dato",formData);
        //console.log("url",url);
        try
        {
            let response = await fetch(url,{
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers:{
                    'Accept':'application/x-www-form-urlencoded',
                   // 'x-access-token': WebToken.webToken,
                    'Origin':'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded'},
                body: formData,
                
            });
    
            
            let rdo = response.status;
            console.log("response",response);
            let data = await response.json();
            console.log("Data Response: ", data)
            switch(rdo)
            {
                case 201:
                {
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: data.message, errorCode: data.errorCode})
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
        }
        catch(error)
        {
            console.log("error",error);
        };
}

export const login= async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    //console.log("dato",formData);
    //console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });

        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("Data Response: ", data)
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    setUserToken(data.loginUser.token);
                    //guardo usuario logueado
                    const user = data.loginUser.user;
                    setUserLoggedData(user)
                    setLogged(true)
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: data.message, errorCode: data.errorCode})
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const guardarImgUser = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const uploadFileImg= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const getImagenesByUser = async function()
{
    //url webservices
    let url = urlWebServices.getImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else
        {
            let vacio=[];
            console.log("No hay imagenes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}
