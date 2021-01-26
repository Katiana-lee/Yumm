import {useParams} from "react-router-dom"

function Recipe(props) {
  const params = useParams()
  const singleData = props.recipes.find((recipe) => (
    recipe.fields.title === params.title
  ))

  return (
    <div className="recipes">
      <h4>{singleData.fields.title}</h4>
      <img src={singleData.fields.src} />
      <label htmlFor="title">Ingredients:</label>
      <p>{singleData.fields.ingredients}</p>
      <p>{singleData.fields.recipe}</p>
     

    </div>
  );
}

export default Recipe;
