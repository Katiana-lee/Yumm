import { Link } from "react-router-dom"
// import Back from "./Back"


function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add A Recipe</Link>
      {/* <Back /> */}
    </nav>
  )
}
export default Nav;