import React from 'react';
import ReactDOM from 'react-dom';
import Body from 'components/_body';

const Welcome = (props) => {
  return (
    <div className="center">
      <h1>Fruits!</h1>
      <Body />
    </div>
  )
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})