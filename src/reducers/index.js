import filterReducer from './filterReducer'
import contactsReducer from './contactsReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer
})

export default reducers
