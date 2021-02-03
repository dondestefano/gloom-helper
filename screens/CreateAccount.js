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
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
        New user
      </Text>
      <View style={{ width: '60%' }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Username</Text>
        <TextInput
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          style={{
            backgroundColor: 'lightgrey',
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Email</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: 'lightgrey',
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Password</Text>
        <TextInput
          placeholder="Enter password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 5 }}
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
});
