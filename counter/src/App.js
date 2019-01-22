import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends Component {

  text = 'Counter'

  render() {
    return (
      <div className="App">
        <Counter text={this.text} />
      </div>
    );
  }
}

export default App;
