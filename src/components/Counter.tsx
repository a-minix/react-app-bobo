import { useState } from "react"

const Counter = () => {

  // const state = useState()

  // console.log(state[0]);
  // console.log(state[1]);

  const [count, setCount] = useState(0)

  // let count = 0
  // const handleCount = () => {
  //   count++
  //   console.log(count);
  // }
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>

  )
}

export default Counter