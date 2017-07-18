import React, { Component } from 'react'

const TodoItem = (props) => (
  // handleComplete() {
  //   this.props.actions.completeTodo(this.props.todo.id)
  // }

  // handleDelete() {
  //   this.props.actions.deleteTodo(this.props.todo.id)
  // }

  <li>
    <div>{this.props.todo.text}</div>
    <button onClick={this.props.actions.completeTodo(this.props.todo.id)}>Mark as completed</button>
    <button onClick={this.props.actions.deleteTodo(this.props.todo.id)}>Delete todo</button>
  </li>
);

export default TodoItem
