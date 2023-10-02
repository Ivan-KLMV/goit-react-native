import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './config';

export const registerDB = async ({ email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // console.log('userCredential', userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

export const loginDB = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log('userCredential', userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

export const logoutDB = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
