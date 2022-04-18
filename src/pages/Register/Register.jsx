import React from 'react';
import RegisterForm from '../../forms/RegisterForm/RegisterForm';
import './register.css';

function Register() {
  return (
    <div className="container">
      <div className="register-form-container">
        <h3>Sign up</h3>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
