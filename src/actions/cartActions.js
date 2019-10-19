const addToCart = (cart) => {
    return {
        type: "ADD_CART",
        payLoad: cart
    }
}

const updateCart = (id, unit) => {
    return {
        type: "UPDATE_CART",
        id: id,
        unit:unit
    }
}

const removeCart = (id) => {
    return {
        type: 'DELETE_CART',
        payLoad: id,
    }
}

export {addToCart, removeCart, updateCart};