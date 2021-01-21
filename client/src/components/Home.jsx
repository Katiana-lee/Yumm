import { Link } from "react-router-dom"

function Home(props) {

  const buttons = ['stage 1', 'stage 2', 'stage 3']

return (
  <div className="home">
    <h2>Please work homepage</h2>
    {buttons.map((stage, index) => (
      <button onClick={() => props.filterData(index + 1)}>{stage}</button>
    ))}
  
  </div>
)
}

export default Home;