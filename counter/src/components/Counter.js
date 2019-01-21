import React, { Component } from 'react'

const Button = ({ increment }) => {
  return <button>+{increment}</button>
}

class Counter extends Component {

  render() {
    let count = 0

    return (
      <div>
        <h1>Counter</h1>
        <Button increment={1} />
        <Button increment={10} />
        <Button increment={100} />
        <Button increment={1000} />
        <br />
        <span>{count}</span>
      </div>
    )
  }
}

export default Counter