/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { UserList } from '../../components';
import { RegisterForm } from '../../forms';
import './register.css';

function Register() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (newUser) => {
    setUsers((currentUsers) => [newUser, ...currentUsers]);
  };

  return (
    <div className="register-page-container">
      <div className="register-form-container">
        <RegisterForm handleSubmit={handleSubmit} />
      </div>
      {users.length > 0 && (
      <div className="user-list-container">
        <UserList users={users} />
      </div>
      )}
    </div>
  );
}

export default Register;
