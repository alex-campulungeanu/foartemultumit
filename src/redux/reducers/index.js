import {combineReducers} from 'redux'
import reviewReducer from '@src/redux/reducers/reviewReducer'

const reducers = combineReducers({
  reviews: reviewReducer
})

export default reducers
