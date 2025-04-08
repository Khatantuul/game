import React from "react";
import ComponentA from "./A";
import ComponentB from "./B";
import ErrorBoundary from "./ErrorBoundary";
function HocExercise() {
  return (
    <div>
      <ComponentA />
      <ErrorBoundary>
        <ComponentB />
      </ErrorBoundary>
    </div>
  );
}

export default HocExercise;
