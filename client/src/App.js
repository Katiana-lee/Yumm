import { useEffect, useState } from "react"
import { baseURL, config } from "./services"
import { Link , Route} from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import './App.css';

function App() {
// one state for recipes
  const [recipes, setRecipes] = useState([])
// one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false)
// get data from api when toggle changes
  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get(baseURL, config)
      setRecipes(resp.data.records)
    }
    getRecipes()
  },[toggleFetch])

  return (
    <div className="App">
      <Route exact path='/'>
        <Home recipes={recipes}/>
      </Route>
   </div>
  )
}

export default App;
