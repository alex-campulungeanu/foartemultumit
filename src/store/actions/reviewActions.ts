// export const ACTION_TYPES = {
//     GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
//     GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
//     GET_PRODUCTS_FAILED: 'GET_PRODUCTS_FAILED',
//     GET_PRODUCT_REQUEST: 'GET_PRODUCT_REQUEST',
//     GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
//     GET_PRODUCT_FAILED: 'GET_PRODUCT_FAILED',
//     ADD_PRODUCT_REQUEST: 'ADD_PRODUCT_REQUEST',
//     ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
//     ADD_PRODUCT_FAILED: 'ADD_PRODUCT_FAILED',
//     CHANGE_PRODUCT_STATUS_REQUEST: 'CHANGE_PRODUCT_STATUS_REQUEST',
//     CHANGE_PRODUCT_STATUS_SUCCESS: 'CHANGE_PRODUCT_STATUS_SUCCESS',
//     CHANGE_PRODUCT_STATUS_FAILED: 'CHANGE_PRODUCT_STATUS_FAILED',
//     DELETE_PRODUCT_REQUEST: 'DELETE_PRODUCT_REQUEST',
//     DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
//     DELETE_PRODUCT_FAILED: 'DELETE_PRODUCT_FAILED',
//     // GET_VENDORS_REQUEST: 'GET_VENDORS_REQUEST',
//     // GET_VENDORS_SUCCESS: 'GET_VENDORS_SUCCESS',
//     // GET_VENDORS_FAILED: 'GET_VENDORS_FAILED',
//     RESET_PRODUCTS: 'RESET_PRODUCTS',
//     RESET_DELETE_PRODUCT: 'RESET_DELETE_PRODUCT',
//     RESET_ERRORS: 'RESET_ERRORS',
// }

export const addTotalReview = (total) => {
  return (dispatch) => {
    dispatch({
      type: 'totalReviews',
      payload: total
    })
  }
}

export const addFilteredReview = (total) => {
  return (dispatch) => {
    dispatch({
      type: 'filteredReviews',
      payload: total
    })
  }
}

export const resetReview = () => {
  return (dispatch) => {
    dispatch({
      type: 'reset'
    })
  }
}