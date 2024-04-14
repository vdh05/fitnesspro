import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ExercisePage from './ExercisePage';

const Exercise = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample exercise data
  const exerciseData = [
    { id: 1, category: 'Cardiovascular', name: 'Running', description: 'Jogging at a moderate pace for 30 minutes.' },
    { id: 2, category: 'Cardiovascular', name: 'Cycling', description: 'Biking for 45 minutes on flat terrain.' },
    { id: 3, category: 'Strength Training', name: 'Squats', description: 'Bodyweight squats focusing on proper form.' },
    // Add more exercises as needed
  ];

  // Filter exercises based on search query and category
  const filteredExercises = exerciseData.filter(exercise => 
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render each exercise item
  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity style={styles.exerciseItem}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseCategory}>{item.category}</Text>
      <Text style={styles.exerciseDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search exercises..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredExercises}
        renderItem={renderExerciseItem}
        keyExtractor={item => item.id.toString()}
      />
      <ExercisePage/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  exerciseItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 14,
  },
});

export default Exercise;
