  
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Character from '../screens/Character';
import Combat from '../screens/Combat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigationStack() {
  return (
    <Tab.Navigator initialRouteName="Products">
    <Tab.Screen 
        name="Character" 
        component={Character} />
<Tab.Screen name="Combat" component={Combat} />
</Tab.Navigator>
  );
}

