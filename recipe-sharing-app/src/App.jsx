import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <div>
      <h1>Recipe</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  )
}