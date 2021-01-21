import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Character from './screens/Character'
import Combat from './screens/Combat'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen 
            name="Character" 
            component={Character}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  title="To Combat"
                  onPress={() => navigation.navigate('Combat')}
                />
              ),
            })} />
          <Stack.Screen name="Combat" component={Combat} />
        </Stack.Navigator>
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