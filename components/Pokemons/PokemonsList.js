import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { GET_POKEMONS_REQUEST } from '../../redux/actions';
import PokemonDetailModal from './PokemonDetailModal';

const PokemonsList = (props) => {

 const [modalVisible, setModalVisible] = useState(false);
 const [selectedPokemon, setSelectedPokemon] = useState(null);



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
const renderItem = ({ item, index }) => {
  // Construct the image URL using the Pokémon index (+1 as the API starts at index 1).
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;

  return (
    <TouchableOpacity onPress={() => {
      setSelectedPokemon(item);
      setModalVisible(true);
    }}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.pokemonImage}
          source={{ uri: imageUrl }}
        />
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

  console.log(pokemons, "pokemons")

  return (
    <>
     <FlatList
       data={pokemons}
       renderItem={renderItem}
       keyExtractor={(item) => item.name}
     />
     <PokemonDetailModal
       visible={modalVisible}
       pokemon={selectedPokemon}
       onClose={() => setModalVisible(false)}
     />
   </>
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

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  pokemonName: {
    fontSize: 20, 
    fontweight: 600,
    textTransform: 'capitalize', 
  },
  pokemonImage: {
    width: 75, 
    height: 75, 
    marginRight: 15,
  },
});
