import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";
import './signupForm.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // comprobar que coinciden contraseña y confirmar contraseña
    if(password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // crear el usuario
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('El email ya está en uso')
      } else {
        console.log('Error al crear la cuenta', error.message);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sign-up-container'>
      <h2>¿No tienes una cuenta?</h2>
      <span>Regístrate con tu email y contraseña</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Nombre' type="text" required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
        <FormInput label='Contraseña' type="password" required onChange={handleChange} name='password' value={password} />
        <FormInput label='Confirmar Contraseña' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <Button type="submit">Registrar</Button>
      </form>
    </div>
  )
}

export default SignupForm;
