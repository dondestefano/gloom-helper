  
import React from 'react';
import CharacterSelect from '../screens/CharacterSelect';
import Character from '../screens/Character';
import Perks from '../screens/Perks';
import Combat from '../screens/Combat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getIsCharacterSelected } from '../redux/characterReducer';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigationStack() {
  const isCharacterSelected = useSelector(getIsCharacterSelected);

  return (
    <Tab.Navigator 
      initialRouteName="Character"
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Character') {
              iconName = "heart-half-full"
            } else if (route.name === 'Perks') {
              iconName = "star-half-full"
            } else if (route.name === 'Combat') {
              iconName = "sword"
            }
            
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
          labelStyle: {
            fontSize: 12,
            fontWeight: "bold"
          },
        }}
      >
        <Tab.Screen 
          name="Character" 
          component={isCharacterSelected? Character :  CharacterSelect} />
        <Tab.Screen 
          name="Perks"
          component={isCharacterSelected? Perks :  CharacterSelect} />
        <Tab.Screen 
          name="Combat" 
          component={Combat} />
      </Tab.Navigator>
  );
}

