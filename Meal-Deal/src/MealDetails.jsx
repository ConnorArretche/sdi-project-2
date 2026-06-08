import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MealContext } from './MealContext';
import './MealDetailsStyle.css'

function MealDetails(){
    let {mealId} = useParams();
    const [selectMeal, setSelectMeal] = useState(null);
    const {savedMeals, setSavedMeals} = useContext(MealContext)


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setSelectMeal(data.meals[0]))
    }, [mealId])

    if(!selectMeal){
        return(
            <p>Loading....</p>
        )
    }
    return(
        <div className='container'>
            <img className="meal-image" src={selectMeal.strMealThumb}/>
            <h1 className='meal-name'>{selectMeal.strMeal}</h1>
            <button className="view-btn" onClick={() => setSavedMeals(prevItems => [...prevItems, selectMeal])}>Save Meal</button>
            <p className='meal-txt'>{selectMeal.strInstructions}</p>
        </div>
    )

}

export default MealDetails