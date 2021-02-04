import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const logo = require('../assets/gloomsaverLogo.png');

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useContext(AuthContext);

  const submit = () => {
    loginUser(email, password);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={logo} />
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.promptText}>Email</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          style={styles.editText}
        />
        <Text style={styles.promptText}>Password</Text>
        <TextInput
          placeholder="Enter password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.editText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="New user"
          onPress={() => {
            navigation.navigate('CreateAccount');
          }}
        />
        <Button title="Login" onPress={submit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },

  editText: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  headerText: {
    fontFamily: 'rooters-standard',
    fontSize: 24,
    marginBottom: 10,
  },

  promptText: {
    fontWeight: '600',
    fontSize: 16,
  },

  loginContainer: {
    width: '60%',
  },

  logoImage: {
    width: 300,
    height: 200,
  },
});
