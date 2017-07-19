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
// let initialState = {
  
// }

const configureStore = (initialState) => (
  createStore(todoReducer, { todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }] })
);

export default configureStore;
