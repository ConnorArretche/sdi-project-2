import { useContext } from "react"
import { MealContext } from "./MealContext"
import { useNavigate } from "react-router-dom"
import './SavedRecipesStyles.css'

function SavedRecipes(){

    const {savedMeals, deleteMeal} = useContext(MealContext)
    const navigate = useNavigate();


    return(
    <div className="saved-container">
    <h1 className="saved-title">My Saved Meals ({savedMeals.length} items)</h1>

        <div className="saved-box">
        {savedMeals.map((m) =>
            (
            <div className="saved-item" key={m.idMeal}>
                <img className="saved-img" src={m.strMealThumb}/>
                <p>{m.strMeal}</p>
                <div className="item-btns">
                <button className="rmv-btn" onClick={() => deleteMeal(m.idMeal)}>Remove</button>
                <button className="view-btn" onClick={() => navigate(`/meal/${m.idMeal}`)}>ViewRecipe</button>
                </div>
            </div>
            ))}
        </div>
    </div>


)
}


export default SavedRecipes
