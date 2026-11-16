import { useState } from "react"

type Props = {}

const Counter = (props: Props) => {

  let count = 0

  const handleCount = () => {
    count++
    console.log(count)
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>
        Incrementa 1
      </button>
    </div>
  )
}

export default Counter