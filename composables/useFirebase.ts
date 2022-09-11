//sign in new user
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  return credentials;
};
export const signInUser = async (email, password) => {
  //sign in existing user
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};
export const initUser = async () => {
  //..Set an authentication state observer and get user data
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
    } else {
      // User is signed out
      // ...
    }
  });
};
//signOut user
export const signOutUser = async () => {
  const auth = getAuth();
  const results = await auth.signOut();
  console.log(`signed out ${results}`);
};
