export const addBook = (item) => ({
  type: 'ADD_BOOK',
  payload: item
})
export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id
})