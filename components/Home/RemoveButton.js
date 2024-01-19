
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const RemoveButton = ({ onPress }) => {
 return (
  <Pressable
    style={styles.removeButton}
    onPress={onPress}
  >
    <Text style={styles.removeButtonText}>Remover el último pokemon</Text>
  </Pressable>
 );
};

const styles = StyleSheet.create({
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
 },
});

export default RemoveButton;
