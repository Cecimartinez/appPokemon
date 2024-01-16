import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import PokemonsScreen from '../screens/Pokemons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const TabBar = () => {
 return (
 <Tab.Navigator>
 <Tab.Screen 
 name="Home" 
 component={HomeScreen} 
 options={{ 
   tabBarIcon: () => (
    <FontAwesomeIcon
    icon={faHouse}
    size={25}
  />
),
}}
 />
 <Tab.Screen 
 name="Pokemons" 
 component={PokemonsScreen} 
 options={{ 
  tabBarIcon: () => (
    <FontAwesomeIcon
    icon={faMagnifyingGlass}
    size={25}
  />
   ),
 }} 
 />
 </Tab.Navigator>
 );
};

export default TabBar;
