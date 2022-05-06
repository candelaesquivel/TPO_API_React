import { Component } from "react";
import RecipeGrid from "./RecipeGrid";
import SearchBar from "./SearchBar";
import faker from "@faker-js/faker";

import prefixStr from '../utilities/stringFunctions'

const recipesInfo = [
    { 'name' : 'Hamburguesa', 'description' : faker.lorem.sentence() },
    { 'name' : 'Sopa', 'description' : faker.lorem.sentence() },
    { 'name' : 'Pizza', 'description' : faker.lorem.sentence() },
    { 'name' : 'Tacos de Pollo', 'description' : faker.lorem.sentence() },
    { 'name' : 'Helado Ron con pasas', 'description' : faker.lorem.sentence() },
    { 'name' : 'Asado', 'description' : faker.lorem.sentence() },
]

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

        const recipeList = recipesInfo.filter( itr => 
        {
            return prefixStr(itr.name, '');
        });

        return (
            <>
                <SearchBar onChange={this.handleSearchByName}></SearchBar>
                <RecipeGrid 
                    recipes={recipeList}
                    readMoreLink='view-recipe'
                >
                </RecipeGrid>
            </>
        )
    }
}

export default RecipeSearchModule;