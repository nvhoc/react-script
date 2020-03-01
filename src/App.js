import React, { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("render parent");
  let [count, setCount] = useState(0);
  // State for our counter
  return (
    <div>
      <div>{count}</div>
      <Child
        onClick={e => {
          console.log(count);
          count++;
          setCount(count);
        }}
      />
    </div>
  );
}

const Child = React.memo(
  function({ onClick }) {
    console.log("render child");
    return <button onClick={onClick} />;
  },
  () => {
    return true;
  }
);
