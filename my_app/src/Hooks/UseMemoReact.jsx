import { useMemo, useState } from "react";

function ExpensiveComponent({ num }) {
  const computeExpensiveValue = (n) => {
    return n ** 5
  }

  const computedValue = useMemo(() => computeExpensiveValue(num), [num]);

  return <div>{computedValue}</div>;
}

const UseMemoReact = () => {
  const [num, setNum] = useState(1);

  return (
    <>
      <ExpensiveComponent num={num} />
      <button className="bg-red-500" onClick={() => setNum(num + 1)}>calculate</button>
    </>
  )
}

export default UseMemoReact;