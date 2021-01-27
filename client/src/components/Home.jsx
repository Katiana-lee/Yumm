
function Home(props) {
 
  
  const buttons = [
    `Stage 1 (4 - 6 months: Perfect Purées)`,
    `Stage 2 (6 - 8 months: Tasty Textures)`,
    `Stage 3 (9 - 12+ months: Mini Meals)`]

return (
  <div className="home">
    <h1>Yumm</h1>
    <p>Welcome to Yumm! <br/> An app to discover organic meal recipes for children </p>
    {buttons.map((stage, index) => (
      <button onClick={() => props.filterData(index + 1)}> {stage}</button>
    ))}
  
  </div>
)
}

export default Home;