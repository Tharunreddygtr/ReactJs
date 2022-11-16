import React from "react";

function ChildComponent(props) {
    return (
      <div className="tharun"> hello {props.name} and my age is {props.age }</div>
    );
  }
  
  export default ChildComponent;