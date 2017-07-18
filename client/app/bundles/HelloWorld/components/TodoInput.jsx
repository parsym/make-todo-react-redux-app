import React, { Component } from 'react'

const TodoInput = (props) => (
  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     inputText: ''
  //   }
  // }

  // handleChange(event) {
  //   this.setState({
  //     inputText: event.target.value
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   this.props.addTodo(this.state.inputText)
  // }

  <div>
    <form onSubmit={this.props.addTodo(this.state.inputText)}>
      <input
        type="text"
        placeholder="Type in your todo"
        value={this.state.inputText}
        onChange={this.setState({
                    inputText: event.target.value
                  })}
      />
      <input type="submit" value="Submit"/>
    </form>
  </div>
);

export default TodoInput
