import { Component } from "react";
import RecipeGrid from "./RecipeGrid";
import SearchBar from "./SearchBar";
import faker from "@faker-js/faker";

import prefixStr from '../utilities/stringFunctions';
import {recipes_example} from "../utilities/sharedData";

class RecipeSearchModule extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            'nameText' : '',
            'ingredientText' : '',
            'categoryText' : '',
            'difficultyValue' : 1

        };

        this.handleSearchByName = this.handleSearchByName.bind(this);
    }

    handleSearchByName(event) {
    }

    render(){

        const recipeList = recipes_example.filter( itr => 
        {
            return prefixStr(itr.name, '');
        });

        return (
            <>
                <SearchBar onChange={this.handleSearchByName}></SearchBar>
                <RecipeGrid 
                    recipes={recipes_example}
                    readMoreLink='view-recipe'
                >
                </RecipeGrid>
            </>
        )
    }
}

export default RecipeSearchModule;