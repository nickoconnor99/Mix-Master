import { Link } from "react-router-dom";
import Wrapper from "../wrappers/CocktailCard";
const CocktailCard = ({ id, name, img, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={img} className="img"></img>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Details...</Link>
      </div>


    </Wrapper>
  )
}

export default CocktailCard
