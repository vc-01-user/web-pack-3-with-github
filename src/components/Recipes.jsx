import {useState} from "react";


// const elvenShieldRecipe = {
//   leatherStrips: 2,
//   ironIngot: 1,
//   refinedMoonstore: 4,
// };

// const elvenGountletsRecipe = {
//   elvenShieldRecipe,
//   leather: 1,
//   refinedMoonstore: 4,
// };

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstore: 4,
  };
  
  const elvenGountletsRecipe = {
    leather: 1,
    refinedBlaBla: 4,
  };
  
  console.log(elvenShieldRecipe);
  console.log(elvenGountletsRecipe);


  const Recipes = () => {
  const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe</h3>
            <button onClick={()=> setRecipe(elvenShieldRecipe)} className="button">Elven Shield Recipe</button>
            <button onClick={()=> setRecipe(elvenGountletsRecipe)}>Elven Gountlet Recipe</button>
            <ul>
              {Object.keys(recipe).map((material) => (
                <li key={material}>
                  {material}: {recipe[material]}
                </li>
              ))}
            </ul>
        </div>
    )
}

  export default Recipes;