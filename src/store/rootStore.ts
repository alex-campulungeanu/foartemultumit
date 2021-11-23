import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from '@src/store/reducers/index'


export const rootStore = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)