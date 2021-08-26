import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Tэгов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <>
      {renderTags()}
      <span className={getBageclasses()}>{formCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm">
        Decrement
      </button>
    </>
  );
};

export default Counter;
