import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function Breakfast(props) {
  const params = useParams()
  // const breakfast = props.breakfast.filter((breakfast) => breakfast.id === params.id)

return (
  <div className="breakfasts">
    {props.stageData.map((breakfast) => (
      <Link to={`/recipe/breakfast/${breakfast.fields.stage}`}>
        <div>
          {breakfast.fields.title}
        </div>
        
</Link>

    ))}
  </div>
)
}

export default Breakfast;