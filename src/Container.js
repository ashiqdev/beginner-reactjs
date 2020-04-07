import React, { useState } from "react";
import Clock from "./Clock";
import Cover from "./Cover";

const Container = () => {
  const [clockStatus, setClockStatus] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setClockStatus(!clockStatus);
  };
  return (
    <div className="container">
      {clockStatus ? <Clock /> : <Cover />}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default Container;
