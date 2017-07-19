import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.PureComponent {

  render() {
  	console.log("todo list")
  	console.log(this)
    return (
      <ul>

        {
          this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }

      </ul>
    )
  }

}

export default TodoList