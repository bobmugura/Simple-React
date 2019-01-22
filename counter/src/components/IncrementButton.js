import React, { Component } from 'react'

class IncrementButton extends Component {

  handleClick = () => {
    // console.log(this.props)
    this.props.handleClick(this.props.incrementVal)
  }

  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementVal}</button>
    )
  }
}

export default IncrementButton