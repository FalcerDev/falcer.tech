import React from "react";

export default function Increment() {
  const [num, setNum] = React.useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        -
      </button>
      <h1>Number Count - {num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </>
  );
}
