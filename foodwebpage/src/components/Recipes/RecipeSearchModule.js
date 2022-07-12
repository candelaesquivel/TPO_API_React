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
    const [triggerRender, setTriggerRender] = useState(false)

    const isInHome = !props.isOnProfileRecipes;
    
    const getMyRecipes = async function(){
        let result = await getRecipesFromUser(getUserEmail());
        setRecipes(result.data);
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
    }

    useEffect( () => {
        setTriggerRender(false)
        if (!isInHome){
            getMyRecipes();
        }
        else{
            getAllRecipesFromSite();
        }
    }, [triggerRender])

    const handleSearchByName = (event) => {
        setTriggerRender(true)
        const name = event.target.value
        if (name.length > 0)
        {
            console.log("NAME CHANGED")
            setNameSearched(name)
        }
        else
            setNameSearched('')
    }

    const handleToggleRanking = (_event, value) => {
        setTriggerRender(true)

        if (value !== null)
            setDifficultySearched(value)
        else
            setDifficultySearched(0)
    }

    const handleSearchByIngredient = (event) => {
        setTriggerRender(true)

        const ingredient = event.target.value

        if (ingredient.lenght > 0)
            setIngredientSearched(ingredient.replace(' ', '').split(','))
        else
            setIngredientSearched([])
    }

    const handleSearchByCategory = (_event, value) => {
        setTriggerRender(true)
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
            >
            </RecipeGrid>
        </>
    )
}