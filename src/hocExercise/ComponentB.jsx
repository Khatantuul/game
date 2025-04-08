import React from "react";
import withError from "./withError";

function ComponentB() {
  const person = {
    name: "Khatantuul",
    age: 1,
  };
  return (
    // <div>{person.name}</div>
    <div>{person.name.fullname.lastName}</div>
  );
}

export default withError(ComponentB, (errorMsg) => {
  return <div style={{backgroundColor: 'red'}}>{errorMsg}</div>;
});
