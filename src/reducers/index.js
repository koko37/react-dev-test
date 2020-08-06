import filterReducer from './filterReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  filter: filterReducer,
})

export default reducers
