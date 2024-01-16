/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import TabBar from './navigators/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';

const App = () => {
 return (
   <Provider store={store}>
     <NavigationContainer>
       <TabBar />
     </NavigationContainer>
   </Provider>
 );
};

export default App;
