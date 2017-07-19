// import { applyMiddleware, compose, createStore } from 'redux'
import { createStore } from 'redux';
import todoReducer from '../reducers/todoReducer'
// import logger from 'redux-logger'

// let finalCreateStore = compose(
//   applyMiddleware(logger())
// )(createStore)


// export default function configureStore(initialState = { todos: [] }) {
//   return finalCreateStore(reducer, initialState)
// }
let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}

const configureStore = (initialState) => (
  createStore(todoReducer, initialState)
);

export default configureStore;