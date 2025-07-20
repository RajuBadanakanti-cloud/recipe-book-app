import { useNavigate } from 'react-router-dom'
import './index.css'


const Header = () => {
    const navigate = useNavigate()
    const onNavLogoButton = () => {
        navigate("/")
    }

    return (
    <div className='header-navbar-container'>
        <button type="button" className='nav-website-logo-button' onClick={onNavLogoButton}>
            <img src='https://res.cloudinary.com/dnh9hnjbx/image/upload/v1752324867/craiyon_182217_image_a1hatu.png'
            className='nav-webiste-img'
            alt="webiste logo"/>
        </button>
         <h1 className='header-text'>RECIPES BOOK</h1>
    </div>
    )
}
export default Header