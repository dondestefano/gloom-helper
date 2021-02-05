import React from 'react';
import AuthNavigationStack from './navigation/AuthNavigationStack';
import AuthContextProvider from './context/AuthContext';
import { useFonts } from 'expo-font';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'rooters-standard': require('./assets/fonts/rooters-standard.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <AuthNavigationStack />
      </AuthContextProvider>
    </Provider>
  );
}
