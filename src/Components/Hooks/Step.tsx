import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import RingProgress from '../ringprogress'; // Import your RingProgress component
import Value from '../Value'; // Import your Value component

const Step = () => {
  const [date, setDate] = useState(new Date());
  const [steps, setSteps] = useState(0);
  const [flights, setFlights] = useState(0);
  const [calories, setCalories] = useState(0);
  const [stepGoal, setStepGoal] = useState(10000); // Default step goal
  const goalInputRef = useRef(null); // Create a ref for the TextInput

  const changeDate = (numDays) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + numDays);
    setDate(currentDate);
    setRandomData();
  };

  const setRandomData = () => {
    setSteps(generateRandomValue(1000, stepGoal));
    setFlights(generateRandomValue(0, 29));
    setCalories(generateRandomValue(500, 999));
  };

  const generateRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleGoalInput = (text) => {
    const goal = parseInt(text) || stepGoal ;
    Alert.alert(
      'Confirm Goal',
      `Set step goal to ${goal}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setStepGoal(goal); // Set the new goal directly
            setRandomData();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleEndEditing = () => {
    handleGoalInput(goalInputRef.current.value);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -5}
    >
      <View style={styles.datePicker}>
        <AntDesign
          onPress={() => changeDate(-1)}
          name="left"
          size={20}
          color="#C3FF53"
        />
        <Text style={styles.date}>{date.toDateString()}</Text>
        <AntDesign
          onPress={() => changeDate(1)}
          name="right"
          size={20}
          color="#C3FF53"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter the Step Goal</Text>
        <TextInput
          ref={goalInputRef}
          style={styles.input}
          keyboardType="numeric"
          placeholder="Step Goal"
          value={stepGoal.toString()}
          onChangeText={(text) => setStepGoal(parseInt(text) || 0)}
          onEndEditing={handleEndEditing}
        />
      </View>
      <RingProgress
        radius={150}
        strokeWidth={50}
        progress={steps / stepGoal}
      />
      <View style={styles.values}>
        <Value label="Steps" value={steps.toString()} />
        <Value
          label="Distance"
          value={`${(steps * 0.7 / 1000).toFixed(2)} km`}
        />
        <Value label="Flights Climbed" value={flights.toString()} />
        <Value label="Calories" value={calories.toString()} />
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 50,
  },
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default Step;
