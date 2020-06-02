const initialState = {
  loading: false,
  pokemon: {},
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GETPOKEMON_START":
      return {
        ...state,
        loading: true,
        pokemon: {},
        error: null,
      };

    case "GETPOKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
        error: null,
      };

    case "GETPOKEMON_ERROR":
      return {
        ...state,
        loading: false,
        pokemon: null,
        error: action.error,
      };

    default:
      return state;
  }
}

export default reducer;
