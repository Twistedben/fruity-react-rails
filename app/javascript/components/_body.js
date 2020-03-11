import React from "react";
import AllFruits from "components/_all_fruits";
import NewFruit from "components/_new_fruit";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewFruit = this.addNewFruit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateFruit.bind(this);
  }

  handleFormSubmit(name, description) {
    let body = JSON.stringify({
      fruit: { name: name, description: description }
    });
    // alert(`Fruit name: ${name}; Description: ${description}; Body: ${body}`)
    fetch("http://localhost:3000/api/v1/fruits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(fruit => {
        this.addNewFruit(fruit);
      });
  }

  addNewFruit(fruit) {
    this.setState({ fruits: this.state.fruits.concat(fruit) });
  }

  updateFruit(fruit) {
    let updatedFruits = this.state.fruits.filter(fru => fru.id !== fruit.id);
    updatedFruits.push(fruit);
    this.setState({ fruits: updatedFruits });
  }

  handleUpdate(fruit) {
    console.log(fruit);
    console.log(`Stringifyied fruit: ${JSON.stringify(fruit)}`);
    fetch(`/api/v1/fruits/${fruit.id}`, {
      method: "PUT",
      body: JSON.stringify({ fruit: fruit }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.updateFruit(fruit);
      });
  }

  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/fruits/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.deleteFruit(id, response);
    });
  }

  deleteFruit(id, response) {
    console.log(response);
    let newFruits = this.state.fruits.filter(fruit => fruit.id !== id);
    this.setState({
      fruits: newFruits
    });
  }

  componentDidMount() {
    fetch("/api/v1/fruits.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ fruits: data });
      });
  }

  render() {
    return (
      <div>
        <NewFruit handleFormSubmit={this.handleFormSubmit} />
        <AllFruits
          fruits={this.state.fruits}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
export default Body;
