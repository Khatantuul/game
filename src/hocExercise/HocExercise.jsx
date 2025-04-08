import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ErrorBoundary from "./ErrorBoundary";
import ComponentC from "./ComponentC";
function HocExercise() {
  return (
    <div>
      <ComponentA />
      {/* <ErrorBoundary> */}
      <ComponentB />
      {/* </ErrorBoundary> */}
      <ComponentC />
    </div>
  );
}

export default HocExercise;
