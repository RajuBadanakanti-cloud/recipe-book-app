import './App.css';
import {BrowserRouter as Routers, Routes,Route,} from 'react-router-dom'
import RecipeBookHome from './components/RecipeBookHome';
import RecipesList from './components/RecipesList'
import RecipeDetailedView from './components/RecipeDetailedView';
import NotFound from './components/NotFound';
const App = () => (
<Routers>
  <Routes>
    <Route exact path='/' element={<RecipeBookHome/>}/>
    <Route exact path='/recipes' element={<RecipesList/>}/>
    <Route exact path='/recipe/:id' element={<RecipeDetailedView/>}/>
    <Route path="/not-found" element={<NotFound/>}/>
  </Routes>
</Routers>
)

export default App;
