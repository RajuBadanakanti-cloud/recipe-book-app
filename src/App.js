import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import RecipeBookHome from './components/RecipeBookHome';
import RecipesList from './components/RecipesList'
import RecipeDetailedView from './components/RecipeDetailedView';
import NotFound from './components/NotFound';
const App = () => (
<Router>
  <Routes>
    <Route exact path='/' element={<RecipeBookHome/>}/>
    <Route exact path='/recipes' element={<RecipesList/>}/>
    <Route exact path='/recipe/:id' element={<RecipeDetailedView/>}/>
    <Route path="/not-found" element={<NotFound/>}/>
  </Routes>
</Router>
)

export default App;
