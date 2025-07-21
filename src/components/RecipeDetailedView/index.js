import { useContext } from "react"
import { useParams,useNavigate} from "react-router-dom"
import { UserContext } from "../../context/userContext"
import Header from "../Header"

import'./index.css'

const RecipeDetailedView = () => {
    const {recipesList} = useContext(UserContext)
    console.log(recipesList)
    const paramId = useParams()
    const {id} = paramId
    // RECIPE DETAILS FINDING
    const recipeDetails = recipesList.find(each => each.id === id)
    const {name, imageUrl,ingredients,steps} = recipeDetails

    // BACK TO RECIPES LIST BAGE
    const navigation = useNavigate()
    const onRecipesBackButton = ()=>{
        navigation('/recipes')
    }
    return (
    <>
    <Header/>
        <div className="recipe-detailed-bg-container">
            <div className="recipe-detailed-content">
                <h1 className="recipe-detailed-name">{name}</h1>
                        <div className="recipe-image-view-container">
                            <img src={imageUrl} className="recipe-image" alt={name}/>
                        </div>
                        <hr/>
                     <div className="recipe-ingredients-steps-view-container">
                     {/*Ingredient section*/}
                     <ul className="recipe-ingredients-list-container">
                        <h1 className="ingredients-heading">Ingredients: </h1>
                        {ingredients.map(each => <li  key={each} className="ingredients-list-items">{each}</li>)}
                     </ul>
                     {/*Preparation Steps section*/}
                    <ul className="recipe-steps-list-container">
                    <h1 className="steps-heading">Steps: </h1>
                        {steps.map(each => <li key={each} className="steps-list-items">{each}</li>)}
                     </ul>
                    </div>
                     <button type="button" onClick={onRecipesBackButton} className="back-button">Back</button>
            </div>
        </div>
          
    </>
    )
}

export default RecipeDetailedView