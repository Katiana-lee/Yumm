import {useParams} from "react-router-dom"

function Recipe(props) {
  const params = useParams()
  const singleData = props.recipes.find((recipe) => (
    recipe.fields.title === params.title
  ))

  return (
    <div>
      <h4>Recipe</h4>
      {singleData.fields.ingredients}
      <img src={singleData.fields.src} />

    </div>
  );
}

export default Recipe;
