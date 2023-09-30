import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fireBaseAuth } from '../../config';

const auth = fireBaseAuth;

export const registerDB = async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

export const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    return credentials.user;
  } catch (error) {
    throw error;
  }
};
