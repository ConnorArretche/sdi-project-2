import { useContext, useEffect } from "react"
import { MealContext } from "./MealContext"
import { useNavigate } from "react-router-dom"

function SavedRecipes(){

    const {savedMeals} = useContext(MealContext)
    const navigate = useNavigate();


    return(
    <div>
        <h1>Saved Meals</h1>
        <ul>
        {savedMeals.map((m) => (
            <li key={m.idMeal} onClick={() => navigate(`/meal/${m.idMeal}`)}>
                {m.strMeal}
            </li>
        ))}

        </ul>
    </div>
)
}

export default SavedRecipes
