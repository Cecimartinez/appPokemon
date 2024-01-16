import React, { useEffect } from 'react';
import { FlatList, View,  Text } from 'react-native';
import { connect } from 'react-redux';
import { GET_POKEMONS_REQUEST } from '../../redux/actions';

const PokemonsList = (props) => {
  useEffect(() => {
    props.getPokemonsRequest();
  }, []);

  // console.log('Pokemons from Redux:', props.pokemons.result);

  const { pokemons, loading, error } = props;

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem = ({ item }) => (
    <View>

      <Text>{item.name}</Text>
    </View>
  );
  console.log(pokemons, "pokemons")

  return (
    <FlatList
      data={pokemons}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsReducer.pokemons || [],
    loading: state.pokemonsReducer.loading,
    error: state.pokemonsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonsRequest: () => 
    dispatch({ type: GET_POKEMONS_REQUEST }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
