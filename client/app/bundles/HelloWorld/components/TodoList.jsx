import React, { Component } from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => (
  <ul>
    {
      this.props.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
      })
    }
  </ul>
)

export default TodoList