import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const signIn = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = (): void => {
  firebase.auth().signOut();
};

export { signIn, signOut };
