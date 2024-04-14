import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Step from './Hooks/Step';


const Home = () => {
  const navigation = useNavigation();

  const handleStepCounterPress = () => {
    navigation.navigate(Step);
  };

  const handleExercise = () => {
    //navigation.navigate('Exercise');
  };

  const handleDiet = () => {
    //navigation.navigate('Diet');
  };

  return (
    <View style={styles.container}>
      <View style={styles.featuresContainer}>
        <View style={styles.row}>
          <FeatureCard title="Step Counter" onPress={handleStepCounterPress} />
          <FeatureCard title="Exercise" onPress={handleExercise} />
        </View>
        <View style={styles.row}>
          <FeatureCard title="Diet" onPress={handleDiet} />
          {/* Add other FeatureCard components if needed */}
        </View>
      </View>
    </View>
  );
};

const FeatureCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.featureCard} onPress={onPress}>
      <Text style={styles.featureTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuresContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
