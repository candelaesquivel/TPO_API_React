import urlWebServices from '../controllers/WebServices';
import { setLogged, setUserLoggedData, setUserToken } from '../utilities/UserSession';
import { getToken } from '../utilities/UserSession';

export const createRecipe = async function(recipe){
    //url webservices
    let url = urlWebServices.createRecipe;
    //armo json con datos
    const formData = new URLSearchParams();

    formData.append('name', recipe.name);
    formData.append('state', recipe.state)
    formData.append('ingredients', recipe.ingredients);
    formData.append('categories', recipe.categories);
    formData.append('difficulty', recipe.difficulty);
    formData.append('process', recipe.process);
    formData.append('userEmail', recipe.userEmail);
    formData.append('photo', recipe.photo);

    console.log("Recipe data: ", recipe)
    
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
                    return ({rdo:0,mensaje:"Ok", data : data});//correcto
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

export const getRecipesFromUser = async function(userEmail){
    //url webservices
    let url = urlWebServices.getRecipesFromUser;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('userEmail', userEmail);
    
    try{
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
            let responseData = await response.json();
            console.log("Data Response: ", responseData)
            switch(rdo)
            {
                case 201:
                {
                    return ({rdo:0,mensaje:"Ok", data : responseData.data});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: responseData.message, errorCode: responseData.errorCode})
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

export const getRecipeById = async function(id){
    //url webservices
    let url = urlWebServices.getRecipeById;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('idRecipe', id);
    
    try{
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
            let responseData = await response.json();
            console.log("Data Response: ", responseData)
            switch(rdo)
            {
                case 201:
                {
                    return ({rdo:0,mensaje:"Ok", data : responseData.data});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: responseData.message, errorCode: responseData.errorCode})
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

export const getAllRecipes = async function(filters){
    //url webservices
    let url = urlWebServices.getAllRecipes;
    //armo json con datos
    const formData = new URLSearchParams();

    formData.append('name', filters.name)
    formData.append('ingredients', filters.ingredients)
    formData.append('difficulty', filters.difficulty)
    formData.append('categories', filters.categories)

    try{
            let response = await fetch(url,{
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers:{
                    'Accept':'application/x-www-form-urlencoded',
                    //'x-access-token': getToken(),
                    'Origin':'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded'},
                body : formData
            });
            
            let rdo = response.status;
            console.log("response",response);
            let responseData = await response.json();
            console.log("Data Response: ", responseData)
            switch(rdo)
            {
                case 201:
                {
                    return ({rdo:0,mensaje:"Ok", data : responseData.data});//correcto
                }
                case 400:
                {
                    console.log("Error: 400");
                    return ({rdo:400, mensaje: responseData.message, errorCode: responseData.errorCode})
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

export const saveImgInCloud = async function(message)
{
    //url webservices
    let url = urlWebServices.saveRecipeImg;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('imageName',message.imagen);
    
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
            body:formData
        });
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("Data Response: ", data)
        switch(rdo)
        {
            case 201:
            {
                return ({rdo:0,mensaje:"Ok", imgUrl : data.imgUrl});//correcto
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
        return false;
    };
}

export const uploadFileImgLocal= async function(files,fileNames)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
    console.log('files', files)
    console.log('nombres',fileNames)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
        formData.append('files', files[i], fileNames[i])
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': getToken(),
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

