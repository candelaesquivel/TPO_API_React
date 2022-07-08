const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"login",
    register:urlApi + "register",
    securityQuestion:urlApi + "securityQ",
    securityAnswer:urlApi + "securityQ/answer"
}

export default urlWebServices;