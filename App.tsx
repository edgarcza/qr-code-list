import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './app/containers/HomeScreen';
import { Provider } from 'react-redux'
import AppStore from './app/redux/stores/AppStore';


export default function App() {
  return (
    <Provider store={AppStore}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
