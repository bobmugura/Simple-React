import React, { Component } from 'react'

class IncrementButton extends Component {
  handleClick = () => {
    this.props.doIncrementCount(this.props.incrementVal)
  }

  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementVal}</button>
    )
  }
}

export default IncrementButton