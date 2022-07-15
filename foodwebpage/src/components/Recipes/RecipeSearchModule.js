import {RecipeGrid} from "./RecipeGrid";
import {SearchBar} from './SearchBar';

import { useEffect, useState } from "react";
import {getRecipesFromUser, getAllRecipes} from '../../controllers/MyAppController';
import { getUserEmail } from "../../utilities/UserSession";

export default function RecipeSearchModule(props){

    const [recipes, setRecipes] = useState([])
    const [nameSearched, setNameSearched] = useState('');
    const [ingredientSearched, setIngredientSearched] = useState([])
    const [difficultySearched, setDifficultySearched] = useState(0)
    const [categoriesSearched, setCategoriesSearched] = useState([])
    const [recipesLoaded, setRecipesLoaded] = useState(false)

    const isInHome = !props.isOnProfileRecipes;
    
    const getMyRecipes = async function(){
        const filters = {
            name : nameSearched,
            ingredients : ingredientSearched,
            difficulty : difficultySearched,
            categories : categoriesSearched
        };
        let result = await getRecipesFromUser(getUserEmail(), filters);
        setRecipes(result.data);
        setRecipesLoaded(true)
    }

    const getAllRecipesFromSite = async function(){
        const filters = {
            name : nameSearched,
            ingredients : ingredientSearched,
            difficulty : difficultySearched,
            categories : categoriesSearched
        };
        
        let result = await getAllRecipes(filters)
        setRecipes(result.data);
        setRecipesLoaded(true)
    }

    useEffect( () => {
        if (!isInHome){
            getMyRecipes();
        }
        else{
            getAllRecipesFromSite();
        }
    }, [nameSearched, ingredientSearched, categoriesSearched, difficultySearched])

    const handleSearchByName = (event) => {
        const name = event.target.value
        if (name.length > 0)
            setNameSearched(name)
        else
            setNameSearched('')

    }

    const handleToggleRanking = (_event, value) => {

        if (value !== null)
            setDifficultySearched(value)
        else
            setDifficultySearched(0)
    }

    const handleSearchByIngredient = (event) => {

        console.log("Ingredientes: ", event.target.value)
        const ingredient = event.target.value

        if (ingredient.length > 0)
            setIngredientSearched(ingredient.replace(' ', '').split(','))
        else
            setIngredientSearched([])
    }

    const handleSearchByCategory = (_event, value) => {
        setCategoriesSearched(value);
    }

    return (
        <>
            <SearchBar 
                onNameChange={handleSearchByName} 
                onDifficultChange={handleToggleRanking}
                onIngredientChange={handleSearchByIngredient}
                onCategoryChange={handleSearchByCategory}
            >
            </SearchBar>
            <RecipeGrid 
                recipes={recipes}
                readMoreLink={props.readMoreLink}
                recipesLoaded = {recipesLoaded}
            >
            </RecipeGrid>
        </>
    )
}