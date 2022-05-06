/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './userList.css';

function UserList({ users }) {
  return (
    <table>
      <tr key="header">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Created At</th>
      </tr>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.createdAt}</td>
        </tr>
      ))}
    </table>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })),
};

UserList.defaultProps = {
  users: PropTypes.arrayOf(PropTypes.shape({
    firstname: 'First Name',
    lastname: 'Last Name',
    email: 'E-mail',
    createdAt: 'CreatedAt',
  })),
};

export default UserList;
