import { Outlet, Link } from "react-router-dom"
import './PageHeaderStyle.css'

function PageHeader() {
    return(
    <div className="nav-box">
        <nav className="nav-bar">
            <h1 className="title"><Link className="link" to="/">PrepPal</Link></h1>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="explore">Explore</Link>
            <Link className="link" to="savedRecipes">Saved Recipes</Link>
        </nav>
            <Outlet/>

        </div>
    )
}

export default PageHeader;