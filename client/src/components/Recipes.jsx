import { Link } from "react-router-dom"

function Recipes(props) {


return (
  <div className="recipes">
    {props.stageData.map((recipe) => (
      <Link to={`/recipe/${recipe.fields.stage}`}>
        <div>
          {recipe.fields.title}
        </div>
</Link>

    ))}
  </div>
)
}

export default Recipes;