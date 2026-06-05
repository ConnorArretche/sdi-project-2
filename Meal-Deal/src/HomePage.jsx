import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const [meal, setMeal] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=United%20States')
        .then(res => res.json())
        .then(data => {
            setMeal(data.meals.sort(() => 0.5 - Math.random()).slice(0,4))
            })
        }, []);

    return(
        <div>
            <h4>Need Some Inspiration?</h4>
            <ul>
                {meal.map((m) =>
                    (
                        <li key={m.idMeal}>
                            <img src={m.strMealThumb} onClick={() => navigate(`/meal/${m.idMeal}`)} />
                            <p>{m.strMeal}</p>
                        </li>
                    )
                )}
            </ul>
        </div>
    )

}

export default HomePage