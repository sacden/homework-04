import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({ counters, ...rest }) => {
  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </div>
  );
};

export default Counters;
