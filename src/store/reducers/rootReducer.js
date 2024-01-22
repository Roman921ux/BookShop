import { combineReducers } from 'redux'
import { category } from './category-reduser'
import { basket } from './basket-reducer'

export const rootReduser = combineReducers({
  category: category,
  basket: basket,
})