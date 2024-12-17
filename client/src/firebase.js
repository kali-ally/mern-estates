// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-5cf23.firebaseapp.com',
  projectId: 'mern-estate-5cf23',
  storageBucket: 'mern-estate-5cf23.firebasestorage.app',
  messagingSenderId: '900265816169',
  appId: '1:900265816169:web:10389b76652a1e5c9af2f8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
