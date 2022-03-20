import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";
import './signinForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('La contraseña es erronea')
          break
        case 'auth/user-not-found':
          alert('Email incorrecto')
          break;
        default:
          console.log(error);
      }
      // if(error.code === 'auth/wrong-password') {
      //   alert('Credenciales incorrectas')
      // } else if(error.code === 'auth/user-not-found') {
      //   alert('Credenciales incorrectas')
      // }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-in-container'>
      <h2>¿Ya tienes una cuenta?</h2>
      <span>Inicia sesión con tu email y contraseña</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
        <FormInput label='Contraseña' type="password" required onChange={handleChange} name='password' value={password} />
        <div className="buttons-container">
        <Button type="submit">Entrar</Button>
        <Button type='button' onClick={signInWithGoogle} buttonType='google'>Entrar con Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SigninForm;
