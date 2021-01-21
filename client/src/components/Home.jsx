import { Link } from "react-router-dom"

function Home(props) {


return (
  <div className="home">
    <h2>Please work homepage</h2>
    {props.recipes.map((recipe) => {
      return (
        <Link to={`/recipe/${recipe.stage}`}></Link>
      )
    })}
  </div>
)
}

export default Home;