import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './app/containers/HomeScreen';
import { Provider } from 'react-redux'
import AppStore from './app/redux/stores/AppStore';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={AppStore}>
        <HomeScreen />
      </Provider>
    </NavigationContainer>
  );
}
