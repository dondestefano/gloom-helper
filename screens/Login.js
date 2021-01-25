  
import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log('submitting log in');
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
        Log In
      </Text>
      <View style={{ width: '60%' }}>
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
      </View>
      <View style= {styles.buttonContainer}>
            <Button title="New user" onPress={submit} />
            <Button title="Login" onPress={submit}  />
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
        width: "50%",
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between"
    }
  });