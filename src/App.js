import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';
import ToDoItem from './Components/ToDoItem';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
    inputValue: '',
    todoes: []
    }
  }
  
  submitHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {return {todoes: [...prevState.todoes, this.state.inputValue]}}
      
      )
    console.log(this.state.todoes)
  }

  updateInputValue = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    console.log(this.state.todoes)
    return (
      <div className="App">
        <div className="form-style">
        <h2>To Do List</h2>
          <form onSubmit={this.submitHandler}>
            <input className="todoinput" type="text" placeholder="Add To Do Item" onChange={this.updateInputValue} />
            <button type="submit">Submit</button>
          </form>
        </div>
        <ToDoList todoes={this.state.todoes} />
      </div>
    );
  }
}

export default App;
