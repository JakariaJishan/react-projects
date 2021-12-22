export const addToCart = ( id, name) => {
    return {
        type: 'ADD_TO_CART',
        name, id
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
}