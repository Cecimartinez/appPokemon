import axios from 'axios';

export async function getPokemons() {
 try {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=7');
  console.log(response.data.results, 'data apiii');
  return response.data.results;
 } catch (error) {
  console.error('Error fetching pokémons:', error);
  throw error;
 }
}
