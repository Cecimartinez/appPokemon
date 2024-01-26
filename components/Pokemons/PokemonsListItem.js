import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import NativeAdView from "react-native-admob-native-ads";
import AdBanner from '../Ads/AdBanner';

const PokemonListItem = ({ item, index, onSelect }) => {
 const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;

 return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <View style={styles.itemContainer}>
        <Image style={styles.pokemonImage} source={{ uri: imageUrl }} />
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
 );
};
 
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

export default PokemonListItem;
