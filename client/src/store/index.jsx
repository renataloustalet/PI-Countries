import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/index'
import thunk from 'redux-thunk'

var store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store;