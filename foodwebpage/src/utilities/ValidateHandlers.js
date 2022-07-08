import { isNumeric } from "./stringFunctions";
import { isValidEmailWithRegex } from "./stringFunctions";

export const validateNameOrLastName = (name) => {

    return name.length >= 2 && !isNumeric(name);
}

export const validatePhone = (phone) => {
    return phone.length >= 5 && isNumeric(phone);
}

export const validateEmailEmpty = (email) => {
    return email !== ""
}

export const validateEmailSyntax = (email) => {
    return isValidEmailWithRegex(email)
}

export const validateSecurityQuestionSyntax = (question) => {
    return question.length >= 5
}

export const validateSecurityAnswerSyntax = (answer) => {
    return answer.length >= 2
}

export const validateRecipeName = (name) => {
    return name.length >= 3;
}

export const validateRecipeProcess = (process) => {
    return process.length >= 3
}

export const validateRecipeIngredients = (ingredients) => {
    return ingredients.length !== 0
}

export const validateCategories = (categories) => {
    return categories.length >= 1;
}