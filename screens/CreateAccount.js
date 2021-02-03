import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createUser } = useContext(AuthContext);

  const submit = () => {
    console.log('submitting new user with');
    createUser(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>New user</Text>
      <View style={styles.registerContainer}>
        <Text style={styles.promptText}>Username</Text>
        <TextInput
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          style={styles.editText}
        />
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
        <Button title="Create new user" onPress={submit} />
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

  registerContainer: {
    width: '60%',
  },
});
