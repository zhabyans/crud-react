// Reducers adalah tempatnya state

import { combineReducers } from 'redux'
import users from './users'

export default combineReducers({
    users,
})