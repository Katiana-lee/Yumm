import { useState } from "react"
import axios from "axios"
import { baseURL, config } from "../services"

function Form(props) {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [recipe, setRecipe] = useState("")
  const [stage, setStage] = useState(1)
 
  const handleSubmit = async (e) => {
    // e.preventDefault()

    const fields = {
      title,
      ingredients,
      recipe,
      stage,

    }
    await axios.post(baseURL, { fields }, config)
    console.log("success!")
    props.setToggleFetch((prev) => !prev)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Make a New Recipe</h4>
      <label htmlFor="title">Title:</label>
      <input
        title="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="ingredients">Ingredients:</label>
      <input
        title="ingredients"
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)} />
      <label htmlFor="recipe">Recipe:</label>
      <input
        title="recipe"
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)} />
      <label htmlFor="stage">Stage:</label>
      <input
        title="stage"
        type="number"
        min="1"
        max="3"
        value={stage}
        onChange={(e) => setStage(e.target.valueAsNumber)} />
      <button type="submit">Yummy</button>
   </form>
  )
}

export default Form;
