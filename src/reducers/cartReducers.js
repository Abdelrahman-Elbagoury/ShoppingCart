
export const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return { cart: [...state.cart, action.payLoad] }
        case 'DELETE_CART':
            let currentCartDelete = [...state.cart]
            let indexOfDeletedCart = currentCartDelete.findIndex((book) => {
                return book.id === action.payLoad
            })
            return {
                cart: [...currentCartDelete.slice(0, indexOfDeletedCart),
                ...currentCartDelete.slice(indexOfDeletedCart + 1)]
            };
        case 'UPDATE_CART':
            const currentBookToUpdate = [...state.cart]
            const indexOfUpdatedBook = currentBookToUpdate.findIndex(function (book) {
                return book.id === action.id
            })
            const newBookToUpdate = currentBookToUpdate[indexOfUpdatedBook];
            newBookToUpdate.quantity = newBookToUpdate.quantity + action.unit;
            currentBookToUpdate[indexOfUpdatedBook] = newBookToUpdate;
            state.cart = currentBookToUpdate;
            return {
                state, cart: [...state.cart]
            }
        default:
            return state;
    }
}