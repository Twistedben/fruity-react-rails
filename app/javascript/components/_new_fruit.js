import React from 'react';
import { FormKit } from 'formik';

const NewFruit = (props) => {
  let formFields = {}

  return (
    <form onSubmit={(e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset(); }}>
      <label htmlFor="name">Enter Fruit Name</label>
      <br></br>
      <input name="name" ref={input => formFields.name = input} placeholder='Enter the name of the item' />
      <br></br>
      <br></br>
      <label htmlFor="description">Enter Fruit Description</label>
      <br></br>
      <input name="description" ref={input => formFields.description = input} placeholder='Enter a description' />
      <br></br>
      <button>Submit</button>
    </form>
  )
}

export default NewFruit;