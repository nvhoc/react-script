import React, { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  console.log("render parent");
  let [count, setCount] = useState(0);
  // State for our counter
  const onClick = useCallback(() => {
    setCount(count++);
  }, []);
  return (
    <div>
      <div>{count}</div>
      <Child onClick={onClick} />
    </div>
  );
}

const Child = React.memo(function({ onClick }) {
  console.log("render child");
  return <button onClick={onClick} />;
});
