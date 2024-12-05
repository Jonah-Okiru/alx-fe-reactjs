import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm';
import HomePage from './components/HomePage'
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipeform" element = {<AddRecipeForm />} />
      </Routes>
    </Router>
   );
}

export default App;

