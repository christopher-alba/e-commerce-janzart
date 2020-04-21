

const cart = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.items.find(itemObj => itemObj.item.id === action.item.id)) {
                let newItemQuantity = state.items.find(itemObj => itemObj.item.id === action.item.id).quantity
                // console.log(newItemQuantity);

                newItemQuantity++
                // console.log(newItemQuantity);
                return {
                    items: state.items.map(itemObj => {
                        if (itemObj.item.id === action.item.id) {
                            console.log("testing match");

                            return {
                                item: action.item, quantity: newItemQuantity
                            }
                        }
                        return item
                    })
                }
            }

            return {

                items: [...state.items, { item: action.item, quantity: 1 }]
            }


        case 'REMOVE_FROM_CART':
            return {
                items: state.items.filter(itemObj => {

                    return itemObj.item.id !== action.item.id

                })
            }

        case 'UPDATE_QUANTITIES':
            console.log(action.cart);

            return {
                items: action.cart
            }
        default:
            return state

    }
}

export default cart
