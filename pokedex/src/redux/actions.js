/*export function searchPokemon(pokemon) {
  return {
    type: "GETPOKEMON",
    payload: pokemon
  };*/

export function searchPokemon(text) {
  return async (dispatch) => {
    dispatch({ type: "GETPOKEMON_START" });

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${text}/`
      );
      const pokemon = await response.json();
      dispatch({ type: "GETPOKEMON_SUCCESS", payload: pokemon });
    } catch (error) {
      alert("This pokemon do not exist. Please try another name");
      dispatch({ type: "GETPOKEMON_ERROR", error });
    }
  };
}

// const mapStats = () => {
//   pokemon.map((stats, index) => {
//     return (
//       <p key={`${stats.abilities}_${stats.abiility}_${stats.ability.name}`}>
//         {console.log(stats.abilities)}
//         {console.log(stats.abiility)}
//         {console.log(stats.ability.name)}
//       </p>
//     );
//   });
// };
