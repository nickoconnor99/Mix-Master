import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../wrappers/Cocktail";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
      return data;
    }
  }
}

export const loader =
  (queryClient) =>
    async ({ params }) => {
      const { id } = params;
      await queryClient.ensureQueryData(singleCocktailQuery(id))
      return { id };
    }
const Cocktail = () => {
  const { id } = useLoaderData();

  // if (!data) return
  //   <h2>something went wrong...</h2>
  const { data } = useQuery(singleCocktailQuery(id))

  if (!data) return <Navigate to='/'></Navigate>

  const singleDrink = data.drinks[0];

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') &&
        singleDrink[key] !== null)
    .map((key) => singleDrink[key])

  console.log(validIngredients)



  const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions } = singleDrink;
  return (<Wrapper>
    <header>
      <Link to='/' className="btn">back home</Link>
      <h3>{name}</h3>
    </header>
    <div className="drink">
      <img src={image} alt="" className="img" />
      <div className="drink-info">
        <p>
          <span className="drink-data">name :</span>
          {name}
        </p>
        <p>
          <span className="drink-data">category :</span>
          {category}
        </p>
        <p>
          <span className="drink-data">ingredients :</span>
          {validIngredients.map((item, index) => {
            return <span key={item} className="ing">{item}{index < validIngredients.length - 1 ? ',' : ''}</span>
          })}
        </p>
        <p>
          <span className="drink-data">info :</span>
          {info}
        </p>
        <p>
          <span className="drink-data">glass :</span>
          {glass}
        </p> v
        <p>
          <span className="drink-data">instructions :</span>
          {instructions}
        </p>
      </div>
    </div>
  </Wrapper>

  )
}

export default Cocktail
