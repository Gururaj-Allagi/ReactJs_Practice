import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Guru', age: '26' },
      { name: "Jagu", age: '25' }
    ],
    name: 'test'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Gururaj', age: '28' },
        { name: "Jagadeesh", age: '25' }
      ]
    })
  }

  switchName = () => {
    console.log("Gururaj")
  }

  render() {
    return (
      <div className="App">
        <h1>This is Gururaj</h1>
        <button onClick={this.switchNameHandler}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>Hobbies are</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;