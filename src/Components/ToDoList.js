import React, { Component } from 'react';

class ToDoList extends Component {

  render() {
    let todoes = this.props.todoes;

    return (<div>
        <div key={this.props.index} className="item">
          <div className="contentbox">{this.props.index+1}) {this.props.todo}</div>
          <div className="deletebox" onClick={this.props.click}>X</div>
        </div>
    </div>
    )
  }

}

export default ToDoList;