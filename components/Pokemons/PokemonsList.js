import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { GET_POKEMONS_REQUEST } from '../../redux/actions';
import PokemonDetailModal from './PokemonDetailModal';
import PokemonListItem from './PokemonsListItem';
import AdInterstitial from '../Ads/AdInterstitial';
import usePokemonSelection from '../../hooks/usePokemonSelection';

const PokemonList = ({ pokemonList, renderItem }) => {
 return (
    <FlatList
      data={pokemonList}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
 );
};

const ErrorDisplay = ({ error }) => {
 if (!error) return null;

 return <Text>Error: {error.message}</Text>;
};

const PokemonsList = (props) => {
 const { modalVisible, selectedPokemon, selectPokemon, setModalVisible } = usePokemonSelection();

 useEffect(() => {
    props.getPokemonsRequest();
 }, []);

 const { pokemonList, loading, error } = props;

 const renderItem = ({ item, index }) => {
    return <PokemonListItem item={item} index={index} onSelect={selectPokemon} />;
 };

 if (loading) {
    return <Text>Loading...</Text>;
 }

 return (
    <>
      <AdInterstitial />
      <PokemonList pokemonList={pokemonList} renderItem={renderItem} />
      <ErrorDisplay error={error} />
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
    pokemonList: state.pokemonsReducer.pokemons || [],
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

