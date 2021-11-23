const initialState = {
  totalReviews: [],
  filteredReviews : []
}

const reducer  = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case 'totalReviews':
      return {...state, totalReviews: action.payload}
    case 'filteredReviews':
      return {...state, filteredReviews: action.payload}
    case 'reset':
      return initialState
    default:
      return state;
  }
}

export default reducer