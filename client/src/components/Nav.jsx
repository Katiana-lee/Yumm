import { Link } from "react-router-dom"

function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add A Recipe</Link>
    </nav>
  )
}
export default Nav;