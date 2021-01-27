import { useParams } from "react-router-dom"
import Back from "./Back"

function Recipe(props) {
  const params = useParams()
  const singleData = props.recipes.find((recipe) => (
    recipe.fields.title === params.title
  ))

  return (
    <div className="allrecipes">
      <Back />
      {singleData && 
        <div className="recipes">
      <h4>{singleData.fields.title}</h4>
      <img src={singleData.fields.src} />
      <label htmlFor="title">Ingredients:</label>
      <p>{singleData.fields.ingredients}</p>
      <label htmlFor="title">Recipe:</label>
        <p>{singleData.fields.recipe}</p>
        </div>
      }

    </div>
  );
}

export default Recipe;
