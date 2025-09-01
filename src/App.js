import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import RecipeBookHome from './components/RecipeBookHome';
import RecipesList from './components/RecipesList'
import RecipeDetailedView from './components/RecipeDetailedView';
import NotFound from './components/NotFound';
const App = () => (
<BrowserRouter > {/* This for app github lives with in built routes-# */}
  <Routes>
    <Route path='/' element={<RecipeBookHome/>}/>
    <Route exact path='/recipes' element={<RecipesList/>}/>
    <Route exact path='/recipe/:id' element={<RecipeDetailedView/>}/>
    <Route path="/not-found" element={<NotFound/>}/>
  </Routes>
</BrowserRouter>
)

export default App;
