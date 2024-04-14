import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Home from './home';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:5000/login", { email, password });
      const { status } = response;
      console.log(response);
      if (status === 200) {
        console.log("Login successful");
        Alert.alert(
          "Success",
          "Login successful",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate('Home')
            }
          ],
          { cancelable: false }
        );
      } else {
        console.log("Invalid email or password");
        // Handle incorrect email or password
        // For example, display an error message to the user
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle error response from backend
      // For example, display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Fitness Pro</Text> 
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', // Red font color
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
