import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Кастрюля" },
  ]);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id != counterId);
    setCounters(newCounters);
  };
  const onIncrement = (counterId) => {
    const newIncrement = counters.map((el) => {
      return el.id === counterId ? { ...el, value: el.value + 1 } : { ...el };
    });

    setCounters(newIncrement);
  };

  const onDecrement = (counterId) => {
    const newIncrement = counters.map((el) => {
      return el.id === counterId && el.value > 0 ? { ...el, value: el.value - 1 } : { ...el };
    });

    setCounters(newIncrement);
  };
  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} onDelete={handleDelete} {...counter} onIncrement={onIncrement} onDecrement={onDecrement} />
      ))}
    </div>
  );
};

export default Counters;
