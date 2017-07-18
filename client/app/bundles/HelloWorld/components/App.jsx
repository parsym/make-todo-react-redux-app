import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as actions from '../actions/todoActionCreators'

const App = (props) => (
	<div>
		<h1>Todo List</h1>
		<TodoList actions={this.props.actions} todos={this.props.todos}/>
	 </div>
);

export default App;
