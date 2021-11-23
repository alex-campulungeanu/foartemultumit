import {combineReducers} from 'redux'
import reviewReducer from '@store/reducers/reviewReducer'

const reducers = combineReducers({
  reviews: reviewReducer
})

export type RootState  = ReturnType<typeof reducers>

export default reducers
