import React, { Component } from 'react'
import IncrementButton from './IncrementButton'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log(`componentDidMount count=${this.state.count}`)
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate count=${this.state.count}`)
  }

  handleIncrement = (incrementVal) => {
    this.setState((prevState) => ({
      count: prevState.count + incrementVal
    }))
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <IncrementButton incrementVal={1} doIncrementCount={this.handleIncrement} />
        <IncrementButton incrementVal={10} doIncrementCount={this.handleIncrement} />
        <IncrementButton incrementVal={100} doIncrementCount={this.handleIncrement} />
        <IncrementButton incrementVal={1000} doIncrementCount={this.handleIncrement} />
        <br />
        <span>{this.state.count}</span>
      </div>
    )
  }
}

export default Counter