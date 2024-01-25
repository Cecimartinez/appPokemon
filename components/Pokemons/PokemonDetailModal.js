import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PokemonDetailModal = ({ visible, pokemon, onClose}) => {
 
 const handleOnClose = () => {
    onClose();
 };

 return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleOnClose}
    >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <FontAwesomeIcon icon={faTimes} size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.modalText}>{pokemon ? pokemon.name : ''}</Text>
      </View>
    </View>
 </Modal>
 );
};

const styles = StyleSheet.create({
 centeredView: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 marginTop: 22,
 },
 modalView: {
 margin: 20,
 backgroundColor: 'white',
 borderRadius: 20,
 padding: 35,
 alignItems: 'center',
 shadowColor: '#000',
 shadowOffset: {
    width: 0,
    height: 2,
 },
 shadowOpacity: 0.25,
 shadowRadius: 4,
 elevation: 5,
 },
 closeButton: {
 position: 'absolute',
 top: 10,
 right: 10,
 },
 modalText: {
 marginBottom: 15,
 textAlign: 'center',
 marginTop: 22,
 fontSize: 20, 
 textTransform: 'capitalize'
 },
});

export default PokemonDetailModal;
