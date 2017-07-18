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

const configureStore = (initialState = { todos: [] }) => (
  createStore(todoReducer, initialState)
);

export default configureStore;