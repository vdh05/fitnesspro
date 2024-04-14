import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Components/home.js';
import Step from './src/Components/Hooks/Step.tsx'; 
import Exercise from './src/Components/exercise.tsx';
import Diet from './src/Components/diet.tsx';
import LoginScreen from './src/Components/loginscreen.js';
import SignupScreen from './src/Components/Signup.js';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Signup" component={SignupScreen}/>
         <Stack.Screen name="Login" component={LoginScreen}/>  
         <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Step" component={Step} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="Diet" component={Diet}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
