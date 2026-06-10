import { useState, useEffect,} from "react"
import { useNavigate} from 'react-router-dom'
import './SearchRecipes.css'

function SearchRecipes(){

    const [input, setInput] = useState('');
    const [meal, setMeal] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=United%20States')
        .then(res => res.json())
        .then(data =>
            setMeal(data.meals.sort(() => 0.5 - Math.random()).slice(0,4)))
        },[])

    function handleSearch(){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(response => response.json())
        .then(json => setMeal(json.meals))
    }


    return(
            <div>
            <div className="search-bar">
                <input type="text" placeholder="Search for a recipe..." onChange={(srch) => setInput(srch.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='grid-box'>
                {meal.map((m) => (
                    <div className='list-item' key={m.idMeal}>
                        <img className='list-img' src={m.strMealThumb}/>
                        <p className='list-name'>{m.strMeal}</p>
                        <button className="view-btn" onClick={() => navigate(`/meal/${m.idMeal}`)}>View Recipe</button>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default SearchRecipes