import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const Signin = () => {
    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
    }

  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Singin with google</button>
    </div>
  )
}

export default Signin;
