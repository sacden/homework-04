import Counters from "./components/counters";
import NavBar from "./components/navBar";
import React, { useState } from "react";
function App() {
  const [counters, setCounters] = useState([
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Кастрюля" },
  ]);
  const onDelete = (counterId) => {
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
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} counters={counters} />
      </main>
    </div>
  );
}

export default App;
