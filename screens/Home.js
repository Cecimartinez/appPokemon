import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RemoveButton from '../components/Home/RemoveButton';
import AdBanner from '../components/Ads/AdBanner';
import NativeAdView from "react-native-admob-native-ads";

const Home = () => {
 return (

    <View style={styles.container}>
      <NativeAdView adUnitID="ca-app-pub-4209556911281829/3319215719">
      <AdBanner />
      </NativeAdView>

      <Text style={styles.welcomeText}>Welcome to the App</Text>
      <Image
        source={require('../img/pokemonLogo.png')}
        style={styles.logoImage}
      />
      <RemoveButton
        onPress={() => {
          console.log('remove button clicked');
        }}
      />

    </View>

 );
};


 const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5'
  },
  welcomeText: {
  fontSize: 35,
  textAlign: 'center',
  color: '#333',
  marginBottom: 40,
  fontWeight: 'bold',
  marginTop: 25,
  },
  logoImage: {
  width: 250,
  height: 250,
  resizeMode: 'contain',
  marginTop: 20,
  },
  removeButton: {
  backgroundColor: '#007AFF',
  borderRadius: 25, 
  padding: 11, 
  paddingHorizontal: 20, 
  marginTop: 50,
  },
  removeButtonText: {
  color: 'white',
  textAlign: 'center',
  fontSize: 16,
  }
 });
 
export default Home;
 