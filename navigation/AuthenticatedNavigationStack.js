  
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import Character from '../screens/Character'
import Combat from '../screens/Combat'

const Stack = createStackNavigator();

export default function AuthenticatedNavigationStack() {
  return (
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
  );
}

