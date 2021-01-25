import { Link } from "react-router-dom";

function Recipes(props) {
  return (
    <div className="recipes">
      <h4>Breakfast:</h4>
      {props.stageData.map((recipe) => (
        <Link to={`/recipe/${recipe.fields.title}`}>
          <div>{recipe.fields.type === "breakfast" && recipe.fields.title}</div>
        </Link>
        
      ))}
      <h4>Lunch:</h4>
       {props.stageData.map((recipe) => (
        <Link to={`/recipe/${recipe.fields.title}`}>
          <div>{recipe.fields.type === "lunch" && recipe.fields.title}</div>
        </Link>
        
       ))}
      <h4>Dinner:</h4>
       {props.stageData.map((recipe) => (
        <Link to={`/recipe/${recipe.fields.title}`}>
          <div>{recipe.fields.type === "dinner" && recipe.fields.title}</div>
        </Link>
        
      ))}
    </div>
  );
}

export default Recipes;
