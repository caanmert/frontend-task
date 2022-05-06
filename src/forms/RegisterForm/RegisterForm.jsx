/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './registerForm.css';
import { Button, FormField } from '../../components';
import { registerFormInputs, registerFormIcons } from '../../constants/RegisterFormConstants';
import { formatDate } from '../../service/DateService';
import { ReactComponent as GmailIcon } from '../../assets/gmail-icon.svg';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  createdAt: formatDate(new Date()),
};

function SignUpForm({ handleSubmit }) {
  const [values, setValues] = useState(initialState);
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setValues(initialState);

    return () => {
      setSubmitted(false);
    };
  }, [isSubmitted]);

  const onSubmitBtnClick = (e) => {
    e.preventDefault();
    e.target.reset();
    setSubmitted(true);
    handleSubmit(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="transparent-div" />
      <div className="register-form">
        {/*     <i className="fa-solid fa-envelope top-icon" /> */}
        <GmailIcon className="top-icon" />
        <div className="register-form-fields">
          <h3><strong>Sign up</strong></h3>
          <form onSubmit={(e) => onSubmitBtnClick(e, values)}>
            {registerFormInputs.map((input) => (
              <div className="form-field-container" key={input.id}>
                <FormField
                  key={input.id}
                  type={input.type}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  shouldFieldReset={isSubmitted}
                />
              </div>
            ))}
            <div className="terms-container">
              <label htmlFor="terms">
                <input className="terms-checkbox" type="checkbox" id="terms" name="terms" required />
                <small> I agree with terms and conditions</small>
              </label>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button type="submit" onPress={handleSubmit}>
                Sign up
              </Button>
              <p><small>sponsored by</small></p>
              <div className="bottom-icons-container">
                {registerFormIcons.map((icon) => (
                  <div className="bottom-icon" key={icon.id}>
                    <img src={icon.url} alt={icon.alt} style={{ maxHeight: '70%', objectFit: 'contain' }} />
                    {/*   <Icon fontAwesomeIconName={icon.name} /> */}
                  </div>
                ))}
              </div>
              <p>
                <small>
                  Already have an account?
                  <a href="link" style={{ color: 'green', fontWeight: 'bold' }}>Sign In</a>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
