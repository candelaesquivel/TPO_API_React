const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"login",
    register:urlApi + "register",
    securityQuestion:urlApi + "securityQ",
    securityAnswer:urlApi + "securityQ/answer",
    updateUserData:urlApi + "profile/modify",
    updateUserPassword : urlApi + 'profile/modify-password',
    createRecipe:urlApi + "recipes/create",
    updateRecipe:urlApi + 'recipes/update-recipe',
    deleteRecipe:urlApi + "recipes/delete",
    califyRecipe:urlApi + "recipes/calify",
    uploadFileImg : urlApi + "recipes/uploadImage",
    saveRecipeImg : urlApi + 'recipes/saveRecipeImg',
    getRecipesFromUser : urlApi + 'recipes/my-recipes',
    getRecipeById : urlApi + 'recipes/view-recipe',
    getAllRecipes : urlApi
}

export default urlWebServices;