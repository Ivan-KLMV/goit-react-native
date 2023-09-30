// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCQFdnibRCPcBR8NFLGYgpELQvbgHNeJcs',
  authDomain: 'react-native-goit-396807.firebaseapp.com',
  databaseURL:
    'https://react-native-goit-396807-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-goit-396807',
  storageBucket: 'react-native-goit-396807.appspot.com',
  messagingSenderId: '584180228988',
  appId: '1:584180228988:web:da609310f5d641722f3af9',
  measurementId: 'G-5ME96QR0Z8',
};

const app = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
