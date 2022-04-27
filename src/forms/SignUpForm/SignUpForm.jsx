/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './signUpForm.css';
import {
  Button, Icon, InputField, FormField,
} from '../../components';
import RegisterFormInputs from '../../constants/FormInputConstants';
import { formatDate } from '../../service/DateService';

const IconNames = [
  'fa-brands fa-google',
  ' fa-brands fa-google-drive',
  'fa-solid fa-envelope',
];

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
    <div className="signup-form">
      <div className="upper" />

      <i className="fa-solid fa-envelope form-icon" />
      <div className="signup-form-fields">
        <h4>Sign up</h4>
        <form onSubmit={(e) => onSubmitBtnClick(e, values)}>
          {RegisterFormInputs.map((input) => (
            <div className="form-field-container">
              <FormField
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            </div>
          ))}
          <div style={{ alignItems: 'center', marginTop: '10px', marginBottom: '13px' }}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms"> I agree with terms and conditions</label>
          </div>
          <Button type="submit" onPress={handleSubmit}>
            Sign up
          </Button>
          <p style={{ textAlign: 'center' }}>sponsored by</p>
          <div className="social-icons">
            {IconNames.map((iconName, index) => (
              <div className="icon-container" key={index}>
                <Icon fontAwesomeIconName={iconName} />
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center' }}>Already have an account?</p>

        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
