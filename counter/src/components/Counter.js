import React, { Component } from 'react'
import IncrementButton from './IncrementButton'

class Counter extends Component {

  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log(`componentDidMount counter=${this.state.counter}`)
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate counter=${this.state.counter}`)
  }

  handleIncrement = (incrementVal) => {
    this.setState({
      counter: this.state.counter + incrementVal
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <IncrementButton handleClick={this.handleIncrement} incrementVal={1}></IncrementButton>
        <IncrementButton handleClick={this.handleIncrement} incrementVal={10}></IncrementButton>
        <IncrementButton handleClick={this.handleIncrement} incrementVal={100}></IncrementButton>
        <IncrementButton handleClick={this.handleIncrement} incrementVal={1000}></IncrementButton>
        <br />
        <span>{this.state.counter}</span>
      </div>
    )
  }
}

export default Counter