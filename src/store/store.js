import { createStore } from 'redux';
import { rootReduser } from './reducers/rootReducer';
import { saveState, loadState } from './persist';

export const cofigureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReduser,
    persistedState
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}
