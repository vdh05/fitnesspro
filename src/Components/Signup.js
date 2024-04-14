import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      await axios.post("http://10.0.2.2:5000/signup", { email, password });
      console.log("User created successfully");
      // Show alert when user is created
      Alert.alert(
        "Success",
        "User created successfully",
        [
          { text: "OK", onPress: () => navigation.navigate("Login") }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Error signing up:", error.message);
      
      if (error.response && error.response.status === 400|| error.reponse.status==401) {
        // Extract error message from response
        const errorMessage = error.response.data.message || "Invalid request";
        Alert.alert(
          "Error",
          errorMessage,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Error",
          "Error signing up. Please try again.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    }
  };
  
  const handleLogin = async () => {
   navigation.navigate("Login");
  };

  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', // Red font color
    marginBottom: 20,}}>
      Fitness Pro</Text> 
      <TextInput
        style={{ width: "100%", height: 40, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{ width: "100%", height: 40, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ backgroundColor: "blue", width: "100%", height: 40, borderRadius: 5, justifyContent: "center", alignItems: "center", marginTop: 10 }}
        onPress={handleSignup}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={{ marginTop: 20, color: "blue" }}>Don't have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
}
