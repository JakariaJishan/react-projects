export const addToCart = (id, name, price) => {
    return {
        type: 'ADD_TO_CART',
        id,
        name,
        price
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
}