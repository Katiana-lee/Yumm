import { Link } from "react-router-dom"

function Home(props) {
 
  
  const buttons = [
    `Stage 1 (4 - 8 months: Perfect Purées)`,
    `Stage 2 (9-12 months: Tasty Textures)`,
    `Stage 3 (12+ months: Mini Meals)`]

return (
  <div className="home">
    <h1>Yumm</h1>
    <p>Welcome to Yumm! An app to discover organic meal recipes for infants and up. </p>
    {buttons.map((stage, index) => (
      <button onClick={() => props.filterData(index + 1)}> {stage}</button>
    ))}
  
  </div>
)
}

export default Home;