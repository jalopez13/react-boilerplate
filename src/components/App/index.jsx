import React, { Component } from 'react'

class App extends Component {
  func = () => console.log('arrow fucntion');

  render() {
    return (
      <div className="app-component">
        <h1>React Rocks!</h1>
      </div>
    )
  }
}

export default App;