import { useEffect, useState } from "react"
import { baseURL, config } from "./services"
import { Link , Route, useHistory} from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import Recipes from "./components/Recipes"
import './App.css';

function App() {

  const history = useHistory()
  const [recipes, setRecipes] = useState([])
  const [stageData, setStageData] = useState([])
  
// one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false)
// get data from api when toggle changes
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
   </div>
  )
}

export default App;
