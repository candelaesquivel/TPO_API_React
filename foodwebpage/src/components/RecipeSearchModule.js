import { Component } from "react";
import RecipeGrid from "./RecipeGrid";
import SearchBar from "./SearchBar";

import prefixStr from '../utilities/stringFunctions';
import {recipes_example} from "../utilities/sharedData";

class RecipeSearchModule extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            nameRecipe : '',
            ingredientRecipe : '',
            categoryRecipe : '',
            difficultyValue : 0

        };

        this.handleSearchByName = this.handleSearchByName.bind(this);
        this.handleToggleRanking = this.handleToggleRanking.bind(this);
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

    render(){

        const diffValue = this.state.difficultyValue;

        const recipeList = recipes_example.filter( itr => 
        {
            let matchName = true;
            let matchDiff = true;
            let matchIngrendients = true;
            let matchCategories = true;

            if (itr.name.length > 0)
                matchName = prefixStr(itr.name, this.state.nameRecipe);
            
            if (diffValue > 0)
                matchDiff = itr.difficulty === diffValue

            return matchName && matchDiff && matchIngrendients && matchCategories;
        });

        return (
            <>
                <SearchBar onNameChange={this.handleSearchByName} onDifficultChange={this.handleToggleRanking}></SearchBar>
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