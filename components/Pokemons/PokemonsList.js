import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { GET_POKEMONS_REQUEST } from '../../redux/actions';
import PokemonDetailModal from './PokemonDetailModal';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-4209556911281829/7296853700';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
 keywords: ['pokemon', 'game'],
});

const PokemonsList = (props) => {
 const [modalVisible, setModalVisible] = useState(false);
 const [selectedPokemon, setSelectedPokemon] = useState(null);

 useEffect(() => {
    props.getPokemonsRequest();

    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      interstitial.show();
    });

    interstitial.load();

    return unsubscribe;
 }, []);

 const { pokemons, loading, error } = props;

 if (loading) {
    return <Text>Loading...</Text>;
 }

 if (error) {
    return <Text>Error: {error.message}</Text>;
 }

 const renderItem = ({ item, index }) => {
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
    textTransform: 'capitalize', 
 },
 pokemonImage: {
    width: 75, 
    height: 75, 
    marginRight: 15,
 },
});
