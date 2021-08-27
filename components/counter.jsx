import React, { useState } from "react";

const Counter = (props) => {
  const tags = ["tag1", "tag2", "tag3"];

  const formValue = () => {
    return props.value === 0 ? "Ноль" : props.value;
  };

  const getBageСlasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Tэгов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBageСlasses()}>{formValue()}</span>
      <button onClick={() => props.onIncrement(props.id)} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button onClick={() => props.onDecrement(props.id)} className="btn btn-secondary btn-sm">
        Decrement
      </button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
