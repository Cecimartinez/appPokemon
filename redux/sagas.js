import { call, put, takeEvery } from 'redux-saga/effects';
import { getPokemons } from '../repositories/pokemonsApi';
import { GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } from './actions';

function* getPokemonsSaga() {
  try {
    const response = yield call(getPokemons);
    yield put({ type: GET_POKEMONS_SUCCESS, payload: response});
  } catch (error) {
    yield put({ type: GET_POKEMONS_FAILURE, error });
  }
}

export default function* rootSaga() {
 yield takeEvery(GET_POKEMONS_REQUEST, getPokemonsSaga);
}
