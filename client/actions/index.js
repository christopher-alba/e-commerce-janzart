export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    item
  }
}

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export const updateQuantitiesAction = cart => {
  return {
    type: 'UPDATE_QUANTITIES',
    cart
  }
}

export function updateQuantities (cart) {
  return (dispatch) => {
    dispatch(updateQuantitiesAction(cart))
  }
}
