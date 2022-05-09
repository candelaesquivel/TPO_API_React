import { Component } from "react";
import RecipeGrid from "./RecipeGrid";

import {SearchBar} from './SearchBar';

import {prefixStr} from '../../utilities/stringFunctions';
import {recipes_example} from "../../utilities/sharedData";

class RecipeSearchModule extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            nameRecipe : '',
            ingredientRecipe : '',
            categoryRecipe : [],
            difficultyValue : 0

        };

        this.handleSearchByName = this.handleSearchByName.bind(this);
        this.handleToggleRanking = this.handleToggleRanking.bind(this);
        this.handleSearchByIngredient = this.handleSearchByIngredient.bind(this);
        this.handleSearchByCategory = this.handleSearchByCategory.bind(this);
    }

    handleSearchByCategory(_event, value){
        this.setState({
            categoryRecipe : value
        });
    }

    handleSearchByName(event) {

        let name = '';

        if (event.target.value.length > 0)
            name = event.target.value;

        this.setState({
            nameRecipe : name
        });
    }

    handleToggleRanking(_event, value){
        if (value == null)
        {
            this.setState({
                difficultyValue : 0
            })
        }else{
            this.setState({
                difficultyValue : value
            });
        }
    }

    handleSearchByIngredient(event){
        const ingredient = event.target.value;

        if (ingredient.length > 0)
        {
            this.setState({
                ingredientRecipe : ingredient
            });
        }
        else{
            this.setState({
                ingredientRecipe : ''
            })
        }
    }

    render(){

        const diffValue = this.state.difficultyValue;

        const recipeList = recipes_example.filter( itr => 
        {
            let matchName = true;
            let matchDiff = true;
            let matchIngrendients = true;
            let matchCategory = true;

            /** Filtro por Nombre */
            if (itr.name.length > 0)
                matchName = prefixStr(itr.name, this.state.nameRecipe);


            /** Filtro por Dificultad */
            if (diffValue > 0)
                matchDiff = itr.difficulty === diffValue

            const ingredientTarget = this.state.ingredientRecipe;

            /** Filtro por Ingrediente*/
            if (ingredientTarget.length >= 3)
            {
                matchIngrendients = itr.ingredients.find(ingredient =>
                {
                    return prefixStr(ingredient, ingredientTarget);
                });
            }

            /** Filtro por Categoria */
            {
                const selectedCategories = this.state.categoryRecipe;

                if (selectedCategories.length > 0)
                {
                    matchCategory = false;

                    selectedCategories.forEach(value => {
                        if (matchCategory)
                            return;
    
                        matchCategory = itr.category.includes(value);
                    });
                }
            }


            return matchName && matchDiff && matchIngrendients && matchCategory;
        });

        return (
            <>
                
                <SearchBar 
                    onNameChange={this.handleSearchByName} 
                    onDifficultChange={this.handleToggleRanking}
                    onIngredientChange={this.handleSearchByIngredient}
                    onCategoryChange={this.handleSearchByCategory}
                >
                </SearchBar>
                <RecipeGrid 
                    recipes={recipeList}
                    readMoreLink={this.props.readMoreLink}
                >
                </RecipeGrid>
            </>
        )
    }
}

export default RecipeSearchModule;