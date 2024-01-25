import { useState } from 'react';

const usePokemonSelection = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedPokemon, setSelectedPokemon] = useState(null);
  
   const selectPokemon = (pokemon) => {
      setSelectedPokemon(pokemon);
      setModalVisible(true);
   };
  
   return { modalVisible, selectedPokemon, selectPokemon, setModalVisible };
  };

  export default usePokemonSelection;
