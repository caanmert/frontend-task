/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './registerForm.css';
import { Button, FormField } from '../../components';
import { inputs } from '../../contents/registerForm';
import { formatDate } from '../../service/DateService';
import { ReactComponent as GmailIcon } from '../../assets/gmail-icon.svg';
import BottomSection from './BottomSection';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  createdAt: formatDate(new Date()),
};

function RegisterForm({ handleSubmit }) {
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

  const formList = inputs.map((input) => (
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
  ));

  return (
    <>
      <div className="transparent-div" />
      <div className="register-form">
        <GmailIcon className="top-icon" />
        <div className="register-form-fields">
          <h3><strong>Sign up</strong></h3>
          <form onSubmit={(e) => onSubmitBtnClick(e)}>
            {formList}
            <div className="terms-container">
              <label htmlFor="terms">
                <input className="terms-checkbox" type="checkbox" id="terms" name="terms" required />
                <small> I agree with terms and conditions</small>
              </label>
            </div>
            <Button type="submit" onPress={handleSubmit}>
              Sign up
            </Button>
            <BottomSection />
          </form>
        </div>
      </div>
    </>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
