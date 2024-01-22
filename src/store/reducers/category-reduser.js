export const category = (state = { type: 0, sort: 0 }, action) => {
  switch (action.type) {
    case 'TOGGLE_INDEX': {
      return { ...state, type: action.payload }
    }
    case 'TOGGLE_INDEX-SORT': {
      return { ...state, sort: action.payload }
    }
    default: {
      return { type: 0, sort: 'rating' }
    }
  }
}