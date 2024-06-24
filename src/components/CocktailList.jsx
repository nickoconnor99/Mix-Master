import CocktailCard from "./CocktailCard";
import Wrapper from "../wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: 'center' }}>No results to display</h4>
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return (
      { id: idDrink, name: strDrink, img: strDrinkThumb, info: strAlcoholic, glass: strGlass }
    )
  })
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item}></CocktailCard>
      })}
    </Wrapper>
  )
}

export default CocktailList
