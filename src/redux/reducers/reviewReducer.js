const initialState = {
  totalReviews: [],
  filteredReviews : []
}

const reducer  = (state = initialState, action) => {
  switch (action.type) {
    // case 'deposit':
    //     return state + action.payload
    // case 'withdrway':
    //   return state - action.payload 
    case 'totalReviews':
      return {...state, totalReviews: action.payload}
    case 'filteredReviews':
      return {...state, filteredReviews: action.payload}
    default:
      return state;
  }
}

export default reducer