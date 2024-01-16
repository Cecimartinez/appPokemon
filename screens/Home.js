import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home= () => {

 return (
  <View style={styles.container}>
    <Text style={styles.welcomeText}>Welcome to the Pokemon App</Text>
   
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
 },
 welcomeText: {
  fontSize: 22,
  textAlign: 'center',
  color: '#333',
  marginBottom: 20,
 },
 image: {
  width: 200,
  height: 200,
  marginTop: 50,
 },
 button: {
  backgroundColor: '#007AFF',
  borderRadius: 25, 
  padding: 11, 
  paddingHorizontal: 20, 
  marginTop: 50,
 },
 buttonText: {
  color: 'white',
  textAlign: 'center',
  fontSize: 16,
 },
});

export default Home;
