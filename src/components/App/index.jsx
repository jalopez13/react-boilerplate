import React, { Component } from 'react'

class App extends Component {
  func = () => console.log('arrow fucntion');

  render() {
    alert(this.state.count);
    return (
      <div className="app-component">
        Start coding...
      </div>
    )
  }
}

export default App;