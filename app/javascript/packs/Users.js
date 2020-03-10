import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
const Users = (props) => {
  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{`${user.f_name} ${user.l_name}`}</li>
        ))}
      </ul>
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.array
};
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Users />, document.getElementById('users'))
})
