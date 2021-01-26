import { useHistory } from "react-router-dom";

function Back(props) {
  let history = useHistory();
  return (
    <div className="back">
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}

export default Back;
