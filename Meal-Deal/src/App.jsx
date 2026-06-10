import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PageHeader from './PageHeader'
import HomePage from './HomePage'
import MealDetails from './MealDetails'
import SavedRecipes from './SavedRecipes'
import { MealProvider } from './MealContext'
import SearchRecipes from './SearchRecipes'


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHeader/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'meal/:mealId',
        element: <MealDetails/>
      },
      {
        path: 'savedRecipes',
        element: <SavedRecipes/>
      },
      {
        path:'explore',
        element: <SearchRecipes/>
      }

    ]
  }
])

function App() {


  return (
    <MealProvider>
        <RouterProvider router={router}/>
    </MealProvider>
  )
}

export default App
