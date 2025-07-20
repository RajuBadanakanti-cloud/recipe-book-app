
import { useNavigate } from 'react-router-dom'
import './index.css'

const RecipeBookHome = () => {
    const navigation = useNavigate()
    const onClickViewRecipesButton = () => {
        navigation("/recipes")
    }
    return(
        <div className='home-recipe-book-bg-container'>
            <div className='home-recipe-content-container'>
                <img src="https://res.cloudinary.com/dnh9hnjbx/image/upload/v1752128598/myRecipe_Book_Logo_dr2k0a_44fa79.png"
                 alt="website logo"
                 className='home-website-logo-img'/>
                <h1 className='home-heading'>Flavors of Home: Your <span className='home-heading-span-text'>Ultimate Recipe </span>Collection</h1>
                 <p className='home-paras-description'>Timeless Dishes · Trusted Recipes · Everyday Inspiration</p>
                   <p className='home-description'>
                    Welcome to your personal kitchen companion — a thoughtfully curated recipe book designed
                    to bring joy to your cooking experience. From comforting classics to modern favorites, 
                    each recipe is crafted with love and simplicity in mind. Whether you're a seasoned chef or
                    just beginning your journey, our step-by-step guides and stunning visuals ensure that every
                    dish is easy to follow and a delight to make.
                    Start cooking with confidence — and bring flavor, warmth,
                    and tradition to your table every day.
                    </p>
                <button type='button' onClick={onClickViewRecipesButton} className='view-recipes-button'>View Recipes</button>
            </div>
        </div>
    )
}

export default RecipeBookHome