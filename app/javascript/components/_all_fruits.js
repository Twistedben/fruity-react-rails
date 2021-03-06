import React from "react";

import Fruit from "components/_fruit";

const AllFruits = props => {
  var fruits = props.fruits.map(fruit => {
    return (
      <div key={fruit.id}>
        <Fruit
          fruit={fruit}
          handleUpdate={props.handleUpdate}
          handleDelete={props.handleDelete}
        />
      </div>
    );
  });
  return <div>{fruits}</div>;
};
export default AllFruits;
