import { useEffect, useState } from "react"
import { baseURL, config } from "./services"
import { Link , Route, useHistory} from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import Recipes from "./components/Recipes"
import Form from "./components/Form"
import './App.css';

function App() {

  const history = useHistory()
  const [recipes, setRecipes] = useState([])
  const [stageData, setStageData] = useState([])
  
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get(baseURL, config)
      setRecipes(resp.data.records)
    }
    getRecipes()
  }, [toggleFetch])
  
  const filterData = (stage) => {
    console.log(stage)
    const data = recipes.filter(recipe => (
      recipe.fields.stage === stage 
    ))
    setStageData(data)
    history.push('/recipes')
  }

  return (
    <div className="App">
      <Route exact path='/'>
        <Home recipes={recipes} filterData={filterData}/>
      </Route>
      <Route path='/recipes'>
        <Recipes stageData={stageData}/>
      </Route>
      <Route path='/recipes'>
        <Form setToggleFetch={setToggleFetch} />
      </Route>
   </div>
  )
}

export default App;
