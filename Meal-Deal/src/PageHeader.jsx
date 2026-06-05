import { Outlet, Link } from "react-router-dom"

function PageHeader() {
    return(
    <>
        <nav>
            <h1>Meals</h1>
            <Link to="/">Home</Link>
            <Link to="search">Search Meal</Link>
            <Link to="savedRecipes">Saved Recipes</Link>
        </nav>
            <Outlet/>

        </>
    )
}

export default PageHeader;