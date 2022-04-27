/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Icon, UserList, FormField } from '../../components';
import { SignUpForm } from '../../forms';
import './register.css';

function Register() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values) => {
    setUsers((currentUsers) => [values, ...currentUsers]);
  };

  return (
    <div className="container">
      <div className="register-form-container">
        <SignUpForm handleSubmit={handleSubmit} />
      </div>
      <div className="userList-container">
        {users.length > 0 && <UserList users={users} />}
      </div>
    </div>
  );
}

export default Register;
