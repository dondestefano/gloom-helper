import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import AuthenticatedNavigationStack from './navigation/AuthenticatedNavigationStack';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
<Provider store={store}>
      <NavigationContainer>
        <Login/>
      </NavigationContainer>
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