import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const addUser = async (userId, userData) => {
  try {
    await db.collection('users').doc(userId).set(userData);
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};

export { db, addUser };
