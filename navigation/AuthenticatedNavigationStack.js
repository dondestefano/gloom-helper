  
import React from 'react';
import Character from '../screens/Character';
import Combat from '../screens/Combat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigationStack() {

  return (
    <Tab.Navigator 
      initialRouteName="Character"
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Character') {
              iconName = "heart-half-full"
            } else if (route.name === 'Combat') {
              iconName = "sword"
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
            fontWeight: "bold"
          },
        }}
      >
        <Tab.Screen 
          name="Character" 
          component={Character} />
        <Tab.Screen 
          name="Combat" 
          component={Combat} />
      </Tab.Navigator>
  );
}

