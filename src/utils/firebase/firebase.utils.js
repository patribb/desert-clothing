import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAh-ukWNtgL8NMQN7qfAGFZpaZYiVbvp24",
    authDomain: "crwn-shop-cfd9d.firebaseapp.com",
    projectId: "crwn-shop-cfd9d",
    storageBucket: "crwn-shop-cfd9d.appspot.com",
    messagingSenderId: "999792971785",
    appId: "1:999792971785:web:3557cd60a82451db90e8d8"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// GoogleAuthProvider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists());

    // if user data do not exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log('error al crear usuario', error.message);
      }
    }

    // if user data exist
    // return userDocRef
    return userDocRef;
    
}