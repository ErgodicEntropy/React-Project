import { Fragment } from "react";

const numbers = [1, 2, 3, 4, 5];

const cnd = () => {
  return numbers.length === 0 ? <p>no numbers found</p> : numbers[0]; //ternary conditional operator
  return numbers.length === 0 && <p>no numbers found here!s</p>;
};

function clicker(a) {
  console.log(a); //this will refer to the global object that calls the function (regular mode) otherwise undefined (strict mode)
}

function ListGroup() {
  return (
    <>
      <h1> this is a list</h1>
      {numbers.length === 0 && <p>No numbers found</p>};
      <ul className="list-group">
        <li className="list-group item" key={numbers} onClick={clicker(Numbers[0])}>
            Numbers[0]
        </li>        
      </ul>
    </>
  );
}

export default ListGroup;
