  
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import CreateAccount from '../screens/CreateAccount'

const Stack = createStackNavigator();

export default function UnauthenticatedNavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{title: "Create account"}} />
    </Stack.Navigator>
  );
}