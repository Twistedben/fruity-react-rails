import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    if (this.state.editable) {
      console.log(this);
      console.log(this.name);
      console.log(this.name.value);
      let name = this.name.value;
      let description = this.description.value;
      let fruit = { id: id, name: name, description: description };
      this.props.handleUpdate(fruit);
    }
    console.log(this);
    console.log(this.props.fruit.name);
    console.log(this.props.fruit.description);
    this.setState({
      editable: !this.state.editable
    });
  }

  render() {
    let name = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.name = input)}
        defaultValue={this.props.fruit.name}
      />
    ) : (
      <h3>{this.props.fruit.name}</h3>
    );
    let description = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.description = input)}
        defaultValue={this.props.fruit.description}
      />
    ) : (
      <p>{this.props.fruit.description}</p>
    );
    return (
      <div>
        {name}
        {description}
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => this.handleEdit(this.props.fruit.id)}
        >
          <EditIcon />
          {this.state.editable ? "Submit" : "Edit"}
        </IconButton>
        <IconButton
          variant=""
          color="secondary"
          onClick={() => this.props.handleDelete(this.props.fruit.id)}
        >
          <DeleteIcon />
          Delete
        </IconButton>
      </div>
    );
  }
}

export default Fruit;
