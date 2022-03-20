import Button from '../../components/button/Button';
import SignupForm from '../../components/signupForm/SignupForm';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const Signin = () => {

    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
    }

  return (
    <div>
      <Button onClick={logGoogleUser}>Singin with google</Button>
      <SignupForm />
    </div>
  )
}

export default Signin;
