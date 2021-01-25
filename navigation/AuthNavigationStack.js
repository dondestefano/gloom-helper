  
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedNavigationStack from './AuthenticatedNavigationStack';
import UnauthenticatedNavigationStack from './UnauthenticatedNavigationStack';
import { AuthContext } from '../context/AuthContext';

export default function AuthNavigation() {
  const { user } = useContext(AuthContext);
  
  return (
    <NavigationContainer>
      {user ? <AuthenticatedNavigationStack /> : <UnauthenticatedNavigationStack />}
    </NavigationContainer>
  );
}