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
    this.setState((prevState) => {
      return {todoes: [...prevState.todoes, this.state.inputValue]}
      })
  }

  updateInputValue = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    })
  }

  clickHandler = (index) => {
    let array = [...this.state.todoes];
    array.splice(index,1);
    this.setState({
      todoes: array
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
        </div>{this.state.todoes.map((todo, index) => {
         return <ToDoList todo={todo} click={() => this.clickHandler(index)} index={index}/>
        })}
        
      </div>
    );
  }
}

export default App;
