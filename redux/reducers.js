import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from './actions';

const initialState = {
  loading: false,
  pokemons: [],
  error: null,
};

function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMONS_SUCCESS:
      console.log('Reducer State:', {
        loading: false,
        pokemons: action.payload,
        error: null,
      });
      return {
        loading: false,
        pokemons: action.payload,
        error: null,
      };
    case GET_POKEMONS_FAILURE:
      return {
        loading: false,
        pokemons: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export default pokemonsReducer;
