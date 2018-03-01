import React, { Component } from 'react';

class ToDoList extends Component {

  render() {
    let todoes = this.props.todoes;

    return (<div>{
      todoes.map((todo, index) => 
        <div key={index} className="form-style item">{index+1}) {todo}</div>
      )
    }
    </div>
    )
  }

}

export default ToDoList;