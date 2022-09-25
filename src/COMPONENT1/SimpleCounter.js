import { useState } from "react";

const Simplecounter = () => {
  const [Count, setcount] = useState(0);
  return (
    <>
      <h2 className="Counter">Counter App</h2>
      <p className="count">{Count}</p>
      <button className="btn1" onClick={() => setcount(Count + 1)}>
        Increment
      </button>
      <button className="btn2" onClick={() => setcount(Count - 1)}>
        Decrement
      </button>
    </>
  );
};
export default Simplecounter;
