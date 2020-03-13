import React, { Component } from "react";
import PropTypes from "prop-types";

const Users = props => {
  console.log(props);
  console.log("Rendered users");
  let users = props.users.map(user => {
    return (
      <li key={user.id}>
        <span>{user.f_name}</span> &nbsp;
        {user.l_name}
      </li>
    );
  });
  return (
    <div>
      <h1>Users</h1>
      <ul>{users}</ul>
    </div>
  );
};

export default Users;
