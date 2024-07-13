import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = (): void => {
  firebase.auth().signOut();
};

export { signIn, signOut };
