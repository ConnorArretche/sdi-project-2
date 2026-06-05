import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

function MealDetails(){
    let {mealId} = useParams();
    const [selectMeal, setSelectMeal] = useState(null);

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
        <div>
            <h1>{selectMeal.strMeal}</h1>
            <img src={selectMeal.strMealThumb}/>
            <p>{selectMeal.strInstructions}</p>
        </div>
    )

}

export default MealDetails