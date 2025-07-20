import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MdContentPasteSearch, MdDeleteForever } from "react-icons/md";
import {v4 as uuidv4} from "uuid"
import { UserContext } from '../../context/userContext'
import Header from '../Header'
import './index.css'

const RecipesList = () => {
    const {recipesList,handleDeleteRecipe, setRecipesList} = useContext(UserContext) // Context Recipes Data 
    const [searchInputValue, setsearchInputValue] = useState("") // search Input Value
    const [newRecipeName,setNewRecipeName] = useState("") // adding new recipe name
    const [newRecipeIngredients,setNewRecipeIngredients] = useState("") // adding new recipe ingredients
    const [newRecipeSteps,setNewRecipeSteps] = useState("") // adding new recipe praparation steps
    const [newRecipeImgURL,setNewRecipeImgURL] = useState("") // adding new recipe image url
    const [newRecipe,setNewRecipe] = useState()
    const [isAddNewRecipe,setIsAddNewRecipe] = useState(false)


    // on Search Input
    const onSearchInput = (event) => {
        setsearchInputValue(event.target.value)
    }
    const searchingRecipe = recipesList.filter(each => each.name.toLowerCase().includes(searchInputValue.toLowerCase()))
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // on Adding NewRecipe Name
    const onAddingNewRecipeName = (event) =>{
        setNewRecipeName(event.target.value)
    }
    // on Adding New Ingredients
    const onAddingNewRecipeIngredients = (event) => {
        setNewRecipeIngredients(event.target.value)
    }
    
    // on Adding New Recipe Steps 
    const onAddingNewRecipeSteps = (event) => {
        setNewRecipeSteps(event.target.value)
    }

    //on Adding Recipe Img URL
    const onAddingNewRecipeImgURL = (event) => {
        setNewRecipeImgURL(event.target.value)
    }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ADD BUTTON
const onAddNewRecipeBtn = () => {
    if(newRecipeName.trim() === "" || newRecipeIngredients.trim() === "" || newRecipeSteps.trim() === "" ){
      alert("ENTER VALID DETAILS")
    }
    else {
        const newRecipeDetails = {
            id:uuidv4(),
            name:newRecipeName,
            ingredients:newRecipeIngredients.split(",").map(ei => ei.trim(",")).filter(ei => ei !== ""),
            steps:newRecipeSteps.split(",").map(es => es.trim(",")).filter(ei => ei !== ""),
            imageUrl:newRecipeImgURL
        }
        setNewRecipe(newRecipeDetails)
        setIsAddNewRecipe(true)
    }
}
    // SUBMITING FORM DATA 
    const onSubmitAddForm = (event) => {
        event.preventDefault()
     
    if (isAddNewRecipe === true){
            setRecipesList(prev => [...prev,newRecipe])
            setNewRecipeName("")
            setNewRecipeIngredients("")
            setNewRecipeSteps("")
            setNewRecipe("")
            setNewRecipeImgURL("")
        }
    else {
        alert("ADD VALID DETAILS")
        }

    }

    // SAVE INTO LOCALSTORAGE USE EFFECT >>>>>>>>> 
// ON DELETE RECIPE ITEM CONTENT
const [isShownPopup,setIsShownPopup] = useState(false)
const [deletingId,setDeletingId] = useState("")
const onDeleteButtonClick = (id) => {
    setIsShownPopup(true)
    setDeletingId(id) 
}

// NO DELETE BUTTON
const onDeleteNoBtn = () => {
    setIsShownPopup(false)
    setDeletingId("")
}

// **** YES DELETE BUTTON
const onDeleteYesBtn = () => {
   handleDeleteRecipe(deletingId)
   setIsShownPopup(false)
}


    return (
        <>
        <Header/>
        <div className='recipes-view-bg-container'>
            <div className='recipes-view-content-container'>

                <div className='recipes-list-section-container'>
                    <div className='recipes-header-and-search-container'>
                        <h1 className='recipes-list-header'>Recipes List:</h1>
                        {/*  SEARCH CONTENT */}
                        <div className='search-icon-input-container'>
                        <input type='search' value={searchInputValue}
                        onChange={onSearchInput}
                         className='search-input'
                         placeholder='Search Recipe (e.g. Chicken Biryani)'/>
                         <MdContentPasteSearch className='search-icon' />
                         </div>
                    </div>
                    <hr className='line'/>
                {/* DELETE CONFORM POPUP */}
                    {isShownPopup && (
                        <div className='delete-confirm-popup-container'>
                            <h1 className='delete-confirm-question'>Are you confirm delete this recipe?</h1>
                            <div className='delete-yes-no-btn-div'>
                            <button type="button" className='delete-confirm-yes-button' onClick={onDeleteYesBtn}>Yes</button>
                            <button type="button" className='delete-confirm-no-button' onClick={onDeleteNoBtn}>No</button>
                            </div>
                        </div>
                    )}

                    {/* RECIPES LIST CONTENT   */}
                    <ol className='recipes-list-container'>

                        {searchingRecipe.map(eachName => {
                        const selectedRecipeClass = eachName.id === deletingId ? "recipes-list-items-container_for_del" : "recipes-list-items-div-container"
                           console.log(selectedRecipeClass) 
                            return ( <li key={eachName.id} className="recipes-list-items-container">
                            <div className={selectedRecipeClass}>
                                <div>
                            <p className='racipes-items-name'>{eachName.name}</p>
                            <Link to={`/recipe/${eachName.id}`}>
                            <button className='recipe-item-dtl-view-button'>Detailed View</button>
                            </Link>
                            </div>
                            <button type="button" /*onClick={() => handleDeleteRecipe(eachName.id)}*/ 
                            onClick={() => onDeleteButtonClick(eachName.id)}
                            className='delete-recipe-item-button'><MdDeleteForever className='delete-icon' /></button>

                            </div> 
                        </li>)})}
                    </ol>


                </div>


                   {/* CREATE/ADD RECIPES/FORM CONTENT */}
                <div className='recipes-adding-container'>
                    <h1 className='add-recipe-heading'>ADD YOUR RECIPE</h1>
                    <form className='recipe-add-form-container' onSubmit={onSubmitAddForm} >
                    <label htmlFor='newName' className='new-recipes-labels'>Recipe Name</label>
                    <input id="newName" type='text' value={newRecipeName}
                     onChange={onAddingNewRecipeName}
                     className='new-recipe-name-input'
                     placeholder='Type your recipe name'/>

                    <label htmlFor='ingredients' className='new-recipes-labels'>Ingredients</label>
                    <textarea id="ingredients" type='text' value={newRecipeIngredients}
                     className='new-recipe-ingredients-textarea' rows="3" cols="20"
                     placeholder='Enter ingredients, separated by commas (e.g. chicken, curd, chili powder)'
                     onChange={onAddingNewRecipeIngredients}>
                    </textarea>

                    <label htmlFor='steps' className='new-recipes-labels'>Preparation Steps</label>
                    <textarea id="steps" type='text' value={newRecipeSteps}
                    onChange={onAddingNewRecipeSteps}
                    className='new-recipe-steps-textarea' rows="4" cols="20"
                     placeholder="Enter steps, separated by commas (e.g. wash chicken cleanly, marinate, cooking in medium flame)" ></textarea>
                    
                    <label htmlFor='imgUrl' className='new-recipes-labels'>Image URL</label>
                    <input id='imgUrl' type='url' value={newRecipeImgURL}
                    onChange={onAddingNewRecipeImgURL}
                     placeholder='Upload image URL of the finished dish' className='new-recipes-img-url'/>
                     <button type="button" className='add-new-recipe-button' onClick={onAddNewRecipeBtn}>Add</button>
                    <button type='submit' className='new-recipe-submit-button'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default RecipesList