import React from 'react';
import PropTypes from 'prop-types';
import { InputField, Button, Icon } from '../../components';

function RegisterForm({ handleSubmit }) {
  const IconNames = [
    'fa-brands fa-google',
    ' fa-brands fa-google-drive',
    'fa-solid fa-envelope',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <InputField placeholder="First Name" />
        <InputField placeholder="Last Name" />
      </div>
      <InputField placeholder="Email Address" />
      <InputField placeholder="Password" />
      <label>
        <input type="radio" />
        I agree with terms and conditions
      </label>
      <Button type="submit" onPress={handleSubmit}>
        Sign up
      </Button>
      <div className="social-icons">
        {IconNames.map((IconName, index) => (
          <Button key={index.id}>
            <Icon fontAwesomeIconName={IconName} />
          </Button>
        ))}
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {};

export default RegisterForm;
