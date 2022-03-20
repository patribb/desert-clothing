import SigninForm from '../../components/signinForm/SigninForm';
import SignupForm from '../../components/signupForm/SignupForm';
import './authentication.styles.scss';

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SigninForm />
      <SignupForm />
    </div>
  )
}

export default Authentication;
