import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedNavigationStack from './AuthenticatedNavigationStack';
import UnauthenticatedNavigationStack from './UnauthenticatedNavigationStack';
import AppLoading from 'expo-app-loading';
import { AuthContext } from '../context/AuthContext';

export default function AuthNavigation() {
  const { user } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {user ? (
        <AuthenticatedNavigationStack />
      ) : (
        <UnauthenticatedNavigationStack />
      )}
    </NavigationContainer>
  );
}
