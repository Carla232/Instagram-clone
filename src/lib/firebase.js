import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDpW1TItPIwgO2-bRWe_GAXNXQBUU1oGJk',
  authDomain: 'instagram-yt-269e8.firebaseapp.com',
  projectId: 'instagram-yt-269e8',
  storageBucket: 'instagram-yt-269e8.appspot.com',
  messagingSenderId: '825022420802',
  appId: '1:825022420802:web:e7a5298d95265d9012dadb'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
