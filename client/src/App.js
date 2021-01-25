import { useEffect, useState } from "react"
import { baseURL, config } from "./services"
import { Link , Route, useHistory} from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import Recipes from "./components/Recipes"
import Form from "./components/Form"
import Nav from "./components/Nav"
import Breakfast from "./components/Breakfast"
import Recipe from "./components/Recipe"
import './App.css';

function App() {

  const history = useHistory()
  const [recipes, setRecipes] = useState([])
  const [stageData, setStageData] = useState([])
  const [breakfast, setBreakfast] = useState([])
  
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
    <div className="app">
      <Nav />
      <Route exact path='/'>
       
          <Home recipes={recipes} filterData={filterData} />
          
      </Route>
      <Route path='/recipes'>
        <Recipes stageData={stageData} />
      </Route>
      <Route path='/new'>
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/recipes/breakfast" >
        <Breakfast />
      </Route>
      <Route path='/recipe/:title'>
        <Recipe recipes={recipes}/>
      </Route>
   </div>
  )
}

export default App;
