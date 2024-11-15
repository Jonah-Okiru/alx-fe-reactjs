import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipetDetails from './components/RecipeDetails';
import './App.css'

function App() {
  return(
    <Router>
      <div>
        <h1>Recipe</h1>
        <AddRecipeForm />
        <Routes>
          <Route path='/' element={<RecipeList />} />
          <Route path='/recipes/:recipeID' element={<RecipetDetails />}/>
        </Routes>
      </div>
    </Router>
  );
};
export default App;