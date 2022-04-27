/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './userList.css';

function UserList({ users }) {
  return (
    <table style={{ width: '100%' }}>
      <tr key="header">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Created At</th>
      </tr>
      {users.map((user) => (
        <tr>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.createdAt}</td>
        </tr>
      ))}
    </table>
  );
}

UserList.propTypes = {};

export default UserList;
