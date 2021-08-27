import React, { useState } from "react";

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  const tags = ["tag1", "tag2", "tag3"];

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBageСlasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Tэгов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBageСlasses()}>{formValue()}</span>
      <button onClick={() => onIncrement(id)} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button onClick={() => onDecrement(id)} className="btn btn-secondary btn-sm">
        Decrement
      </button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
