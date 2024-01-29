import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { GET_POKEMONS_REQUEST } from '../../redux/actions';
import PokemonDetailModal from './PokemonDetailModal';
import PokemonListItem from './PokemonsListItem';
import AdInterstitial from '../Ads/AdInterstitial';
import usePokemonSelection from '../../hooks/usePokemonSelection';
import AdNativeViewBase from '../Ads/AdNativeViewBase';
import AdBanner from '../Ads/AdBanner';
import { Loading } from '../../uilib/player/Loading';
import ListItemVerticalAd from '../Ads/ListItemVerticalAd';

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
  // if ((index + 1) % 5 === 0) {
  //  const adUnitID = "ca-app-pub-3940256099942544/2247696110"; // ID de anuncio de prueba
   return (
      <PokemonListItem item={item} index={index} onSelect={selectPokemon} />
    );
  // } else {
  //   return <PokemonListItem item={item} index={index} onSelect={selectPokemon} />;
  // }
};

  

 if (loading) {
    return <Loading/>
 }
  const AD_REPO = 'native_popular_shows';

 return (
    <>
      <AdInterstitial />
      <ListItemVerticalAd repository={AD_REPO} />
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

