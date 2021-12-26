export const addToCart = (id, name, price, quantity) => {
    return {
        type: 'ADD_TO_CART',
        id,
        name,
        price,
        quantity
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
}

export const incrementCart = (id, quantity) => {
    return {
        type: 'INCREMENT',
        id,
        quantity
    }
}
export const decrementCart = (id, quantity) => {
    return {
        type: 'DECREMENT',
        id,
        quantity
    }
}

export const filterItems = (category) => {
    return {
        type: 'FILTER_ITEMS',
        category
    }
}

