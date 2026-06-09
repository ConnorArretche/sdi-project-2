import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePageStyle.css'

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
        <div className='home-layout'>
        <h3 className='inspiration'>Need Some Inspiration?</h3>
        <h2>Random Meals to Inspire You</h2>
        <div className='grid-box'>
                {meal.map((m) =>
                    (
                        <div className='list-item' key={m.idMeal}>
                            <img className='list-img' src={m.strMealThumb}/>
                            <p className='list-name'>{m.strMeal}</p>
                            <button className="view-btn" onClick={() => navigate(`/meal/${m.idMeal}`)}>View Recipe</button>
                        </div>
                    )
                )}

        </div>
        </div>
    )

}

export default HomePage