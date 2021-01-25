import React from 'react';
import AuthNavigationStack from './navigation/AuthNavigationStack';
import AuthContextProvider from './context/AuthContext';
import { store } from './redux/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <AuthNavigationStack />
      </AuthContextProvider>
    </Provider>
  );
}