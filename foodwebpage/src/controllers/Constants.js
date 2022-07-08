//URL Backend  

export const urlApi = process.env.REACT_APP_URL || "http://localhost:4000/";
//URL Heroku
//export const urlApi = ""
//URL Imagenes
export const urlImgUser= urlApi +'/uploads/imgUser/';

export const ErrorCodes = {
    ERROR_PASSWORD_NOT_VALID    : 1,
    ERROR_MAIL_NOT_ASSOCIATED   : 2,
    ERROR_SECURITY_ANSWER_WRONG : 3,
    ERROR_MAIL_IN_USE           : 4,
    ERROR_IN_DB_OPERATION       : 5,
    ERROR_RECIPE_NOT_FOUND      : 6,
    ERROR_RECIPE_ID_IN_USE      : 7,
    ERROR_DUPLICATE_CALIFY      : 8
};